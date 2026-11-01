// Kodla üretilen modeller: Arduino UNO uyumlu kart, yarım boy breadboard, LED, direnç, buton,
// atlama kablosu, akım noktaları. Birim milimetre, y yukarı, izleyici +z tarafında.
// Dış model ya da görsel dosyası yok: yazılar tuval (canvas) dokusuyla çizilir.
// Aynı malzemeyi kullanan sabit parçalar tek geometride birleştirilir (az çizim çağrısı).
import {
  Group, Mesh, BoxGeometry, CylinderGeometry, SphereGeometry, PlaneGeometry, CircleGeometry, LatheGeometry,
  TubeGeometry, CatmullRomCurve3, Vector2, Vector3, Matrix4, Quaternion, Euler, Color, CanvasTexture, SRGBColorSpace,
  MeshStandardMaterial, MeshBasicMaterial, PointLight, Sprite, SpriteMaterial, AdditiveBlending,
  InstancedMesh, EdgesGeometry, LineSegments, LineBasicMaterial, DoubleSide, Object3D,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

// ------------------------------------------------------------------ yerleşim
export const ARD = { x: 0, z: 32, w: 68.58, d: 53.34 };      // kart merkezi; dijital başlık uzak (−z) kenarda
export const BB = { x: 0, z: -38, w: 82.5, d: 54.5, h: 8.5 };  // breadboard merkezi; a-e satırları karta yakın
export const PCB_UST = 4.0;                 // kartın üst yüzü (ayaklar 2,4 mm)
export const BASLIK_UST = PCB_UST + 8.5;     // dişi pin başlığının üstü
export const BB_UST = BB.h;
const ADIM = 2.54;

const ardX = (bx) => ARD.x - ARD.w / 2 + bx;
const ardZ = (bz) => ARD.z - ARD.d / 2 + bz;
export const ardNokta = (bx, bz, y = PCB_UST) => new Vector3(ardX(bx), y, ardZ(bz));

// Pin konumları (kartın sol üst köşesinden mm; UNO R3 çizimindeki 0,1" ızgaraya göre yaklaşık)
const DIJITAL = { SCL: 21.336, SDA: 23.876, AREF: 26.416, 'GND-D': 28.956, 13: 31.496, 12: 34.036, 11: 36.576, 10: 39.116, 9: 41.656, 8: 44.196,
  7: 48.26, 6: 50.8, 5: 53.34, 4: 55.88, 3: 58.42, 2: 60.96, 1: 63.5, 0: 66.04 };
const GUC = { NC: 26.416, IOREF: 28.956, RESET: 31.496, '3.3V': 34.036, '5V': 36.576, GND1: 39.116, GND2: 41.656, VIN: 44.196 };
const ANALOG = { A0: 49.276, A1: 51.816, A2: 54.356, A3: 56.896, A4: 59.436, A5: 61.976 };
const DIJ_Z = 2.54, ALT_Z = 50.8;

export function pinNokta(ad) {
  const k = String(ad);
  if (k in DIJITAL) return ardNokta(DIJITAL[k], DIJ_Z, BASLIK_UST);
  if (k in GUC) return ardNokta(GUC[k], ALT_Z, BASLIK_UST);
  if (k in ANALOG) return ardNokta(ANALOG[k], ALT_Z, BASLIK_UST);
  throw new Error('bilinmeyen pin ' + ad);
}
// Pinin keşif kimliği ve kartta yazan adı (NC bağlı değildir: kimliği yok)
const PWM = ['3', '5', '6', '9', '10', '11'];
export function pinKesif(ad) {
  const k = String(ad);
  if (k === '13') return 'pin-13';
  if (k === '0' || k === '1') return 'pin-rx-tx';
  if (PWM.includes(k)) return 'pin-pwm';
  if (/^\d+$/.test(k)) return 'pin-dijital';
  if (k.startsWith('GND')) return 'pin-gnd';
  return { '5V': 'pin-5v', '3.3V': 'pin-3v3', VIN: 'pin-vin', AREF: 'pin-aref', IOREF: 'pin-ioref', RESET: 'pin-reset', SDA: 'pin-sda-scl', SCL: 'pin-sda-scl' }[k]
    || (/^A\d$/.test(k) ? 'pin-analog' : null);
}
export function pinAdi(ad) {
  const k = String(ad);
  if (k === '0') return '0. pin (RX)';
  if (k === '1') return '1. pin (TX)';
  if (PWM.includes(k)) return `${k}. pin (~${k})`;
  if (/^\d+$/.test(k)) return `${k}. pin`;
  if (k.startsWith('GND')) return 'GND';
  return { '3.3V': '3,3V', VIN: 'Vin' }[k] || k;
}

// Dokunma vekili: görünmez kutu. Yalnız konum ve yarı boyut taşır; seçimde dokunulan yüzey noktasını içeren
// en küçük vekil kazanır (sahne.js). veri: { kesif, ozel, parca, minAdim, minPx, ... }
export function vekil(veri, w, h, d, x = 0, y = 0, z = 0) {
  const o = new Object3D(); o.position.set(x, y, z);
  o.userData = { ...veri, yari: [w / 2, h / 2, d / 2], hacim: veri.hacim ?? w * h * d };
  o.updateMatrixWorld();
  return o;
}

const SATIR = { a: 13.97, b: 11.43, c: 8.89, d: 6.35, e: 3.81, f: -3.81, g: -6.35, h: -8.89, i: -11.43, j: -13.97 };
const sutunX = (c) => BB.x - 36.83 + (c - 1) * ADIM;
export const delikNokta = (sutun, satir, y = BB_UST) => new Vector3(sutunX(sutun), y, BB.z + SATIR[satir]);
// Raylar: her iki yanda iç ray eksi (mavi), dış ray artı (kırmızı). 25 delik, beşli gruplar.
const RAY_Z = { 'yakin-': 19.05, 'yakin+': 21.59, 'uzak-': -19.05, 'uzak+': -21.59 };
const RAY_SUTUN = [2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30];
export function rayNokta(taraf, isaret, sutun, y = BB_UST) {
  const c = RAY_SUTUN.reduce((en, s) => (Math.abs(s - sutun) < Math.abs(en - sutun) ? s : en), RAY_SUTUN[0]);
  return new Vector3(sutunX(c), y, BB.z + RAY_Z[taraf + isaret]);
}

// ------------------------------------------------------------------ yardımcılar
function kutu(w, h, d, x, y, z) { const g = new BoxGeometry(w, h, d); g.translate(x, y, z); return g; }
function yuvarlak(w, h, d, r, x, y, z) { const g = new RoundedBoxGeometry(w, h, d, 2, r); g.translate(x, y, z); return g; }
// Gölge: dolu malzemeler gölge düşürür ve alır; ışıksız (Basic) yüzeyler, sprite'lar ve dokunma kutuları dışarıda.
export function golgeAyarla(kok) { kok.traverse((o) => { if (o.isMesh && !o.isInstancedMesh) { const isikli = !o.material.isMeshBasicMaterial && o.material.visible !== false; o.castShadow = isikli; o.receiveShadow = isikli; } }); }
function silindir(r, h, x, y, z, seg = 16) { const g = new CylinderGeometry(r, r, h, seg); g.translate(x, y, z); return g; }
// Birleştirme için hepsi indekssiz biçime çevrilir (yuvarlatılmış kutu indekssiz gelir).
function birlestir(liste, malzeme) { const m = new Mesh(mergeGeometries(liste.map((g) => (g.index ? g.toNonIndexed() : g)), false), malzeme); m.matrixAutoUpdate = false; return m; }
function tuval(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
let ANISO = 1;
function doku(c) { const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = ANISO; return t; }

const parlamaDokusu = (() => {
  let t = null;
  return () => {
    if (t) return t;
    const [c, x] = tuval(64, 64);
    const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,0.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    t = new CanvasTexture(c); return t;
  };
})();

// ------------------------------------------------------------------ malzemeler (paylaşılan)
const M = {};
function malzemeler() {
  if (M.hazir) return M;
  Object.assign(M, {
    hazir: true,
    pcbKenar: new MeshStandardMaterial({ color: 0x0a5f69, roughness: 0.45 }),
    siyah: new MeshStandardMaterial({ color: 0x26262c, roughness: 0.55 }),
    koyu: new MeshBasicMaterial({ color: 0x0c0c0f }),
    metal: new MeshStandardMaterial({ color: 0xd5d8de, metalness: 1, roughness: 0.28 }),
    altin: new MeshStandardMaterial({ color: 0xe2b95c, metalness: 1, roughness: 0.32 }),
    cip: new MeshStandardMaterial({ color: 0x1b1b20, roughness: 0.72 }),
    ayak: new MeshStandardMaterial({ color: 0x3a3a40, roughness: 0.9 }),
    bbYan: new MeshStandardMaterial({ color: 0xeeebe3, roughness: 0.78 }),
    bbDelik: new MeshBasicMaterial({ color: 0x34343a }),
    serit: new MeshStandardMaterial({ color: 0xc9ccd2, metalness: 0.9, roughness: 0.35 }),
    vurgu: new MeshBasicMaterial({ color: 0x7c4dff, transparent: true, opacity: 0.11, depthWrite: false }),
    vurguCizgi: new LineBasicMaterial({ color: 0x6a3df0 }),
    secim: new MeshBasicMaterial({ color: 0x16a34a, transparent: true, opacity: 0.85, depthWrite: false }),
    gorunmez: new MeshBasicMaterial({ visible: false }),
  });
  return M;
}

// ------------------------------------------------------------------ Arduino kartı dokusu
function kartDokusu() {
  const W = 2048, H = Math.round((2048 * ARD.d) / ARD.w), s = W / ARD.w;
  const [c, x] = tuval(W, H);
  x.fillStyle = '#0d7783'; x.fillRect(0, 0, W, H);
  // ince yollar (iz)
  x.strokeStyle = 'rgba(160,235,235,0.16)'; x.lineWidth = 0.32 * s; x.lineCap = 'round';
  const yol = (pts) => { x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a * s, b * s) : x.moveTo(a * s, b * s))); x.stroke(); };
  for (let i = 0; i < 14; i++) { const px = 31.5 + i * 2.54 > 46 ? 33 + i * 2.54 : 31.5 + i * 2.54; yol([[px, 4.5], [px, 9 + (i % 4)], [30 + i * 2.2, 30], [30 + i * 2.2, 33]]); }
  for (let i = 0; i < 6; i++) yol([[49.3 + i * 2.54, 48.5], [49.3 + i * 2.54, 44], [46 + i * 2.6, 40.6]]);
  yol([[12, 15], [18, 15], [20, 17]]); yol([[12, 18], [17, 22], [21, 24]]); yol([[8, 44], [14, 44], [16, 47]]);
  yol([[36.5, 48.5], [36.5, 44], [24, 40], [14, 40]]); yol([[39, 48.5], [39, 45], [28, 45]]);
  // ipek baskı
  const ipek = '#f2f7f7';
  x.strokeStyle = ipek; x.fillStyle = ipek; x.lineWidth = 0.22 * s;
  const kutuCiz = (x1, z1, x2, z2) => x.strokeRect(x1 * s, z1 * s, (x2 - x1) * s, (z2 - z1) * s);
  kutuCiz(20.0, 1.2, 45.5, 3.9); kutuCiz(47.0, 1.2, 67.3, 3.9); kutuCiz(25.1, 49.5, 45.5, 52.1); kutuCiz(48.0, 49.5, 63.3, 52.1);
  const yaz = (t, bx, bz, boy, { don = 0, hiza = 'center', kalin = true } = {}) => {
    x.save(); x.translate(bx * s, bz * s); x.rotate(don);
    x.font = `${kalin ? 700 : 500} ${boy * s}px "DejaVu Sans", Arial, sans-serif`;
    x.textAlign = hiza; x.textBaseline = 'middle'; x.fillText(t, 0, 0); x.restore();
  };
  const dikey = -Math.PI / 2;
  const dij = { SCL: 'SCL', SDA: 'SDA', AREF: 'AREF', 'GND-D': 'GND', 13: '13', 12: '12', 11: '~11', 10: '~10', 9: '~9', 8: '8', 7: '7', 6: '~6', 5: '~5', 4: '4', 3: '~3', 2: '2', 1: 'TX 1', 0: 'RX 0' };
  for (const [k, t] of Object.entries(dij)) yaz(t, DIJITAL[k], 4.4, 1.25, { don: dikey, hiza: 'right' });
  yaz('DIGITAL (PWM~)', 46, 10.6, 1.5);
  const gucE = { IOREF: 'IOREF', RESET: 'RESET', '3.3V': '3.3V', '5V': '5V', GND1: 'GND', GND2: 'GND', VIN: 'Vin' };
  for (const [k, t] of Object.entries(gucE)) yaz(t, GUC[k], 48.3, 1.2, { don: dikey, hiza: 'left' });
  for (const [k, v] of Object.entries(ANALOG)) yaz(k, v, 48.3, 1.25, { don: dikey, hiza: 'left' });
  yaz('POWER', 35.3, 42.0, 1.5); yaz('ANALOG IN', 55.6, 42.0, 1.5);
  yaz('L', 26.6, 10.6, 1.2); yaz('TX', 25.9, 13.3, 1.0); yaz('RX', 25.9, 15.4, 1.0); yaz('ON', 64.4, 10.6, 1.2);
  yaz('RESET', 7.4, 10.3, 1.1); yaz('ICSP', 64.9, 21.9, 1.1);
  // montaj delikleri
  for (const [hx, hz] of [[13.97, 50.8], [15.24, 2.54], [66.04, 45.72], [66.04, 17.78]]) {
    x.fillStyle = '#d9b75f'; x.beginPath(); x.arc(hx * s, hz * s, 1.75 * s, 0, Math.PI * 2); x.fill();
    x.fillStyle = '#16191b'; x.beginPath(); x.arc(hx * s, hz * s, 1.15 * s, 0, Math.PI * 2); x.fill();
  }
  return doku(c);
}

