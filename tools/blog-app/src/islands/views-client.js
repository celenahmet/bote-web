// /api/views istemcisi: ayni andaki istekler tek istekte toplanir; hata olursa sessizce null doner.
const API = '/api/views';
const cache = new Map();
let queue = [];
let timer = null;

async function flush() {
  const batch = queue;
  queue = [];
  timer = null;
  let views = {};
  try {
    const slugs = [...new Set(batch.map(([s]) => s))];
    const r = await fetch(`${API}?slugs=${encodeURIComponent(slugs.join(','))}`);
    views = (await r.json()).views || {};
  } catch {}
  for (const [slug, resolve] of batch) resolve(typeof views[slug] === 'number' ? views[slug] : null);
}

export function getViews(slug) {
  if (!cache.has(slug)) {
    cache.set(slug, new Promise((resolve) => {
      queue.push([slug, resolve]);
      if (!timer) timer = setTimeout(flush, 40);
    }));
  }
  return cache.get(slug);
}

export async function countView(slug) {
  try {
    const r = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug }), keepalive: true });
    const d = await r.json();
    const v = typeof d.views === 'number' ? d.views : null;
    cache.set(slug, Promise.resolve(v));
    return v;
  } catch {
    return null;
  }
}

export async function getTop(n) {
  try {
    const r = await fetch(`${API}?top=${n}`);
    return (await r.json()).top || [];
  } catch {
    return [];
  }
}

export const fmt = (n) => new Intl.NumberFormat('tr-TR').format(n);

export const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
