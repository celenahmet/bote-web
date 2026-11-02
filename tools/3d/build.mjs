// 3D Simülasyon Merkezi derlemesi: node tools/3d/build.mjs  (bote-web kökünden ya da tools içinden)
// - src/main.js ve three.js tek dosyada paketlenir (esbuild, ağaç sallama, küçültme) -> 3d/assets/sim-<özet>.js
// - İçerik (icerik/ders-N.json, kavramlar.json) HTML'e yazılır: kartlar JavaScript'siz de okunur.
// - ONIZLEME true iken sayfalar noindex'tir ve siteden bağlantı almaz (blog taslakları gibi).
//   01.11.2026: Ahmet onayıyla yayında ("arama motorlarına da çıkabilir, sorun yok"): ONIZLEME=false.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { YENI_SEKME_OZNITELIK, YENI_SEKME_NOTU } from './yeni-sekme.mjs';
import { erisimDugmeHtml, erisimPaneliHtml } from './erisim-sablon.mjs';
import { MERKEZ_YOL, MERKEZ_AD, aile as aileBul, DERS_YOLU, OZGUR_YOL, yolDosyasi } from './yollar.mjs';

const BU = path.dirname(fileURLToPath(import.meta.url));
const KOK = path.resolve(BU, '../..');
const CIKTI = path.join(KOK, '3d');
const require = createRequire(path.join(KOK, 'tools/package.json'));
const esbuild = require('esbuild');
const SITE = 'https://bote.web.tr';
const ONIZLEME = false;
const { DERSLER, KONTROL_YAZI } = await import(pathToFileURL(path.join(BU, 'src/adimlar.js')).href);
const { KESIF, KATEGORI, KATEGORI_SIRA } = await import(pathToFileURL(path.join(BU, 'src/kesif-veri.js')).href);
const { TELEFON_SORGU } = await import(pathToFileURL(path.join(BU, 'src/telefon.js')).href);

// ------------------------------------------------------------------ yardımcılar
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// İçerik metninde yalnız <strong>, <em>, <code> ve <br> kalır; geri kalan her şey kaçışlanır.
const guvenli = (s = '') => esc(s).replace(/&lt;(\/?)(strong|em|code)&gt;/g, '<$1$2>').replace(/&lt;br\s*\/?&gt;/g, '<br>');
const paragraf = (s = '') => String(s).split(/\n{2,}/).map((p) => `<p>${guvenli(p.trim())}</p>`).join('');
const SINIF = ['5', '6', '7', '8'];
const ikonlar = new Map();
function ico(ad) {
  if (!ikonlar.has(ad)) {
    const svg = fs.readFileSync(require.resolve(`lucide-static/icons/${ad}.svg`), 'utf8').replace(/<!--[\s\S]*?-->/g, '').trim()
      .replace(/<svg[^>]*?>/, '<svg class="ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">')
      .replace(/\n\s*/g, '');
    ikonlar.set(ad, svg);
  }
  return ikonlar.get(ad);
}
const jsonGom = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

// ------------------------------------------------------------------ içerik
const ICERIK = path.join(BU, 'icerik');
const okuJson = (ad) => { const p = path.join(ICERIK, ad); return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : null; };
const kavramlar = okuJson('kavramlar.json') || {};
// Keşif kartlarının içeriği (isteğe bağlı icerik/kesif.json): varsa gömülür, yoksa kart katalogdaki kısa açıklamayı
// gösterir (src/kesif-veri.js). Aynı kimlik kavramlar.json'da da varsa kavramlar kazanır. Biçim esnek: kimlik ->
// { ad, teknik, sosyal } (metin ya da sınıfa göre { 5, 6, 7, 8 }), ya da { id, ... } dizisi.
const sinifli = (x) => {
  if (typeof x === 'string') return Object.fromEntries(SINIF.map((s) => [s, guvenli(x)]));
  if (!x || typeof x !== 'object') return null;
  const ilk = SINIF.map((s) => x[s]).find((v) => typeof v === 'string') || '';
  return Object.fromEntries(SINIF.map((s) => [s, guvenli(typeof x[s] === 'string' ? x[s] : typeof x['6'] === 'string' ? x['6'] : ilk)]));
};
const KESIF_ALAN = { teknik: ['teknik', 'tanim', 'metin', 'aciklama'], sosyal: ['sosyal', 'gunluk', 'gunlukHayat', 'hayat'] };
function kesifNormal(id, x) {
  if (!x || typeof x !== 'object') return null;
  const katman = (s) => x.siniflar?.[s] || x.sinif?.[s] || (typeof x[s] === 'object' ? x[s] : null);
  const al = (tur) => {
    const duz = KESIF_ALAN[tur].map((k) => x[k]).find((v) => v != null);
    if (duz != null) return sinifli(duz);
    const sk = Object.fromEntries(SINIF.map((s) => [s, KESIF_ALAN[tur].map((k) => katman(s)?.[k]).find((v) => typeof v === 'string')]).filter(([, v]) => v));
    return Object.keys(sk).length ? sinifli(sk) : null;
  };
  const teknik = al('teknik');
  return teknik ? { ad: typeof x.ad === 'string' ? x.ad : KESIF[id]?.ad || id, teknik, sosyal: al('sosyal') || {} } : null;
}
let kesifHam = null;
try { kesifHam = okuJson('kesif.json'); } catch (e) { console.warn(`uyari: icerik/kesif.json okunamadı (${e.message}); keşif kartları kısa açıklamayla çıkar`); }
const kesifListe = Array.isArray(kesifHam) ? Object.fromEntries(kesifHam.filter((x) => x?.id).map((x) => [x.id, x])) : (kesifHam?.kesif && typeof kesifHam.kesif === 'object' ? kesifHam.kesif : kesifHam) || {};
const kesifIcerik = Object.fromEntries(Object.entries(kesifListe).filter(([id]) => !kavramlar[id]).map(([id, x]) => [id, kesifNormal(id, x)]).filter(([, v]) => v));
// keşif kartlarının kullandığı kavramlar (kimliğin kendisi ya da eşleştiği kavram)
const KESIF_KAVRAM = [...new Set(Object.entries(KESIF).flatMap(([id, k]) => [id, k.kavram]).filter((k) => k && kavramlar[k]))];
const BASLIK_KISA = { 'arduino-ve-breadboard': 'Arduino ve Breadboard 3D Simülasyonu | bote.web.tr' };
const YEDEK_AD = { 'arduino-ve-breadboard': "Arduino ve Breadboard'u Tanıyalım", 'arduino-led-yakma': 'LED Yakalım', 'arduino-buton-led': 'Butonla LED Yakalım', 'arduino-trafik-isigi': 'Trafik Işığı Yapalım' };
function taslakDers(slug, cfg) { // içerik gelmeden motoru denemek için yer tutucu (yayına çıkmaz)
  return {
    slug, baslik: slug, kisa: 'Taslak', sure: 20, hedefler: {}, kavramlar: [], kaynaklar: [], taslak: true,
    adimlar: Object.keys(cfg.adimlar).map((id) => ({ id, baslik: id, metin: Object.fromEntries(SINIF.map((s) => [s, `${s}. sınıf: ${id}`])) })),
    kod: cfg.no === 2 ? { satirlar: ['void setup() {', '  pinMode(13, OUTPUT);', '}', '', 'void loop() {', '  digitalWrite(13, HIGH);', '  delay(1000);', '  digitalWrite(13, LOW);', '  delay(1000);', '}'].map((k) => ({ k, t: k ? 'açıklama' : '' })) } : null,
  };
}
// src/adimlar.js'teki dersler Arduino ailesinin dersleri (aile adresi ve adı yollar.mjs'te)
const ARDUINO = aileBul('arduino');
const dersler = Object.entries(DERSLER).map(([slug, cfg]) => {
  const d = okuJson(`ders-${cfg.no}.json`) || taslakDers(slug, cfg);
  const eksik = Object.keys(cfg.adimlar).filter((id) => !d.adimlar.some((a) => a.id === id));
  if (eksik.length) console.warn(`uyari: ${slug} içeriğinde eksik adım: ${eksik.join(', ')}`);
  if (!DERS_YOLU[slug]) throw new Error(`${slug}: yollar.mjs DERS_YOLU'nda adres yok`);
  return { ...d, slug, cfg, aile: ARDUINO };
});