function cipDokusu() {
  const [c, x] = tuval(512, 108);
  x.fillStyle = '#1c1c21'; x.fillRect(0, 0, 512, 108);
  x.fillStyle = '#9da2aa'; x.font = '600 34px "DejaVu Sans", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText('ATMEGA328P', 270, 56);
  x.beginPath(); x.arc(22, 54, 12, -Math.PI / 2, Math.PI / 2); x.fillStyle = '#0e0e11'; x.fill();
  return doku(c);
}

// ------------------------------------------------------------------ Arduino kartı
export function kartYap(hedefler) {
  malzemeler();
  const g = new Group(); g.name = 'kart';
  const pcbUst = new MeshStandardMaterial({ map: kartDokusu(), roughness: 0.4 });
  const pcb = new Mesh(new RoundedBoxGeometry(ARD.w, 1.6, ARD.d, 2, 0.5), [M.pcbKenar, M.pcbKenar, pcbUst, M.pcbKenar, M.pcbKenar, M.pcbKenar]);
  pcb.position.set(ARD.x, PCB_UST - 0.8, ARD.z);
  g.add(pcb);

  const siyah = [], koyu = [], metal = [], altin = [], ayak = [];
  for (const [hx, hz] of [[13.97, 50.8], [15.24, 2.54], [66.04, 45.72], [66.04, 17.78]]) { const p = ardNokta(hx, hz, 1.2); ayak.push(silindir(1.6, 2.4, p.x, p.y, p.z, 10)); }
  // dişi pin başlıkları: gövde + üstte delik kareleri
  const baslik = (adlar, tablo, bz) => {
    const xs = adlar.map((a) => tablo[a]);
    const x1 = Math.min(...xs) - 1.27, x2 = Math.max(...xs) + 1.27;
    const p = ardNokta((x1 + x2) / 2, bz, PCB_UST + 4.25);
    siyah.push(yuvarlak(x2 - x1, 8.5, 2.54, 0.35, p.x, p.y, p.z));
    for (const v of xs) { const d = ardNokta(v, bz, BASLIK_UST + 0.02); koyu.push(kutu(1.0, 0.04, 1.0, d.x, d.y, d.z)); }
    return { x1, x2, bz };
  };
  const dijA = baslik(['SCL', 'SDA', 'AREF', 'GND-D', '13', '12', '11', '10', '9', '8'], DIJITAL, DIJ_Z);
  const dijB = baslik(['7', '6', '5', '4', '3', '2', '1', '0'], DIJITAL, DIJ_Z);
  const guc = baslik(['NC', 'IOREF', 'RESET', '3.3V', '5V', 'GND1', 'GND2', 'VIN'], GUC, ALT_Z);
  const ana = baslik(['A0', 'A1', 'A2', 'A3', 'A4', 'A5'], ANALOG, ALT_Z);

  // USB-B girişi (sol kenardan taşar) ve güç girişi
  let p = ardNokta(1.65, 15.24, PCB_UST + 5.45); metal.push(yuvarlak(16, 10.9, 12, 0.6, p.x, p.y, p.z));
  p = ardNokta(-6.37, 15.24, PCB_UST + 5.3); koyu.push(kutu(0.04, 7.2, 8.2, p.x, p.y, p.z));
  p = ardNokta(5.2, 44.9, PCB_UST + 5.5); siyah.push(yuvarlak(14, 11, 9, 1, p.x, p.y, p.z));
  const jakDelik = new CircleGeometry(3.1, 20); jakDelik.rotateY(-Math.PI / 2); p = ardNokta(-1.83, 44.9, PCB_UST + 5.8); jakDelik.translate(p.x, p.y, p.z); koyu.push(jakDelik.toNonIndexed ? jakDelik : jakDelik);
  // mikrodenetleyici (DIP-28) yuvası, gövde ve bacaklar
  p = ardNokta(44.5, 36.8, PCB_UST + 1.3); siyah.push(yuvarlak(37.5, 2.6, 9.2, 0.4, p.x, p.y, p.z));
  for (let i = 0; i < 14; i++) for (const yan of [-1, 1]) { const q = ardNokta(44.5 - 16.51 + i * 2.54, 36.8 + yan * 3.85, PCB_UST + 3.2); metal.push(kutu(0.55, 1.6, 0.35, q.x, q.y, q.z)); }
  const cipGovde = new Mesh(new RoundedBoxGeometry(35.56, 3.3, 7.4, 2, 0.4), [M.cip, M.cip, new MeshStandardMaterial({ map: cipDokusu(), roughness: 0.72 }), M.cip, M.cip, M.cip]);
  cipGovde.position.copy(ardNokta(44.5, 36.8, PCB_UST + 2.6 + 1.65));
  g.add(cipGovde);
  // USB çipi, kristal, regülatör, kondansatörler, reset düğmesi, ICSP
  p = ardNokta(20, 17.5, PCB_UST + 0.45); siyah.push(kutu(5, 0.9, 5, p.x, p.y, p.z));
  p = ardNokta(21, 27, PCB_UST + 1.8); metal.push(kutu(10.5, 3.5, 4.4, p.x, p.y, p.z));
  p = ardNokta(15, 47.5, PCB_UST + 0.8); siyah.push(kutu(6.5, 1.6, 3.5, p.x, p.y, p.z));
  p = ardNokta(15, 44.6, PCB_UST + 0.2); metal.push(kutu(3.2, 0.3, 3, p.x, p.y, p.z));
  for (const [cx, cz] of [[13, 31.5], [19.5, 37.5]]) { const q = ardNokta(cx, cz, PCB_UST + 2.75); siyah.push(silindir(3.15, 5.5, q.x, q.y, q.z, 18)); metal.push(silindir(3.0, 0.2, q.x, PCB_UST + 5.55, q.z, 18)); }
  p = ardNokta(7.4, 5.2, PCB_UST + 1.6); siyah.push(yuvarlak(6, 3.2, 6, 0.5, p.x, p.y, p.z));
  metal.push(kutu(6.1, 0.3, 6.1, p.x, PCB_UST + 3.35, p.z));
  const resetBas = silindir(1.7, 1.3, p.x, PCB_UST + 4.1, p.z, 18);
  p = ardNokta(64.87, 26.67, PCB_UST + 1.25); siyah.push(kutu(5.08, 2.5, 7.62, p.x, p.y, p.z));
  for (const ix of [63.6, 66.14]) for (const iz of [24.13, 26.67, 29.21]) { const q = ardNokta(ix, iz, PCB_UST + 5.5); altin.push(kutu(0.64, 6, 0.64, q.x, q.y, q.z)); }

  g.add(birlestir(ayak, M.ayak), birlestir(siyah, M.siyah), birlestir(koyu, M.koyu), birlestir(metal, M.metal), birlestir(altin, M.altin));
  const resetM = new Mesh(resetBas, new MeshStandardMaterial({ color: 0xd8c9a0, roughness: 0.5 })); g.add(resetM);

  // kart üstü LED'ler (L, TX, RX, ON): L, 13. pinle birlikte yanar
  const kucukLed = (bx, bz, renk) => {
    const m = new MeshStandardMaterial({ color: new Color(renk).multiplyScalar(0.45), emissive: renk, emissiveIntensity: 0, roughness: 0.3 });
    const mesh = new Mesh(new BoxGeometry(1.6, 0.6, 0.85), m); mesh.position.copy(ardNokta(bx, bz, PCB_UST + 0.3)); g.add(mesh);
    const isik = new Sprite(new SpriteMaterial({ map: parlamaDokusu(), color: renk, blending: AdditiveBlending, depthWrite: false, transparent: true }));
    isik.scale.set(6, 6, 1); isik.position.copy(mesh.position).add(new Vector3(0, 0.8, 0)); isik.visible = false; g.add(isik);
    return (acik) => { m.emissiveIntensity = acik ? 1 : 0; m.color.set(acik ? renk : new Color(renk).multiplyScalar(0.45)); isik.visible = acik; };
  };
  const ledL = kucukLed(28.5, 10.6, 0xffa726), ledOn = kucukLed(61.5, 10.6, 0x43e07a);
  kucukLed(28.5, 13.3, 0xffd54f); kucukLed(28.5, 15.4, 0xffd54f);

  golgeAyarla(g);
  // vurgu kutuları (adımlarda mor çerçeve) ve etiket noktaları
  const alan = (bx, bz, y, w, h, d) => { const q = ardNokta(bx, bz, y); return [q.x, q.y, q.z, w, h, d]; };
  const alanlar = {
    kart: [ARD.x, 7, ARD.z, ARD.w, 14, ARD.d],
    usb: alan(1.65, 15.24, PCB_UST + 5.45, 17, 11.6, 12.8),
    'guc-girisi': alan(5.2, 44.9, PCB_UST + 5.5, 15, 11.8, 9.8),
    mikrodenetleyici: alan(44.5, 36.8, PCB_UST + 3, 38.5, 6.2, 10.2),
    'dijital-pinler': alan((dijA.x1 + dijB.x2) / 2, DIJ_Z, PCB_UST + 4.3, dijB.x2 - dijA.x1 + 1.2, 9.4, 3.6),
    'analog-pinler': alan((ana.x1 + ana.x2) / 2, ALT_Z, PCB_UST + 4.3, ana.x2 - ana.x1 + 1.2, 9.4, 3.6),
    'guc-pinleri': alan((guc.x1 + guc.x2) / 2, ALT_Z, PCB_UST + 4.3, guc.x2 - guc.x1 + 1.2, 9.4, 3.6),
    reset: alan(7.4, 5.2, PCB_UST + 2.4, 7, 5, 7),
  };
  // Dokunma vekilleri (Ahmet 01.11: "karttaki her kısma tıklayınca ayrı ayrı anlatılsın"). Kartın tamamını
  // kaplayan 'kart' vekili en büyüğüdür; dokunulan noktayı içeren en küçük vekil seçilir.
  const vekiller = [];
  const ekle = (veri, a) => { const [x, y, z, w, h, d] = a; const v = vekil({ parca: veri.kesif, ...veri }, w, h, d, x, y, z); vekiller.push(v); hedefler.push(v); };
  ekle({ kesif: 'kart', parca: 'kart' }, alanlar.kart);
  for (const ad of ['usb', 'guc-girisi', 'mikrodenetleyici', 'dijital-pinler', 'analog-pinler', 'guc-pinleri', 'reset']) ekle({ kesif: ad }, alanlar[ad]);
  ekle({ kesif: 'usb-cipi' }, alan(20, 17.5, PCB_UST + 1.1, 7, 2.6, 7));
  ekle({ kesif: 'kristal' }, alan(21, 27, PCB_UST + 1.9, 11.5, 4.2, 5.4));
  ekle({ kesif: 'regulator' }, alan(15, 46.2, PCB_UST + 1.1, 7.4, 2.6, 6.8));
  for (const [cx, cz] of [[13, 31.5], [19.5, 37.5]]) ekle({ kesif: 'kondansator' }, alan(cx, cz, PCB_UST + 2.9, 7.2, 6.2, 7.2));
  ekle({ kesif: 'icsp' }, alan(64.87, 26.67, PCB_UST + 4.4, 6.4, 9.2, 9));
  ekle({ kesif: 'led-l' }, alan(27.6, 10.6, PCB_UST + 0.8, 4.6, 1.8, 2.3));
  ekle({ kesif: 'led-txrx' }, alan(27.3, 14.35, PCB_UST + 0.8, 4.8, 1.8, 4.4));
  ekle({ kesif: 'led-on' }, alan(62.9, 10.6, PCB_UST + 0.8, 5.4, 1.8, 2.3));
  for (const [hx, hz] of [[13.97, 50.8], [15.24, 2.54], [66.04, 45.72], [66.04, 17.78]]) ekle({ kesif: 'montaj-deligi' }, alan(hx, hz, PCB_UST + 0.3, 4.4, 1.6, 4.4));
  // Pinler: deliğin 2-3 katı kutu, başlığın yanından da dokunulabilsin diye kart yüzeyine kadar iner.
  // Ekranda pin aralığı minPx'ten küçükken pin tek tek seçilmez, başlığın tamamı seçilir (yakınlaşınca pin pin).
  const pinler = [];
  for (const [tablo, bz] of [[DIJITAL, DIJ_Z], [GUC, ALT_Z], [ANALOG, ALT_Z]]) {
    for (const [ad, bx] of Object.entries(tablo)) {
      const kesif = pinKesif(ad); if (!kesif) continue;
      const boy = BASLIK_UST + 1.2 - PCB_UST;
      ekle({ kesif, parca: 'pin', pin: ad, ozel: pinAdi(ad), minAdim: ADIM, minPx: 12 }, alan(bx, bz, PCB_UST + boy / 2, 2.5, boy, 2.6));
      pinler.push({ ad, kesif, ozel: pinAdi(ad), nokta: ardNokta(bx, bz, BASLIK_UST + 0.6) });
    }
  }
  // Keşif işaretlerinin yeri: grup işaretleri kartın üstündeki yazının yanında (pinlerin üstünü örtmesin)
  const ust = (bx, bz, y) => ardNokta(bx, bz, y);
  const kesifNoktalari = [
    { id: 'usb', nokta: ust(1.65, 15.24, PCB_UST + 12) },
    { id: 'guc-girisi', nokta: ust(5.2, 44.9, PCB_UST + 12.2) },
    { id: 'mikrodenetleyici', nokta: ust(44.5, 36.8, PCB_UST + 6.6) },
    { id: 'usb-cipi', nokta: ust(20, 17.5, PCB_UST + 1.6) },
    { id: 'kristal', nokta: ust(21, 27, PCB_UST + 4.3) },
    { id: 'regulator', nokta: ust(15, 46.5, PCB_UST + 2.4) },
    { id: 'kondansator', nokta: ust(13, 31.5, PCB_UST + 6.2) },
    { id: 'reset', nokta: ust(7.4, 5.2, PCB_UST + 5.4) },
    { id: 'icsp', nokta: ust(64.87, 26.67, PCB_UST + 9.4) },
    { id: 'led-l', nokta: ust(28.5, 10.6, PCB_UST + 1) },
    { id: 'led-txrx', nokta: ust(28.5, 14.35, PCB_UST + 1) },
    { id: 'led-on', nokta: ust(61.5, 10.6, PCB_UST + 1) },
    { id: 'dijital-pinler', nokta: ust(46, 10.6, PCB_UST + 0.8) },
    { id: 'analog-pinler', nokta: ust(55.6, 42, PCB_UST + 0.8) },
    { id: 'guc-pinleri', nokta: ust(35.3, 42, PCB_UST + 0.8) },
    { id: 'montaj-deligi', nokta: ust(66.04, 17.78, PCB_UST + 0.8) },
  ];
  return { grup: g, alanlar, ledL, ledOn, vekiller, pinler, kesifNoktalari };
}

