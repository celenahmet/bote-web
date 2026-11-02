// Masa ve çevre birimleri: masa, monitör, web kamerası, klavye, fare, hoparlör, mikrofon, kulaklık, yazıcı, USB bellek.
// Her yapıcı { grup, ... } döndürür; vekiller (dokunma kutuları) parçanın grubuna çocuk olarak eklenir (parça oynayınca birlikte gider).
// Kesif noktaları { id, nesne, yerel } biçimindedir: işaret parçayla birlikte hareket eder, parça gizliyken görünmez.
import {
  Group, Mesh, Vector3, Matrix4, MeshStandardMaterial, MeshBasicMaterial, InstancedMesh, BoxGeometry, CylinderGeometry, SphereGeometry, TorusGeometry, ExtrudeGeometry, Shape, DoubleSide,
  M, malzemeler, kutu, yuvarlak, silindir, don, yer, birlestir, tuval, doku, YAZI, vekil, ornek, kabloGeo, kesifNok,
} from './yardimci.js';
import { CapsuleGeometry, PlaneGeometry, RingGeometry, Color, Quaternion } from 'three';
import { MASA, MON, HOPARLOR, KLAVYE, FARE, YAZICI, MIKROFON, KULAKLIK, KAMERA_PARCA } from './yerlesim.js';
import { ekranDokusu } from './ekran.js';
import { dokular } from './doku.js';

const kes = kesifNok;

// ------------------------------------------------------------------ masa
export function masaYap() {
  malzemeler();
  const D = dokular().masa;
  const mal = new MeshStandardMaterial({ map: D.map, normalMap: D.normalMap, normalScale: D.normalScale, roughness: 0.62 });
  const m = new Mesh(yuvarlak(MASA.x1 - MASA.x0, MASA.kalin, MASA.z1 - MASA.z0, 1.0, 0, MASA.ust - MASA.kalin / 2, (MASA.z0 + MASA.z1) / 2, 3), mal);
  m.name = 'masa'; m.receiveShadow = false; m.castShadow = false;
  return m;
}

// ------------------------------------------------------------------ monitör
export function monitorYap() {
  malzemeler();
  const g = new Group(); g.name = 'monitor'; g.position.set(MON.x, 0, MON.z);
  g.add(birlestir([yuvarlak(95, 55, 3.2, 0.9, 0, 39, 0, 3), yuvarlak(64, 38, 3.6, 1.8, 0, 40, -3.1, 3)], M.plastik));
  g.add(birlestir([yuvarlak(34, 1.2, 22, 0.5, 0, 0.6, 3, 3), yuvarlak(7.5, 12.8, 2.4, 0.5, 0, 7.6, -3.8, 3), yuvarlak(12, 3.4, 6.4, 0.9, 0, 12.6, -3.6, 3)], M.alumin));
  g.add(birlestir([kutu(7, 3.6, 0.5, 14, 24, -4.9), kutu(5.4, 1.8, 0.5, -16, 21.5, -4.9), kutu(2.4, 1.3, 0.4, -16, 22.1, -5.2)], M.cip));
  const ek = ekranDokusu();
  const ekran = new Mesh(new PlaneGeometry(92, 51.8), new MeshBasicMaterial({ map: ek.tex, toneMapped: false }));
  ekran.position.set(0, 39.4, 1.62); g.add(ekran);
  const led = new Mesh(new BoxGeometry(0.9, 0.35, 0.2), M.ledYesil); led.position.set(40.5, 12.8, 1.66); g.add(led);
  const v1 = vekil({ kesif: 'monitor', parca: 'monitor' }, 95, 66, 24, 0, 33, 1);
  const v2 = vekil({ kesif: 'ekran', parca: 'monitor' }, 92, 51.8, 1.2, 0, 39.4, 1.7, 0);
  g.add(v1, v2);
  return {
    grup: g, ekran: ek, led,
    kesif: [kes(g, 'monitor', 30, 56, 3, [0, 0.3, 1]), kes(g, 'ekran', -8, 44, 2.4, [0, 0, 1])],
    ledAyarla: (acik) => { led.material = acik ? M.ledYesil : M.ledKapali; },
    arka: new Vector3(MON.x - 14, 14.5, MON.z - 4.9),
  };
}

