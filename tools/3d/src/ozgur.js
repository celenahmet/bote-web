// Özgür Mod sayfa denetimi (Ahmet 01.11: "hocanın özgür modu olsa ... 15 pin yerine 13'e felan denese").
// Öğretmen ya da öğrenci devreyi kendisi kurar: parçayı panelden seçer, deliğe dokunarak takar, programı seçer, çalıştırır.
// Devre her değişiklikte devreCoz.js ile yeniden çözülür; uyarılar ikon, renk ve Türkçe metinle gösterilir.
// Akıcılık ("kasmamalı"): sahne yalnız bir şey değişince çizilir, gölge haritası yalnız parça eklenip
// kaldırılınca yenilenir, LED ışıkları sabit üç ışıktan dağıtılır (ışık sayısı değişince gölgelendiriciler
// yeniden derlenip sahne takılırdı). Üst çubuk, panel ve aşağıdan çekilen sayfa ders sayfalarıyla aynıdır.
import { Vector3, Vector2, Raycaster, Plane, Mesh, RingGeometry, CircleGeometry, BoxGeometry, MeshBasicMaterial, InstancedMesh, Matrix4, PointLight } from 'three';
import { sahneKur } from './sahne.js';
import { kartYap, breadboardYap, pinNokta, delikNokta, rayNokta, anizotropiAyarla, BB, BB_UST, BASLIK_UST } from './modeller.js';
import { KAMERA } from './adimlar.js';
import { ozgurLedYap, ozgurDirencYap, ozgurButonYap, ozgurKabloYap, parcaAt } from './ozgurModeller.js';
import { parcaIkon, LED_HEX, KABLO_HEX } from './ozgurIkon.js';
import {
  HAZIR, DIJITAL_BASLIK, GUC_BASLIK, ANALOG_BASLIK, TUM_PINLER, RAY_SUTUN, SUTUN_SAYISI, SATIR_Z, RAY_Z, PROGRAM_PINLERI, KABLO_RENKLERI,
  LED_RENKLERI, DIRENCLER, devreCoz, devreAyikla, programAyikla, noktaCoz, noktaUygun, noktaAdi, grupAdi, grupNoktalari, parcaAdi,
  parcaAciklama, parcaUclari, doluNoktalar, kabloluPinler, pinAdi,
} from './devreCoz.js';
import { kodUret, girintile } from './ozgurKod.js';

const html = document.documentElement;
const $ = (s, k = document) => k.querySelector(s);
const $$ = (s, k = document) => [...k.querySelectorAll(s)];
const sakla = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* gizli pencere */ } };
const oku = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
let duyuruZaman = 0;
const duyur = (t) => { const d = $('#duyuru'); if (!d) return; clearTimeout(duyuruZaman); d.textContent = ''; duyuruZaman = setTimeout(() => { d.textContent = t; }, 40); };
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const buyuk = (s) => (s ? s.charAt(0).toLocaleUpperCase('tr-TR') + s.slice(1) : s);
const sayiYaz = (x, b = 1) => x.toFixed(b).replace('.', ',');
const IKON = (() => { try { return JSON.parse($('#ozgur-ikon')?.textContent || '{}'); } catch (e) { return {}; } })();
const SEVIYE_AD = { hata: 'Hata', uyari: 'Uyarı', bilgi: 'Bilgi' };
html.dataset.js = '1';
let S = null, kart = null, bb = null; // sahne (WebGL yoksa null kalır); panel kodu da kullandığı için en üstte

// ================================================================== ortak: sınıf, kip, tema, tam ekran, öğretmen (ders sayfalarıyla aynı)
const SINIFLAR = ['5', '6', '7', '8'];
const pencere = $('#sinif-penceresi');
function sinifAyarla(s, kaydet = true) {
  html.dataset.sinif = s;
  if (kaydet) sakla('bote-3d-sinif', s);
  const u = new URL(location.href); u.searchParams.set('sinif', s); history.replaceState(null, '', u);
  for (const d of $$('[data-sinif-yaz]')) d.textContent = `${s}. sınıf`;
  for (const b of $$('[data-sinif-sec]')) b.setAttribute('aria-pressed', String(b.dataset.sinifSec === s));
  durumCiz(true);
}
{
  const urlSinif = new URLSearchParams(location.search).get('sinif');
  const son = oku('bote-3d-sinif');
  const s = SINIFLAR.includes(urlSinif) ? urlSinif : SINIFLAR.includes(son) ? son : null;
  if (s) { html.dataset.sinif = s; for (const d of $$('[data-sinif-yaz]')) d.textContent = `${s}. sınıf`; for (const b of $$('[data-sinif-sec]')) b.setAttribute('aria-pressed', String(b.dataset.sinifSec === s)); }
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-sinif-sec]');
  if (!b) return;
  sinifAyarla(b.dataset.sinifSec);
  if (pencere?.open) { pencere.close(); $('#sinif-dugme')?.focus(); }
  duyur(`${b.dataset.sinifSec}. sınıf seçildi`);
});
$('#sinif-dugme')?.addEventListener('click', () => pencere?.showModal?.());
const ilkMod = new URLSearchParams(location.search).get('mod') || oku('bote-3d-mod') ||
  (Math.max(screen.width, screen.height) >= 1600 && navigator.maxTouchPoints > 0 ? 'tahta' : 'normal');
function modAyarla(m, kaydet) { html.dataset.mod = m; $('#tahta-dugme')?.setAttribute('aria-pressed', String(m === 'tahta')); if (kaydet) sakla('bote-3d-mod', m); aracSigdir(); }
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

// ================================================================== panel ve dikey ekranda aşağıdan çekilen sayfa (main.js ile aynı davranış)
const dersEl = $('.ders'), kartAlani = $('.kart-alani'), kenar = $('.panel-kenar'), panelDugme = $('#panel-dugme');
const dikey = window.matchMedia('(orientation: portrait), (max-width: 820px)');
function panelAyarla(acik, kaydet = true) {
  html.dataset.panel = acik ? 'acik' : 'kapali';
  panelDugme?.setAttribute('aria-expanded', String(acik));
  panelDugme?.setAttribute('aria-label', acik ? 'Paneli kapat' : 'Paneli aç');
  kartAlani.inert = !acik && !dikey.matches;
  if (kaydet) { sakla('bote-3d-panel', acik ? 'acik' : 'kapali'); duyur(acik ? 'Panel açıldı' : 'Panel kapandı'); }
}
panelAyarla(oku('bote-3d-panel') !== 'kapali', false);
panelDugme?.addEventListener('click', () => panelAyarla(html.dataset.panel !== 'acik'));
const genislik = (px) => { if (px) dersEl.style.setProperty('--panel-w', `${Math.round(px)}px`); else dersEl.style.removeProperty('--panel-w'); };
const genislikSinir = (px) => Math.max(300, Math.min(dersEl.clientWidth * 0.62, px));
genislik(Number(oku('bote-3d-panel-w')) || 0);
const genislikKaydet = () => sakla('bote-3d-panel-w', String(parseInt(dersEl.style.getPropertyValue('--panel-w'), 10) || ''));
let surukle = null;
kenar?.addEventListener('pointerdown', (e) => {
  if (e.target.closest('#panel-dugme') || html.dataset.panel !== 'acik' || dikey.matches) return;
  kenar.setPointerCapture(e.pointerId); surukle = { x: e.clientX, w: kartAlani.getBoundingClientRect().width }; html.dataset.suruklenen = '1';
});
kenar?.addEventListener('pointermove', (e) => { if (surukle) genislik(genislikSinir(surukle.w + (html.dataset.panelYan === 'sol' ? 1 : -1) * (e.clientX - surukle.x))); });
const birak = () => { if (!surukle) return; surukle = null; delete html.dataset.suruklenen; genislikKaydet(); };
kenar?.addEventListener('pointerup', birak); kenar?.addEventListener('pointercancel', birak);
kenar?.addEventListener('dblclick', (e) => { if (!e.target.closest('#panel-dugme')) { genislik(0); sakla('bote-3d-panel-w', ''); } });
kenar?.addEventListener('keydown', (e) => {
  if (e.target !== kenar || !['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
  e.preventDefault(); e.stopPropagation();
  const buyut = (e.key === 'ArrowLeft') === (html.dataset.panelYan !== 'sol');
  genislik(genislikSinir(kartAlani.getBoundingClientRect().width + (buyut ? 40 : -40))); genislikKaydet();
});
function yanAyarla(yan, kaydet) { html.dataset.panelYan = yan; for (const b of $$('[data-yan]')) b.setAttribute('aria-pressed', String(b.dataset.yan === yan)); if (kaydet) sakla('bote-3d-panel-yan', yan); }
yanAyarla(oku('bote-3d-panel-yan') === 'sol' ? 'sol' : 'sag', false);
const ayarlar = $('#ayarlar'), ayarDugme = $('#ayar-dugme');
const ayarAc = (acik) => { ayarlar.hidden = !acik; ayarDugme.setAttribute('aria-expanded', String(acik)); if (acik) ayarlar.querySelector('button')?.focus(); };
ayarDugme?.addEventListener('click', (e) => { e.stopPropagation(); ayarAc(ayarlar.hidden); });
document.addEventListener('click', (e) => { if (ayarlar && !ayarlar.hidden && !e.target.closest('#ayarlar, #ayar-dugme')) ayarAc(false); });
function boyutAyarla(b, kaydet) {
  html.dataset.panelBoyut = b;
  for (const x of $$('[data-panel-boyut]')) x.setAttribute('aria-pressed', String(x.dataset.panelBoyut === b));
  if (kaydet) { genislik(0); sakla('bote-3d-panel-w', ''); sakla('bote-3d-panel-boyut', b); }
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
    dersEl.style.setProperty('--sayfa-h', `${Math.round(Math.max(SAYFA.kisa(), Math.min(SAYFA.tam(), cek.h + (cek.y - e.clientY))))}px`);
    cek.hiz = (cek.sonY - e.clientY) / Math.max(1, t - cek.sonT); cek.sonY = e.clientY; cek.sonT = t;
  });
  const bitir = (e) => {
    if (!cek) return;
    const c = cek; cek = null; delete html.dataset.suruklenen;
    const yuk = kartAlani.getBoundingClientRect().height, oynadi = Math.abs(e.clientY - c.y) > 6;
    let hedef;
    if (!oynadi) hedef = sayfaDurum === 'kisa' ? 'yarim' : 'kisa';
    else if (c.hiz > 0.45) hedef = yuk < SAYFA.yarim() ? 'yarim' : 'tam';
    else if (c.hiz < -0.45) hedef = yuk > SAYFA.yarim() ? 'yarim' : 'kisa';
    else hedef = ['kisa', 'yarim', 'tam'].sort((a, b) => Math.abs(SAYFA[a]() - yuk) - Math.abs(SAYFA[b]() - yuk))[0];
    sayfaUygula(hedef);
    duyur({ kisa: 'Panel küçüldü', yarim: 'Panel yarım ekran', tam: 'Panel tam ekran' }[hedef]);
  };
  el.addEventListener('pointerup', bitir); el.addEventListener('pointercancel', bitir);
}
dikey.addEventListener?.('change', () => sayfaUygula(sayfaDurum, false, true));
let boyutZ = 0;
window.addEventListener('resize', () => { clearTimeout(boyutZ); boyutZ = setTimeout(() => { if (dikey.matches) sayfaUygula(sayfaDurum, false, true); }, 120); });
sayfaUygula(sayfaDurum, false, true);
// yerleştirirken telefonda sayfa kısalır (breadboard görünsün), bitince eski yerine döner
let oncekiSayfa = null;
const sayfaKisalt = () => { if (dikey.matches && sayfaDurum !== 'kisa') { oncekiSayfa = sayfaDurum; sayfaUygula('kisa', false); } };
const sayfaGeri = () => { if (oncekiSayfa && dikey.matches) sayfaUygula(oncekiSayfa, false); oncekiSayfa = null; };

