// Keşif kataloğu: Bilgisayar Donanımı ailesi (yalın veri; hem tarayıcı hem derleme betiği okur).
// Biçim Arduino ailesiyle aynıdır. Her keşif noktası bir gruba (renk + simge) bağlıdır; işaretlerde numara da
// vardır, renk tek başına anlam taşımaz.
//
// Kimlikler sahnedeki parça adlarıdır (cevre.js, kasa.js vekilleri ve donanimSahne.js kesifNoktalari ile aynı).
// Kart içeriği sırası: kavramlar.json[id], sonra kesif.json[id], sonra `kavram`, en sonda `ad` + `kisa`.
// oncelik: ekranda çakışan işaretlerden önceliği düşük olan gizlenir, yaklaştıkça açılır.

export const KATEGORI_SIRA = ['girdi', 'cikti', 'ikisi', 'depolama', 'kasa'];
export const KATEGORI = {
  girdi: { ad: 'Girdi birimleri', renk: '#1e6fd9', ikon: 'keyboard' },
  // açık zeminde beyaz simge okunmuyor: turuncuda koyu simge
  cikti: { ad: 'Çıktı birimleri', renk: '#f57c00', ikon: 'monitor', koyu: true },
  ikisi: { ad: 'Hem girdi hem çıktı', renk: '#7c4dff', ikon: 'headphones' },
  depolama: { ad: 'Depolama', renk: '#00897b', ikon: 'hard-drive' },
  kasa: { ad: 'Kasa ve bağlantılar', renk: '#6b7280', ikon: 'plug' },
};