// ------------------------------------------------------------------ paket
fs.mkdirSync(path.join(CIKTI, 'assets'), { recursive: true });
const paket = await esbuild.build({
  entryPoints: [path.join(BU, 'src/main.js')], bundle: true, format: 'esm', minify: true, write: false, legalComments: 'none',
  target: ['firefox115', 'chrome109', 'safari15.4'], nodePaths: [path.join(KOK, 'tools/node_modules')], logLevel: 'warning',
});
const kod = paket.outputFiles[0].contents;
const ozet = crypto.createHash('sha1').update(kod).digest('hex').slice(0, 10);
const jsAd = `sim-${ozet}.js`;
for (const f of fs.readdirSync(path.join(CIKTI, 'assets'))) if (/^sim-.*\.js$/.test(f) && f !== jsAd) fs.unlinkSync(path.join(CIKTI, 'assets', f));
fs.writeFileSync(path.join(CIKTI, 'assets', jsAd), kod);
// Erişilebilirlik (src/erisilebilirlik.js): ayrı paket, sim paketine dokunmaz. Erken betik (kayıtlı ayarları ilk boyamadan önce
// <html>'e yazar) tek satırlık betik olarak <head>'e gömülür; arayüz paketi yalnız ders ve Özgür Mod sayfalarına eklenir.
const erisimSecenek = { bundle: true, minify: true, write: false, legalComments: 'none', target: ['firefox115', 'chrome109', 'safari15.4'], nodePaths: [path.join(KOK, 'tools/node_modules')], logLevel: 'warning' };
const erisimErken = (await esbuild.build({ ...erisimSecenek, entryPoints: [path.join(BU, 'src/erisim-erken.js')], format: 'iife' })).outputFiles[0].text.trim();
const erisimKod = (await esbuild.build({ ...erisimSecenek, entryPoints: [path.join(BU, 'src/erisilebilirlik.js')], format: 'esm' })).outputFiles[0].contents;
const erisimJs = `erisim-${crypto.createHash('sha1').update(erisimKod).digest('hex').slice(0, 10)}.js`;
for (const f of fs.readdirSync(path.join(CIKTI, 'assets'))) if (/^erisim-.*\.js$/.test(f) && f !== erisimJs) fs.unlinkSync(path.join(CIKTI, 'assets', f));
fs.writeFileSync(path.join(CIKTI, 'assets', erisimJs), erisimKod);
// keşif gruplarının renkleri tek kaynaktan (src/kesif-veri.js); açık zeminde koyu simge
const katCss = KATEGORI_SIRA.map((k) => `[data-kat=${k}]{--k:${KATEGORI[k].renk};--ki:${KATEGORI[k].koyu ? '#1b1426' : '#fff'}}`).join('\n');
// telefonda Tahta modu düğmesi yok: telefon tanımı tek kaynaktan (src/telefon.js); dar pencere (<=560 px) kuralı stil.css'te de var, çakışmaz
const telefonCss = `@media ${TELEFON_SORGU}{#tahta-dugme{display:none}}`;
const css = (fs.readFileSync(path.join(BU, 'stil.css'), 'utf8') + '\n' + katCss + '\n' + telefonCss + '\n' + fs.readFileSync(path.join(BU, 'erisilebilirlik.css'), 'utf8')).replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '').replace(/\s*([{};,>])\s*/g, '$1').replace(/;}/g, '}');
const BAS_BETIK = `(function(){var d=document.documentElement;try{if(localStorage.getItem('bote-theme')==='dark')d.setAttribute('data-theme','dark');var m=localStorage.getItem('bote-3d-mod');if(m&&!(m==='tahta'&&matchMedia('${TELEFON_SORGU}').matches))d.setAttribute('data-mod',m)}catch(e){}if('noModule' in HTMLScriptElement.prototype)d.setAttribute('data-js','1');var s=new URLSearchParams(location.search).get('sinif');if(/^[5-8]$/.test(s))d.setAttribute('data-sinif',s);else try{var k=localStorage.getItem('bote-3d-sinif');if(/^[5-8]$/.test(k))d.setAttribute('data-sinif',k)}catch(e){}})();` + ';' + erisimErken;

