// Bilgisayar Donanımı önizlemesini /3d/donanim adresine yayınlar (Ahmet 02.11.2026: "bu haliyle al da bakalım,
// sonra geliştiririz"). Sahne kolunun önizleme kabuğu (tools/3d/donanim/onizleme.mjs) küçültülmüş derlenir, sayfaya
// site başlığı, açıklama, canonical, yapısal veri ve merkeze dönüş bağlantısı eklenir. Ders motoruna takılınca
// (genel ders arayüzü + aile adaptörü) bu dosya ve merkezdeki önizleme kartı kalkar, aile yollar.mjs AILELER'e girer.
//   node tools/3d/donanim-yayin.mjs   (önce: node tools/3d/build.mjs)
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { MERKEZ_YOL, MERKEZ_AD } from './yollar.mjs';

const BU = path.dirname(fileURLToPath(import.meta.url));
const KOK = path.resolve(BU, '../..');
const SITE = 'https://bote.web.tr';
const YOL = '/3d/donanim';
const AD = 'Bilgisayar Donanımı';
const ASSETS = path.join(KOK, '3d/assets');

// Önizleme kabuğu kendi klasörüne yazar (3d/donanim-onizleme, depoya girmez); buradan alınır.
execFileSync(process.execPath, [path.join(BU, 'donanim/onizleme.mjs')], { env: { ...process.env, MIN: '1' }, stdio: 'inherit' });
const kaynak = path.join(KOK, '3d/donanim-onizleme');
const kod = fs.readFileSync(path.join(kaynak, 'onizleme.js'));
const jsAd = `donanim-${crypto.createHash('sha256').update(kod).digest('hex').slice(0, 10)}.js`;
for (const f of fs.readdirSync(ASSETS)) if (/^donanim-[0-9a-f]{10}\.js$/.test(f) && f !== jsAd) fs.unlinkSync(path.join(ASSETS, f));
fs.writeFileSync(path.join(ASSETS, jsAd), kod);

// Adım adları içerik ajanının ders-1.json taslağından (02.11); seçicide kimlik yerine görünür.
const ADIM_AD = {
  merak: 'Bilgisayarla nasıl konuşuruz?', donanim: 'Dokunabildiklerimiz ve dokunamadıklarımız',
  giris: 'Giriş birimleri: bilgisayarın kulağı ve gözü', klavye: 'Klavye: yazı nasıl girer?', fare: 'Fare: imleci götürür',
  'mikrofon-kamera': 'Mikrofon ve kamera: ses ve görüntü içeri girer', cikis: 'Çıkış birimleri: bilgisayar cevap verir',
  ekran: 'Ekran: milyonlarca küçük nokta', 'hoparlor-yazici': 'Hoparlör ve yazıcı: ses ve kâğıt', 'ikisi-de': 'Hem girdi hem çıktı',
  kablolar: 'Hepsi kasaya bağlanır', ozet: 'Özet ve sınıflandırma',
};

const baslik = 'Bilgisayar Donanımı 3D: Girdi ve Çıktı Birimleri | bote.web.tr';
const aciklama = 'Bilgisayar donanımını 3D masada keşfedin: kasa, monitör, klavye, fare, mikrofon, hoparlör ve yazıcı. Girdi ve çıktı birimleri adım adım, ortaokul için.';
const jsonld = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', name: `${AD} 3D: Girdi ve Çıktı Birimleri`, url: SITE + YOL, inLanguage: 'tr', description: aciklama,
      isPartOf: { '@type': 'CollectionPage', name: MERKEZ_AD, url: SITE + MERKEZ_YOL } },
    { '@type': 'BreadcrumbList', itemListElement: [['bote.web.tr', '/'], [MERKEZ_AD, MERKEZ_YOL], [AD, YOL]].map(([name, y], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + y })) },
  ],
};
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const kafa = `<meta name="description" content="${esc(aciklama)}"><link rel="canonical" href="${SITE}${YOL}">
<meta name="theme-color" content="#5a2bc4"><link rel="icon" type="image/png" href="/assets/img/educator-fabicon-300x300.png">
<meta property="og:type" content="website"><meta property="og:title" content="${esc(baslik)}"><meta property="og:description" content="${esc(aciklama)}">
<meta property="og:url" content="${SITE}${YOL}"><meta property="og:image" content="${SITE}/blog/assets/covers/_blog.jpg">
<script type="application/ld+json">${JSON.stringify(jsonld)}</script>`;
const ekStil = `#pv-ust .pv-merkez{display:inline-flex;align-items:center;padding:0 10px;border-radius:8px;color:var(--violet);font:700 13px var(--font);text-decoration:none}
#pv-ust h1{margin:0 6px 0 0;font:700 15px/1.2 var(--font);color:var(--ink)}
#pv-ust select,#pv-ust button,#pv-ust .pv-merkez{min-height:44px}
#pv-adim{max-width:min(56vw,24em)}
#pv-bilgi{top:64px}`;
const adimAdi = `<script type="module">const A=${JSON.stringify(ADIM_AD)};const s=document.getElementById('pv-adim');const f=()=>{for(const o of s.options)if(A[o.value]&&o.textContent!==A[o.value])o.textContent=A[o.value]};new MutationObserver(f).observe(s,{childList:true});f();</script>`;

let html = fs.readFileSync(path.join(kaynak, 'index.html'), 'utf8');
const degistir = (eski, yeni) => {
  if (!html.includes(eski)) throw new Error(`önizleme kabuğu değişmiş, bulunamadı: ${eski.slice(0, 80)}`);
  html = html.replace(eski, () => yeni);
};
degistir('<meta name="robots" content="noindex">', '');
degistir('<title>Donanım önizleme</title>', `<title>${esc(baslik)}</title>${kafa}`);
degistir('</style></head>', `\n${ekStil}</style></head>`);
degistir('<select id="pv-ders" aria-label="Ders" disabled><option>girdi-cikti-birimleri</option></select>',
  `<a class="pv-merkez" href="${MERKEZ_YOL}" aria-label="${MERKEZ_AD}">‹ 3D</a><h1>${AD}</h1>`);
// JavaScript olmadan da okunur kısa tanım (ekran okuyucu, arama motoru); görünür arayüzü değiştirmez.
degistir('<div class="sahne-alani" id="sahne-alani">', '<p class="sr-only">Üç boyutlu bir bilgisayar masası: kasa, monitör, klavye, fare, mikrofon, web kamerası, hoparlörler, yazıcı, kulaklık ve USB bellek. Adımları ileri geri gezerek girdi ve çıktı birimlerini tanıyın; Keşif ile her parçanın ne işe yaradığını okuyun. Sahneyi parmakla ya da fareyle çevirebilirsiniz.</p><div class="sahne-alani" id="sahne-alani">');
degistir('<script type="module" src="/3d/donanim-onizleme/onizleme.js"></script>', `<script type="module" src="/3d/assets/${jsAd}"></script>${adimAdi}`);
fs.mkdirSync(path.join(KOK, '3d/donanim'), { recursive: true });
fs.writeFileSync(path.join(KOK, '3d/donanim/index.html'), html);
console.log(`donanım önizlemesi: ${YOL} ${Math.round(html.length / 1024)} KB, paket ${jsAd} ${Math.round(kod.length / 1024)} KB`);
