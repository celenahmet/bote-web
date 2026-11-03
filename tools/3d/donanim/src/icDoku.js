// Kasa içi dokuları (ders 2). Tek atlas (2048 x 1024): anakart baskı devresi ve etiketli parçaların yüzleri; hepsi kodla çizilir,
// dosya yoktur. Atlas yalnız kapak ilk açıldığında üretilir (ders 1 kurulumuna maliyeti yok); süre icDokuSure içinde ölçülür.
// Yüz yönü: kutu geometrisinde -x yüzünün (kapaktan bakış) u ekseni +z, v ekseni +y'dir; anakart dokusu bu bakışla çizilir
// (G/Ç solda, ön kenar sağda, üst kenar yukarıda).
import { CanvasTexture, SRGBColorSpace, LinearMipmapLinearFilter, LinearFilter, RepeatWrapping } from 'three';
import { mulberry32 } from './doku.js';
import { PCB } from './icYer.js';

const YAZI = '"DejaVu Sans", "Segoe UI", Helvetica, Arial, sans-serif';
export const icDokuSure = {};
const AW = 2048, AH = 1024;

// ------------------------------------------------------------------ atlas yerleşimi: sabit sağ yarı raflara dizilir
const BOYUT = {
  ram: [128, 448], gpuArka: [144, 352], pin24: [80, 352], cpu: [224, 272], hdd: [352, 248],
  psu: [384, 232], sata: [288, 200], genel: [192, 192],
  m2: [448, 128], pil: [112, 112], wifi: [192, 80],
  radFin: [640, 64], beyaz: [64, 64],
};
const SATIRLAR = [['ram', 'gpuArka', 'pin24', 'cpu', 'hdd'], ['psu', 'sata', 'genel'], ['m2', 'pil', 'wifi'], ['radFin', 'beyaz']];
export const RECT = { pcb: [0, 0, 1024, 832], gpuYan: [0, 842, 864, 170] };
(() => {
  let y = 0;
  for (const s of SATIRLAR) {
    let x = 1032, h = 0;
    for (const ad of s) { const [w, hh] = BOYUT[ad]; RECT[ad] = [x, y, w, hh]; x += w + 8; h = Math.max(h, hh); }
    y += h + 8;
  }
})();

// geometri uv'sini (0..1) atlasta ilgili dikdörtgene taşır; kenarlara yarım piksel pay bırakır
export function atlasUv(g, ad) {
  const r = RECT[ad]; if (!r) throw new Error('atlas yok: ' + ad);
  const u0 = (r[0] + 0.6) / AW, du = (r[2] - 1.2) / AW, v1 = 1 - (r[1] + 0.6) / AH, dv = (r[3] - 1.2) / AH;
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, u0 + uv.getX(i) * du, v1 - (1 - uv.getY(i)) * dv);
  uv.needsUpdate = true;
  return g;
}

const tuval = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; };
function metin(x, t, px, py, boy, renk, hiza = 'left', agirlik = 700, don = 0) {
  x.save(); x.translate(px, py); if (don) x.rotate(don);
  x.font = `${agirlik} ${boy}px ${YAZI}`; x.fillStyle = renk; x.textAlign = hiza; x.textBaseline = 'middle';
  x.fillText(t, 0, 0); x.restore();
}
const cerceve = (x, px, py, w, h, renk, kalin = 2) => { x.strokeStyle = renk; x.lineWidth = kalin; x.strokeRect(px, py, w, h); };