// ------------------------------------------------------------------ breadboard
function bbDokusu() {
  const W = 2048, H = Math.round((2048 * BB.d) / BB.w), s = W / BB.w;
  const [c, x] = tuval(W, H);
  const X = (lx) => (lx + BB.w / 2) * s, Z = (lz) => (lz + BB.d / 2) * s;
  x.fillStyle = '#f4f2ec'; x.fillRect(0, 0, W, H);
  x.fillStyle = '#dcd8cf'; x.fillRect(0, Z(-1.5), W, 3 * s);
  x.fillStyle = '#cfcac0'; x.fillRect(0, Z(-0.35), W, 0.7 * s);
  for (const yan of [1, -1]) {
    x.fillStyle = '#d23b3b'; x.fillRect(X(-37), Z(yan * 23.6) - 0.3 * s, X(37) - X(-37), 0.6 * s);
    x.fillStyle = '#2f62c9'; x.fillRect(X(-37), Z(yan * 16.9) - 0.3 * s, X(37) - X(-37), 0.6 * s);
  }
  x.font = `700 ${2.1 * s}px "DejaVu Sans", Arial, sans-serif`; x.textAlign = 'center'; x.textBaseline = 'middle';
  for (const yan of [1, -1]) for (const ux of [-39.4, 39.4]) {
    x.fillStyle = '#d23b3b'; x.fillText('+', X(ux), Z(yan * RAY_Z['yakin+']));
    x.fillStyle = '#2f62c9'; x.fillText('−', X(ux), Z(yan * RAY_Z['yakin-']));
  }
  x.fillStyle = '#8a8478'; x.font = `600 ${1.45 * s}px "DejaVu Sans", Arial, sans-serif`;
  for (const [r, z] of Object.entries(SATIR)) for (const ux of [-39.3, 39.3]) x.fillText(r, X(ux), Z(z));
  for (const n of [1, 5, 10, 15, 20, 25, 30]) for (const yan of [1, -1]) x.fillText(String(n), X(-36.83 + (n - 1) * ADIM), Z(yan * 15.45));
  return doku(c);
}

