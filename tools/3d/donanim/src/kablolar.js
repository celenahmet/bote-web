// Masa kabloları: cihazlardan kasanın arka yüzündeki girişlere. Tüm kablolar ve fişler tek geometride (tek çizim çağrısı);
// köşe renkleri yerinde değiştirilerek tek bir kablo vurgulanabilir (izle). Yollar köşeleri yuvarlatılmış çoklu doğrudur.
import { Mesh, Vector3, Color, M, malzemeler, kutu, silindir, boya } from './yardimci.js';
import { CurvePath, LineCurve3, QuadraticBezierCurve3, TubeGeometry } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { KASA, MON } from './yerlesim.js';
import { ARKA } from './kasa.js';

const ARKA_Z = KASA.z - KASA.d / 2;          // kasa arka yüzü (dünya)
const PX = (x) => KASA.x + x;                  // kasa-yerel x -> dünya x
const KABLO = 0x1b1c21, VURGU = 0x7c4dff, CELIK = 0xc4c8cf, KILIF = 0x17181c;
const SERIT = (i) => -70.4 - 0.65 * i;         // kasa arkasındaki şeritler (z)
const V = (x, y, z) => new Vector3(x, y, z);

function yuvarlakYol(noktalar, r) {
  const P = noktalar.map((p) => (p.isVector3 ? p.clone() : new Vector3(...p)));
  const yol = new CurvePath();
  let onceki = P[0];
  for (let i = 1; i < P.length - 1; i++) {
    const a = P[i - 1], b = P[i], c = P[i + 1];
    const k = Math.min(r, a.distanceTo(b) / 2, b.distanceTo(c) / 2);
    const giris = b.clone().addScaledVector(a.clone().sub(b).normalize(), k);
    const cikis = b.clone().addScaledVector(c.clone().sub(b).normalize(), k);
    if (onceki.distanceTo(giris) > 1e-4) yol.add(new LineCurve3(onceki, giris));
    yol.add(new QuadraticBezierCurve3(giris, b, cikis));
    onceki = cikis;
  }
  yol.add(new LineCurve3(onceki, P[P.length - 1]));
  return yol;
}

// Fişler: kasa girişinin önünde (dünya z = ARKA_Z - 1,0 yüzey), kablo tarafı -z yönünde
const YUZEY = ARKA_Z - 1.0;
const FIS = {
  usb: (x, y) => ({ parcalar: [boya(kutu(2.4, 0.95, 1.1, x, y, YUZEY - 0.55), CELIK), boya(kutu(2.9, 1.45, 1.1, x, y, YUZEY - 1.65), KILIF)], uc: YUZEY - 2.2 }),
  hdmi: (x, y) => ({ parcalar: [boya(kutu(2.8, 0.85, 1.2, x, y, YUZEY - 0.6), CELIK), boya(kutu(3.3, 1.35, 1.4, x, y, YUZEY - 1.9), KILIF)], uc: YUZEY - 2.6 }),
  jak: (x, y, renk) => ({ parcalar: [boya(silindir(0.5, 1.0, x, y, YUZEY - 0.5, { eksen: 'z', seg: 10 }), CELIK), boya(silindir(0.8, 1.5, x, y, YUZEY - 1.75, { eksen: 'z', seg: 12 }), renk)], uc: YUZEY - 2.5 }),
  guc: (x, y) => ({ parcalar: [boya(kutu(3.6, 2.5, 2.6, x, y, YUZEY - 1.5), KILIF), boya(kutu(2.2, 1.2, 0.5, x, y, YUZEY - 0.3), 0x3a3d45)], uc: YUZEY - 2.8 }),
};