// ------------------------------------------------------------------ anakart baskı devresi
const pcz = (z) => ((z - PCB.z0) / (PCB.z1 - PCB.z0)) * 1024;
const pcy = (y) => ((PCB.y1 - y) / (PCB.y1 - PCB.y0)) * 832;
function anakartCiz(x) {
  const r = mulberry32(0xB07E);
  x.fillStyle = '#15181c'; x.fillRect(0, 0, 1024, 832);
  // iz ağı: ince, soluk bakır izleri (yatay-dikey-45 derece)
  x.lineWidth = 1.4;
  for (let i = 0; i < 520; i++) {
    const px = r() * 1024, py = r() * 832, u = 20 + r() * 90, y1 = r() < 0.5, k = r();
    x.strokeStyle = k < 0.7 ? 'rgba(48,56,66,0.75)' : 'rgba(86,70,36,0.55)';
    x.beginPath(); x.moveTo(px, py);
    if (y1) { x.lineTo(px + u, py); x.lineTo(px + u + u * 0.4, py + u * 0.4); } else { x.lineTo(px, py + u); x.lineTo(px + u * 0.4, py + u + u * 0.4); }
    x.stroke();
  }
  // altın kaplama delik halkaları (standoff vidaları)
  const delik = [[-40.2, 31.4], [-40.2, 66], [-40.2, 77.6], [-3, 31.4], [-3, 53], [-3, 77.6], [18.4, 31.4], [18.4, 54], [18.4, 77.6]];
  for (const [z, y] of delik) { x.fillStyle = '#b8944a'; x.beginPath(); x.arc(pcz(z), pcy(y), 15, 0, 7); x.fill(); x.fillStyle = '#15181c'; x.beginPath(); x.arc(pcz(z), pcy(y), 8, 0, 7); x.fill(); }
  // küçük bileşenler: işlemci çevresinde kapasitör ve bobin dizileri (VRM)
  for (let i = 0; i < 26; i++) {
    const z = -36 + (i % 13) * 1.25, y = 58 + Math.floor(i / 13) * 14 + (i % 5) * 0.2;
    x.fillStyle = i % 3 ? '#8d939e' : '#2e3239'; x.beginPath(); x.arc(pcz(z), pcy(y), 9, 0, 7); x.fill();
  }
  for (let i = 0; i < 16; i++) { x.fillStyle = '#23262c'; x.fillRect(pcz(-30 + i * 1.1), pcy(72.2), 14, 14); x.fillStyle = '#3d424b'; x.fillRect(pcz(-30 + i * 1.1) + 2, pcy(72.2) + 2, 10, 10); }
  // baskı yazıları (ipek baskı)
  const B = 'rgba(224,229,238,0.88)', C = 'rgba(224,229,238,0.55)';
  const slot = (z0, z1, y, h, ad) => { cerceve(x, pcz(z0), pcy(y + h / 2), pcz(z1) - pcz(z0), (h / (PCB.y1 - PCB.y0)) * 832, B, 2); metin(x, ad, pcz(z0) + 8, pcy(y + h / 2) - 12, 14, B); };
  slot(-40.6, -22.8, 51.6, 1.0, 'PCIe x16'); slot(-40.6, -35.6, 59.8, 1.0, 'PCIe x1');
  for (let k = 0; k < 4; k++) { const zz = -9.5 + 1.7 * k; x.strokeStyle = B; x.lineWidth = 2; x.strokeRect(pcz(zz - 0.5), pcy(74.8), (0.9 / 61) * 1024, ((74.8 - 47.9) / 48.8) * 832); }
  metin(x, 'DDR5  A1  A2  B1  B2', pcz(-9.5), pcy(46.8), 13, C);
  cerceve(x, pcz(-25.3), pcy(68.2), pcz(-15.7) - pcz(-25.3), pcy(59.4) - pcy(68.2), B, 2); metin(x, 'CPU', pcz(-20.5), pcy(63.8), 20, C, 'center');
  cerceve(x, pcz(-26.8), pcy(38.4), pcz(-10.2) - pcz(-26.8), pcy(33.6) - pcy(38.4), B, 2); metin(x, 'M.2', pcz(-26.4), pcy(39.6), 13, B);
  cerceve(x, pcz(0.6), pcy(41.2), pcz(8.4) - pcz(0.6), pcy(32.8) - pcy(41.2), C, 2); metin(x, 'ÇİP KÜMESİ', pcz(4.5), pcy(37), 12, C, 'center');
  cerceve(x, pcz(16.8), pcy(62.6), pcz(19.2) - pcz(16.8), pcy(51.8) - pcy(62.6), B, 2); metin(x, 'ATX', pcz(15.6), pcy(57.2), 13, B, 'center', 700, -Math.PI / 2);
  for (let i = 0; i < 4; i++) { cerceve(x, pcz(11.8), pcy(31.0 + i * 1.2 + 1.0), pcz(15.5) - pcz(11.8), (1.0 / 48.8) * 832, C, 1.4); }
  metin(x, 'SATA', pcz(11.6), pcy(36.7), 12, C);
  metin(x, 'CPU_FAN', pcz(-29.6), pcy(79 - 0.8), 12, C); metin(x, 'EATX12V', pcz(-30.5), pcy(75.6), 11, C);
  metin(x, 'BAT', pcz(-2.0), pcy(37.4), 11, C, 'center');
  metin(x, 'ANAKART  ATX', pcz(-14), pcy(44.6), 26, 'rgba(224,229,238,0.35)');
  metin(x, 'G/Ç', pcz(-38.5), pcy(65.5), 17, C, 'center', 700, -Math.PI / 2);
  return x;
}

