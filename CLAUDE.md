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
- Her yazıda **en az 2 yabancı kaynak** zorunlu; Türk akademisyenlerin tanım ve
  kaynakları isteğe bağlı eklenir. Tüm bilgiler doğrulanabilir olmalı (site bilgi
  kaynağıdır); doğrulanamayan iddia yazılmaz.
- Yazar imzası: "BÖTE Editör Ekibi".
- Yazılar önce taslak olarak (`content/blog/drafts/`) kullanıcının onayına sunulur;
  onaylanmadan `content/blog/posts/`'a taşınmaz ve yayınlanmaz. Taslaklar yalnızca
  inceleme için `/blog/taslak` altında önizlenir: noindex, robots.txt ile kapalı,
  sitemap/besleme/llms.txt dışı ve siteden bağlantı almaz.
- Özellikler: görüntülenme sayısı (Upstash Redis, `/api/views`), okuma süresi,
  sağ kenar çubuğu (popüler yazılar, reklam alanları, kategoriler, son görüntülenen
  yazılar). Yerleşim referansı: uniconnectly.com/blog.
- Reklam alanları AdSense'e hazır; şimdilik UniConnectly tanıtımı gösterilir.
- Blog arayüzü **Astro + React adaları** (`tools/blog-app/`): sayfalar derlemede statik
  HTML olur (SEO ve yapay zekâ erişimi için içerik JS'siz okunur); sayaç, arama (⌘K),
  tema, okuma ilerlemesi, popüler/son okunan yazılar ve mobil kaynak önizlemesi React
  adası olarak çalışır. Tasarım: "kaynak odaklı okuma" — atıflar geniş ekranda metnin
  yanında kenar notu, mor-pembe palet; varsayılan açık tema (koyu tema yalnızca düğmeyle
  seçilir); ana sitenin görünümünü taklit etmez.
- Blog kaynağı `content/blog/`, üretilen çıktı `blog/` (commit'lenir):
  `cd tools && npm run build` (Astro + kök dosyalar: sitemap, llms.txt, site haritaları).
