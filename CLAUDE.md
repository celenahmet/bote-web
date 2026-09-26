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
- Yazı sayfası: sol metin, sağ kenar çubuğu (üstleri hizalı). Başlık altında yazar,
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
- Derinlik: kavram yazıları tanımı, kuramsal arka planı, modelleri/taksonomileri, ölçme
  yollarını ve somut sınıf örneklerini birlikte verir; yüzeysel özetle yetinilmez.
- Özellikler: görüntülenme sayısı (Upstash Redis, `/api/views`), okuma süresi, arama (⌘K),
  popüler/son okunan yazılar, SSS akordeonu, paylaşım. Yerleşim referansı: uniconnectly.com/blog.
- Reklam alanları AdSense'e hazır; şimdilik UniConnectly kartı gösterilir: logo
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