// ------------------------------------------------------------------ web kamerası
export function kameraYap() {
  malzemeler();
  const g = new Group(); g.name = 'kamera'; g.position.set(KAMERA_PARCA.x, KAMERA_PARCA.y, KAMERA_PARCA.z);
  g.add(birlestir([yuvarlak(4.2, 1.2, 3.2, 0.4, 0, 0.6, -0.4), yuvarlak(8.4, 3.4, 3.4, 1.3, 0, 2.9, 0.4, 3)], M.plastik));
  const lens = new Mesh(silindir(0.95, 0.5, 0, 2.9, 2.2, { eksen: 'z', seg: 20 }), M.lensCam); g.add(lens);
  const halka = new Mesh(new TorusGeometry(1.05, 0.14, 8, 24), M.alumin); halka.position.set(0, 2.9, 2.18); g.add(halka);
  const led = new Mesh(new BoxGeometry(0.5, 0.3, 0.15), M.ledKapali); led.position.set(2.6, 3.7, 2.15); g.add(led);
  g.add(vekil({ kesif: 'web-kamerasi', parca: 'kamera' }, 9, 5, 5, 0, 2.4, 0.3));
  return { grup: g, led, kesif: [kes(g, 'web-kamerasi', 0, 5.2, 1, [0, 0.3, 1])], ledAyarla: (acik) => { led.material = acik ? M.ledYesil : M.ledKapali; }, ucu: new Vector3(KAMERA_PARCA.x, KAMERA_PARCA.y + 1, KAMERA_PARCA.z - 1.6) };
}

// ------------------------------------------------------------------ klavye (104 tuş: bir InstancedMesh + tek legend atlası)
const U = 3.81, TUS_Y = 1.9, TABAN_UST = 2.2;
function dizilim() {
  const k = [];
  const e = (ad, x, y, w = 1, h = 1, tur = 'harf') => k.push({ ad, x, y, w, h, tur });
  e('Esc', 0, 0, 1, 1, 'ozel');
  [2, 3, 4, 5].forEach((x, i) => e('F' + (i + 1), x, 0, 1, 1, 'islev'));
  [6.5, 7.5, 8.5, 9.5].forEach((x, i) => e('F' + (i + 5), x, 0, 1, 1, 'islev'));
  [11, 12, 13, 14].forEach((x, i) => e('F' + (i + 9), x, 0, 1, 1, 'islev'));
  ['PrtSc', 'ScrLk', 'Pause'].forEach((a, i) => e(a, 15.25 + i, 0, 1, 1, 'islev'));
  ['"', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '-'].forEach((a, i) => e(a, i, 1.5, 1, 1, i === 0 || i > 10 ? 'harf' : 'rakam'));
  e('Geri', 13, 1.5, 2, 1, 'ozel');
  e('Tab', 0, 2.5, 1.5, 1, 'ozel');
  'QWERTYUIOPĞÜ'.split('').forEach((a, i) => e(a, 1.5 + i, 2.5));
  e(',', 13.5, 2.5, 1.5, 1);
  e('Caps', 0, 3.5, 1.75, 1, 'ozel');
  'ASDFGHJKLŞİ'.split('').forEach((a, i) => e(a, 1.75 + i, 3.5));
  e('Enter', 12.75, 3.5, 2.25, 1, 'ozel');
  e('Shift', 0, 4.5, 2.25, 1, 'ozel');
  'ZXCVBNMÖÇ.'.split('').forEach((a, i) => e(a, 2.25 + i, 4.5));
  e('Shift', 12.25, 4.5, 2.75, 1, 'ozel');
  e('Ctrl', 0, 5.5, 1.25, 1, 'ozel'); e('', 1.25, 5.5, 1.25, 1, 'ozel'); e('Alt', 2.5, 5.5, 1.25, 1, 'ozel');
  e(' ', 3.75, 5.5, 6.25, 1, 'bosluk');
  e('Alt', 10, 5.5, 1.25, 1, 'ozel'); e('', 11.25, 5.5, 1.25, 1, 'ozel'); e('Menü', 12.5, 5.5, 1.25, 1, 'ozel'); e('Ctrl', 13.75, 5.5, 1.25, 1, 'ozel');
  ['Ins', 'Home', 'PgUp'].forEach((a, i) => e(a, 15.25 + i, 1.5, 1, 1, 'ozel'));
  ['Del', 'End', 'PgDn'].forEach((a, i) => e(a, 15.25 + i, 2.5, 1, 1, 'ozel'));
  e('yukari', 16.25, 4.5, 1, 1, 'ok'); e('sol', 15.25, 5.5, 1, 1, 'ok'); e('asagi', 16.25, 5.5, 1, 1, 'ok'); e('sag', 17.25, 5.5, 1, 1, 'ok');
  ['Num', '/', '*', '-'].forEach((a, i) => e(a, 18.5 + i, 1.5, 1, 1, i ? 'rakam' : 'ozel'));
  ['7', '8', '9'].forEach((a, i) => e(a, 18.5 + i, 2.5, 1, 1, 'rakam')); e('+', 21.5, 2.5, 1, 2, 'rakam');
  ['4', '5', '6'].forEach((a, i) => e(a, 18.5 + i, 3.5, 1, 1, 'rakam'));
  ['1', '2', '3'].forEach((a, i) => e(a, 18.5 + i, 4.5, 1, 1, 'rakam')); e('Enter', 21.5, 4.5, 1, 2, 'ozel');
  e('0', 18.5, 5.5, 2, 1, 'rakam'); e('.', 20.5, 5.5, 1, 1, 'rakam');
  return k;
}
const OZEL_KESIF = { Esc: 'tus-esc', Shift: 'tus-shift', Ctrl: 'tus-ctrl', Enter: 'tus-enter', ' ': 'tus-bosluk' };
const tusKesif = (t) => OZEL_KESIF[t.ad] || (t.tur === 'harf' || t.tur === 'rakam' ? 'tus-harf' : 'tus-ozel');

