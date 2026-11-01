// 3D Simülasyon Merkezi kartı (Ahmet 01.11.2026: "böte yazılarına da bu simülasyon merkezini
// linkleyelim ... yazı okurken ai modun yakınına, ilgi çekici şekilde; arduino ile ilgili yazılarda,
// breadboard yazılarında görülmüş olur").
// Yazının ön bilgisindeki `simulasyon: <değer>` alanı, yazı sayfasında "AI ile Özetle"nin hemen altına
// kartı koyar (SimulasyonKarti.astro). Değer bir ders adresi (3d/<ders>.html) ya da merkez (/3d).
// Kart metni blog tarafında durur: ders içeriği değişince blog derlemesi etkilenmez; yalnız hedef
// sayfanın varlığı denetlenir (içeriği gelmemiş ders sayfası üretilmez, kart da ona bağlanamaz).
import fs from 'node:fs';
import path from 'node:path';

export const SIMULASYON_KARTLARI = {
  merkez: {
    baslik: "Arduino ve breadboard'u 3D dene",
    metin: "Arduino UNO'yu ve breadboard'u üç boyutlu inceleyin, devreleri adım adım kurup çalıştırın; anlatım 5-8. sınıf düzeyine göre değişir.",
  },
  'arduino-ve-breadboard': {
    baslik: "Arduino ve breadboard'u 3D tanı",
    metin: "Kartın parçalarını ve breadboard'daki gizli bağlantıları üç boyutlu sahnede keşfedin; anlatım 5-8. sınıf düzeyine göre değişir.",
  },
  'arduino-led-yakma': {
    baslik: 'İlk LED devresini 3D kur',
    metin: "LED'i, 220 Ω direnci ve kabloları breadboard'a adım adım yerleştirin, yanıp sönen kodu sahnede çalıştırın.",
  },
  'arduino-buton-led': {
    baslik: 'Butonla LED devresini 3D dene',
    metin: "Butona basınca yanan LED devresini 10 kΩ direnç ve if-else koduyla adım adım kurun, girişin nasıl okunduğunu sahnede görün.",
  },
  'arduino-trafik-isigi': {
    baslik: 'Trafik ışığını 3D kur',
    metin: "Üç LED'in yanma sırasını bir algoritma olarak kurun; loop ve delay komutlarının işini sahnede adım adım izleyin.",
  },
};

export const simulasyonYolu = (deger) => (deger === 'merkez' ? '/3d' : `/3d/${deger}`);

// Merkeze giden her bağlantı yeni sekmede açılır (Ahmet 01.11.2026: "3D Simülasyon Merkezine giden
// TÜM bağlantılar yeni sekmede açılsın"): üst menü, Menü, alt bilgi, yazı içi bağlantılar, bu kart ve
// HTML site haritaları. Bağlantının içine ekran okuyucu için görünmez not konur; .sr-only blog.css'te,
// site haritalarında ise yüklenen fontawesome CSS'inde tanımlı. Merkezin kendi iç gezinmesi bunun dışında.
export const YENI_SEKME = { target: '_blank', rel: 'noopener' };
export const YENI_SEKME_OZNITELIK = Object.entries(YENI_SEKME).map(([k, v]) => ` ${k}="${v}"`).join('');
export const YENI_SEKME_NOTU_HTML = '<span class="sr-only"> (yeni sekmede açılır)</span>';
export const YENI_SEKME_NOTU_EN_HTML = '<span class="sr-only" lang="en"> (opens in a new tab)</span>';
export const merkezBaglantisiMi = (href) => /^(?:https?:\/\/(?:www\.)?bote\.web\.tr)?\/3d(?:[/?#]|$)/.test(String(href ?? ''));
// Notun sayfa dışında anlamı yok: besleme, PDF gövdesi ve kelime sayımı notsuz HTML'i kullanır.
export const yeniSekmeNotunuCikar = (html) => String(html).split(YENI_SEKME_NOTU_HTML).join('');
const simulasyonDosyasi = (root, deger) => path.join(root, '3d', deger === 'merkez' ? 'index.html' : `${deger}.html`);

// Ön bilgi değerini denetler: { deger } ya da { hata }.
export function simulasyonDenetle(root, ham) {
  if (ham == null || ham === '') return { deger: null };
  const deger = String(ham).trim();
  if (!SIMULASYON_KARTLARI[deger]) return { hata: `simulasyon tanimsiz: ${deger} (${Object.keys(SIMULASYON_KARTLARI).join(' | ')})` };
  if (!fs.existsSync(simulasyonDosyasi(root, deger))) return { hata: `simulasyon sayfasi yok: ${simulasyonYolu(deger)} (once: node tools/3d/build.mjs)` };
  return { deger };
}
