// 3D adresleri: tek kaynak (derleme, Özgür sayfası, blog kartları, site haritası sırası).
// Ahmet 02.11.2026: "/3d genel simülasyon merkezi olsun, Arduino sistemini /3d/arduino altına taşıyalım,
// sonraki simülasyonlar /3d/<aile> altında". Ders kimliği (slug) DEĞİŞMEDİ: tarayıcıdaki ilerleme, sınıf ve
// içerik dosyaları ona bağlı; yalnız adres aile altına taşındı. Eski adresler vercel.json'da kalıcı yönlendirme.
export const MERKEZ_YOL = '/3d';
export const MERKEZ_AD = '3D Simülasyon Merkezi';

// Aileler merkez sayfasında bu sırayla listelenir; yalnız yayında olanlar burada durur (yer tutucu yok).
// Bilgisayar Donanımı (Ahmet 02.11.2026: "https://bote.web.tr/3d/hardware olarak yapsak daha iyi olurdu ingilizce olsun
// dosya yolu"): adres İngilizce, aile kimliği 'donanim' kalır (içerik klasörü ve tarayıcıdaki kayıtlar ona bağlı).
export const AILELER = [
  { id: 'arduino', ad: 'Arduino ve Breadboard', kirinti: 'Arduino', yol: '/3d/arduino' },
  { id: 'donanim', ad: 'Bilgisayar Donanımı', kirinti: 'Donanım', yol: '/3d/hardware' },
];
export const aile = (id) => AILELER.find((a) => a.id === id);

// ders kimliği -> adres
export const DERS_YOLU = {
  'arduino-ve-breadboard': '/3d/arduino/tanitim',
  'arduino-led-yakma': '/3d/arduino/led-yakma',
  'arduino-buton-led': '/3d/arduino/buton-led',
  'arduino-trafik-isigi': '/3d/arduino/trafik-isigi',
  // Bilgisayar Donanımı (ders adresi adları İngilizce; ders kimlikleri Türkçe kalır)
  'girdi-cikti-birimleri': '/3d/hardware/input-output-devices',
  'kasanin-ici': '/3d/hardware/inside-the-case',
};
export const OZGUR_YOL = '/3d/arduino/ozgur-mod';

// Yayından kalkan adresler -> yeni adres. vercel.json'daki kalıcı yönlendirmeler bununla denetlenir (tools/check-site.mjs,
// npm test): her eski adres 308 ile buraya gider, sorgu dizgesi (?sinif=6) korunur, hedef sayfa vardır.
export const ESKI_YOL = {
  // 02.11.2026: Arduino dersleri /3d/arduino altına taşındı
  '/3d/arduino-ve-breadboard': DERS_YOLU['arduino-ve-breadboard'],
  '/3d/arduino-led-yakma': DERS_YOLU['arduino-led-yakma'],
  '/3d/arduino-buton-led': DERS_YOLU['arduino-buton-led'],
  '/3d/arduino-trafik-isigi': DERS_YOLU['arduino-trafik-isigi'],
  '/3d/ozgur-mod': OZGUR_YOL,
  // 02.11.2026 önizlemesi (/3d/donanim, sitemap'te vardı) -> aile sayfası; alt adresleri vercel.json'da /3d/donanim/:yol*
  '/3d/donanim': aile('donanim').yol,
};

// Adres -> bote-web köküne göre çıktı dosyası: merkez ve aile sayfası klasörün index.html'i, ders ve Özgür Mod tek dosya
// (Vercel cleanUrls: /3d/arduino/led-yakma -> 3d/arduino/led-yakma.html).
export const yolDosyasi = (yol) => (yol === MERKEZ_YOL || AILELER.some((a) => a.yol === yol) ? `${yol.slice(1)}/index.html` : `${yol.slice(1)}.html`);
