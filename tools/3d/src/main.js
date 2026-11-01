// 3D Simülasyon Merkezi: sayfa denetimi. Kartların metni HTML'de durur (JavaScript'siz de okunur);
// bu dosya sınıf seçimini, cihaz kipini, adım geçişini, 3D sahneyi ve benzetimi yönetir.
import { Vector3 } from 'three';
import { sahneKur } from './sahne.js';
import { kartYap, breadboardYap, vurguYap, akimYap, pinNokta, delikNokta, rayNokta, anizotropiAyarla } from './modeller.js';
import { devreKur, ledYolu } from './devre.js';
import { DERSLER, KAMERA } from './adimlar.js';

const html = document.documentElement;
const $ = (s, k = document) => k.querySelector(s);
const $$ = (s, k = document) => [...k.querySelectorAll(s)];
const sakla = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* gizli pencere */ } };
const oku = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const duyur = (t) => { const d = $('#duyuru'); if (d) d.textContent = t; };
const veriEl = $('#ders-veri');
const veri = veriEl ? JSON.parse(veriEl.textContent) : null;
html.dataset.js = '1';

// ------------------------------------------------------------------ sınıf
const SINIFLAR = ['5', '6', '7', '8'];
function sinifAyarla(s, kaydet = true) {
  html.dataset.sinif = s;
  if (kaydet) sakla('bote-3d-sinif', s);
  const u = new URL(location.href); u.searchParams.set('sinif', s); history.replaceState(null, '', u);
  for (const d of $$('[data-sinif-yaz]')) d.textContent = `${s}. sınıf`;
  for (const a of $$('a[data-ders-baglanti]')) { const h = new URL(a.href, location.href); h.searchParams.set('sinif', s); a.href = h.pathname + h.search; }
  for (const b of $$('[data-sinif-sec]')) b.setAttribute('aria-pressed', String(b.dataset.sinifSec === s));
  if (bilgiAcik) bilgiGoster(bilgiAcik);
}
const pencere = $('#sinif-penceresi');
const urlSinif = new URLSearchParams(location.search).get('sinif');
if (SINIFLAR.includes(urlSinif)) sinifAyarla(urlSinif);
else {
  const son = oku('bote-3d-sinif');
  if (SINIFLAR.includes(son)) { html.dataset.sinif = son; for (const b of $$('[data-sinif-sec]')) b.setAttribute('aria-pressed', String(b.dataset.sinifSec === son)); }
  if (pencere && veri) pencere.showModal?.();
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-sinif-sec]');
  if (!b) return;
  sinifAyarla(b.dataset.sinifSec);
  if (pencere?.open) { pencere.close(); $('.adim.etkin h2')?.focus({ preventScroll: true }); }
  duyur(`${b.dataset.sinifSec}. sınıf anlatımı seçildi`);
});
$('#sinif-dugme')?.addEventListener('click', () => pencere?.showModal?.());

// ------------------------------------------------------------------ cihaz kipi, tema, tam ekran
const ilkMod = new URLSearchParams(location.search).get('mod') || oku('bote-3d-mod') ||
  (Math.max(screen.width, screen.height) >= 1600 && navigator.maxTouchPoints > 0 ? 'tahta' : 'normal');
