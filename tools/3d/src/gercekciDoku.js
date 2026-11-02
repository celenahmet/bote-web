// Fiziksel görünüm: malzeme ve doku sağlayıcısı. Bütün dokular kodla (tuval 2D) üretilir: fotoğraf, dış resim,
// yazı tipi dosyası yok. Rastgelelik yalnız tohumlu (mulberry32): her açılışta aynı görüntü.
// Tek ressam, üç geçiş: aynı çizim işlevi renk (albedo), pürüz/metal (ORM) ve yükseklik paletleriyle ayrı ayrı
// çalışır; yazı ve delik konumları üç haritada birebir örtüşür. Yükseklikten normal haritası üretilir.
// Hedef tarayıcı sınırı (Firefox 115, Safari 15.4): ctx.filter, roundRect, letterSpacing kullanılmaz.
import {
  CanvasTexture, SRGBColorSpace, NoColorSpace, LinearMipmapLinearFilter, LinearFilter, RepeatWrapping,
  MeshStandardMaterial, MeshPhysicalMaterial, Color, Vector2,
} from 'three';
import { ARD, BB, DIJITAL, GUC, ANALOG, SATIR, RAY_Z, RAY_SUTUN, ADIM, BANT } from './modeller.js';
import { logoCiz } from './gercekciLogo.js';