// ================================================================== sekmeler: Kur, Program, Durum
const SEKMELER = ['kur', 'program', 'durum'];
function sekmeAc(ad, odak = false) {
  for (const s of SEKMELER) {
    const t = $(`#sekme-${s}`), p = $(`#bolum-${s}`), acik = s === ad;
    t.setAttribute('aria-selected', String(acik)); t.tabIndex = acik ? 0 : -1; p.hidden = !acik;
  }
  if (odak) $(`#sekme-${ad}`).focus();
  $('.kart-govde')?.scrollTo(0, 0);
  if (dikey.matches && sayfaDurum === 'kisa') sayfaUygula('yarim');
}
$('.sekmeler').addEventListener('click', (e) => { const t = e.target.closest('[role=tab]'); if (t) sekmeAc(t.id.slice(6)); });
$('.sekmeler').addEventListener('keydown', (e) => {
  const i = SEKMELER.indexOf(document.activeElement?.id?.slice(6));
  if (i < 0) return;
  const yeni = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: SEKMELER.length - 1 }[e.key];
  if (yeni === undefined) return;
  e.preventDefault(); e.stopPropagation();
  sekmeAc(SEKMELER[(yeni + SEKMELER.length) % SEKMELER.length], true);
});
// Sayfa hep Kur sekmesiyle açılır (sınıfta öngörülebilir olsun; sekme hatırlanmaz).

// ================================================================== devre durumu, kayıt, geri alma
const KAYIT = 'bote-3d-ozgur-devre';
let kabloRengi = 'turuncu';
function yukle() {
  try {
    const k = JSON.parse(oku(KAYIT) || 'null');
    if (k && k.surum === 1) { if (KABLO_RENKLERI[k.kabloRengi]) kabloRengi = k.kabloRengi; return devreAyikla(k); }
  } catch (e) { /* bozuk kayıt: hazır devreyle başla */ }
  return devreAyikla(HAZIR['ders-2']);
}
let devre = yukle();
let calisiyor = false, faz = true, kararsizBit = false, sonuc = null, kodBilgi = null;
const basili = new Set();
let arac = null;      // { tur, renk, deger, ilk, tasinan: { parca, indeks } | null, onceki }
let seciliId = null, vurguIdler = [];
const gecmis = [];
const anlik = () => JSON.stringify({ parcalar: devre.parcalar, program: devre.program });
let kayitZaman = 0;
function kaydet() {
  clearTimeout(kayitZaman);
  kayitZaman = setTimeout(() => {
    const d = arac?.tasinan ? JSON.parse(arac.onceki) : devre; // taşıma yarıdayken eski yer saklanır
    sakla(KAYIT, JSON.stringify({ surum: 1, parcalar: d.parcalar, program: d.program, kabloRengi }));
  }, 300);
}
function gecmiseEkle(onceki = anlik()) {
  if (gecmis[gecmis.length - 1] === onceki) return;
  gecmis.push(onceki); if (gecmis.length > 60) gecmis.shift();
  $('#geri-al').disabled = false;
}
function geriAl() {
  if (arac) aracBitir(true);
  const s = gecmis.pop();
  $('#geri-al').disabled = !gecmis.length;
  if (!s) return;
  devre = devreAyikla(JSON.parse(s));
  secimKaldir(false);
  degisti();
  duyur('Son değişiklik geri alındı');
}
const bul = (id) => devre.parcalar.find((p) => p.id === id);
function yeniId(tur) {
  const on = { led: 'led', direnc: 'r', buton: 'buton', kablo: 'k' }[tur];
  const mevcut = new Set(devre.parcalar.map((p) => p.id));
  let n = 1; while (mevcut.has(`${on}-${n}`)) n++;
  return `${on}-${n}`;
}

// ================================================================== sahne
const canvas = $('#sahne'), sahneAlani = $('.sahne-alani');
const nesneler = new Map(); // parça kimliği -> { nesne, anahtar }
const isiklar = [];
let imlec = null, ilkIsaret = null, pinGrup = null, uclar = null;
const ADIM = 2.54;
const noktaV = (id, y) => {
  const n = noktaCoz(id);
  if (!n) return null;
  if (n.tur === 'delik') return delikNokta(n.sutun, n.satir, y);
  if (n.tur === 'ray') return rayNokta(n.ray.slice(0, -1), n.ray.slice(-1), n.sutun, y);
  return pinNokta(n.pin);
};
const isaretY = (id) => (noktaCoz(id)?.tur === 'pin' ? BASLIK_UST : BB_UST) + 0.09;
const PINLER = TUM_PINLER.map((p) => ({ id: `p:${p}`, v: pinNokta(p) }));
// klavyede gezinme ve seçici için çizgiler: ekranda yukarıdan aşağıya (karşı ray, satırlar, yakın ray, pin başlıkları)
const rayCizgi = (r) => RAY_SUTUN.map((s) => `r:${r}:${s}`);
const satirCizgi = (r) => Array.from({ length: SUTUN_SAYISI }, (_, i) => `h:${i + 1}:${r}`);
const BB_CIZGI = [rayCizgi('uzak+'), rayCizgi('uzak-'), ...[...'jihgf', ...'edcba'].map(satirCizgi), rayCizgi('yakin-'), rayCizgi('yakin+')];
const CIZGILER = [...BB_CIZGI, DIJITAL_BASLIK.map((p) => `p:${p}`), [...GUC_BASLIK, ...ANALOG_BASLIK].map((p) => `p:${p}`)];
const cizgiAdi = (c) => { const n = noktaCoz(c[0]); return n.tur === 'ray' ? `${n.ray.startsWith('yakin') ? 'alt' : 'üst'} ${n.ray.endsWith('+') ? '+' : '−'}` : n.satir; };

function sahneBaslat() {
  S = sahneKur(canvas, { arkaPlan: temaRengi(), olay: (tur) => {
    if (tur === 'baglam-kaybi') sahneAlani.classList.add('baglam-kaybi');
    if (tur === 'baglam-geri') sahneAlani.classList.remove('baglam-kaybi');
  } });
  if (!S) { html.dataset.webgl = 'yok'; for (const b of $$('[data-arac]')) b.disabled = true; listeCiz(true); return; }
  anizotropiAyarla(S.renderer.capabilities.getMaxAnisotropy());
  kart = kartYap(S.hedefler); S.scene.add(kart.grup);
  bb = breadboardYap(S.hedefler); S.scene.add(bb.grup);
  for (let i = 0; i < 3; i++) { const l = new PointLight(0xffffff, 0, 42, 2); S.scene.add(l); isiklar.push(l); }
  isaretleriKur();
  parcalariKur();
  isinma();
  if (dikey.matches) S.gorunurAlan(Math.round(SAYFA[sayfaDurum]()), true);
  S.kameraGit(KAMERA.genel, true);
  tuvalDinle();
  uygula();
  isaretleriGuncelle();
  requestAnimationFrame(() => sahneAlani.classList.add('hazir'));
  if (TEST) S.kareGuncelleyici(() => { kareSayac++; return false; });
}
$('#yeniden-yukle')?.addEventListener('click', () => location.reload());

