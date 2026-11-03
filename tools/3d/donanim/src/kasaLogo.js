// Kasa yan kapağındaki üretici baskısı: bote logosu (kep + küre, sitenin favicon'uyla aynı çizim) ve "bote.web.tr".
// Bir kez çizilen tuval dokusu; kapaktan azıcık önde, gölge atmayan, ışına kapalı tek düzlem. Kapalıyken gövdeye (ders 1),
// açıkken kapak grubuna (ders 2) bağlanır: her an yalnız biri görünür, yani en fazla 1 ek çizim çağrısı.
import { Mesh, PlaneGeometry, MeshBasicMaterial, BufferGeometry, BufferAttribute } from 'three';
import { tuval, doku, YAZI } from './yardimci.js';

const GEN = 38, YUK = 19;      // düzlem boyutu (1 birim = 5 mm): 190 x 95 mm
export const LOGO_X = -20.03;  // kasa-yerel: yan kapağın dış yüzü x = -20, baskı 0.03 önde
export const LOGO_Y = 45.5;    // kapağın ortası (Ahmet 03.11: ortaya alınsın)

function cizim() {
  const [c, x] = tuval(512, 256);
  const mat = 'rgba(176,182,194,0.78)';
  x.fillStyle = mat; x.strokeStyle = mat; x.lineCap = 'round'; x.lineJoin = 'round';
  // logo (300x300 favicon'un ölçeklenmiş hâli): sol blok, merkez (cx, cy), yükseklik ~110 px
  const s = 0.38, ox = 52, oy = 64;
  const P = (px, py) => [ox + px * s, oy + py * s];
  // kep: elmas tepe + alt gövde + püskül
  x.beginPath(); x.moveTo(...P(150, 10)); x.lineTo(...P(270, 42)); x.lineTo(...P(150, 76)); x.lineTo(...P(30, 42)); x.closePath(); x.fill();
  x.beginPath(); x.moveTo(...P(78, 62)); x.lineTo(...P(78, 112)); x.quadraticCurveTo(...P(150, 130), ...P(222, 112)); x.lineTo(...P(222, 62)); x.lineTo(...P(150, 82)); x.closePath(); x.fill();
  x.lineWidth = 11 * s; x.beginPath(); x.moveTo(...P(40, 48)); x.lineTo(...P(40, 130)); x.stroke();
  // küre: daire, dikey elips, ortadaki dikey çizgi ve iki enlem
  const [gx, gy] = P(150, 192), r = 90 * s;
  x.lineWidth = 12 * s;
  x.beginPath(); x.arc(gx, gy, r, 0, Math.PI * 2); x.stroke();
  x.beginPath(); x.ellipse(gx, gy, r * 0.42, r, 0, 0, Math.PI * 2); x.stroke();
  x.beginPath(); x.moveTo(gx, gy - r); x.lineTo(gx, gy + r); x.moveTo(gx - r, gy); x.lineTo(gx + r, gy); x.stroke();
  x.beginPath(); x.moveTo(gx - r * 0.86, gy - r * 0.5); x.lineTo(gx + r * 0.86, gy - r * 0.5); x.moveTo(gx - r * 0.86, gy + r * 0.5); x.lineTo(gx + r * 0.86, gy + r * 0.5); x.stroke();
  // yazı: "bote" ince, ".web.tr" daha silik
  x.textBaseline = 'middle'; x.textAlign = 'left';
  x.font = `600 56px ${YAZI}`; x.fillStyle = mat;
  const yy = gy - 22, xx = 152;
  x.fillText('bote', xx, yy);
  const w = x.measureText('bote').width;
  x.fillStyle = 'rgba(176,182,194,0.55)'; x.fillText('.web.tr', xx + w, yy);
  // alt satır: bölümün adı
  x.font = `600 33px ${YAZI}`; x.fillStyle = 'rgba(176,182,194,0.66)';
  x.fillText('Simülasyonlu Eğitim', xx + 2, yy + 50);
  return c;
}

// kapali: kasa-yerel konumlu düzlem (gövdenin çocuğu); acik: kapak grubuna bağlanacak düzlem (kapak grubu yerelinde).
export function kasaLogoYap(govde, kapakZ = 43) {
  const harita = doku(cizim(), { aniso: true });
  const mal = new MeshBasicMaterial({ map: harita, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  const geo = new PlaneGeometry(GEN, YUK);
  const yap = (x, y, z) => {
    const m = new Mesh(geo, mal);
    m.rotation.y = -Math.PI / 2; m.position.set(x, y, z);
    m.castShadow = false; m.receiveShadow = false; m.raycast = () => {}; m.name = 'kasa-logo';
    return m;
  };
  const kapali = yap(LOGO_X, LOGO_Y, 0); govde.add(kapali);
  // Açık kapak: dış yüz (x = -0.28) ve iç yüz (x = +0.28) aynı geometride, tek çizim çağrısı.
  // Kapak açılınca iç yüzde de baskı görünür (Ahmet 03.11: "kapaklarda önlü arkalı olsun").
  const acik = new Mesh(ikiYuz(kapakZ), mal);
  acik.castShadow = false; acik.receiveShadow = false; acik.raycast = () => {}; acik.name = 'kasa-logo';
  return { kapali, acik };
}

// İki düzlemi tek BufferGeometry'de birleştirir: her yüz kendi tarafına bakar, yazı iki taraftan da düz okunur.
function ikiYuz(z) {
  const dis = new PlaneGeometry(GEN, YUK).rotateY(-Math.PI / 2).translate(-0.28, LOGO_Y, z);
  const ic = new PlaneGeometry(GEN, YUK).rotateY(Math.PI / 2).translate(0.28, LOGO_Y, z);
  const geo = new BufferGeometry();
  for (const ad of ['position', 'normal', 'uv']) {
    const a = dis.attributes[ad], b = ic.attributes[ad];
    const v = new Float32Array(a.array.length + b.array.length);
    v.set(a.array); v.set(b.array, a.array.length);
    geo.setAttribute(ad, new BufferAttribute(v, a.itemSize));
  }
  const n = dis.attributes.position.count, ia = dis.index.array, ib = ic.index.array;
  const idx = new Uint16Array(ia.length + ib.length);
  idx.set(ia); for (let i = 0; i < ib.length; i++) idx[ia.length + i] = ib[i] + n;
  geo.setIndex(new BufferAttribute(idx, 1));
  dis.dispose(); ic.dispose();
  return geo;
}
