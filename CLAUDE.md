# bote.web.tr — çalışma kuralları

BÖTE (Bilgisayar ve Öğretim Teknolojileri Eğitimi) bölüm tanıtım sitesi. Vercel'de
statik yayın; build adımı yok, depo kökü yayın klasörüdür.

## Genel
- Ajan/workflow çalıştırılmaz; tüm işler doğrudan yapılır.
- Amaç siteyi güncellemek ve SEO odaklı ilerlemek. Takılınca profesyonelce düşün,
  gerekirse önerilerle birlikte kullanıcıya sor.
- Siteden bağlantı verilmeyen (menü/sayfalardan ulaşılamayan) kısımlar yayından
  kaldırılır ama dosyalar silinmez: `.vercelignore`'a eklenir.

## SEO ve erişilebilirlik
- Hedef: yayındaki her sayfada (blog dahil) Lighthouse SEO skoru 100.
- Her sayfa: doğru `lang`, tekil `<title>`, `description`, `canonical`, gerekiyorsa
  `hreflang`, açıklayıcı bağlantı metni, görsellerde `alt`, geçerli JSON-LD.
- Site arama motorlarına ve yapay zekâ araçlarına/ajanlarına açık olmalı:
  `robots.txt`, `sitemap.xml`, `llms.txt`, RSS; içerik JavaScript'siz okunabilir.
- Değişiklikten sonra testler çalıştırılır: `cd tools && npm test`
  (bağlantı, SEO, JSON-LD, robots/sitemap/llms) ve `npm run lighthouse`.

## Blog
- Konu: BÖTE bölümü, eğitim fakültesi ve öğretmen yetiştirme. Dengeli, tarafsız yazılır.
  Üslup akademik ve sade; blog dili (kategori rozeti, "dk okuma", "görüntülenme")
  uniconnectly.com/blog'dan örnek alınabilir.
- **Arama ölçümü önce gelir:** konu, başlık ve SSS tahmine göre değil arama verisine göre
  seçilir. İlk turda bölümün hangi kelimelerle arandığı ölçülür (ör. "BÖTE", "bilgisayar
  öğretmenliği", "bilişim teknolojileri öğretmenliği"): Google Trends ve site doğrulandıktan
  sonra Search Console. Ölçüm yapılamazsa bu açıkça söylenir; metinde terim varyantları
  birlikte kullanılır.
- Her yazıda **tam 6 SSS**, gerçek arama sorgusu biçiminde (üretici doğrular).
- Her yazıda **en az 2 yabancı kaynak** zorunlu; Türk akademisyenlerin tanım ve
  kaynakları isteğe bağlı eklenir. Tüm bilgiler doğrulanabilir olmalı (site bilgi
  kaynağıdır); doğrulanamayan iddia yazılmaz.
- **Kaynak politikası:** birincil/resmî kaynaklar (YÖK, MEB, ÖSYM, Resmî Gazete,
  üniversitelerin kendi sayfaları), akademik yayınlar (DergiPark, DOI) ve uluslararası
  kuruluşlar (OECD, UNESCO, AB, ISTE...) kullanılır. Türkiye'deki ticari siteler (haber
  portalları, tercih/rehber siteleri, yayınevi ve kurs siteleri, bloglar) pazardaki
  rakiplerimiz olduğundan kaynak gösterilmez ve bağlantı verilmez.
- Proaktif ol: blog yalnızca yazı yazmak değildir. Okurun sonraki adımı (ilgili yazı, site
  içi sayfa, tablo, kontrol listesi, SSS) ve okuru sitede tutacak sunum her yazıda düşünülür.
- Yazar imzası: "BÖTE Editör Ekibi".
- Yazılar önce taslak olarak (`content/blog/drafts/`) kullanıcının onayına sunulur;
  onaylanmadan `content/blog/posts/`'a taşınmaz ve yayınlanmaz (kullanıcı doğrudan yayın
  izni verdiyse taslak adımı atlanabilir). Taslaklar yalnızca inceleme için `/blog/taslak`
  altında önizlenir: noindex, robots.txt ile kapalı, sitemap/besleme/llms.txt dışı ve
  siteden bağlantı almaz.
- Yazı sayfası: sol metin, sağ kenar çubuğu; sağ blok kapak görselinin hizasından başlar ve
  kaydırırken içerikle uyumlu ilerler (sonu ekrana gelince sabitlenir). Girişten hemen sonra
  numaralı, iki sütunlu "İçindekiler" kartı yer alır. "Kısaca" özeti sonucu önden
  vermemek için yazının sonunda, kontrol listesinden ya da "Sonuç"tan hemen önce durur. Başlık altında yazar,
  tarih, okuma süresi, görüntülenme (kelime sayısı gösterilmez). Kenar çubuğu sırası:
  reklam > kategoriler (ikon + sayı) > son yazılar > "Bu yazıda neler var?" (yapışkan
  içindekiler, tıklanınca ilgili bölüme gider). Liste sayfalarında reklam > kategoriler >
  popüler > son görüntülenenler.