// ------------------------------------------------------------------ küçük yüzler
function ihsCiz(x, w, h) {
  const g = x.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#dfe3e9'); g.addColorStop(0.5, '#c4c9d1'); g.addColorStop(1, '#d9dde3');
  x.fillStyle = g; x.fillRect(0, 0, w, h);
  x.fillStyle = 'rgba(40,44,52,0.85)';
  metin(x, 'İŞLEMCİ', w / 2, h * 0.34, 28, 'rgba(46,50,58,0.9)', 'center', 800);
  metin(x, 'ÇEKİRDEK 8', w / 2, h * 0.5, 17, 'rgba(46,50,58,0.8)', 'center');
  metin(x, '4,2 GHz', w / 2, h * 0.62, 17, 'rgba(46,50,58,0.8)', 'center');
  for (let i = 0; i < 10; i++) { x.fillRect(16 + i * 8, h * 0.78, 4, 12 + (i % 3) * 3); }
  x.fillStyle = 'rgba(46,50,58,0.9)'; x.beginPath(); x.moveTo(8, h - 8); x.lineTo(28, h - 8); x.lineTo(8, h - 28); x.fill();
}
function ramCiz(x, w, h) {
  x.fillStyle = '#3a3e46'; x.fillRect(0, 0, w, h);
  for (let i = 0; i < 28; i++) { x.fillStyle = i % 2 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.10)'; x.fillRect(0, i * 16, w, 8); }
  x.fillStyle = '#2b2e35'; x.fillRect(0, h * 0.18, w, h * 0.64);
  x.fillStyle = '#7c4dff'; x.fillRect(0, h * 0.18, w, 6); x.fillRect(0, h * 0.82 - 6, w, 6);
  metin(x, 'RAM  16 GB', w / 2, h * 0.5 - 70, 24, '#eef0f4', 'center', 800, -Math.PI / 2);
  metin(x, 'DDR5-5600', w / 2 + 28, h * 0.5 + 30, 17, '#c9ced8', 'center', 700, -Math.PI / 2);
}
function m2Ciz(x, w, h) {
  x.fillStyle = '#15171b'; x.fillRect(0, 0, w, h);
  x.fillStyle = '#1c4a37'; x.fillRect(4, 4, w - 8, h - 8);
  const cip = (px, py, cw, ch, ad) => { x.fillStyle = '#0c0d10'; x.fillRect(px, py, cw, ch); x.strokeStyle = '#444a54'; x.lineWidth = 1.2; x.strokeRect(px + 2, py + 2, cw - 4, ch - 4); if (ad) metin(x, ad, px + cw / 2, py + ch / 2, 11, '#8a909b', 'center'); };
  cip(60, 20, 120, 88, 'BELLEK'); cip(200, 20, 120, 88, 'BELLEK'); cip(340, 36, 70, 56, 'DENETLEYİCİ');
  x.fillStyle = '#d8dce2'; x.fillRect(12, 8, 38, 112);
  metin(x, 'NVMe  1 TB', 31, 64, 13, '#2a2d33', 'center', 800, -Math.PI / 2);
  x.fillStyle = '#c9a24a'; for (let i = 0; i < 20; i++) x.fillRect(w - 10 - i * 2, h - 9, 1, 6);
}
function sataCiz(x, w, h) {
  const g = x.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#a5abb5'); g.addColorStop(1, '#c4c9d1');
  x.fillStyle = g; x.fillRect(0, 0, w, h);
  x.fillStyle = '#20232a'; x.fillRect(14, 14, w - 28, 60);
  metin(x, 'SATA SSD', 28, 36, 27, '#eef0f4', 'left', 800); metin(x, '500 GB  ·  2,5 inç', 28, 60, 14, '#b5bbc6');
  metin(x, 'Katı hal sürücüsü', 22, h - 28, 14, 'rgba(32,35,42,0.75)');
}
function hddCiz(x, w, h) {
  x.fillStyle = '#aab0ba'; x.fillRect(0, 0, w, h);
  x.fillStyle = '#d9dde3'; x.fillRect(10, 10, w - 20, h - 20);
  metin(x, 'HDD  1 TB', 24, 42, 30, '#22252b', 'left', 800); metin(x, '7200 dev/dk  ·  3,5 inç', 24, 74, 15, '#3c4049');
  metin(x, 'SATA 6 Gb/s', 24, 98, 15, '#3c4049');
  x.fillStyle = '#22252b'; for (let i = 0; i < 38; i++) x.fillRect(24 + i * 6.5, h - 62, 2 + (i % 3), 34);
  x.strokeStyle = '#8f95a0'; x.lineWidth = 2; x.beginPath(); x.arc(w - 74, h - 70, 40, 0, 7); x.stroke(); x.beginPath(); x.arc(w - 74, h - 70, 8, 0, 7); x.stroke();
}
function psuCiz(x, w, h) {
  x.fillStyle = '#16181c'; x.fillRect(0, 0, w, h);
  x.fillStyle = '#e7eaee'; x.fillRect(20, 20, w - 40, h - 40);
  metin(x, 'GÜÇ KAYNAĞI', 36, 52, 26, '#1a1c20', 'left', 800); metin(x, '650 W', w - 40, 54, 34, '#1a1c20', 'right', 800);
  metin(x, 'Giriş 220-240 V  ~  50 Hz', 36, 92, 14, '#3c4049');
  const sat = [['+3,3 V', '24 A'], ['+5 V', '20 A'], ['+12 V', '54 A'], ['-12 V', '0,3 A']];
  sat.forEach(([a, b], i) => { const yy = 128 + i * 20; x.fillStyle = i % 2 ? '#d5d9df' : '#eceff3'; x.fillRect(36, yy - 10, w - 72, 20); metin(x, a, 46, yy, 13, '#22252b'); metin(x, b, w - 46, yy, 13, '#22252b', 'right'); });
  x.fillStyle = '#22252b'; for (let i = 0; i < 30; i++) x.fillRect(36 + i * 4.4, h - 38, 2 + (i % 2), 18);
}
function pin24Ciz(x, w, h) {
  x.fillStyle = '#ece7d9'; x.fillRect(0, 0, w, h);
  const sat = 12, ph = h / sat;
  for (let j = 0; j < sat; j++) for (let i = 0; i < 2; i++) { x.fillStyle = '#4a4b4f'; x.fillRect(8 + i * 36, j * ph + 5, 28, ph - 10); x.fillStyle = '#16171a'; x.fillRect(14 + i * 36, j * ph + 10, 16, ph - 20); }
}
function pilCiz(x, w) {
  const g = x.createRadialGradient(w * 0.4, w * 0.4, 4, w / 2, w / 2, w / 2); g.addColorStop(0, '#f2f4f7'); g.addColorStop(1, '#a9afb9');
  x.fillStyle = g; x.fillRect(0, 0, w, w);
  x.strokeStyle = '#7c828d'; x.lineWidth = 2; x.beginPath(); x.arc(w / 2, w / 2, w * 0.38, 0, 7); x.stroke();
  metin(x, 'CR2032', w / 2, w / 2 - 8, 20, '#383c45', 'center', 800); metin(x, '3 V +', w / 2, w / 2 + 14, 16, '#383c45', 'center');
}
function wifiCiz(x, w, h) {
  x.fillStyle = '#10242b'; x.fillRect(0, 0, w, h);
  x.fillStyle = '#1c3b46'; x.fillRect(4, 4, w - 8, h - 8);
  x.fillStyle = '#b9bfc9'; x.fillRect(16, 12, 70, 56); x.fillStyle = '#8b919c'; x.fillRect(22, 18, 58, 44);
  metin(x, 'Wi-Fi', 51, 40, 16, '#2a2d33', 'center', 800);
  x.fillStyle = '#0c0d10'; x.fillRect(100, 18, 28, 20); x.fillRect(136, 18, 28, 20);
  x.fillStyle = '#c9a24a'; for (let i = 0; i < 16; i++) x.fillRect(100 + i * 4, h - 12, 2, 8);
}
function genelCiz(x, w, h) {
  const r = mulberry32(0xCAFE);
  x.fillStyle = '#18201e'; x.fillRect(0, 0, w, h); x.lineWidth = 1.5;
  for (let i = 0; i < 70; i++) { const a = r() * w, b = r() * h, l = 15 + r() * 50; x.strokeStyle = r() < 0.7 ? 'rgba(60,76,72,0.8)' : 'rgba(120,98,50,0.55)'; x.beginPath(); x.moveTo(a, b); x.lineTo(a + l, b); x.lineTo(a + l + 10, b + 10); x.stroke(); }
  for (let i = 0; i < 40; i++) { x.fillStyle = r() < 0.5 ? '#23282c' : '#8d939e'; x.fillRect(r() * w, r() * h, 6 + r() * 8, 4 + r() * 6); }
}
function radFinCiz(x, w, h) {
  x.fillStyle = '#16181c'; x.fillRect(0, 0, w, h);
  for (let i = 0; i < w; i += 4) { x.fillStyle = i % 8 ? '#5d6470' : '#2b2f36'; x.fillRect(i, 3, 2, h - 6); }
  x.fillStyle = '#7a8190'; x.fillRect(0, 0, w, 2); x.fillRect(0, h - 2, w, 2);
}
function gpuYanCiz(x, w, h) {
  x.fillStyle = '#1b1e23'; x.fillRect(0, 0, w, h);
  x.fillStyle = '#22262d'; x.fillRect(0, 8, w, h - 16);
  for (let i = 0; i < 46; i++) { x.fillStyle = 'rgba(0,0,0,0.5)'; x.fillRect(110 + i * 12, 36, 5, h - 72); }
  x.fillStyle = '#7c4dff'; x.fillRect(0, 0, w, 6); x.fillRect(0, h - 6, w, 6);
  metin(x, 'EKRAN KARTI', 34, h / 2, 40, '#eef0f4', 'left', 800);
}
function gpuArkaCiz(x, w, h) {
  x.fillStyle = '#2a2e35'; x.fillRect(0, 0, w, h);
  for (let i = 0; i < 44; i++) { x.fillStyle = i % 2 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.12)'; x.fillRect(0, i * 8, w, 4); }
  x.fillStyle = '#7c4dff'; x.fillRect(0, 0, 6, h);
  metin(x, 'ARKA PLAKA', w / 2, h / 2, 22, '#cfd4de', 'center', 800, -Math.PI / 2);
}
function beyazCiz(x, w, h) { x.fillStyle = '#fff'; x.fillRect(0, 0, w, h); }

