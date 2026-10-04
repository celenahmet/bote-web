# bote.web.tr: bulut oturumu promptu

Bulutta (Claude Code web) yeni yazı yazdırırken oturuma verilen prompt. Aşağıdaki bloğu yapıştır
ve KONU satırını doldur. Kısa yol: "content/blog/BULUT_PROMPTU.md dosyasını oku ve uygula. KONU: ..."

Kuralların ve yazım kriterlerinin kaynağı CLAUDE.md, durumun ve kaynak bulma yönteminin kaynağı
DEVAM.md; bu dosya onları tekrar etmez, bulut oturumuna özgü bağlamı ve teslim biçimini verir.
Yayında değildir (content/ .vercelignore'da).

```
reis bote.web.tr blogu için yeni yazı yazacağız.

KONU: ____
(Boşsa: content/blog/DEVAM.md içindeki sıradaki işlerden 3-5 konu öner, her birine tek satır
arama gerekçesi yaz ve seçimimi bekle. Arama odaklı olmayan yazı yazılmaz.)

SİTE VE OKUR
bote.web.tr, Bilgisayar ve Öğretim Teknolojileri Eğitimi (BÖTE) bölümünü, eğitim fakültesini ve
eğitim teknolojilerini anlatan blog. Okur önce BÖTE ve eğitim fakültesi akademisyenleri ile
lisansüstü adayları, sonra öğretmen adayları ve öğrenciler. Her yazı, BÖTE'de doktoralı bir
öğretim üyesi okuyacakmış gibi yazılır; hedef alanında başvurulan kaynak olmak. Ders dizisi
yazılarında ek hedef, yazıyı okuyan öğrencinin o konudan sınavda tam puan alabilmesi.

NEDEN BU KADAR SIKI
Önceki bir bulut oturumu ağ kapalıyken yazdı: DOI'leri hafızadan, sayıları arama özetinden aldı.
Yazılar düzgün görünüyordu ama her künye ve her sayı sonradan tek tek yeniden doğrulanmak zorunda
kaldı. Akademisyen okurun gözünde tek yanlış künye bütün siteyi düşürür. Bu yüzden burada hız
değil doğruluk ölçülür; doğrulanamayan bilgi yazılmaz, eksik yazı yanlış yazıdan iyidir.

ÇALIŞMA BİÇİMİ
- Önce CLAUDE.md (kurallar, derinlik standardı, doğrulama kapısı) ve content/blog/DEVAM.md (durum,
  yazı üretim yöntemi, ders dizileri) okunur. Örnek yazı: content/blog/posts/fiziksel-programlama-nedir.md.
- Alt ajan, görev dağıtımı ya da workflow çalıştırma; işi kendin, tek oturumda yap. Bütçe sınırlı:
  yalnız gereken dosyayı oku, çıktıları kısa tut, ara rapor yazma. Bir oturumda bir yazı.
- Her cevabında bana "reis" diye hitap et. Türkçe ve kısa yaz.

İLK İŞ: AĞ DENETİMİ
Yazmadan önce şu adreslere birer istek at: doi.org, api.crossref.org, dergipark.org.tr,
eric.ed.gov, api.openalex.org ve konunun resmî kaynağı (yok.gov.tr, meb.gov.tr, osym.gov.tr,
resmigazete.gov.tr, mevzuat.gov.tr gibi). Açılmayan varsa DUR ve hangilerinin kapalı olduğunu yaz.
CLAUDE.md'deki "ağ kısıtlı oturum istisnası" bu oturumda KULLANILMAZ: kaynak açılamıyorsa o
iddia yazılmaz, yazı o kaynağa dayanıyorsa yazı yazılmaz.

DOĞRULAMA
- Her kaynak açılır; yazar, yıl, başlık, dergi, cilt, sayı, sayfa ve DOI kaynağın kendisinden
  ya da Crossref kaydından okunur. Hafıza ve arama özeti doğrulama değildir.
- Her sayı (etki büyüklüğü, örneklem, yıl, kontenjan, madde numarası) kaynağın tablosundan ya da
  sayfasından alınır ve content/blog/dogrulama-notlari/<adres>.md dosyasına kaynak, sayfa ve
  erişim tarihiyle yazılır (şablon o klasördeki README).
- Sayfa numarasını göremediğin metinden doğrudan alıntı yapma; kendi cümlenle aktar.
- Hesap içeren yazıda her sayısal sonucu küçük bir programla denetle ve bunu doğrulama notuna yaz.

YAZI
Yazım kriterleri CLAUDE.md'de "Derinlik standardı" ve "Yazım kriterleri: arama, yapı, atıf"
başlıkları altında; hepsini uygula. En sık atlananlar: başlıkta ve ilk paragrafta aranan ifade,
"X Nedir?" kalıbı, tam 6 SSS, her ana başlıkta atıf, dolgu soru cümlesi yok, yayındaki yazının
başlığına ve adresine dokunulmaz.

BU OTURUMDA YAPILMAYACAKLAR
- main'e push etme (main yayına çıkar). Yazıyı content/blog/posts altına yaz, oturumun dalında
  bırak; inceleme dal üzerinden yapılacak. CLAUDE.md'deki taslak adımının yerini bu tutar.
- tools/pdf/uret.mjs komutlarını ve indexnow'u çalıştırma; sunucu erişimi ister, yerelde yapılır.
- Derleme çıktısını commit etme. cd tools && npm run build && npm test ile yazının derlendiğini ve
  uyarı vermediğini gör, sonra yalnız kaynak dosyaları ekle: yazının kendisi, doğrulama notu,
  bağlantı eklediğin yazılar ve üretildiyse content/blog/covers altındaki iki kapak dosyası.
  Kök dizindeki blog/, pdf/, d/ klasörleri ve site haritası yerelde yeniden üretilecek.
- Commit mesajına Co-Authored-By ekleme; git add ile yalnız kendi dosyalarını ekle.

BİTİRMEDEN ÖNCE: HAKEM OKUMASI
Yazıyı BÖTE'de doçent bir hakem gözüyle baştan oku: eksik eleştiri, eksik Türkçe kaynak, ikincil
kaynak, tarih hatası, yazar ve yıl uyumsuzluğu, kaynakta olmayan genelleme var mı? Bulduğunu düzelt.

TESLİM RAPORU (kısa)
- Adres, başlık, tür, kelime ve kaynak sayısı (kaçı Türkçe hakemli); derleme uyarısı var mı.
- Hakem okumasında ne bulundu, ne düzeltildi.
- Açamadığın kaynaklar ve bu yüzden yazmadığın şeyler.
- Yerelde yapılacaklar: PDF, derleme çıktısı, yayın.
- Benim karar vermem gereken bir şey varsa o.
```