// ------------------------------------------------------------------ ortak parçalar
function bas({ baslik, aciklama, yol, jsonld, sinif = '', hub = false }) {
  return `<!doctype html><html lang="tr" data-sinif="6"${hub ? ' data-e-hub' : ''}><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(baslik)}</title><meta name="description" content="${esc(aciklama)}"><link rel="canonical" href="${SITE}${yol}">
${ONIZLEME ? '<meta name="robots" content="noindex, nofollow">' : ''}<meta name="theme-color" content="#5a2bc4"><link rel="icon" type="image/png" href="/assets/img/educator-fabicon-300x300.png">
<meta property="og:type" content="website"><meta property="og:locale" content="tr_TR"><meta property="og:site_name" content="bote.web.tr"><meta property="og:title" content="${esc(baslik)}"><meta property="og:description" content="${esc(aciklama)}"><meta property="og:url" content="${SITE}${yol}"><meta property="og:image" content="${SITE}/blog/assets/covers/_blog.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:alt" content="${esc(baslik)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(baslik)}"><meta name="twitter:description" content="${esc(aciklama)}"><meta name="twitter:image" content="${SITE}/blog/assets/covers/_blog.jpg"><meta name="twitter:image:alt" content="${esc(baslik)}">
<script>${BAS_BETIK}</script><style>${css}</style>
<link rel="modulepreload" href="/3d/assets/${jsAd}">
<script type="application/ld+json">${jsonGom(jsonld)}</script></head><body class="${sinif}">`;
}
// Kırıntı: marka / merkez / aile / ders. Merkez ve aile bağlantısı .merkez-bag: dar ekranda ve tahta modunda gizlenir (stil.css);
// ders sayfasında yer daralınca önce merkez (.kok), sonra aile kırıntısı gizlenir, ders adı tam kalır (02.11 ölçümü: ust2.mjs).
const kirinti = (yol, ad, bu, sinif = '') => `<span class="ayrac" aria-hidden="true">/</span><a class="merkez-bag${sinif}" href="${yol}"${yol === bu ? ' aria-current="page"' : ''}>${esc(ad)}</a>`;
const ustCubuk = (ders, aile = null, bu = '') => `<header class="ust"><a class="marka" href="/blog"${YENI_SEKME_OZNITELIK}>bote<b>.web.tr</b><span class="sr-only"> blog</span>${YENI_SEKME_NOTU}</a>${kirinti(MERKEZ_YOL, MERKEZ_AD, bu, ' kok')}${aile ? kirinti(aile.yol, aile.kirinti, bu) : ''}${ders ? `<span class="ayrac" aria-hidden="true">/</span><span class="ders-adi">${esc(ders.baslik)}</span>` : ''}
<div class="ust-sag">${ders ? `<span id="gorunum-yuva"></span><button type="button" class="cip" id="sinif-dugme" aria-haspopup="dialog" aria-label="Sınıf düzeyini değiştir">${ico('graduation-cap')}<span data-sinif-yaz>6. sınıf</span></button>
<button type="button" class="dugme" id="ogretmen-dugme" aria-controls="ogretmen" aria-expanded="false" aria-label="Öğretmen notu" title="Öğretmen notu">${ico('book-open')}</button>${erisimDugmeHtml()}
<button type="button" class="dugme" id="tahta-dugme" aria-pressed="false" aria-label="Tahta modu" title="Akıllı tahta için büyük düğme ve yazı">${ico('presentation')}<span class="yazi">Tahta modu</span></button>
<button type="button" class="dugme" id="tam-ekran" aria-label="Tam ekran">${ico('maximize')}</button>` : ''}
<button type="button" class="dugme" id="tema-dugme" aria-label="Açık ya da koyu tema">${ico('moon')}</button></div></header>`;
// Yapısal veri ve alt bilgi: ders ve Özgür Mod aile sayfasının, aile sayfası merkezin parçası.
const aileParcasi = (A) => ({ '@type': 'CollectionPage', name: A.ad, url: SITE + A.yol, isPartOf: { '@type': 'CollectionPage', name: MERKEZ_AD, url: SITE + MERKEZ_YOL } });
const kirintiLd = (A, son = null) => ({ '@type': 'BreadcrumbList', itemListElement: [['bote.web.tr', '/'], [MERKEZ_AD, MERKEZ_YOL], ...(A ? [[A.ad, A.yol]] : []), ...(son ? [son] : [])]
  .map(([name, y], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + y })) });
const BLOG_BAG = `<a href="/blog"${YENI_SEKME_OZNITELIK}>bote.web.tr blog${YENI_SEKME_NOTU}</a>`;
const altBilgi = (A) => `<footer class="alt">${A ? `<a href="${A.yol}">${esc(A.ad)}</a> · ` : ''}<a href="${MERKEZ_YOL}">${MERKEZ_AD}</a> · ${BLOG_BAG}</footer>`;
const sinifPenceresi = `<dialog id="sinif-penceresi" aria-labelledby="sinif-baslik"><h2 id="sinif-baslik">Kaçıncı sınıfla çalışıyoruz?</h2>
<p>Anlatımlar, tanımlar ve mini sınav seçtiğiniz sınıfa göre hazırlanır. Ders sırasında üst çubuktan değiştirebilirsiniz.</p>${sinifIzgara()}</dialog>`;
function sinifIzgara() {
  const acik = { 5: 'Kısa cümleler, benzetmeler', 6: 'Temel terimler ve tanımları', 7: 'Terimler ve nedenleri', 8: 'Sayılar ve basit hesap' };
  return `<div class="sinif-izgara">${SINIF.map((s) => `<button type="button" data-sinif-sec="${s}" aria-pressed="false"><b>${s}. sınıf</b><span>${acik[s]}</span></button>`).join('')}</div>`;
}

