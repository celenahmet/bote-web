// Donanım ailesi önizleme derlemesi (yalnız geliştirme ve ölçüm).
//   node tools/3d/donanim/onizleme.mjs            -> 3d/donanim-onizleme/ (kırpılmamış, hata adları okunur)
//   MIN=1 node tools/3d/donanim/onizleme.mjs      -> küçültülmüş (yayındaki pakete en yakın ölçüm için)
// Çıktı klasörü git'e EKLENMEZ. Sunucu: cd tools && PORT=4197 node serve.mjs  ->  /3d/donanim-onizleme
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const BU = path.dirname(fileURLToPath(import.meta.url));
const KOK = path.resolve(BU, '../../..');
const CIKTI = path.join(KOK, '3d/donanim-onizleme');
const require = createRequire(path.join(KOK, 'tools/package.json'));
const esbuild = require('esbuild');
fs.mkdirSync(CIKTI, { recursive: true });

const min = process.env.MIN === '1';
const t0 = Date.now();
const sonuc = await esbuild.build({
  entryPoints: [path.join(BU, 'src/onizleme.js')], bundle: true, format: 'esm', minify: min, write: false, legalComments: 'none',
  target: ['firefox115', 'chrome109', 'safari15.4'], nodePaths: [path.join(KOK, 'tools/node_modules')], logLevel: 'warning',
});
const kod = sonuc.outputFiles[0].text;
fs.writeFileSync(path.join(CIKTI, 'onizleme.js'), kod);

const stil = fs.readFileSync(path.join(BU, '../stil.css'), 'utf8');
const ek = `
html,body{height:100%;margin:0;overflow:hidden}
html[data-js] .sahne-alani{position:absolute;inset:0}
#pv-ust{position:fixed;left:0;right:0;top:0;z-index:20;display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:6px 8px;background:color-mix(in srgb,var(--surface) 90%,transparent);box-shadow:0 2px 10px #1b14261a;font:600 13px/1.2 var(--font)}
#pv-ust select,#pv-ust button{min-height:34px;padding:0 10px;border:1px solid var(--line);border-radius:8px;background:var(--surface);font:600 13px var(--font);cursor:pointer}
#pv-ust button[aria-pressed=true]{background:var(--violet);color:#fff;border-color:var(--violet)}
#pv-alt{position:fixed;left:8px;right:8px;bottom:8px;z-index:20;display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:8px;pointer-events:none}
#pv-alt>*{pointer-events:auto}
#pv-kontrol{display:flex;flex-wrap:wrap;gap:6px;justify-content:flex-end}
.dugme{min-height:44px;padding:0 14px;border:0;border-radius:12px;background:var(--violet);color:#fff;font-weight:700;cursor:pointer;touch-action:manipulation;box-shadow:0 2px 10px #1b142633}
.dugme[aria-pressed=true]{background:var(--ink)}
#pv-bilgi{position:fixed;left:12px;top:56px;z-index:25;max-width:min(28em,calc(100% - 24px));padding:12px 40px 12px 14px;border-radius:14px;background:var(--surface);box-shadow:0 8px 30px #1b142633}
#pv-bilgi[hidden]{display:none}
#pv-bilgi h3{margin:0 0 4px;font-size:1.05em}
#pv-bilgi p{margin:.2em 0 0}
#pv-bilgi small{color:var(--muted);font-weight:700}
#pv-bilgi button{position:absolute;right:4px;top:4px;width:36px;height:36px;border:0;border-radius:10px;background:transparent;font-size:20px;cursor:pointer}
#pv-duyuru{position:absolute;left:-9999px}
`;
const sayfa = `<!doctype html>
<html lang="tr" data-js data-sinif="6">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">
<title>Donanım önizleme</title>
<style>${stil}${ek}</style></head>
<body>
<div id="pv-ust"><select id="pv-ders" aria-label="Ders" disabled><option>girdi-cikti-birimleri</option></select>
<button id="pv-geri" type="button" aria-label="Önceki adım">‹</button><select id="pv-adim" aria-label="Adım"></select><button id="pv-ileri" type="button" aria-label="Sonraki adım">›</button>
<span id="pv-sira"></span><button id="pv-kesif" type="button" aria-pressed="false">Keşif</button></div>
<div class="sahne-alani" id="sahne-alani"><canvas id="sahne" tabindex="0"></canvas><div class="etiketler" aria-hidden="true"></div><div class="isaretler"></div><div class="yukleniyor">Yükleniyor</div></div>
<div id="pv-alt" class="sahne-arac" style="position:fixed"><div class="gorunum" id="pv-gorunum" role="group" aria-label="Görünüm"></div><div id="pv-kontrol"></div></div>
<div id="pv-bilgi" hidden><small id="pv-bilgi-kat"></small><h3 id="pv-bilgi-baslik"></h3><p id="pv-bilgi-metin"></p><button id="pv-bilgi-kapat" type="button" aria-label="Kapat">×</button></div>
<div id="pv-duyuru" role="status" aria-live="polite"></div>
<script type="module" src="/3d/donanim-onizleme/onizleme.js"></script>
</body></html>
`;
fs.writeFileSync(path.join(CIKTI, 'index.html'), sayfa);
console.log(`onizleme derlendi (${min ? 'küçültülmüş' : 'kırpılmamış'}): ${(kod.length / 1024).toFixed(0)} KB, ${Date.now() - t0} ms -> ${path.relative(KOK, CIKTI)}`);
