// tools/pdf/sablon.mjs — BOTE blog PDF'inin yazdirma sablonu (A4 dikey) (28.09.2026)
// ahmetcelen.com.tr sablonunun (math scripts/pdf_sablon.py) BOTE karsiligi; tasarim ve
// sayfa duzeni ayni (Ahmet: "tasarim PDF mantigi ayni"), renkler BOTE'nin mor-pembe kimligi.
//   1. sayfa  koyu serit + BOTE logosu (ana sayfadaki), konu, ozet, kapak, belge bilgileri,
//             guncellik kontrolu + QR, site tanitimi
//   govde     icindekiler, yazi (atif numaralari gorunur), Ozet, SSS, Kaynaklar, Atif
//   son       "bu belge hakkinda"; son sayfa site + UniConnectly + Diger yapimlarimiz
//   her sayfa alt bilgi (Chrome): solda web ikonu + "bote.web.tr - <slogan>", sagda kod · surum · sayfa
// ⚠️ Okura donuk metinler VARSAYILAN (math'te Ahmet'in onayladiklariyla ayni kalip).
// Sablon/CSS/alt bilgi degisince veri.mjs SABLON'u 1 artir.
import QRCode from 'qrcode';
import { renderInline } from '../blog/markdown.mjs';
import { citation } from '../blog/cite.mjs';
import * as V from './veri.mjs';

const k = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GUNCELLIK = 'Bu belgeyi kullanmadan veya paylaşmadan önce güncelliğinden emin olunuz. QR kodu okutun ya da adrese girin: elinizdeki sürümün güncel olup olmadığını ve sonradan düzeltilen bir hata bulunup bulunmadığını gösterir.';
export const UCRETSIZ = 'Bu belge tamamen ücretsizdir. Size satmaya çalışanlara itibar etmeyiniz.';
export const GUNCELLIK_ALT = 'Hatalar düzeltildikçe yeni sürüm yayımlanır; bütün değişiklikler sitede sürüm geçmişinde listelenir.';
export const TANITIM = 'Bölüm tanıtımı, eğitim fakültesi ve öğretmenlik rehberleri, eğitim teknolojileri ve öğrenme kuramları üzerine kaynaklı yazılar. Tamamı ücretsiz.';
const SITE_GIRIS = 'BÖTE bölümü, eğitim fakültesi ve öğretmenlik üzerine ücretsiz, kaynaklı yazılar. Bu belgenin güncel hâli ve çok daha fazlası sitede.';
const SITE_BOLUMLER = [
  ['Blog yazıları', 'Eğitim teknolojileri, kuramlar ve öğretmenlik', '/blog'],
  ['PDF merkezi', 'Güncel PDF\'ler, sürüm geçmişi ve doğrulama', '/pdf'],
  ['BÖTE hakkında', 'Bölümün tarihi, amacı ve fakültedeki yeri', '/about'],
  ['Müfredat', 'Dört yıllık ders programı ve dersler', '/curriculum'],
  ['Mezunlar ve meslek', 'Mezunların çalıştığı alanlar ve unvanlar', '/graduation'],
  ['Belge doğrulama', 'PDF\'inizin güncel ve özgün olduğunu denetleyin', '/d'],
];
// UniConnectly: uygulamada VAR olan ozellikler (math scripts/uniconnectly_blok.py FAYDALAR, 22.09 dogrulama).
const UC_METIN = 'Üniversite topluluklarını, etkinlikleri ve şirketleri tek uygulamada buluşturan ücretsiz kampüs platformu.';
const UC_FAYDALAR = [
  ['Dijital portföy', 'Katıldığın etkinlikleri ve sertifikalarını uniconnectly.com/@kullanıcıadı adresinde herkese açık sergile'],
  ['Doğrulanabilir katılım', 'QR ile giriş yaptığın etkinlikler portföyünde doğrulanmış listelenir'],
  ['Sertifikalar', 'Platformda verilen sertifikalar doğrulanmış işaretli, edu.tr e-postan onaylı'],
  ['Anlık fırsatlar', 'Staj, iş ve burs duyuruları akışına düşer'],
  ['Topluluklar ve etkinlikler', 'Üniversitendeki toplulukları ve takvimi tek ekranda gör, başvurulu etkinliklere katıl'],
  ['Üye kartı indirimleri', 'Takip ettiğin toplulukların anlaşmalı işletme indirimlerinden yararlan'],
];
const DIGER_GIRIS = 'UniConnectly gibi bunlar da bizim yapımlarımız. Bu belgeyi ücretsiz sunuyoruz; yapımlarımızı keşfetmeniz ve çevrenizle paylaşmanız, bu çalışmaları sürdürmemiz için en büyük destektir.';
const DIGER = [
  { ad: 'ahmetcelen.com.tr', kalin: 'Üniversite ve kamu sınavlarına ücretsiz matematik:', devam: 'konu anlatımları ve PDF\'leri, çıkmış sorular ve sınav geri sayımları.', adres: 'https://ahmetcelen.com.tr/', gorunen: 'ahmetcelen.com.tr' },
  { ad: 'Veterito', logo: 'veterito.png', kalin: 'Hayvanseverlerin sosyal medyası', devam: 've veteriner akıllı klinik yönetim uygulaması.', adres: 'https://veterito.com/', gorunen: 'veterito.com' },
];

