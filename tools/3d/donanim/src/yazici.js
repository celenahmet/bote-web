// Yazıcı (donanım ailesi): yumuşak köşeli tek gövde (alt gövde + üst kapak), ön çıkış tepsisi, gövdeye menteşeli eğik kâğıt
// besleme tepsisi, eğik kontrol paneli (kendi ışığı olan küçük ekran). Yazdırma animasyonunda kâğıt çıkış yarığından
// çıkıp tepsiye düşer (donanimSahne: kagit.position.z). Yerel eksen: x genişlik, y yukarı, ön yüz +z. 1 birim = 5 mm.
// Hiçbir parça havada durmaz: besleme tepsisinin alt ucu üst kapağın arka kenarına oturur, tepsi gövdeye 0,8 birim girer.
import { Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, DoubleSide, M, malzemeler, kutu, yuvarlak, silindir, tuval, doku, YAZI, vekil, kesifNok } from './yardimci.js';
import { PlaneGeometry, Vector3 } from 'three';
import { YAZICI } from './yerlesim.js';

const kes = kesifNok;
const KAGIT_Y = 2.7;                      // kâğıdın çıkış tepsisi üstündeki yüksekliği
const ACI = 65 * Math.PI / 180;           // besleme tepsisinin eğimi

function panelEkrani() {
  const [c, x] = tuval(192, 96);
  x.fillStyle = '#17315f'; x.fillRect(0, 0, 192, 96);
  x.fillStyle = '#8fb8ff'; x.font = `700 38px ${YAZI}`; x.textAlign = 'left'; x.textBaseline = 'middle'; x.fillText('Hazır', 18, 48);
  x.fillStyle = '#8fb8ff'; x.fillRect(142, 28, 30, 40); x.fillStyle = '#17315f'; x.fillRect(147, 33, 20, 30); // kâğıt simgesi
  x.fillStyle = '#8fb8ff'; x.fillRect(151, 41, 12, 3); x.fillRect(151, 49, 12, 3);
  return doku(c);
}

function kagitDokusu() {
  const [c, x] = tuval(512, 700);
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, 512, 700);
  x.fillStyle = '#7c4dff'; x.fillRect(50, 56, 412, 10);
  x.fillStyle = '#20242c'; x.font = `700 58px ${YAZI}`; x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.fillText('Merhaba!', 50, 148);
  x.fillStyle = '#6b7384'; for (let i = 0; i < 6; i++) x.fillRect(50, 200 + i * 38, i === 5 ? 220 : 412, 12);
  x.fillStyle = '#a2c8f3'; x.fillRect(50, 450, 412, 190); x.fillStyle = '#6ea4e8'; x.beginPath(); x.moveTo(50, 640); x.lineTo(200, 540); x.lineTo(320, 600); x.lineTo(400, 530); x.lineTo(462, 580); x.lineTo(462, 640); x.closePath(); x.fill();
  return doku(c);
}

export function yaziciYap() {
  malzemeler();
  const g = new Group(); g.name = 'yazici'; g.position.set(YAZICI.x, 0, YAZICI.z);
  const Y0 = 0.6;
  // ayaklar
  for (const [x, z] of [[-14, -10], [14, -10], [-14, 10], [14, 10]]) g.add(new Mesh(silindir(1.2, Y0 + 0.1, x, (Y0 + 0.1) / 2, z, { seg: 12 }), M.plastik));
  // gövde: alt gövde ve biraz küçük üst kapak (aradaki oluk doğal gölge çizgisi verir)
  g.add(new Mesh(yuvarlak(36, 9, 28, 1.6, 0, Y0 + 4.5, 0, 3), M.plastikBeyaz));
  g.add(new Mesh(yuvarlak(35.4, 4.4, 27.4, 1.4, 0, 11.6, 0, 3), M.plastikBeyaz));
  // ön çıkış yarığı + çıkış tepsisi (kenar duvarlı)
  g.add(new Mesh(kutu(28, 1.6, 0.3, 0, 3.2, 14.02), M.cip));
  g.add(new Mesh(yuvarlak(27, 0.6, 12, 0.25, 0, 2.2, 19.2, 2), M.plastikBeyaz));
  for (const s of [-1, 1]) g.add(new Mesh(yuvarlak(0.6, 1.2, 10.4, 0.2, s * 13.6, 2.75, 19.8, 2), M.plastikBeyaz));
  // arka: menteşe, eğik besleme tepsisi ve üzerinde kâğıt yığını
  g.add(new Mesh(silindir(0.75, 22, 0, 13.55, -13.1, { eksen: 'x', seg: 12 }), M.plastikBeyaz));
  const L = 13, yon = new Vector3(0, Math.sin(ACI), -Math.cos(ACI)), alt = new Vector3(0, 13.4, -13.0);
  const orta = alt.clone().addScaledVector(yon, L / 2);
  const tepsi = new Mesh(yuvarlak(24, 0.5, L, 0.2, 0, 0, 0, 2), M.plastikBeyaz);
  tepsi.position.copy(orta); tepsi.rotation.x = ACI; g.add(tepsi);
  const normal = new Vector3(0, Math.cos(ACI), Math.sin(ACI));
  const yigin = new Mesh(kutu(21, 0.35, L - 1.5), M.kagit);
  yigin.position.copy(orta).addScaledVector(normal, 0.45); yigin.rotation.x = ACI; g.add(yigin);
  // arka giriş (USB) ve ayak izi
  g.add(new Mesh(kutu(2.6, 1.7, 0.4, -10, 4.2, -14.05), M.cip));
  // kontrol paneli: üst kapakta eğik, kendi ışığı olan küçük ekran
  const panel = new Group(); panel.position.set(8.5, 13.95, 8.4); panel.rotation.x = -0.18;
  panel.add(new Mesh(yuvarlak(13, 0.6, 6.2, 0.3, 0, 0, 0, 2), M.plastik));
  const ekr = new Mesh(new PlaneGeometry(6.2, 3.1), new MeshBasicMaterial({ map: panelEkrani(), toneMapped: false }));
  ekr.rotation.x = -Math.PI / 2; ekr.position.set(-2.4, 0.34, 0); panel.add(ekr);
  const led = new Mesh(kutu(0.6, 0.12, 0.6), M.ledKapali); led.position.set(4.2, 0.34, -1.2); led.userData.dinamik = true; panel.add(led);
  for (let i = 0; i < 2; i++) panel.add(new Mesh(silindir(0.6, 0.14, 3.2 + i * 1.6, 0.34, 1.2, { seg: 14 }), M.alumin));
  g.add(panel);
  // kâğıt (yazdırma animasyonu): çıkış yarığından çıkıp tepsiye düşer
  const kagit = new Mesh(new PlaneGeometry(25, 34.5), new MeshStandardMaterial({ map: kagitDokusu(), roughness: 0.9, side: DoubleSide }));
  kagit.rotation.x = -Math.PI / 2; kagit.position.set(0, KAGIT_Y, -3.75); kagit.visible = false; kagit.userData.dinamik = true; g.add(kagit);
  g.add(vekil({ kesif: 'yazici', parca: 'yazici' }, 37, 26, 45, 0, 13, 3.5));
  return {
    grup: g, kagit, led, kesif: [kes(g, 'yazici', 0, 15.5, 2)],
    ledAyarla: (a) => { led.material = a ? M.ledYesil : M.ledKapali; },
    arka: new Vector3(YAZICI.x - 10, 4.2, YAZICI.z - 13.0),
  };
}
