// 3D adresleri: tek kaynak (derleme, Özgür sayfası, blog kartları, site haritası sırası).
// Ahmet 02.11.2026: "/3d genel simülasyon merkezi olsun, Arduino sistemini /3d/arduino altına taşıyalım,
// sonraki simülasyonlar /3d/<aile> altında". Ders kimliği (slug) DEĞİŞMEDİ: tarayıcıdaki ilerleme, sınıf ve
// içerik dosyaları ona bağlı; yalnız adres aile altına taşındı. Eski adresler vercel.json'da kalıcı yönlendirme.
export const MERKEZ_YOL = '/3d';
export const MERKEZ_AD = '3D Simülasyon Merkezi';

// Aileler merkez sayfasında bu sırayla listelenir; yalnız yayında olanlar burada durur (yer tutucu yok).
export const AILELER = [
  { id: 'arduino', ad: 'Arduino ve Breadboard', kirinti: 'Arduino', yol: '/3d/arduino' },
];
export const aile = (id) => AILELER.find((a) => a.id === id);

// ders kimliği -> adres
export const DERS_YOLU = {
  'arduino-ve-breadboard': '/3d/arduino/tanitim',
  'arduino-led-yakma': '/3d/arduino/led-yakma',
  'arduino-buton-led': '/3d/arduino/buton-led',
  'arduino-trafik-isigi': '/3d/arduino/trafik-isigi',
};
export const OZGUR_YOL = '/3d/arduino/ozgur-mod';

// 02.11.2026 öncesi adresler -> yeni adres (vercel.json yönlendirmeleri bununla denetlenir)
export const ESKI_YOL = {
  '/3d/arduino-ve-breadboard': DERS_YOLU['arduino-ve-breadboard'],
  '/3d/arduino-led-yakma': DERS_YOLU['arduino-led-yakma'],
  '/3d/arduino-buton-led': DERS_YOLU['arduino-buton-led'],
  '/3d/arduino-trafik-isigi': DERS_YOLU['arduino-trafik-isigi'],
  '/3d/ozgur-mod': OZGUR_YOL,
};

// Adres -> bote-web köküne göre çıktı dosyası: merkez ve aile sayfası klasörün index.html'i, ders ve Özgür Mod tek dosya
// (Vercel cleanUrls: /3d/arduino/led-yakma -> 3d/arduino/led-yakma.html).
export const yolDosyasi = (yol) => (yol === MERKEZ_YOL || AILELER.some((a) => a.yol === yol) ? `${yol.slice(1)}/index.html` : `${yol.slice(1)}.html`);
