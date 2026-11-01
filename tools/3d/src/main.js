// 3D Simülasyon Merkezi: sayfa denetimi. Kartların metni HTML'de durur (JavaScript'siz de okunur);
// bu dosya sınıf seçimini, cihaz kipini, adım geçişini, 3D sahneyi ve benzetimi yönetir.
import { Vector3, Box3, Matrix4, AdditiveBlending } from 'three';
import { sahneKur } from './sahne.js';
import { kartYap, breadboardYap, vurguYap, akimYap, pinNokta, delikNokta, rayNokta, anizotropiAyarla, BB } from './modeller.js';
import { devreKur, ledYolu } from './devre.js';
import { DERSLER, KAMERA } from './adimlar.js';
import { KESIF, KATEGORI, kategoriBul } from './kesif-veri.js';

const html = document.documentElement;
const $ = (s, k = document) => k.querySelector(s);
const $$ = (s, k = document) => [...k.querySelectorAll(s)];
const sakla = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* gizli pencere */ } };
const oku = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const duyur = (t) => { const d = $('#duyuru'); if (d) d.textContent = t; };
const veriEl = $('#ders-veri');
const veri = veriEl ? JSON.parse(veriEl.textContent) : null;
html.dataset.js = '1';
// ders sayfasının durumu: sınıf seçimi (aşağıda, sayfa açılırken) bilgi kartını yenilemek için okur
let S = null, kart = null, bb = null, parcalar = {}, bilgiAcik = null, bilgiYenile = null;

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
  if (bilgiAcik) bilgiYenile?.();
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
function modAyarla(m, kaydet) { html.dataset.mod = m; $('#tahta-dugme')?.setAttribute('aria-pressed', String(m === 'tahta')); if (kaydet) { sakla('bote-3d-mod', m); S?.guvenliYenile(); } }
modAyarla(ilkMod, false);
$('#tahta-dugme')?.addEventListener('click', () => modAyarla(html.dataset.mod === 'tahta' ? 'normal' : 'tahta', true));
const temaRengi = () => (html.dataset.theme === 'dark' ? '#17121f' : '#e9e5f1');
$('#tema-dugme')?.addEventListener('click', () => {
  const koyu = html.dataset.theme !== 'dark';
  if (koyu) html.dataset.theme = 'dark'; else delete html.dataset.theme;
  sakla('bote-theme', koyu ? 'dark' : 'light');
  S?.arkaPlan(temaRengi());
});
const tamEkran = $('#tam-ekran');
if (tamEkran && !document.fullscreenEnabled) tamEkran.hidden = true;
tamEkran?.addEventListener('click', () => (document.fullscreenElement ? document.exitFullscreen() : html.requestFullscreen?.().catch(() => {})));
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

if (!veri) { /* merkez sayfası: sahne yok */ } else dersSayfasi();