export function breadboardYap(hedefler) {
  malzemeler();
  const g = new Group(); g.name = 'breadboard';
  const ust = new MeshStandardMaterial({ map: bbDokusu(), roughness: 0.78 });
  const yan = M.bbYan.clone();
  const govdeMat = [yan, yan, ust, yan, yan, yan];
  const govde = new Mesh(new RoundedBoxGeometry(BB.w, BB.h, BB.d, 3, 1.1), govdeMat);
  govde.position.set(BB.x, BB.h / 2, BB.z); g.add(govde);
  // delikler (500 kare, tek geometri)
  const delikler = [];
  const kare = (v) => delikler.push(kutu(1.15, 0.04, 1.15, v.x, BB_UST + 0.02, v.z));
  for (let cc = 1; cc <= 30; cc++) for (const r of Object.keys(SATIR)) kare(delikNokta(cc, r));
  for (const k of Object.keys(RAY_Z)) for (const cc of RAY_SUTUN) kare(new Vector3(sutunX(cc), 0, BB.z + RAY_Z[k]));
  g.add(birlestir(delikler, M.bbDelik));
  // içteki metal şeritler (röntgen görünümü)
  const seritler = [];
  for (let cc = 1; cc <= 30; cc++) for (const yan of [1, -1]) seritler.push(kutu(1.5, 1.1, 11.4, sutunX(cc), BB_UST - 2.3, BB.z + yan * 8.89));
  for (const z of Object.values(RAY_Z)) seritler.push(kutu(sutunX(30) - sutunX(2) + 1.6, 1.1, 1.5, BB.x, BB_UST - 2.3, BB.z + z));
  const serit = birlestir(seritler, M.serit); serit.visible = false; g.add(serit);
  golgeAyarla(g);
  // seçili bağlantı grubu: en çok 25 yeşil kare (örnekli çizim, tek çağrı)
  const secimGeo = new BoxGeometry(1.7, 0.06, 1.7);
  const secim = new InstancedMesh(secimGeo, M.secim, 25); secim.count = 0; secim.frustumCulled = false; g.add(secim);
  const mat4 = new Matrix4();
  function grupGoster(liste) {
    secim.count = liste.length;
    liste.forEach((v, i) => { mat4.makeTranslation(v.x, BB_UST + 0.06, v.z); secim.setMatrixAt(i, mat4); });
    secim.instanceMatrix.needsUpdate = true;
  }
  // dokunulan noktadan delik ve bağlantı grubunu bul
  function grupBul(nokta) {
    const lx = nokta.x - BB.x, lz = nokta.z - BB.z;
    const cc = Math.round((lx + 36.83) / ADIM) + 1;
    let enYakin = null, enKucuk = 1.6;
    for (const [r, z] of Object.entries(SATIR)) { const d = Math.hypot(lx - (-36.83 + (cc - 1) * ADIM), lz - z); if (cc >= 1 && cc <= 30 && d < enKucuk) { enKucuk = d; enYakin = { tur: 'sutun', sutun: cc, satir: r }; } }
    for (const [k, z] of Object.entries(RAY_Z)) if (Math.abs(lz - z) < 1.3 && RAY_SUTUN.some((s) => Math.abs(lx - (-36.83 + (s - 1) * ADIM)) < 1.3)) enYakin = { tur: 'ray', ray: k };
    if (!enYakin) return null;
    if (enYakin.tur === 'sutun') {
      const yari = 'abcde'.includes(enYakin.satir) ? 'abcde' : 'fghij';
      return { ...enYakin, delikler: [...yari].map((r) => delikNokta(enYakin.sutun, r)), ad: `${enYakin.sutun}. sütun, ${yari[0]}-${yari[4]} satırları` };
    }
    return { ...enYakin, delikler: RAY_SUTUN.map((s) => new Vector3(sutunX(s), 0, BB.z + RAY_Z[enYakin.ray])), ad: enYakin.ray.endsWith('+') ? 'Artı (+) rayı' : 'Eksi (−) rayı' };
  }

  const alanlar = {
    breadboard: [BB.x, BB.h / 2, BB.z, BB.w, BB.h + 1, BB.d],
    'bb-yakin-raylar': [BB.x, BB_UST, BB.z + 20.32, 76, 1.4, 5.6],
    'bb-satirlar': [BB.x, BB_UST, BB.z, 77, 1.4, 31],
    'bb-kanal': [BB.x, BB_UST, BB.z, 80, 1.2, 3.2],
  };
  // Dokunma vekilleri: gövdenin tamamı, 60 şerit (5'li delik grubu), 4 ray, orta kanal, koordinat yazıları.
  // Yüzeydekiler ince (yüzeyin hemen altından hemen üstüne): üstüne takılı parçaların yan yüzünü yutmasın.
  const vekiller = [];
  const ekle = (veri, w, h, d, x, y, z) => { const v = vekil({ parca: veri.kesif, bb: true, ...veri }, w, h, d, x, y, z); vekiller.push(v); hedefler.push(v); };
  const YUZ = BB_UST - 0.1, YUZ_H = 0.8; // yüzey vekilinin merkezi ve yüksekliği
  ekle({ kesif: 'breadboard' }, BB.w, BB.h + 1, BB.d, BB.x, BB.h / 2, BB.z);
  for (let cc = 1; cc <= 30; cc++) for (const [yan, satirlar] of [[1, 'a-e'], [-1, 'f-j']]) {
    ekle({ kesif: 'serit', ozel: `${cc}. sütun, ${satirlar} satırları`, minAdim: ADIM, minPx: 12 }, 2.5, YUZ_H, 12.7, sutunX(cc), YUZ, BB.z + yan * 8.89);
  }
  for (const yan of [1, -1]) {
    const taraf = yan > 0 ? 'karta yakın taraf' : 'uzak taraf';
    ekle({ kesif: 'arti-ray', ozel: taraf, minAdim: ADIM, minPx: 8 }, 81.2, YUZ_H, 4.08, BB.x, YUZ, BB.z + yan * 22.36);
    ekle({ kesif: 'eksi-ray', ozel: taraf, minAdim: ADIM, minPx: 8 }, 81.2, YUZ_H, 4.02, BB.x, YUZ, BB.z + yan * 18.31);
    ekle({ kesif: 'koordinat', ozel: 'sütun numaraları', minAdim: 1.06, minPx: 6 }, 76.2, YUZ_H, 1.06, BB.x, YUZ, BB.z + yan * 15.77);
    ekle({ kesif: 'koordinat', ozel: 'satır harfleri', minAdim: ADIM, minPx: 8 }, 2.4, YUZ_H, 30.5, BB.x + yan * 39.3, YUZ, BB.z);
  }
  ekle({ kesif: 'orta-kanal' }, 76.2, YUZ_H, 5.0, BB.x, YUZ, BB.z);
  // keşif işaretlerinin yeri
  const n = (x, z, y = BB_UST + 1) => new Vector3(x, y, z);
  const kesifNoktalari = [
    { id: 'breadboard', nokta: n(sutunX(6), BB.z - 8.89) },
    { id: 'serit', nokta: n(sutunX(20), BB.z - 8.89), ozel: '20. sütun, f-j satırları' },
    { id: 'orta-kanal', nokta: n(sutunX(27), BB.z, BB_UST + 0.6) },
    { id: 'koordinat', nokta: n(BB.x - 39.3, BB.z + 8.89) },
    { id: 'arti-ray', nokta: n(sutunX(28), BB.z + 21.59), ozel: 'karta yakın taraf' },
    { id: 'eksi-ray', nokta: n(sutunX(4), BB.z + 19.05), ozel: 'karta yakın taraf' },
  ];
  return {
    grup: g, alanlar, grupBul, grupGoster, vekiller, kesifNoktalari,
    rontgen(acik) {
      serit.visible = acik;
      for (const m of new Set(govdeMat)) { m.transparent = acik; m.opacity = acik ? 0.3 : 1; m.depthWrite = !acik; m.needsUpdate = true; }
      govde.castShadow = !acik;
    },
  };
}

