// 3D Simülasyon Merkezi: sayfa kabuğu. Hiçbir aileye özgü şey yok ve three.js içermez: sınıf seçimi, cihaz kipi (normal,
// tahta), tema, tam ekran, öğretmen notu ve mini sınav. Merkez ve aile sayfaları yalnız bunu yükler (merkez.js); ders sayfaları
// aynı kabuğun üstüne genel ders motorunu (ders.js) kurar. Kartların metni HTML'de durur (JavaScript'siz de okunur).
//
// kabukKur() -> K:
//   K.veri             sayfadaki #ders-veri JSON'u (ders sayfasında var, merkez ve aile sayfasında null)
//   K.pencere          sınıf seçim penceresi (<dialog>) ya da null
//   K.temaRengi()      sahne arka plan rengi (temaya göre)
//   K.S                ders motoru sahne açılınca buraya yazar; kip ve tema değişince sahneye haber gider
//   K.sinifDegisince   ders motoru atar: sınıf değişince açık bilgi kartını yeniler
import { $, $$, sakla, oku, duyur, html } from './ortak.js';
import { TELEFON_SORGU } from './telefon.js';
import { tamEkranKur } from './uyum.js'; // eski tarayıcı yedekleri

export function kabukKur() {
const veriEl = $('#ders-veri');
const veri = veriEl ? JSON.parse(veriEl.textContent) : null;
html.dataset.js = '1';
const K = { veri, S: null, sinifDegisince: null, pencere: null, temaRengi: null };

// ------------------------------------------------------------------ sınıf
const SINIFLAR = ['5', '6', '7', '8'];
function sinifAyarla(s, kaydet = true) {
  html.dataset.sinif = s;
  html.dataset.sinifSecili = '1';
  if (kaydet) sakla('bote-3d-sinif', s);
  const u = new URL(location.href); u.searchParams.set('sinif', s); history.replaceState(null, '', u);
  for (const d of $$('[data-sinif-yaz]')) d.textContent = `${s}. sınıf`;
  for (const a of $$('a[data-ders-baglanti]')) { const h = new URL(a.href, location.href); h.searchParams.set('sinif', s); a.href = h.pathname + h.search; }
  for (const b of $$('[data-sinif-sec]')) b.setAttribute('aria-pressed', String(b.dataset.sinifSec === s));
  K.sinifDegisince?.();
}
const pencere = $('#sinif-penceresi');
const urlSinif = new URLSearchParams(location.search).get('sinif');
if (SINIFLAR.includes(urlSinif)) sinifAyarla(urlSinif);
else {
  const son = oku('bote-3d-sinif');
  if (SINIFLAR.includes(son)) {
    html.dataset.sinif = son; html.dataset.sinifSecili = '1';
    for (const d of $$('[data-sinif-yaz]')) d.textContent = `${son}. sınıf`;
    for (const b of $$('[data-sinif-sec]')) b.setAttribute('aria-pressed', String(b.dataset.sinifSec === son));
  }
  if (pencere && veri) pencere.showModal?.();
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-sinif-sec]');
  if (!b) return;
  sinifAyarla(b.dataset.sinifSec);
  if (pencere?.open) { pencere.close(); $('.adim.etkin h2')?.focus({ preventScroll: true }); }
  if (veri) duyur(`${b.dataset.sinifSec}. sınıf anlatımı seçildi`); else dersleriGoster();
});
// Merkez sayfası (Ahmet 01.11: "önce sınıf, sonra ders"): sınıf seçilince dersler görünür alana kayar,
// ders kartlarında seçilen sınıf yazar. Dersler zaten görünüyorsa sayfa yerinden oynamaz.
function dersleriGoster() {
  const bolum = $('#dersler');
  if (!bolum) return;
  const r = bolum.getBoundingClientRect();
  if (r.top < 0 || r.top > window.innerHeight * 0.55) bolum.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  duyur(`${html.dataset.sinif}. sınıf seçildi. Şimdi dersi seçin.`);
}
$('#sinif-dugme')?.addEventListener('click', () => pencere?.showModal?.());

