# Devam notu (son güncelleme: 2026-09-26)

Yayında değildir (`/content` .vercelignore'da). Yeni oturumda önce bunu ve CLAUDE.md'yi oku.

## Bitenler
- Derinlik standardı + build uyarıları (`blog.yml > standards`, yazı başına tek satır uyarı).
- Yazı sonu: "Bu yazıya atıf" (APA 7 + BibTeX), değişiklik günlüğü, "Sitene göm" sekmeleri
  (HTML, iframe, Markdown, React, Vue, Svelte, JavaScript, Python, LaTeX), `/blog/embed/<yazı>`,
  `/blog/atif/<yazı>.json`. Kaynak: `tools/blog/cite.mjs`.
- Editör ekibi sayfasında yayın ilkeleri.
- Standarda göre yeniden yazılan yazılar (dizin düzeyi doğrulama, uyarı yok):
  1. tpack-modeli-nedir
  2. ogretim-tasarimi-addie-modeli
  3. coklu-ortam-ogrenme-ilkeleri

## Bekleyen: tam metin denetimi (ağ açılınca, ilk iş)
Bu üç yazının kaynakları açılamadı (sandbox ağı 403). Her birinin
`content/blog/dogrulama-notlari/<slug>.md` dosyasındaki "Terminal turunda yapılacak" listesi:
- DOI'si hafızadan/kalıptan yazılanları aç ve doğrula (Graham 2011, Archambault 2010, Voogt 2013,
  Fabian 2024, Ning 2022, Kabakçı 2012, Rowland 1992, Tripp 1990).
- Eksik sayıları tam metinden ekle: Ning 2022 GA; TPACK-deep α; Ginns 2006 ve Rey 2012 d; Noetel
  ilke bazında g; Li 2025 ve Spatioti 2022 k/SMD; Özerbaş-Kaya ve Palabıyık-Oral çalışma sayıları.
- Denetim bitince yazının `changes` listesine "tam metin denetimi tamamlandı" satırı ekle.

## Sıradaki yazılar (CLAUDE.md > Doğrulama kapısı > Sıra)
1. bilgi-islemsel-dusunme-nedir (kavram) — Grover ve Pea 2013; Shute, Sun ve Asbell-Clarke 2017;
   Denning 2017; Türkçe BİD ölçekleri.
2. oyunlastirma-nedir (kavram) — Sailer ve Homner 2020: bilişsel g = 0,49 [0,30; 0,69] k = 19,
   motivasyonel g = 0,36 k = 16, davranışsal g = 0,25 k = 9 (dizinde görüldü; tam metinle teyit).
3. Veri gerektirenler (ÖSYM/YÖK Atlas/MEB/Resmî Gazete açılmadan yazılmaz):
   bote-ogrenci-alimi-ve-gelecegi (kontenjan zaman serisi), bote-nedir, 7528, MEA, AGS, formasyon.
4. Kalan kavram yazıları, sonra diğerleri; sonra yeni yazılar (önce arama ölçümü).

## Engeller / kullanıcıdan beklenenler
- Ağ: doi.org, api.crossref.org, dergipark.org.tr, tez.yok.gov.tr, yokatlas.yok.gov.tr,
  dokuman.osym.gov.tr, osym.gov.tr, yok.gov.tr, resmigazete.gov.tr, mevzuat.gov.tr, meb.gov.tr,
  eric.ed.gov, sciencedirect.com, tandfonline.com, link.springer.com (ya da tam erişim).
- App Store / Google Play / AppGallery gerçek adresleri (blog.yml > ads.house.stores).
- Google Trends / Search Console verisi (arama ölçümü).
- Canlı sitede iframe gömme kodunun başka bir sayfada açıldığını kontrol et.

