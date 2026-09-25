// Yerel sunucu: vercel.json (cleanUrls, trailingSlash:false, redirects, headers)
// ve .vercelignore kurallarini taklit eder; yayina cikmayan dosyalari 404 verir.
// /api/views bellek ici depo ile calisir.
//   node serve.mjs            -> http://localhost:4173
import http from 'node:http';
import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';
import ignore from 'ignore';

const require = createRequire(import.meta.url);
export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ttf': 'font/ttf', '.eot': 'application/vnd.ms-fontobject', '.pdf': 'application/pdf', '.webmanifest': 'application/manifest+json',
};

// Vercel kaynak desenini (path-to-regexp alt kumesi) RegExp'e cevirir.
export function sourceToRegex(source) {
  let re = '';
  const names = [];
  for (let i = 0; i < source.length; ) {
    const m = source.slice(i).match(/^:([A-Za-z_]\w*)(\((?:[^()\\]|\\.)*\))?([*+?])?/);
    if (m) {
      names.push(m[1]);
      const inner = m[2] ? m[2].slice(1, -1) : '[^/]+';
      if (m[3] === '*') {
        // "/:path*" -> istege bagli, cok parcali
        if (re.endsWith('/')) re = re.slice(0, -1) + `(?:/(${inner === '[^/]+' ? '.*' : inner}))?`;
        else re += `(${inner === '[^/]+' ? '.*' : inner})?`;
      } else re += `(${inner})`;
      i += m[0].length;
      continue;
    }
    if (source[i] === '\\') { re += source.slice(i, i + 2); i += 2; continue; }
    const g = source.slice(i).match(/^\((?:[^()\\]|\\.)*\)/);
    if (g) { re += g[0]; names.push(String(names.length)); i += g[0].length; continue; }
    re += source[i].replace(/[.+?^${}|[\]\\]/g, '\\$&');
    i++;
  }
  return { regex: new RegExp(`^${re}$`), names };
}

export function loadConfig(root = ROOT) {
  const cfg = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
  const ig = ignore().add(fs.readFileSync(path.join(root, '.vercelignore'), 'utf8'));
  ig.add(['.git', '.vercelignore', 'tools', 'node_modules']);
  const redirects = (cfg.redirects || []).map((r) => ({ ...r, ...sourceToRegex(r.source) }));
  const headers = (cfg.headers || []).map((h) => ({ ...h, ...sourceToRegex(h.source) }));
  return { cfg, ig, redirects, headers };
}

// Yayina cikan dosya listesi (Vercel'e yuklenecek olanlar).
export function deployedFiles(root = ROOT, ig = loadConfig(root).ig) {
  const out = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
      const rel = dir ? `${dir}/${e.name}` : e.name;
      if (ig.ignores(e.isDirectory() ? `${rel}/` : rel)) continue;
      if (e.isDirectory()) walk(rel);
      else out.push(rel);
    }
  })('');
  return out;
}

function fill(dest, names, match) {
  return dest.replace(/:([A-Za-z_]\w*)\*?/g, (_, n) => {
    const i = names.indexOf(n);
    return i >= 0 && match[i + 1] != null ? match[i + 1] : '';
  });
}

export function createServer(opts = {}) {
  const { root = ROOT, store } = opts;
  const { cfg, ig, redirects, headers } = loadConfig(root);
  const files = new Set(deployedFiles(root, ig));
  const { createHandler, memoryStore } = require(path.join(root, 'api/_lib/views-core.js'));
  let slugs = [];
  try { slugs = JSON.parse(fs.readFileSync(path.join(root, 'api/_lib/posts.json'), 'utf8')); } catch {}
  const views = createHandler({ store: store === undefined ? memoryStore() : store, slugs });

  function resolveFile(p) {
    const rel = decodeURIComponent(p).replace(/^\/+/, '');
    // api/ altindaki dosyalar Vercel'de fonksiyondur, statik sunulmaz.
    if (rel.startsWith('api/')) return undefined;
    const cands = rel === '' ? ['index.html'] : [rel, `${rel}.html`, `${rel}/index.html`];
    return cands.find((c) => files.has(c));
  }

  const handler = async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    let p = url.pathname;
    const setHeaders = (pathname) => {
      for (const h of headers) if (h.regex.test(pathname)) for (const { key, value } of h.headers) res.setHeader(key, value);
    };
    const redirect = (to, code) => { res.statusCode = code; res.setHeader('Location', to); res.end(); };

    if (p.length > 1 && p.endsWith('/') && cfg.trailingSlash === false) return redirect(p.slice(0, -1) + url.search, 308);
    for (const r of redirects) {
      const m = p.match(r.regex);
      if (m) return redirect(fill(r.destination, r.names, m), r.permanent ? 308 : 307);
    }
    if (cfg.cleanUrls && /\.html$/.test(p) && files.has(p.slice(1))) {
      const clean = p.replace(/(\/index)?\.html$/, '') || '/';
      return redirect(clean + url.search, 308);
    }
    if (p === '/api/views') {
      setHeaders(p);
      let body = '';
      req.on('data', (c) => (body += c));
      await new Promise((r) => req.on('end', r));
      req.body = body;
      return views(req, res);
    }
    setHeaders(p);
    const file = resolveFile(p);
    if (!file) {
      res.statusCode = 404;
      res.setHeader('Content-Type', TYPES['.html']);
      return res.end(files.has('404.html') ? fs.readFileSync(path.join(root, '404.html')) : 'Not found');
    }
    if (!res.getHeader('Content-Type')) res.setHeader('Content-Type', TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream');
    res.statusCode = 200;
    if (req.method === 'HEAD') return res.end();
    // Vercel gibi metin dosyalarini sikistir (Lighthouse olcumleri uretime yakin olsun)
    const type = String(res.getHeader('Content-Type') || '');
    if (/text|javascript|json|xml|svg/.test(type) && /\bbr\b/.test(req.headers['accept-encoding'] || '')) {
      res.setHeader('Content-Encoding', 'br');
      res.setHeader('Vary', 'Accept-Encoding');
      return res.end(zlib.brotliCompressSync(fs.readFileSync(path.join(root, file))));
    }
    fs.createReadStream(path.join(root, file)).pipe(res);
  };
  return opts.tls ? https.createServer(opts.tls, handler) : http.createServer(handler);
}

export function listen(opts = {}) {
  const server = createServer(opts);
  return new Promise((resolve) => server.listen(opts.port || 0, '127.0.0.1', () => {
    const { port } = server.address();
    resolve({ server, port, origin: `${opts.tls ? 'https' : 'http'}://127.0.0.1:${port}` });
  }));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT || 4173);
  listen({ port }).then(({ origin }) => console.log(`bote.web.tr yerel: ${origin}`));
}
