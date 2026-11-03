// Kasa yan kapağındaki üretici baskısı: bote logosu (kep + küre, sitenin favicon'uyla aynı çizim) ve "bote.web.tr".
// Bir kez çizilen tuval dokusu; kapaktan azıcık önde, gölge atmayan, ışına kapalı tek düzlem. Kapalıyken gövdeye (ders 1),
// açıkken kapak grubuna (ders 2) bağlanır: her an yalnız biri görünür, yani en fazla 1 ek çizim çağrısı.
import { Mesh, PlaneGeometry, MeshBasicMaterial } from 'three';
import { tuval, doku, YAZI } from './yardimci.js';

const GEN = 30, YUK = 15;      // düzlem boyutu (1 birim = 5 mm): 150 x 75 mm
export const LOGO_X = -20.03;  // kasa-yerel: yan kapağın dış yüzü x = -20, baskı 0.03 önde
export const LOGO_Y = 24;      // orta-alt bölge

function cizim() {
  const [c, x] = tuval(512, 256);
  const mat = 'rgba(176,182,194,0.78)';
  x.fillStyle = mat; x.strokeStyle = mat; x.lineCap = 'round'; x.lineJoin = 'round';
  // logo (300x300 favicon'un ölçeklenmiş hâli): sol blok, merkez (cx, cy), yükseklik ~110 px
  const s = 0.38, ox = 62, oy = 70;
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
  const yy = gy - 4, xx = 162;
  x.fillText('bote', xx, yy);
  const w = x.measureText('bote').width;
  x.fillStyle = 'rgba(176,182,194,0.55)'; x.fillText('.web.tr', xx + w, yy);
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
  const acik = yap(-0.28, LOGO_Y, kapakZ); // kapak dış yüzü: grup x = -19.75, kapak yarım kalınlık 0.25
  return { kapali, acik };
}