// ------------------------------------------------------------------ ders sayfası
function kontrolHtml(liste) {
  const parca = liste.map((k) => {
    if (k === 'delik') return '';
    if (k === 'hiz') return `<div class="grup" role="group" aria-label="Bekleme süresi"><span class="grup-ad">Bekleme</span>${[['1000', '1 sn'], ['500', '0,5 sn'], ['200', '0,2 sn']].map(([d, y]) => `<button type="button" class="dugme" data-eylem="hiz" data-deger="${d}" aria-pressed="${d === '1000'}">${y}</button>`).join('')}</div>`;
    if (k === 'sure') return `<div class="grup" role="group" aria-label="Süre"><span class="grup-ad">Süre</span>${[['1', 'Normal'], ['0.5', 'Hızlı']].map(([d, y]) => `<button type="button" class="dugme" data-eylem="sure" data-deger="${d}" aria-pressed="${d === '1'}">${y}</button>`).join('')}</div>`;
    if (k === 'buton') return `<button type="button" class="dugme buyuk" data-eylem="buton">${ico('pointer')}${KONTROL_YAZI.buton}</button>`;
    const ikon = { akim: 'zap', rontgen: 'scan', ters: 'refresh-cw', 'direnc-cikar': 'minus-circle', delaysiz: 'eraser' }[k];
    return `<button type="button" class="dugme" data-eylem="${k}" aria-pressed="false">${ikon ? ico(ikon) : ''}${esc(KONTROL_YAZI[k] || k)}</button>`;
  }).join('');
  return parca ? `<div class="kontroller">${parca}</div>` : '';
}
function kodHtml(k) {
  if (!k?.satirlar?.length) return '';
  let derinlik = 0; // süslü parantez içindeki satırlar iki boşluk girintilenir
  const girintili = k.satirlar.map((s) => { const t = s.k.trim(); if (t.startsWith('}')) derinlik = Math.max(0, derinlik - 1); const g = '  '.repeat(derinlik) + t; if (t.endsWith('{')) derinlik++; return g; });
  return `<div class="kod"><div class="kod-baslik"><span>Arduino kodu</span><span>Altında Türkçesi</span></div><ol>${k.satirlar.map((s, i) =>
    `<li class="kod-satir${s.k.trim() ? '' : ' bos'}" data-no="${i + 1}"><code>${esc(girintili[i])}</code><span class="tr">${guvenli(s.t || '')}</span></li>`).join('')}</ol></div>`;
}
function sinavHtml(sinav) {
  if (!sinav) return '';
  return SINIF.map((s) => (sinav[s]?.length ? `<section class="sinav" data-s="${s}" aria-label="Mini sınav"><h3>Mini sınav</h3>${sinav[s].map((q) =>
    `<fieldset class="soru"><legend>${guvenli(q.soru)}</legend><div class="secenekler">${q.secenekler.map((o, j) => `<button type="button" data-secenek${j === q.dogru ? ' data-dogru' : ''}>${guvenli(o)}</button>`).join('')}</div><p class="aciklama" hidden>${guvenli(q.aciklama)}</p></fieldset>`).join('')}<p class="sinav-sonuc" aria-live="polite"></p></section>` : '')).join('');
}
function adimHtml(d, a, i) {
  const cfg = d.cfg.adimlar[a.id] || {};
  let h = `<li class="adim${i === 0 ? ' etkin' : ''}" id="adim-${a.id}" data-id="${a.id}"><h2 tabindex="-1">${esc(a.baslik)}</h2>`;
  for (const s of SINIF) h += `<div class="metin" data-s="${s}">${paragraf(a.metin?.[s] || a.metin?.['6'] || '')}</div>`;
  if (i === 0 && d.hedefler) for (const s of SINIF) if (d.hedefler[s]?.length) h += `<div data-s="${s}"><p class="etiket-kucuk">Bu derste</p><ul class="hedefler">${d.hedefler[s].map((x) => `<li>${guvenli(x)}</li>`).join('')}</ul></div>`;
  if (a.tahmin) for (const s of SINIF) h += `<details class="tahmin" data-s="${s}"><summary>${guvenli(a.tahmin.soru[s] || a.tahmin.soru['6'])}</summary><div class="cevap">${paragraf(a.tahmin.cevap[s] || a.tahmin.cevap['6'])}</div></details>`;
  if (cfg.kontrol) h += kontrolHtml(cfg.kontrol);
  if (cfg.kod) h += kodHtml(d.kod);
  if (a.id === 'ozet') h += sinavHtml(d.sinav);
  return h + '</li>';
}
function ogretmenHtml(d) {
  const o = d.ogretmen || {};
  const liste = (ad, x) => (x?.length ? `<h3>${ad}</h3><ul>${x.map((y) => `<li>${guvenli(y)}</li>`).join('')}</ul>` : '');
  const kv = (d.kavramlar || []).filter((k) => kavramlar[k]).map((k) => {
    const v = kavramlar[k];
    return `<div class="kavram"><h3>${esc(v.ad)}</h3>${SINIF.map((s) => `<div data-s="${s}"><p><span class="etiket-kucuk">Teknik</span><br>${guvenli(v.teknik?.[s])}</p><p><span class="etiket-kucuk">Günlük hayatta</span><br>${guvenli(v.sosyal?.[s])}</p></div>`).join('')}</div>`;
  }).join('');
  return `<section id="ogretmen" class="ek" tabindex="-1" aria-labelledby="ogretmen-baslik"><button type="button" class="dugme ek-kapat" id="ogretmen-kapat">${ico('x')}Kapat</button>
<h2 id="ogretmen-baslik">Öğretmen notu</h2><p><strong>Süre:</strong> yaklaşık ${esc(d.sure)} dakika. <strong>Düzey:</strong> ortaokul; anlatım seçilen sınıfa (5-8) göre değişir.</p>
${SINIF.map((s) => (d.hedefler?.[s]?.length ? `<div data-s="${s}"><h3>Öğrenme hedefleri (${s}. sınıf)</h3><ul>${d.hedefler[s].map((x) => `<li>${guvenli(x)}</li>`).join('')}</ul></div>` : '')).join('')}
${o.hazirlik ? `<h3>Hazırlık</h3>${paragraf(o.hazirlik)}` : ''}${liste('Gerçek set için malzemeler', o.malzemeler)}${liste('Güvenlik', o.guvenlik)}${liste('Sık görülen yanlış düşünceler', o.yanilgilar)}${liste('Sınıf tartışması', o.tartisma)}${liste('Hızlı bitirenlere', o.ileri)}
<h3>Kullanım</h3><ul><li>Akıllı tahtada üstteki <strong>Tahta modu</strong> yazıyı ve düğmeleri büyütür; <strong>Tam ekran</strong> tarayıcı çubuklarını gizler.</li><li>Adımlar arasında ok tuşları ya da sunum kumandasıyla geçilir.</li><li>Sahneyi bir parmakla döndürün, iki parmakla yakınlaştırın ve kaydırın; <strong>Eğik, Üstten, Önden, Yandan</strong> düğmeleri hazır bakış açılarıdır ve sahneyi ekrana sığdırır.</li><li>Parçalara dokununca adı, teknik tanımı ve günlük hayattaki yeri seçili sınıfa göre görünür. Pinler yaklaştırınca tek tek seçilir.</li><li><strong>Keşif</strong> açıkken her parçanın üstünde renkli, numaralı bir işaret çıkar; renk ve simge parçanın grubunu gösterir (Güç, İşlem, Pinler, Işıklar, Breadboard, Parçalar, Kontrol). Öğrenciler önce tahmin eder, sonra cevabı görür; bu adım ayarlardan kapatılabilir.</li><li>Anlatım panelinin genişliği kenarından sürüklenerek ya da ayarlardaki sürgüyle değişir.</li></ul>
${kv ? `<h2>Kavramlar</h2>${kv}` : ''}${d.kaynaklar?.length ? `<h2>Kaynaklar</h2><ul>${d.kaynaklar.map((k) => `<li><a href="${esc(k.adres)}"${YENI_SEKME_OZNITELIK}>${esc(k.ad)}${YENI_SEKME_NOTU}</a></li>`).join('')}</ul>` : ''}</section>`;
}
function dersSayfasi(d) {
  const yol = DERS_YOLU[d.slug], A = d.aile;
  // arama sonucunda 60 karakteri aşan başlık kesilir: aşarsa kısa biçim (anahtar sözcükler korunur)
  const tamBaslik = `${d.baslik}: 3D Arduino Simülasyonu | bote.web.tr`;
  const baslik = tamBaslik.length <= 60 ? tamBaslik : (BASLIK_KISA[d.slug] || `${d.baslik} | bote.web.tr`);
  const jsonld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'LearningResource', name: d.baslik, description: d.kisa, url: SITE + yol, inLanguage: 'tr', isAccessibleForFree: true, learningResourceType: 'Simülasyon',
      educationalLevel: 'Ortaokul (5-8. sınıf)', timeRequired: `PT${d.sure || 20}M`, teaches: (d.hedefler?.['6'] || []).map((x) => x.replace(/<[^>]+>/g, '')),
      audience: { '@type': 'EducationalAudience', educationalRole: 'student' }, isPartOf: aileParcasi(A),
      publisher: { '@type': 'Organization', name: 'bote.web.tr', url: SITE } },
    kirintiLd(A, [d.baslik, yol]),
  ] };
  const kv = Object.fromEntries((d.kavramlar?.length ? d.kavramlar : Object.keys(kavramlar)).concat(KESIF_KAVRAM).filter((k, i, a) => kavramlar[k] && a.indexOf(k) === i)
    .map((k) => [k, { ad: kavramlar[k].ad, teknik: Object.fromEntries(SINIF.map((s) => [s, guvenli(kavramlar[k].teknik?.[s])])), sosyal: Object.fromEntries(SINIF.map((s) => [s, guvenli(kavramlar[k].sosyal?.[s])])) }]));
  const veri = { slug: d.slug, kod: (d.kod?.satirlar || []).map((s) => s.k), trafikSirasi: d.trafikSirasi || null, kavramlar: kv, kesifIcerik };
  const adimlar = d.cfg.adimlar ? Object.keys(d.cfg.adimlar).map((id) => d.adimlar.find((a) => a.id === id)).filter(Boolean) : d.adimlar;
  return `${bas({ baslik, aciklama: d.kisa, yol, jsonld, sinif: 'ders-sayfasi' })}<a class="atla" href="#kartlar">Anlatıma geç</a>${ustCubuk(d, A)}
<main class="ders"><section class="sahne-alani" aria-label="3D sahne">
<canvas id="sahne" role="img" aria-label="Arduino UNO kartı ve breadboard'un üç boyutlu görünümü. Parmakla döndürülebilir, iki parmakla yakınlaştırılabilir." tabindex="-1"></canvas>
<div class="etiketler" aria-hidden="true"></div><div class="isaretler" role="group" aria-label="Keşif noktaları"></div><div class="yukleniyor" aria-hidden="true">3D sahne hazırlanıyor</div>
<details class="lejant" id="lejant"><summary><span>Renkler</span>${ico('chevron-down')}</summary><ul>${KATEGORI_SIRA.map((k) => `<li data-kat="${k}"><span class="ki-daire" aria-hidden="true">${ico(KATEGORI[k].ikon)}</span>${esc(KATEGORI[k].ad)}</li>`).join('')}</ul></details>
<template id="kesif-sablon">${KATEGORI_SIRA.map((k) => `<span data-kat="${k}">${ico(KATEGORI[k].ikon)}</span>`).join('')}</template>
<div class="webgl-yok"><p>Bu cihaz 3D görüntüyü açamadı. Kartlardaki anlatım ve mini sınav çalışır.</p></div>
<div class="baglam-mesaj"><p>Ekran kartı sahneyi durdurdu.</p><button type="button" class="dugme birincil" id="yeniden-yukle">Yeniden yükle</button></div>
<p class="ipucu ipucu-delik">Bir deliğe dokun: bağlı delikler yeşil yanar</p><p class="ipucu ipucu-dokun">Parçalara dokunarak tanı</p>
<aside id="bilgi" class="bilgi" hidden aria-live="polite"><button type="button" class="kapat" id="bilgi-kapat" aria-label="Bilgiyi kapat">${ico('x')}</button><p class="bilgi-kat" id="bilgi-kat" hidden><span class="ki-daire" aria-hidden="true"></span><span id="bilgi-kat-ad"></span></p><div class="kesif-soru" id="kesif-soru" hidden><p class="etiket-kucuk">Keşif</p><h3>Sence bu nedir, ne işe yarar?</h3><button type="button" class="dugme birincil" id="kesif-gor">Cevabı gör</button></div><div id="bilgi-cevap"><h3 id="bilgi-baslik" tabindex="-1"></h3><p class="bilgi-ozel" id="bilgi-ozel" hidden></p><figure id="bilgi-gorsel" hidden><img alt=""></figure><p class="etiket-kucuk">Ne işe yarar?</p><p id="bilgi-teknik"></p><p class="sosyal"><strong>Günlük hayatta:</strong> <span id="bilgi-sosyal"></span></p></div></aside>
<div class="sahne-arac"><div class="sol-arac"><button type="button" class="kesif-dugme" id="kesif-dugme" aria-pressed="false" title="Parçalara dokunarak ne olduklarını keşfet">${ico('search')}<span>Keşif</span></button><div class="gorunum" role="group" aria-label="Bakış açısı">${[['egik', 'Eğik', 'Eğik'], ['ustten', 'Üstten', 'Üst'], ['onden', 'Önden', 'Ön'], ['yandan', 'Yandan', 'Yan']].map(([k, y, ks]) => `<button type="button" data-gorunum="${k}" aria-pressed="${k === 'egik'}" aria-label="${y} bakış"><span class="uzun">${y}</span><span class="kisa" aria-hidden="true">${ks}</span></button>`).join('')}</div></div>
<nav class="mini-gezinti" aria-label="Adımlar (panel kapalıyken)"><button type="button" id="mini-geri" aria-label="Önceki adım">${ico('chevron-left')}</button><button type="button" id="mini-ac" class="mini-baslik" aria-label="Anlatım panelini aç"><span id="mini-sayac">1/${adimlar.length}</span><span id="mini-baslik"></span></button><button type="button" id="mini-ileri" aria-label="Sonraki adım">${ico('chevron-right')}</button></nav>
<div class="yakinlik" role="group" aria-label="Yakınlaştırma"><button type="button" id="uzaklas" aria-label="Uzaklaştır">${ico('zoom-out')}</button><button type="button" id="yakinlas" aria-label="Yakınlaştır">${ico('zoom-in')}</button></div></div></section>
<div class="panel-kenar" role="separator" aria-orientation="vertical" aria-controls="kartlar" aria-label="Panel genişliği: sürükleyin ya da ok tuşlarını kullanın" tabindex="0"><span class="kenar-tutamac" aria-hidden="true">${ico('grip-vertical')}</span><button type="button" class="panel-dugme" id="panel-dugme" aria-controls="kartlar" aria-expanded="true" aria-label="Anlatım panelini kapat">${ico('chevron-right')}</button></div>
<section class="kart-alani" id="kartlar" aria-label="Anlatım kartları"><div class="tutamac" aria-hidden="true"><span></span></div><div class="kart-ust"><span class="adim-etiket">Adım <span id="adim-sayac">1 / ${adimlar.length}</span></span><span class="kisa-baslik" id="kisa-baslik"></span><div class="ilerleme" aria-hidden="true"><span id="ilerleme"></span></div><button type="button" class="kucuk-dugme" id="ayar-dugme" aria-expanded="false" aria-controls="ayarlar" aria-label="Panel ayarları" title="Panel genişliği, yazı boyutu, taraf">${ico('sliders-horizontal')}</button></div>
<div class="ayar-perde" id="ayar-perde" hidden></div><div class="ayarlar" id="ayarlar" role="group" aria-labelledby="ayar-baslik" hidden><div class="ayar-ust"><p class="ayar-baslik" id="ayar-baslik">Panel ayarları</p><button type="button" class="kucuk-dugme" id="ayar-kapat" aria-label="Ayarları kapat">${ico('x')}</button></div>
<p class="ayar-ad yatay-ayar reosta-ust"><span id="genislik-ad">Panel genişliği</span><output id="genislik-deger" for="panel-genislik">Orta</output></p><div class="reosta yatay-ayar"><input type="range" id="panel-genislik" min="0" max="100" step="1" value="50" aria-labelledby="genislik-ad"><div class="reosta-isaretler">${[['dar', 'Dar'], ['orta', 'Orta'], ['genis', 'Geniş']].map(([k, y]) => `<button type="button" class="reosta-isaret" data-panel-boyut="${k}" aria-pressed="${k === 'orta'}">${y}</button>`).join('')}</div></div>
<p class="ayar-ad">Yazı boyutu</p><div class="grup" role="group" aria-label="Yazı boyutu"><button type="button" class="dugme" data-yazi="-1" aria-label="Yazıyı küçült">A−</button><span class="yazi-deger" id="yazi-deger">%100</span><button type="button" class="dugme" data-yazi="1" aria-label="Yazıyı büyüt">A+</button></div>
<p class="ayar-ad yatay-ayar">Panel tarafı</p><div class="grup yatay-ayar" role="group" aria-label="Panel tarafı"><button type="button" class="dugme" data-yan="sol" aria-pressed="false">Sol</button><button type="button" class="dugme" data-yan="sag" aria-pressed="true">Sağ</button></div>
<label class="ayar-satir"><input type="checkbox" id="tahmin-ayar" checked> Keşifte önce tahmin ettir</label></div>${erisimPaneliHtml(ico)}
<div class="kart-govde"><h1 class="sr-only">${esc(d.baslik)}: 3D Arduino simülasyonu</h1><ol class="adimlar">${adimlar.map((a, i) => adimHtml(d, a, i)).join('')}</ol></div>
<nav class="kart-alt" aria-label="Adımlar"><button type="button" class="dugme" id="geri">${ico('chevron-left')}Geri</button><button type="button" class="dugme birincil" id="ileri">İleri${ico('chevron-right')}</button></nav></section></main>
${ogretmenHtml(d)}${altBilgi(A)}
<div id="duyuru" class="sr-only" aria-live="polite"></div>${sinifPenceresi}
<script type="application/json" id="ders-veri">${jsonGom(veri)}</script><script type="module" src="/3d/assets/${jsAd}"></script><script type="module" src="/3d/assets/${erisimJs}"></script></body></html>`;
}