function isaretleriKur() {
  const yatay = (g) => { g.rotateX(-Math.PI / 2); return g; };
  const mat = (renk, op = 0.96) => new MeshBasicMaterial({ color: renk, transparent: true, opacity: op, depthWrite: false });
  imlec = new Mesh(yatay(new RingGeometry(1.2, 1.9, 32)), mat(0x8b5cf6)); imlec.renderOrder = 4; imlec.visible = false;
  ilkIsaret = new Mesh(yatay(new CircleGeometry(1.15, 24)), mat(0x7c3aed)); ilkIsaret.renderOrder = 4; ilkIsaret.visible = false;
  pinGrup = new InstancedMesh(new BoxGeometry(2.1, 0.05, 2.1), mat(0x16a34a, 0.9), 4); pinGrup.count = 0; pinGrup.frustumCulled = false;
  uclar = new InstancedMesh(yatay(new RingGeometry(0.95, 1.55, 24)), mat(0x7c3aed), 24); uclar.count = 0; uclar.frustumCulled = false; uclar.renderOrder = 4;
  S.scene.add(imlec, ilkIsaret, pinGrup, uclar);
}
// Gölgelendiricileri baştan bir kez derle: ilk yanan LED'de, ilk imleçte takılma olmasın.
function isinma() {
  const led = ozgurLedYap('kirmizi', new Vector3(-150, BB_UST, 60), new Vector3(-147.46, BB_UST, 60));
  led.userData.ac(1); S.scene.add(led);
  const gorunen = [imlec, ilkIsaret].map((m) => m.visible);
  imlec.visible = ilkIsaret.visible = true;
  try { S.renderer.compile(S.scene, S.camera); } catch (e) { /* derleme ilk çizimde yapılır */ }
  S.scene.remove(led); parcaAt(led);
  [imlec.visible, ilkIsaret.visible] = gorunen;
}

const parcaAnahtar = (p) => JSON.stringify([p.tur, p.renk, p.deger, p.anot, p.katot, p.a, p.b, p.sutun, p.bas, p.son]);
function parcaNesnesi(p) {
  if (p.tur === 'led') return ozgurLedYap(p.renk, noktaV(p.anot), noktaV(p.katot));
  if (p.tur === 'direnc') return ozgurDirencYap(p.deger, noktaV(p.a), noktaV(p.b));
  if (p.tur === 'buton') { const a = delikNokta(p.sutun, 'e'), b = delikNokta(p.sutun + 2, 'e'); return ozgurButonYap(new Vector3((a.x + b.x) / 2, BB_UST, BB.z)); }
  return ozgurKabloYap(noktaV(p.bas), noktaV(p.son), p.renk);
}
// Yalnız değişen parçalar yeniden yapılır; gölge haritası yalnız o zaman yenilenir.
function parcalariKur() {
  if (!S) return;
  const gorulen = new Set();
  let degisen = false;
  for (const p of devre.parcalar) {
    gorulen.add(p.id);
    const a = parcaAnahtar(p), v = nesneler.get(p.id);
    if (v && v.anahtar === a) continue;
    if (v) { S.scene.remove(v.nesne); parcaAt(v.nesne); }
    const nesne = parcaNesnesi(p);
    nesne.userData.parcaId = p.id;
    nesne.updateMatrixWorld(true);
    S.scene.add(nesne);
    nesneler.set(p.id, { nesne, anahtar: a });
    degisen = true;
  }
  for (const [id, v] of nesneler) if (!gorulen.has(id)) { S.scene.remove(v.nesne); parcaAt(v.nesne); nesneler.delete(id); degisen = true; }
  for (const id of basili) nesneler.get(id)?.nesne.userData.bas?.(true);
  if (degisen) S.golgeYenile();
}
function parcaTepe(id) {
  const v = nesneler.get(id), p = bul(id);
  if (!v || !p) return null;
  if (p.tur === 'kablo') return v.nesne.userData.egri.getPoint(0.5).add(new Vector3(0, 2.5, 0));
  return v.nesne.localToWorld((v.nesne.userData.tepe || new Vector3(0, 6, 0)).clone().add(new Vector3(0, 2, 0)));
}

// ------------------------------------------------------------------ ekran ile sahne arası
const isin = new Raycaster(), ndc = new Vector2(), duzlem = new Plane(new Vector3(0, 1, 0), 0), kesisim = new Vector3();
function isinKur(cx, cy) {
  const r = canvas.getBoundingClientRect();
  ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
  isin.setFromCamera(ndc, S.camera);
}
function ekranKonum(v) {
  const p = v.clone().project(S.camera), r = canvas.getBoundingClientRect();
  return { x: r.left + ((p.x + 1) / 2) * r.width, y: r.top + ((1 - p.y) / 2) * r.height };
}
// Bir adımın (2,54 mm) ekrandaki boyu: delikler parmağa göre küçükse seçici açılır.
function adimPiksel(v) {
  const a = ekranKonum(v), b = ekranKonum(v.clone().add(new Vector3(ADIM, 0, 0))), c = ekranKonum(v.clone().add(new Vector3(0, 0, ADIM)));
  return Math.min(Math.hypot(b.x - a.x, b.y - a.y), Math.hypot(c.x - a.x, c.y - a.y));
}
const SOL_X = delikNokta(1, 'a').x;
const CIZGI_Z = [...Object.entries(SATIR_Z).map(([r, z]) => ({ tur: 'satir', r, z })), ...Object.entries(RAY_Z).map(([r, z]) => ({ tur: 'ray', r, z }))];
function deligeYakin(v) {
  const sx = (v.x - SOL_X) / ADIM + 1, sz = (v.z - BB.z) / ADIM;
  let en = null, enD = 0.55;
  for (const c of CIZGI_Z) { const d = Math.abs(sz - c.z); if (d < enD) { enD = d; en = c; } }
  if (!en) return null;
  const s = Math.round(sx);
  if (Math.abs(sx - s) > 0.55) return null;
  if (en.tur === 'satir') return s >= 1 && s <= SUTUN_SAYISI ? `h:${s}:${en.r}` : null;
  return RAY_SUTUN.includes(s) ? `r:${en.r}:${s}` : null;
}
// Dokunulan yerdeki pin ya da delik: önce pin başlıklarının üstü (daha yüksekte), sonra breadboard yüzeyi.
// Pinin dokunma alanı deliğinin iki üç katı: en yakın pin 1,9 mm içindeyse o seçilir.
function enYakinNokta(cx, cy) {
  isinKur(cx, cy);
  duzlem.constant = -BASLIK_UST;
  if (isin.ray.intersectPlane(duzlem, kesisim)) {
    let en = null, d0 = 1.9;
    for (const p of PINLER) { const d = Math.hypot(p.v.x - kesisim.x, p.v.z - kesisim.z); if (d < d0) { d0 = d; en = p.id; } }
    if (en) return en;
  }
  duzlem.constant = -BB_UST;
  return isin.ray.intersectPlane(duzlem, kesisim) ? deligeYakin(kesisim) : null;
}
function parcaVurus(cx, cy) {
  isinKur(cx, cy);
  const hedef = [];
  for (const v of nesneler.values()) if (v.nesne.userData.hedef) hedef.push(v.nesne.userData.hedef);
  const v = isin.intersectObjects(hedef, false)[0];
  let o = v?.object;
  while (o && !o.userData.parcaId) o = o.parent;
  return o ? bul(o.userData.parcaId) : null;
}

