// Gerçekçi doku modülü (donanım ailesi). Her şey kodla üretilir: fotoğraf, dış resim, yazı tipi dosyası yok.
// Rastgelelik yalnız tohumlu (mulberry32): her açılışta aynı görüntü. Yükseklik alanından normal haritası üretilir;
// gürültü yazılı tamponlarda (Float32Array) hesaplanır ve döşemelidir (kenarlar sarılır, dikiş izi kalmaz).
// Hedef tarayıcı sınırı (Firefox 115, Safari 15.4): ctx.filter, roundRect, letterSpacing kullanılmaz.
// Dokular sahne kurulurken bir kez üretilir (dokuKur); sürenin dökümü dokuSure içinde durur (önizleme ölçer).
import { CanvasTexture, SRGBColorSpace, NoColorSpace, LinearMipmapLinearFilter, LinearFilter, RepeatWrapping, Vector2 } from 'three';

export function mulberry32(a) {
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const tuvalYap = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; };
const sinirla = (v) => (v < 0 ? 0 : v > 255 ? 255 : v);
const yumusak = (t) => t * t * (3 - 2 * t);

export const dokuSure = {};
const sure = (ad, f) => { const t = performance.now(); const s = f(); dokuSure[ad] = Math.round((performance.now() - t) * 10) / 10; return s; };

// ------------------------------------------------------------------ gürültü: döşemeli değer gürültüsü
// gx x gy kafes noktası, W x H piksele bilineer + yumuşak geçişle yayılır; kenarlar sarılır (döşeme dikişsiz).
export function degerGurultu(W, H, gx, gy, tohum) {
  const r = mulberry32(tohum), L = new Float32Array(gx * gy), o = new Float32Array(W * H);
  for (let i = 0; i < L.length; i++) L[i] = r();
  const x0 = new Int32Array(W), x1 = new Int32Array(W), tx = new Float32Array(W);
  for (let i = 0; i < W; i++) { const f = (i * gx) / W, k = Math.floor(f); x0[i] = k % gx; x1[i] = (k + 1) % gx; tx[i] = yumusak(f - k); }
  for (let j = 0; j < H; j++) {
    const f = (j * gy) / H, k = Math.floor(f), y0 = (k % gy) * gx, y1 = ((k + 1) % gy) * gx, ty = yumusak(f - k), j0 = j * W;
    for (let i = 0; i < W; i++) {
      const a = L[y0 + x0[i]], b = L[y0 + x1[i]], c = L[y1 + x0[i]], d = L[y1 + x1[i]], t = tx[i];
      o[j0 + i] = (a + (b - a) * t) * (1 - ty) + (c + (d - c) * t) * ty;
    }
  }
  return o;
}
// çok katlı gürültü: [gx, gy, ağırlık] listesi; sonuç 0..1
export function katliGurultu(W, H, katlar, tohum) {
  const o = new Float32Array(W * H);
  let toplam = 0;
  katlar.forEach(([gx, gy, w], i) => {
    const g = degerGurultu(W, H, gx, gy, tohum + i * 7919);
    for (let k = 0; k < o.length; k++) o[k] += g[k] * w;
    toplam += w;
  });
  for (let k = 0; k < o.length; k++) o[k] /= toplam;
  return o;
}

// ------------------------------------------------------------------ yükseklikten normal haritası (merkez fark, sarmalı)
// h: Float32Array 0..1 (W x H), guc: eğim şiddeti, sar: kenarları sar (döşeme) ya da kenara yapıştır
export function normalTuvali(h, W, H, guc, sar = true) {
  const [c, x] = tuvalYap(W, H);
  const im = x.createImageData(W, H), d = im.data;
  const at = (i, j) => {
    if (sar) { i = (i + W) % W; j = (j + H) % H; } else { i = i < 0 ? 0 : i >= W ? W - 1 : i; j = j < 0 ? 0 : j >= H ? H - 1 : j; }
    return h[j * W + i];
  };
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
    let nx = (at(i - 1, j) - at(i + 1, j)) * guc, ny = (at(i, j + 1) - at(i, j - 1)) * guc, nz = 1;
    const L = Math.hypot(nx, ny, nz); nx /= L; ny /= L; nz /= L;
    const o = (j * W + i) * 4;
    d[o] = (nx * 0.5 + 0.5) * 255; d[o + 1] = (ny * 0.5 + 0.5) * 255; d[o + 2] = (nz * 0.5 + 0.5) * 255; d[o + 3] = 255;
  }
  x.putImageData(im, 0, 0);
  return c;
}

// ------------------------------------------------------------------ doku nesnesi
let ANISO = 4;
export function dokuYap(c, renk, tekrar = false, aniz = ANISO) {
  const t = new CanvasTexture(c);
  t.colorSpace = renk ? SRGBColorSpace : NoColorSpace;
  t.minFilter = LinearMipmapLinearFilter; t.magFilter = LinearFilter; t.anisotropy = aniz;
  if (tekrar) t.wrapS = t.wrapT = RepeatWrapping;
  return t;
}
export const normalOlcek = (n) => new Vector2(n, n);

// bulanık gölge: kutu şeklinde yumuşak koyu leke (ctx.filter yok; shadowBlur her tarayıcıda var). Şekil tuvalin dışında
// çizilir, yalnız gölgesi görünür.
function yumusakLeke(x, W, merkezX, merkezY, w, h, bulanik, alfa, renk = '0,0,0') {
  x.save();
  x.shadowColor = `rgba(${renk},${alfa})`; x.shadowBlur = bulanik; x.shadowOffsetX = W + 100; x.shadowOffsetY = 0;
  x.fillStyle = '#000';
  x.fillRect(merkezX - w / 2 - W - 100, merkezY - h / 2, w, h);
  x.restore();
}

