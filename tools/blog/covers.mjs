// Yazi kapak/paylasim gorselleri (1200x630 JPEG). Bir kez uretilir ve
// content/blog/covers/ altinda saklanir; yeniden uretmek icin dosyayi silin
// ya da `npm run build -- --covers` kullanin.
import fs from 'node:fs';
import path from 'node:path';
import { esc } from './util.mjs';

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const cands = [
    '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  ];
  return cands.find((c) => fs.existsSync(c));
}

function coverHtml({ title, label, fontDir, icon }) {
  const f = (w, sub) => `url("file://${fontDir}/poppins-${sub}-${w}-normal.woff2")`;
  const faces = [400, 600, 700]
    .flatMap((w) => ['latin', 'latin-ext'].map((s) => `@font-face{font-family:P;font-weight:${w};src:${f(w, s)}}`))
    .join('');
  const size = title.length > 70 ? 54 : title.length > 45 ? 62 : 70;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${faces}
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;font-family:P,sans-serif;color:#fff;overflow:hidden;
    background:radial-gradient(circle at 88% 12%,rgba(242,64,128,.55),transparent 42%),radial-gradient(circle at 8% 110%,rgba(242,64,128,.35),transparent 40%),linear-gradient(140deg,#41246D,#2E1850 70%)}
  .ring{position:absolute;right:-90px;top:-90px;width:420px;height:420px;border-radius:50%;border:48px solid rgba(255,255,255,.07)}
  .icon{position:absolute;right:70px;bottom:70px;width:210px;height:210px;opacity:.16}
  .box{position:absolute;left:80px;top:78px;right:300px;bottom:80px;display:flex;flex-direction:column}
  .zig{width:120px;height:16px;background:linear-gradient(135deg,#F24080 25%,transparent 25%) -8px 0/16px 16px,linear-gradient(225deg,#F24080 25%,transparent 25%) -8px 0/16px 16px;margin-bottom:26px}
  .chip{align-self:flex-start;background:#F24080;border-radius:999px;padding:8px 22px;font-weight:600;font-size:24px;letter-spacing:.04em;text-transform:uppercase}
  h1{font-weight:700;font-size:${size}px;line-height:1.14;margin-top:28px;letter-spacing:-.01em}
  .foot{margin-top:auto;display:flex;align-items:center;gap:18px;font-size:26px;color:#EDE6F7}
  .foot b{color:#fff;font-weight:700}
  </style></head><body><div class="ring"></div><img class="icon" src="${icon}" alt="">
  <div class="box"><div class="zig"></div>${label ? `<span class="chip">${esc(label)}</span>` : ''}<h1>${esc(title)}</h1>
  <div class="foot"><b>BÖTE Blog</b><span>bote.web.tr/blog</span></div></div></body></html>`;
}

// items: [{ slug, title, label }]
export async function makeCovers(items, { root, outDir, force = false }) {
  const todo = items.filter((it) => force || !fs.existsSync(path.join(outDir, `${it.slug}.jpg`)));
  if (!todo.length) return [];
  const chrome = findChrome();
  if (!chrome) {
    console.warn(`! Kapak gorseli uretilemedi (Chrome bulunamadi, CHROME_PATH verin): ${todo.map((t) => t.slug).join(', ')}`);
    return [];
  }
  const { default: puppeteer } = await import('puppeteer-core');
  const fontDir = path.join(root, 'tools/node_modules/@fontsource/poppins/files');
  const icon = `data:image/png;base64,${fs.readFileSync(path.join(root, 'assets/img/educator-fabicon-300x300.png')).toString('base64')}`;
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: chrome, args: ['--no-sandbox', '--allow-file-access-from-files'] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
    for (const it of todo) {
      const tmp = path.join(outDir, `.${it.slug}.html`);
      fs.writeFileSync(tmp, coverHtml({ ...it, fontDir, icon }));
      await page.goto(`file://${tmp}`, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(outDir, `${it.slug}.jpg`), type: 'jpeg', quality: 86 });
      fs.unlinkSync(tmp);
      console.log(`  kapak: ${it.slug}.jpg`);
    }
  } finally {
    await browser.close();
  }
  return todo.map((t) => t.slug);
}