export function mulberry32(a) {
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function tuval(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d', { willReadFrequently: false })]; }

// Düzeye göre doku boyutu (genişlik px). Tahta (asıl hedef) için en önemli ayar noktası burası.
// 'sade': Sanal görünümün kartı (Ahmet 02.11 "evet aynen gelsin"): Fiziksel'in geometrisi, düz renkli malzemeler,
// normal ve pürüz haritası yok, PCB dokusunda benek yok; SMD parçalar ve parça numaraları var.
export const DOKU_BOYUT = {
  sade: { pcb: 2048, pcbN: 0, bb: 1536, bbN: 0, aniz: 8 },
  dusuk: { pcb: 1536, pcbN: 0, bb: 1536, bbN: 0, aniz: 4 },
  orta: { pcb: 2048, pcbN: 1024, bb: 2048, bbN: 1024, aniz: 8 },
  yuksek: { pcb: 4096, pcbN: 2048, bb: 3072, bbN: 1536, aniz: 16 },
};

// ------------------------------------------------------------------ gürültü (tohumlu, bulanık büyütme ile)
function gurultuKat(x, W, H, tohum, hucre, guc) {
  const r = mulberry32(tohum);
  const w = Math.max(2, Math.round(W / hucre)), h = Math.max(2, Math.round(H / hucre));
  const [c, k] = tuval(w, h);
  const im = k.createImageData(w, h);
  for (let i = 0; i < w * h; i++) { const v = r() < 0.5 ? 0 : 255; im.data[i * 4] = im.data[i * 4 + 1] = im.data[i * 4 + 2] = v; im.data[i * 4 + 3] = Math.round(r() * 255 * guc); }
  k.putImageData(im, 0, 0);
  x.save(); x.imageSmoothingEnabled = true; x.drawImage(c, 0, 0, W, H); x.restore();
}

// ------------------------------------------------------------------ yükseklikten normal (merkez fark)
function normalUret(yc, k) {
  const W = yc.width, H = yc.height;
  const src = yc.getContext('2d').getImageData(0, 0, W, H).data;
  const [c, x] = tuval(W, H);
  const im = x.createImageData(W, H), d = im.data;
  const h = (i, j) => src[(Math.min(H - 1, Math.max(0, j)) * W + Math.min(W - 1, Math.max(0, i))) * 4];
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
    let nx = (h(i - 1, j) - h(i + 1, j)) * k / 255, ny = (h(i, j + 1) - h(i, j - 1)) * k / 255, nz = 1;
    const L = Math.hypot(nx, ny, nz); nx /= L; ny /= L; nz /= L;
    const o = (j * W + i) * 4;
    d[o] = (nx * 0.5 + 0.5) * 255; d[o + 1] = (ny * 0.5 + 0.5) * 255; d[o + 2] = (nz * 0.5 + 0.5) * 255; d[o + 3] = 255;
  }
  x.putImageData(im, 0, 0);
  return c;
}

function dokuYap(c, renk, aniz, tekrar = false) {
  const t = new CanvasTexture(c);
  t.colorSpace = renk ? SRGBColorSpace : NoColorSpace;
  t.minFilter = LinearMipmapLinearFilter; t.magFilter = LinearFilter; t.anisotropy = aniz;
  if (tekrar) t.wrapS = t.wrapT = RepeatWrapping;
  return t;
}

// ------------------------------------------------------------------ kart (Uno R3) ressamı
// Paletler: rol -> renk. 'albedo' renk, 'orm' (G pürüz, B metal), 'yuk' yükseklik (gri).
const KART_PALET = {
  albedo: { maske: '#0d7783', iz: '#3fb0bb', ped: '#cfd3d8', altin: '#d9b04f', delik: '#101214', ipek: '#f2f7f7', izAlfa: 0.32 },
  orm: { maske: 'rgb(255,117,0)', iz: 'rgb(255,105,0)', ped: 'rgb(255,77,255)', altin: 'rgb(255,70,255)', delik: 'rgb(255,200,0)', ipek: 'rgb(255,158,0)', izAlfa: 1 },
  yuk: { maske: 'rgb(128,128,128)', iz: 'rgb(150,150,150)', ped: 'rgb(112,112,112)', altin: 'rgb(110,110,110)', delik: 'rgb(60,60,60)', ipek: 'rgb(146,146,146)', izAlfa: 1 },
};
const MONTAJ = [[13.97, 50.8], [15.24, 2.54], [66.04, 45.72], [66.04, 17.78]];
export const SMD_KUME = [
  { k: [10.5, 24.5, 9.5, 22.5], n: 18 }, { k: [12, 30, 22.5, 30.5], n: 8 }, { k: [3, 17, 1.5, 14], n: 8 },
  { k: [2, 22, 41, 52], n: 14 }, { k: [24, 64, 29, 33], n: 10 }, { k: [24, 64, 41.5, 48], n: 10 }, { k: [20, 66, 5, 9.5], n: 10 },
];
const YASAK = [
  [20.07, 45.47, 1.27, 3.81], [46.99, 67.31, 1.27, 3.81], [25.15, 45.47, 49.53, 52.07], [48.01, 63.25, 49.53, 52.07],
  [-6.35, 9.65, 9.24, 21.24], [-1.8, 12.2, 40.4, 49.4], [25.75, 63.25, 32.2, 41.4], [17.5, 22.5, 15, 20], [15.75, 26.25, 24.8, 29.2],
  [11.75, 18.25, 43.1, 49.25], [9.85, 16.15, 28.35, 34.65], [16.35, 22.65, 34.35, 40.65], [4.4, 10.4, 2.2, 8.2], [62.33, 67.41, 22.86, 30.48],
  [27, 30, 9.6, 16.4], [60, 63, 9.6, 11.6], [37, 53.5, 16.5, 29.6], [53.5, 61.5, 18.5, 25.5], [30, 62, 9.4, 11.8], [24, 47, 40.6, 43.4], [47, 64, 40.6, 43.4],
];
// SMD parçaların yeri: tohumlu, yasak dikdörtgenlerden ve birbirinden uzak. Tek yerleşim verisi hem dokudaki
// pedleri hem örnekli gövdeleri besler (gercekciKart.js).
export function smdYerlesim(toplamOran = 1) {
  const sonuc = [];
  const carp = (x0, x1, z0, z1, pay) => YASAK.some(([a, b, c, d]) => x1 + pay > a && x0 - pay < b && z1 + pay > c && z0 - pay < d)
    || MONTAJ.some(([mx, mz]) => Math.hypot((x0 + x1) / 2 - mx, (z0 + z1) / 2 - mz) < 3.6)
    || sonuc.some((o) => x1 + 0.4 > o.x - o.w / 2 && x0 - 0.4 < o.x + o.w / 2 && z1 + 0.4 > o.z - o.d / 2 && z0 - 0.4 < o.z + o.d / 2);
  SMD_KUME.forEach((km, no) => {
    const r = mulberry32(0x5EED00 + no);
    const hedef = Math.round(km.n * toplamOran);
    let kondu = 0;
    for (let deneme = 0; deneme < 400 && kondu < hedef; deneme++) {
      const tur = r() < 0.62 ? 'direnc' : 'kond';
      const uzun = tur === 'direnc' ? 1.6 : 2.0, kisa = tur === 'direnc' ? 0.8 : 1.25;
      const yatay = r() < 0.5;
      const w = yatay ? uzun : kisa, d = yatay ? kisa : uzun;
      const x = Math.round((km.k[0] + r() * (km.k[1] - km.k[0])) / 0.8) * 0.8, z = Math.round((km.k[2] + r() * (km.k[3] - km.k[2])) / 0.8) * 0.8;
      if (x - w / 2 < km.k[0] || x + w / 2 > km.k[1] || z - d / 2 < km.k[2] || z + d / 2 > km.k[3]) continue;
      if (carp(x - w / 2, x + w / 2, z - d / 2, z + d / 2, 0.6)) continue;
      sonuc.push({ x, z, w, d, yatay, tur, ad: `${tur === 'direnc' ? 'R' : 'C'}${sonuc.length + 1}` });
      kondu++;
    }
  });
  return sonuc;
}

function kartCiz(x, W, H, P, { smd, logo, sus }) {
  const s = W / ARD.w;
  x.fillStyle = P.maske; x.fillRect(0, 0, W, H);
  // bakır izler (maske altında, düşük kontrast). Görsel dolgudur: hiçbir pin adı bir yola bağlanmaz.
  x.save(); x.globalAlpha = P.izAlfa; x.strokeStyle = P.iz; x.lineWidth = 0.25 * s; x.lineCap = 'round'; x.lineJoin = 'round';
  const yol = (pts) => { x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a * s, b * s) : x.moveTo(a * s, b * s))); x.stroke(); };
  for (let i = 0; i < 14; i++) { const px = 31.5 + i * 2.54 > 46 ? 33 + i * 2.54 : 31.5 + i * 2.54; const z1 = 7 + (i % 4) * 0.8; yol([[px, 4.6], [px, z1], [px - 2.2, z1 + 2.2], [px - 2.2, 30.5]]); }
  for (let i = 0; i < 6; i++) { const px = 49.3 + i * 2.54; yol([[px, 48.4], [px, 45.2 - i * 0.3], [px - 2.4, 42.8 - i * 0.3], [px - 2.4, 41.6]]); }
  yol([[10.5, 13.5], [16, 13.5], [18.5, 16]]); yol([[10.5, 17.6], [15, 17.6], [17.8, 20.4], [21, 20.4]]); yol([[8, 44], [13, 44], [15.5, 46.5]]);
  yol([[36.5, 48.4], [36.5, 45.5], [33, 42], [16, 42]]); yol([[39, 48.4], [39, 45.4], [29, 45.4]]); yol([[23, 17.5], [26, 17.5], [28.5, 20], [28.5, 30.5]]);
  yol([[24.5, 27], [27, 27], [29.5, 29.5]]); yol([[3, 30], [8, 30], [10.5, 27.5], [10.5, 22]]); yol([[57, 28.5], [60, 28.5], [62.4, 26.1]]);
  x.restore();
  // pedler: SMD pedleri (kalay) ve montaj deliklerinin altın halkası
  x.fillStyle = P.ped;
  for (const o of smd) {
    const pw = o.yatay ? o.w * 0.3 : o.w * 1.08, pd = o.yatay ? o.d * 1.08 : o.d * 0.3;
    for (const yan of [-1, 1]) {
      const cx = o.x + (o.yatay ? yan * (o.w / 2 - pw / 2 + 0.1) : 0), cz = o.z + (o.yatay ? 0 : yan * (o.d / 2 - pd / 2 + 0.1));
      x.fillRect((cx - pw / 2) * s, (cz - pd / 2) * s, pw * s, pd * s);
    }
  }
  for (const [hx, hz] of MONTAJ) {
    x.fillStyle = P.altin; x.beginPath(); x.arc(hx * s, hz * s, 2.8 * s, 0, Math.PI * 2); x.fill();
    x.fillStyle = P.delik; x.beginPath(); x.arc(hx * s, hz * s, 1.6 * s, 0, Math.PI * 2); x.fill();
  }
  // ipek baskı: ilk Sanal kartın (eski modeller.js kartDokusu) bütün yazıları aynı konumda, daraltılmış yazı tipi
  const ipek = P.ipek;
  x.strokeStyle = ipek; x.fillStyle = ipek; x.lineWidth = 0.2 * s;
  const kutuCiz = (x1, z1, x2, z2) => x.strokeRect(x1 * s, z1 * s, (x2 - x1) * s, (z2 - z1) * s);
  kutuCiz(20.0, 1.2, 45.5, 3.9); kutuCiz(47.0, 1.2, 67.3, 3.9); kutuCiz(25.1, 49.5, 45.5, 52.1); kutuCiz(48.0, 49.5, 63.3, 52.1);
  const YT = '"Arial Narrow", "Roboto Condensed", "Liberation Sans Narrow", Arial, Helvetica, sans-serif';
  const yaz = (t, bx, bz, boy, { don = 0, hiza = 'center', kalin = 700, dar = 0.84 } = {}) => {
    x.save(); x.translate(bx * s, bz * s); x.rotate(don); x.scale(dar, 1);
    x.font = `${kalin} ${boy * s}px ${YT}`;
    x.textAlign = hiza; x.textBaseline = 'middle'; x.fillText(t, 0, 0); x.restore();
  };
  const dikey = -Math.PI / 2;
  const dij = { SCL: 'SCL', SDA: 'SDA', AREF: 'AREF', 'GND-D': 'GND', 13: '13', 12: '12', 11: '~11', 10: '~10', 9: '~9', 8: '8', 7: '7', 6: '~6', 5: '~5', 4: '4', 3: '~3', 2: '2', 1: 'TX→1', 0: 'RX←0' };
  for (const [k, t] of Object.entries(dij)) yaz(t, DIJITAL[k], 4.4, 1.25, { don: dikey, hiza: 'right' });
  yaz('DIGITAL (PWM~)', 46, 10.6, 1.5);
  const gucE = { IOREF: 'IOREF', RESET: 'RESET', '3.3V': '3.3V', '5V': '5V', GND1: 'GND', GND2: 'GND', VIN: 'Vin' };
  for (const [k, t] of Object.entries(gucE)) yaz(t, GUC[k], 48.3, 1.2, { don: dikey, hiza: 'left' });
  for (const [k, v] of Object.entries(ANALOG)) yaz(k, v, 48.3, 1.25, { don: dikey, hiza: 'left' });
  yaz('POWER', 35.3, 42.0, 1.5); yaz('ANALOG IN', 55.6, 42.0, 1.5);
  yaz('L', 26.6, 10.6, 1.2); yaz('TX', 25.9, 13.3, 1.0); yaz('RX', 25.9, 15.4, 1.0); yaz('ON', 64.4, 10.6, 1.2);
  yaz('RESET', 7.4, 10.3, 1.1); yaz('ICSP', 64.9, 21.9, 1.1);
  // Fiziksel'e özgü: pin 1 noktaları, kutup işaretleri, parça numaraları, logo
  const nokta = (bx, bz, r) => { x.beginPath(); x.arc(bx * s, bz * s, r * s, 0, Math.PI * 2); x.fill(); };
  nokta(62.0, 24.1, 0.35); nokta(25.4, 34.6, 0.35);
  for (const [cx, cz] of [[13, 31.5], [19.5, 37.5]]) { x.beginPath(); x.arc(cx * s, cz * s, 3.5 * s, 0, Math.PI * 2); x.stroke(); yaz('+', cx + 3.9, cz - 2.4, 1.3); }
  x.strokeRect((44.5 - 18.9) * s, (36.8 - 4.75) * s, 37.8 * s, 9.5 * s);
  if (sus) {
    yaz('C1', 9.2, 31.5, 0.8, { kalin: 600 }); yaz('C2', 23.2, 37.5, 0.8, { kalin: 600 }); yaz('Y1', 21, 29.9, 0.8, { kalin: 600 });
    yaz('U1', 44.5, 43.6, 0.8, { kalin: 600 }); yaz('U3', 20, 21.2, 0.8, { kalin: 600 }); yaz('X1', 5.2, 38.6, 0.8, { kalin: 600 });
    for (const o of smd.slice(0, 26)) if (o.x > 4 && o.x < 64) yaz(o.ad, o.x, o.z + (o.yatay ? 1.15 : 1.55), 0.62, { kalin: 600 });
  }
  if (logo) logoCiz(x, s, ipek);
}