// ------------------------------------------------------------------ merkez ve aile sayfaları
// /3d genel merkez (Ahmet 02.11: "3d sayfasını genel simülasyon merkezi sayfası yapalım"): önce sınıf, sonra aile
// başlığı altında dersler. /3d/arduino aile sayfası: 02.11 öncesi /3d'nin içeriği (sınıf, dersler, Özgür Mod, notlar).
const kartSinif = `<span class="ders-sinif">${ico('graduation-cap')}<span data-sinif-yaz>6. sınıf</span></span>`;
const dersKarti = (d, h = 'h3') => (d.taslak ? `<li><div class="hazirlaniyor"><span class="no">${d.cfg.no}</span><${h}>${esc(YEDEK_AD[d.slug])}</${h}><p>Hazırlanıyor.</p></div></li>`
  : `<li><a data-ders-baglanti href="${DERS_YOLU[d.slug]}"><span class="no">${d.cfg.no}</span><${h}>${esc(d.baslik)}</${h}><p>${esc(d.kisa)}</p><span class="meta">${Object.keys(d.cfg.adimlar).length} adım · yaklaşık ${esc(d.sure || 20)} dk</span>${kartSinif}</a></li>`);
const OZGUR_AD = 'Özgür Mod: Devreni Kendin Kur';
const ozgurKarti = (h = 'h3') => `<li><a data-ders-baglanti href="${OZGUR_YOL}"><${h}>${OZGUR_AD}</${h}><p>LED, direnç, buton ve kabloyu istediğin deliğe tak, pini ve programı seç; hatalar Türkçe açıklanır.</p><span class="meta">Serbest deneme · ders akışı yok</span>${kartSinif}</a></li>`;
const sinifAkisi = `<section class="akis secim-kutusu" aria-labelledby="sinif-sec-baslik"><h2 id="sinif-sec-baslik" class="akis-baslik"><span class="akis-no" aria-hidden="true">1</span>Sınıfı seç</h2><p class="akis-aciklama">Anlatım, tanımlar ve mini sınav seçilen sınıfa göre hazırlanır.</p>${sinifIzgara()}</section>`;
const dersAkisiBas = `<section class="akis dersler-akis" id="dersler" aria-labelledby="ders-sec-baslik"><h2 id="ders-sec-baslik" class="akis-baslik"><span class="akis-no" aria-hidden="true">2</span>Dersi seç</h2>`;
const NOT_TAHTA = '<section><h2>Akıllı tahtada</h2><p>Ders sayfasında Tahta modu ve Tam ekran düğmeleri yazıyı ve düğmeleri büyütür. Adımlar ok tuşları ya da sunum kumandasıyla geçilir.</p></section>';
const NOT_SINIF = '<section><h2>Sınıfa göre anlatım</h2><p>5, 6, 7 ve 8. sınıf için ayrı tanımlar, açıklamalar ve sorular vardır. Her kavramın teknik tanımı ve günlük hayattaki yeri birlikte verilir.</p></section>';
const NOT_TAHMIN = '<section><h2>Tahmin et, sonra gör</h2><p>Öğrenciler önce tahmin eder, sonra sahnede sonucu görür: LED ters takılırsa ne olur, direnç çıkarılırsa ne değişir?</p></section>';
const hubSonu = `<div id="duyuru" class="sr-only" aria-live="polite"></div><script type="module" src="/3d/assets/${jsAd}"></script></body></html>`;
const aileDersleri = (A) => dersler.filter((d) => d.aile === A);
const AILE_LISTE = [ARDUINO]; // yayındaki aileler (merkezde bu sırayla)