// ------------------------------------------------------------------ dokunma, fare, klavye
let imlecId = null, imlecKaynak = null, kareSayac = 0;
function tuvalDinle() {
  const aktif = new Set();
  let coklu = false, basla = null, fare = null, fareRaf = 0;
  canvas.addEventListener('pointerdown', (e) => {
    if (!aktif.size) coklu = false;
    aktif.add(e.pointerId); if (aktif.size > 1) coklu = true;
    basla = { x: e.clientX, y: e.clientY, t: performance.now(), tur: e.pointerType };
  });
  const kalk = (e) => {
    aktif.delete(e.pointerId);
    if (!basla || coklu) { if (!aktif.size) basla = null; return; }
    const b = basla; basla = null;
    if (e.type !== 'pointerup' || Math.hypot(e.clientX - b.x, e.clientY - b.y) > 9 || performance.now() - b.t > 600) return;
    dokun(e.clientX, e.clientY, b.tur);
  };
  canvas.addEventListener('pointerup', kalk); canvas.addEventListener('pointercancel', kalk);
  canvas.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    fare = { x: e.clientX, y: e.clientY, tus: e.buttons };
    if (!fareRaf) fareRaf = requestAnimationFrame(() => { fareRaf = 0; if (fare && !fare.tus) imlecAyarla(enYakinNokta(fare.x, fare.y), 'fare'); });
  });
  canvas.addEventListener('pointerleave', () => { fare = null; if (imlecKaynak === 'fare') imlecAyarla(null, null); });
  canvas.addEventListener('focus', () => { if (!imlecId || imlecKaynak !== 'klavye') imlecAyarla(imlecId || 'h:15:e', 'klavye', true); });
  canvas.addEventListener('blur', () => { if (imlecKaynak === 'klavye') imlecAyarla(null, null); });
  canvas.addEventListener('keydown', klavye);
}
function dokun(cx, cy, tur) {
  if (!S) return;
  seciciKapat();
  if (arac) {
    const id = enYakinNokta(cx, cy);
    if (!id) { aracUyar('Burada delik yok: breadboard\'daki bir deliğe ya da Arduino\'nun bir pinine dokun'); return; }
    if (adimPiksel(noktaV(id)) < (tur === 'mouse' ? 7 : 26)) { seciciAc(id); return; }
    imlecAyarla(id, tur === 'mouse' ? 'fare' : 'dokunma');
    noktaSec(id);
    return;
  }
  const p = parcaVurus(cx, cy);
  if (p) {
    if (p.tur === 'buton' && calisiyor && devre.program.tur === 'buton') { anlikBas(p.id); return; }
    parcaSec(p.id);
    return;
  }
  secimKaldir();
  const id = enYakinNokta(cx, cy);
  imlecAyarla(id, id ? 'dokunma' : null);
  if (id) duyur(`${noktaAdi(id, true)}: ${grupAdi(id)} birbirine bağlı`);
}
function imlecAyarla(id, kaynak, zorla = false) {
  if (id === imlecId && kaynak === imlecKaynak && !zorla) return;
  imlecId = id; imlecKaynak = id ? kaynak : null;
  if (canvas) canvas.style.cursor = id ? 'pointer' : arac ? 'crosshair' : '';
  isaretleriGuncelle();
}
function klavye(e) {
  if (!S) return;
  const k = e.key;
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(k)) {
    e.preventDefault();
    const simdi = imlecId || 'h:15:e';
    let ci = CIZGILER.findIndex((c) => c.includes(simdi));
    if (ci < 0) ci = 8;
    const c = CIZGILER[ci], i = c.indexOf(simdi);
    let yeni = simdi;
    if (k === 'ArrowLeft') yeni = c[Math.max(0, i - 1)];
    if (k === 'ArrowRight') yeni = c[Math.min(c.length - 1, i + 1)];
    if (k === 'Home') yeni = c[0];
    if (k === 'End') yeni = c[c.length - 1];
    if (k === 'ArrowUp' || k === 'ArrowDown') {
      const hedef = CIZGILER[Math.max(0, Math.min(CIZGILER.length - 1, ci + (k === 'ArrowUp' ? -1 : 1)))];
      const x = noktaV(simdi).x;
      yeni = hedef.reduce((en, id) => (Math.abs(noktaV(id).x - x) < Math.abs(noktaV(en).x - x) ? id : en), hedef[0]);
    }
    imlecAyarla(yeni, 'klavye');
    duyur(noktaTarif(yeni));
    return;
  }
  if (k === 'Enter' || k === ' ') {
    e.preventDefault();
    const id = imlecId || 'h:15:e';
    if (arac) { noktaSec(id); return; }
    const dolu = doluNoktalar(devre.parcalar).get(id);
    if (dolu) { parcaSec(dolu); return; }
    imlecAyarla(id, 'klavye', true);
    duyur(`${noktaAdi(id, true)}: ${grupAdi(id)} birbirine bağlı`);
    return;
  }
  if ((k === 'Delete' || k === 'Backspace') && seciliId && !arac) { e.preventDefault(); parcaSil(seciliId); }
}
function noktaTarif(id) {
  let t = noktaAdi(id, true);
  const dolu = doluNoktalar(devre.parcalar).get(id);
  if (dolu) t += `, burada ${parcaAdi(bul(dolu))}`;
  if (arac) { const v = noktaUygun(devre.parcalar, arac.tur, arac.ilk, id); if (!v.gecerli) t += `. Olmaz: ${v.neden}`; }
  return t;
}
document.addEventListener('keydown', (e) => {
  if (e.target.closest?.('input[type=text], textarea') || pencere?.open) return;
  if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && (e.key === 'z' || e.key === 'Z')) { e.preventDefault(); geriAl(); return; }
  if (e.key === 'Escape') {
    if (!$('#secici').hidden) { seciciKapat(); canvas.focus({ preventScroll: true }); return; }
    if (arac) { aracBitir(true); return; }
    if (seciliId) secimKaldir();
  }
});

// ------------------------------------------------------------------ işaretler: imleç halkası, bağlantı grubu, seçili parçanın uçları, uyarı rozetleri
const mat4 = new Matrix4();
const imlecEtiket = Object.assign(document.createElement('div'), { className: 'imlec-etiket' });
const ilkEtiket = Object.assign(document.createElement('div'), { className: 'imlec-etiket ilk' });
const rozetler = new Map(); // parça kimliği -> düğme
function isaretleriGuncelle() {
  if (!S) return;
  const liste = [];
  // imleç ve bağlantı grubu
  let gecerli = true, neden = '';
  if (imlecId) {
    if (arac) { const v = noktaUygun(devre.parcalar, arac.tur, arac.ilk, imlecId); gecerli = v.gecerli; neden = v.neden || ''; }
    imlec.position.copy(noktaV(imlecId)).setY(isaretY(imlecId));
    imlec.material.color.setHex(gecerli ? 0x8b5cf6 : 0xdc2626);
    imlec.visible = true;
    const grup = grupNoktalari(imlecId);
    if (noktaCoz(imlecId).tur === 'pin') {
      bb.grupGoster([]);
      const pinler = grup.filter((g) => g !== imlecId).slice(0, 4);
      pinGrup.count = pinler.length;
      pinler.forEach((g, i) => { const v = noktaV(g); mat4.makeTranslation(v.x, BASLIK_UST + 0.06, v.z); pinGrup.setMatrixAt(i, mat4); });
      pinGrup.instanceMatrix.needsUpdate = true;
    } else { pinGrup.count = 0; bb.grupGoster(grup.map((g) => noktaV(g))); }
    let metin;
    if (arac) metin = gecerli ? noktaAdi(imlecId, true) : `${noktaAdi(imlecId)}: ${neden}`;
    else metin = noktaCoz(imlecId).tur === 'delik' ? `${noktaAdi(imlecId)} · ${grupAdi(imlecId)}` : grupAdi(imlecId);
    imlecEtiket.textContent = metin;
    imlecEtiket.classList.toggle('gecersiz', !gecerli);
    liste.push({ nokta: noktaV(imlecId).setY(isaretY(imlecId)), el: imlecEtiket });
  } else { imlec.visible = false; pinGrup.count = 0; bb.grupGoster([]); }
  // yerleştirmenin ilk ucu
  if (arac?.ilk) {
    ilkIsaret.position.copy(noktaV(arac.ilk)).setY(isaretY(arac.ilk) + 0.01); ilkIsaret.visible = true;
    ilkEtiket.textContent = `${arac.tur === 'led' ? 'Anot' : '1. uç'}: ${noktaAdi(arac.ilk)}`;
    if (arac.ilk !== imlecId) liste.push({ nokta: noktaV(arac.ilk).setY(isaretY(arac.ilk)), el: ilkEtiket });
  } else ilkIsaret.visible = false;
  // seçili ya da gösterilen parçaların uçları
  const goster = [...new Set([seciliId, ...vurguIdler].filter(Boolean))].map(bul).filter(Boolean);
  const uc = goster.flatMap((p) => parcaUclari(p)).slice(0, 24);
  uclar.count = uc.length;
  uc.forEach((id, i) => { const v = noktaV(id); mat4.makeTranslation(v.x, isaretY(id) + 0.02, v.z); uclar.setMatrixAt(i, mat4); });
  uclar.instanceMatrix.needsUpdate = true;
  // uyarı rozetleri: sorunlu parçanın üstünde (renk ve ikon birlikte)
  for (const [id, el] of rozetler) { const n = parcaTepe(id); if (n) liste.push({ nokta: n, el }); }
  S.isaretKoy(liste);
}
function rozetleriYenile() {
  const yeni = new Map();
  for (const u of sonuc.uyarilar) {
    if (u.seviye === 'bilgi') continue;
    for (const id of u.parcalar) if (!yeni.has(id) || (u.seviye === 'hata' && yeni.get(id).seviye !== 'hata')) yeni.set(id, u);
  }
  const imza = JSON.stringify([...yeni].map(([id, u]) => [id, u.seviye, u.metin]));
  if (imza === rozetleriYenile.imza) return false;
  rozetleriYenile.imza = imza;
  rozetler.clear();
  for (const [id, u] of yeni) {
    const el = document.createElement('button');
    el.type = 'button'; el.tabIndex = -1; el.className = `rozet-isaret ${u.seviye}`;
    el.innerHTML = `<span>${IKON[u.seviye] || ''}</span>`;
    el.setAttribute('aria-label', `${SEVIYE_AD[u.seviye]}: ${u.metin}`);
    el.title = u.metin;
    el.addEventListener('click', (e) => { e.stopPropagation(); parcaSec(id); durumAc(); });
    rozetler.set(id, el);
  }
  return true;
}