export function klavyeYap() {
  malzemeler();
  const g = new Group(); g.name = 'klavye'; g.position.set(KLAVYE.x, 0, KLAVYE.z); g.rotation.x = 0.07;
  const GEN = 22.5 * U, YUK = 6.5 * U, X0 = -GEN / 2, Z0 = -YUK / 2;
  const taban = new Mesh(yuvarlak(GEN + 3.0, TABAN_UST, YUK + 3.0, 0.9, 0, TABAN_UST / 2, 0, 3), M.plastikAcik); g.add(taban);
  const tuslar = dizilim();
  // tuş kapağı: kesik piramit (üst daha dar); birim boyutta, örnek matrisi ölçekler
  const kap = new CylinderGeometry(1.98, 2.5, TUS_Y, 4, 1); kap.rotateY(Math.PI / 4);
  const kapMal = new MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
  const matr = [], renk = [], taban0 = [];
  const acik = new Color(0xe9ecf0), koyu = new Color(0xc2c8d1);
  for (const t of tuslar) {
    const w = t.w * U - 0.34, d = t.h * U - 0.34;
    const m = new Matrix4().compose(new Vector3(X0 + (t.x + t.w / 2) * U, TABAN_UST + 0.15 + TUS_Y / 2, Z0 + (t.y + t.h / 2) * U), new Quaternion(), new Vector3(w / 3.5, 1, d / 3.5));
    matr.push(m); taban0.push(m.clone()); renk.push(t.tur === 'harf' || t.tur === 'rakam' || t.tur === 'bosluk' ? acik : koyu);
  }
  const kaps = ornek(kap, kapMal, matr, renk);
  kaps.name = 'tuslar'; g.add(kaps);
  // legend atlası (tek tuval; tuşların üstüne 0,03 birim yukarıda şeffaf düzlem)
  const PW = 2048, PH = Math.round(PW * (YUK + 0) / GEN);
  const [c, x] = tuval(PW, PH), s = PW / GEN;
  x.textAlign = 'center'; x.textBaseline = 'middle';
  tuslar.forEach((t) => {
    const cx = (t.x + t.w / 2) * U * s, cy = (t.y + t.h / 2) * U * s;
    x.fillStyle = '#20242c'; x.strokeStyle = '#20242c';
    if (t.tur === 'ok') {
      const r = 0.95 * s; x.beginPath();
      const yon = { yukari: [0, -1], asagi: [0, 1], sol: [-1, 0], sag: [1, 0] }[t.ad];
      const px = -yon[1], py = yon[0];
      x.moveTo(cx + yon[0] * r, cy + yon[1] * r); x.lineTo(cx - yon[0] * r * 0.7 + px * r, cy - yon[1] * r * 0.7 + py * r); x.lineTo(cx - yon[0] * r * 0.7 - px * r, cy - yon[1] * r * 0.7 - py * r); x.closePath(); x.fill();
      return;
    }
    if (t.ad === 'Geri') { x.lineWidth = 0.32 * s; x.lineCap = 'round'; x.beginPath(); x.moveTo(cx + 1.6 * s, cy); x.lineTo(cx - 1.6 * s, cy); x.moveTo(cx - 1.6 * s, cy); x.lineTo(cx - 0.6 * s, cy - 0.9 * s); x.moveTo(cx - 1.6 * s, cy); x.lineTo(cx - 0.6 * s, cy + 0.9 * s); x.stroke(); return; }
    if (!t.ad.trim()) return;
    const uzun = t.ad.length > 2;
    x.font = `${t.tur === 'harf' || t.tur === 'rakam' ? 700 : 600} ${(uzun ? 1.05 : 1.55) * s}px ${YAZI}`;
    x.fillText(t.ad === 'Num' ? 'Num' : t.ad, cx, cy + 0.05 * s);
  });
  const legend = new Mesh(new PlaneGeometry(GEN, YUK), new MeshBasicMaterial({ map: doku(c), transparent: true, depthWrite: false, toneMapped: false }));
  legend.rotation.x = -Math.PI / 2; legend.position.set(0, TABAN_UST + 0.15 + TUS_Y + 0.04, 0); legend.renderOrder = 1; g.add(legend);
  // vekiller: her tuş (en küçük hacim kazanır) + klavyenin tamamı
  const v = [];
  tuslar.forEach((t, i) => {
    const o = vekil({ kesif: tusKesif(t), parca: 'klavye', tus: t.ad, tusNo: i, tusTur: t.tur }, t.w * U - 0.3, 2.4, t.h * U - 0.3, X0 + (t.x + t.w / 2) * U, TABAN_UST + 1.1, Z0 + (t.y + t.h / 2) * U);
    g.add(o); v.push(o);
  });
  g.add(vekil({ kesif: 'klavye', parca: 'klavye' }, GEN + 3, 5, YUK + 3, 0, 2, 0));
  const tusBas = (i, bas) => {
    const m = taban0[i].clone(); if (bas) m.elements[13] -= 0.6;
    kaps.setMatrixAt(i, m);
    kaps.setColorAt(i, bas ? new Color(0x7c4dff) : (tuslar[i].tur === 'harf' || tuslar[i].tur === 'rakam' || tuslar[i].tur === 'bosluk' ? acik : koyu));
    kaps.instanceMatrix.needsUpdate = true; kaps.instanceColor.needsUpdate = true;
  };
  const ara = (ad) => tuslar.findIndex((t) => t.ad === ad);
  // yerel nokta (ad -> klavye yerel)
  const nokta = (ad) => { const t = tuslar[ara(ad)]; return t ? new Vector3(X0 + (t.x + t.w / 2) * U, TABAN_UST + TUS_Y + 1.2, Z0 + (t.y + t.h / 2) * U) : new Vector3(); };
  const noktaI = (i) => { const t = tuslar[i]; return new Vector3(X0 + (t.x + t.w / 2) * U, TABAN_UST + TUS_Y + 1.2, Z0 + (t.y + t.h / 2) * U); };
  return {
    grup: g, tuslar, tusBas, ara, nokta, noktaI,
    kesif: [kes(g, 'klavye', 0, 7, 12.5), kes(g, 'tus-esc', ...nokta('Esc').toArray()), kes(g, 'tus-shift', ...nokta('Shift').toArray()), kes(g, 'tus-ctrl', ...nokta('Ctrl').toArray()), kes(g, 'tus-enter', X0 + 13.9 * U, 6, nokta('Enter').z), kes(g, 'tus-bosluk', 0, 6, nokta(' ').z)],
    arka: new Vector3(KLAVYE.x - 8, 1.1, KLAVYE.z - YUK / 2 - 0.2),
  };
}