// ------------------------------------------------------------------ cihaz kipi, tema, tam ekran
const ilkMod = new URLSearchParams(location.search).get('mod') || oku('bote-3d-mod') ||
  (Math.max(screen.width, screen.height) >= 1600 && navigator.maxTouchPoints > 0 ? 'tahta' : 'normal');
// Telefonda (src/telefon.js) Tahta modu uygulanmaz: düğme gizli, kayıtlı tercih ya da ?mod=tahta adresi telefon düzenini bozmasın.
// İstenen mod saklanır, telefon tanımından çıkılınca (pencere boyutu, cihaz değişimi) uygulanır; data-mod hep uygulanan modu gösterir.
const telefon = window.matchMedia(TELEFON_SORGU);
let istenenMod = ilkMod;
function modAyarla(m, kaydet) { istenenMod = m; html.dataset.mod = m === 'tahta' && telefon.matches ? 'normal' : m; $('#tahta-dugme')?.setAttribute('aria-pressed', String(html.dataset.mod === 'tahta')); if (kaydet) { sakla('bote-3d-mod', m); K.S?.guvenliYenile(); } }
modAyarla(ilkMod, false);
telefon.addEventListener?.('change', () => { const once = html.dataset.mod; modAyarla(istenenMod, false); if (html.dataset.mod !== once) K.S?.guvenliYenile(); });
$('#tahta-dugme')?.addEventListener('click', () => modAyarla(html.dataset.mod === 'tahta' ? 'normal' : 'tahta', true));
const temaRengi = () => (html.dataset.theme === 'dark' ? '#17121f' : '#e9e5f1');
$('#tema-dugme')?.addEventListener('click', () => {
  const koyu = html.dataset.theme !== 'dark';
  if (koyu) html.dataset.theme = 'dark'; else delete html.dataset.theme;
  sakla('bote-theme', koyu ? 'dark' : 'light');
  K.S?.arkaPlan(temaRengi());
});
tamEkranKur($('#tam-ekran'), html); // eski iPad'de webkit önekli yol (uyum.js)
const ogretmenDugme = $('#ogretmen-dugme');
function ogretmenAc(acik) { html.dataset.ek = acik ? 'acik' : ''; ogretmenDugme?.setAttribute('aria-expanded', String(acik)); if (acik) $('#ogretmen')?.focus(); }
ogretmenDugme?.addEventListener('click', () => ogretmenAc(html.dataset.ek !== 'acik'));
$('#ogretmen-kapat')?.addEventListener('click', () => { ogretmenAc(false); ogretmenDugme?.focus(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && html.dataset.ek === 'acik' && !pencere?.open) { ogretmenAc(false); ogretmenDugme?.focus(); } });

// ------------------------------------------------------------------ mini sınav (her sayfada)
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-secenek]');
  if (!b) return;
  const soru = b.closest('.soru');
  if (!soru || soru.dataset.cevaplandi) return;
  soru.dataset.cevaplandi = '1';
  const dogru = b.hasAttribute('data-dogru');
  b.classList.add(dogru ? 'dogru' : 'yanlis');
  soru.querySelector('[data-dogru]')?.classList.add('dogru');
  const ac = soru.querySelector('.aciklama'); if (ac) ac.hidden = false;
  const sinav = soru.closest('.sinav');
  const cevaplanan = $$('.soru[data-cevaplandi]', sinav), dogrular = cevaplanan.filter((s) => s.querySelector('.dogru[data-dogru]') && !s.querySelector('.yanlis'));
  const sonuc = $('.sinav-sonuc', sinav);
  if (sonuc && cevaplanan.length === $$('.soru', sinav).length) sonuc.textContent = `${cevaplanan.length} sorudan ${dogrular.length} doğru.`;
  duyur(dogru ? 'Doğru cevap' : 'Yanlış cevap; doğru seçenek işaretlendi');
});
K.pencere = pencere; K.temaRengi = temaRengi;
return K;
}
