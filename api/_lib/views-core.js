// Blog goruntulenme sayaci: Vercel fonksiyonu (api/views.js) ve yerel sunucu
// (tools/serve.mjs) ayni mantigi kullanir; sadece depolama katmani degisir.
'use strict';

const crypto = require('node:crypto');

const ZSET = 'blog:views';
const DEDUPE_SECONDS = 30 * 60; // ayni ziyaretci ayni yaziyi 30 dk icinde tekrar saydirmaz
const BOT_UA = /bot|crawl|spider|slurp|preview|facebookexternalhit|headless|lighthouse|curl|wget|python|axios|node-fetch/i;

// Vercel Marketplace (Upstash for Redis) KV_* adlarini, dogrudan Upstash
// entegrasyonu UPSTASH_* adlarini verir; ikisi de desteklenir.
function upstashStore(env = process.env) {
  const url = env.KV_REST_API_URL || env.UPSTASH_REDIS_REST_URL;
  const token = env.KV_REST_API_TOKEN || env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  async function pipeline(commands) {
    const res = await fetch(`${url.replace(/\/$/, '')}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(commands),
    });
    if (!res.ok) throw new Error(`Upstash ${res.status}`);
    const out = await res.json();
    for (const r of out) if (r.error) throw new Error(`Upstash: ${r.error}`);
    return out.map((r) => r.result);
  }

  return {
    async claim(key, seconds) {
      const [r] = await pipeline([['SET', key, '1', 'NX', 'EX', String(seconds)]]);
      return r === 'OK';
    },
    async incr(slug) {
      const [r] = await pipeline([['ZINCRBY', ZSET, '1', slug]]);
      return Number(r);
    },
    async get(slugs) {
      const [r] = await pipeline([['ZMSCORE', ZSET, ...slugs]]);
      return slugs.map((_, i) => Number(r[i] || 0));
    },
    async top(n) {
      const [r] = await pipeline([['ZREVRANGE', ZSET, '0', String(n - 1), 'WITHSCORES']]);
      const out = [];
      for (let i = 0; i < r.length; i += 2) out.push({ slug: r[i], views: Number(r[i + 1]) });
      return out;
    },
  };
}

// Yerel gelistirme/test icin bellek ici depo.
function memoryStore() {
  const views = new Map();
  const claims = new Map();
  return {
    async claim(key, seconds) {
      const now = Date.now();
      if ((claims.get(key) || 0) > now) return false;
      claims.set(key, now + seconds * 1000);
      return true;
    },
    async incr(slug) {
      views.set(slug, (views.get(slug) || 0) + 1);
      return views.get(slug);
    },
    async get(slugs) {
      return slugs.map((s) => views.get(s) || 0);
    },
    async top(n) {
      return [...views].sort((a, b) => b[1] - a[1]).slice(0, n).map(([slug, v]) => ({ slug, views: v }));
    },
  };
}

function send(res, status, body, cache) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', cache || 'no-store');
  res.end(JSON.stringify(body));
}

function clientIp(req) {
  const fwd = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return fwd || req.headers['x-real-ip'] || (req.socket && req.socket.remoteAddress) || '';
}

// slugs: yayindaki yazilarin listesi. Listede olmayan anahtar yazilamaz/okunamaz.
function createHandler({ store, slugs }) {
  const known = new Set(slugs);

  return async function handler(req, res) {
    // Depo baglanmadiysa 200 + disabled: tarayici konsolunda hata olusmasin.
    if (!store) return send(res, 200, { disabled: true });
    const url = new URL(req.url, 'http://localhost');
    try {
      if (req.method === 'POST') {
        let body = req.body;
        if (typeof body === 'string') body = JSON.parse(body || '{}');
        const slug = body && body.slug;
        if (!known.has(slug)) return send(res, 400, { error: 'unknown slug' });
        const ua = String(req.headers['user-agent'] || '');
        if (!ua || BOT_UA.test(ua)) {
          const [views] = await store.get([slug]);
          return send(res, 200, { slug, views, counted: false });
        }
        // IP adresi saklanmaz: gunluk tuzla ozetlenir, 30 dk sonra silinir.
        const day = new Date().toISOString().slice(0, 10);
        const id = crypto.createHash('sha256').update(`${clientIp(req)}|${ua}|${slug}|${day}`).digest('hex').slice(0, 32);
        const counted = await store.claim(`blog:seen:${id}`, DEDUPE_SECONDS);
        const views = counted ? await store.incr(slug) : (await store.get([slug]))[0];
        return send(res, 200, { slug, views, counted });
      }
      if (req.method === 'GET') {
        const cache = 'public, max-age=0, s-maxage=60, stale-while-revalidate=300';
        const top = Number(url.searchParams.get('top'));
        if (top) {
          const list = (await store.top(Math.min(Math.max(top, 1), 20) + 5)).filter((x) => known.has(x.slug));
          return send(res, 200, { top: list.slice(0, Math.min(top, 20)) }, cache);
        }
        const wanted = String(url.searchParams.get('slugs') || '')
          .split(',')
          .filter((s) => known.has(s))
          .slice(0, 50);
        if (!wanted.length) return send(res, 400, { error: 'slugs required' });
        const counts = await store.get(wanted);
        const views = {};
        wanted.forEach((s, i) => (views[s] = counts[i]));
        return send(res, 200, { views }, cache);
      }
      res.setHeader('Allow', 'GET, POST');
      return send(res, 405, { error: 'method not allowed' });
    } catch (err) {
      console.error(err);
      return send(res, 502, { error: 'store unavailable' });
    }
  };
}

module.exports = { createHandler, upstashStore, memoryStore, BOT_UA };
