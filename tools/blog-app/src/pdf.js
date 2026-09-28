// PDF merkezi (/pdf), indirme (/pdf/<slug>) ve dogrulama (/d) sayfalarinin ortak parcalari (28.09.2026).
// ahmetcelen.com.tr'deki scripts/pdf_sayfalar.py'nin BOTE karsiligi; davranis ayni:
//   · indirme: 10 sn bekleme + UniConnectly tanitimi, 60 sn icinde indirilmezse yeniden hazirla
//   · QR hedefi: guncelse yesil animasyon; degilse guncele yonlendirme (8 sn, iptal edilebilir)
//   · duyurular: 90 gunluk "uptime" seridi + degisiklik listesi
//   · indirme sayilari kademeli (10+, 25+ ...), sayac medya.ahmetcelen.com.tr/pdf/indirme.json
// Sayfalar noindex (merkez haric) ve AdSense yuklemez (Base ads=false).
// ⚠️ Okura donuk metinler VARSAYILAN (math'te Ahmet'in onayladiklariyla ayni kalip).
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import * as V from '../../pdf/veri.mjs';

export { V };
export const BEKLEME = 10;
export const DUYURU_GUN = 90;
export const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// pdf.js surum eki: dosya degisince adres degissin (tarayici onbellegi eski betigi tutmasin).
const JS = path.join(V.ROOT, 'tools/blog-app/public/pdf.js');
export const pdfJs = `/blog/pdf.js?v=${fs.existsSync(JS) ? crypto.createHash('sha256').update(fs.readFileSync(JS)).digest('hex').slice(0, 8) : '0'}`;

export function veri() {
  const kayit = V.oku();
  const belgeler = Object.entries(kayit.belgeler)
    .map(([kd, b]) => ({ kd, b, yayinda: V.yayindaki(b) }))
    .filter((x) => x.yayinda.length);
  return { kayit, belgeler };
}
export const boyut = (b) => { const mb = b / 1048576; return mb >= 1 ? `${mb.toFixed(1).replace('.', ',')} MB` : `${Math.round(b / 1024)} KB`; };
export const rozet = (tur) => `<span class="pdf-tur pdf-tur-${tur}">${esc(V.TURLER[tur])}</span>`;

export function gecmisTablosu(kd, b) {
  const satir = [...V.yayindaki(b)].reverse().map((s) => `<tr><td><strong>${esc(s.surum)}</strong></td><td>${V.trTarih(s.tarih)}</td><td>${rozet(s.tur)}</td><td>${esc(s.not)}</td><td><a href="${V.dogrulamaYolu(kd, s.surum)}">Durum</a></td></tr>`).join('');
  return `<div class="table-wrap"><table><thead><tr><th>Sürüm</th><th>Tarih</th><th>Tür</th><th>Değişiklik</th><th></th></tr></thead><tbody>${satir}</tbody></table></div>`;
}

export function duyurular(belgeler, enCok = 30) {
  const olay = new Map();
  for (const { kd, b, yayinda } of belgeler) for (const s of yayinda) {
    if (!olay.has(s.tarih)) olay.set(s.tarih, []);
    olay.get(s.tarih).push({ kd, b, s });
  }
  const bugun = V.bugun();
  const gunler = [...olay.keys()].sort();
  const ilkGun = gunler[0] || bugun;
  const serit = [];
  for (let i = DUYURU_GUN - 1; i >= 0; i--) {
    const g = new Date(Date.parse(`${bugun}T12:00:00Z`) - i * 864e5).toISOString().slice(0, 10);
    const o = olay.get(g) || [];
    const hata = o.filter((x) => x.s.tur === 'hata').length;
    const [sinif, acik] = g < ilkGun ? ['once', 'Henüz yayın yok'] : hata ? ['hata', `${hata} hata düzeltmesi`] : o.length ? ['surum', `${o.length} yeni sürüm`] : ['sorunsuz', 'Değişiklik yok'];
    serit.push(`<span class="pdf-gun pdf-gun-${sinif}" title="${V.trTarih(g)}: ${acik}"></span>`);
  }
  const esik = new Date(Date.parse(`${bugun}T12:00:00Z`) - (DUYURU_GUN - 1) * 864e5).toISOString().slice(0, 10);
  const hataSayi = [...olay.entries()].filter(([g]) => g >= esik).flatMap(([, o]) => o).filter((x) => x.s.tur === 'hata').length;
  const liste = [];
  for (const g of [...gunler].reverse()) {
    const turler = new Map();
    for (const x of olay.get(g).sort((a, b) => a.kd.localeCompare(b.kd))) {
      if (!turler.has(x.s.tur)) turler.set(x.s.tur, []);
      turler.get(x.s.tur).push(x);
    }
    for (const [tur, o] of turler) {
      if (o.length > 5) {
        liste.push(`<li class="pdf-duyuru"><time datetime="${g}">${V.trTarih(g)}</time>${rozet(tur)}<details><summary>${o.length} belge · ${esc(o[0].s.not)}</summary><ul>${o.map((x) => `<li><a href="${V.dogrulamaYolu(x.kd)}">${esc(x.kd)}</a> ${esc(x.b.baslik)} · Sürüm ${esc(x.s.surum)}</li>`).join('')}</ul></details></li>`);
      } else {
        for (const x of o) liste.push(`<li class="pdf-duyuru"><time datetime="${g}">${V.trTarih(g)}</time>${rozet(tur)}<div><a href="${V.dogrulamaYolu(x.kd)}">${esc(x.kd)} · ${esc(x.b.baslik)}</a> · Sürüm ${esc(x.s.surum)}<p>${esc(x.s.not)}</p></div></li>`);
      }
    }
  }
  return `<section class="pdf-duyurular" id="duyurular">
<h2>Duyurular ve değişiklikler</h2>
<div class="pdf-durum-ozet"><span class="pdf-nokta"></span><strong>${belgeler.length} belge yayında</strong><strong data-pdf-indirme="*" data-onek="Toplam " hidden></strong><span>Son ${DUYURU_GUN} günde ${hataSayi} hata düzeltmesi</span></div>
<div class="pdf-serit" role="img" aria-label="Son ${DUYURU_GUN} günün değişiklik şeridi">${serit.join('')}</div>
<div class="pdf-serit-alt"><span>${DUYURU_GUN} gün önce</span><span class="pdf-lejant"><i class="pdf-gun-sorunsuz"></i>Değişiklik yok <i class="pdf-gun-surum"></i>Yeni sürüm <i class="pdf-gun-hata"></i>Hata düzeltmesi</span><span>Bugün</span></div>
<ol class="pdf-duyuru-liste">${liste.slice(0, enCok).join('')}</ol>
${enCok < 30 ? '<p class="pdf-tum-degisiklik"><a href="/d#duyurular">Bütün değişiklikler</a></p>' : ''}
</section>`;
}