// ------------------------------------------------------------------ fare
function kirp(p, a, b, c) { // yarım düzlem kırpma: a*x + b*y <= c
  const o = [];
  for (let i = 0; i < p.length; i++) {
    const P = p[i], Q = p[(i + 1) % p.length], dp = a * P[0] + b * P[1] - c, dq = a * Q[0] + b * Q[1] - c;
    if (dp <= 0) o.push(P);
    if ((dp < 0 && dq > 0) || (dp > 0 && dq < 0)) { const t = dp / (dp - dq); o.push([P[0] + (Q[0] - P[0]) * t, P[1] + (Q[1] - P[1]) * t]); }
  }
  return o;
}
function yuzey(p, derinlik, bevel) {
  const s = new Shape(); p.forEach(([a, b], i) => (i ? s.lineTo(a, b) : s.moveTo(a, b))); s.closePath();
  const g = new ExtrudeGeometry(s, { depth: derinlik, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 1 });
  g.rotateX(-Math.PI / 2); g.translate(0, bevel, 0); return g;
}
export function fareYap() {
  malzemeler();
  const g = new Group(); g.name = 'fare'; g.position.set(FARE.x, 0, FARE.z);
  const A = 5.0, B = 9.6, n = 2.7, pts = [];
  for (let i = 0; i < 48; i++) { const t = (i / 48) * Math.PI * 2, c = Math.cos(t), s = Math.sin(t); pts.push([A * Math.sign(c) * Math.pow(Math.abs(c), 2 / n), B * Math.sign(s) * Math.pow(Math.abs(s), 2 / n) * (Math.sign(s) > 0 ? 0.92 : 1)]); }
  // y>0 ön (-z) tarafı: düğmeler önde
  const govde = new Mesh(yuzey(pts, 1.6, 0.9), new MeshStandardMaterial({ color: 0xe6e9ee, roughness: 0.45 })); g.add(govde);
  const sol = kirp(kirp(kirp(pts, 1, 0, -0.1), 0, -1, -1.2), 0, 1, 9.99), sag = kirp(kirp(kirp(pts, -1, 0, -0.1), 0, -1, -1.2), 0, 1, 9.99);
  const dugmeMal = new MeshStandardMaterial({ color: 0xf3f5f8, roughness: 0.4 });
  const dSol = new Mesh(yuzey(sol.map(([a, b]) => [a * 0.97 - 0.12, b * 0.97 - 0.05]), 0.2, 0.85), dugmeMal); dSol.position.y = 0.55;
  const dSag = new Mesh(yuzey(sag.map(([a, b]) => [a * 0.97 + 0.12, b * 0.97 - 0.05]), 0.2, 0.85), dugmeMal); dSag.position.y = 0.55;
  g.add(dSol, dSag);
  const tekerlek = new Mesh(silindir(0.85, 1.0, 0, 3.55, -4.4, { eksen: 'x', seg: 16 }), M.fanCerceve); g.add(tekerlek);
  g.rotation.y = 0; // ön = -z (monitöre doğru)
  g.add(vekil({ kesif: 'fare', parca: 'fare' }, 12.2, 4.2, 20, 0, 2, 0));
  g.add(vekil({ kesif: 'fare-tekerlek', parca: 'fare', tekerlek: true }, 2.2, 2.4, 3.2, 0, 3.6, -4.4));
  // yerel eksende şekil: y -> world -z olacak şekilde (rotateX(-PI/2) ile y -> -z); ön düğmeler y>0 -> -z
  return {
    grup: g, dSol, dSag, tekerlek,
    kesif: [kes(g, 'fare', 0, 5.4, 4), kes(g, 'fare-tekerlek', 0, 4.8, -4.4)],
    tikla: (sol_) => { (sol_ ? dSol : dSag).position.y = 0.3; },
    birak: () => { dSol.position.y = 0.55; dSag.position.y = 0.55; },
    arka: new Vector3(FARE.x, 1.2, FARE.z - 7.4),
  };
}