// ------------------------------------------------------------------ yerleştirme araçları
const aracAdi = (a) => (a.tur === 'led' ? `${buyuk(LED_RENKLERI[a.renk].ad)} LED` : a.tur === 'direnc' ? `${DIRENCLER[a.deger]} direnç` : a.tur === 'buton' ? 'Buton' : `${KABLO_RENKLERI[a.renk]} kablo`);
function asamaMetni() {
  if (!arac) return '';
  const on = arac.tasinan ? `${parcaAdi(arac.tasinan.parca)} taşınıyor. ` : `${aracAdi(arac)}: `;
  if (arac.tur === 'buton') return `${on}orta kanalın kenarındaki e ya da f satırında bir deliğe dokun; buton kanalın üstüne oturur.`;
  if (arac.tur === 'led') return arac.ilk ? `Şimdi kısa bacağın (katot, eksi) deliğine dokun: anottan en çok 4 adım ötede.` : `${on}önce uzun bacağın (anot, artı) deliğine dokun.`;
  if (arac.tur === 'direnc') return arac.ilk ? 'Şimdi ikinci bacağın deliğine dokun: ilk bacaktan 2 ile 6 adım ötede.' : `${on}birinci bacağın deliğine dokun.`;
  return arac.ilk ? 'Şimdi kablonun öbür ucunun takılacağı pine ya da deliğe dokun.' : `${on}kablonun başlayacağı pine ya da deliğe dokun.`;
}
let uyariZaman = 0;
function yonergeYaz(gecersiz = '') {
  const y = $('#yonerge');
  y.hidden = !arac;
  if (!arac) return;
  clearTimeout(uyariZaman);
  y.classList.toggle('gecersiz', Boolean(gecersiz));
  $('#yonerge-ikon').innerHTML = gecersiz ? IKON.hata || '' : IKON.sec || '';
  $('#yonerge-metin').textContent = gecersiz ? `Olmaz: ${gecersiz}` : asamaMetni();
  if (gecersiz) uyariZaman = setTimeout(() => yonergeYaz(), 3200);
}
function aracUyar(neden) { yonergeYaz(neden); duyur(`Olmaz: ${neden}`); }
function aracBaslat(tur, ek = {}) {
  if (!S) return;
  if (arac) aracBitir(true);
  secimKaldir(false); seciciKapat();
  arac = { tur, renk: ek.renk, deger: ek.deger, ilk: null, tasinan: ek.tasinan || null, onceki: ek.onceki || anlik() };
  paletGuncelle();
  sayfaKisalt();
  yonergeYaz();
  imlecAyarla(imlecKaynak === 'fare' || imlecKaynak === 'klavye' ? imlecId : null, imlecKaynak, true);
  duyur(asamaMetni());
}
function aracBitir(iptal) {
  if (!arac) return;
  const t = arac.tasinan;
  if (iptal && t) { devre.parcalar.splice(Math.min(t.indeks, devre.parcalar.length), 0, t.parca); degisti(false); }
  arac = null; seciciKapat();
  paletGuncelle(); yonergeYaz(); sayfaGeri();
  imlecAyarla(imlecKaynak === 'dokunma' ? null : imlecId, imlecKaynak, true);
  if (iptal) duyur(t ? 'Taşıma iptal edildi; parça eski yerinde' : 'Yerleştirme iptal edildi');
}
function paletGuncelle() {
  for (const b of $$('[data-arac]')) {
    const deger = b.dataset.deger || '';
    const ayni = arac && !arac.tasinan && b.dataset.arac === arac.tur && (arac.tur === 'led' ? deger === arac.renk : arac.tur === 'direnc' ? Number(deger) === arac.deger : true);
    b.setAttribute('aria-pressed', String(Boolean(ayni)));
  }
}
function noktaSec(id) {
  if (!arac) return;
  const v = noktaUygun(devre.parcalar, arac.tur, arac.ilk, id);
  if (!v.gecerli) { aracUyar(v.neden); isaretleriGuncelle(); return; }
  if (arac.tur === 'buton') { parcaEkle({ tur: 'buton', sutun: v.sutun }); return; }
  if (!arac.ilk) {
    arac.ilk = id;
    yonergeYaz(); isaretleriGuncelle();
    duyur(`${noktaAdi(id, true)} seçildi. ${asamaMetni()}`);
    return;
  }
  const a = arac;
  parcaEkle(a.tur === 'led' ? { tur: 'led', renk: a.renk, anot: a.ilk, katot: id } : a.tur === 'direnc' ? { tur: 'direnc', deger: a.deger, a: a.ilk, b: id } : { tur: 'kablo', renk: a.renk, bas: a.ilk, son: id });
}
function parcaEkle(p) {
  const t = arac.tasinan, onceki = arac.onceki;
  const parca = { id: t ? t.parca.id : yeniId(p.tur), ...p };
  if (t) devre.parcalar.splice(Math.min(t.indeks, devre.parcalar.length), 0, parca); else devre.parcalar.push(parca);
  gecmiseEkle(onceki);
  arac = null; seciciKapat(); paletGuncelle(); yonergeYaz(); sayfaGeri();
  imlecAyarla(imlecKaynak === 'dokunma' ? null : imlecId, imlecKaynak, true);
  degisti();
  const u = sonuc.uyarilar.find((x) => x.seviye !== 'bilgi' && x.parcalar.includes(parca.id));
  duyur(`${parcaAdi(parca)} ${t ? 'taşındı' : 'takıldı'}.${u ? ` ${SEVIYE_AD[u.seviye]}: ${u.metin}` : ''}`);
}

// ------------------------------------------------------------------ seçici: küçük ekranda dokunulan yerin çevresi büyük düğmelerle
function seciciAc(merkez) {
  const n = noktaCoz(merkez), izgara = $('#secici-izgara');
  const hucre = (id, onerilen) => {
    const v = noktaUygun(devre.parcalar, arac.tur, arac.ilk, id), m = noktaCoz(id);
    const kisa = v.gecerli ? '' : /dolu|kablo var/.test(v.neden) ? 'dolu' : /aynı yere/.test(v.neden) ? 'aynı' : v.mesafe !== undefined ? (v.mesafe < 2 ? 'yakın' : 'uzak') : 'olmaz';
    const yazi = m.tur === 'pin' ? pinAdi(m.pin).replace('. pin', '').replace(' (RX)', '').replace(' (TX)', '').replace('boş pin (NC)', 'NC') : m.tur === 'delik' ? `${m.sutun}${m.satir}` : String(m.sutun);
    return `<button type="button" data-secici="${id}"${v.gecerli ? '' : ' disabled'}${onerilen ? ' class="yakin-hedef"' : ''} aria-label="${esc(noktaAdi(id, true) + (v.gecerli ? '' : `: ${v.neden}`))}">${esc(yazi)}${kisa ? `<small>${kisa}</small>` : ''}</button>`;
  };
  let h = '';
  if (n.tur === 'pin') {
    const c = CIZGILER.find((x) => x.includes(merkez)), i = c.indexOf(merkez), b = Math.max(0, Math.min(c.length - 5, i - 2));
    izgara.style.gridTemplateColumns = 'repeat(5,minmax(0,1fr))';
    h = c.slice(b, b + 5).map((id) => hucre(id, id === merkez)).join('');
    $('#secici-baslik').textContent = 'Hangi pin? Dokunduğun yerin çevresi';
  } else {
    const ci = BB_CIZGI.findIndex((x) => x.includes(merkez)), c0 = Math.max(0, Math.min(BB_CIZGI.length - 3, ci - 1));
    const s0 = Math.max(1, Math.min(SUTUN_SAYISI - 4, n.sutun - 2));
    izgara.style.gridTemplateColumns = '52px repeat(5,minmax(0,1fr))';
    h = '<span class="bas"></span>' + [0, 1, 2, 3, 4].map((k) => `<span class="bas">${s0 + k}</span>`).join('');
    for (const c of BB_CIZGI.slice(c0, c0 + 3)) {
      h += `<span class="bas">${cizgiAdi(c)}</span>`;
      for (let k = 0; k < 5; k++) { const id = c.find((x) => noktaCoz(x).sutun === s0 + k); h += id ? hucre(id, id === merkez) : '<span class="bosluk" aria-hidden="true"></span>'; }
    }
    $('#secici-baslik').textContent = 'Hangi delik? Dokunduğun yerin çevresi';
  }
  izgara.innerHTML = h;
  $('#secici').hidden = false;
  imlecAyarla(merkez, 'dokunma');
  (izgara.querySelector('.yakin-hedef:not(:disabled)') || izgara.querySelector('button:not(:disabled)') || $('#secici-kapat')).focus({ preventScroll: true });
  duyur(`Dokunduğun yerin çevresi açıldı: ${n.tur === 'pin' ? 'pini' : 'deliği'} listeden seç`);
}
function seciciKapat() { const s = $('#secici'); if (s && !s.hidden) { s.hidden = true; $('#secici-izgara').innerHTML = ''; } }
$('#secici-izgara').addEventListener('click', (e) => { const b = e.target.closest('[data-secici]'); if (!b || b.disabled) return; const id = b.dataset.secici; seciciKapat(); imlecAyarla(id, 'dokunma'); noktaSec(id); });
$('#secici-kapat').addEventListener('click', () => { seciciKapat(); isaretleriGuncelle(); });
$('#yonerge-iptal').addEventListener('click', () => aracBitir(true));
// Hayalet tıklama koruması: tuvale dokununca açılan katman (seçici, seçim kartı, uyarı rozeti) parmağın altına
// gelebilir; aynı dokunmanın tıklaması yeni çıkan düğmeye düşüp yanlış deliği seçmesin ya da parçayı silmesin.
// Bu katmanlardaki düğme yalnız basma da kendi üstünde başladıysa çalışır (klavyeyle tıklama, detail 0, serbest).
let sonBasilan = null;
document.addEventListener('pointerdown', (e) => { sonBasilan = e.target; }, true);
document.addEventListener('click', (e) => {
  if (e.detail === 0) return;
  const k = e.target.closest?.('#secici, #secim-kart, .rozet-isaret');
  if (k && !(sonBasilan && k.contains(sonBasilan))) { e.stopPropagation(); e.preventDefault(); }
}, true);