export function dosyaDenetimi() {
  return `<section class="pdf-dosya" data-pdf-dosya>
<h2>Elinizdeki dosyayı doğrulayın</h2>
<p>PDF dosyasını seçin; bizim yayımladığımız bir sürümle <strong>birebir aynı</strong> olup olmadığını ve güncelliğini gösterelim. Denetim tarayıcınızda yapılır, dosya cihazınızdan dışarı gönderilmez.</p>
<label class="pdf-dosya-sec"><input type="file" accept="application/pdf,.pdf" data-pdf-dosya-girdi><span>PDF dosyası seçin ya da buraya bırakın</span></label>
<div class="pdf-dosya-sonuc" role="status" aria-live="polite" hidden></div>
<noscript><p>Dosya denetimi için tarayıcıda JavaScript açık olmalı.</p></noscript>
</section>`;
}

/** Bekleme ekranindaki UniConnectly karti: blog.yml > ads.house (blogun kendi tanitim ayari) +
 *  uygulamada VAR olan dort fayda (ahmetcelen.com.tr ile ayni dogrulanmis metin). */
const FAYDALAR = [
  ['Dijital portföy', 'Katıldığın etkinlikleri ve sertifikalarını uniconnectly.com/@kullanıcıadı adresinde herkese açık sergile'],
  ['Doğrulanabilir katılım', 'QR ile giriş yaptığın etkinlikler portföyünde doğrulanmış listelenir'],
  ['Sertifikalar', 'Platformda verilen sertifikalar doğrulanmış işaretli, edu.tr e-postan onaylı'],
  ['Anlık fırsatlar', 'Staj, iş ve burs duyuruları akışına düşer'],
];
const MAGAZA = { appstore: ['App Store', '/blog/ads/app-store.png'], googleplay: ['Google Play', '/blog/ads/google-play.png'], appgallery: ['AppGallery', '/blog/ads/appgallery.png'] };
export function ucKarti(blog, kampanya) {
  const h = (blog.cfg.ads.house || []).find((x) => x.id === 'uniconnectly') || {};
  const adres = `https://uniconnectly.com/?ref=bote.web.tr&utm_source=bote.web.tr&utm_medium=pdf&utm_campaign=${kampanya}`;
  const rozetler = (h.stores || []).filter((s) => MAGAZA[s.id] && fs.existsSync(path.join(V.ROOT, 'tools/blog-app/public', MAGAZA[s.id][1].replace('/blog/', ''))))
    .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener"><img src="${MAGAZA[s.id][1]}" alt="${MAGAZA[s.id][0]}" height="40" loading="lazy" decoding="async"></a>`).join('');
  return `<aside class="pdf-uc" aria-label="Diğer yapımlarımızdan: UniConnectly">
<span class="pdf-uc-etiket">Diğer yapımlarımızdan</span>
<a class="pdf-uc-logo" href="${esc(adres)}" target="_blank" rel="noopener"><img class="${h.logoDark ? 'lg-light' : ''}" src="${esc(h.logo || 'https://uniconnectly.com/brand/light-logo-yildizsiz.webp')}" alt="UniConnectly" width="640" height="185" decoding="async">${h.logoDark ? `<img class="lg-dark" src="${esc(h.logoDark)}" alt="UniConnectly" width="640" height="185" decoding="async">` : ''}</a>
<p class="pdf-uc-giris">${esc(h.text || '')}</p>
<ul class="pdf-uc-faydalar">${FAYDALAR.map(([b, a]) => `<li><b>${esc(b)}</b><span>${esc(a)}</span></li>`).join('')}</ul>
<div class="pdf-uc-alt"><a class="pdf-dugme" href="${esc(adres)}" target="_blank" rel="noopener">${esc(h.cta || 'Ücretsiz keşfet')}</a>${rozetler ? `<div class="pdf-uc-magaza">${rozetler}</div>` : ''}</div>
</aside>`;
}