// ------------------------------------------------------------------ hoparlör (çift)
export function hoparlorYap() {
  malzemeler();
  const grup = new Group(); grup.name = 'hoparlorler';
  const tek = [], halkalar = [], dalgaGeo = new RingGeometry(0.92, 1, 48);
  const koni = new MeshStandardMaterial({ color: 0x2b2f36, roughness: 0.7 });
  const mal = new MeshStandardMaterial({ color: 0x353a42, roughness: 0.55 });
  HOPARLOR.forEach((p, i) => {
    const g = new Group(); g.position.set(p.x, 0, p.z); g.name = 'hoparlor' + (i + 1);
    g.add(new Mesh(yuvarlak(13, 26, 15, 1.2, 0, 13.4, 0, 3), mal));
    g.add(birlestir([silindir(4.4, 0.7, 0, 8.5, 7.5, { eksen: 'z', seg: 28, rUst: 3.4 }), silindir(1.7, 0.6, 0, 19.5, 7.5, { eksen: 'z', seg: 20, rUst: 1.5 }), silindir(1.4, 0.8, 0, 8.5, 7.9, { eksen: 'z', seg: 14, rUst: 0.9 })], koni));
    const halka = (r, t, y) => { const m = new Mesh(new TorusGeometry(r, t, 8, 32), M.alumin); m.position.set(0, y, 7.5); return m; };
    g.add(halka(4.6, 0.22, 8.5), halka(1.95, 0.16, 19.5));
    if (i === 0) { const led = new Mesh(new BoxGeometry(0.7, 0.35, 0.2), M.ledYesil); led.position.set(4, 2.2, 7.55); g.add(led); g.add(new Mesh(silindir(0.9, 0.7, -4, 2.2, 7.7, { eksen: 'z', seg: 14 }), M.alumin)); }
    g.add(vekil({ kesif: 'hoparlor', parca: 'hoparlor' }, 13.2, 26.4, 15.4, 0, 13.4, 0));
    grup.add(g); tek.push(g);
    // ses dalgası halkaları (yalnız çalarken görünür)
    const hl = [];
    for (let k = 0; k < 3; k++) { const m = new Mesh(dalgaGeo, new MeshBasicMaterial({ color: 0x7c4dff, transparent: true, opacity: 0, depthWrite: false, side: DoubleSide })); m.visible = false; m.raycast = () => {}; m.position.set(p.x, 8.5, p.z + 8); grup.add(m); hl.push(m); }
    halkalar.push(hl);
  });
  return { grup, tek, halkalar, kesif: HOPARLOR.map((p, i) => kes(tek[i], 'hoparlor', 0, 28.4, 0)), arka: HOPARLOR.map((p) => new Vector3(p.x, 3, p.z - 7.2)) };
}