// ------------------------------------------------------------------ seçim: taşı, ters çevir, sil
function parcaSec(id) {
  const p = bul(id);
  if (!p) { secimKaldir(); return; }
  seciliId = id; vurguIdler = [];
  $('#secim-ad').textContent = parcaAdi(p);
  $('#secim-acik').textContent = parcaAciklama(p);
  $('[data-secim="ters"]').hidden = p.tur !== 'led';
  $('#secim-kart').hidden = false;
  listeSecimi();
  isaretleriGuncelle();
  duyur(`${parcaAdi(p)} seçildi. ${parcaAciklama(p)}.`);
}
function secimKaldir(guncelle = true) {
  seciliId = null; vurguIdler = [];
  const k = $('#secim-kart'); if (k) k.hidden = true;
  listeSecimi();
  if (guncelle) isaretleriGuncelle();
}
function tasimaBaslat(id) {
  const i = devre.parcalar.findIndex((p) => p.id === id);
  if (i < 0 || !S) return;
  const onceki = anlik(), parca = devre.parcalar[i];
  devre.parcalar.splice(i, 1);
  degisti(false);
  aracBaslat(parca.tur, { renk: parca.renk, deger: parca.deger, tasinan: { parca, indeks: i }, onceki });
}
function tersCevir(id) {
  const p = bul(id);
  if (!p || p.tur !== 'led') return;
  gecmiseEkle();
  [p.anot, p.katot] = [p.katot, p.anot];
  degisti();
  parcaSec(id);
  duyur(`LED ters çevrildi: anot (uzun bacak) artık ${noktaAdi(p.anot)}, katot ${noktaAdi(p.katot)}`);
}
function parcaSil(id) {
  const p = bul(id);
  if (!p) return;
  gecmiseEkle();
  devre.parcalar = devre.parcalar.filter((x) => x.id !== id);
  basili.delete(id);
  secimKaldir(false);
  degisti();
  duyur(`${parcaAdi(p)} kaldırıldı. Geri al ile geri getirebilirsin.`);
}
$('#secim-kart').addEventListener('click', (e) => {
  const b = e.target.closest('[data-secim]');
  if (!b || !seciliId) return;
  const id = seciliId, ey = b.dataset.secim;
  if (ey === 'tasi') tasimaBaslat(id);
  if (ey === 'ters') tersCevir(id);
  if (ey === 'sil') parcaSil(id);
  if (ey === 'kapat') secimKaldir();
});

// ================================================================== panel: hazır devre, palet, kablo rengi, parça listesi
document.addEventListener('click', (e) => {
  const h = e.target.closest('[data-hazir]');
  if (h) {
    const hz = HAZIR[h.dataset.hazir];
    if (arac) aracBitir(true);
    gecmiseEkle();
    devre = devreAyikla(hz);
    secimKaldir(false);
    degisti();
    S?.kameraGit(KAMERA.genel);
    duyur(`${hz.ad} devresi yüklendi. Geri al ile önceki devrene dönebilirsin.`);
    return;
  }
  const a = e.target.closest('[data-arac]');
  if (a && !a.disabled) {
    if (a.getAttribute('aria-pressed') === 'true') { aracBitir(true); return; }
    const tur = a.dataset.arac, d = a.dataset.deger;
    aracBaslat(tur, tur === 'led' ? { renk: d } : tur === 'direnc' ? { deger: Number(d) } : tur === 'kablo' ? { renk: kabloRengi } : {});
    return;
  }
  const l = e.target.closest('[data-liste]');
  if (l) {
    const id = l.dataset.id, ey = l.dataset.liste;
    if (ey === 'sec') { parcaSec(id); if (dikey.matches && sayfaDurum !== 'kisa') sayfaUygula('kisa'); }
    if (ey === 'tasi') tasimaBaslat(id);
    if (ey === 'ters') tersCevir(id);
    if (ey === 'sil') parcaSil(id);
  }
});
function paletKabloRengi() {
  for (const r of $$('input[name="kablo-renk"]')) r.checked = r.value === kabloRengi;
  const b = $('[data-arac="kablo"]'); if (b) b.style.setProperty('--kablo', KABLO_HEX[kabloRengi]);
}
function listeCiz(zorla = false) {
  const sorun = new Map();
  for (const u of sonuc?.uyarilar || []) if (u.seviye !== 'bilgi') for (const id of u.parcalar) if (sorun.get(id) !== 'hata') sorun.set(id, u.seviye);
  const tasiYok = !S;
  const imza = JSON.stringify([devre.parcalar, [...sorun], tasiYok]);
  if (!zorla && imza === listeCiz.imza) return;
  listeCiz.imza = imza;
  const l = $('#parca-listesi');
  $('#parca-sayi').textContent = `(${devre.parcalar.length})`;
  const odak = document.activeElement?.closest?.('[data-liste]');
  const odakAnahtar = odak && l.contains(odak) ? [odak.dataset.liste, odak.dataset.id] : null;
  if (!devre.parcalar.length) l.innerHTML = '<li class="bos-mesaj">Breadboard boş. Hazır devre yükle ya da yukarıdan bir parça seç.</li>';
  else l.innerHTML = devre.parcalar.map((p) => {
    const ad = esc(parcaAdi(p)), s = sorun.get(p.id);
    return `<li data-id="${p.id}">${parcaIkon(p)}<span class="parca-ad">${ad}${s ? `<span class="parca-sorun ${s}">${IKON[s] || ''}${SEVIYE_AD[s]}</span>` : ''}</span><span class="parca-acik">${esc(parcaAciklama(p))}</span>`
      + `<div class="parca-dugmeler"><button type="button" class="dugme kucuk" data-liste="sec" data-id="${p.id}" aria-label="Seç: ${ad}">Seç</button>`
      + (tasiYok ? '' : `<button type="button" class="dugme kucuk" data-liste="tasi" data-id="${p.id}" aria-label="Taşı: ${ad}">${IKON.tasi || ''}Taşı</button>`)
      + (p.tur === 'led' ? `<button type="button" class="dugme kucuk" data-liste="ters" data-id="${p.id}" aria-label="Ters çevir: ${ad}">${IKON.ters || ''}Ters çevir</button>` : '')
      + `<button type="button" class="dugme kucuk" data-liste="sil" data-id="${p.id}" aria-label="Sil: ${ad}">${IKON.sil || ''}Sil</button></div></li>`;
  }).join('');
  listeSecimi();
  if (odakAnahtar) (l.querySelector(`[data-liste="${odakAnahtar[0]}"][data-id="${odakAnahtar[1]}"]`) || l.querySelector('[data-liste]') || $('#sekme-kur'))?.focus({ preventScroll: true });
}
function listeSecimi() { for (const li of $$('#parca-listesi li[data-id]')) { if (li.dataset.id === seciliId) li.setAttribute('aria-current', 'true'); else li.removeAttribute('aria-current'); } }

// ================================================================== program
function programArayuz() {
  const pr = devre.program, kablolu = kabloluPinler(devre.parcalar);
  for (const r of $$('input[name="program"]')) r.checked = r.value === pr.tur;
  for (const d of $$('[data-program-ayar]')) d.hidden = d.dataset.programAyar !== pr.tur;
  const isaretle = (ad, deger, kapali) => { for (const r of $$(`input[name="${ad}"]`)) { r.checked = Number(r.value) === deger; r.disabled = Number(r.value) === kapali; } };
  if (pr.tur === 'blink') { isaretle('blink-pin', pr.pin); isaretle('bekleme', pr.bekleme); }
  if (pr.tur === 'buton') { isaretle('buton-giris', pr.giris, pr.cikis); isaretle('buton-cikis', pr.cikis, pr.giris); }
  for (const b of $$('[data-elle]')) {
    const p = Number(b.dataset.elle), y = Boolean(pr.tur === 'elle' && pr.seviyeler[p]), k = kablolu.has(String(p));
    b.setAttribute('aria-pressed', String(y));
    b.querySelector('span').textContent = y ? 'HIGH' : 'LOW';
    b.classList.toggle('kablolu', k);
    b.setAttribute('aria-label', `${p}. pin: ${y ? 'HIGH' : 'LOW'}${k ? ', kablo takılı' : ''}`);
  }
}
function programAyarla(yeni, metin) {
  gecmiseEkle();
  devre.program = programAyikla(yeni);
  programArayuz(); kodCiz(); zamanlayici(true); uygula(); kaydet();
  if (metin) duyur(metin);
}
document.addEventListener('change', (e) => {
  const t = e.target, pr = devre.program;
  if (t.name === 'program') {
    const cikis = pr.tur === 'blink' ? pr.pin : pr.tur === 'buton' ? pr.cikis : 13;
    if (t.value === 'blink') programAyarla({ tur: 'blink', pin: cikis, bekleme: 1000 }, `Program: yanıp sönen LED, ${cikis}. pin`);
    if (t.value === 'buton') programAyarla({ tur: 'buton', giris: cikis === 2 ? 3 : 2, cikis }, 'Program: butonla LED');
    if (t.value === 'elle') programAyarla({ tur: 'elle', seviyeler: {} }, 'Program: elle; pinleri HIGH ya da LOW yap');
  }
  if (t.name === 'blink-pin') programAyarla({ ...pr, pin: Number(t.value) }, `LED pini ${t.value}`);
  if (t.name === 'bekleme') programAyarla({ ...pr, bekleme: Number(t.value) }, `Bekleme ${sayiYaz(Number(t.value) / 1000, Number(t.value) % 1000 ? 1 : 0)} saniye`);
  if (t.name === 'buton-giris') programAyarla({ ...pr, giris: Number(t.value) }, `Giriş pini ${t.value}`);
  if (t.name === 'buton-cikis') programAyarla({ ...pr, cikis: Number(t.value) }, `Çıkış pini ${t.value}`);
  if (t.name === 'kablo-renk') {
    kabloRengi = t.value; paletKabloRengi(); kaydet();
    if (arac?.tur === 'kablo' && !arac.tasinan) { arac.renk = kabloRengi; yonergeYaz(); }
  }
});
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-elle]');
  if (!b || devre.program.tur !== 'elle') return;
  const p = Number(b.dataset.elle), sev = { ...devre.program.seviyeler };
  if (sev[p]) delete sev[p]; else sev[p] = true;
  programAyarla({ tur: 'elle', seviyeler: sev }, `${p}. pin ${sev[p] ? 'HIGH' : 'LOW'}`);
});
function kodCiz() {
  kodBilgi = kodUret(devre.program, devre.parcalar);
  const g = girintile(kodBilgi.satirlar);
  $('#kod-satirlar').innerHTML = kodBilgi.satirlar.map((s, i) => `<li class="kod-satir${s.k.trim() ? '' : ' bos'}" data-no="${i + 1}"><code>${esc(g[i])}</code><span class="tr">${esc(s.t)}</span></li>`).join('');
  kodVurgula();
}
function kodVurgula() {
  let satirlar = [];
  if (calisiyor && sonuc?.calisiyor && kodBilgi) {
    const pr = devre.program;
    if (pr.tur === 'blink') satirlar = faz ? kodBilgi.vurgu.yuksek : kodBilgi.vurgu.dusuk;
    else if (pr.tur === 'buton') satirlar = sonuc.cikislar[pr.cikis] === 'HIGH' ? kodBilgi.vurgu.yuksek : kodBilgi.vurgu.dusuk;
    else satirlar = kodBilgi.vurgu.yuksek;
  }
  const s = new Set(satirlar);
  for (const li of $$('#kod-satirlar .kod-satir')) li.classList.toggle('calisiyor', s.has(Number(li.dataset.no)));
}

