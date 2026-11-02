// Sahnedeki tüm modeller. Ders 1: masa üstü birimler, kablolar ve kapalı kasa (kasa içi modeller ders 2'de eklenir).
import { Group, malzemeler, golgeAyarla } from './yardimci.js';
import { masaYap, monitorYap, kameraYap, klavyeYap, fareYap, hoparlorYap, mikrofonYap, kulaklikYap, yaziciYap, usbBellekYap } from './cevre.js';
import { USB_BELLEK } from './yerlesim.js';
import { kasaYap } from './kasa.js';
import { kablolariYap } from './kablolar.js';

export function modelleriKur(sahne) {
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
  sahne.add(kok);
  kok.updateMatrixWorld(true);
  return { kok, p };
}