export async function qrSvg(adres) {
  const svg = await QRCode.toString(adres, { type: 'svg', errorCorrectionLevel: 'M', margin: 4, color: { dark: '#1B1426', light: '#ffffff' } });
  return svg.replace(/ width="\d+"| height="\d+"/g, '');
}
export function globe(boyut = 9, renk = '#5A2BC4') {
  return `<svg width="${boyut}" height="${boyut}" viewBox="0 0 24 24" fill="none" stroke="${renk}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;margin-right:3px"><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19"/><path d="M12 2.5c2.6 2.6 4 6 4 9.5s-1.4 6.9-4 9.5c-2.6-2.6-4-6-4-9.5s1.4-6.9 4-9.5z"/></svg>`;
}

export function altBilgi(kd, surum) {
  return '<div style="width:100%;margin:0 16mm;display:flex;justify-content:space-between;align-items:center;'
    + 'font-family:\'Helvetica Neue\',Helvetica,Arial,sans-serif;font-size:7.5px;color:#625A74;'
    + '-webkit-print-color-adjust:exact;border-top:.5px solid #E6E0EF;padding-top:5px">'
    + `<span>${globe()}<b style="color:#5A2BC4;font-size:8px">bote.web.tr</b> - ${k(V.SLOGAN)}</span>`
    + `<span>${k(kd)} · Sürüm ${k(surum)} · Sayfa <span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`;
}
export const ustBilgi = () => '<div></div>';