// ================================================================== çalıştırma, zamanlayıcılar, buton
let blinkZaman = 0, blinkAnahtar = '', titresimZaman = 0;
function zamanlayici(yeniden = false) {
  const pr = devre.program, anahtar = calisiyor && pr.tur === 'blink' ? `b${pr.bekleme}:${pr.pin}` : '';
  if (anahtar === blinkAnahtar && !yeniden) return;
  blinkAnahtar = anahtar;
  clearTimeout(blinkZaman); blinkZaman = 0; faz = true;
  if (!anahtar) return;
  const adim = () => { faz = !faz; uygula(); blinkZaman = setTimeout(adim, devre.program.bekleme); };
  blinkZaman = setTimeout(adim, pr.bekleme);
}
function titresimAyarla() { // boşta kalan giriş: LED kendi kendine yanıp söner (gerçek kartta da böyle görünür)
  const gerek = calisiyor && sonuc?.calisiyor && sonuc.giris?.deger === 'KARARSIZ';
  if (gerek && !titresimZaman) titresimZaman = setTimeout(function t() { kararsizBit = Math.random() < 0.5; titresimZaman = 0; uygula(); }, 90 + Math.random() * 380);
  if (!gerek && titresimZaman) { clearTimeout(titresimZaman); titresimZaman = 0; }
}
function calistirAyarla(acik) {
  calisiyor = acik;
  const b = $('#calistir');
  b.toggleAttribute('data-calisiyor', acik);
  b.innerHTML = `${acik ? IKON.dur || '' : IKON.oynat || ''}<span>${acik ? 'Durdur' : 'Çalıştır'}</span>`;
  zamanlayici(true); uygula();
  if (!acik) duyur('Program durdu');
  else duyur(sonuc.durdu === 'kisa-devre' ? 'Kısa devre var: devre çalışmıyor. Durum bölümüne bak.' : sonuc.durdu === 'reset' ? 'RESET pini GND\'ye bağlı: program çalışmıyor' : `Program çalışıyor. ${sonuc.tamam || ''}`);
}
$('#calistir').addEventListener('click', () => calistirAyarla(!calisiyor));
$('#geri-al').addEventListener('click', geriAl);
$('#sifirla').addEventListener('click', () => {
  if (arac) aracBitir(true);
  if (!devre.parcalar.length) { duyur('Breadboard zaten boş'); return; }
  gecmiseEkle();
  devre.parcalar = []; basili.clear();
  secimKaldir(false);
  degisti();
  duyur('Breadboard boşaltıldı. Geri al ile geri dönebilirsin.');
});
const butonBasDugme = $('#buton-bas');
function butonlariBas(deger) {
  basili.clear();
  for (const p of devre.parcalar) if (p.tur === 'buton') { if (deger) basili.add(p.id); nesneler.get(p.id)?.nesne.userData.bas?.(deger); }
  butonBasDugme.toggleAttribute('data-basili', deger);
  uygula();
  if (deger && !calisiyor) duyur('Program çalışmıyor: önce Çalıştır\'a bas');
}
function anlikBas(id) {
  basili.add(id); nesneler.get(id)?.nesne.userData.bas?.(true); uygula();
  setTimeout(() => { basili.delete(id); nesneler.get(id)?.nesne.userData.bas?.(false); uygula(); }, 700);
}
butonBasDugme.addEventListener('pointerdown', (e) => { butonBasDugme.setPointerCapture?.(e.pointerId); butonlariBas(true); });
for (const tur of ['pointerup', 'pointercancel', 'lostpointercapture']) butonBasDugme.addEventListener(tur, () => { if (butonBasDugme.hasAttribute('data-basili')) butonlariBas(false); });
butonBasDugme.addEventListener('keydown', (e) => { if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) { e.preventDefault(); butonlariBas(true); } });
butonBasDugme.addEventListener('keyup', (e) => { if (e.key === ' ' || e.key === 'Enter') butonlariBas(false); });
butonBasDugme.addEventListener('contextmenu', (e) => e.preventDefault());