## Komutlar
`cd tools && npm run build && npm test` · `node lighthouse.mjs /blog/<yazı>` ·
push: `git push origin main` (Vercel main'i yayına alır; `npx vercel ls bote-web --scope ahmet-celen` ile "Ready" beklenir) ·
yayından sonra arama motorlarına bildirim: `node tools/indexnow.mjs` (son commit'teki yazılar + listeler; ayrıntı betiğin başında).
Google IndexNow kullanmaz: sitemap.xml robots.txt'te; Search Console'da https://bote.web.tr mülkü ve site haritası kayıtlı olmalı.

## 26.09.2026 terminal turu (proje: Ahmet + terminal ajanı; yol haritası: YOL_HARITASI.md)
- Ağ açık. TPACK, ADDIE ve çoklu ortam yazılarının bütün DOI'leri Crossref'le, sayıları özgün
  özet ve tam metinlerle doğrulandı (bkz. dogrulama-notlari/*.md "Terminal turu"). Uyuşmazlık yok.
- Site: gövde başlık fontunda; liste satırlarında geçici kapak; resmî mağaza rozetleri ve gerçek
  mağaza adresleri; yazı sonunda faydalı mı + 6 ifade + paylaş tek kart, onaylı yorumlar
  (api/etkilesim.js, api/yonetim.js, /yonetim; anahtarlar bote: önekli, Upstash math ile ortak).
- Yeni kategoriler: egitim-bilimleri (Kuramlar), uluslararasi-egitim (Uluslararası).
- Yeni yazılar: piaget-bilissel-gelisim-kurami, vygotsky-sosyokulturel-kuram.

### Yazı üretim yöntemi (her yazıda)
1. Aday kaynakların DOI'leri Crossref'ten (künye), sayılar Semantic Scholar / ERIC özetinden;
   Elsevier özetleri ERIC ya da LearnTechLib'den; açık erişimli tam metin tarayıcıyla
   (ScienceDirect ve SAGE captcha istiyor). Arama özetindeki sayıya güvenilmez.
2. Türkçe hakemli kaynaklar OpenAlex'te bulunur (DergiPark araması captcha istiyor), künye ve özet
   DergiPark makale sayfasının citation meta etiketlerinden okunur.
3. AGS kapsamı: MEB 08.01.2026 duyurusu (haber/39480). KPSS için özel iddia yazılmaz.
4. Başlık en çok 60, açıklama 70-165 karakter. Başlık değişirse kapak silinip yeniden üretilir.
5. Crossref eski Ankara Üniversitesi Eğitim Bilimleri Fakültesi Dergisi makalelerinde yılı yanlış
   veriyor (örnek: 1994 makale 1974 görünüyor); yıl DergiPark makale sayfasındaki "Sayı Yıl" alanından alınır.
6. Taranmış PDF'ler macOS Vision ile okunur (PDFKit metin katmanı boşsa OCR).

### Durum (26.09 akşam)
- Kuram yazıları 1-14 yayında (YOL_HARITASI.md > İlerleme). Kalan: 15 Freud-Marcia-Selman.
- SEO (Ahmet 27.09): yazılar arama odaklı; başlıkta ve ilk paragrafta aranan ifade, SSS arama sorularından. Her push sonrası `node tools/indexnow.mjs`.
- **Tasarım elden geçirme başladı (Ahmet 26.09):** ad bote.web.tr; monospace yazı tipi hiçbir yerde
  yok; yazı tipi değişimi; ferahlık; koyu temada opak üst menü; içindekiler kutusu dengesi ve
  "Kaynaklar (n)" sayısının kaldırılması; yan paneldeki listeler görselli; kapak görselleri yeniden.

### Sıradaki: Freud (27.09 gece, kaynaklar doğrulandı, yazı başlamadı)
Kuram 15 SEO için ikiye bölündü: (a) "Freud'un Psikoseksüel Gelişim Kuramı" (b) "Selman'ın Sosyal Bakış Açısı Alma Kuramı".
Marcia Erikson yazısında işleniyor; Freud yazısında Erikson yazısına iç bağlantı verilir (kaynakçada değil, metinde).
Doğrulanmış kaynaklar (Freud):
- Freud, Üç Deneme (Brill çevirisi, Project Gutenberg #14969): pregenital örgütlenmeler oral (yamyamca) ve sadistik-anal;
  gizil dönem ("total or at least partial latency"), bentler: iğrenme, utanç, ahlaki ve estetik talepler; ergenlikte
  kısmi dürtülerin genital önceliğe bağlanması "cinsel örgütlenmenin son evresi".
- Freud, The Ego and the Id (1927 Riviere çevirisi, archive.org freud-1927-id): ego haz ilkesinin yerine gerçeklik
  ilkesini koymaya çalışır; at ve binici benzetmesi; egonun üç efendisi (dış dünya, id libidosu, süperego sertliği); Oidipus karmaşası.
- Deutsch ve Krauss, çev. B. Onur, "Psikoseksüel gelişim evreleri", AÜEBFD 19(1) 225-237, 1986, doi 10.1501/Egifak_0000001116
  (DergiPark künyesindeki "Harold Deutsch" yanlış; metin Morton Deutsch ve Robert M. Krauss). OCR: erotik-oral doğum-8. ay;
  sadik-anal 8-24 ay; erotik-anal 1-4 yaş; fallik 3-6 yaş; evreler birbirinin üzerine biner; saplanma ve gerileme; örtülü dönem.
- Westen 1998 Psych Bull 124(3) 333-371 (Freud'un bilimsel mirası: bilinçdışı süreçler vb. destekleniyor; eleştiriler arkaik sürüme yöneliyor).
- Baumeister, Dale, Sommer 1998 J Personality 66(6) 1081-1124: karşıt tepki, yalıtma, yadsıma iyi destekli; yansıtma var ama
  yan ürün olabilir; yer değiştirme anlamlı biçimde desteklenmiyor; yüceltmeye kanıt yok.
- Cramer 2000 Am Psych 55(6) 637-646; Vaillant 1994 J Abn Psych 103(1) 44-50; Andrews, Singh, Bond 1993 JNMD 181(4) 246-256
  (40 maddelik Savunma Biçimleri Testi; olgunlaşmamış savunma yaşla azalıyor; cinsiyetten bağımsız).
- Shedler 2010 Am Psych 65(2) 98-109 (psikodinamik terapi etkililiği).
- Türkçe: Sarı ve Takıl 2023 TEBD 21(1) 540-551 (107 Türkçe öğretmen adayı; yalnız olgun savunma kitap okuma sıklığıyla ilişkili);
  Sezer, Sapancı, Bayram Kuzgun 2023 AYNA 10(1) 57-82 (583 kişi; çocukluk travması, bağlanma, savunma biçimleri).
- Popper, "Science: Conjectures and Refutations" (1963): tam metin http://www.dpi.inpe.br/gilberto/cursos/cst-311/popper_conjectures_refutations.pdf
  ("every conceivable case could be interpreted in the light of Adler's theory, or equally of Freud's"); alıntı açılıp doğrulanmadan yazılmaz.
Önerilen başlık: "Freud'un Psikoseksüel Gelişim Kuramı: Evreler ve Eleştiriler" (60 karakteri geçmez; yazmadan önce say).

### Yapılacaklar: özel yazılar (Ahmet 26.09, kuramlardan sonra)
- [ ] PISA 2022 Türkiye sonuçları: puanlar, sıralama, eşitlik, zaman serisi (uluslararasi-egitim)
- [ ] PISA nasıl ölçer? Örnekleme, olası değerler ve yanlış okumalar (uluslararasi-egitim)
- [ ] OECD Education at a Glance: Türkiye göstergeleri (uluslararasi-egitim)
- [ ] TALIS: öğretmenlerin çalışma koşulları ve mesleki gelişim, Türkiye verisi (uluslararasi-egitim)
- [ ] Ülkeler arası karşılaştırmalı öğretmen yetiştirme (uluslararasi-egitim)
- [ ] BTE Derneği ve Türkiye'de eğitim teknolojisi alanının kurumsallaşması: kongreler, dergiler (egitim-teknolojileri)
- [ ] FATİH Projesi: hedefler, uygulama ve değerlendirme araştırmaları (egitim-teknolojileri)
- [ ] EBA ve pandemide acil uzaktan öğretim (egitim-teknolojileri)
- [ ] Eğitim teknolojilerinde yapay zekâ uygulamaları, meta-analiz kanıtıyla (egitim-teknolojileri)