// ------------------------------------------------------------------ vurgu kutusu
export function vurguYap(sahne, alan) {
  malzemeler();
  const [x, y, z, w, h, d] = alan;
  const g = new Group();
  const geo = new BoxGeometry(w + 1.2, h + 1.2, d + 1.2);
  const m = new Mesh(geo, M.vurgu); m.renderOrder = 2;
  const cizgi = new LineSegments(new EdgesGeometry(geo), M.vurguCizgi);
  g.add(m, cizgi); g.position.set(x, y, z);
  sahne.add(g);
  return g;
}

// ------------------------------------------------------------------ LED (5 mm)
const LED_RENK = { kirmizi: 0xe53935, sari: 0xfbc02d, yesil: 0x2fb344 };
export function ledYap(renkAdi = 'kirmizi') {
  malzemeler();
  const renk = new Color(LED_RENK[renkAdi]);
  const kapaliRenk = renk.clone().lerp(new Color(0x3a3036), 0.45);
  const g = new Group(); g.name = 'led';
  const pts = [[0, 0], [2.95, 0], [2.95, 1.0], [2.5, 1.0], [2.5, 5.6]];
  for (let i = 1; i <= 8; i++) { const a = (i / 8) * (Math.PI / 2); pts.push([2.5 * Math.cos(a), 5.6 + 2.5 * Math.sin(a)]); }
  const mat = new MeshStandardMaterial({ color: kapaliRenk, emissive: renk, emissiveIntensity: 0, roughness: 0.14, metalness: 0 });
  const govde = new Mesh(new LatheGeometry(pts.map(([a, b]) => new Vector2(a, b)), 20), mat);
  const GY = 4.2; govde.position.y = GY; g.add(govde);
  // bacaklar: anot (−x, uzun) ve katot (+x). Havadayken gerçek boyları (22 ve 17 mm) görünür;
  // breadboard'a inerken kısalır (takılı hâlde gövdenin içinde biter, alttan taşmaz).
  const anot = new Mesh(new BoxGeometry(0.5, 1, 0.5), M.metal), katot = new Mesh(new BoxGeometry(0.5, 1, 0.5), M.metal);
  anot.position.x = -1.27; katot.position.x = 1.27;
  // dokunma vekilleri: gövde ve iki bacak. Bacaklar ince olduğu için ışınla da seçilir (ince: true).
  const bacakVekili = (x, kesif) => { const m = new Mesh(new BoxGeometry(2.2, 1, 2.2), M.gorunmez); m.position.x = x; m.userData = { kesif, ince: true, yari: [1.1, 0.5, 1.1], hacim: 60 }; return m; };
  const anotV = bacakVekili(-1.27, 'anot'), katotV = bacakVekili(1.27, 'katot');
  const bacak = (t) => {
    const la = 22 + (GY + 5 - 22) * t, lk = 17 + (GY + 5 - 17) * t;
    anot.scale.y = la; anot.position.y = GY - la / 2; katot.scale.y = lk; katot.position.y = GY - lk / 2;
    anotV.scale.y = la; anotV.position.y = anot.position.y; katotV.scale.y = lk; katotV.position.y = katot.position.y;
  };
  bacak(1);
  g.add(anot, katot, anotV, katotV);
  const govdeV = vekil({ kesif: 'led' }, 6.6, 8.8, 6.6, 0, GY + 4.1, 0); g.add(govdeV);
  const isik = new Sprite(new SpriteMaterial({ map: parlamaDokusu(), color: renk, blending: AdditiveBlending, depthWrite: false, transparent: true }));
  isik.scale.set(20, 20, 1); isik.position.y = GY + 5.5; isik.visible = false; g.add(isik);
  const havuz = new Mesh(new PlaneGeometry(30, 30), new MeshBasicMaterial({ map: parlamaDokusu(), color: renk, blending: AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.6 }));
  havuz.rotation.x = -Math.PI / 2; havuz.position.y = 0.12; havuz.visible = false; g.add(havuz);
  // yanınca çevresini aydınlatan küçük ışık (ışık sayısı sabit kalsın diye hep var, yalnız şiddeti değişir)
  const lamba = new PointLight(renk, 0, 42, 2); lamba.position.y = GY + 6; g.add(lamba);
  golgeAyarla(g);
  g.userData = {
    // deger: true/false ya da 0-1 arası parlaklık (delay silinince üç ışık soluk görünür)
    ac(deger) {
      const v = typeof deger === 'number' ? deger : deger ? 1 : 0;
      g.userData.yanik = v > 0;
      mat.emissiveIntensity = 1.05 * v;
      mat.color.copy(kapaliRenk).lerp(renk, v);
      isik.visible = havuz.visible = v > 0.02;
      isik.material.opacity = Math.min(1, v * 1.15);
      havuz.material.opacity = 0.6 * v;
      lamba.intensity = 380 * v;
    },
    bacak, tepe: new Vector3(0, GY + 8.2, 0),
    havuz, vekiller: [govdeV, anotV, katotV],
    // keşif işaretleri (yerel): gövdenin üstü ve bacaklar. Havadayken uzun bacağınki aşağıda, kısanınki yukarıda:
    // dar ekranda da iki işaret üst üste binmez. Takılıyken bacaklar kısa görünür, işaretler yaklaşınca açılır.
    kesifYerleri: (tk) => [['led', new Vector3(0, GY + 11.2, 0)], ['anot', new Vector3(-1.27, tk < 0.5 ? GY - 15 : GY - 2, 0)], ['katot', new Vector3(1.27, tk < 0.5 ? GY - 6 : GY - 2, 0)]],
  };
  return g;
}

