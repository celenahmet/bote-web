// Kasa (ATX orta kule) dış görünüşü. Ders 1'de kapalı: yalnız dış yüzler, ön panel girişleri ve arka yüz.
// Yerel eksen: x -20..20 (anakart tarafı +x, yan kapak -x), y 0..90, z -43..43 (ön yüz +z). 1 birim = 5 mm.
// Arka yüzden bakınca ekranın solu +x'tir (anakart ve G/Ç paneli solda).
import { Group, Mesh, Vector3, M, malzemeler, kutu, yuvarlak, silindir, birlestir, boya, tuval, doku, YAZI, vekil } from './yardimci.js';
import { PlaneGeometry, MeshBasicMaterial, MeshStandardMaterial, TorusGeometry } from 'three';
import { KASA } from './yerlesim.js';

const kes = (g, id, x, y, z) => ({ id, nesne: g, yerel: new Vector3(x, y, z) });
const ON = KASA.d / 2, ARKA_Z = -KASA.d / 2;

// Arka yüzdeki girişlerin kasa-yerel konumları (kablolar ve etiketler aynı sayıları kullanır).
export const ARKA = {
  hdmi: { x: 15.4, y: 74.55 },
  usb: [{ x: 11.0, y: 75.35 }, { x: 11.0, y: 73.75 }, { x: 7.4, y: 75.35 }, { x: 7.4, y: 73.75 }, { x: 3.8, y: 75.35 }, { x: 3.8, y: 73.75 }],
  ag: { x: -0.7, y: 74.55 },
  mavi: { x: -4.8, y: 74.55 }, pembe: { x: -7.6, y: 74.55 }, yesil: { x: -10.4, y: 74.55 },
  guc: { x: 5.5, y: 10.4 },
};

// Ön yüz giriş şeridi (kasa-yerel x, y = 80.4)
const ONY = 80.4;
const ON_GIRIS = { guc: -12.5, usb1: -5.0, usb2: -0.2, usbc: 5.0, kulaklik: 10.2, mikrofon: 14.0 };

function delikliDoku(en, boy, adim, nokta, zemin, delik) {
  const [c, x] = tuval(en, boy);
  x.fillStyle = zemin; x.fillRect(0, 0, en, boy);
  x.fillStyle = delik;
  for (let j = 0; j * adim * 0.866 < boy + adim; j++) {
    for (let i = 0; i < en / adim + 1; i++) { x.beginPath(); x.arc((i + (j % 2 ? 0.5 : 0)) * adim, j * adim * 0.866, adim * nokta, 0, Math.PI * 2); x.fill(); }
  }
  return c;
}

function simgeler() { // ön giriş şeridinin altındaki küçük simgeler (tek tuval, tek düzlem)
  const [c, x] = tuval(512, 64), s = 512 / 34, px = (v) => (v + 17) * s;
  x.strokeStyle = 'rgba(222,226,234,0.92)'; x.fillStyle = 'rgba(222,226,234,0.92)'; x.lineWidth = 2.4; x.lineCap = 'round'; x.lineJoin = 'round';
  // güç simgesi
  let cx = px(ON_GIRIS.guc), cy = 30;
  x.beginPath(); x.arc(cx, cy, 11, -Math.PI / 2 + 0.6, -Math.PI / 2 - 0.6 + Math.PI * 2); x.stroke();
  x.beginPath(); x.moveTo(cx, cy - 15); x.lineTo(cx, cy - 2); x.stroke();
  // USB simgesi (iki kez)
  for (const u of [ON_GIRIS.usb1, ON_GIRIS.usb2, ON_GIRIS.usbc]) {
    cx = px(u); x.beginPath(); x.moveTo(cx - 9, 30); x.lineTo(cx + 9, 30); x.stroke();
    x.beginPath(); x.arc(cx - 11, 30, 3.2, 0, Math.PI * 2); x.fill();
    x.beginPath(); x.moveTo(cx + 9, 30); x.lineTo(cx + 5, 26.5); x.lineTo(cx + 5, 33.5); x.closePath(); x.fill();
    x.beginPath(); x.moveTo(cx - 3, 30); x.lineTo(cx, 23); x.lineTo(cx + 3, 23); x.stroke(); x.fillRect(cx + 2, 20.5, 4.4, 4.4);
    x.beginPath(); x.moveTo(cx - 1, 30); x.lineTo(cx + 2, 37); x.lineTo(cx + 4.5, 37); x.stroke(); x.beginPath(); x.arc(cx + 6.2, 37, 2.2, 0, Math.PI * 2); x.fill();
  }
  // kulaklık simgesi
  cx = px(ON_GIRIS.kulaklik);
  x.beginPath(); x.arc(cx, 34, 10, Math.PI, 0); x.stroke();
  x.fillRect(cx - 12.5, 33, 5, 11); x.fillRect(cx + 7.5, 33, 5, 11);
  // mikrofon simgesi
  cx = px(ON_GIRIS.mikrofon);
  x.beginPath(); x.arc(cx, 20, 4, Math.PI, 0); x.arc(cx, 29, 4, 0, Math.PI); x.closePath(); x.fill();
  x.beginPath(); x.arc(cx, 32, 8, 0.15, Math.PI - 0.15); x.stroke();
  x.beginPath(); x.moveTo(cx, 40); x.lineTo(cx, 47); x.moveTo(cx - 5, 47); x.lineTo(cx + 5, 47); x.stroke();
  return c;
}