const A = 3, B = 2, C = 1; // öncelik: ana, ikincil, ayrıntı
export const KESIF = {
  // ---------------------------------------------------------------- girdi birimleri
  klavye: { kat: 'girdi', ad: 'Klavye', oncelik: A, kisa: 'Harf, rakam ve komut tuşlarıyla bilgisayara yazı yazdırır. Girdi birimidir.' },
  'tus-harf': { kat: 'girdi', ad: 'Harf ve rakam tuşları', oncelik: C, kisa: 'Basınca ekranda o harf, rakam ya da işaret belirir.' },
  'tus-ozel': { kat: 'girdi', ad: 'Özel tuşlar', oncelik: C, kisa: 'Yazı yazmak yerine bir iş yaptıran tuşlar: Tab, Caps Lock, Alt, ok tuşları, Delete ve F tuşları.' },
  'tus-esc': { kat: 'girdi', ad: 'Esc tuşu', oncelik: C, kisa: 'Yapılan işten vazgeçmeyi ya da açık pencereyi kapatmayı sağlar.' },
  'tus-shift': { kat: 'girdi', ad: 'Shift tuşu', oncelik: B, kisa: 'Basılı tutulurken harfler büyük çıkar, rakam tuşlarının üstündeki işaretler yazılır.' },
  'tus-ctrl': { kat: 'girdi', ad: 'Ctrl tuşu', oncelik: B, kisa: 'Başka bir tuşla birlikte basılınca kısayol komutu verir. Örneğin Ctrl ile C seçileni kopyalar.' },
  'tus-enter': { kat: 'girdi', ad: 'Enter tuşu', oncelik: B, kisa: 'Yazdığımızı onaylar ya da imleci yeni satıra geçirir.' },
  'tus-bosluk': { kat: 'girdi', ad: 'Boşluk tuşu', oncelik: B, kisa: 'Kelimeler arasında boşluk bırakır. Klavyenin en uzun tuşudur.' },
  fare: { kat: 'girdi', ad: 'Fare', oncelik: A, kisa: 'Ekrandaki imleci hareket ettirir; sol ve sağ düğmeyle seçme, açma gibi komutlar verir. Girdi birimidir.' },
  'fare-tekerlek': { kat: 'girdi', ad: 'Fare tekerleği', oncelik: C, kisa: 'Sayfayı yukarı aşağı kaydırır. Basılınca üçüncü bir düğme gibi de çalışabilir.' },
  mikrofon: { kat: 'girdi', ad: 'Mikrofon', oncelik: A, kisa: 'Sesi elektrik sinyaline çevirerek bilgisayara aktarır. Girdi birimidir.' },
  'web-kamerasi': { kat: 'girdi', ad: 'Web kamerası', oncelik: A, kisa: 'Görüntüyü alıp bilgisayara aktarır; görüntülü görüşmede ve fotoğraf çekmede kullanılır. Girdi birimidir.' },
  // ---------------------------------------------------------------- çıktı birimleri
  monitor: { kat: 'cikti', ad: 'Monitör', oncelik: A, kisa: 'Bilgisayarın ürettiği görüntüyü gösterir. Çıktı birimidir.' },
  ekran: { kat: 'cikti', ad: 'Ekran ve pikseller', oncelik: B, kisa: 'Görüntü, piksel denen çok küçük renkli noktalardan oluşur. Nokta sayısı arttıkça görüntü keskinleşir.' },
  hoparlor: { kat: 'cikti', ad: 'Hoparlör', oncelik: A, kisa: 'Bilgisayardaki sesi duyulabilir hale getirir. Çıktı birimidir.' },
  yazici: { kat: 'cikti', ad: 'Yazıcı', oncelik: A, kisa: 'Bilgisayardaki yazı ve resmi kâğıda basar. Çıktı birimidir.' },
  // ---------------------------------------------------------------- hem girdi hem çıktı
  kulaklik: { kat: 'ikisi', ad: 'Mikrofonlu kulaklık', oncelik: A, kisa: 'Sesi kulağa verir (çıktı), kolundaki mikrofon sesinizi bilgisayara iletir (girdi).' },
  'kulaklik-mikrofon': { kat: 'ikisi', ad: 'Kulaklığın mikrofonu', oncelik: C, kisa: 'Kulaklığın ucundaki küçük mikrofon sesinizi bilgisayara taşır. Burası girdi tarafıdır.' },
  // ---------------------------------------------------------------- depolama
  'usb-bellek': { kat: 'depolama', ad: 'USB bellek', oncelik: B, kisa: 'Dosyaları saklayan, takılıp çıkarılabilen küçük depolama birimidir.' },
  // ---------------------------------------------------------------- kasa ve bağlantılar
  kasa: { kat: 'kasa', ad: 'Kasa', oncelik: A, kisa: 'Bilgisayarın ana parçalarını içinde taşıyan ve koruyan kutudur. Bu derste kapalı kalır.' },
  'guc-dugmesi': { kat: 'kasa', ad: 'Güç düğmesi', oncelik: B, kisa: 'Bilgisayarı açar ve kapatır.' },
  'usb-girisi': { kat: 'kasa', ad: 'USB girişi', oncelik: B, kisa: 'Klavye, fare, yazıcı ve USB bellek gibi cihazların takıldığı giriştir.' },
  'ses-jaklari': { kat: 'kasa', ad: 'Ses girişleri', oncelik: B, kisa: 'Kulaklık, mikrofon ve hoparlör kablolarının takıldığı yuvalar. Yanlarındaki simge ve renk hangisinin nereye takılacağını gösterir.' },
  'hdmi-girisi': { kat: 'kasa', ad: 'HDMI girişi', oncelik: B, kisa: 'Görüntüyü monitöre taşıyan kablonun takıldığı giriştir.' },
  'ag-girisi': { kat: 'kasa', ad: 'Ağ girişi', oncelik: C, kisa: 'İnternet kablosunun takıldığı giriştir.' },
  'guc-girisi': { kat: 'kasa', ad: 'Güç kablosu girişi', oncelik: B, kisa: 'Prizden gelen elektriğin kasaya girdiği yerdir.' },
  'guc-kaynagi': { kat: 'kasa', ad: 'Güç kaynağı', oncelik: B, kisa: 'Prizdeki elektriği bilgisayar parçalarının kullanabileceği düşük gerilime çevirir.' },
};