// ------------------------------------------------------------------ direnç
const BANT = { siyah: '#1d1d1d', kahve: '#7a4a24', kirmizi: '#d32f2f', turuncu: '#f57c00', altin: '#c9a33a' };
export function direncYap(bantlar, aralik) {
  malzemeler();
  const g = new Group(); g.name = 'direnc';
  const [c, x] = tuval(8, 256);
  x.fillStyle = '#d8c69c'; x.fillRect(0, 0, 8, 256);
  const yer = [0.18, 0.33, 0.48, 0.8];
  bantlar.forEach((b, i) => { x.fillStyle = BANT[b]; x.fillRect(0, (1 - yer[i]) * 256 - 12, 8, 24); });
  const govdeGeo = new CylinderGeometry(1.1, 1.1, 4.6, 16); govdeGeo.rotateZ(Math.PI / 2);
  const govde = new Mesh(govdeGeo, new MeshStandardMaterial({ map: doku(c), roughness: 0.55 }));
  const ucMat = new MeshStandardMaterial({ color: 0xd8c69c, roughness: 0.55 });
  const H = 3.4; govde.position.y = H; g.add(govde);
  for (const yan of [-1, 1]) {
    const uc = new Mesh(new SphereGeometry(1.32, 14, 10), ucMat); uc.scale.set(0.75, 1, 1); uc.position.set(yan * 2.45, H, 0); g.add(uc);
    const yatay = new Mesh(new BoxGeometry(aralik / 2 - 2.9, 0.5, 0.5), M.metal); yatay.position.set(yan * ((aralik / 2 + 2.9) / 2), H, 0);
    const dikey = new Mesh(new BoxGeometry(0.5, H + 7, 0.5), M.metal); dikey.position.set(yan * aralik / 2, (H - 7) / 2, 0);
    g.add(yatay, dikey);
  }
  golgeAyarla(g);
  // dokunma vekilleri: direncin tamamı (bacaklar dahil) ve ortadaki renk bantları (daha küçük: önce o seçilir)
  const tumu = vekil({ kesif: 'direnc' }, aralik + 1.4, H + 9, 3.2, 0, (H + 1.8 - 7.2) / 2, 0);
  const bantV = vekil({ kesif: 'renk-bantlari' }, 3.6, 2.8, 2.8, 0, H, 0);
  g.add(tumu, bantV);
  g.userData = {
    tepe: new Vector3(0, H + 1.4, 0), uclar: [new Vector3(-aralik / 2, 0, 0), new Vector3(aralik / 2, 0, 0)], H, vekiller: [tumu, bantV],
    kesifYerleri: () => [['direnc', new Vector3(aralik / 2 - 1.2, H + 2.6, 0)], ['renk-bantlari', new Vector3(-0.6, H + 2.2, 0)]],
  };
  return g;
}
// İki delik arasına yerleştir: grup konumu ve yönü
export function ikiNoktayaKoy(nesne, a, b) {
  nesne.position.set((a.x + b.x) / 2, BB_UST, (a.z + b.z) / 2);
  nesne.rotation.set(0, -Math.atan2(b.z - a.z, b.x - a.x), 0);
}