// Her kablo: { id, ad, yazi (etiket), fis, yol(noktalar), r }
export function kablolariYap({ klavye, fare, kamera, kulaklik, yazici, mikrofon, hoparlor, monitor }) {
  malzemeler();
  const px = (x) => PX(x);
  const L = (i) => SERIT(i);
  const kablolar = [];
  const ekle = (id, ad, hedef, fis, basla, ara, son, r = 0.27, kose = 2.2) => {
    // basla: cihaz çıkışı; ara: ara noktalar; son: şeritten girişe yükselen son noktalar; fiş ucu yol sonunda
    const pts = [...basla, ...ara, ...son, V(fis.x, fis.y, fis.uc)];
    kablolar.push({ id, ad, hedef, fis: fis.parcalar, yol: yuvarlakYol(pts, kose), r });
  };
  const girisNok = (xp, yp) => V(xp, yp, ARKA_Z);

  // ---- ön cihazlar: kasanın sağındaki koridordan (x -64 .. -61) arkaya
  { const a = ARKA.usb[3], f = FIS.usb(px(a.x), a.y); // kulaklık: USB (2. yığının alt portu)
    ekle('kulaklik', 'Kulaklık kablosu', girisNok(px(a.x), a.y), { ...f, x: px(a.x), y: a.y },
      [kulaklik.ucu.clone(), V(kulaklik.ucu.x + 1.8, 0.35, kulaklik.ucu.z + 4)], [V(96, 0.35, 48), V(-64.0, 0.35, 48), V(-64.0, 0.35, L(0)), V(px(a.x), 0.35, L(0))],
      [V(px(a.x), a.y, L(0))], 0.27); }
  { const a = ARKA.pembe, f = FIS.jak(px(a.x), a.y, 0xe0709a); // mikrofon: pembe jak
    ekle('mikrofon', 'Mikrofon kablosu', girisNok(px(a.x), a.y), { ...f, x: px(a.x), y: a.y },
      [mikrofon.ucu.clone(), V(mikrofon.ucu.x, 0.35, mikrofon.ucu.z - 3)], [V(-58, 0.35, 24), V(-63.1, 0.35, 24), V(-63.1, 0.35, L(1)), V(px(a.x), 0.35, L(1))],
      [V(px(a.x), a.y, L(1))], 0.24); }
  { const a = ARKA.usb[0], f = FIS.usb(px(a.x), a.y); // klavye: USB (1. yığının üst portu)
    ekle('klavye', 'Klavye kablosu', girisNok(px(a.x), a.y), { ...f, x: px(a.x), y: a.y },
      [klavye.arka.clone(), V(klavye.arka.x - 3, 0.35, klavye.arka.z - 4)], [V(-30, 0.35, 2), V(-62.2, 0.35, 2), V(-62.2, 0.35, L(2)), V(px(a.x), 0.35, L(2))],
      [V(px(a.x), a.y, L(2))], 0.27); }
  { const a = ARKA.usb[1], f = FIS.usb(px(a.x), a.y); // fare: USB (1. yığının alt portu)
    ekle('fare', 'Fare kablosu', girisNok(px(a.x), a.y), { ...f, x: px(a.x), y: a.y },
      [fare.arka.clone(), V(fare.arka.x, 0.35, fare.arka.z - 3)], [V(58, 0.35, -6), V(-61.3, 0.35, -6), V(-61.3, 0.35, L(3)), V(px(a.x), 0.35, L(3))],
      [V(px(a.x), a.y, L(3))], 0.25); }
  // ---- arka cihazlar: monitör, hoparlör, kamera, yazıcı arka koridordan
  { const a = ARKA.yesil, f = FIS.jak(px(a.x), a.y, 0x39b567); // hoparlör: yeşil jak
    ekle('hoparlor', 'Hoparlör kablosu', girisNok(px(a.x), a.y), { ...f, x: px(a.x), y: a.y },
      [hoparlor.arka[0].clone().add(V(-2, 0, 0)), V(-55, 0.35, -58.5)], [V(-55, 0.35, L(4)), V(px(a.x), 0.35, L(4))],
      [V(px(a.x), a.y, L(4))], 0.27); }
  { const a = ARKA.hdmi, f = FIS.hdmi(px(a.x), a.y); // monitör: HDMI
    ekle('monitor', 'Ekran kablosu (HDMI)', girisNok(px(a.x), a.y), { ...f, x: px(a.x), y: a.y },
      [monitor.arka.clone(), V(monitor.arka.x, 9, MON.z - 10), V(monitor.arka.x, 0.35, MON.z - 13)], [V(monitor.arka.x - 1, 0.35, L(5)), V(px(a.x), 0.35, L(5))],
      [V(px(a.x), a.y, L(5))], 0.3); }
  { const a = ARKA.usb[2], f = FIS.usb(px(a.x), a.y); // kamera: USB (2. yığının üst portu)
    ekle('kamera', 'Kamera kablosu', girisNok(px(a.x), a.y), { ...f, x: px(a.x), y: a.y },
      [kamera.ucu.clone(), V(6.5, 66.2, MON.z - 6), V(6.5, 30, MON.z - 6.3), V(6.5, 2.4, MON.z - 6.3), V(6.5, 0.35, MON.z - 10)], [V(6.5, 0.35, L(6)), V(px(a.x), 0.35, L(6))],
      [V(px(a.x), a.y, L(6))], 0.22); }
  { const a = ARKA.usb[4], f = FIS.usb(px(a.x), a.y); // yazıcı: USB (3. yığının üst portu)
    ekle('yazici', 'Yazıcı kablosu', girisNok(px(a.x), a.y), { ...f, x: px(a.x), y: a.y },
      [yazici.arka.clone(), V(yazici.arka.x - 1, 0.35, yazici.arka.z - 3)], [V(76, 0.35, L(7)), V(px(a.x), 0.35, L(7))],
      [V(px(a.x), a.y, L(7))], 0.27); }
  // ---- güç kablosu: kasa arkasından masa kenarına, oradan prize
  { const f = FIS.guc(px(ARKA.guc.x), ARKA.guc.y);
    kablolar.push({
      id: 'guc', ad: 'Güç kablosu (prize)', hedef: girisNok(px(ARKA.guc.x), ARKA.guc.y), fis: f.parcalar, r: 0.45,
      yol: yuvarlakYol([V(px(ARKA.guc.x), ARKA.guc.y, f.uc), V(px(ARKA.guc.x), ARKA.guc.y, -75.2), V(px(ARKA.guc.x), ARKA.guc.y - 3, -77.4), V(px(ARKA.guc.x), -12, -77.6)], 2.6),
    });
  }
  // ---- hoparlörler arası bağlantı (monitörün arkasında, kameranın kablosunun üstünden aşar)
  { const a = hoparlor.arka[0].clone().add(V(2.2, 0, 0)), b = hoparlor.arka[1].clone();
    kablolar.push({ id: 'hoparlor-arasi', ad: 'Hoparlörler arası kablo', hedef: a, fis: [], r: 0.22,
      yol: yuvarlakYol([a, V(a.x, 0.35, -57.2), V(0, 0.35, -57.2), V(3, 1.5, -57.2), V(10, 1.5, -57.2), V(13, 0.35, -57.2), V(b.x, 0.35, -57.2), b], 2.2) });
  }

  // ---- tek geometride birleştir; her kablonun köşe aralığını kaydet (vurgu için)
  const geolar = [], aralik = {};
  let n = 0;
  for (const k of kablolar) {
    const seg = Math.max(24, Math.round(k.yol.getLength() * 0.6));
    const tup = boya(new TubeGeometry(k.yol, seg, k.r, 6, false).toNonIndexed(), KABLO);
    const bas = n; n += tup.attributes.position.count; aralik[k.id] = [bas, n];
    geolar.push(tup);
    for (const p of k.fis) { const q = p.index ? p.toNonIndexed() : p; geolar.push(q); n += q.attributes.position.count; }
  }
  const mesh = new Mesh(mergeGeometries(geolar, false), M.renkli);
  mesh.name = 'kablolar'; mesh.matrixAutoUpdate = false;
  const renk = mesh.geometry.attributes.color;
  const _c = new Color();
  const boyaAralik = (id, hex) => {
    const r = aralik[id]; if (!r) return; _c.set(hex);
    for (let i = r[0]; i < r[1]; i++) renk.setXYZ(i, _c.r, _c.g, _c.b);
    renk.needsUpdate = true;
  };
  let izlenen = null;
  const izle = (id) => { if (izlenen) boyaAralik(izlenen, KABLO); izlenen = id; if (id) boyaAralik(id, VURGU); };
  return {
    mesh, kablolar: kablolar.map((k) => ({ id: k.id, ad: k.ad, hedef: k.hedef })), izle,
    izlenen: () => izlenen,
  };
}