function merkezSayfasi() {
  const yol = MERKEZ_YOL;
  const baslik = `${MERKEZ_AD} | bote.web.tr`;
  const aciklama = 'Ortaokul Bilişim Teknolojileri ve Yazılım dersleri için üç boyutlu simülasyonlar: sınıfa göre anlatım ve mini sınav. Akıllı tahta, tablet ve telefonda çalışır.';
  const jsonld = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: MERKEZ_AD, description: aciklama, url: SITE + yol, inLanguage: 'tr',
    hasPart: AILE_LISTE.map((A) => ({ '@type': 'CollectionPage', name: A.ad, url: SITE + A.yol })) };
  return `${bas({ baslik, aciklama, yol, jsonld, hub: true })}${ustCubuk(null, null, yol)}<main class="merkez"><section class="giris"><h1>${MERKEZ_AD}</h1>
<p>Ortaokul Bilişim Teknolojileri ve Yazılım dersleri için üç boyutlu simülasyonlar: parçaları yakından inceleyin, adım adım kurun ve çalıştırın. Akıllı tahtada, tablette ve telefonda çalışır; kurulum ve üyelik gerekmez.</p></section>
${sinifAkisi}
${dersAkisiBas}${AILE_LISTE.map((A) => `<section class="aile" aria-labelledby="aile-${A.id}"><h3 class="aile-baslik" id="aile-${A.id}"><a href="${A.yol}">${esc(A.ad)}${ico('chevron-right')}</a></h3>
<ol class="ders-listesi">${aileDersleri(A).map((d) => dersKarti(d, 'h4')).join('')}${A === ARDUINO ? ozgurKarti('h4') : ''}</ol></section>`).join('')}</section>
<div class="notlar">${NOT_TAHTA}${NOT_SINIF}</div></main>
<footer class="alt">${BLOG_BAG}</footer>${hubSonu}`;
}

