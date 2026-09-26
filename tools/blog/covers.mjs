// Yazi gorselleri; bir kez uretilip content/blog/covers/ altinda saklanir:
//   <slug>.jpg      1200x630 paylasim gorseli (baslik + kaynak seridi), og:image ve JSON-LD icin
//   <slug>-art.jpg  1200x400 sayfa gorseli (kategori, anahtar kavramlar ve simge), yazi ve one cikan kartta
// Yeniden uretmek icin dosyayi silin ya da `npm run build -- --covers` kullanin.
import fs from 'node:fs';
import path from 'node:path';
import { esc } from './util.mjs';
import { icon } from './icons.mjs';

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
  const f = (name) => `url("file://${fontDir}/${name}")`;
  return `@font-face{font-family:I;font-weight:100 900;src:${f('inter-latin-opsz-normal.woff2')};unicode-range:U+0000-00FF,U+0131,U+2000-206F}
@font-face{font-family:I;font-weight:100 900;src:${f('inter-latin-ext-opsz-normal.woff2')};unicode-range:U+0100-02BA,U+02BD-02C5,U+1E00-1EFF}`;
}

// Kategoriye ozgu renk (Ahmet 26.09: gorseller yenilensin; monospace yok, ad bote.web.tr).
// Duz koyu zemin + ince nokta deseni; parilti ve dekoratif gecis yok.
const PAL = {
  'egitim-bilimleri': { bg: '#1C1433', ink: '#F3EEFF', accent: '#B9A1FF', soft: '#2B2149' },
  'egitim-teknolojileri': { bg: '#0E2A2B', ink: '#EAFBF7', accent: '#5ED3BE', soft: '#163B3B' },
  'bolum-rehberi': { bg: '#131F3A', ink: '#EEF3FF', accent: '#8DB4FF', soft: '#1D2C4F' },
  kariyer: { bg: '#2A1B0F', ink: '#FFF4E8', accent: '#F2B266', soft: '#3B2817' },
  yuksekogretim: { bg: '#2B1020', ink: '#FFEFF5', accent: '#FF8DB8', soft: '#3E1831' },
  'egitim-fakultesi': { bg: '#11261B', ink: '#EEFBF1', accent: '#8DD6A0', soft: '#1A3627' },
  'uluslararasi-egitim': { bg: '#0D2233', ink: '#EAF6FF', accent: '#72C6F2', soft: '#163248' },
  _: { bg: '#1A1426', ink: '#F1ECF8', accent: '#FF7EAD', soft: '#281E38' },
};
const pal = (cat) => PAL[cat] || PAL._;
const zemin = (c) => `background-color:${c.bg};background-image:radial-gradient(rgba(255,255,255,.07) 1.1px,transparent 1.4px);background-size:24px 24px`;
const buyukIkon = (name, size, stroke, color) => (name ? icon(name, { size, cls: 'bi' }).replace('stroke-width="2"', `stroke-width="${stroke}"`).replace('stroke="currentColor"', `stroke="${color}"`) : '');
const kucukIkon = (name, size, color) => (name ? icon(name, { size, cls: 'ki' }).replace('stroke="currentColor"', `stroke="${color}"`) : '');

function ogHtml({ title, label, cat, iconName, fontDir }) {
  const c = pal(cat);
  const size = title.length > 70 ? 54 : title.length > 45 ? 62 : 70;
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${fontFaces(fontDir)}
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;${zemin(c)};color:${c.ink};font-family:I,sans-serif;overflow:hidden;position:relative}
  .bi{position:absolute;right:-70px;bottom:-90px;opacity:.16}
  .in{position:absolute;inset:66px 76px 60px;display:flex;flex-direction:column}
  .k{display:inline-flex;align-items:center;gap:12px;align-self:flex-start;padding:10px 18px;border-radius:999px;background:${c.soft};color:${c.accent};font:650 22px I}
  h1{font-weight:800;font-size:${size}px;line-height:1.1;letter-spacing:-.035em;margin-top:34px;max-width:900px}
  .foot{margin-top:auto;font:800 30px I;letter-spacing:-.03em}.foot b{color:${c.accent};font-weight:700}
  </style></head><body>${buyukIkon(iconName, 440, 1.1, c.accent)}<div class="in">
  <div class="k">${kucukIkon(iconName, 24, c.accent)}${esc(label)}</div><h1>${esc(title)}</h1>
  <div class="foot">bote<b>.web.tr</b></div>
  </div></body></html>`;
}

// Yazi sayfasi gorseli (1200x400): baslik sayfada zaten var; gorselde kategori ve yazinin
// anahtar kavramlari (etiketler) yer alir, sagda kategori simgesi.
function artHtml({ label, cat, iconName, tags = [], fontDir }) {
  const c = pal(cat);
  const kav = tags.filter((x) => !/^(AGS|KPSS)$/i.test(x)).slice(0, 5);
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${fontFaces(fontDir)}
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:400px;${zemin(c)};color:${c.ink};font-family:I,sans-serif;overflow:hidden;position:relative}
  .in{position:absolute;left:64px;top:56px;bottom:56px;width:720px;display:flex;flex-direction:column;justify-content:center;gap:26px}
  .k{display:inline-flex;align-items:center;gap:10px;align-self:flex-start;font:650 21px I;color:${c.accent}}
  .t{display:flex;flex-wrap:wrap;gap:12px}
  .t span{padding:11px 20px;border-radius:999px;background:${c.soft};border:1px solid rgba(255,255,255,.08);font:600 22px/1.2 I;letter-spacing:-.01em}
  .halka{position:absolute;right:120px;top:50%;width:250px;height:250px;margin-top:-125px;border-radius:50%;background:${c.soft};display:grid;place-items:center;box-shadow:0 0 0 26px rgba(255,255,255,.03),0 0 0 52px rgba(255,255,255,.02)}
  </style></head><body>
  <div class="in"><div class="k">${kucukIkon(iconName, 22, c.accent)}${esc(label)}</div>
  <div class="t">${kav.map((x) => `<span>${esc(x)}</span>`).join('')}</div></div>
  <div class="halka">${buyukIkon(iconName, 132, 1.4, c.accent)}</div>
  </body></html>`;
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