- Atıflar ve kaynakça: metindeki atıf numaraları ve kaynakçadaki "Metinde göster"
  bağlantıları varsayılan **kapalı**; her yazıdaki "Kaynakça ayarları"ndan ayrı ayrı açılır.
  Kaynakça sade: kısa künye (başlık kaynağa bağlı), dil etiketi ve erişim tarihi gösterilmez;
  ilk 2 kaynak görünür, fazlası "Tümünü gör" ile açılır. Her kaynağın sağındaki ⓘ düğmesi,
  kaynağın yazıdaki rolünü anlatan notu (`note`, her kaynakta zorunlu; üretici uyarır) ve
  kullanıldığı bölümleri gösterir. Yazı sonunda editör kutusu ve kaynak sayısı notu yoktur.
- **Okur:** öncelikle BÖTE ve eğitim fakültesi akademisyenleri, lisansüstü adaylar ve
  araştırmacılar; sonra öğretmen adayları ve tercih yapan öğrenciler. Her yazı BÖTE'de doktoralı
  bir öğretim üyesi okuyacakmış gibi yazılır; hedef, alanında başvurulacak kaynak düzeyi.
  Hız değil kalite: bir turda en fazla 1-2 yazı derinleştirilir (her yazı ayrı literatür taraması).

### Derinlik standardı
Yazı türü front matter'da `type` ile yazılır; eşikler `blog.yml > standards`'ta, üretici altında
kalınca yazı başına tek satır uyarı verir. Kaynak türü `sources[].kind`:
`makale | kitap | bolum | tez | bildiri | resmi | rapor | veri | web` (hakemli/akademik: makale, kitap, bölüm).

**Kavram ve kuram yazıları** (`type: kavram`; TPACK, ADDIE, çoklu ortam, oyunlaştırma, bilgi
işlemsel düşünme, uzaktan eğitim, LMS, DigCompEdu, ISTE, eğitimde yapay zekâ, öğretim tasarımı):
1. 2000-3000 kelime; 6-8 ana başlık, her biri en az 250 kelime (gerekirse alt başlık). Az bölüm, derin bölüm.
2. Tanım tartışması: en az iki farklı tanım, yazar ve yılıyla, birincil kaynaktan; doğrudan alıntıda sayfa numarası.
3. Tarihsel gelişim: tarihli kilometre taşları; köken tartışması varsa açıkça yazılır.
4. Ampirik kanıt **sayıyla**: meta-analiz/sistematik derleme bulguları; etki büyüklüğü (g ya da d),
   varsa güven aralığı, çalışma sayısı (k), örneklem ve bağlam. Sayısız "küçük-orta düzey" yetmez.
5. **Eleştiriler ve sınırlılıklar** ayrı ana başlık: en az iki yayımlanmış eleştiri, yazar ve yılıyla.
6. Türkiye'de alanyazın: en az 3 Türkçe hakemli çalışma (DergiPark, TR Dizin, YÖK Ulusal Tez
   Merkezi). Türkçeye uyarlanmış ölçek varsa madde sayısı, faktör yapısı, güvenirlik değerleri.
   Türkiye'deki araştırma eğilimleri (derleme ya da bibliyometri çalışmasından).