function aileSayfasi(A) {
  const yol = A.yol;
  const baslik = 'Arduino Simülasyonu: 3D Dersler ve Özgür Mod | bote.web.tr';
  const aciklama = 'Ortaokul Bilişim Teknolojileri ve Yazılım dersleri için Arduino ve breadboard dersleri: üç boyutlu sahne, sınıfa göre anlatım ve mini sınav.';
  const jsonld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'CollectionPage', name: A.ad, description: aciklama, url: SITE + yol, inLanguage: 'tr', isPartOf: { '@type': 'CollectionPage', name: MERKEZ_AD, url: SITE + MERKEZ_YOL },
      hasPart: [...aileDersleri(A).filter((d) => !d.taslak).map((d) => ({ '@type': 'LearningResource', name: d.baslik, url: SITE + DERS_YOLU[d.slug] })), { '@type': 'LearningResource', name: OZGUR_AD, url: SITE + OZGUR_YOL }] },
    kirintiLd(A),
  ] };
  return `${bas({ baslik, aciklama, yol, jsonld, hub: true })}${ustCubuk(null, A, yol)}<main class="merkez"><section class="giris"><h1>${esc(A.ad)}</h1>
<p>Ortaokul Bilişim Teknolojileri ve Yazılım dersleri için Arduino ve breadboard'u üç boyutlu inceleyin, devreyi adım adım kurun ve çalıştırın. Akıllı tahtada, tablette ve telefonda çalışır; kurulum ve üyelik gerekmez.</p></section>
${sinifAkisi}
${dersAkisiBas}<ol class="ders-listesi">${aileDersleri(A).map((d) => dersKarti(d)).join('')}</ol></section>
<section class="akis ozgur-akis" id="ozgur" aria-labelledby="ozgur-sec-baslik"><h2 id="ozgur-sec-baslik" class="akis-baslik">Özgür mod</h2><p class="akis-aciklama">Hazır bir ders izlemeden kendi devrenizi kurun ve deneyin.</p>
<ol class="ders-listesi">${ozgurKarti()}</ol></section>
<div class="notlar">${NOT_TAHTA}${NOT_SINIF}${NOT_TAHMIN}</div></main>
${altBilgi(null)}${hubSonu}`;
}