export function kartDokulari(duzey, { smd, logo }) {
  const B = DOKU_BOYUT[duzey];
  const W = B.pcb, H = Math.round((W * ARD.d) / ARD.w);
  const [c, x] = tuval(W, H);
  kartCiz(x, W, H, KART_PALET.albedo, { smd, logo, sus: true }); // parça numaraları her düzeyde (Sanal ile aynı kart)
  // hafif benek (lehim maskesinin dokusu): iki oktav, parlaklıkta yaklaşık ±%2,5. Sade düzeyde yok (düz renk).
  if (duzey !== 'sade') { gurultuKat(x, W, H, 0xB0A7, W / 110, 0.05); gurultuKat(x, W, H, 0xB0A8, W / 420, 0.04); }
  const sonuc = { albedo: dokuYap(c, true, B.aniz) };
  if (B.pcbN) {
    const NW = B.pcbN, NH = Math.round((NW * ARD.d) / ARD.w);
    const [yc, yx] = tuval(NW, NH); kartCiz(yx, NW, NH, KART_PALET.yuk, { smd, logo, sus: true });
    sonuc.normal = dokuYap(normalUret(yc, duzey === 'yuksek' ? 2.2 : 1.6), false, B.aniz);
    const [oc, ox] = tuval(NW, NH); kartCiz(ox, NW, NH, KART_PALET.orm, { smd, logo, sus: true });
    sonuc.orm = dokuYap(oc, false, B.aniz);
  }
  return sonuc;
}

