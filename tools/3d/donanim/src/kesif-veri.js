// Keşif kataloğu: Bilgisayar Donanımı ailesi (yalın veri; hem tarayıcı hem derleme betiği okur).
// Biçim Arduino ailesiyle aynıdır. Her keşif noktası bir gruba (renk + simge) bağlıdır; işaretlerde numara da
// vardır, renk tek başına anlam taşımaz.
//
// Kimlikler sahnedeki parça adlarıdır (cevre.js, kasa.js vekilleri ve donanimSahne.js kesifNoktalari ile aynı).
// Kart içeriği sırası: kavramlar.json[id], sonra kesif.json[id], sonra `kavram`, en sonda `ad` + `kisa`.
// oncelik: ekranda çakışan işaretlerden önceliği düşük olan gizlenir, yaklaştıkça açılır.

export const KATEGORI_SIRA = ['girdi', 'cikti', 'ikisi', 'depolama', 'kasa', 'ic', 'sogutma'];
export const KATEGORI = {
  girdi: { ad: 'Girdi birimleri', renk: '#1e6fd9', ikon: 'keyboard' },
  // açık zeminde beyaz simge okunmuyor: turuncuda koyu simge
  cikti: { ad: 'Çıktı birimleri', renk: '#f57c00', ikon: 'monitor', koyu: true },
  ikisi: { ad: 'Hem girdi hem çıktı', renk: '#7c4dff', ikon: 'headphones' },
  depolama: { ad: 'Depolama', renk: '#00897b', ikon: 'hard-drive' },
  kasa: { ad: 'Kasa ve bağlantılar', renk: '#6b7280', ikon: 'plug' },
  ic: { ad: 'Kasanın içi', renk: '#b0245e', ikon: 'cpu' },
  sogutma: { ad: 'Soğutma', renk: '#2e7d32', ikon: 'fan' },
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
  kasa: { kat: 'kasa', ad: 'Kasa', oncelik: A, kisa: 'Bilgisayarın ana parçalarını içinde taşıyan ve koruyan kutudur. Birinci derste kapalı kalır; ikinci derste kapağı açıp içini geziyoruz.' },
  'guc-dugmesi': { kat: 'kasa', ad: 'Güç düğmesi', oncelik: B, kisa: 'Bilgisayarı açar ve kapatır.' },
  'usb-girisi': { kat: 'kasa', ad: 'USB girişi', oncelik: B, kisa: 'Klavye, fare, yazıcı ve USB bellek gibi cihazların takıldığı giriştir.' },
  'ses-jaklari': { kat: 'kasa', ad: 'Ses girişleri', oncelik: B, kisa: 'Kulaklık, mikrofon ve hoparlör kablolarının takıldığı yuvalar. Yanlarındaki simge ve renk hangisinin nereye takılacağını gösterir.' },
  'hdmi-girisi': { kat: 'kasa', ad: 'HDMI girişi', oncelik: B, kisa: 'Görüntüyü monitöre taşıyan kablonun takıldığı giriştir.' },
  'ag-girisi': { kat: 'kasa', ad: 'Ağ girişi', oncelik: C, kisa: 'İnternet kablosunun takıldığı giriştir.' },
  'guc-girisi': { kat: 'kasa', ad: 'Güç kablosu girişi', oncelik: B, kisa: 'Prizden gelen elektriğin kasaya girdiği yerdir.' },
  'guc-kaynagi': { kat: 'kasa', ad: 'Güç kaynağı', oncelik: B, kisa: 'Prizdeki elektriği bilgisayar parçalarının kullanabileceği düşük gerilime çevirir.' },
  // ---------------------------------------------------------------- kasanın içi (ders 2)
  'yan-kapak': { kat: 'kasa', ad: 'Yan kapak', oncelik: B, kisa: 'Kasanın yan yüzündeki kapaktır. Açılınca içindeki parçalar görünür; kapalıyken parçaları toz ve dokunmaktan korur.' },
  anakart: { kat: 'ic', ad: 'Anakart', oncelik: A, kisa: 'Bilgisayarın bütün parçalarının takıldığı ya da kabloyla bağlandığı ana karttır. Parçalar onun üzerinden birbiriyle konuşur.' },
  islemci: { kat: 'ic', ad: 'İşlemci', oncelik: A, kisa: 'Bilgisayarın beynidir. Hesapları yapar ve programları çalıştırır. Çalışırken ısınır, bu yüzden üstüne soğutucu takılır.' },
  'termal-macun': { kat: 'ic', ad: 'Termal macun', oncelik: B, kisa: 'İşlemci ile soğutucu arasına sürülen ince macundur. Aradaki boşlukları doldurarak ısının soğutucuya geçmesini kolaylaştırır.' },
  ram: { kat: 'ic', ad: 'RAM (bellek)', oncelik: A, kisa: 'Bilgisayarın çalışma masasıdır. Açık program ve dosyalar geçici olarak burada durur. Elektrik gidince içindekiler silinir.' },
  'ekran-karti': { kat: 'ic', ad: 'Ekran kartı', oncelik: A, kisa: 'Ekranda gördüğümüz görüntüyü hazırlar. Kendi fanları vardır ve çalışırken çok ısınır.' },
  'pcie-yuvasi': { kat: 'ic', ad: 'PCIe yuvası', oncelik: C, kisa: 'Ekran kartı gibi ek kartların anakarta takıldığı uzun yuvadır.' },
  'guc-kablolari': { kat: 'ic', ad: 'Güç kabloları', oncelik: B, kisa: 'Güç kaynağından anakarta ve ekran kartına elektrik taşıyan kalın kablolardır.' },
  'bios-pili': { kat: 'ic', ad: 'BIOS pili', oncelik: C, kisa: 'Anakartın üzerindeki küçük pildir. Bilgisayar kapalıyken saati ve temel ayarları korur.' },
  'arka-panel': { kat: 'kasa', ad: 'Arka panel', oncelik: C, kisa: 'Anakartın kasanın arkasına açılan giriş paneli. USB, ses, görüntü ve ağ girişleri burada toplanır.' },
  'wifi-karti': { kat: 'ic', ad: 'Wi-Fi kartı', oncelik: C, kisa: 'Bilgisayarın kablosuz ağa bağlanmasını sağlayan karttır. Antenleri kasanın arkasına çıkar.' },
  'veri-kablosu': { kat: 'ic', ad: 'Veri kablosu', oncelik: C, kisa: 'Depolama birimi ile anakart arasında bilgiyi taşıyan kablodur.' },
  'm2-ssd': { kat: 'depolama', ad: 'M.2 SSD', oncelik: B, kisa: 'Küçük bir kart gibi doğrudan anakarta takılan hızlı depolama birimidir. Kablo gerektirmez.' },
  'sata-ssd': { kat: 'depolama', ad: 'SATA SSD', oncelik: B, kisa: 'İnce bir kutu biçimindeki SSD. Veriyi SATA kablosuyla anakarta iletir; hareketli parçası yoktur.' },
  hdd: { kat: 'depolama', ad: 'Sabit disk (HDD)', oncelik: B, kisa: 'Dönen disklerin üzerine bilgi yazan depolama birimidir. Büyük ve ucuzdur ama SSD kadar hızlı değildir.' },
  // ---------------------------------------------------------------- soğutma
  'hava-sogutucu': { kat: 'sogutma', ad: 'Hava soğutucu', oncelik: A, kisa: 'İşlemcinin ısısını alan metal kanatlı soğutucudur. Üzerindeki fan havayı kanatların arasından üfleyerek ısıyı uzaklaştırır.' },
  'isi-borusu': { kat: 'sogutma', ad: 'Isı borusu', oncelik: C, kisa: 'Soğutucudaki bakır borulardır. Isıyı işlemcinin üstünden kanatlara hızla taşır.' },
  'sivi-sogutma': { kat: 'sogutma', ad: 'Sıvı soğutma', oncelik: A, kisa: 'Isıyı hava yerine sıvıyla taşıyan sistemdir: pompa bloğu, iki hortum ve radyatör birlikte çalışır.' },
  'pompa-blogu': { kat: 'sogutma', ad: 'Pompa bloğu', oncelik: B, kisa: 'İşlemcinin üstüne oturur ve ısıyı sıvıya verir. İçindeki pompa sıvıyı hortumlardan radyatöre doğru döndürür.' },
  radyator: { kat: 'sogutma', ad: 'Radyatör', oncelik: B, kisa: 'Sıcak sıvının ince borulardan geçerek soğuduğu kanatlı metal bölümdür. Üzerindeki fanlar ısıyı havaya atar.' },
  'sogutma-hortumu': { kat: 'sogutma', ad: 'Soğutma hortumu', oncelik: C, kisa: 'Sıvıyı pompadan radyatöre ve geri taşıyan iki esnek borudur. Biri sıcak, biri soğumuş sıvıyı taşır.' },
  'kasa-fani': { kat: 'sogutma', ad: 'Kasa fanı', oncelik: B, kisa: 'Kasanın içine serin hava alan ya da ısınan havayı dışarı atan fandır. Önde hava girer, üstte hava çıkar.' },
  'hava-akisi': { kat: 'sogutma', ad: 'Hava akışı', oncelik: C, kisa: 'Kasanın içindeki havanın yoludur: serin hava önden girer, parçaları geçerken ısınır ve yukarıdan çıkar.' },
  'toz-filtresi': { kat: 'sogutma', ad: 'Toz filtresi', oncelik: C, kisa: 'Kasaya giren havadaki tozu tutan ince ağdır. Parçaların toz içinde kalmasını önler.' },
};