// ------------------------------------------------------------------ yaz (adres -> dosya: yollar.mjs yolDosyasi)
const dosya = (yol) => path.join(KOK, yolDosyasi(yol));
const yaz = (yol, html) => { const f = dosya(yol); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); };
yaz(MERKEZ_YOL, merkezSayfasi());
for (const A of AILE_LISTE) yaz(A.yol, aileSayfasi(A));
for (const d of dersler) { const y = DERS_YOLU[d.slug]; if (d.taslak && !process.argv.includes('--taslak')) { if (fs.existsSync(dosya(y))) fs.unlinkSync(dosya(y)); } else yaz(y, dersSayfasi(d)); }
const boy = (f) => Math.round(fs.statSync(f).size / 1024);
console.log(`3d: ${dersler.length} ders (${dersler.filter((d) => d.taslak).length} içeriksiz, yazılmadı), paket ${jsAd} ${Math.round(kod.length / 1024)} KB, sayfalar: ${[MERKEZ_YOL, ...AILE_LISTE.map((A) => A.yol), ...dersler.map((d) => DERS_YOLU[d.slug])].filter((y) => fs.existsSync(dosya(y))).map((y) => `${y} ${boy(dosya(y))} KB`).join(', ')}`);

// ------------------------------------------------------------------ ÖZGÜR MOD (işaretli blok BAŞLA)
// Özgür Mod (adresi yollar.mjs OZGUR_YOL): devreyi öğretmen ya da öğrenci kendisi kurar (Ahmet 01.11: "hocanın özgür modu ... ayrı bir sayfa").
// Ayrı paket (src/ozgur.js), ayrı sayfa (ozgur-sayfa.mjs), ayrı stil (ozgur.css, stil.css'in üstüne). Ders sayfalarına dokunmaz.
{
  const { ozgurSayfasi } = await import(pathToFileURL(path.join(BU, 'ozgur-sayfa.mjs')).href);
  const ozgurPaket = await esbuild.build({
    entryPoints: [path.join(BU, 'src/ozgur.js')], bundle: true, format: 'esm', minify: true, write: false, legalComments: 'none',
    target: ['firefox115', 'chrome109', 'safari15.4'], nodePaths: [path.join(KOK, 'tools/node_modules')], logLevel: 'warning',
  });
  const ozgurKod = ozgurPaket.outputFiles[0].contents;
  const ozgurJs = `ozgur-${crypto.createHash('sha1').update(ozgurKod).digest('hex').slice(0, 10)}.js`;
  for (const f of fs.readdirSync(path.join(CIKTI, 'assets'))) if (/^ozgur-.*\.js$/.test(f) && f !== ozgurJs) fs.unlinkSync(path.join(CIKTI, 'assets', f));
  fs.writeFileSync(path.join(CIKTI, 'assets', ozgurJs), ozgurKod);
  const ozgurCss = css + fs.readFileSync(path.join(BU, 'ozgur.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '').replace(/\s*([{};,>])\s*/g, '$1').replace(/;}/g, '}');
  yaz(OZGUR_YOL, ozgurSayfasi({ esc, ico, jsonGom, ustCubuk: (x) => ustCubuk(x, ARDUINO), sinifPenceresi, basBetik: BAS_BETIK, css: ozgurCss, SITE, ONIZLEME, jsAd: ozgurJs, erisimJs,
    aile: ARDUINO, isPartOf: aileParcasi(ARDUINO), kirintiLd: (son) => kirintiLd(ARDUINO, son), altBilgi: altBilgi(ARDUINO) }));
  console.log(`3d: özgür mod, paket ${ozgurJs} ${Math.round(ozgurKod.length / 1024)} KB, sayfa ${OZGUR_YOL} ${boy(dosya(OZGUR_YOL))} KB`);
}
// ------------------------------------------------------------------ ÖZGÜR MOD (işaretli blok BİTTİ)