// ------------------------------------------------------------------ masaüstü mikrofon
export function mikrofonYap() {
  malzemeler();
  const g = new Group(); g.name = 'mikrofon'; g.position.set(MIKROFON.x, 0, MIKROFON.z);
  const [c, x] = tuval(128, 128); x.fillStyle = '#4a4f59'; x.fillRect(0, 0, 128, 128); x.fillStyle = '#1b1d22';
  for (let a = 0; a < 128; a += 8) for (let b = 0; b < 128; b += 8) { x.beginPath(); x.arc(a + 4, b + 4, 2.1, 0, Math.PI * 2); x.fill(); }
  const t = doku(c, { tekrar: true }); t.repeat.set(6, 4);
  g.add(birlestir([silindir(4.6, 0.9, 0, 0.45, 0, { seg: 32, rUst: 4.2 }), silindir(0.55, 12, 0, 6.8, 0)], M.aluminKoyu));
  const kafa = new Group(); kafa.position.set(0, 14.6, 0); kafa.rotation.x = 0.35;
  kafa.add(new Mesh(new CapsuleGeometry(2.3, 5.4, 6, 20), new MeshStandardMaterial({ map: t, roughness: 0.45, metalness: 0.5 })));
  const band = new Mesh(new TorusGeometry(2.36, 0.26, 8, 28), M.alumin); band.rotation.x = Math.PI / 2; kafa.add(band);
  g.add(kafa);
  const led = new Mesh(new BoxGeometry(0.8, 0.3, 0.3), M.ledKapali); led.position.set(0, 0.9, 4.3); g.add(led);
  g.add(vekil({ kesif: 'mikrofon', parca: 'mikrofon' }, 10, 20, 10, 0, 10, 0));
  return { grup: g, led, kesif: [kes(g, 'mikrofon', 0, 21.5, 0)], ledAyarla: (a) => { led.material = a ? M.ledKirmizi : M.ledKapali; }, ucu: new Vector3(MIKROFON.x, 0.5, MIKROFON.z - 3.8), kafa: new Vector3(MIKROFON.x, 15.6, MIKROFON.z + 1) };
}

