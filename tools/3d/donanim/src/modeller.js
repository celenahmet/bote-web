// Sahnedeki tüm modeller. Ders 1: masa üstü birimler, kablolar ve kapalı kasa (kasa içi modeller ders 2'de eklenir).
import { Group, malzemeler, golgeAyarla } from './yardimci.js';
import { masaYap, monitorYap, kameraYap, fareYap, hoparlorYap, mikrofonYap, kulaklikYap, usbBellekYap } from './cevre.js';
import { klavyeYap } from './klavye.js';
import { yaziciYap } from './yazici.js';
import { MASA, KASA, MON, HOPARLOR, KLAVYE, FARE, YAZICI, MIKROFON, KULAKLIK, USB_BELLEK } from './yerlesim.js';
import { dokuKur } from './doku.js';
import { statikBirlestir } from './statik.js';
import { kasaYap } from './kasa.js';
import { kablolariYap } from './kablolar.js';

// Masa yüzeyine pişirilen temas gölgeleri (dünya birimi): eşyaların altı biraz koyulaşır, havada asılı görünmezler.
const IZLER = [
  { x: KASA.x, z: KASA.z, w: KASA.w + 4, d: KASA.d + 4, bulanik: 18, alfa: 0.55 },
  { x: MON.x, z: MON.z + 3, w: 36, d: 24, bulanik: 10, alfa: 0.5 },
  ...HOPARLOR.map((h) => ({ x: h.x, z: h.z, w: 15, d: 17, bulanik: 9, alfa: 0.5 })),
  { x: KLAVYE.x, z: KLAVYE.z, w: 88, d: 27, bulanik: 16, alfa: 0.32 },
  { x: FARE.x, z: FARE.z, w: 12.5, d: 21, bulanik: 8, alfa: 0.4 },
  { x: YAZICI.x, z: YAZICI.z, w: 38, d: 29, bulanik: 14, alfa: 0.45 },
  { x: MIKROFON.x, z: MIKROFON.z, w: 10.5, d: 10.5, bulanik: 6, alfa: 0.5 },
  { x: KULAKLIK.x, z: KULAKLIK.z, w: 22, d: 14, bulanik: 8, alfa: 0.28 },
  { x: USB_BELLEK.x, z: USB_BELLEK.z, w: 6, d: 15, bulanik: 4, alfa: 0.35 },
];

export function modelleriKur(sahne, { aniz = 4 } = {}) {
  dokuKur({ aniz, izler: IZLER, masa: MASA });
  malzemeler();
  const p = {};
  p.masa = masaYap();
  p.kasa = kasaYap();
  p.monitor = monitorYap();
  p.kamera = kameraYap();
  p.klavye = klavyeYap();
  p.fare = fareYap();
  p.hoparlor = hoparlorYap();
  p.mikrofon = mikrofonYap();
  p.kulaklik = kulaklikYap();
  p.yazici = yaziciYap();
  p.usb = usbBellekYap();
  p.usb.grup.position.set(USB_BELLEK.x, 0.65, USB_BELLEK.z); p.usb.grup.rotation.y = USB_BELLEK.don;
  p.kablo = kablolariYap({ klavye: p.klavye, fare: p.fare, kamera: p.kamera, kulaklik: p.kulaklik, yazici: p.yazici, mikrofon: p.mikrofon, hoparlor: p.hoparlor, monitor: p.monitor });
  const kok = new Group(); kok.name = 'donanim';
  kok.add(p.masa, p.kasa.grup, p.monitor.grup, p.kamera.grup, p.klavye.grup, p.fare.grup, p.hoparlor.grup, p.mikrofon.grup, p.kulaklik.grup, p.yazici.grup, p.usb.grup, p.kablo.mesh);
  golgeAyarla(kok);
  p.masa.castShadow = false; p.masa.receiveShadow = false; // gölgeyi zemin düzlemi alır (çift koyulaşma olmasın)
  p.masa.userData.statik = false;                          // tek mesh zaten; temas gölgeli doku
  p.fare.grup.userData.dinamik = true;                     // fare masada gezer (donanimSahne)
  sahne.add(kok);
  kok.updateMatrixWorld(true);
  const birlesme = statikBirlestir(kok);                   // çizim çağrısı bütçesi: aynı malzemeli statik meshler tek geometri
  return { kok, p, birlesme };
}
