// Önizleme kabuğu (yalnız geliştirme ve ölçüm; yayına girmez). Ortak sahne motorunu ve donanım sahnesini bağlar:
// ders ve adım seçici, görünüm ve sahne düğmeleri, keşif işaretleri, bilgi kartı. Ortak main.js'in yapacağı işin
// yalın bir eşi: ana oturum kolu kurarken aynı çağrı sırasını kullanabilir (adimUygula içindeki sıra).
// ?ders=<slug>&adim=<kimlik>&kesif ile açılır; ?olcum ile window.__donanim = { S, sahne, adimaGit, adim, ... } verilir.
import { Box3, Vector3 } from 'three';
import { sahneKur } from '../../src/sahne.js';
import { sahneyiKur } from './donanimSahne.js';
import { vurguYap } from './yardimci.js';
import { DERSLER, KAMERA, KONTROL, GORUNUM, GORUNUM_LISTE } from './adimlar.js';
import { KESIF, KATEGORI } from './kesif-veri.js';
import { dokuSure } from './doku.js';

const $ = (s, k = document) => k.querySelector(s);
const q = new URLSearchParams(location.search);
const html = document.documentElement;
const olcumModu = q.has('olcum');
const hatalar = [];
window.addEventListener('error', (e) => hatalar.push(`${e.message} (${e.filename}:${e.lineno})`));
window.addEventListener('unhandledrejection', (e) => hatalar.push(`söz: ${e.reason && e.reason.message ? e.reason.message : e.reason}`));

const dersAd = DERSLER[q.get('ders')] ? q.get('ders') : Object.keys(DERSLER)[0];
const ders = DERSLER[dersAd];
const adimKimlikleri = Object.keys(ders.adimlar);
let S = null, sahne = null, aktif = Math.max(0, adimKimlikleri.indexOf(q.get('adim') || 'merak')), vurgular = [], gorunumAd = 'egik';
let kurulumMs = null, ilkKareMs = null;

const alt = $('#pv-alt'), ust = $('#pv-ust'), sahneAlani = $('#sahne-alani');
const guvenliAlan = () => ({ ust: ust.offsetHeight + 8, alt: alt.offsetHeight + 14, sol: 8, sag: 8 });

// ------------------------------------------------------------------ yardımcılar
function kameraBul(ad) {
  const k = KAMERA[ad] || KAMERA.genel;
  return { kutu: new Box3(new Vector3(k.kutu[0], k.kutu[1], k.kutu[2]), new Vector3(k.kutu[3], k.kutu[4], k.kutu[5])), yon: k.yon };
}
function duyur(metin) { const el = $('#pv-duyuru'); if (el) el.textContent = metin; }

// ------------------------------------------------------------------ keşif işaretleri ve bilgi kartı
function isaretYap(id, no) {
  const kt = KESIF[id];
  if (!kt) return null;
  const kat = KATEGORI[kt.kat];
  const el = document.createElement('button');
  el.type = 'button'; el.className = 'kesif-isaret'; el.dataset.kat = kt.kat; el.dataset.id = id;
  const daire = document.createElement('span'); daire.className = 'ki-daire'; daire.style.setProperty('--k', kat.renk);
  if (kat.koyu) daire.style.setProperty('--ki', '#1b1426');
  const rakam = document.createElement('span'); rakam.className = 'ki-no'; rakam.textContent = String(no); rakam.setAttribute('aria-hidden', 'true');
  el.append(daire, rakam);
  el.setAttribute('aria-label', `${no}. keşif noktası, ${kat.ad} grubu`);
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    for (const x of document.querySelectorAll('.kesif-isaret[aria-current]')) x.removeAttribute('aria-current');
    el.setAttribute('aria-current', 'true');
    bilgiGoster(id);
  });
  return el;
}
function kesifIsaretleri() {
  const liste = [];
  let no = 0;
  for (const k of sahne.kesifNoktalari) {
    const el = isaretYap(k.id, no + 1);
    if (!el) continue;
    no++;
    liste.push({ el, nesne: k.nesne, yerel: k.yerel, oncelik: KESIF[k.id].oncelik });
  }
  S.isaretKoy(liste);
}
function bilgiGoster(id) {
  const kt = KESIF[id];
  if (!kt) return;
  $('#pv-bilgi-baslik').textContent = kt.ad;
  $('#pv-bilgi-metin').textContent = kt.kisa;
  $('#pv-bilgi-kat').textContent = KATEGORI[kt.kat].ad;
  $('#pv-bilgi').hidden = false;
  duyur(kt.ad);
}
function bilgiKapat() { $('#pv-bilgi').hidden = true; for (const x of document.querySelectorAll('.kesif-isaret[aria-current]')) x.removeAttribute('aria-current'); }
function kesifDegistir(ac) {
  html.dataset.kesif = ac ? 'acik' : '';
  $('#pv-kesif').setAttribute('aria-pressed', String(ac));
  S.guvenliYenile();
  if (ac) kesifIsaretleri(); else { S.isaretKoy([]); bilgiKapat(); }
}

