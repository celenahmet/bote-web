// Yazi gorselleri; bir kez uretilip content/blog/covers/ altinda saklanir:
//   <slug>.jpg      1200x630 paylasim gorseli (baslik + kaynak seridi), og:image ve JSON-LD icin
//   <slug>-art.jpg  1200x400 sayfa gorseli (basliksiz "kaynak takimyildizi"), yazi ve kartlarda
// Yeniden uretmek icin dosyayi silin ya da `npm run build -- --covers` kullanin.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { esc } from './util.mjs';

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  return [
    '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  ].find((c) => fs.existsSync(c));
}

function fontFaces(fontDir) {
  const f = (name) => `url("file://${name.startsWith('jetbrains') ? path.join(fontDir, '../../../node_modules/@fontsource-variable/jetbrains-mono/files') : fontDir}/${name}")`;
  return `@font-face{font-family:B;font-weight:200 800;src:${f('bricolage-grotesque-latin-wght-normal.woff2')};unicode-range:U+0000-00FF,U+0131,U+2000-206F}
@font-face{font-family:B;font-weight:200 800;src:${f('bricolage-grotesque-latin-ext-wght-normal.woff2')};unicode-range:U+0100-02BA,U+02BD-02C5,U+1E00-1EFF}
@font-face{font-family:M;font-weight:100 800;src:${f('jetbrains-mono-latin-wght-normal.woff2')};unicode-range:U+0000-00FF,U+0131,U+2000-206F}
@font-face{font-family:M;font-weight:100 800;src:${f('jetbrains-mono-latin-ext-wght-normal.woff2')};unicode-range:U+0100-02BA,U+02BD-02C5,U+1E00-1EFF}`;
}

const BG = `background:radial-gradient(80% 120% at 100% 0%,rgba(185,161,255,.28),transparent 55%),radial-gradient(70% 110% at 0% 100%,rgba(255,126,173,.30),transparent 55%),#140E1F`;

// Yaziya ozgu, tekrarlanabilir yerlesim (slug'dan turetilen sozde rastgele sayilar)
function rng(seed) {
  let h = crypto.createHash('sha256').update(seed).digest();
  let i = 0;
  return () => {
    if (i >= h.length - 4) { h = crypto.createHash('sha256').update(h).digest(); i = 0; }
    const v = h.readUInt32BE(i) / 0xffffffff;
    i += 4;
    return v;
  };
}