// ================================================================== ders sayfası
function dersSayfasi() {
  const ders = DERSLER[veri.slug];
  const kartlar = $$('.adim');
  let aktif = 0;
  const durum = { bekleme: 1000, ters: false, akim: false, basili: false, direncCikti: false, sureCarpan: 1, delaysiz: false };
  let zaman = null, titresim = null, akimSil = null, akimZaman = null, program = null, vurgular = [];
  const akimlar = {};

  // ---------------------------------------------------------- adım geçişi
  function adimaGit(i, sessiz = false) {
    aktif = Math.max(0, Math.min(kartlar.length - 1, i));
    kartlar.forEach((k, j) => k.classList.toggle('etkin', j === aktif));
    const k = kartlar[aktif];
    $('#adim-sayac').textContent = `${aktif + 1} / ${kartlar.length}`;
    $('#ilerleme').style.width = `${((aktif + 1) / kartlar.length) * 100}%`;
    $('#geri').disabled = aktif === 0;
    $('#ileri').disabled = aktif === kartlar.length - 1;
    const baslikMetni = $('h2', k).textContent;
    for (const [sec, metin] of [['#mini-sayac', `${aktif + 1}/${kartlar.length}`], ['#mini-baslik', baslikMetni], ['#kisa-baslik', baslikMetni]]) { const el = $(sec); if (el) el.textContent = metin; }
    for (const [sec, kapali] of [['#mini-geri', aktif === 0], ['#mini-ileri', aktif === kartlar.length - 1]]) { const el = $(sec); if (el) el.disabled = kapali; }
    const u = new URL(location.href); u.hash = k.id; history.replaceState(null, '', u);
    $('.kart-govde')?.scrollTo(0, 0);
    if (!sessiz) duyur(`Adım ${aktif + 1}: ${$('h2', k).textContent}`);
    bilgiKapat();
    if (S) adimUygula(k.dataset.id);
  }
  $('#geri').addEventListener('click', () => adimaGit(aktif - 1));
  $('#ileri').addEventListener('click', () => adimaGit(aktif + 1));
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('input, textarea, select') || pencere?.open || e.altKey || e.ctrlKey || e.metaKey) return;
    if (['ArrowRight', 'PageDown'].includes(e.key)) { e.preventDefault(); adimaGit(aktif + 1); }
    if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); adimaGit(aktif - 1); }
  });
  // kart alanında yatay kaydırma ile adım değiştir (telefon, tablet)
  let kayBas = null;
  $('.kart-alani').addEventListener('touchstart', (e) => { const t = e.touches[0]; kayBas = { x: t.clientX, y: t.clientY }; }, { passive: true });
  $('.kart-alani').addEventListener('touchend', (e) => {
    if (!kayBas) return; const t = e.changedTouches[0]; const dx = t.clientX - kayBas.x, dy = t.clientY - kayBas.y; kayBas = null;
    if (Math.abs(dx) > 70 && Math.abs(dy) < 40) adimaGit(aktif + (dx < 0 ? 1 : -1));
  }, { passive: true });
  // ---------------------------------------------------------- panel (Ahmet 01.11: "açılır kapanır, ergonomik")
  // Yatay ekranda yan panel: aç/kapa, kenardan sürükleyerek genişlik, sola/sağa alma; dikey ekranda
  // aşağıdan çekilen kart sayfası: kısa, yarım, tam. Tercihler bu cihazda hatırlanır.
  const dersEl = $('.ders'), kartAlani = $('.kart-alani'), kenar = $('.panel-kenar'), panelDugme = $('#panel-dugme');
  const dikey = window.matchMedia('(orientation: portrait), (max-width: 820px)');
  function panelAyarla(acik, kaydet = true) {
    html.dataset.panel = acik ? 'acik' : 'kapali';
    panelDugme?.setAttribute('aria-expanded', String(acik));
    panelDugme?.setAttribute('aria-label', acik ? 'Anlatım panelini kapat' : 'Anlatım panelini aç');
    kartAlani.inert = !acik && !dikey.matches;
    if (kaydet) { sakla('bote-3d-panel', acik ? 'acik' : 'kapali'); duyur(acik ? 'Anlatım paneli açıldı' : 'Anlatım paneli kapandı; adımlar alttaki çubuktan geçilir'); }
  }
  panelAyarla(oku('bote-3d-panel') !== 'kapali', false);
  panelDugme?.addEventListener('click', () => panelAyarla(html.dataset.panel !== 'acik'));
  $('#mini-ac')?.addEventListener('click', () => panelAyarla(true));
  $('#mini-geri')?.addEventListener('click', () => adimaGit(aktif - 1));
  $('#mini-ileri')?.addEventListener('click', () => adimaGit(aktif + 1));
  const genislik = (px) => { if (px) dersEl.style.setProperty('--panel-w', `${Math.round(px)}px`); else dersEl.style.removeProperty('--panel-w'); };
  const genislikSinir = (px) => Math.max(300, Math.min(dersEl.clientWidth * 0.62, px));
  genislik(Number(oku('bote-3d-panel-w')) || 0);
  const genislikKaydet = () => sakla('bote-3d-panel-w', String(parseInt(dersEl.style.getPropertyValue('--panel-w'), 10) || ''));
  let surukle = null;
  kenar?.addEventListener('pointerdown', (e) => {
    if (e.target.closest('#panel-dugme') || html.dataset.panel !== 'acik' || dikey.matches) return;
    kenar.setPointerCapture(e.pointerId); surukle = { x: e.clientX, w: kartAlani.getBoundingClientRect().width }; html.dataset.suruklenen = '1';
  });
  kenar?.addEventListener('pointermove', (e) => {
    if (!surukle) return;
    const dx = e.clientX - surukle.x;
    genislik(genislikSinir(surukle.w + (html.dataset.panelYan === 'sol' ? dx : -dx)));
  });
  const birak = () => { if (!surukle) return; surukle = null; delete html.dataset.suruklenen; genislikKaydet(); };
  kenar?.addEventListener('pointerup', birak); kenar?.addEventListener('pointercancel', birak);
  kenar?.addEventListener('dblclick', (e) => { if (!e.target.closest('#panel-dugme')) { genislik(0); sakla('bote-3d-panel-w', ''); } });
  kenar?.addEventListener('keydown', (e) => {
    if (e.target !== kenar || !['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    e.preventDefault(); e.stopPropagation();
    const buyut = (e.key === 'ArrowLeft') === (html.dataset.panelYan !== 'sol');
    genislik(genislikSinir(kartAlani.getBoundingClientRect().width + (buyut ? 40 : -40))); genislikKaydet();
  });
  function yanAyarla(yan, kaydet) {
    html.dataset.panelYan = yan;
    for (const b of $$('[data-yan]')) b.setAttribute('aria-pressed', String(b.dataset.yan === yan));
    if (kaydet) sakla('bote-3d-panel-yan', yan);
  }
  yanAyarla(oku('bote-3d-panel-yan') === 'sol' ? 'sol' : 'sag', false);
  // ayar penceresi (Ahmet 01.11: "kartların boyutu sitede ayarlanabilir olmalı"). Dikey ekranda kart sayfasının
  // içinde kırpılmasın diye aşağıdan açılan ayrı bir sayfa olur (arkası karartılır, dokununca kapanır).
  const ayarlar = $('#ayarlar'), ayarDugme = $('#ayar-dugme'), ayarPerde = $('#ayar-perde');
  function ayarAc(acik, odakGeri = false) {
    if (!ayarlar) return;
    ayarlar.hidden = !acik; if (ayarPerde) ayarPerde.hidden = !acik;
    ayarDugme.setAttribute('aria-expanded', String(acik));
    if (acik) { reostaYenile(); [...ayarlar.querySelectorAll('input, button')].find((el) => el.id !== 'ayar-kapat' && el.offsetParent !== null)?.focus(); }
    else if (odakGeri) ayarDugme.focus();
  }
  ayarDugme?.addEventListener('click', (e) => { e.stopPropagation(); ayarAc(ayarlar.hidden); });
  $('#ayar-kapat')?.addEventListener('click', () => ayarAc(false, true));
  document.addEventListener('click', (e) => { if (ayarlar && !ayarlar.hidden && !e.target.closest('#ayarlar, #ayar-dugme')) ayarAc(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && ayarlar && !ayarlar.hidden) ayarAc(false, true); });
  // Panel genişliği: reosta görünümlü sürgü (Ahmet 01.11). Sürüklerken canlı uygulanır; altındaki Dar, Orta,
  // Geniş işaretlerine dokununca o değere atlar. Sürgü üç ön ayar arasında parça parça doğrusaldır: işaretler
  // eşit aralıklı durur. Kenardan sürükleme de aynı genişliği değiştirir.
  const reosta = $('#panel-genislik'), reostaDeger = $('#genislik-deger');
  const BOYUT_AD = { dar: 'Dar', orta: 'Orta', genis: 'Geniş' }, BOYUT_YER = { dar: 0, orta: 50, genis: 100 };
  function onAyarlar() { // stil.css'teki --panel-w ön ayarlarıyla aynı
    const vw = window.innerWidth, k = (a, b, c) => genislikSinir(Math.max(a, Math.min(b * vw, c)));
    return html.dataset.mod === 'tahta' ? { dar: k(380, 0.29, 1100), orta: k(440, 0.37, 1500), genis: k(560, 0.5, 1900) } : { dar: k(290, 0.26, 440), orta: k(330, 0.34, 560), genis: k(420, 0.46, 900) };
  }
  function surguPx(v) { const o = onAyarlar(); return v <= 50 ? o.dar + ((o.orta - o.dar) * v) / 50 : o.orta + ((o.genis - o.orta) * (v - 50)) / 50; }
  function pxSurgu(px) {
    const o = onAyarlar();
    if (px <= o.orta) return o.orta > o.dar ? Math.max(0, ((px - o.dar) / (o.orta - o.dar)) * 50) : 0;
    return o.genis > o.orta ? Math.min(100, 50 + ((px - o.orta) / (o.genis - o.orta)) * 50) : 100;
  }
  function reostaYaz() {
    if (!reosta) return;
    const v = Number(reosta.value), px = surguPx(v);
    const yakin = Object.keys(BOYUT_YER).find((k) => Math.abs(BOYUT_YER[k] - v) <= 3) || '';
    const yuzde = Math.round((px / Math.max(1, dersEl.clientWidth)) * 100);
    if (reostaDeger) reostaDeger.textContent = yakin ? `${BOYUT_AD[yakin]} · %${yuzde}` : `%${yuzde}`;
    reosta.setAttribute('aria-valuetext', `${yakin ? `${BOYUT_AD[yakin]}, ` : ''}ekranın yüzde ${yuzde} kadarı`);
    reosta.style.setProperty('--dolu', `${v}%`);
    for (const b of $$('[data-panel-boyut]')) b.setAttribute('aria-pressed', String(b.dataset.panelBoyut === yakin));
  }
  function reostaYenile() { if (reosta) { reosta.value = String(Math.round(pxSurgu(kartAlani.getBoundingClientRect().width || onAyarlar().orta))); reostaYaz(); } }
  const surguBitti = () => { if (html.dataset.suruklenen && !surukle && !cek) delete html.dataset.suruklenen; };
  reosta?.addEventListener('pointerdown', () => { html.dataset.suruklenen = '1'; });
  reosta?.addEventListener('pointerup', surguBitti);
  reosta?.addEventListener('input', () => { html.dataset.suruklenen = '1'; genislik(surguPx(Number(reosta.value))); reostaYaz(); });
  reosta?.addEventListener('change', () => { surguBitti(); genislikKaydet(); });
  function boyutAyarla(b, kaydet) {
    html.dataset.panelBoyut = b;
    if (kaydet) { genislik(0); sakla('bote-3d-panel-w', ''); sakla('bote-3d-panel-boyut', b); }
    if (reosta) { reosta.value = String(BOYUT_YER[b]); reostaYaz(); }
  }
  boyutAyarla(['dar', 'orta', 'genis'].includes(oku('bote-3d-panel-boyut')) ? oku('bote-3d-panel-boyut') : 'orta', false);
  const YAZI = [0.9, 1, 1.15, 1.3, 1.5];
  let yaziSira = Math.max(0, YAZI.indexOf(Number(oku('bote-3d-yazi')) || 1));
  function yaziAyarla(i, kaydet) {
    yaziSira = Math.max(0, Math.min(YAZI.length - 1, i));
    html.style.setProperty('--yazi', String(YAZI[yaziSira]));
    const d = $('#yazi-deger'); if (d) d.textContent = `%${Math.round(YAZI[yaziSira] * 100)}`;
    if (kaydet) sakla('bote-3d-yazi', String(YAZI[yaziSira]));
  }
  yaziAyarla(yaziSira, false);
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-panel-boyut], [data-yazi], [data-yan]');
    if (!b) return;
    if (b.dataset.panelBoyut) boyutAyarla(b.dataset.panelBoyut, true);
    if (b.dataset.yazi) yaziAyarla(yaziSira + Number(b.dataset.yazi), true);
    if (b.dataset.yan) yanAyarla(b.dataset.yan, true);
  });
  const tahminAyar = $('#tahmin-ayar');
  if (tahminAyar) { tahminAyar.checked = oku('bote-3d-tahmin') !== 'hayir'; tahminAyar.addEventListener('change', () => sakla('bote-3d-tahmin', tahminAyar.checked ? 'evet' : 'hayir')); }
  // dikey ekran: kart sayfası
  const SAYFA = {
    kisa: () => ($('.tutamac')?.offsetHeight || 0) + ($('.kart-ust')?.offsetHeight || 0) + ($('.kart-alt')?.offsetHeight || 0) + 2,
    yarim: () => dersEl.clientHeight * 0.5,
    tam: () => dersEl.clientHeight * 0.92,
  };
  let sayfaDurum = ['kisa', 'yarim', 'tam'].includes(oku('bote-3d-sayfa')) ? oku('bote-3d-sayfa') : 'yarim';
  function sayfaUygula(d, kaydet = true, anlik = false) {
    if (!dikey.matches) { delete html.dataset.sayfa; dersEl.style.removeProperty('--sayfa-h'); S?.gorunurAlan(0, true); panelAyarla(html.dataset.panel !== 'kapali', false); return; }
    sayfaDurum = d; html.dataset.sayfa = d;
    kartAlani.inert = false;
    const yuk = Math.round(SAYFA[d]());
    if (anlik) html.dataset.suruklenen = '1';
    dersEl.style.setProperty('--sayfa-h', `${yuk}px`);
    if (anlik) requestAnimationFrame(() => delete html.dataset.suruklenen);
    S?.gorunurAlan(yuk, anlik);
    if (kaydet) sakla('bote-3d-sayfa', d);
  }
  let cek = null;
  for (const el of [$('.tutamac'), $('.kart-ust')].filter(Boolean)) {
    el.addEventListener('pointerdown', (e) => {
      if (!dikey.matches || e.target.closest('button')) return;
      el.setPointerCapture(e.pointerId);
      const t = performance.now();
      cek = { y: e.clientY, h: kartAlani.getBoundingClientRect().height, sonY: e.clientY, sonT: t, hiz: 0 };
      html.dataset.suruklenen = '1';
    });
    el.addEventListener('pointermove', (e) => {
      if (!cek) return;
      const t = performance.now();
      const yuk = Math.max(SAYFA.kisa(), Math.min(SAYFA.tam(), cek.h + (cek.y - e.clientY)));
      dersEl.style.setProperty('--sayfa-h', `${Math.round(yuk)}px`);
      cek.hiz = (cek.sonY - e.clientY) / Math.max(1, t - cek.sonT); cek.sonY = e.clientY; cek.sonT = t;
    });
    const bitir = (e) => {
      if (!cek) return;
      const c = cek; cek = null; delete html.dataset.suruklenen;
      const yuk = kartAlani.getBoundingClientRect().height, oynadi = Math.abs(e.clientY - c.y) > 6;
      let hedef;
      if (!oynadi) hedef = sayfaDurum === 'kisa' ? 'yarim' : 'kisa'; // dokunma: kısa <-> yarım
      else if (c.hiz > 0.45) hedef = yuk < SAYFA.yarim() ? 'yarim' : 'tam'; // hızlı yukarı
      else if (c.hiz < -0.45) hedef = yuk > SAYFA.yarim() ? 'yarim' : 'kisa'; // hızlı aşağı
      else hedef = ['kisa', 'yarim', 'tam'].sort((a, b) => Math.abs(SAYFA[a]() - yuk) - Math.abs(SAYFA[b]() - yuk))[0];
      sayfaUygula(hedef);
      duyur({ kisa: 'Kartlar küçüldü', yarim: 'Kartlar yarım ekran', tam: 'Kartlar tam ekran' }[hedef]);
    };
    el.addEventListener('pointerup', bitir); el.addEventListener('pointercancel', bitir);
  }
  const dikeyDegisti = () => sayfaUygula(sayfaDurum, false, true);
  dikey.addEventListener?.('change', dikeyDegisti);
  let boyutZ = 0;
  window.addEventListener('resize', () => { clearTimeout(boyutZ); boyutZ = setTimeout(() => { if (dikey.matches) sayfaUygula(sayfaDurum, false, true); }, 120); });
  sayfaUygula(sayfaDurum, false, true);

  window.addEventListener('hashchange', () => { const i = kartlar.findIndex((k) => `#${k.id}` === location.hash); if (i >= 0 && i !== aktif) adimaGit(i); });
  const hashAdim = kartlar.findIndex((k) => `#${k.id}` === location.hash);
  adimaGit(hashAdim > 0 ? hashAdim : 0, true);

  // ---------------------------------------------------------- kart düğmeleri
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-eylem]');
    if (!b || !S) return;
    const ey = b.dataset.eylem;
    const basili = (deger) => b.setAttribute('aria-pressed', String(deger));
    if (ey === 'akim') { akimAc(!durum.akim); basili(durum.akim); }
    if (ey === 'hiz') { durum.bekleme = Number(b.dataset.deger); for (const x of $$('[data-eylem="hiz"]', b.parentElement)) x.setAttribute('aria-pressed', String(x === b)); if (program === 'blink') programBaslat('blink'); }
    if (ey === 'sure') { durum.sureCarpan = Number(b.dataset.deger); for (const x of $$('[data-eylem="sure"]', b.parentElement)) x.setAttribute('aria-pressed', String(x === b)); if (program === 'trafik') programBaslat('trafik'); }
    if (ey === 'ters') { durum.ters = !durum.ters; basili(durum.ters); parcalar.led1.nesne.rotation.y = durum.ters ? Math.PI : 0; S.golgeYenile(); S.etiketKoy(durum.ters ? [{ nokta: noktaBul('parca:led1'), metin: 'Uzun bacak artık 16. sütunda' }] : []); programBaslat(program); }
    if (ey === 'rontgen') { const acik = b.getAttribute('aria-pressed') !== 'true'; basili(acik); bb.rontgen(acik); S.iste(); duyur(acik ? 'Röntgen açık: içteki metal şeritler görünüyor' : 'Röntgen kapalı'); }
    if (ey === 'direnc-cikar') { durum.direncCikti = !durum.direncCikti; basili(durum.direncCikti); parcalar.r2.nesne.visible = !durum.direncCikti; S.golgeYenile(); butonGuncelle(); }
    if (ey === 'delaysiz') { durum.delaysiz = !durum.delaysiz; basili(durum.delaysiz); programBaslat('trafik'); }
    const gor = e.target.closest('[data-gorunum]');
    if (gor) gorunumSec(gor.dataset.gorunum);
  });
  // buton: basılı tutulduğu sürece basılı (fare, dokunma, klavye)
  const butonBas = (deger) => { if (program !== 'buton' && !durum.butonDene) return; durum.basili = deger; butonGuncelle(); };
  document.addEventListener('pointerdown', (e) => { const b = e.target.closest('[data-eylem="buton"]'); if (b) { b.setPointerCapture?.(e.pointerId); butonBas(true); } });
  for (const tur of ['pointerup', 'pointercancel', 'lostpointercapture']) document.addEventListener(tur, (e) => { if (e.target.closest?.('[data-eylem="buton"]') && durum.basili) butonBas(false); });
  document.addEventListener('keydown', (e) => { if ((e.key === ' ' || e.key === 'Enter') && e.target.closest?.('[data-eylem="buton"]') && !e.repeat) { e.preventDefault(); butonBas(true); } });
  document.addEventListener('keyup', (e) => { if ((e.key === ' ' || e.key === 'Enter') && e.target.closest?.('[data-eylem="buton"]')) butonBas(false); });
  $$('.gorunum button').forEach((b) => b.addEventListener('click', () => gorunumSec(b.dataset.gorunum)));
  $('#yakinlas')?.addEventListener('click', () => S?.yakinlas(0.8));
  $('#uzaklas')?.addEventListener('click', () => S?.yakinlas(1.25));

  // ---------------------------------------------------------- sahne
  const sahneAlani = $('.sahne-alani');
  requestAnimationFrame(() => setTimeout(sahneBaslat, 20));
  function sahneBaslat() {
    S = sahneKur($('#sahne'), { arkaPlan: temaRengi(), olay: sahneOlayi, guvenliAlan });
    if (!S) { html.dataset.webgl = 'yok'; return; }
    anizotropiAyarla(S.renderer.capabilities.getMaxAnisotropy());
    kart = kartYap(S.hedefler); S.scene.add(kart.grup);
    bb = breadboardYap(S.hedefler); S.scene.add(bb.grup);
    parcalar = ders.devre ? devreKur(ders.devre, S.hedefler) : {};
    for (const p of Object.values(parcalar)) { p.nesne.visible = false; S.scene.add(p.nesne); p.kutular = yerelKutular(p); }
    S.dokunmaDinle(dokunuldu);
    if (dikey.matches) S.gorunurAlan(Math.round(SAYFA[sayfaDurum]()), true);
    adimUygula(kartlar[aktif].dataset.id, true);
    requestAnimationFrame(() => sahneAlani.classList.add('hazir'));
    if (new URLSearchParams(location.search).has('olcum')) {
      olcumPaneli();
      // ölçüm ve otomatik deneme betikleri için (yalnız ?olcum ile)
      window.__3d = { S, kart, bb, parcalar, adimaGit, kameraBul, gorunumSec, adim: () => kartlar[aktif].dataset.id };
    }
  }
  // Kadrajın güvenli alanı (tuval kenarlarından px): sahnedeki düğme şeridi (telefonda kart sayfasının üstünde
  // durur) ve üstteki ipucu dışarıda kalır.
  function guvenliAlan() {
    const c = $('#sahne').getBoundingClientRect(), pay = html.dataset.mod === 'tahta' ? 24 : 14;
    let ust = pay, alt = pay;
    const ipucu = $$('.ipucu', sahneAlani).find((x) => x.offsetParent !== null);
    if (ipucu) ust = Math.max(ust, ipucu.getBoundingClientRect().bottom - c.top + 8);
    const arac = $('.sahne-arac', sahneAlani);
    if (arac && getComputedStyle(arac).opacity !== '0') alt = Math.max(alt, c.bottom - arac.getBoundingClientRect().top + 8);
    const engel = [];
    const lj = $('#lejant');
    if (lj && lj.offsetParent !== null) { const r = lj.getBoundingClientRect(); engel.push({ x0: r.left - c.left, y0: r.top - c.top, x1: r.right - c.left, y1: r.bottom - c.top }); }
    return { ust, alt, sol: pay, sag: pay, engel };
  }
  function sahneOlayi(tur) {
    if (tur === 'baglam-kaybi') sahneAlani.classList.add('baglam-kaybi');
    if (tur === 'baglam-geri') sahneAlani.classList.remove('baglam-kaybi');
  }
  $('#yeniden-yukle')?.addEventListener('click', () => location.reload());

  // Kadraj kutusu (Ahmet 01.11: "ekrana tam sığsın, boşluklar dengeli olsun"): adımın hazır kutusu, havadaki
  // parçalar ve istenirse kablolar; parça odaklı adımda o parçanın kendi kutusu. Parçaların yerel kutusu bir kez
  // hesaplanır (görünmez vekiller, ışık lekesi ve parıltı hariç), hedef poza taşınır: geçiş sürerken de doğru.
  const _mat = new Matrix4();
  function yerelKutular(p) {
    const n = p.nesne, sonuc = {};
    for (const [poz, tk] of p.pozlar ? [['takili', 1], ['havada', 0]] : [['takili', 1]]) {
      n.userData.bacak?.(tk);
      const k = new Box3();
      for (const c of n.children) {
        if (!c.isMesh || !c.material || c.material.visible === false || c.material.blending === AdditiveBlending) continue;
        c.updateMatrix();
        if (!c.geometry.boundingBox) c.geometry.computeBoundingBox();
        k.union(c.geometry.boundingBox.clone().applyMatrix4(c.matrix));
      }
      sonuc[poz] = k;
    }
    n.userData.bacak?.(1);
    return sonuc;
  }
  function parcaKutusu(p, poz = 'takili') {
    const n = p.nesne, yer = p.pozlar?.[poz] || p.pozlar?.takili || n.position;
    return (p.kutular[poz] || p.kutular.takili).clone().applyMatrix4(_mat.compose(yer, n.quaternion, n.scale));
  }
  function kameraBul(kam, a = {}) {
    if (typeof kam !== 'string') { const p = parcalar[kam.parca]; return { kutu: parcaKutusu(p, kam.poz || 'takili').expandByScalar(kam.pay ?? 3), yon: kam.yon }; }
    const k = KAMERA[kam] || KAMERA.genel;
    const kutu = new Box3(new Vector3(k.kutu[0], k.kutu[1], k.kutu[2]), new Vector3(k.kutu[3], k.kutu[4], k.kutu[5]));
    for (const ad of a.parca || []) {
      const p = parcalar[ad];
      if (!p) continue;
      const poz = (a.poz && a.poz[ad]) || 'takili';
      if (p.tur === 'kablo' ? k.kablolar : poz !== 'takili') kutu.union(parcaKutusu(p, poz));
    }
    return { kutu, yon: k.yon };
  }
  const GORUNUM = { ustten: [0, 0.995, 0.1], onden: [0, 0.27, 0.96], yandan: [0.96, 0.3, 0.06] };
  function gorunumSec(ad) {
    const a = ders.adimlar[kartlar[aktif].dataset.id] || {};
    const h = kameraBul(a.kamera || 'genel', a);
    S.kameraGit(GORUNUM[ad] ? { ...h, yon: GORUNUM[ad] } : h);
    for (const b of $$('.gorunum button')) b.setAttribute('aria-pressed', String(b.dataset.gorunum === ad));
  }

  function noktaBul(ad) {
    const [tur, a, b] = ad.split(':');
    if (tur === 'alan') { const al = kart.alanlar[a] || bb.alanlar[a]; return new Vector3(al[0], al[1] + al[4] / 2 + 1.5, al[2]); }
    if (tur === 'pin') return pinNokta(a).add(new Vector3(0, 2.4, 0));
    if (tur === 'delik') return delikNokta(Number(a), b).add(new Vector3(0, 1, 0));
    if (tur === 'ray') return rayNokta(a.slice(0, -1), a.slice(-1), a.endsWith('+') ? 4 : 28).add(new Vector3(0, 1, 0));
    if (tur === 'parca') { const p = parcalar[a]; const poz = (ders.adimlar[kartlar[aktif].dataset.id]?.poz || {})[a] || 'takili'; return (p.pozlar ? p.pozlar[poz].clone() : p.nesne.position.clone()).add(p.nesne.userData.tepe || new Vector3(0, 6, 0)); }
    const p = parcalar[tur]; // led1:anot gibi
    const poz = (ders.adimlar[kartlar[aktif].dataset.id]?.poz || {})[tur] || 'takili';
    return p.pozlar[poz].clone().add(new Vector3(a === 'anot' ? -1.27 : 1.27, a === 'anot' ? -16.6 : -11.6, 0));
  }

  // ---------------------------------------------------------- adımı sahneye uygula
  function adimUygula(id, ilk = false) {
    const a = ders.adimlar[id] || {};
    zamanDurdur(); akimAc(false);
    Object.assign(durum, { ters: false, basili: false, direncCikti: false, delaysiz: false, bekleme: 1000, sureCarpan: 1 });
    for (const b of $$('[data-eylem]')) b.setAttribute('aria-pressed', String(['1000', '1'].includes(b.dataset.deger)));
    for (const b of $$('.gorunum button')) b.setAttribute('aria-pressed', String(b.dataset.gorunum === 'egik'));
    if (parcalar.led1) parcalar.led1.nesne.rotation.y = 0;
    bb.rontgen(false); bb.grupGoster([]);
    ledleriSondur(); kart.ledOn(Boolean(a.program));
    // parçalar
    const gorunen = new Set(a.parca || []);
    for (const [ad, p] of Object.entries(parcalar)) {
      if (!gorunen.has(ad)) { p.nesne.visible = false; if (p.kutu) p.kutu.userData.etkin = false; continue; }
      if (p.kutu) p.kutu.userData.etkin = true;
      if (p.tur === 'kablo') {
        if (!p.nesne.visible) { p.nesne.visible = true; p.nesne.userData.buyut(ilk ? 1 : 0); if (!ilk) S.tween(700, (k) => p.nesne.userData.buyut(k), true); }
        continue;
      }
      const pozAd = (a.poz && a.poz[ad]) || 'takili';
      const hedef = p.pozlar[pozAd], tk1 = pozAd === 'takili' ? 1 : 0;
      if (!p.nesne.visible) { p.nesne.visible = true; p.nesne.position.copy(hedef).add(new Vector3(0, ilk ? 0 : 14, 0)); p.tk = tk1; p.nesne.userData.bacak?.(tk1); }
      if (!p.nesne.position.equals(hedef)) {
        const p0 = p.nesne.position.clone(), tk0 = p.tk ?? tk1; p.tk = tk1;
        S.tween(650, (k) => { p.nesne.position.lerpVectors(p0, hedef, k); p.nesne.userData.bacak?.(tk0 + (tk1 - tk0) * k); }, true);
      }
    }
    if (parcalar.r2 && gorunen.has('r2')) parcalar.r2.nesne.visible = true;
    S.golgeYenile();
    // vurgu ve etiketler
    for (const v of vurgular) S.scene.remove(v);
    vurgular = (a.vurgu || []).map((ad) => vurguYap(S.scene, kart.alanlar[ad] || bb.alanlar[ad]));
    S.etiketKoy((a.etiket || []).map(([n, metin, tur]) => ({ nokta: noktaBul(n), metin, tur })));
    sahneAlani.dataset.ipucu = (a.kontrol || []).includes('delik') ? 'delik' : (a.dokun ? 'dokun' : '');
    S.kameraGit(kameraBul(a.kamera || 'genel', a), ilk);
    program = null;
    if (a.program) programBaslat(a.program);
    if (html.dataset.kesif === 'acik') kesifIsaretleri();
    S.iste();
  }

  // ---------------------------------------------------------- benzetim
  const kodSatirlari = veri.kod || [];
  function kodFazlari() {
    const dongu = kodSatirlari.findIndex((k) => k.startsWith('void loop'));
    const fazlar = []; let grup = [];
    for (let i = dongu + 1; i < kodSatirlari.length; i++) {
      if (kodSatirlari[i].trim()) grup.push(i + 1);
      if (kodSatirlari[i].includes('delay(')) { fazlar.push(grup); grup = []; }
    }
    return fazlar;
  }
  const FAZ = kodFazlari();
  function kodVurgula(satirlar) {
    for (const el of $$('.kod-satir.calisiyor')) el.classList.remove('calisiyor');
    for (const n of satirlar || []) for (const el of $$(`.adim.etkin .kod-satir[data-no="${n}"]`)) el.classList.add('calisiyor');
  }
  function satirBul(parca, sonra = 0) { const i = kodSatirlari.findIndex((k, j) => j >= sonra && k.includes(parca)); return i + 1; }

  function zamanDurdur() { clearTimeout(zaman); zaman = null; clearTimeout(titresim); titresim = null; kodVurgula([]); }
  function ledleriSondur() { for (const p of Object.values(parcalar)) if (p.tur === 'led') p.nesne.userData.ac(false); kart.ledL(false); for (const a of Object.values(akimlar)) a.yanik = false; }
  function programBaslat(ad) {
    zamanDurdur(); program = ad;
    if (ad === 'blink') { const dongu = (acik) => { yak13(acik); kodVurgula(FAZ[acik ? 0 : 1]); zaman = setTimeout(() => dongu(!acik), durum.bekleme); }; dongu(true); }
    if (ad === 'buton') butonGuncelle();
    if (ad === 'trafik') trafik(0);
  }
  function yak13(acik) {
    kart.ledL(acik);
    const yan = acik && !durum.ters;
    parcalar.led1?.nesne.userData.ac(yan);
    akimYanik('led1', yan); S.iste();
  }
  function butonGuncelle() {
    if (!parcalar.buton) return;
    parcalar.buton.nesne.userData.bas(durum.basili);
    clearTimeout(titresim); titresim = null;
    const ifS = satirBul('digitalRead'), yuksekS = satirBul('HIGH', ifS), elseS = satirBul('else'), dusukS = satirBul('LOW', elseS - 1);
    if (durum.direncCikti && !durum.basili) {
      const kararsiz = () => { const v = Math.random() < 0.5; yak13(v); kodVurgula(v ? [ifS, yuksekS] : [ifS, elseS, dusukS]); titresim = setTimeout(kararsiz, 90 + Math.random() * 380); };
      kararsiz();
    } else { yak13(durum.basili); kodVurgula(durum.basili ? [ifS, yuksekS] : [ifS, elseS, dusukS]); }
    S.iste();
  }
  const RENK_PARCA = { kirmizi: 'ledK', sari: 'ledS', yesil: 'ledY' };
  function trafik(i) {
    const sira = veri.trafikSirasi?.length ? veri.trafikSirasi : [{ isiklar: ['kirmizi'], sure: 3000 }, { isiklar: ['yesil'], sure: 3000 }, { isiklar: ['sari'], sure: 1000 }];
    if (durum.delaysiz) { // bekleme yok: ışıklar göz izleyemeyecek kadar hızlı değişir, üçü de soluk yanıyor gibi görünür
      for (const [renk, ad] of Object.entries(RENK_PARCA)) { parcalar[ad].nesne.userData.ac(0.35); akimYanik(ad, true); }
      kodVurgula(FAZ.flat()); S.iste(); return;
    }
    const f = sira[i % sira.length];
    for (const [renk, ad] of Object.entries(RENK_PARCA)) { const yan = f.isiklar.includes(renk); parcalar[ad].nesne.userData.ac(yan); akimYanik(ad, yan); }
    kodVurgula(FAZ[i % sira.length]);
    S.iste();
    zaman = setTimeout(() => trafik(i + 1), f.sure * durum.sureCarpan);
  }

  // ---------------------------------------------------------- akım noktaları (istenince, 30 kare/sn, 45 sn sonra kendiliğinden kapanır)
  function akimYollari() {
    if (Object.keys(akimlar).length) return;
    const ekle = (ad, kPin, led, r) => { akimlar[ad] = { akim: akimYap(S.scene, ledYolu(parcalar[kPin], parcalar[led], parcalar[r], parcalar.kgnd)), yanik: false }; };
    if (ders.devre === 'led' || ders.devre === 'buton') ekle('led1', 'k13', 'led1', 'r1');
    if (ders.devre === 'trafik') { ekle('ledK', 'kK', 'ledK', 'rK'); ekle('ledS', 'kS', 'ledS', 'rS'); ekle('ledY', 'kY', 'ledY', 'rY'); }
  }
  function akimYanik(ad, yanik) { const a = akimlar[ad]; if (a) { a.yanik = yanik; a.akim.gorunur(durum.akim && yanik); } }
  function akimAc(acik) {
    durum.akim = acik;
    clearTimeout(akimZaman);
    if (acik) {
      akimYollari();
      if (ders.devre === 'led' || ders.devre === 'buton') akimlar.led1.yanik = parcalar.led1.nesne.userData.yanik ?? akimlar.led1.yanik;
      akimSil ??= S.yavasGuncelleyici((t, dt) => { if (!durum.akim) return false; let v = false; for (const a of Object.values(akimlar)) if (a.yanik) { a.akim.ilerlet(dt); v = true; } return v; });
      akimZaman = setTimeout(() => { akimAc(false); for (const b of $$('[data-eylem="akim"]')) b.setAttribute('aria-pressed', 'false'); }, 45000);
    } else if (akimSil) { akimSil(); akimSil = null; }
    for (const a of Object.values(akimlar)) a.akim.gorunur(acik && a.yanik);
    S?.iste();
  }

  // ---------------------------------------------------------- keşif ve bilgi kartı
  // Keşif modu (Ahmet 01.11: "hepsi aynı mor soru işareti değil, daha ayırt edilebilir olsunlar"): her işaret
  // grubunun rengini, simgesini ve numarasını taşır (renk tek başına anlam taşımaz); pinlerde numara yerine
  // pinin adı yazar. Çakışanlardan önceliği düşük olan gizlenir, yaklaştıkça açılır (sahne.js).
  const sablon = $('#kesif-sablon'), lejant = $('#lejant');
  if (lejant && window.matchMedia('(min-width: 700px) and (min-height: 600px)').matches) lejant.open = true;
  lejant?.addEventListener('toggle', () => S?.guvenliYenile());
  const ikonKoy = (yuva, kat) => { const svg = sablon?.content.querySelector(`[data-kat="${kat}"] svg`); if (yuva && svg) yuva.replaceChildren(svg.cloneNode(true)); };
  const pinRozet = (ad) => (/^\d+$/.test(ad) ? (['3', '5', '6', '9', '10', '11'].includes(ad) ? `~${ad}` : ad) : ad.startsWith('GND') ? 'GND' : { '3.3V': '3,3V', VIN: 'Vin' }[ad] || ad);
  function isaretYap(id, no, ozel, rozet) {
    const kat = kategoriBul(id);
    if (!kat) return null;
    const el = document.createElement('button');
    el.type = 'button'; el.className = rozet ? 'kesif-isaret pin-isaret' : 'kesif-isaret'; el.dataset.kat = kat; el.dataset.id = id;
    const daire = document.createElement('span'); daire.className = 'ki-daire'; ikonKoy(daire, kat);
    const rakam = document.createElement('span'); rakam.className = 'ki-no'; rakam.textContent = rozet || String(no); rakam.setAttribute('aria-hidden', 'true');
    el.append(daire, rakam);
    el.setAttribute('aria-label', rozet ? `${ozel}, ${KATEGORI[kat].ad} grubu` : `${no}. keşif noktası, ${KATEGORI[kat].ad} grubu`);
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      for (const x of $$('.kesif-isaret[aria-current]')) x.removeAttribute('aria-current');
      el.setAttribute('aria-current', 'true');
      bilgiGoster(id, tahminAyar ? tahminAyar.checked : true, ozel);
    });
    return { el, kat };
  }
  function kesifIsaretleri() {
    if (!S) return;
    const a = ders.adimlar[kartlar[aktif].dataset.id] || {};
    const liste = [], gruplar = new Set();
    let no = 0;
    const ekle = (id, yer, ozel, rozet, adim = 0) => {
      const r = isaretYap(id, no + 1, ozel, rozet);
      if (!r) return;
      if (!rozet) no++;
      gruplar.add(r.kat);
      liste.push({ el: r.el, oncelik: KESIF[id].oncelik, adim, ...yer });
    };
    for (const k of kart.kesifNoktalari) ekle(k.id, { nokta: k.nokta }, k.ozel);
    for (const k of bb.kesifNoktalari) ekle(k.id, { nokta: k.nokta }, k.ozel);
    for (const [ad, p] of Object.entries(parcalar)) {
      if (!(a.parca || []).includes(ad)) continue;
      const tk = ((a.poz || {})[ad] || 'takili') === 'takili' ? 1 : 0;
      for (const [id, yerel] of p.nesne.userData.kesifYerleri?.(tk) || []) ekle(id, { nesne: p.nesne, yerel }, p.ozel?.[id]);
    }
    // pinler: ancak ekranda pin aralığı işaret boyunu geçince (yakın çekimde) görünür
    for (const pin of kart.pinler) ekle(pin.kesif, { nokta: pin.nokta }, pin.ozel, pinRozet(pin.ad), 2.54);
    S.isaretKoy(liste);
    for (const li of $$('li[data-kat]', lejant || document.createElement('i'))) li.hidden = !gruplar.has(li.dataset.kat);
  }
  const kesifDugme = $('#kesif-dugme');
  kesifDugme?.addEventListener('click', () => {
    const acik = html.dataset.kesif !== 'acik';
    html.dataset.kesif = acik ? 'acik' : '';
    kesifDugme.setAttribute('aria-pressed', String(acik));
    S?.guvenliYenile();
    if (acik) { kesifIsaretleri(); duyur('Keşif modu açık: işaretli parçalara dokun. İşaretin rengi ve simgesi parçanın grubunu gösterir.'); } else { S?.isaretKoy([]); bilgiKapat(); duyur('Keşif modu kapandı'); }
  });
  function dokunuldu(v, nokta) {
    if (!v) { bilgiKapat(); return; }
    const a = ders.adimlar[kartlar[aktif].dataset.id] || {};
    if (v.bb && nokta && (a.kontrol || []).includes('delik')) {
      const g = bb.grupBul(nokta);
      if (g) {
        bb.grupGoster(g.delikler);
        S.etiketKoy([{ nokta: g.delikler[0].clone().add(new Vector3(0, 1.5, 0)), metin: `${g.ad}: bağlı`, tur: 'yesil' }]);
        duyur(`${g.ad} birbirine bağlı`);
        S.iste(); return;
      }
    }
    if (v.parca === 'buton' && program === 'buton') { durum.basili = true; butonGuncelle(); setTimeout(() => { durum.basili = false; butonGuncelle(); }, 700); return; }
    if (v.kesif) bilgiGoster(v.kesif, html.dataset.kesif === 'acik' && (tahminAyar ? tahminAyar.checked : true), v.ozel);
  }
  // Kartın içeriği: kavramlar.json, sonra kesif.json (derlemede gömülür), sonra keşif kataloğundaki kavram
  // eşleşmesi, en sonda katalogdaki ad ve kısa açıklama (kesif-veri.js).
  function icerikBul(id) {
    const kv = veri.kavramlar || {}, ki = veri.kesifIcerik || {}, kt = KESIF[id];
    if (kv[id]) return { ...kv[id], ad: kt?.ad || kv[id].ad };
    if (ki[id]) return { ...ki[id], ad: ki[id].ad || kt?.ad || id };
    if (kt?.kavram && kv[kt.kavram]) return { ...kv[kt.kavram], ad: kt.ad };
    if (kt) return { ad: kt.ad, yalin: kt.kisa };
    return null;
  }
  let tahminBekliyor = false, bilgiOzel = '';
  function bilgiGoster(id, tahmin = false, ozel = '') {
    const kutu = $('#bilgi'), ic = id ? icerikBul(id) : null;
    if (!kutu || !ic) return;
    const s = html.dataset.sinif || '6', yeni = id !== bilgiAcik || kutu.hidden;
    if (tahmin !== 'koru') { tahminBekliyor = Boolean(tahmin); bilgiOzel = ozel || ''; }
    const soru = $('#kesif-soru'), cevap = $('#bilgi-cevap');
    if (soru) soru.hidden = !tahminBekliyor;
    if (cevap) cevap.hidden = tahminBekliyor;
    const kat = kategoriBul(id), katEl = $('#bilgi-kat');
    if (katEl) { katEl.hidden = !kat; if (kat) { katEl.dataset.kat = kat; $('#bilgi-kat-ad').textContent = KATEGORI[kat].ad; ikonKoy($('.ki-daire', katEl), kat); } }
    $('#bilgi-baslik').textContent = ic.ad;
    const oz = $('#bilgi-ozel');
    if (oz) { oz.textContent = bilgiOzel; oz.hidden = !bilgiOzel || bilgiOzel === ic.ad; }
    if (ic.yalin) { $('#bilgi-teknik').textContent = ic.yalin; $('#bilgi-sosyal').textContent = ''; kutu.classList.add('yalin'); }
    else { $('#bilgi-teknik').innerHTML = ic.teknik?.[s] || ic.teknik?.['6'] || ''; $('#bilgi-sosyal').innerHTML = ic.sosyal?.[s] || ''; kutu.classList.toggle('yalin', !ic.sosyal?.[s]); }
    if (yeni) { const fig = $('#bilgi-gorsel'); if (fig) { fig.hidden = true; const img = $('img', fig); if (img) { img.removeAttribute('src'); img.alt = ''; } } }
    bilgiAcik = id; kutu.hidden = false;
    if (dikey.matches && sayfaDurum === 'tam') sayfaUygula('yarim'); // kart sayfası tam açıksa bilgi kartına yer aç
    duyur(tahminBekliyor ? 'Sence bu nedir? Cevabı gör düğmesine bas' : [ic.ad, bilgiOzel].filter(Boolean).join(', '));
    // içerik görseli gibi eklentiler için: hangi kartın açıldığı
    if (yeni) document.dispatchEvent(new CustomEvent('3d:bilgi', { detail: { id } }));
  }
  bilgiYenile = () => bilgiGoster(bilgiAcik, 'koru');
  // dışarıdan (ör. içerik sayfası, öğretmen notu) bir keşif kartı açmak için; tahmin ayarına uyar
  document.addEventListener('3d:kesif-ac', (e) => { const id = e.detail?.id; if (id) bilgiGoster(id, tahminAyar ? tahminAyar.checked : true, e.detail.ozel); });
  $('#kesif-gor')?.addEventListener('click', () => { tahminBekliyor = false; bilgiGoster(bilgiAcik, 'koru'); $('#bilgi-baslik')?.focus?.(); });
  function bilgiKapat() { const k = $('#bilgi'); if (k) k.hidden = true; bilgiAcik = null; for (const x of $$('.kesif-isaret[aria-current]')) x.removeAttribute('aria-current'); }
  $('#bilgi-kapat')?.addEventListener('click', bilgiKapat);

  // ---------------------------------------------------------- ölçüm paneli (?olcum): tahtada akıcılığı sayıyla görmek için
  function olcumPaneli() {
    const p = document.createElement('div'); p.className = 'olcum'; sahneAlani.appendChild(p);
    let n = 0, t0 = performance.now(), son = t0, enUzun = 0;
    S.kareGuncelleyici((t) => { n++; enUzun = Math.max(enUzun, t - son); son = t; return false; });
    setInterval(() => {
      const t = performance.now(), q = S.kalite();
      p.textContent = `${Math.round((n * 1000) / (t - t0))} kare/sn · en uzun ${Math.round(enUzun)} ms · ölçek ${q.piksel} (tam ${q.tam}, kademe ${q.kademe})`;
      n = 0; t0 = t; enUzun = 0;
    }, 1000);
  }
}