// ------------------------------------------------------------------ buton (6x6 mm, kanalın üstünde)
export function butonYap() {
  malzemeler();
  const g = new Group(); g.name = 'buton';
  const govde = new Mesh(new RoundedBoxGeometry(6, 3.4, 6, 2, 0.45), M.siyah); govde.position.y = 1.7;
  const plaka = new Mesh(new BoxGeometry(6.2, 0.3, 6.2), M.metal); plaka.position.y = 3.55;
  const kapak = new Mesh(new CylinderGeometry(1.8, 1.8, 1.7, 24), new MeshStandardMaterial({ color: 0xd84343, roughness: 0.42 })); kapak.position.y = 4.55;
  g.add(govde, plaka, kapak);
  for (const lx of [-2.54, 2.54]) for (const lz of [-3.81, 3.81]) { const b = new Mesh(new BoxGeometry(0.6, 7, 0.35), M.metal); b.position.set(lx, -3.2, lz); g.add(b); }
  golgeAyarla(g);
  const tumu = vekil({ kesif: 'buton' }, 7.6, 12.9, 8.4, 0, -0.45, 0); g.add(tumu);
  g.userData = { bas(basili) { kapak.position.y = basili ? 3.95 : 4.55; }, tepe: new Vector3(0, 5.6, 0), vekiller: [tumu], kesifYerleri: () => [['buton', new Vector3(0, 8.6, 0)]] };
  return g;
}