// ------------------------------------------------------------------ breadboard ressamı
const BB_PALET = {
  albedo: { govde: '#f1eee6', kanal: '#d9d4c9', kanalCizgi: '#c9c3b7', halka: '#dcd7cb', halkaKoyu: '#c7c1b4', delik: '#232327', kirmizi: '#d23b3b', mavi: '#2f62c9', yazi: '#8a8478' },
  yuk: { govde: 'rgb(128,128,128)', kanal: 'rgb(96,96,96)', kanalCizgi: 'rgb(88,88,88)', halka: 'rgb(104,104,104)', halkaKoyu: 'rgb(92,92,92)', delik: 'rgb(24,24,24)', kirmizi: 'rgb(128,128,128)', mavi: 'rgb(128,128,128)', yazi: 'rgb(122,122,122)' },
};
const sutunX = (c) => BB.x - 36.83 + (c - 1) * ADIM;
function bbCiz(x, W, H, P) {
  const s = W / BB.w;
  const X = (lx) => (lx - BB.x + BB.w / 2) * s, Z = (lz) => (lz + BB.d / 2) * s;
  x.fillStyle = P.govde; x.fillRect(0, 0, W, H);
  // orta kanal: alçak oluk (düz renk, kenarlarda ince koyu çizgi)
  x.fillStyle = P.kanal; x.fillRect(0, Z(-1.5), W, 3 * s);
  x.fillStyle = P.kanalCizgi; x.fillRect(0, Z(-1.5), W, 0.25 * s); x.fillRect(0, Z(1.25), W, 0.25 * s);
  // delikler: kare ağız, çevresinde huni (üst-sol kenar gölgede, alt-sağ ışıkta: düz iki ton)
  const delik = (lx, lz) => {
    const cx = X(lx), cz = Z(lz), d1 = 1.55 * s, d0 = 1.0 * s;
    x.fillStyle = P.halkaKoyu; x.fillRect(cx - d1 / 2, cz - d1 / 2, d1, d1);
    x.fillStyle = P.halka; x.fillRect(cx - d1 / 2 + 0.22 * s, cz - d1 / 2 + 0.22 * s, d1 - 0.22 * s, d1 - 0.22 * s);
    x.fillStyle = P.delik; x.fillRect(cx - d0 / 2, cz - d0 / 2, d0, d0);
  };
  for (let c = 1; c <= 30; c++) for (const z of Object.values(SATIR)) delik(sutunX(c) - BB.x, z);
  for (const z of Object.values(RAY_Z)) for (const c of RAY_SUTUN) delik(sutunX(c) - BB.x, z);
  // ray çizgileri (Sanal ile aynı yer): dış kırmızı (+), iç mavi (−)
  for (const yan of [1, -1]) {
    x.fillStyle = P.kirmizi; x.fillRect(X(-37), Z(yan * 23.6) - 0.3 * s, X(37) - X(-37), 0.6 * s);
    x.fillStyle = P.mavi; x.fillRect(X(-37), Z(yan * 16.9) - 0.3 * s, X(37) - X(-37), 0.6 * s);
  }
  const YT = '"Arial Narrow", "Roboto Condensed", Arial, Helvetica, sans-serif';
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = `700 ${2.1 * s}px ${YT}`;
  for (const yan of [1, -1]) for (const ux of [-39.4, 39.4]) {
    x.fillStyle = P.kirmizi; x.fillText('+', X(ux), Z(yan * RAY_Z['yakin+']));
    x.fillStyle = P.mavi; x.fillText('−', X(ux), Z(yan * RAY_Z['yakin-']));
  }
  x.fillStyle = P.yazi; x.font = `700 ${1.45 * s}px ${YT}`;
  for (const [r, z] of Object.entries(SATIR)) for (const ux of [-39.3, 39.3]) x.fillText(r, X(ux), Z(z));
  for (const n of [1, 5, 10, 15, 20, 25, 30]) for (const yan of [1, -1]) x.fillText(String(n), X(-36.83 + (n - 1) * ADIM), Z(yan * 15.45));
}
export function bbDokulari(duzey) {
  const B = DOKU_BOYUT[duzey];
  const W = B.bb, H = Math.round((W * BB.d) / BB.w);
  const [c, x] = tuval(W, H);
  bbCiz(x, W, H, BB_PALET.albedo);
  gurultuKat(x, W, H, 0xBB01, W / 90, 0.035);
  const sonuc = { albedo: dokuYap(c, true, B.aniz) };
  if (B.bbN) {
    const NW = B.bbN, NH = Math.round((NW * BB.d) / BB.w);
    const [yc, yx] = tuval(NW, NH); bbCiz(yx, NW, NH, BB_PALET.yuk);
    sonuc.normal = dokuYap(normalUret(yc, 2.4), false, B.aniz);
  }
  return sonuc;
}

