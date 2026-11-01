// Derslerin devreleri: parçaların breadboard'daki yerleri, havada/takılı pozları ve akım yolları.
import { Vector3, Box3, Mesh, BoxGeometry, MeshBasicMaterial } from 'three';
import { pinNokta, delikNokta, rayNokta, ledYap, direncYap, butonYap, kabloYap, ikiNoktayaKoy, BB_UST, BB } from './modeller.js';

const R220 = ['kirmizi', 'kirmizi', 'kahve', 'altin'];
const R10K = ['kahve', 'siyah', 'turuncu', 'altin'];
const HAVA = 26;
const gorunmez = new MeshBasicMaterial({ visible: false });

function dokunmaKutusu(nesne, ad, kavram, hedefler) {
  nesne.updateMatrixWorld(true);
  const kutu = new Box3().setFromObject(nesne);
  const boy = kutu.getSize(new Vector3()), merkez = kutu.getCenter(new Vector3());
  const m = new Mesh(new BoxGeometry(Math.max(boy.x, 5) + 2, Math.max(boy.y, 5), Math.max(boy.z, 5) + 2), gorunmez);
  m.position.copy(nesne.worldToLocal(merkez.clone()));
  m.userData = { parca: ad, kavram, etkin: false };
  nesne.add(m); hedefler.push(m);
  return m;
}

function led(renk, anotSutun, satir = 'e') {
  const n = ledYap(renk);
  const a = delikNokta(anotSutun, satir), k = delikNokta(anotSutun + 1, satir);
  const takili = new Vector3((a.x + k.x) / 2, BB_UST, a.z);
  n.position.copy(takili);
  return { nesne: n, tur: 'led', kavram: 'led', anotSutun, satir, pozlar: { takili, havada: takili.clone().add(new Vector3(0, HAVA, 0)) } };
}
function direnc(bantlar, a, b, kavram = 'direnc') {
  const n = direncYap(bantlar, a.distanceTo(b));
  ikiNoktayaKoy(n, a, b);
  const takili = n.position.clone();
  return { nesne: n, tur: 'direnc', kavram, a, b, pozlar: { takili, havada: takili.clone().add(new Vector3(0, HAVA * 0.75, 0)) } };
}
function kablo(bas, son, renk) {
  return { nesne: kabloYap(bas, son, renk), tur: 'kablo', kavram: 'kablo', bas, son };
}

export function devreKur(tur, hedefler) {
  const p = {};
  if (tur === 'led' || tur === 'buton') {
    p.led1 = led('kirmizi', 15);
    p.r1 = direnc(R220, delikNokta(16, 'c'), rayNokta('yakin', '-', 16));
    p.k13 = kablo(pinNokta(13), delikNokta(15, 'a'), 'turuncu');
    p.kgnd = kablo(pinNokta('GND-D'), rayNokta('yakin', '-', 14), 'siyah');
  }
  if (tur === 'buton') {
    const n = butonYap();
    const takili = new Vector3((delikNokta(20, 'e').x + delikNokta(22, 'e').x) / 2, BB_UST, BB.z);
    n.position.copy(takili);
    p.buton = { nesne: n, tur: 'buton', kavram: 'buton', pozlar: { takili, havada: takili.clone().add(new Vector3(0, HAVA, 0)) } };
    p.r2 = direnc(R10K, delikNokta(22, 'c'), rayNokta('yakin', '-', 22));
    p.k5v = kablo(pinNokta('5V'), rayNokta('yakin', '+', 24), 'kirmizi');
    p.kplus = kablo(rayNokta('yakin', '+', 20), delikNokta(20, 'a'), 'kirmizi');
    p.k2 = kablo(pinNokta(2), delikNokta(22, 'd'), 'sari');
  }
  if (tur === 'trafik') {
    p.ledK = led('kirmizi', 8); p.ledS = led('sari', 15); p.ledY = led('yesil', 22);
    p.rK = direnc(R220, delikNokta(9, 'c'), rayNokta('yakin', '-', 9));
    p.rS = direnc(R220, delikNokta(16, 'c'), rayNokta('yakin', '-', 16));
    p.rY = direnc(R220, delikNokta(23, 'c'), rayNokta('yakin', '-', 23));
    p.kK = kablo(pinNokta(10), delikNokta(8, 'a'), 'kirmizi');
    p.kS = kablo(pinNokta(9), delikNokta(15, 'a'), 'sari');
    p.kY = kablo(pinNokta(8), delikNokta(22, 'a'), 'yesil');
    p.kgnd = kablo(pinNokta('GND-D'), rayNokta('yakin', '-', 14), 'siyah');
  }
  for (const [ad, parca] of Object.entries(p)) if (parca.tur !== 'kablo') parca.kutu = dokunmaKutusu(parca.nesne, ad, parca.kavram, hedefler);
  return p;
}

// Bir LED devresinde akımın yolu: pin -> kablo -> şerit -> LED -> şerit -> direnç -> eksi ray -> GND kablosu -> GND pini
export function ledYolu(kPin, ledP, r, kGnd) {
  const y = BB_UST + 0.8, gy = BB_UST + 6.2, ry = BB_UST + r.nesne.userData.H;
  const yol = [kPin.bas.clone().setY(kPin.bas.y + 0.4), ...kPin.nesne.userData.yol];
  const anot = delikNokta(ledP.anotSutun, ledP.satir, y), katot = delikNokta(ledP.anotSutun + 1, ledP.satir, y);
  yol.push(kPin.son.clone().setY(y), anot, anot.clone().setY(gy), katot.clone().setY(gy), katot);
  yol.push(r.a.clone().setY(y), r.a.clone().setY(ry), r.b.clone().setY(ry), r.b.clone().setY(y), kGnd.son.clone().setY(y));
  yol.push(...[...kGnd.nesne.userData.yol].reverse(), kGnd.bas.clone().setY(kGnd.bas.y + 0.4));
  return yol;
}