// ------------------------------------------------------------------ ahşap masa
// Plaka boyu 216 x 132 birim (1080 x 660 mm); doku 1024 x 640: yaklaşık 1 mm / piksel. Damar x boyunca uzar.
// izler: [{ x, z, w, d, bulanik, alfa }] dünya birimi; yüzey altındaki temas gölgeleri albedoya pişirilir.
export function ahsapMasa({ x0, x1, z0, z1 }, izler = [], aniz = ANISO) {
  const W = 1024, H = 640, tohum = 0xA55;
  const damar = sure('ahsap-damar', () => {
    // uzun, ince şeritler (x'te az, y'de çok kafes) + ince lifler; sinüs bantları tahta halkalarını verir
    const ana = katliGurultu(W, H, [[2, 11, 1.0], [4, 23, 0.45]], tohum);
    const lif = katliGurultu(W, H, [[28, 220, 1.0], [14, 420, 0.7]], tohum + 101);
    const renk = katliGurultu(W, H, [[2, 3, 1.0], [6, 9, 0.35]], tohum + 202);
    const yuk = new Float32Array(W * H), ton = new Float32Array(W * H);
    for (let k = 0; k < yuk.length; k++) {
      const band = 0.5 + 0.5 * Math.sin(ana[k] * 40.0 + lif[k] * 1.6);
      const sert = Math.pow(band, 1.8);
      ton[k] = Math.min(1, Math.max(0, sert * 0.5 + lif[k] * 0.3));
      yuk[k] = 0.55 * ton[k] + 0.45 * lif[k];
    }
    return { ton, yuk, renk };
  });
  const albedo = sure('ahsap-albedo', () => {
    const [c, x] = tuvalYap(W, H);
    const im = x.createImageData(W, H), d = im.data;
    // açık meşe: açık zemin, koyu damar
    const acik = [203, 172, 131], koyu = [165, 127, 88];
    for (let k = 0; k < W * H; k++) {
      const t = damar.ton[k], v = (damar.renk[k] - 0.5) * 20;
      const o = k * 4;
      d[o] = sinirla(acik[0] + (koyu[0] - acik[0]) * t + v);
      d[o + 1] = sinirla(acik[1] + (koyu[1] - acik[1]) * t + v * 0.85);
      d[o + 2] = sinirla(acik[2] + (koyu[2] - acik[2]) * t + v * 0.6);
      d[o + 3] = 255;
    }
    x.putImageData(im, 0, 0);
    // temas gölgeleri: eşyaların altı (dünya x,z -> doku px; doku üst satırı arka kenar)
    const px = (v) => ((v - x0) / (x1 - x0)) * W, pz = (v) => ((v - z0) / (z1 - z0)) * H;
    for (const iz of izler) yumusakLeke(x, W, px(iz.x), pz(iz.z), (iz.w / (x1 - x0)) * W, (iz.d / (z1 - z0)) * H, iz.bulanik ?? 22, iz.alfa ?? 0.34, '52,34,18');
    return c;
  });
  const normal = sure('ahsap-normal', () => normalTuvali(damar.yuk, W, H, 3.2, false));
  return { map: dokuYap(albedo, true, false, aniz), normalMap: dokuYap(normal, false, false, aniz), normalScale: normalOlcek(0.55) };
}

// ------------------------------------------------------------------ mikro dokular (döşemeli, küçük)
// Toz boya: ince ve yumuşak tane (kasa sacı). Mat plastik: biraz daha iri, düşük genlikli tane.
export function mikroNormal(boyut, kat, guc, tohum, aniz = ANISO) {
  const h = sure('mikro-' + tohum, () => katliGurultu(boyut, boyut, kat, tohum));
  const c = normalTuvali(h, boyut, boyut, guc, true);
  return dokuYap(c, false, true, aniz);
}
// fırçalı metal normali (USB ucu, çerçeve): yatay çizgiler
export function fircaNormal(aniz = ANISO) {
  const N = 128, h = new Float32Array(N * N), r = mulberry32(0xF1C);
  for (let j = 0; j < N; j++) { const v = 0.35 + r() * 0.65; for (let i = 0; i < N; i++) h[j * N + i] = v; }
  return dokuYap(normalTuvali(h, N, N, 0.9, true), false, true, aniz);
}

// ------------------------------------------------------------------ toplu üretim
let ONBELLEK = null;
export function dokuKur({ aniz = 4, izler = [], masa }) {
  if (ONBELLEK) return ONBELLEK;
  ANISO = Math.max(1, Math.min(8, aniz));
  const toplam = performance.now();
  const D = {
    masa: ahsapMasa(masa, izler, ANISO),
    tozBoya: mikroNormal(256, [[64, 64, 1.0], [128, 128, 0.7]], 1.1, 0x7B01, ANISO),
    plastik: mikroNormal(256, [[32, 32, 1.0], [96, 96, 0.6]], 0.8, 0x7B02, ANISO),
    firca: fircaNormal(ANISO),
  };
  dokuSure.toplam = Math.round((performance.now() - toplam) * 10) / 10;
  ONBELLEK = D;
  return D;
}
// kurulumdan sonra yapıcılar buradan okur (dokuKur önce çağrılmalı)
export function dokular() {
  if (!ONBELLEK) throw new Error('dokuKur çağrılmadı');
  return ONBELLEK;
}
export function dokulariAt() {
  if (!ONBELLEK) return;
  const gor = (t) => { if (t && t.dispose) t.dispose(); };
  gor(ONBELLEK.masa.map); gor(ONBELLEK.masa.normalMap); gor(ONBELLEK.tozBoya); gor(ONBELLEK.plastik); gor(ONBELLEK.firca);
  ONBELLEK = null;
}
