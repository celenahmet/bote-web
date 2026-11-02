// Kasa içi yerleşimi (ders 2). Hepsi kasa-yerel birim (1 birim = 5 mm): x -20 (yan kapak) .. +20 (anakart tepsisi),
// y 0..90, z -43 (arka) .. +43 (ön). Anakart yüzeyi x = 18: parçalar buradan -x yönüne yükselir. Tek yer: parça kurucuları,
// baskı devresi dokusu, vekiller, etiket noktaları ve kamera kutuları aynı sayıları okur.
export const PCB = { x0: 18.0, kalin: 0.32, z0: -41.5, z1: 19.5, y0: 30, y1: 78.8 };
export const TEPSI = 19.6;
export const CPU = { z: -20.5, y: 63.8 };
// RAM yuvaları: z = z0 + adim * k (k 0..3); çubuklar 2. ve 4. yuvada (A2, B2)
export const RAM = { z0: -9.5, adim: 1.7, y0: 48.0, y1: 74.7, xAlt: 16.6, xUst: 9.0, dolu: [1, 3] };
// PCIe yuvaları: sıra k = genişleme kapağı sırası (üstten), y = 67.9 - 4.064 k
export const pcieY = (k) => 67.9 - 4.064 * k;
export const GPU = { y: pcieY(4), x0: -4.0, x1: 17.0, z0: -41.8, z1: 13.0, alt: 40.8 };
export const WIFI = { y: pcieY(2), x0: 3.2, x1: 17.0, z0: -41.0, z1: -35.2 };
export const PSU = { x0: -18.5, x1: 11.5, y0: 1.8, y1: 19.0, z0: -42.2, z1: -13.7 };
export const M2 = { z0: -26.5, z1: -10.5, y0: 33.8, y1: 38.2, x: 17.4 };
export const HDD = { x0: 13.2, x1: 18.4, y0: 2.6, y1: 22.9, z0: 7.5, z1: 36.9 };
export const SSD = { x0: 17.1, x1: 18.5, y0: 26.5, y1: 40.5, z0: 21.0, z1: 41.0 };
export const SATA_PORT = { z0: 11.8, z1: 15.4, y: (i) => 31.0 + i * 1.2 };
export const BIOS = { z: -2.0, y: 34.6 };
export const ATX24 = { z0: 17.0, z1: 19.4, y0: 52.0, y1: 62.4, x0: 14.8 };
export const EPS = { z0: -30.5, z1: -25.9, y0: 76.3, y1: 78.7, x0: 14.2 };
// hava soğutucu (kule): taban, kanat paketi, fan
export const HAVA = { x0: -8.5, x1: 12.4, z0: -26.8, z1: -17.4, y: 19, fan: 5, fanBoy: 18.4, merkezY: CPU.y, merkezZ: CPU.z, fanZ: -14.9 };
// sıvı soğutma: pompa (işlemcide), 240 radyatör (tavanda), 2 fan
export const SIVI = { pompaR: 3.6, pompaX0: 12.2, pompaX1: 15.8, radX0: -12, radX1: 12, radY0: 84.2, radY1: 89.6, radZ0: -38, radZ1: 10 };
// kasa fanları: ön 3 (hava girer), tavan egzoz (hava soğutmada), radyatör fanları (sıvıda)
export const ON_FAN = [17.2, 41.6, 66.0];

// fan tablosu: eksen (dönme ekseni), yaricap (kanat ucu), gizli ise sahnede yok sayılır. grup: sabit | hava | egzoz | sivi
export const FANLAR = [
  { ad: 'on-alt', grup: 'sabit', m: [0, ON_FAN[0], 39.7], eksen: 'z', r: 10.6, hiz: 9, renk: 0x8a909c },
  { ad: 'on-orta', grup: 'sabit', m: [0, ON_FAN[1], 39.7], eksen: 'z', r: 10.6, hiz: 9, renk: 0x8a909c },
  { ad: 'on-ust', grup: 'sabit', m: [0, ON_FAN[2], 39.7], eksen: 'z', r: 10.6, hiz: 9, renk: 0x8a909c },
  { ad: 'kule', grup: 'hava', m: [(HAVA.x0 + HAVA.x1) / 2, CPU.y, HAVA.fanZ], eksen: 'z', r: 8.2, hiz: 11, renk: 0x6f7581 },
  { ad: 'egzoz', grup: 'egzoz', m: [0, 87.1, -24], eksen: 'y', r: 10.6, hiz: 10, renk: 0x8a909c },
  { ad: 'rad1', grup: 'sivi', m: [0, 81.7, -26], eksen: 'y', r: 10.6, hiz: 10, renk: 0x8a909c },
  { ad: 'rad2', grup: 'sivi', m: [0, 81.7, -2], eksen: 'y', r: 10.6, hiz: 10, renk: 0x8a909c },
  { ad: 'gpu1', grup: 'sabit', m: [6.5, 43.4, -26], eksen: 'y', r: 8.2, hiz: 8, renk: 0x555b66 },
  { ad: 'gpu2', grup: 'sabit', m: [6.5, 43.4, -5], eksen: 'y', r: 8.2, hiz: 8, renk: 0x555b66 },
  { ad: 'psu', grup: 'sabit', m: [-3.5, 18.5, -28], eksen: 'y', r: 9.4, hiz: 7, renk: 0x555b66 },
];

// hava akışı yolları: kasa-yerel nokta dizisi (x -11: parçaların kapak yanında, görünür). Soğuk hava önden girer, ısınıp tavandan çıkar.
// Renk (mavi -> turuncu), ok yönü ve etiketler birlikte anlam taşır.
export const AKIS = {
  hava: [
    [[-11, 66, 52], [-11, 66, 34], [-11, 66, 8], [-11, 66, -14], [-11, 72, -30], [-11, 94, -26]],
    [[-11, 41.6, 52], [-11, 41.6, 34], [-11, 41.6, 10], [-11, 50, -12], [-11, 66, -32], [-11, 94, -26]],
    [[-11, 17.2, 52], [-11, 17.2, 34], [-11, 24, 8], [-11, 36, -14], [-11, 58, -34], [-11, 94, -26]],
  ],
  sivi: [
    [[-11, 66, 52], [-11, 66, 34], [-11, 68, 10], [-8, 76, -2], [-7, 86, -2], [-7, 98, -2]],
    [[-11, 41.6, 52], [-11, 41.6, 34], [-11, 41.6, 10], [-10, 56, -8], [-8, 76, -22], [-7, 86, -26], [-7, 98, -26]],
    [[-11, 17.2, 52], [-11, 17.2, 34], [-11, 24, 8], [-11, 36, -14], [-10, 60, -32], [-9, 80, -34], [-9, 96, -30]],
  ],
};