// ------------------------------------------------------------------ adım
function kontrolleriKur(liste) {
  const kutu = $('#pv-kontrol');
  kutu.replaceChildren();
  for (const ad of liste) {
    const t = KONTROL[ad];
    if (!t) { hatalar.push(`kontrol tanımı yok: ${ad}`); continue; }
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'dugme'; b.dataset.eylem = ad; b.textContent = t.yazi;
    if (t.tur === 'basili') b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => {
      const sonuc = sahne.eylem(ad);
      if (t.tur === 'basili' && typeof sonuc === 'boolean') b.setAttribute('aria-pressed', String(sonuc));
      S.iste();
    });
    kutu.appendChild(b);
  }
}
function gorunumDugmeleri() {
  const kutu = $('#pv-gorunum');
  for (const [ad, uzun, kisa] of GORUNUM_LISTE) {
    const b = document.createElement('button');
    b.type = 'button'; b.dataset.gorunum = ad; b.setAttribute('aria-pressed', String(ad === 'egik'));
    b.innerHTML = `<span class="uzun">${uzun}</span><span class="kisa">${kisa}</span>`;
    b.addEventListener('click', () => gorunumSec(ad));
    kutu.appendChild(b);
  }
}
function gorunumSec(ad) {
  gorunumAd = ad;
  const a = ders.adimlar[adimKimlikleri[aktif]] || {};
  const h = kameraBul(a.kamera || 'genel');
  S.kameraGit(GORUNUM[ad] ? { ...h, yon: GORUNUM[ad] } : h);
  for (const b of document.querySelectorAll('#pv-gorunum button')) b.setAttribute('aria-pressed', String(b.dataset.gorunum === ad));
}
function adimUygula(id, ilk = false) {
  const a = ders.adimlar[id] || {};
  gorunumAd = 'egik';
  for (const b of document.querySelectorAll('#pv-gorunum button')) b.setAttribute('aria-pressed', String(b.dataset.gorunum === 'egik'));
  sahne.adimUygula(id, a);
  for (const v of vurgular) S.scene.remove(v);
  vurgular = (a.vurgu || []).map((ad) => { const al = sahne.alanlar[ad]; if (!al) { hatalar.push(`alan yok: ${ad}`); return null; } return vurguYap(S.scene, al); }).filter(Boolean);
  kontrolleriKur(a.kontrol || []);
  S.kameraGit(kameraBul(a.kamera || 'genel'), ilk);
  if (html.dataset.kesif === 'acik') kesifIsaretleri();
  $('#pv-adim').value = id;
  $('#pv-sira').textContent = `${aktif + 1} / ${adimKimlikleri.length}`;
  bilgiKapat();
  S.iste();
}
function adimaGit(id, ilk = false) {
  const i = adimKimlikleri.indexOf(id);
  if (i < 0) throw new Error('adım yok: ' + id);
  aktif = i;
  adimUygula(id, ilk);
}