7. Uygulama: sınıf örneği ve araştırma örneği ayrı; araştırmacı için hangi desen ve hangi ölçek.
8. Araştırmacılar için açık sorular: alanyazının çözemediği 3-5 soru, kaynaklı.
9. Terim tablosu: Türkçe terim, İngilizce karşılığı, alanyazındaki farklı Türkçe kullanımlar.
10. En az 12 kaynak, en az yarısı hakemli dergi ya da akademik kitap (DOI'li); her ana başlıkta
    en az bir atıf; ikincil değil birincil kaynak.

**Bölüm, politika ve mevzuat yazıları** (`type: politika`; BÖTE nedir, öğrenci alımı, 7528,
MEA, AGS, formasyon, öğretmenlik uygulaması, akreditasyon, mezunlar, ders ve program yazıları):
1. 1500-2500 kelime.
2. Sayısal zaman serisi zorunlu: yıllara göre program sayısı, kontenjan, yerleşen, taban sıralama
   (ÖSYM tercih kılavuzları, YÖK Atlas); ilgili alanda atama sayıları (MEB duyuruları). Tablonun
   altında "Veri notu": belge, yıl, erişim tarihi. Bulunamayan yıl boş kalır ve bu yazılır; tahmin yok.
3. Mevzuat madde numarasıyla, Resmî Gazete tarihi ve sayısıyla; önceki düzenlemeyle karşılaştırma tablosu.
4. Alan içi tartışma (BÖTE'nin kimliği, kontenjan politikası vb.): Türk akademisyenlerin yayımlanmış
   görüşleri, en az 3 hakemli çalışma.

**Rehber ve kariyer yazıları** (`type: rehber`): en az 1200 kelime ve 8 kaynak; kariyer bilgisi
de sayı ve kaynakla (atama, istihdam, mevzuat) verilir, yoğunluk düşürülmez.

**Tüm yazılar:**
- Şablon hissi yok: "duymuş olabilirsiniz" girişleri, her yazıda aynı başlık dizisi ve "zaman
  gösterecek" kapanışları kullanılmaz. Giriş, yazının sorusunu ve okura katkısını 2-3 cümlede
  söyler; yapı yazının türüne göre değişir.
- Kaynaksız genelleme yok; her sayı yıl ve kaynakla.
- Yazı sonunda "Bu yazıya atıf" kutusu (APA 7 + BibTeX; üretilir, isteğe bağlı `citeTitle` ile
  APA cümle düzeni) ve "Son güncelleme" altında değişiklik günlüğü (`changes: [{date, text}]`).
- Yazar ya da hakem adı uydurulmaz. Yayın ilkeleri (kaynak politikası, doğrulama yöntemi,
  düzeltme yolu) `/blog/editor-ekibi` sayfasındadır.

### Doğrulama kapısı
- Her kaynak açılır ve künyesi doğrulanır: yazar, yıl, başlık, dergi, cilt, sayı, sayfa, DOI
  çalışıyor mu. Açılamayan kaynak kullanılmaz; ağ kısıtı yüzünden erişilemiyorsa o iddia
  yazılmaz ve kullanıcıya bildirilir. Arama motoru özeti ya da hafıza doğrulama sayılmaz.
- Ağ kısıtlı oturum istisnası (kullanıcı izni, 26.09.2026): kaynak açılamıyorsa künye ve sayılar
  yalnızca arama dizininin kayıt sayfalarıyla (ERIC, yayınevi, DergiPark, kurum deposu) çapraz
  denetlenebilir; doğrulama notlarında "dizin düzeyi" yazılır, DOI'nin kaynağı (dizin / hafıza)
  belirtilir, yazının değişiklik günlüğünde "tam metin denetimi sürüyor" denir ve ağ açılınca
  tam metin denetimi tamamlanır. Sayısı çelişkili ya da tek dizinde görülen değer yazılmaz.
- Her sayı kaynağındaki tablo ya da sayfadan alınır; `content/blog/dogrulama-notlari/<slug>.md`
  dosyasına kaynak, sayfa ve erişim tarihiyle yazılır (şablon: klasördeki README).
- Yayından önce hakem okuması: yazı BÖTE'de doçent bir hakem gözüyle baştan okunur; eksik
  eleştiri, eksik Türk kaynağı, ikincil kaynak, tarih hatası, yazar-yıl uyumsuzluğu aranır ve
  düzeltilir. Teslimde hakem okuması notları verilir: ne bulundu, ne düzeltildi, ne doğrulanamadı.
- Adres (slug) ve kategori değişmez; yalnız içerik derinleşir, `updated` güncellenir.
- Sıra: bote-ogrenci-alimi-ve-gelecegi, tpack-modeli-nedir > bote-nedir, ADDIE, çoklu ortam,
  bilgi işlemsel düşünme > mevzuat yazıları (7528, MEA, AGS, formasyon) > kalan kavram yazıları >
  diğerleri > yeni yazılar (önce arama ölçümü): FATİH Projesi, pandemide EBA ve acil uzaktan
  öğretim, BÖTE'de lisansüstü eğitim, eğitim teknolojisi dergileri ve kongreleri, Türkiye'de eğitim
  teknolojisi araştırma eğilimleri, tasarım tabanlı araştırma, öğrenme analitiği.
- Özellikler: görüntülenme sayısı (Upstash Redis, `/api/views`), okuma süresi, arama (⌘K),
  popüler/son okunan yazılar, SSS akordeonu, paylaşım. Yerleşim referansı: uniconnectly.com/blog.
- Yazı sonunda solda öne çıkan yazılar, sağda UniConnectly paneli; dikeyde az yer kaplayan yatay
  yerleşim (üstte tanıtım + 3 adım, ortada hedef kitle sekmeleri ve 3 sütun kart, altta mağaza
  rozetleri + düğmeler; içerik `blog.yml > ads.showcase`). UniConnectly alanlarının etiketi
  "Reklam" değil **"İş birliği"**dir ("Reklam" yalnızca AdSense için). Reklam alanları AdSense'e hazır; şimdilik
  kenar çubuğunda UniConnectly kartı gösterilir: logo
  (`tools/blog-app/public/ads/uniconnectly-logo.svg`, uniconnectly.com'dan), tek cümlelik
  tanım, "Ücretsiz keşfet" ve App Store / Google Play / AppGallery rozetleri.
- Blog arayüzü **Astro + React adaları** (`tools/blog-app/`): sayfalar derlemede statik
  HTML olur (SEO ve yapay zekâ erişimi için içerik JS'siz okunur); sayaç, arama, tema,
  okuma ilerlemesi, popüler/son okunan yazılar ve kaynak önizlemesi React adasıdır.
  Mor-pembe palet; varsayılan açık tema (koyu tema yalnızca düğmeyle); ana sitenin
  görünümünü taklit etmez.
- Mezunlar sayfası içeriği `content/pages/mezunlar.md` ve `en-graduates.md`'den üretilir.
- Blog kaynağı `content/blog/`, üretilen çıktı `blog/` (commit'lenir):
  `cd tools && npm run build` (Astro + kök dosyalar: sitemap, llms.txt, site haritaları).