// ------------------------------------------------------------------ kulaklık (mikrofonlu)
export function kulaklikYap() {
  malzemeler();
  const g = new Group(); g.name = 'kulaklik'; g.position.set(KULAKLIK.x, 0, KULAKLIK.z);
  const yay = new Mesh(new TorusGeometry(7.6, 0.85, 10, 32, Math.PI), M.plastik); yay.position.y = 4.2; g.add(yay);
  const ped = new Mesh(new BoxGeometry(6, 0.5, 1.6), M.plastikAcik); ped.position.y = 11.5; ped.scale.set(1, 1, 1); g.add(ped);
  const kupMal = new MeshStandardMaterial({ color: 0x22252b, roughness: 0.55, emissive: 0x7c4dff, emissiveIntensity: 0 });
  const ucMal = new MeshStandardMaterial({ color: 0x2b2e36, roughness: 0.9, emissive: 0xf57c00, emissiveIntensity: 0 });
  for (const s of [-1, 1]) {
    g.add(new Mesh(silindir(3.9, 2.8, s * 8.2, 4.2, 0, { eksen: 'x', seg: 28 }), kupMal));
    const mm = new Mesh(new TorusGeometry(3.3, 0.95, 8, 28), new MeshStandardMaterial({ color: 0x3a3e47, roughness: 0.9 })); mm.rotation.y = Math.PI / 2; mm.position.set(s * 6.6, 4.2, 0); g.add(mm);
    g.add(new Mesh(silindir(1.9, 0.4, s * 9.7, 4.2, 0, { eksen: 'x', seg: 20 }), M.alumin));
  }
  // mikrofon kolu
  const kol = new Mesh(kabloGeo([[-9.7, 3.4, 0.4], [-10.6, 2.2, 2.6], [-9.0, 1.2, 6.2], [-5.6, 1.5, 8.4]], 0.28), M.kablo); g.add(kol);
  const uc = new Mesh(new CapsuleGeometry(0.85, 1.4, 4, 12), ucMal); uc.rotation.z = Math.PI / 2; uc.rotation.y = 0.4; uc.position.set(-4.7, 1.6, 8.6); g.add(uc);
  g.add(vekil({ kesif: 'kulaklik', parca: 'kulaklik' }, 22, 14, 7, 0, 7, 0));
  g.add(vekil({ kesif: 'kulaklik-mikrofon', parca: 'kulaklik' }, 4, 2.4, 3, -4.7, 1.7, 8.6));
  return { grup: g, kupMal, ucMal, kesif: [kes(g, 'kulaklik', 0, 15, 0), kes(g, 'kulaklik-mikrofon', -4.7, 4, 8.6)], ucu: new Vector3(KULAKLIK.x + 9.7, 4.2, KULAKLIK.z) };
}