// ------------------------------------------------------------------ atlama kablosu
const KABLO_RENK = { turuncu: 0xf57c00, siyah: 0x2b2b30, kirmizi: 0xd32f2f, sari: 0xf2c200, yesil: 0x2e9d48, mavi: 0x1e6fd9, mor: 0x7e57c2 };
export function kabloYap(bas, son, renkAdi) {
  malzemeler();
  const g = new Group(); g.name = 'kablo';
  const renk = KABLO_RENK[renkAdi] ?? renkAdi;
  const ust = (v, h) => v.clone().add(new Vector3(0, h, 0));
  const S = ust(bas, 6.2), E = ust(son, 6.2);
  const mesafe = S.distanceTo(E);
  const tepe = new Vector3((S.x + E.x) / 2, Math.max(S.y, E.y) + 7 + mesafe * 0.16, (S.z + E.z) / 2);
  const egri = new CatmullRomCurve3([S, ust(S, 4), tepe, ust(E, 4), E], false, 'centripetal');
  const PARCA = 56, YARICAP = 6;
  const tup = new Mesh(new TubeGeometry(egri, PARCA, 0.62, YARICAP, false), new MeshStandardMaterial({ color: renk, roughness: 0.45 }));
  g.add(tup);
  const uclar = [];
  for (const v of [bas, son]) {
    const kilif = new Mesh(new RoundedBoxGeometry(2.5, 6, 2.5, 2, 0.3), new MeshStandardMaterial({ color: 0x2a2a30, roughness: 0.5 })); kilif.position.copy(v).add(new Vector3(0, 3.1, 0));
    const igne = new Mesh(new BoxGeometry(0.6, 6, 0.6), M.metal); igne.position.copy(v).add(new Vector3(0, -2.9, 0));
    g.add(kilif, igne); uclar.push(kilif, igne);
  }
  golgeAyarla(g);
  // dokunma vekilleri: kablonun çevresinde kalın, görünmez bir tüp (ince: ışınla seçilir) ve iki uç kılıfı
  const tupV = new Mesh(new TubeGeometry(egri, 24, 1.9, 6, false), M.gorunmez);
  tupV.userData = { kesif: 'kablo', ince: true, hacim: 120 };
  g.add(tupV);
  const vekiller = [tupV];
  for (const v of [bas, son]) { const k = vekil({ kesif: 'kablo' }, 3.4, 6.6, 3.4, v.x, v.y + 3.1, v.z); g.add(k); vekiller.push(k); }
  const toplam = tup.geometry.index.count;
  g.userData = {
    egri, vekiller,
    kesifYerleri: () => [['kablo', egri.getPoint(0.5)]],
    buyut(k) { tup.geometry.setDrawRange(0, Math.floor(k * PARCA) * YARICAP * 6); uclar[2].visible = uclar[3].visible = k >= 1; if (k >= 1) tup.geometry.setDrawRange(0, toplam); },
    yol: egri.getSpacedPoints(40),
  };
  return g;
}

// ------------------------------------------------------------------ akım noktaları
// Yol: ardışık noktalar. Noktalar eşit aralıkla yol boyunca kayar (artıdan eksiye, alışılmış akım yönü).
export function akimYap(sahne, yol, sayi = 30) {
  const uz = [0];
  for (let i = 1; i < yol.length; i++) uz.push(uz[i - 1] + yol[i].distanceTo(yol[i - 1]));
  const toplam = uz[uz.length - 1];
  const m = new InstancedMesh(new SphereGeometry(0.85, 8, 6), new MeshBasicMaterial({ color: 0xffcf33 }), sayi);
  m.frustumCulled = false; m.renderOrder = 3; sahne.add(m);
  const mat4 = new Matrix4(), v = new Vector3();
  let kayma = 0;
  const yerlestir = () => {
    for (let i = 0; i < sayi; i++) {
      const d = (kayma + (i * toplam) / sayi) % toplam;
      let j = 1; while (j < uz.length - 1 && uz[j] < d) j++;
      const k = (d - uz[j - 1]) / Math.max(1e-6, uz[j] - uz[j - 1]);
      v.lerpVectors(yol[j - 1], yol[j], Math.min(1, Math.max(0, k)));
      m.setMatrixAt(i, mat4.makeTranslation(v.x, v.y, v.z));
    }
    m.instanceMatrix.needsUpdate = true;
  };
  yerlestir();
  return {
    nesne: m,
    ilerlet(dt, hiz = 28) { kayma = (kayma + (dt / 1000) * hiz) % toplam; yerlestir(); },
    gorunur(acik) { m.visible = acik; },
    sil() { sahne.remove(m); m.geometry.dispose(); m.material.dispose(); },
  };
}

export function anizotropiAyarla(n) { ANISO = Math.max(1, Math.min(8, n)); }
export { M as malzemeTablosu, parlamaDokusu, Object3D, Quaternion, Euler, DoubleSide };