// ------------------------------------------------------------------ başlat
function baslat() {
  const t0 = performance.now();
  S = sahneKur($('#sahne'), { arkaPlan: '#e9e5f1', olay: (ad, ...r) => { if (ad === 'duyur') duyur(r[0]); }, guvenliAlan });
  if (!S) { html.dataset.webgl = 'yok'; hatalar.push('WebGL yok'); return; }
  const t1 = performance.now();
  sahne = sahneyiKur(S, { olay: (ad, metin) => { if (ad === 'duyur') duyur(metin); } });
  kurulumMs = Math.round(performance.now() - t1);
  S.dokunmaDinle((v, nokta) => {
    if (!v) { bilgiKapat(); return; }
    if (sahne.dokunuldu(v, nokta)) { S.iste(); return; }
    if (v.kesif) bilgiGoster(v.kesif);
  });
  // seçiciler
  const dersSec = $('#pv-ders');
  if (dersSec) {
    for (const ad of Object.keys(DERSLER)) { const o = document.createElement('option'); o.value = ad; o.textContent = `${DERSLER[ad].no}. ${ad}`; if (ad === dersAd) o.selected = true; dersSec.appendChild(o); }
    dersSec.addEventListener('change', () => { const u = new URL(location.href); u.searchParams.set('ders', dersSec.value); u.searchParams.delete('adim'); location.href = u.toString(); });
  }
  const sec = $('#pv-adim');
  for (const id of adimKimlikleri) { const o = document.createElement('option'); o.value = id; o.textContent = id; sec.appendChild(o); }
  sec.addEventListener('change', () => adimaGit(sec.value));
  $('#pv-geri').addEventListener('click', () => adimaGit(adimKimlikleri[Math.max(0, aktif - 1)]));
  $('#pv-ileri').addEventListener('click', () => adimaGit(adimKimlikleri[Math.min(adimKimlikleri.length - 1, aktif + 1)]));
  $('#pv-kesif').addEventListener('click', () => kesifDegistir(html.dataset.kesif !== 'acik'));
  $('#pv-bilgi-kapat').addEventListener('click', bilgiKapat);
  gorunumDugmeleri();
  addEventListener('keydown', (e) => {
    if (e.target && /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') adimaGit(adimKimlikleri[Math.min(adimKimlikleri.length - 1, aktif + 1)]);
    if (e.key === 'ArrowLeft') adimaGit(adimKimlikleri[Math.max(0, aktif - 1)]);
  });
  if (q.has('kesif')) kesifDegistir(true);
  adimUygula(adimKimlikleri[aktif], true);
  // ilk gerçek kare: kurulumun bitişinden çizime kadar süre
  requestAnimationFrame(() => requestAnimationFrame(() => {
    ilkKareMs = Math.round(performance.now() - t0);
    sahneAlani.classList.add('hazir');
    window.__hazir = true;
  }));
  window.__donanim = { S, sahne, adimaGit, gorunumSec, kesifDegistir, adim: () => adimKimlikleri[aktif], adimlar: adimKimlikleri, hatalar, kameraBul,
    olcum: () => ({ kurulumMs, ilkKareMs, sahneKurMs: Math.round(t1 - t0), dokuSure, birlesme: sahne.birlesme }) };
  if (olcumModu) {
    const p = document.createElement('div'); p.className = 'olcum'; sahneAlani.appendChild(p);
    setInterval(() => {
      const i = S.renderer.info, k = S.kalite();
      p.textContent = `çağrı ${i.render.calls} · üçgen ${i.render.triangles} · doku ${i.memory.textures} · geo ${i.memory.geometries} · ölçek ${k.piksel}`;
    }, 500);
  }
}
if (!$('#sahne')) throw new Error('önizleme kabuğu eksik');
requestAnimationFrame(() => setTimeout(baslat, 20));
