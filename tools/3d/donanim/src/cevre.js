// Masa ve çevre birimleri: masa, monitör, web kamerası, fare, hoparlör, mikrofon, kulaklık, USB bellek (klavye klavye.js'te,
// yazıcı yazici.js'te).
// Her yapıcı { grup, ... } döndürür; vekiller (dokunma kutuları) parçanın grubuna çocuk olarak eklenir (parça oynayınca birlikte gider).
// Kesif noktaları { id, nesne, yerel } biçimindedir: işaret parçayla birlikte hareket eder, parça gizliyken görünmez.
import {
  Group, Mesh, Vector3, MeshStandardMaterial, MeshBasicMaterial, BoxGeometry, TorusGeometry, ExtrudeGeometry, Shape, DoubleSide,
  M, malzemeler, kutu, yuvarlak, silindir, birlestir, tuval, doku, vekil, kabloGeo, kesifNok,
} from './yardimci.js';
import { CapsuleGeometry, PlaneGeometry, RingGeometry } from 'three';
import { MASA, MON, HOPARLOR, FARE, MIKROFON, KULAKLIK, KAMERA_PARCA } from './yerlesim.js';
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
