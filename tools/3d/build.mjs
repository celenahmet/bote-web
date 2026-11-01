// 3D Simülasyon Merkezi derlemesi: node tools/3d/build.mjs  (bote-web kökünden ya da tools içinden)
// - src/main.js ve three.js tek dosyada paketlenir (esbuild, ağaç sallama, küçültme) -> 3d/assets/sim-<özet>.js
// - İçerik (icerik/ders-N.json, kavramlar.json) HTML'e yazılır: kartlar JavaScript'siz de okunur.
// - ONIZLEME true iken sayfalar noindex'tir ve siteden bağlantı almaz (blog taslakları gibi).
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const BU = path.dirname(fileURLToPath(import.meta.url));
const KOK = path.resolve(BU, '../..');
const CIKTI = path.join(KOK, '3d');
const require = createRequire(path.join(KOK, 'tools/package.json'));
const esbuild = require('esbuild');
const SITE = 'https://bote.web.tr';
const ONIZLEME = true;
const { DERSLER, KONTROL_YAZI } = await import(pathToFileURL(path.join(BU, 'src/adimlar.js')).href);

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
const YEDEK_AD = { 'arduino-ve-breadboard': "Arduino ve Breadboard'u Tanıyalım", 'arduino-led-yakma': 'LED Yakalım', 'arduino-buton-led': 'Butonla LED Yakalım', 'arduino-trafik-isigi': 'Trafik Işığı Yapalım' };
function taslakDers(slug, cfg) { // içerik gelmeden motoru denemek için yer tutucu (yayına çıkmaz)
  return {
    slug, baslik: slug, kisa: 'Taslak', sure: 20, hedefler: {}, kavramlar: [], kaynaklar: [], taslak: true,
    adimlar: Object.keys(cfg.adimlar).map((id) => ({ id, baslik: id, metin: Object.fromEntries(SINIF.map((s) => [s, `${s}. sınıf: ${id}`])) })),
    kod: cfg.no === 2 ? { satirlar: ['void setup() {', '  pinMode(13, OUTPUT);', '}', '', 'void loop() {', '  digitalWrite(13, HIGH);', '  delay(1000);', '  digitalWrite(13, LOW);', '  delay(1000);', '}'].map((k) => ({ k, t: k ? 'açıklama' : '' })) } : null,
  };
}
const dersler = Object.entries(DERSLER).map(([slug, cfg]) => {
  const d = okuJson(`ders-${cfg.no}.json`) || taslakDers(slug, cfg);
  const eksik = Object.keys(cfg.adimlar).filter((id) => !d.adimlar.some((a) => a.id === id));
  if (eksik.length) console.warn(`uyari: ${slug} içeriğinde eksik adım: ${eksik.join(', ')}`);
  return { ...d, slug, cfg };
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
const css = fs.readFileSync(path.join(BU, 'stil.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '').replace(/\s*([{};,>])\s*/g, '$1').replace(/;}/g, '}');
const BAS_BETIK = `(function(){var d=document.documentElement;try{if(localStorage.getItem('bote-theme')==='dark')d.setAttribute('data-theme','dark');var m=localStorage.getItem('bote-3d-mod');if(m)d.setAttribute('data-mod',m)}catch(e){}if('noModule' in HTMLScriptElement.prototype)d.setAttribute('data-js','1');var s=new URLSearchParams(location.search).get('sinif');if(/^[5-8]$/.test(s))d.setAttribute('data-sinif',s);else try{var k=localStorage.getItem('bote-3d-sinif');if(/^[5-8]$/.test(k))d.setAttribute('data-sinif',k)}catch(e){}})();`;

// ------------------------------------------------------------------ ortak parçalar
function bas({ baslik, aciklama, yol, jsonld, sinif = '' }) {
  return `<!doctype html><html lang="tr" data-sinif="6"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(baslik)}</title><meta name="description" content="${esc(aciklama)}"><link rel="canonical" href="${SITE}${yol}">
${ONIZLEME ? '<meta name="robots" content="noindex, nofollow">' : ''}<meta name="theme-color" content="#5a2bc4"><link rel="icon" type="image/png" href="/assets/img/educator-fabicon-300x300.png">
<meta property="og:type" content="website"><meta property="og:locale" content="tr_TR"><meta property="og:site_name" content="bote.web.tr"><meta property="og:title" content="${esc(baslik)}"><meta property="og:description" content="${esc(aciklama)}"><meta property="og:url" content="${SITE}${yol}">
<script>${BAS_BETIK}</script><style>${css}</style>
<link rel="modulepreload" href="/3d/assets/${jsAd}">
<script type="application/ld+json">${jsonGom(jsonld)}</script></head><body class="${sinif}">`;
}
const ustCubuk = (ders) => `<header class="ust"><a class="marka" href="/blog" aria-label="bote.web.tr blog">bote<b>.web.tr</b></a><span class="ayrac" aria-hidden="true">/</span><a class="merkez-bag" href="/3d">3D Simülasyon Merkezi</a>${ders ? `<span class="ayrac" aria-hidden="true">/</span><span class="ders-adi">${esc(ders.baslik)}</span>` : ''}
<div class="ust-sag">${ders ? `<button type="button" class="cip" id="sinif-dugme" aria-haspopup="dialog" aria-label="Sınıf düzeyini değiştir">${ico('graduation-cap')}<span data-sinif-yaz>6. sınıf</span></button>
<button type="button" class="dugme" id="ogretmen-dugme" aria-controls="ogretmen">${ico('book-open')}<span class="yazi">Öğretmen</span></button>
<button type="button" class="dugme" id="tahta-dugme" aria-pressed="false" title="Akıllı tahta için büyük düğme ve yazı">${ico('presentation')}<span class="yazi">Tahta modu</span></button>
<button type="button" class="dugme" id="tam-ekran" aria-label="Tam ekran">${ico('maximize')}</button>` : ''}
<button type="button" class="dugme" id="tema-dugme" aria-label="Açık ya da koyu tema">${ico('moon')}</button></div></header>`;
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
<h3>Kullanım</h3><ul><li>Akıllı tahtada üstteki <strong>Tahta modu</strong> yazıyı ve düğmeleri büyütür; <strong>Tam ekran</strong> tarayıcı çubuklarını gizler.</li><li>Adımlar arasında ok tuşları ya da sunum kumandasıyla geçilir.</li><li>Sahneyi bir parmakla döndürün, iki parmakla yakınlaştırın; <strong>Eğik, Üstten, Önden, Yandan</strong> düğmeleri hazır bakış açılarıdır.</li><li>Parçalara dokununca adı, teknik tanımı ve günlük hayattaki yeri seçili sınıfa göre görünür.</li></ul>
${kv ? `<h2>Kavramlar</h2>${kv}` : ''}${d.kaynaklar?.length ? `<h2>Kaynaklar</h2><ul>${d.kaynaklar.map((k) => `<li><a href="${esc(k.adres)}" rel="noopener">${esc(k.ad)}</a></li>`).join('')}</ul>` : ''}</section>`;
}
function dersSayfasi(d) {
  const yol = `/3d/${d.slug}`;
  const baslik = `${d.baslik}: 3D Arduino Simülasyonu | bote.web.tr`;
  const jsonld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'LearningResource', name: d.baslik, description: d.kisa, url: SITE + yol, inLanguage: 'tr', isAccessibleForFree: true, learningResourceType: 'Simülasyon',
      educationalLevel: 'Ortaokul (5-8. sınıf)', timeRequired: `PT${d.sure || 20}M`, teaches: (d.hedefler?.['6'] || []).map((x) => x.replace(/<[^>]+>/g, '')),
      audience: { '@type': 'EducationalAudience', educationalRole: 'student' }, isPartOf: { '@type': 'CollectionPage', name: '3D Simülasyon Merkezi', url: `${SITE}/3d` },
      publisher: { '@type': 'Organization', name: 'bote.web.tr', url: SITE } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'bote.web.tr', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: '3D Simülasyon Merkezi', item: `${SITE}/3d` }, { '@type': 'ListItem', position: 3, name: d.baslik, item: SITE + yol }] },
  ] };
  const kv = Object.fromEntries((d.kavramlar?.length ? d.kavramlar : Object.keys(kavramlar)).concat(['arduino', 'usb', 'mikrodenetleyici', 'dijital', 'analog', 'gnd', 'breadboard', 'led', 'direnc', 'buton', 'kablo']).filter((k, i, a) => kavramlar[k] && a.indexOf(k) === i)
    .map((k) => [k, { ad: kavramlar[k].ad, teknik: Object.fromEntries(SINIF.map((s) => [s, guvenli(kavramlar[k].teknik?.[s])])), sosyal: Object.fromEntries(SINIF.map((s) => [s, guvenli(kavramlar[k].sosyal?.[s])])) }]));
  const veri = { slug: d.slug, kod: (d.kod?.satirlar || []).map((s) => s.k), trafikSirasi: d.trafikSirasi || null, kavramlar: kv };
  const adimlar = d.cfg.adimlar ? Object.keys(d.cfg.adimlar).map((id) => d.adimlar.find((a) => a.id === id)).filter(Boolean) : d.adimlar;
  return `${bas({ baslik, aciklama: d.kisa, yol, jsonld, sinif: 'ders-sayfasi' })}<a class="atla" href="#kartlar">Anlatıma geç</a>${ustCubuk(d)}
<main class="ders"><section class="sahne-alani" aria-label="3D sahne">
<canvas id="sahne" role="img" aria-label="Arduino UNO kartı ve breadboard'un üç boyutlu görünümü. Parmakla döndürülebilir, iki parmakla yakınlaştırılabilir." tabindex="-1"></canvas>
<div class="etiketler" aria-hidden="true"></div><div class="yukleniyor" aria-hidden="true">3D sahne hazırlanıyor</div>
<div class="webgl-yok"><p>Bu cihaz 3D görüntüyü açamadı. Kartlardaki anlatım ve mini sınav çalışır.</p></div>
<div class="baglam-mesaj"><p>Ekran kartı sahneyi durdurdu.</p><button type="button" class="dugme birincil" id="yeniden-yukle">Yeniden yükle</button></div>
<p class="ipucu ipucu-delik">Bir deliğe dokun: bağlı delikler yeşil yanar</p><p class="ipucu ipucu-dokun">Parçalara dokunarak tanı</p>
<aside id="bilgi" class="bilgi" hidden aria-live="polite"><button type="button" class="kapat" id="bilgi-kapat" aria-label="Bilgiyi kapat">${ico('x')}</button><div class="kesif-soru" id="kesif-soru" hidden><p class="etiket-kucuk">Keşif</p><h3>Sence bu nedir, ne işe yarar?</h3><button type="button" class="dugme birincil" id="kesif-gor">Cevabı gör</button></div><div id="bilgi-cevap"><h3 id="bilgi-baslik"></h3><p class="etiket-kucuk">Ne işe yarar?</p><p id="bilgi-teknik"></p><p class="sosyal"><strong>Günlük hayatta:</strong> <span id="bilgi-sosyal"></span></p></div></aside>
<div class="sahne-arac"><div class="sol-arac"><button type="button" class="kesif-dugme" id="kesif-dugme" aria-pressed="false" title="Parçalara dokunarak ne olduklarını keşfet">${ico('search')}<span>Keşif</span></button><div class="gorunum" role="group" aria-label="Bakış açısı">${[['egik', 'Eğik', 'Eğik'], ['ustten', 'Üstten', 'Üst'], ['onden', 'Önden', 'Ön'], ['yandan', 'Yandan', 'Yan']].map(([k, y, ks]) => `<button type="button" data-gorunum="${k}" aria-pressed="${k === 'egik'}" aria-label="${y} bakış"><span class="uzun">${y}</span><span class="kisa" aria-hidden="true">${ks}</span></button>`).join('')}</div></div>
<nav class="mini-gezinti" aria-label="Adımlar (panel kapalıyken)"><button type="button" id="mini-geri" aria-label="Önceki adım">${ico('chevron-left')}</button><button type="button" id="mini-ac" class="mini-baslik" aria-label="Anlatım panelini aç"><span id="mini-sayac">1/${adimlar.length}</span><span id="mini-baslik"></span></button><button type="button" id="mini-ileri" aria-label="Sonraki adım">${ico('chevron-right')}</button></nav>
<div class="yakinlik" role="group" aria-label="Yakınlaştırma"><button type="button" id="uzaklas" aria-label="Uzaklaştır">${ico('zoom-out')}</button><button type="button" id="yakinlas" aria-label="Yakınlaştır">${ico('zoom-in')}</button></div></div></section>
<div class="panel-kenar" role="separator" aria-orientation="vertical" aria-controls="kartlar" aria-label="Panel genişliği: sürükleyin ya da ok tuşlarını kullanın" tabindex="0"><button type="button" class="panel-dugme" id="panel-dugme" aria-controls="kartlar" aria-expanded="true" aria-label="Anlatım panelini kapat">${ico('chevron-right')}</button></div>
<section class="kart-alani" id="kartlar" aria-label="Anlatım kartları"><div class="tutamac" aria-hidden="true"><span></span></div><div class="kart-ust"><span class="adim-etiket">Adım <span id="adim-sayac">1 / ${adimlar.length}</span></span><span class="kisa-baslik" id="kisa-baslik"></span><div class="ilerleme" aria-hidden="true"><span id="ilerleme"></span></div><button type="button" class="kucuk-dugme" id="ayar-dugme" aria-expanded="false" aria-controls="ayarlar" aria-label="Panel ayarları" title="Panel genişliği, yazı boyutu, taraf">${ico('sliders-horizontal')}</button></div>
<div class="ayarlar" id="ayarlar" hidden><p class="ayar-ad yatay-ayar">Panel genişliği</p><div class="grup yatay-ayar" role="group" aria-label="Panel genişliği">${[['dar', 'Dar'], ['orta', 'Orta'], ['genis', 'Geniş']].map(([k, y]) => `<button type="button" class="dugme" data-panel-boyut="${k}" aria-pressed="${k === 'orta'}">${y}</button>`).join('')}</div>
<p class="ayar-ad">Yazı boyutu</p><div class="grup" role="group" aria-label="Yazı boyutu"><button type="button" class="dugme" data-yazi="-1" aria-label="Yazıyı küçült">A−</button><span class="yazi-deger" id="yazi-deger">%100</span><button type="button" class="dugme" data-yazi="1" aria-label="Yazıyı büyüt">A+</button></div>
<p class="ayar-ad yatay-ayar">Panel tarafı</p><div class="grup yatay-ayar" role="group" aria-label="Panel tarafı"><button type="button" class="dugme" data-yan="sol" aria-pressed="false">Sol</button><button type="button" class="dugme" data-yan="sag" aria-pressed="true">Sağ</button></div>
<label class="ayar-satir"><input type="checkbox" id="tahmin-ayar" checked> Keşifte önce tahmin ettir</label></div>
<div class="kart-govde"><h1 class="sr-only">${esc(d.baslik)}: 3D Arduino simülasyonu</h1><ol class="adimlar">${adimlar.map((a, i) => adimHtml(d, a, i)).join('')}</ol></div>
<nav class="kart-alt" aria-label="Adımlar"><button type="button" class="dugme" id="geri">${ico('chevron-left')}Geri</button><button type="button" class="dugme birincil" id="ileri">İleri${ico('chevron-right')}</button></nav></section></main>
${ogretmenHtml(d)}<footer class="alt"><a href="/3d">3D Simülasyon Merkezi</a> · <a href="/blog">bote.web.tr blog</a></footer>
<div id="duyuru" class="sr-only" aria-live="polite"></div>${sinifPenceresi}
<script type="application/json" id="ders-veri">${jsonGom(veri)}</script><script type="module" src="/3d/assets/${jsAd}"></script></body></html>`;
}

function merkezSayfasi() {
  const yol = '/3d';
  const baslik = '3D Simülasyon Merkezi: Arduino ve Breadboard | bote.web.tr';
  const aciklama = 'Ortaokul Bilişim Teknolojileri ve Yazılım dersleri için Arduino ve breadboard dersleri: üç boyutlu sahne, sınıfa göre anlatım ve mini sınav.';
  const jsonld = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: '3D Simülasyon Merkezi', description: aciklama, url: SITE + yol, inLanguage: 'tr',
    hasPart: dersler.map((d) => ({ '@type': 'LearningResource', name: d.baslik, url: `${SITE}/3d/${d.slug}` })) };
  return `${bas({ baslik, aciklama, yol, jsonld })}${ustCubuk(null)}<main class="merkez"><section class="giris"><h1>3D Simülasyon Merkezi</h1>
<p>Ortaokul Bilişim Teknolojileri ve Yazılım dersleri için Arduino ve breadboard'u üç boyutlu inceleyin, devreyi adım adım kurun ve çalıştırın. Akıllı tahtada, tablette ve telefonda çalışır; kurulum ve üyelik gerekmez.</p></section>
<section class="secim-kutusu" aria-labelledby="sinif-sec-baslik"><h2 id="sinif-sec-baslik">Önce sınıfı seçin</h2>${sinifIzgara()}</section>
<ol class="ders-listesi">${dersler.map((d) => (d.taslak ? `<li><div class="hazirlaniyor"><span class="no">${d.cfg.no}</span><h2>${esc(YEDEK_AD[d.slug])}</h2><p>Hazırlanıyor.</p></div></li>` : `<li><a data-ders-baglanti href="/3d/${d.slug}"><span class="no">${d.cfg.no}</span><h2>${esc(d.baslik)}</h2><p>${esc(d.kisa)}</p><span class="meta">${Object.keys(d.cfg.adimlar).length} adım · yaklaşık ${esc(d.sure || 20)} dk</span></a></li>`)).join('')}</ol>
<div class="notlar"><section><h2>Akıllı tahtada</h2><p>Ders sayfasında Tahta modu ve Tam ekran düğmeleri yazıyı ve düğmeleri büyütür. Adımlar ok tuşları ya da sunum kumandasıyla geçilir.</p></section>
<section><h2>Sınıfa göre anlatım</h2><p>5, 6, 7 ve 8. sınıf için ayrı tanımlar, açıklamalar ve sorular vardır. Her kavramın teknik tanımı ve günlük hayattaki yeri birlikte verilir.</p></section>
<section><h2>Tahmin et, sonra gör</h2><p>Öğrenciler önce tahmin eder, sonra sahnede sonucu görür: LED ters takılırsa ne olur, direnç çıkarılırsa ne değişir?</p></section></div></main>
<footer class="alt"><a href="/blog">bote.web.tr blog</a></footer><script type="module" src="/3d/assets/${jsAd}"></script></body></html>`;
}

// ------------------------------------------------------------------ yaz
fs.writeFileSync(path.join(CIKTI, 'index.html'), merkezSayfasi());
for (const d of dersler) { const f = path.join(CIKTI, `${d.slug}.html`); if (d.taslak && !process.argv.includes('--taslak')) { if (fs.existsSync(f)) fs.unlinkSync(f); } else fs.writeFileSync(f, dersSayfasi(d)); }
const boy = (f) => Math.round(fs.statSync(f).size / 1024);
console.log(`3d: ${dersler.length} ders (${dersler.filter((d) => d.taslak).length} içeriksiz, yazılmadı), paket ${jsAd} ${Math.round(kod.length / 1024)} KB, sayfalar: ${['index', ...dersler.map((d) => d.slug)].filter((s) => fs.existsSync(path.join(CIKTI, `${s}.html`))).map((s) => `${s} ${boy(path.join(CIKTI, `${s}.html`))} KB`).join(', ')}`);