// ================================================================== çöz ve göster
function degisti(kaydetsin = true) {
  parcalariKur();
  programArayuz();
  kodCiz();
  zamanlayici();
  uygula();
  listeCiz();
  const butonYok = !devre.parcalar.some((p) => p.tur === 'buton');
  if (butonBasDugme.hidden !== butonYok) { butonBasDugme.hidden = butonYok; aracSigdir(); }
  if (kaydetsin) kaydet();
}
function uygula() {
  sonuc = devreCoz(devre, { calisiyor, faz, basili: [...basili], kararsiz: kararsizBit });
  if (S) {
    const yanan = [];
    for (const p of devre.parcalar) {
      if (p.tur !== 'led') continue;
      const v = nesneler.get(p.id), l = sonuc.ledler[p.id], k = l?.yanik ? l.parlaklik : 0;
      v?.nesne.userData.ac(k);
      if (v && k > 0) yanan.push([v.nesne, k]);
    }
    yanan.sort((a, b) => b[1] - a[1]);
    isiklar.forEach((isik, i) => {
      const y = yanan[i];
      if (!y) { isik.intensity = 0; return; }
      isik.color.copy(y[0].userData.renk);
      isik.position.set(y[0].position.x, y[0].position.y + y[0].userData.lambaY, y[0].position.z);
      isik.intensity = 380 * y[1];
    });
    kart.ledOn(calisiyor && sonuc.durdu !== 'kisa-devre');
    kart.ledL(Boolean(sonuc.l13));
  }
  kodVurgula();
  durumCiz();
  const rozetDegisti = S ? rozetleriYenile() : false;
  listeCiz();
  titresimAyarla();
  if (rozetDegisti) isaretleriGuncelle();
  S?.iste();
}
function durumOzeti() {
  const u = sonuc.uyarilar, hata = u.filter((x) => x.seviye === 'hata').length, uyari = u.filter((x) => x.seviye === 'uyari').length, n = hata + uyari;
  const sev = hata ? 'hata' : uyari ? 'uyari' : null;
  if (!calisiyor) return { sinif: sev || 'bekliyor', ikon: sev || 'bekliyor', kisa: n ? `Durdu · ${n} sorun` : 'Durdu: Çalıştır\'a bas', uzun: `Devre durdu. Çalıştır'a basınca program çalışır.${n ? ` Çalıştırmadan önce aşağıdaki ${n} soruna bak.` : ''}` };
  if (sonuc.durdu === 'kisa-devre') return { sinif: 'hata', ikon: 'hata', kisa: 'Kısa devre: devre durdu', uzun: 'Kısa devre var: devre durdu. Aşağıdaki uyarıyı düzelt; düzelince devre kendiliğinden yeniden çalışır.' };
  if (sonuc.durdu === 'reset') return { sinif: 'hata', ikon: 'hata', kisa: 'RESET: program durdu', uzun: 'RESET pini GND\'ye bağlı: kart sürekli baştan başlıyor, program çalışmıyor.' };
  if (n) return { sinif: sev, ikon: sev, kisa: `Çalışıyor · ${n} sorun`, uzun: `Devre çalışıyor ama ${n} sorun var.` };
  if (sonuc.tamam) return { sinif: 'tamam', ikon: 'tamam', kisa: 'Devre doğru, çalışıyor', uzun: sonuc.tamam };
  return { sinif: 'bekliyor', ikon: 'oynat', kisa: 'Çalışıyor', uzun: 'Devre çalışıyor.' };
}
function durumCiz(zorla = false) {
  if (!sonuc) return;
  const o = durumOzeti(), u = sonuc.uyarilar, s = html.dataset.sinif || '6';
  const sorun = u.filter((x) => x.seviye !== 'bilgi'), hata = sorun.some((x) => x.seviye === 'hata');
  const imza = JSON.stringify([o, u.map((x) => [x.seviye, x.metin, x.eylem?.metin, x.parcalar.length]), s, sonuc.ledler, sonuc.cikislar, sonuc.giris, devre.program, calisiyor]);
  if (!zorla && imza === durumCiz.imza) return;
  durumCiz.imza = imza;
  const cip = $('#durum-cip');
  cip.className = `durum-cip ${o.sinif}`;
  cip.innerHTML = `${IKON[o.ikon] || ''}<span>${esc(o.kisa)}</span>`;
  cip.setAttribute('aria-label', `Devre durumu: ${o.uzun} Ayrıntı için dokun.`);
  const r = $('#durum-rozet');
  r.textContent = sorun.length ? String(sorun.length) : '';
  r.className = `rozet${hata ? '' : ' uyari'}`;
  $('#sekme-durum').setAttribute('aria-label', sorun.length ? `Durum: ${sorun.length} sorun` : 'Durum');
  $('#durum-ozet').className = `ozet-kutu ${o.sinif}`;
  $('#durum-ozet').innerHTML = `${IKON[o.ikon] || ''}<span>${esc(o.uzun)}</span>`;
  // uyarılar: odaktaki düğme yeniden çizimde kaybolmasın diye yalnız metin değişince yazılır
  const ui = JSON.stringify(u.map((x) => [x.seviye, x.metin, x.eylem?.metin, x.parcalar]));
  if (zorla || ui !== durumCiz.ui) {
    durumCiz.ui = ui;
    $('#uyarilar').innerHTML = u.length ? u.map((x, i) => `<li class="${x.seviye}">${IKON[x.seviye] || ''}<div><span class="seviye-ad">${SEVIYE_AD[x.seviye]}</span><p class="uyari-metin">${esc(x.metin)}</p></div>${x.parcalar.length || x.eylem
      ? `<div class="uyari-dugmeler">${x.parcalar.length && S ? `<button type="button" class="dugme kucuk" data-goster="${i}">Sahnede göster</button>` : ''}${x.eylem ? `<button type="button" class="dugme kucuk birincil" data-uyari-eylem="${i}">${esc(x.eylem.metin)}</button>` : ''}</div>` : ''}</li>`).join('')
      : `<li class="bilgi">${IKON.tamam || ''}<div><span class="seviye-ad">Tamam</span><p class="uyari-metin">Uyarı yok.</p></div></li>`;
  }
  // pinler
  const pr = devre.program, satir = [];
  if (pr.tur === 'blink') satir.push([pr.pin, 'Çıkış (OUTPUT)']);
  if (pr.tur === 'buton') satir.push([pr.giris, 'Giriş (INPUT)'], [pr.cikis, 'Çıkış (OUTPUT)']);
  if (pr.tur === 'elle') { const k = kabloluPinler(devre.parcalar); for (const p of PROGRAM_PINLERI.slice().reverse()) if (k.has(String(p)) || pr.seviyeler[p]) satir.push([p, 'Çıkış (OUTPUT)']); }
  const ileri = s === '7' || s === '8';
  const pinDurum = (pin, gorev) => {
    if (!sonuc.calisiyor) return 'Program çalışmıyor';
    if (gorev.startsWith('Giriş')) {
      const g = sonuc.giris;
      if (!g) return '';
      if (g.deger === 'KARARSIZ') return 'Boşta: ne HIGH ne LOW okuyor';
      return `${g.deger} okuyor${ileri && Number.isFinite(g.gerilim) ? ` (${sayiYaz(g.gerilim)} V)` : ''}`;
    }
    return sonuc.cikislar[pin] === 'HIGH' ? 'HIGH (5 V)' : 'LOW (0 V)';
  };
  $('#pin-tablo tbody').innerHTML = satir.length ? satir.map(([p, g]) => `<tr><td>${p}. pin</td><td>${g}</td><td>${esc(pinDurum(p, g))}</td></tr>`).join('') : '<tr><td colspan="3">Programda kullanılan pin yok.</td></tr>';
  // LED'ler
  const ledler = devre.parcalar.filter((p) => p.tur === 'led');
  $('#led-liste').innerHTML = ledler.length ? ledler.map((p) => {
    const l = sonuc.ledler[p.id] || {};
    const d = l.yanik ? (l.parlaklik < 0.3 ? 'Çok sönük yanıyor' : 'Yanıyor') : 'Yanmıyor';
    const ma = ileri && l.yanik ? ` · ${sayiYaz(l.akim)} mA` : '';
    return `<li><span class="led-nokta" style="background:${LED_HEX[p.renk]}" aria-hidden="true"></span><span>${esc(parcaAdi(p))}</span><span class="durum-yazi">${d}${ma}</span></li>`;
  }).join('') : '<li>Devrede LED yok.</li>';
}
function durumAc() {
  sekmeAc('durum');
  if (!dikey.matches && html.dataset.panel === 'kapali') panelAyarla(true);
  if (dikey.matches && sayfaDurum === 'kisa') sayfaUygula('yarim');
}
$('#durum-cip').addEventListener('click', () => { durumAc(); $('#sekme-durum').focus({ preventScroll: true }); });
$('#uyarilar').addEventListener('click', (e) => {
  const g = e.target.closest('[data-goster]'), a = e.target.closest('[data-uyari-eylem]');
  if (g) {
    const u = sonuc.uyarilar[Number(g.dataset.goster)];
    if (!u) return;
    parcaSec(u.parcalar[0]);
    vurguIdler = u.parcalar.slice(1);
    isaretleriGuncelle();
    if (dikey.matches && sayfaDurum !== 'kisa') sayfaUygula('kisa');
  }
  if (a) {
    const u = sonuc.uyarilar[Number(a.dataset.uyariEylem)];
    if (u?.eylem?.tur === 'blink-pin') programAyarla({ ...devre.program, pin: u.eylem.pin }, `Program artık ${u.eylem.pin}. pini yakıp söndürüyor`);
  }
});

// ================================================================== sahne araçları
const GORUNUM = { ustten: [0, 0.995, 0.1], onden: [0, 0.27, 0.96], yandan: [0.96, 0.3, 0.06] };
for (const b of $$('.gorunum button')) b.addEventListener('click', () => {
  const ad = b.dataset.gorunum, h = KAMERA.genel;
  S?.kameraGit(GORUNUM[ad] ? { ...h, yon: GORUNUM[ad], yaricap: h.yaricap * (ad === 'ustten' ? 1 : 1.08) } : h);
  for (const x of $$('.gorunum button')) x.setAttribute('aria-pressed', String(x === b));
});
$('#yakinlas')?.addEventListener('click', () => S?.yakinlas(0.8));
$('#uzaklas')?.addEventListener('click', () => S?.yakinlas(1.25));
$('#rontgen-dugme').addEventListener('click', (e) => {
  if (!bb) return;
  const acik = e.currentTarget.getAttribute('aria-pressed') !== 'true';
  e.currentTarget.setAttribute('aria-pressed', String(acik));
  bb.rontgen(acik); S.golgeYenile();
  duyur(acik ? 'Röntgen açık: breadboard\'un içindeki metal şeritler görünüyor' : 'Röntgen kapalı');
});
// Sahne üstü bant: yönerge, seçim kartı ya da seçici açıkken kısa ekranda durum hapı çekilir, seçici açıkken bant alttaki
// sayfanın üstüne çıkar (ozgur.css). Katmanların hidden özniteliği değişince sınıflar tek yerden işaretlenir.
const bantEl = $('.ust-bant');
function bantDurumu() {
  const ac = (id) => { const e = $(id); return Boolean(e) && !e.hidden; };
  bantEl.classList.toggle('dolu', ac('#yonerge') || ac('#secim-kart') || ac('#secici'));
  bantEl.classList.toggle('secici-acik', ac('#secici'));
}
if (bantEl && 'MutationObserver' in window) {
  const gozcu = new MutationObserver(bantDurumu);
  for (const id of ['#yonerge', '#secim-kart', '#secici']) { const e = $(id); if (e) gozcu.observe(e, { attributes: true, attributeFilter: ['hidden'] }); }
  bantDurumu();
}
// Sahne daralınca (yatay telefon, yan panel açık) alt araç çubuğu sığmazsa kısalır: bakış düğmeleri kısa adla,
// Röntgen yalnız ikonla (adı aria-label'da). Sahne genişliği panele ve ayarlara bağlı olduğu için ölçülerek karar verilir.
function aracSigdir() {
  const alan = $('.sahne-alani'), a = $('.sahne-arac');
  if (!alan || !a) return;
  alan.classList.remove('dar');
  if (a.scrollWidth > a.clientWidth + 1) alan.classList.add('dar');
}
if ('ResizeObserver' in window) new ResizeObserver(() => aracSigdir()).observe(sahneAlani);

// ================================================================== başlangıç
const TEST = new URLSearchParams(location.search).has('test');
paletKabloRengi();
programArayuz();
kodCiz();
uygula();
listeCiz(true);
butonBasDugme.hidden = !devre.parcalar.some((p) => p.tur === 'buton');
requestAnimationFrame(() => setTimeout(sahneBaslat, 20));
if (TEST) window.ozgurTest = {
  ekran(id) {
    if (!S) return null;
    if (id.startsWith('parca:')) { const v = parcaTepe(id.slice(6)); return v ? ekranKonum(v.sub(new Vector3(0, 3.5, 0))) : null; }
    const v = noktaV(id, id.startsWith('p:') ? BASLIK_UST : BB_UST);
    return v ? ekranKonum(v) : null;
  },
  adimPiksel: (id) => (S ? adimPiksel(noktaV(id)) : null),
  durum: () => JSON.parse(JSON.stringify({ parcalar: devre.parcalar, program: devre.program, calisiyor, sonuc, arac: arac && { tur: arac.tur, ilk: arac.ilk }, secici: !$('#secici').hidden, secili: seciliId, imlec: imlecId, kare: kareSayac, kalite: S?.kalite() })),
};