// ------------------------------------------------------------------ yazıcı
export function yaziciYap() {
  malzemeler();
  const g = new Group(); g.name = 'yazici'; g.position.set(YAZICI.x, 0, YAZICI.z);
  const govde = new MeshStandardMaterial({ color: 0xdfe2e7, roughness: 0.5 });
  const ust = new MeshStandardMaterial({ color: 0xf1f3f6, roughness: 0.45 });
  g.add(new Mesh(yuvarlak(36, 8.4, 27, 1.5, 0, 4.2, 0, 3), govde));
  g.add(new Mesh(yuvarlak(35.4, 3.2, 26, 1.2, 0, 10.0, -0.6, 3), ust));
  g.add(birlestir([kutu(28, 1.5, 2.2, 0, 3.0, 13.2), kutu(24, 0.3, 11, 0, 14.5, -10.5)], M.cip));
  // çıkış tepsisi ve arka giriş desteği
  g.add(new Mesh(yuvarlak(27, 0.5, 11, 0.2, 0, 1.7, 18.4), M.plastikBeyaz));
  const giris = new Mesh(yuvarlak(24, 0.5, 14, 0.2, 0, 17.0, -15.5), M.plastikBeyaz); giris.rotation.x = -0.9; giris.position.set(0, 16.2, -17); g.add(giris);
  // kontrol paneli
  const panel = new Group(); panel.position.set(8.5, 11.9, 8.4); panel.rotation.x = -0.18;
  panel.add(new Mesh(yuvarlak(13, 0.6, 6.2, 0.3), M.plastik));
  const ekr = new Mesh(new BoxGeometry(6.2, 0.12, 3), new MeshBasicMaterial({ color: 0x1f3a6e })); ekr.position.set(-2.4, 0.34, 0); panel.add(ekr);
  const led = new Mesh(new BoxGeometry(0.6, 0.12, 0.6), M.ledKapali); led.position.set(4.2, 0.34, -1.2); panel.add(led);
  for (let i = 0; i < 2; i++) { const d = new Mesh(silindir(0.6, 0.14, 3.2 + i * 1.6, 0.34, 1.2, { seg: 14 }), M.alumin); panel.add(d); }
  g.add(panel);
  // kâğıt
  const [c, x] = tuval(512, 700);
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, 512, 700);
  x.fillStyle = '#7c4dff'; x.fillRect(50, 56, 412, 10);
  x.fillStyle = '#20242c'; x.font = `700 58px ${YAZI}`; x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.fillText('Merhaba!', 50, 148);
  x.fillStyle = '#6b7384'; for (let i = 0; i < 6; i++) x.fillRect(50, 200 + i * 38, i === 5 ? 220 : 412, 12);
  x.fillStyle = '#a2c8f3'; x.fillRect(50, 450, 412, 190); x.fillStyle = '#6ea4e8'; x.beginPath(); x.moveTo(50, 640); x.lineTo(200, 540); x.lineTo(320, 600); x.lineTo(400, 530); x.lineTo(462, 580); x.lineTo(462, 640); x.closePath(); x.fill();
  const kagit = new Mesh(new PlaneGeometry(25, 34.5), new MeshStandardMaterial({ map: doku(c), roughness: 0.9, side: DoubleSide }));
  kagit.rotation.x = -Math.PI / 2; kagit.position.set(0, 2.45, 13.5 - 17.25 - 2); kagit.visible = false; g.add(kagit);
  g.add(vekil({ kesif: 'yazici', parca: 'yazici' }, 36.4, 13, 27.4, 0, 6.5, 0));
  return {
    grup: g, kagit, led, kesif: [kes(g, 'yazici', 0, 13.5, 2)],
    ledAyarla: (a) => { led.material = a ? M.ledYesil : M.ledKapali; },
    arka: new Vector3(YAZICI.x - 10, 4, YAZICI.z - 13.0),
  };
}

// ------------------------------------------------------------------ USB bellek (bağlantı ucu z=0, gövde +z'ye doğru)
export function usbBellekYap() {
  malzemeler();
  const g = new Group(); g.name = 'usb-bellek';
  const govde = new MeshStandardMaterial({ color: 0x2f6bf0, roughness: 0.4 });
  g.add(new Mesh(yuvarlak(3.7, 1.7, 9, 0.6, 0, 0, 3.4 + 4.5, 2), govde));
  g.add(new Mesh(kutu(2.6, 0.8, 3.6, 0, 0, 1.8), M.celik));
  const led = new Mesh(new BoxGeometry(0.7, 0.18, 0.7), M.ledKapali); led.position.set(0, 0.88, 10.2); g.add(led);
  g.add(vekil({ kesif: 'usb-bellek', parca: 'usb-bellek', minAdim: 4, minPx: 14 }, 5.4, 3.6, 13, 0, 0, 6.6));
  return { grup: g, led, kesif: [kes(g, 'usb-bellek', 0, 3.4, 8)], ledAyarla: (a) => { led.material = a ? M.ledYesil : M.ledKapali; } };
}