function constellation({ slug, langs, w, h, cx, cy, spread }) {
  const r = rng(slug);
  const nodes = langs.map((lang, i) => {
    const a = (i / langs.length) * Math.PI * 2 + r() * 0.6;
    const d = spread * (0.55 + r() * 0.45);
    return { x: cx + Math.cos(a) * d * 1.9, y: cy + Math.sin(a) * d, lang, n: i + 1 };
  }).map((p) => ({ ...p, x: Math.max(40, Math.min(w - 40, p.x)), y: Math.max(36, Math.min(h - 36, p.y)) }));
  const dust = Array.from({ length: 70 }, () => ({ x: r() * w, y: r() * h, s: 0.6 + r() * 1.6, o: 0.15 + r() * 0.35 }));
  const color = (l) => (l === 'tr' ? '#F2B266' : '#5ED3BE');
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0">
  ${dust.map((d) => `<circle cx="${d.x.toFixed(1)}" cy="${d.y.toFixed(1)}" r="${d.s.toFixed(2)}" fill="#fff" opacity="${d.o.toFixed(2)}"/>`).join('')}
  ${nodes.map((p) => `<line x1="${cx}" y1="${cy}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="${color(p.lang)}" stroke-opacity=".45" stroke-width="1.2"/>`).join('')}
  <circle cx="${cx}" cy="${cy}" r="30" fill="none" stroke="#FF7EAD" stroke-opacity=".35" stroke-width="10"/>
  <circle cx="${cx}" cy="${cy}" r="11" fill="#FF7EAD"/>
  ${nodes.map((p) => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="7" fill="${color(p.lang)}"/>`).join('')}
</svg>`;
}

function ogHtml({ title, label, langs, fontDir }) {
  const size = title.length > 70 ? 56 : title.length > 45 ? 64 : 72;
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${fontFaces(fontDir)}
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;${BG};color:#F1ECF8;font-family:B,sans-serif;overflow:hidden;position:relative}
  .in{position:absolute;inset:72px 80px 64px;display:flex;flex-direction:column}
  .k{font:600 22px M,monospace;letter-spacing:.08em;text-transform:uppercase;color:#FF7EAD}
  h1{font-weight:750;font-size:${size}px;line-height:1.06;letter-spacing:-.03em;margin-top:26px;max-width:1000px}
  .foot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:24px}
  .brand{font:800 34px B;letter-spacing:-.02em}.brand b{color:#FF7EAD}.brand i{font:500 20px M;font-style:normal;color:#A197B5;margin-left:8px}
  .strip{display:flex;gap:8px;align-items:center;font:600 16px M}
  .strip .c{color:#A197B5;margin-right:6px;font-weight:500}
  .b{border:2px solid currentColor;border-radius:8px;padding:4px 7px}.b.en{color:#5ED3BE}.b.tr{color:#F2B266}
  </style></head><body><div class="in">
  <div class="k">${esc(label)}</div><h1>${esc(title)}</h1>
  <div class="foot"><div class="brand">BÖTE<b>.</b><i>blog</i></div>
  <div class="strip"><span class="c">bote.web.tr/blog</span></div></div>
  </div></body></html>`;
}

function artHtml({ slug, label, langs, fontDir }) {
  const w = 1200, h = 400;
  const all = langs.length ? langs : ['en', 'en', 'tr', 'en', 'tr', 'en'];
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${fontFaces(fontDir)}
  *{margin:0}body{width:${w}px;height:${h}px;${BG};overflow:hidden;position:relative;font-family:M,monospace}
  .k{position:absolute;left:44px;top:36px;font:600 15px M;letter-spacing:.1em;text-transform:uppercase;color:#FF7EAD}
  .u{position:absolute;left:44px;bottom:32px;font:500 14px M;color:#A197B5}
  </style></head><body>${constellation({ slug, langs: all, w, h, cx: w * 0.62, cy: h * 0.52, spread: 150 })}
  <div class="k">${esc(label)}</div><div class="u">bote.web.tr/blog</div></body></html>`;
}

// items: [{ slug, title, label, langs }]
export async function makeCovers(items, { root, outDir, force = false }) {
  const jobs = [];
  for (const it of items) {
    if (force || !fs.existsSync(path.join(outDir, `${it.slug}.jpg`))) jobs.push({ file: `${it.slug}.jpg`, w: 1200, h: 630, html: (fd) => ogHtml({ ...it, fontDir: fd }) });
    if (force || !fs.existsSync(path.join(outDir, `${it.slug}-art.jpg`))) jobs.push({ file: `${it.slug}-art.jpg`, w: 1200, h: 400, html: (fd) => artHtml({ ...it, fontDir: fd }) });
  }
  if (!jobs.length) return [];
  const chrome = findChrome();
  if (!chrome) {
    console.warn(`! Gorsel uretilemedi (Chrome bulunamadi, CHROME_PATH verin): ${jobs.map((j) => j.file).join(', ')}`);
    return [];
  }
  const { default: puppeteer } = await import('puppeteer-core');
  const fontDir = path.join(root, 'tools/blog-app/public/fonts');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: chrome, args: ['--no-sandbox', '--allow-file-access-from-files'] });
  try {
    const page = await browser.newPage();
    for (const j of jobs) {
      await page.setViewport({ width: j.w, height: j.h, deviceScaleFactor: 1 });
      const tmp = path.join(outDir, `.${j.file}.html`);
      fs.writeFileSync(tmp, j.html(fontDir));
      await page.goto(`file://${tmp}`, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(outDir, j.file), type: 'jpeg', quality: 86 });
      fs.unlinkSync(tmp);
    }
  } finally {
    await browser.close();
  }
  return jobs.map((j) => j.file);
}
