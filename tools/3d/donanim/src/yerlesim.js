// Masa düzeni: tüm konumlar dünya koordinatında (1 birim = 5 mm, y yukarı, izleyici +z tarafında).
// Tek yerde durur: sahne, kamera kutuları ve etiketler aynı sayıları kullanır.
export const MASA = { x0: -108, x1: 108, z0: -76, z1: 56, ust: -0.2, kalin: 5 };
// Kasa: ATX orta kule. Ön yüz +z, açılan yan kapak -x tarafında (anakart tepsisi +x duvarında). Merkez taban noktası.
export const KASA = { x: -86, z: -23, w: 40, h: 90, d: 86 };
export const MON = { x: 4, z: -46 };
export const HOPARLOR = [{ x: -53, z: -46 }, { x: 61, z: -46 }];
export const KLAVYE = { x: 0, z: 22 };
export const FARE = { x: 58, z: 22 };
export const YAZICI = { x: 88, z: -43 };
export const MIKROFON = { x: -55, z: 34 };
export const KULAKLIK = { x: 90, z: 34 };
export const USB_BELLEK = { x: -33, z: 47, don: 0.5 };
export const KAMERA_PARCA = { x: 4, y: 66.6, z: -46 };

// Kasa içi (kasa yerel koordinatı: x -20..20, y 0..90, z -43..43)
export const IC = {
  tepsi: 19.6,            // anakart tepsisinin iç yüzü (x)
  bx: 18.0,               // anakart yüzeyi (x); parçalar bu düzlemden -x yönüne yükselir
  bz0: -41.5,             // anakartın arka kenarı (z)
  by0: 30,                // anakartın alt kenarı (y)
  bu: 61, bv: 48.8,       // anakart boyu (ATX 305 x 244 mm)
};
// Anakart yerel (u: arka kenardan öne, v: alttan yukarı) -> kasa yerel (z, y)
export const ak = (u, v) => ({ z: IC.bz0 + u, y: IC.by0 + v });
// Kasa yerel -> dünya
export const dunya = (x, y, z) => [KASA.x + x, y, KASA.z + z];