const CSS = `
@page { size: A4; margin: 15mm 16mm 17mm 16mm; }
@font-face{font-family:"Inter";font-weight:100 900;src:url(/blog/fonts/inter-latin-opsz-normal.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:"Inter";font-weight:100 900;src:url(/blog/fonts/inter-latin-ext-opsz-normal.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:"Inter";font-style:italic;font-weight:100 900;src:url(/blog/fonts/inter-latin-opsz-italic.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:"Inter";font-style:italic;font-weight:100 900;src:url(/blog/fonts/inter-latin-ext-opsz-italic.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
:root { --mor:#5A2BC4; --mor-acik:#EEE8FC; --pembe:#C8205F; --pembe-acik:#FCE9F1; --murekkep:#1B1426;
  --govde:#3B3250; --soluk:#625A74; --cizgi:#E6E0EF; --zemin:#F3EFFA; }
* { box-sizing: border-box; }
body { margin: 0; font: 400 10.3pt/1.6 Inter, system-ui, sans-serif; color: var(--govde); }
h1, h2, h3, h4 { color: var(--murekkep); letter-spacing: -.01em; }
a { color: var(--mor); text-decoration: underline; text-decoration-thickness: .5pt; text-underline-offset: 2pt; }
strong { color: var(--murekkep); font-weight: 600; }
img { max-width: 100%; height: auto; }

.p-bilgi-sayfasi { height: 265mm; display: flex; flex-direction: column; break-after: page; }
.p-marka { display: flex; align-items: center; gap: 10pt; padding: 9pt 12pt; border-radius: 7pt; background: var(--murekkep); }
.p-marka img { height: 22pt; width: auto; }
.p-marka em { font-style: normal; font-weight: 600; color: #C9BFE0; font-size: 9pt; border-left: .6pt solid #4A3F63; padding-left: 10pt; }
.p-marka .p-site { margin-left: auto; color: #fff; font-size: 10pt; font-weight: 700; text-decoration: none; }
.p-rozetler { display: flex; flex-wrap: wrap; gap: 5pt; margin: 14pt 0 6pt; }
.p-etiket { padding: 2pt 9pt; border-radius: 99pt; font: 600 8.5pt Inter, sans-serif; color: var(--mor); background: var(--mor-acik); }
.p-tur { padding: 2pt 8pt; border-radius: 4pt; background: var(--zemin); color: var(--soluk); font: 600 8.5pt Inter, sans-serif; }
h1 { font-size: 24pt; line-height: 1.14; margin: 2pt 0 8pt; }
.p-ozet { margin: 0 0 10pt; font-size: 10.6pt; }
.p-kapak { display: block; width: 100%; aspect-ratio: 1200 / 630; flex: 0 1 auto; min-height: 0; object-fit: contain;
  border-radius: 6pt; border: .6pt solid var(--cizgi); background: var(--zemin); }
.p-alt-blok { margin-top: auto; }
.p-bilgi { display: grid; grid-template-columns: 1fr 1.25fr 30mm; gap: 10pt; margin-top: 10pt; padding: 10pt 12pt;
  border: 1pt solid #DCD0F4; background: #F8F5FE; border-radius: 6pt; }
.p-kutu-baslik { margin: 0 0 5pt; font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--murekkep); }
.p-kunye dl { display: grid; grid-template-columns: auto 1fr; gap: 1.5pt 8pt; margin: 0; font-size: 8.6pt; }
.p-kunye dt { color: var(--soluk); } .p-kunye dd { margin: 0; color: var(--murekkep); font-weight: 600; }
.p-kunye dd.p-iz { font-family: ui-monospace, Menlo, monospace; font-weight: 500; }
.p-guncellik p { margin: 0 0 4pt; font-size: 8.6pt; line-height: 1.45; }
.p-guncellik .p-adres { font-weight: 700; color: var(--mor); font-size: 9pt; word-break: break-all; }
.p-guncellik .p-kucuk { color: var(--soluk); font-size: 7.8pt; }
.p-ucretsiz { margin-top: 5pt !important; padding: 4pt 7pt; border-radius: 4pt; background: #fff; border: .8pt solid #D6C8F5;
  color: var(--murekkep); font-weight: 600; font-size: 8.3pt !important; }
.p-qr svg { display: block; width: 30mm; height: 30mm; }
.p-qr span { display: block; margin-top: 2pt; text-align: center; font-size: 7pt; color: var(--soluk); }
.p-tanitim { display: flex; align-items: center; gap: 10pt; margin-top: 8pt; padding: 9pt 12pt; border-radius: 6pt;
  background: var(--murekkep); color: #D9D1EA; font-size: 8.8pt; line-height: 1.45; }
.p-tanitim a { text-decoration: none; } .p-tanitim b { color: #fff; font-size: 11pt; white-space: nowrap; }

.p-icindekiler { border: 1pt solid var(--cizgi); border-radius: 6pt; padding: 10pt 14pt; margin-bottom: 12pt; break-inside: avoid; }
.p-icindekiler ol { margin: 0; padding-left: 16pt; columns: 2; column-gap: 18pt; font-size: 9.2pt; }
.p-icindekiler li { margin: 0 0 2pt; break-inside: avoid; }
.p-icindekiler a { color: var(--govde); text-decoration: none; }

main h2, .p-ek h2 { font-size: 14.5pt; line-height: 1.25; margin: 16pt 0 6pt; break-after: avoid; }
main h3 { font-size: 12pt; margin: 12pt 0 4pt; break-after: avoid; }
p { margin: 0 0 7pt; orphans: 3; widows: 3; }
ul, ol { margin: 0 0 8pt; padding-left: 16pt; } li { margin-bottom: 3pt; }
.cite { font: 600 .66em/0 Inter, sans-serif; vertical-align: super; margin-left: 1px; white-space: nowrap; }
.cite a { color: var(--pembe); text-decoration: none; }
blockquote { margin: 9pt 0; padding: 6pt 12pt; border-left: 2.5pt solid var(--mor); background: var(--mor-acik); border-radius: 0 5pt 5pt 0; break-inside: avoid; }
blockquote p:last-child { margin: 0; }
table { width: 100%; border-collapse: collapse; font-size: 8.8pt; margin: 9pt 0; break-inside: avoid; }
th, td { border: .6pt solid var(--cizgi); padding: 4pt 6pt; text-align: left; vertical-align: top; }
th { background: var(--zemin); color: var(--murekkep); font-weight: 600; }
figure { margin: 9pt 0; break-inside: avoid; } figcaption { font-size: 8.5pt; color: var(--soluk); text-align: center; margin-top: 3pt; }
hr { border: 0; border-top: .6pt solid var(--cizgi); margin: 12pt 0; }
.p-ozet-liste li { margin-bottom: 4pt; }
.p-sss { padding: 6pt 10pt; margin-bottom: 5pt; border: .6pt solid var(--cizgi); border-radius: 5pt; break-inside: avoid; }
.p-sss p { margin: 0; } .p-sss .p-soru { font-weight: 600; color: var(--murekkep); margin-bottom: 2pt; }
.p-kaynaklar { padding-left: 0; list-style: none; font-size: 8.8pt; }
.p-kaynaklar li { display: grid; grid-template-columns: 16pt 1fr; gap: 4pt; margin-bottom: 4pt; break-inside: avoid; }
.p-kaynaklar .n { font-weight: 700; color: var(--pembe); }
.p-kaynaklar a { color: var(--govde); } .p-kaynaklar cite { font-style: italic; }
.p-atif { padding: 8pt 11pt; border-radius: 5pt; background: var(--zemin); border: .6pt solid var(--cizgi); font-size: 9pt; break-inside: avoid; }
.p-son { margin-top: 14pt; padding: 10pt 12pt; border: 1pt solid #DCD0F4; background: #F8F5FE; border-radius: 6pt; font-size: 8.8pt; break-inside: avoid; }
.p-son p { margin: 0 0 4pt; } .p-son p:last-child { margin: 0; color: var(--soluk); }

.p-tanitim-sayfasi { break-before: page; height: 265mm; display: flex; flex-direction: column; gap: 7pt; }
.p-yarim { flex: 0 0 auto; border-radius: 8pt; padding: 12pt 15pt; display: flex; flex-direction: column; }
.p-yarim h2 { margin: 0 0 4pt; font-size: 17pt; display: flex; align-items: center; gap: 6pt; }
.p-yarim h2 small { font-weight: 600; font-size: 10pt; color: var(--soluk); }
.p-yarim > p { margin: 0 0 10pt; }
.p-site-yari { background: #F8F5FE; border: 1pt solid #DCD0F4; }
.p-site-bas { display: flex; gap: 12pt; align-items: flex-start; }
.p-site-bas > div:first-child { flex: 1; }
.p-site-qr { flex: none; text-align: center; font: 600 7.5pt Inter, sans-serif; color: var(--mor); text-decoration: none; }
.p-site-qr svg { display: block; width: 21mm; height: 21mm; margin-bottom: 1pt; }
.p-kartlar { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6pt; }
.p-kart { display: block; padding: 6pt 8pt; background: #fff; border: .8pt solid #DCD0F4; border-radius: 6pt; text-decoration: none; color: var(--govde); }
.p-kart b { display: block; color: var(--murekkep); font-size: 9.4pt; }
.p-kart span { display: block; font-size: 7.8pt; line-height: 1.4; }
.p-kart em { display: block; font-style: normal; font-size: 7.4pt; color: var(--mor); margin-top: 1pt; }
.p-uc-yari { flex: 1 1 auto; background: #fff; border: 1pt solid var(--cizgi); }
.p-uc-logo { height: 26pt; width: auto; align-self: flex-start; margin-bottom: 6pt; }
.p-faydalar { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 6pt 12pt; }
.p-faydalar li { margin: 0; padding-left: 10pt; position: relative; font-size: 8.4pt; line-height: 1.4; }
.p-faydalar li::before { content: ""; position: absolute; left: 0; top: 4pt; width: 4pt; height: 4pt; border-radius: 50%; background: var(--mor); }
.p-faydalar b { display: block; color: var(--murekkep); font-size: 9pt; }
.p-yarim-alt { margin-top: auto; display: flex; align-items: center; gap: 10pt; padding-top: 10pt; }
.p-yarim-alt svg { width: 24mm; height: 24mm; flex: none; }
.p-yarim-alt p { margin: 0; font-size: 8.8pt; } .p-yarim-alt strong { font-size: 10pt; }
.p-rozetler-uc { display: flex; gap: 6pt; margin-top: 6pt; } .p-rozetler-uc img { height: 22pt; width: auto; }
.p-diger { flex: 0 0 auto; border-radius: 8pt; padding: 12pt 14pt; background: var(--murekkep); color: #D0C8E2; }
.p-diger-bas { margin: 0 0 8pt; font-size: 8.6pt; line-height: 1.45; }
.p-diger-bas b { display: block; color: #fff; font-size: 12pt; margin-bottom: 2pt; }
.p-diger-kartlar { display: grid; grid-template-columns: 1fr 1fr; gap: 8pt; }
.p-diger-kart { display: flex; flex-direction: column; gap: 5pt; padding: 9pt 11pt; border-radius: 6pt;
  background: rgba(255,255,255,.07); border: .6pt solid rgba(255,255,255,.16); color: #D0C8E2; text-decoration: none; }
.p-diger-kart img { height: 20pt; width: auto; align-self: flex-start; }
.p-diger-kart .p-diger-ad { font-weight: 700; font-size: 12pt; color: #fff; }
.p-diger-kart p { margin: 0; font-size: 8.4pt; line-height: 1.42; } .p-diger-kart p b { color: #fff; font-weight: 600; }
.p-diger-kart em { font-style: normal; font-weight: 700; font-size: 9pt; color: #C4B2FF; }
`;