// ------------------------------------------------------------------ küçük dokular
export function cipYazisi(aniz) {
  const [c, x] = tuval(1024, 216);
  x.fillStyle = '#17171a'; x.fillRect(0, 0, 1024, 216);
  gurultuKat(x, 1024, 216, 0xC1F, 6, 0.06);
  // 1. pin ucunda yarım daire çentik ve pin 1 çukuru
  x.fillStyle = '#0b0b0d'; x.beginPath(); x.arc(0, 108, 30, -Math.PI / 2, Math.PI / 2); x.fill();
  x.strokeStyle = '#26262b'; x.lineWidth = 3; x.beginPath(); x.arc(70, 170, 16, 0, Math.PI * 2); x.stroke();
  x.fillStyle = '#9ea2a9'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.save(); x.translate(540, 84); x.scale(0.9, 1); x.font = '700 64px "Arial Narrow", Arial, Helvetica, sans-serif'; x.fillText('ATMEGA328P-PU', 0, 0); x.restore();
  x.save(); x.translate(540, 150); x.scale(0.9, 1); x.font = '600 40px "Arial Narrow", Arial, Helvetica, sans-serif'; x.fillStyle = '#80848b'; x.fillText('AVR', 0, 0); x.restore();
  return dokuYap(c, true, aniz);
}
export function kristalYazisi(aniz) {
  const [c, x] = tuval(256, 96);
  x.fillStyle = '#c9ccd2'; x.fillRect(0, 0, 256, 96);
  x.fillStyle = '#2a2a2e'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = '700 40px "Arial Narrow", Arial, Helvetica, sans-serif'; x.fillText('16.000', 128, 50);
  return dokuYap(c, true, aniz);
}
// Kondansatör kutup bandı: silindir çevresinde dikey şerit, üstünde eksi işaretleri
export function kapBandi(aniz) {
  const [c, x] = tuval(256, 64);
  x.fillStyle = '#1c1d22'; x.fillRect(0, 0, 256, 64);
  x.fillStyle = '#b9bdc4'; x.fillRect(150, 0, 56, 64);
  x.fillStyle = '#1c1d22'; for (const y of [12, 30, 48]) x.fillRect(166, y - 2, 24, 5);
  return dokuYap(c, true, aniz);
}
// Direnç bantları: x yerel ekseninde merkezleri verilir, gövde boyu L (Lathe v doğrusal). Renkler Sanal BANT.
export function direncBandi(bantlar, merkezler, L, aniz) {
  const H = 512; const [c, x] = tuval(16, H);
  x.fillStyle = '#d8c69c'; x.fillRect(0, 0, 16, H);
  // gövde boyunca çok hafif tane (cilalı karbon film)
  const r = mulberry32(0xD1E);
  for (let i = 0; i < 90; i++) { x.fillStyle = r() < 0.5 ? 'rgba(120,90,40,0.06)' : 'rgba(255,255,255,0.06)'; x.fillRect(0, r() * H, 16, 2 + r() * 6); }
  const bw = (4.6 * 24) / 256; // Sanal ile aynı bant genişliği (mm)
  bantlar.forEach((b, i) => { const v = (merkezler[i] + L / 2) / L; const y = (1 - v) * H; x.fillStyle = BANT[b]; x.fillRect(0, y - (bw / L) * H / 2, 16, (bw / L) * H); });
  return dokuYap(c, true, aniz);
}
// USB kabuğu için fırçalı metal normali (döşeme)
export function fircaNormal() {
  const [c, x] = tuval(128, 128);
  const r = mulberry32(0xF1C);
  x.fillStyle = 'rgb(128,128,128)'; x.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 260; i++) { const g = 110 + Math.round(r() * 36); x.fillStyle = `rgb(${g},${g},${g})`; x.fillRect(0, Math.floor(r() * 128), 128, 1); }
  const t = dokuYap(normalUret(c, 0.8), false, 4, true); t.repeat.set(2, 2);
  return t;
}

