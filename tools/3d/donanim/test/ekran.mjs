// Önizlemeden ekran görüntüsü alır (geliştirme aracı; görüntüler repoya girmez, scratchpad'e yazılır).
//   node tools/3d/donanim/test/ekran.mjs --cikti=<klasor> [--adim=a,b | tum] [--en=1280 --boy=720] [--telefon] [--gorunum=ustten]
//        [--kesif] [--eylem=ad:bekleme_ms,...] [--ek=ad] [--port=4197] [--dpr=1] [--bekle=900]
//        [--kutu=x0,y0,z0,x1,y1,z1 --yon=x,y,z]   serbest kadraj (adımın kamerasını ezer; --ek ile dosya adı verilir)
// Önkoşul: tools/3d/donanim/onizleme.mjs derlenmiş ve `cd tools && PORT=4197 node serve.mjs` çalışıyor.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire('/Users/ahmetcelen/Developer/bote-web/tools/package.json');
const puppeteer = require('puppeteer-core');
const arg = Object.fromEntries(process.argv.slice(2).map((a) => { const [k, ...v] = a.replace(/^--/, '').split('='); return [k, v.length ? v.join('=') : true]; }));
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = arg.port || 4197;
const en = Number(arg.en || (arg.telefon ? 390 : 1280)), boy = Number(arg.boy || (arg.telefon ? 844 : 720));
const klasor = arg.cikti || '.';
fs.mkdirSync(klasor, { recursive: true });

const tarayici = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'] });
const sayfa = await tarayici.newPage();
await sayfa.setViewport({ width: en, height: boy, deviceScaleFactor: Number(arg.dpr || 1), isMobile: Boolean(arg.telefon), hasTouch: Boolean(arg.telefon) });
const konsol = [];
sayfa.on('console', (m) => { if (['error', 'warning'].includes(m.type())) konsol.push(`${m.type()}: ${m.text()}`); });
sayfa.on('pageerror', (e) => konsol.push(`sayfa hatası: ${e.message}`));
sayfa.on('requestfailed', (r) => konsol.push(`istek başarısız: ${r.url()}`));
const url = `http://localhost:${port}/3d/donanim-onizleme/?olcum${arg.kesif ? '&kesif' : ''}${arg.adim && arg.adim !== 'tum' ? '&adim=' + String(arg.adim).split(',')[0] : ''}`;
await sayfa.goto(url, { waitUntil: 'load' });
try { await sayfa.waitForFunction('window.__hazir === true', { timeout: 60000 }); } catch (e) {
  konsol.push('hazır olmadı: ' + e.message);
  console.log('konsol:', JSON.stringify(konsol.slice(0, 30), null, 1));
  await tarayici.close(); process.exit(1);
}
const bekle = (ms) => new Promise((r) => setTimeout(r, ms));
await bekle(600);

const kimlikler = !arg.adim || arg.adim === 'tum' ? await sayfa.evaluate('window.__donanim.adimlar') : String(arg.adim).split(',');
for (const id of kimlikler) {
  await sayfa.evaluate(`window.__donanim.adimaGit(${JSON.stringify(id)}, true)`);
  if (arg.gorunum) await sayfa.evaluate(`window.__donanim.gorunumSec(${JSON.stringify(arg.gorunum)})`);
  if (arg.kutu) {
    const k = String(arg.kutu).split(',').map(Number), y = String(arg.yon || '0,0.5,0.87').split(',').map(Number);
    await sayfa.evaluate(`window.__donanim.S.kameraGit({ kutu: ${JSON.stringify(k)}, yon: ${JSON.stringify(y)} }, true)`);
  }
  await bekle(Number(arg.bekle || 900));
  if (arg.eylem) {
    for (const e of String(arg.eylem).split(',')) {
      const [ad, ms] = e.split(':');
      await sayfa.evaluate(`window.__donanim.sahne.eylem(${JSON.stringify(ad)}); window.__donanim.S.iste()`);
      await bekle(Number(ms || 700));
    }
  }
  const dosya = path.join(klasor, `${arg.ek ? arg.ek + '-' : ''}${id}${arg.gorunum ? '-' + arg.gorunum : ''}${arg.telefon ? '-tel' : ''}.png`);
  await sayfa.screenshot({ path: dosya });
  const bilgi = await sayfa.evaluate('(() => { const i = window.__donanim.S.renderer.info; return { calls: i.render.calls, tri: i.render.triangles }; })()');
  // gölge yenilenmeyen sıradan kare: bir kare daha çizdirip ölç (golgeYenile yalnız bir kareliktir)
  const normal = await sayfa.evaluate('(async () => { const S = window.__donanim.S; S.iste(); await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))); const i = S.renderer.info; return { calls: i.render.calls, tri: i.render.triangles }; })()');
  console.log(`${id}: ${dosya} (çağrı ${bilgi.calls}, gölgesiz kare ${normal.calls}, üçgen ${bilgi.tri})`);
}
const hatalar = await sayfa.evaluate('window.__donanim ? window.__donanim.hatalar : ["__donanim yok"]');
const olcum = await sayfa.evaluate('window.__donanim ? window.__donanim.olcum() : null');
console.log('ölçüm:', JSON.stringify(olcum));
console.log('sayfa hataları:', JSON.stringify(hatalar));
console.log('konsol:', JSON.stringify(konsol.slice(0, 30)));
await tarayici.close();