async function sonSayfa(kd) {
  const utm = `utm_source=bote.web.tr&amp;utm_medium=pdf&amp;utm_campaign=${kd.toLowerCase()}`;
  const kartlar = SITE_BOLUMLER.map(([b, a, yol]) => `<a class="p-kart" href="${V.ALAN}${yol}"><b>${k(b)}</b><span>${k(a)}</span><em>bote.web.tr${yol}</em></a>`).join('');
  const siteQr = `${V.ALAN}/pdf`;
  const ucAdres = `https://uniconnectly.com/?ref=bote.web.tr&utm_source=bote.web.tr&utm_medium=pdf&utm_campaign=pdf-${kd.toLowerCase()}`;
  const faydalar = UC_FAYDALAR.map(([b, a]) => `<li><b>${k(b)}</b>${k(a)}</li>`).join('');
  const rozetler = ['app-store', 'google-play', 'appgallery'].map((r) => `<img src="/.pdf-yapim/uc/${r}.png" alt="">`).join('');
  const diger = DIGER.map((d) => `<a class="p-diger-kart" href="${d.adres}?${utm}">`
    + (d.logo ? `<img src="/.pdf-yapim/diger/${d.logo}" alt="${k(d.ad)}">` : `<span class="p-diger-ad">${globe(13, '#ffffff')}${k(d.ad)}</span>`)
    + `<p><b>${k(d.kalin)}</b> ${k(d.devam)}</p><em>${k(d.gorunen)}</em></a>`).join('');
  return `<section class="p-tanitim-sayfasi">
  <div class="p-yarim p-site-yari">
    <div class="p-site-bas">
      <div><h2>${globe(18)}bote.web.tr <small>- ${k(V.SLOGAN)}</small></h2><p>${k(SITE_GIRIS)}</p></div>
      <a class="p-site-qr" href="${siteQr}">${await qrSvg(siteQr)}PDF merkezi</a>
    </div>
    <div class="p-kartlar">${kartlar}</div>
  </div>
  <div class="p-yarim p-uc-yari">
    <img class="p-uc-logo" src="/.pdf-yapim/uc/logo.webp" alt="UniConnectly">
    <p>${k(UC_METIN)}</p>
    <ul class="p-faydalar">${faydalar}</ul>
    <div class="p-yarim-alt">${await qrSvg(ucAdres)}<p><strong>Ücretsiz keşfet</strong><br>QR kodu okutun ya da <a href="${k(ucAdres)}">uniconnectly.com</a> adresine girin.<span class="p-rozetler-uc">${rozetler}</span></p></div>
  </div>
  <div class="p-diger"><p class="p-diger-bas"><b>Diğer yapımlarımız</b>${k(DIGER_GIRIS)}</p><div class="p-diger-kartlar">${diger}</div></div>
</section>`;
}