// ------------------------------------------------------------------ sağlayıcı: paylaşılan malzemeler (Sanal'ınkiler ASLA)
export function saglayiciKur(duzey, aniz) {
  const B = DOKU_BOYUT[duzey];
  const an = Math.min(B.aniz, aniz || 1);
  const hafif = duzey === 'dusuk' || duzey === 'sade'; // normal haritası, saydam LED kubbesi ve cila yok
  const onbellek = new Map(), dokular = [];
  const kayit = (t) => { if (t) dokular.push(t); return t; };
  const std = (o) => new MeshStandardMaterial(o);
  const tanim = {
    baslikPlastik: () => std({ color: 0x1e1e22, roughness: 0.55 }),
    baslikIc: () => std({ color: 0x08080a, roughness: 0.9 }),
    metalCelik: () => std({ color: 0xcfd2d8, metalness: 1, roughness: 0.32 }),
    metalFirca: () => std({ color: 0xc7cad0, metalness: 1, roughness: 0.38, normalMap: hafif ? null : kayit(fircaNormal()), normalScale: new Vector2(0.35, 0.35) }),
    kalay: () => std({ color: 0xc4c8ce, metalness: 1, roughness: 0.3 }),
    altin: () => std({ color: 0xd9b04f, metalness: 1, roughness: 0.28 }),
    kapAlu: () => std({ map: kayit(kapBandi(an)), metalness: 0.55, roughness: 0.42 }),
    kapUst: () => std({ color: 0xb7bbc2, metalness: 0.9, roughness: 0.35 }),
    cipGovde: () => std({ color: 0x17171a, roughness: 0.62 }),
    cipUst: () => std({ map: kayit(cipYazisi(an)), roughness: 0.62 }),
    kristal: () => std({ map: kayit(kristalYazisi(an)), metalness: 0.95, roughness: 0.3 }),
    kristalYan: () => std({ color: 0xc9ccd2, metalness: 0.95, roughness: 0.3 }),
    resetTaban: () => std({ color: 0x1a1a1e, roughness: 0.55 }),
    resetDugme: () => std({ color: 0xd8c9a0, roughness: 0.5 }),
    ayak: () => std({ color: 0x35353a, roughness: 0.85 }),
    pcbKenar: () => std({ color: 0xa39f74, roughness: 0.7 }),
    jak: () => std({ color: 0x18181b, roughness: 0.5 }),
    koyu: () => std({ color: 0x0a0a0c, roughness: 0.95 }),
    smdDirenc: () => std({ color: 0x1b1b1d, roughness: 0.5 }),
    smdKond: () => std({ color: 0xa88b5a, roughness: 0.55 }),
    bbYan: () => std({ color: 0xece8df, roughness: 0.62 }),
    klips: () => std({ color: 0xb88a4a, metalness: 1, roughness: 0.38 }),
    dupont: () => std({ color: 0x2a2a30, roughness: 0.55 }),
    butonKapak: () => std({ color: 0xd84343, roughness: 0.42 }),
  };
  function mat(ad) {
    if (!onbellek.has(ad)) {
      const f = tanim[ad];
      if (!f) throw new Error('bilinmeyen malzeme ' + ad);
      onbellek.set(ad, f());
    }
    return onbellek.get(ad);
  }
  // LED kubbesi: boyalı yarı saydam epoksi; yüksek düzeyde cila katmanı
  function ledKubbe(renk) {
    const o = { color: new Color(renk).lerp(new Color(0xffffff), 0.35), emissive: new Color(renk), emissiveIntensity: 0, roughness: 0.16, metalness: 0, transparent: !hafif, opacity: hafif ? 1 : 0.8, depthWrite: true };
    return kayitMat(duzey === 'yuksek' ? new MeshPhysicalMaterial({ ...o, clearcoat: 1, clearcoatRoughness: 0.08 }) : std(o));
  }
  const ozelMat = [];
  const kayitMat = (m) => { ozelMat.push(m); return m; };
  return {
    duzey, aniz: an, mat, ledKubbe, kayit, kayitMat,
    // SMD'ler her düzeyde (02.11: Sanal kart onları gösterdiği için Fiziksel'in düşük düzeyi de gösterir; örnekli,
    // 2 çizim çağrısı, yaklaşık 3 bin üçgen)
    ek: (ad) => (duzey === 'sade' ? { smd: true } : { smd: true, soket: duzey !== 'dusuk', ledIc: duzey !== 'dusuk' })[ad] ?? false,
    dispose() { for (const m of onbellek.values()) m.dispose(); for (const m of ozelMat) m.dispose(); for (const t of dokular) t.dispose(); },
  };
}