export function kasaYap() {
  malzemeler();
  const W = KASA.w, H = KASA.h, D = KASA.d, Y0 = 1.6;
  const g = new Group(); g.name = 'kasa'; g.position.set(KASA.x, 0, KASA.z);
  const govdeMal = new MeshStandardMaterial({ color: 0x2d3037, roughness: 0.46, metalness: 0.4 });
  g.add(new Mesh(yuvarlak(W, H - Y0, D, 1.1, 0, Y0 + (H - Y0) / 2, 0, 3), govdeMal));
  // ayaklar
  g.add(birlestir([[-15.5, -35.5], [15.5, -35.5], [-15.5, 35.5], [15.5, 35.5]].map(([x, z]) => silindir(2.3, Y0 + 0.2, x, (Y0 + 0.2) / 2, z, { seg: 14 })), M.plastik));

  // ön yüz: gözenekli panel + üstte giriş şeridi
  const mesh = new Mesh(new PlaneGeometry(36.4, 62), new MeshStandardMaterial({ map: doku(delikliDoku(512, 874, 19.7, 0.3, '#2c2f37', '#08090c'), { aniso: true }), roughness: 0.55, metalness: 0.35 }));
  mesh.position.set(0, 38.5, ON + 0.05); g.add(mesh);
  g.add(new Mesh(yuvarlak(34, 6.4, 1.2, 0.5, 0, ONY, ON + 0.1, 2), M.plastik));
  const z0 = ON + 0.7;
  const gir = [];
  gir.push(boya(silindir(2.15, 0.7, ON_GIRIS.guc, ONY, z0 + 0.35, { eksen: 'z', seg: 24 }), 0xb9bec8));
  gir.push(boya(silindir(1.6, 0.9, ON_GIRIS.guc, ONY, z0 + 0.45, { eksen: 'z', seg: 24 }), 0xeceef2));
  for (const u of [ON_GIRIS.usb1, ON_GIRIS.usb2]) {
    gir.push(boya(kutu(3.2, 1.5, 0.9, u, ONY, z0 + 0.3), 0x15171b));
    gir.push(boya(kutu(2.3, 0.45, 0.5, u, ONY - 0.15, z0 + 0.5), 0x2f6bf0));
  }
  gir.push(boya(yuvarlak(2.3, 0.95, 0.9, 0.35, ON_GIRIS.usbc, ONY, z0 + 0.3, 2), 0x15171b));
  for (const u of [ON_GIRIS.kulaklik, ON_GIRIS.mikrofon]) {
    gir.push(boya(silindir(1.05, 0.6, u, ONY, z0 + 0.3, { eksen: 'z', seg: 18 }), 0xb9bec8));
    gir.push(boya(silindir(0.55, 0.7, u, ONY, z0 + 0.35, { eksen: 'z', seg: 14 }), 0x0b0c0f));
  }
  g.add(birlestir(gir, M.renkli));
  const halka = new Mesh(new TorusGeometry(1.85, 0.11, 6, 28), M.ledMavi); halka.position.set(ON_GIRIS.guc, ONY, z0 + 0.8); g.add(halka);
  const simge = new Mesh(new PlaneGeometry(34, 4.25), new MeshBasicMaterial({ map: doku(simgeler()), transparent: true, depthWrite: false }));
  simge.position.set(0, ONY - 4.6, ON + 0.08); g.add(simge);

  // arka yüz: G/Ç paneli, genişleme yuvası kapakları, güç kaynağı
  const az = ARKA_Z;
  g.add(new Mesh(yuvarlak(31, 9.3, 0.9, 0.25, 2.9, 74.55, az - 0.15, 2), M.alumin));
  const arka = [];
  const port = (x, y, w, h, renk = 0x14161a, icRenk = null, icH = 0.45) => {
    arka.push(boya(kutu(w, h, 0.5, x, y, az - 0.55), renk));
    if (icRenk != null) arka.push(boya(kutu(w - 0.5, icH, 0.4, x, y - h / 2 + icH / 2 + 0.12, az - 0.8), icRenk));
  };
  port(ARKA.hdmi.x, ARKA.hdmi.y, 3.0, 1.05, 0x101216);
  ARKA.usb.forEach((p, i) => port(p.x, p.y, 2.6, 1.2, 0x0e1014, i < 2 ? 0x2f6bf0 : 0x9aa0aa));
  arka.push(boya(kutu(3.4, 2.9, 0.6, ARKA.ag.x, ARKA.ag.y, az - 0.6), 0xaeb4bf)); arka.push(boya(kutu(2.6, 1.9, 0.4, ARKA.ag.x, ARKA.ag.y - 0.1, az - 0.9), 0x0d0f12));
  for (const [k, renk] of [['mavi', 0x3a78e0], ['pembe', 0xe0709a], ['yesil', 0x39b567]]) {
    arka.push(boya(silindir(1.05, 0.7, ARKA[k].x, ARKA[k].y, az - 0.8, { eksen: 'z', seg: 18 }), renk));
    arka.push(boya(silindir(0.5, 0.8, ARKA[k].x, ARKA[k].y, az - 0.85, { eksen: 'z', seg: 12 }), 0x0b0c0f));
  }
  // güç kaynağı arka plakası: C14 girişi ve anahtar
  g.add(new Mesh(yuvarlak(30, 17.2, 0.9, 0.3, -3.5, 10.4, az - 0.15, 2), M.aluminKoyu));
  arka.push(boya(kutu(3.9, 2.8, 0.7, ARKA.guc.x, ARKA.guc.y, az - 0.65), 0x121317));
  arka.push(boya(kutu(2.5, 0.9, 0.5, ARKA.guc.x, ARKA.guc.y + 0.2, az - 1.0), 0x2a2d33));
  arka.push(boya(kutu(2.0, 3.0, 0.7, 9.4, 14.2, az - 0.65), 0x15171b));
  arka.push(boya(kutu(1.5, 1.4, 0.5, 9.4, 14.8, az - 1.0), 0xd9dde4));
  g.add(birlestir(arka, M.renkli));
  // yuva kapakları + güç kaynağı ızgarası: iki küçük tuval düzlemi
  const yuvaC = (() => {
    const [c, x] = tuval(256, 305);
    x.fillStyle = '#20232a'; x.fillRect(0, 0, 256, 305);
    for (let i = 0; i < 7; i++) {
      const y = i * (305 / 7) + 3; x.fillStyle = '#8f96a2'; x.fillRect(4, y, 248, 305 / 7 - 6);
      x.fillStyle = '#2a2d34'; for (let k = 0; k < 17; k++) for (let m = 0; m < 2; m++) { x.beginPath(); x.arc(22 + k * 13.4, y + 12 + m * 14, 3.1, 0, Math.PI * 2); x.fill(); }
      x.fillStyle = '#c3c8d1'; x.fillRect(4, y, 248, 2);
    }
    return c;
  })();
  const yuva = new Mesh(new PlaneGeometry(24, 28.5), new MeshStandardMaterial({ map: doku(yuvaC), roughness: 0.55, metalness: 0.5 }));
  yuva.rotation.y = Math.PI; yuva.position.set(7, 55.65, az - 0.62); g.add(yuva);
  const izgaraC = delikliDoku(256, 256, 11, 0.3, '#3a3f49', '#0a0b0e');
  const izgara = new Mesh(new PlaneGeometry(19.4, 14.2), new MeshStandardMaterial({ map: doku(izgaraC), roughness: 0.6, metalness: 0.4 }));
  izgara.rotation.y = Math.PI; izgara.position.set(-8.6, 10.4, az - 0.62); g.add(izgara);

  // dokunma vekilleri (küçükten büyüğe seçilir; en küçük hacim kazanır)
  const kucuk = { minAdim: 4, minPx: 14 };
  g.add(vekil({ kesif: 'kasa', parca: 'kasa' }, W, H, D, 0, H / 2, 0));
  g.add(vekil({ kesif: 'guc-dugmesi', parca: 'kasa', ...kucuk }, 5, 5, 2.4, ON_GIRIS.guc, ONY, ON + 0.9));
  g.add(vekil({ kesif: 'usb-girisi', parca: 'kasa', ...kucuk }, 9.2, 3.4, 2.4, (ON_GIRIS.usb1 + ON_GIRIS.usb2) / 2, ONY, ON + 0.9));
  g.add(vekil({ kesif: 'ses-jaklari', parca: 'kasa', ...kucuk }, 8.6, 3.2, 2.4, (ON_GIRIS.kulaklik + ON_GIRIS.mikrofon) / 2, ONY, ON + 0.9));
  g.add(vekil({ kesif: 'hdmi-girisi', parca: 'kasa', ...kucuk }, 3.6, 1.8, 2.6, ARKA.hdmi.x, ARKA.hdmi.y, az - 0.9));
  g.add(vekil({ kesif: 'usb-girisi', parca: 'kasa', arka: true, ...kucuk }, 11.2, 3.6, 2.6, 7.4, 74.55, az - 0.9));
  g.add(vekil({ kesif: 'ag-girisi', parca: 'kasa', ...kucuk }, 3.8, 3.2, 2.6, ARKA.ag.x, ARKA.ag.y, az - 0.9));
  g.add(vekil({ kesif: 'ses-jaklari', parca: 'kasa', arka: true, ...kucuk }, 8.8, 2.6, 2.6, -7.6, 74.55, az - 0.9));
  g.add(vekil({ kesif: 'guc-girisi', parca: 'kasa', ...kucuk }, 4.6, 3.4, 2.6, ARKA.guc.x, ARKA.guc.y, az - 1.0));
  g.add(vekil({ kesif: 'guc-kaynagi', parca: 'kasa' }, 30, 17.2, 2.6, -3.5, 10.4, az - 0.5));
  return {
    grup: g, halka,
    kesif: [
      kes(g, 'kasa', 0, 62, ON + 1), kes(g, 'guc-dugmesi', ON_GIRIS.guc, ONY, ON + 1),
      kes(g, 'usb-girisi', (ON_GIRIS.usb1 + ON_GIRIS.usb2) / 2, ONY, ON + 1), kes(g, 'ses-jaklari', (ON_GIRIS.kulaklik + ON_GIRIS.mikrofon) / 2, ONY, ON + 1),
      kes(g, 'hdmi-girisi', ARKA.hdmi.x, ARKA.hdmi.y, az - 1), kes(g, 'ag-girisi', ARKA.ag.x, ARKA.ag.y, az - 1),
      kes(g, 'guc-girisi', ARKA.guc.x, ARKA.guc.y, az - 1.1), kes(g, 'guc-kaynagi', -10.5, 5, az - 1),
    ],
  };
}