export async function belge(no, p, s, blog) {
  const kd = V.kod(no);
  const dogrula = V.ALAN + V.dogrulamaYolu(kd, s.surum);
  const toc = [...p.headings.filter((h) => h.depth === 2).map((h) => [h.id, h.text]),
    ...(p.summary.length ? [['ozet', 'Özet']] : []), ...(p.faq.length ? [['sss', 'Sık sorulan sorular']] : []),
    ['kaynaklar', 'Kaynaklar'], ['atif', 'Atıf']];
  const cite = citation(p, blog);
  const kaynak = V.kaynakca(p).map((x) => `<li><span class="n">${x.n}</span><span>${k(x.lead)} <a href="${k(x.url)}"><cite>${k(x.title)}</cite></a>.${k(x.pub)}</span></li>`).join('');
  const gecmisAdres = V.ALAN + V.dogrulamaYolu(kd);
  return `<!doctype html>
<html lang="tr"><head><meta charset="utf-8">
<title>${k(p.title)} · ${kd} Sürüm ${k(s.surum)}</title>
<style>${CSS}</style></head>
<body>
<section class="p-bilgi-sayfasi">
  <header class="p-marka"><img src="/assets/img/educator-logo1.png" alt="BÖTE"><em>Blog</em><a class="p-site" href="${V.ALAN}/">${globe(10, '#ffffff')}bote.web.tr</a></header>
  <div class="p-rozetler"><span class="p-etiket">${k(p.category.name)}</span>${p.type === 'kavram' ? '<span class="p-tur">Kavram</span>' : ''}</div>
  <h1>${k(p.title)}</h1>
  <p class="p-ozet">${k(p.description)}</p>
  ${p.image?.src ? `<img class="p-kapak" src="${k(p.image.src.split('?')[0])}" alt="${k(p.imageAlt)}">` : ''}
  <div class="p-alt-blok">
  <div class="p-bilgi">
    <div class="p-kunye"><p class="p-kutu-baslik">Belge bilgileri</p><dl>
      <dt>Belge kodu</dt><dd>${kd}</dd><dt>Yazı no</dt><dd>${no}</dd><dt>Sürüm</dt><dd>${k(s.surum)}</dd>
      <dt>Sürüm tarihi</dt><dd>${V.trTarih(s.tarih)}</dd><dt>İçerik izi</dt><dd class="p-iz">${V.parmakIzi(s.icerik)}</dd>
      <dt>Yayımlayan</dt><dd>bote.web.tr</dd></dl></div>
    <div class="p-guncellik"><p class="p-kutu-baslik">Güncellik kontrolü</p><p>${k(GUNCELLIK)}</p>
      <p class="p-adres"><a href="${k(dogrula)}">${k(dogrula.replace('https://', ''))}</a></p>
      <p class="p-kucuk">${k(GUNCELLIK_ALT)}</p><p class="p-ucretsiz">${k(UCRETSIZ)}</p></div>
    <div class="p-qr"><a href="${k(dogrula)}">${await qrSvg(dogrula)}</a><span>Güncelliği kontrol et</span></div>
  </div>
  <aside class="p-tanitim"><a href="${V.ALAN}/"><b>${globe(12, '#ffffff')}bote.web.tr</b></a><span>${k(TANITIM)}</span></aside>
  </div>
</section>
<nav class="p-icindekiler" aria-label="İçindekiler"><p class="p-kutu-baslik">İçindekiler</p><ol>${toc.map(([id, t]) => `<li><a href="#${k(id)}">${k(t)}</a></li>`).join('')}</ol></nav>
<main>
${V.govde(p)}
</main>
<div class="p-ek">
${p.summary.length ? `<h2 id="ozet">Özet</h2><ul class="p-ozet-liste">${p.summary.map((x) => `<li>${renderInline(x)}</li>`).join('')}</ul>` : ''}
${p.faq.length ? `<h2 id="sss">Sık sorulan sorular</h2>${p.faq.map((f) => `<div class="p-sss"><p class="p-soru">${k(f.q)}</p><p>${renderInline(f.a)}</p></div>`).join('')}` : ''}
<h2 id="kaynaklar">Kaynaklar</h2><ol class="p-kaynaklar">${kaynak}</ol>
<h2 id="atif">Atıf</h2><div class="p-atif">${cite.apaHtml}</div>
</div>
<section class="p-son">
  <p><strong>Bu belge hakkında.</strong> Bu PDF, bote.web.tr'deki <a href="${V.ALAN}${k(p.url)}">${k(p.title)}</a> yazısının ${kd} kodlu belgesinin ${k(s.surum)} sürümüdür.</p>
  <p>Sürüm geçmişi ve değişiklikler: <a href="${k(gecmisAdres)}">${k(gecmisAdres.replace('https://', ''))}</a>. Güncel sürümü ve bütün yazıların PDF'lerini <a href="${V.ALAN}/pdf">bote.web.tr/pdf</a> adresinde bulabilirsiniz. Elinizdeki dosyanın bizim yayımladığımız sürümle birebir aynı olup olmadığını <a href="${V.ALAN}/d">bote.web.tr/d</a> adresinde denetleyebilirsiniz; dosya cihazınızdan dışarı gönderilmez.</p>
  <p>© ${s.tarih.slice(0, 4)} bote.web.tr · ${k(V.SLOGAN)}</p>
</section>
${await sonSayfa(kd)}
</body></html>`;
}