function modAyarla(m, kaydet) { html.dataset.mod = m; $('#tahta-dugme')?.setAttribute('aria-pressed', String(m === 'tahta')); if (kaydet) sakla('bote-3d-mod', m); }
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
$('#ogretmen-dugme')?.addEventListener('click', () => { html.dataset.ek = html.dataset.ek === 'acik' ? '' : 'acik'; if (html.dataset.ek) $('#ogretmen')?.focus(); });
$('#ogretmen-kapat')?.addEventListener('click', () => { html.dataset.ek = ''; $('#ogretmen-dugme')?.focus(); });

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
let S = null, kart = null, bb = null, parcalar = {}, bilgiAcik = null;
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
    S = sahneKur($('#sahne'), { arkaPlan: temaRengi(), olay: sahneOlayi });
    if (!S) { html.dataset.webgl = 'yok'; return; }
    anizotropiAyarla(S.renderer.capabilities.getMaxAnisotropy());
    kart = kartYap(S.hedefler); S.scene.add(kart.grup);
    bb = breadboardYap(S.hedefler); S.scene.add(bb.grup);
    parcalar = ders.devre ? devreKur(ders.devre, S.hedefler) : {};
    for (const p of Object.values(parcalar)) { p.nesne.visible = false; S.scene.add(p.nesne); }
    S.dokunmaDinle(dokunuldu);
    adimUygula(kartlar[aktif].dataset.id, true);
    requestAnimationFrame(() => sahneAlani.classList.add('hazir'));
    if (new URLSearchParams(location.search).has('olcum')) olcumPaneli();
  }
  function sahneOlayi(tur) {
    if (tur === 'baglam-kaybi') sahneAlani.classList.add('baglam-kaybi');
    if (tur === 'baglam-geri') sahneAlani.classList.remove('baglam-kaybi');
  }
  $('#yeniden-yukle')?.addEventListener('click', () => location.reload());

  function kameraBul(k) {
    if (typeof k === 'string') return KAMERA[k] || KAMERA.genel;
    const p = parcalar[k.parca]; const m = p.pozlar[k.poz || 'takili'].clone().add(new Vector3(0, 5 + (k.kaydir || 0), 0));
    return { merkez: m.toArray(), yon: k.yon, yaricap: k.yaricap };
  }
  const GORUNUM = { ustten: [0, 0.995, 0.1], onden: [0, 0.27, 0.96], yandan: [0.96, 0.3, 0.06] };
  function gorunumSec(ad) {
    const a = ders.adimlar[kartlar[aktif].dataset.id] || {};
    const h = kameraBul(a.kamera || 'genel');
    S.kameraGit(GORUNUM[ad] ? { ...h, yon: GORUNUM[ad], yaricap: h.yaricap * (ad === 'ustten' ? 1 : 1.08) } : h);
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
    S.etiketKoy((a.etiket || []).map(([n, metin]) => ({ nokta: noktaBul(n), metin })));
    sahneAlani.dataset.ipucu = (a.kontrol || []).includes('delik') ? 'delik' : (a.dokun ? 'dokun' : '');
    S.kameraGit(kameraBul(a.kamera || 'genel'), ilk);
    program = null;
    if (a.program) programBaslat(a.program);
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

  // ---------------------------------------------------------- dokunma: bilgi ve delik grupları
  const KAVRAM = { kart: 'arduino', usb: 'usb', mikrodenetleyici: 'mikrodenetleyici', 'dijital-pinler': 'dijital', 'analog-pinler': 'analog', 'guc-pinleri': 'gnd', 'breadboard-yuzey': 'breadboard' };
  const SABIT = {
    'guc-girisi': ['Güç girişi', 'Kartı bilgisayar olmadan çalıştırmak için pil ya da adaptör buraya takılır.'],
    reset: ['Reset düğmesi', 'Basınca kart yüklü kodu baştan çalıştırmaya başlar.'],
  };
  function dokunuldu(veriler, nokta) {
    if (!veriler) { bilgiKapat(); return; }
    const a = ders.adimlar[kartlar[aktif].dataset.id] || {};
    if (veriler.parca === 'breadboard-yuzey' && (a.kontrol || []).includes('delik')) {
      const g = bb.grupBul(nokta);
      if (!g) return;
      bb.grupGoster(g.delikler);
      S.etiketKoy([{ nokta: g.delikler[0].clone().add(new Vector3(0, 1.5, 0)), metin: `${g.ad}: bağlı`, tur: 'yesil' }]);
      duyur(`${g.ad} birbirine bağlı`);
      S.iste(); return;
    }
    if (veriler.parca === 'buton' && program === 'buton') { durum.basili = true; butonGuncelle(); setTimeout(() => { durum.basili = false; butonGuncelle(); }, 700); return; }
    bilgiGoster(veriler.kavram || KAVRAM[veriler.parca] || veriler.parca);
  }
  function bilgiGoster(id) {
    const k = veri.kavramlar?.[id], s = html.dataset.sinif || '6';
    const kutu = $('#bilgi');
    if (!kutu) return;
    if (k) { $('#bilgi-baslik').textContent = k.ad; $('#bilgi-teknik').innerHTML = k.teknik[s] || ''; $('#bilgi-sosyal').innerHTML = k.sosyal[s] || ''; kutu.classList.remove('yalin'); }
    else if (SABIT[id]) { $('#bilgi-baslik').textContent = SABIT[id][0]; $('#bilgi-teknik').textContent = SABIT[id][1]; $('#bilgi-sosyal').textContent = ''; kutu.classList.add('yalin'); }
    else return;
    bilgiAcik = id; kutu.hidden = false; duyur($('#bilgi-baslik').textContent);
  }
  function bilgiKapat() { const k = $('#bilgi'); if (k) k.hidden = true; bilgiAcik = null; }
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