const CIZ = {
  pcb: (x) => anakartCiz(x), gpuYan: gpuYanCiz, ram: ramCiz, cpu: ihsCiz, m2: m2Ciz, sata: sataCiz, hdd: hddCiz, psu: psuCiz, pin24: pin24Ciz,
  pil: (x, w) => pilCiz(x, w), wifi: wifiCiz, genel: genelCiz, radFin: radFinCiz, gpuArka: gpuArkaCiz, beyaz: beyazCiz,
};

// atlas dokusu: tek tuval, her dikdörtgen kendi bölgesine kırpılıp çizilir
export function atlasDokusu(aniz = 4) {
  const t0 = performance.now();
  const [c, x] = tuval(AW, AH);
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, AW, AH);
  for (const [ad, f] of Object.entries(CIZ)) {
    const [px, py, pw, ph] = RECT[ad];
    x.save(); x.beginPath(); x.rect(px, py, pw, ph); x.clip(); x.translate(px, py);
    f(x, pw, ph); x.restore();
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace; t.minFilter = LinearMipmapLinearFilter; t.magFilter = LinearFilter; t.anisotropy = aniz;
  icDokuSure.atlas = Math.round((performance.now() - t0) * 10) / 10;
  return t;
}

// toz filtresi: ince koyu çubuklu altıgen ağ, delikler saydam (yüzeyin ~%65'i açık); döşenir. Malzeme saydam karışımla çizer:
// uzaktan (küçük mip düzeyinde) ağ yarı saydam koyu bir tül gibi görünür, altındaki radyatör üstten okunur.
export function filtreDokusu(aniz = 4) {
  const t0 = performance.now();
  const [c, x] = tuval(128, 128);
  x.clearRect(0, 0, 128, 128);
  x.fillStyle = '#5a606a'; x.fillRect(0, 0, 128, 128);
  x.globalCompositeOperation = 'destination-out';
  const adim = 16, h = adim * 0.866;
  for (let j = 0; j < 128 / h + 1; j++) for (let i = 0; i < 128 / adim + 1; i++) {
    x.beginPath(); const cx = (i + (j % 2 ? 0.5 : 0)) * adim, cy = j * h;
    for (let k = 0; k < 6; k++) { const a = (Math.PI / 3) * k + Math.PI / 6; x.lineTo(cx + Math.cos(a) * 7.45, cy + Math.sin(a) * 7.45); }
    x.closePath(); x.fill();
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace; t.wrapS = t.wrapT = RepeatWrapping; t.anisotropy = aniz;
  icDokuSure.filtre = Math.round((performance.now() - t0) * 10) / 10;
  return t;
}

// sıvı soğutma hortumu: koyu örgü kılıf (taban) + akış okları (ışıma haritası). Ok ucu +u yönüne bakar; offset ile kaydırılır.
// renkler: her renk 64 piksellik bir bant (üstten alta); iki hortum tek malzemeyi paylaşır, her biri kendi bandını kullanır
// (ic.js v'yi banda sıkıştırır; flipY ile ilk bant v 0.5..1, ikinci bant v 0..0.5).
export function hortumDokusu(renkler, aniz = 4) {
  const [c, x] = tuval(128, 64 * renkler.length);
  x.fillStyle = '#000'; x.fillRect(0, 0, 128, 64 * renkler.length);
  x.lineWidth = 7; x.lineJoin = 'miter'; x.lineCap = 'butt';
  renkler.forEach((renk, b) => {
    x.strokeStyle = renk; const oy = b * 64;
    for (let i = 0; i < 2; i++) { const ox = i * 64; x.beginPath(); x.moveTo(ox + 14, oy + 8); x.lineTo(ox + 40, oy + 32); x.lineTo(ox + 14, oy + 56); x.stroke(); }
  });
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace; t.wrapS = t.wrapT = RepeatWrapping; t.anisotropy = aniz;
  return t;
}
