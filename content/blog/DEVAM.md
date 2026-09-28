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
- Kuram yazıları 1-15 yayında (15a Freud, 15b Selman dahil); kuram dizisi tamam. Sıradaki: özel yazılar.
- SEO (Ahmet 27.09): yazılar arama odaklı; başlıkta ve ilk paragrafta aranan ifade, SSS arama sorularından. Her push sonrası `node tools/indexnow.mjs`.
- **Tasarım elden geçirme başladı (Ahmet 26.09):** ad bote.web.tr; monospace yazı tipi hiçbir yerde
  yok; yazı tipi değişimi; ferahlık; koyu temada opak üst menü; içindekiler kutusu dengesi ve
  "Kaynaklar (n)" sayısının kaldırılması; yan paneldeki listeler görselli; kapak görselleri yeniden.

### Yayında: Freud (27.09, freud-psikoseksuel-gelisim-kurami)
20 kaynak, 6 Türkçe hakemli (Deutsch-Krauss çev. Onur 1986; Yılmaz, Gençöz, Ak 2007 Savunma Biçimleri Testi Türkçe formu;
Sarı ve Takıl 2023; Kaya ve Bozkur 2017; Sezer ve ark. 2023; Deniz ve Yıldız 2018). Popper alıntısı bölümün tam metninden
doğrulandı; sayfa numarası doğrulanamadığı için doğrudan alıntı yerine aktarma kullanıldı. Deutsch-Onur yılı DergiPark
"Yayımlandığı Sayı Yıl 1986". Güdülenme yazısının 18 künyesi 27.09'da Crossref ve DergiPark'la yeniden doğrulandı, düzeltme gerekmedi.

### Yayında: Selman (27.09, selman-sosyal-bakis-acisi-alma-kurami)
21 kaynak, 4 Türkçe hakemli (Yıldız ve Güney Karaman 2017; Şahin ve Başara Baydilek 2023; Karakaşoğlu ve Özdemir 2020;
Gürleyik ve Gözün Kahraman 2021). Aşama tanımları, yaşlar (0: 4-6, 1: 6-8, 2: 8-10; 3 ön ergenlik; 4 ergenlik ve yetişkinlik),
Holly ve Kathy ikilemleri Selman'ın ERIC'teki tam metinli bildirilerinden (ED081486 1973, ED122918 1975); sınıf deneyi
ED097127'den. Selman'ın 1980 kitabı açılamadı; aşama adları ve yaşlar bu yüzden 1973 ve 1975 metinlerine dayanıyor.
Doğrudan alıntı yerine aktarma kullanıldı (ERIC belgelerinde özgün sayfa numarası belirsiz).

### Yapılacaklar: özel yazılar (Ahmet 26.09, kuramlardan sonra)
Başlık kuralı (Ahmet 27.09): kurum, program ve proje yazılarında başlık, ilk H2 ve ilk SSS "X Nedir?" kalıbını içerir (OECD Nedir?, TALIS Nedir?, FATİH Projesi Nedir?, EBA Nedir?); adres mümkünse x-nedir.
- [x] PISA 2022 Türkiye sonuçları (27.09, pisa-2022-turkiye-sonuclari; MEB 2022 raporu, OECD ülke notu ve Cilt I tam metinleri; kapsam oranı CI3 Tablo I.A2.2)
- [x] PISA nedir? (27.09, pisa-nedir; OECD PISA 2022 Teknik Raporu ve Cilt I tam metinleri; Ahmet: başlıkta "X nedir?" kalıbı)
- [x] OECD Nedir? (27.09, oecd-nedir; Dışişleri ve Daimi Temsilcilik sayfaları, TALIS/PIAAC/EAG belgeleri)
- [ ] Education at a Glance 2026: Türkiye göstergeleri. EAG 2026 29 Eylül 2026'da yayımlanıyor (odak: öğretmen açığı); ondan önce YAZMA, 2025 verisi iki günde eskir. Başlık: "Education at a Glance Nedir? 2026 Türkiye Göstergeleri" gibi.
- [x] TALIS Nedir? (27.09, talis-nedir; OECD TALIS 2024 raporu ve Türkiye notu, TEDMEM, MEB)
- [ ] Ülkeler arası karşılaştırmalı öğretmen yetiştirme (uluslararasi-egitim)
- [ ] BTE Derneği ve Türkiye'de eğitim teknolojisi alanının kurumsallaşması: kongreler, dergiler (egitim-teknolojileri)
  Not (27.09): BTE Derneği = Bilişim Teknolojileri Eğitimcileri Derneği (Ankara, bte.org.tr). Site Cloudflare doğrulamasıyla otomatik istekleri engelliyor; kaynaklar ya tarayıcıdan ya da dernek dışı resmî/hakemli belgelerden. Yazıya başlanmadı.
  Sıradakiler: eğitimde yapay zekâ (yeni yazı yerine sığ egitimde-yapay-zeka-ogretmenler-icin yazısını derinleştirmek daha doğru olabilir, önce karar), karşılaştırmalı öğretmen yetiştirme, EAG 2026 (29 Eylül sonrası).
- [x] FATİH Projesi Nedir? (27.09, fatih-projesi-nedir; YEĞİTEK 2015 ve 2018 raporları, MEB 2022, Sayıştay 2020 raporu, Demir 2024 derlemesi)
- [x] EBA Nedir? (27.09, eba-nedir; YEĞİTEK 2020 ve 2021 sayıları, MEB haberleri, PISA ve TALIS notları)
- [ ] Eğitim teknolojilerinde yapay zekâ uygulamaları, meta-analiz kanıtıyla (egitim-teknolojileri)

## 27.09.2026 SEO turu
- **Lighthouse ölçümü ölüydü:** `tools/lighthouse.mjs` sitemap'te `www.` arıyordu; www'suz
  geçişten beri 0 sayfa ölçüp "temiz" diyordu. Düzeltildi, boş ölçüm artık hata. Tam tarama:
  98 sayfanın hepsi SEO 100.
- **Erişilebilirlik:** Popüler/Yeni sekmesindeki `<ol role="tabpanel">` 56 yazıda `listitem`
  hatası veriyordu; rol sarmalayıcı `div`'e taşındı. KALANLAR (statik ana site sayfaları):
  marka pembesi `#f24080` beyazda 3,6 kontrast (eşik 4,5; renk kararı Ahmet'te), kenar
  çubuğunda `h5` başlık sırası, /en/faq akordeonunda yanlış tablist/tab rolleri, site
  haritası bağlantılarında hedef boyutu, /en/about ve /en/site-map'te konsol ağ hatası.
- **www yönlendirmesi 307 (geçici).** Vercel > bote-web > Settings > Domains >
  www.bote.web.tr > Redirect: 308 Permanent seçilmeli (Ahmet; ajan Vercel kimlik bilgisi okumaz).
- **Arama ölçümü (Google otomatik tamamlama, 27.09):** sayı = "X nedir" varyantı adedi.
  Dijital okuryazarlık 10 · mikro öğretim 9 (AGS/KPSS ile) · kodlama eğitimi 8 · STEM eğitimi 7 ·
  ters yüz sınıf 4 · proje tabanlı öğrenme 4 · harmanlanmış öğrenme 3 · ölçme ve değerlendirme
  (10, eğitim bilimleri) · eğitim teknolojisi (+"öğretim teknolojisi farkı") · Dale'in yaşantı
  konisi · web 2.0 araçları · yapay zekâ okuryazarlığı (UNESCO) · SAMR · ASSURE.
  Bölüm aramaları: "böte açılımı/taban puanları/sıralama/ders programı", "bilişim teknolojileri
  öğretmenliği atama puanları/AGS/maaş" (resmî veri gerektirir).
- Ahmet 27.09: **arama odaklı olmayan yazı yazılmaz.**
- Yayınlanan (27.09): egitim-teknolojisi-nedir (15 kaynak, 6 TR hakemli) · dijital-okuryazarlik-nedir (15, 5 TR; DigComp 2.2 ve Maarif Modeli OB2 tam metinden) · mikro-ogretim-nedir (12, 4 TR; Remesh ve Çoban tam metinden) · kodlama-egitimi-nedir (12, 5 TR; Scherer 2019/2020 meta-analizleri, Şanlı-Alper tez dağılımı) · ters-yuz-sinif-nedir (12, 4 TR; Strelan, Låg-Sæle, van Alten, Kapur 46 meta-analiz tam metni, FLIP) · harmanlanmis-ogrenme-nedir (16, 6 TR; Staker-Horn 4 model tam metni, Müller-Mildenberger 2021 tam metni, YÖK usul ve esaslar: güncel oran yüzde 30 AKTS, 14.09.2022; eski yüzde 40 bilgisi GEÇERSİZ).
- **dale-yasanti-konisi (27.09 ARA VERİLDİ, kaynaklar hazır):** arama talebi güçlü ("dale'nin yaşantı konisi", "kodlama", "kpss", "edgar dale öğrenme piramidi"). Doğrulananlar: Seels 1997 (ERIC ED409869 tam metin: somut-soyut sürekliliği, Dale "gerçekçi olan daha iyi" DEMEDİ, kavram öğrenimi); Stice 2009 ASEE (tam metin, 10.18260/1-2--5410: yüzdeler Dale'in değil, Socony-Vacuum el notu, ilk yayın Treichler 1967, Molenda'ya göre olası kaynak Texas Üniversitesi'nde petrol eğitimi yapan Paul John Phillips); Holbert-Karady 2008 ASEE PSW (tam metin, 10.18260/1-2-1153-52267: yüzdeler çalışmadan çalışmaya değişiyor); Subramony ve ark. 2014 (Educational Technology 54(6) 6-16, ERIC özeti); Lalley-Miller 2007 (Education 128(1) 64-79, ERIC özeti: koni süreklilik, hiyerarşi değil); Masters 2013 (Medical Teacher, özet); Letrud 2012, Letrud-Hernes 2016 ve 2018 (özetler). Türkçe hakemli (tam metin): Yılmaz-Tuncer 2020 (EİBD 11(21) 39-62: Hoban 1937 kökeni, 11 basamak, televizyon eklendi, dramatik katılım yerine dramatize yaşantı; başarı testinde fark yok, rubrikte var); Öztaş 2008 (Kastamonu Eğitim Dergisi 16(2) 543-556), Tayyar 2020 (AKAD 12(22) 75-85), Ortaakarsu-Sülün 2025 (Buca EFD 63, 81-117): üçü de yüzdeleri Çilenti (1979:40) ya da Demirel (2004:56-57) üzerinden "Texas Üniversitesi'nde (Philips) yapılan araştırma" diye aktarıyor; Stice'in Phillips izlemesiyle örtüşüyor, yazının özgün bölümü bu. Dale'in kitabı (archive.org) kısıtlı; 1946 on basamak adı yalnız ikincil kaynaktan, yazmadan önce bir tam metinden daha doğrula.
- **dale-yasanti-konisi YAYINDA (28.09):** 17 kaynak, 4 TR hakemli; 11 basamak Öztaş 2008 Şekil 1'den (OCR); PDF BT-063. Doğrulama notu dogrulama-notlari/dale-yasanti-konisi.md.
- **Eski sıra (28.09'da ders dizisi öne alındı):** stem-egitimi-nedir →
  web-2-0-araclari → yapay-zeka-okuryazarligi (egitimde-yapay-zeka yazısını derinleştirme kararıyla
  birlikte) → samr/assure. EAG 2026: OECD 29.09'da yayımlayınca.

## 28.09.2026: Ders dizisi (Ahmet)
Kaynak: Hacettepe BÖTE 2018 lisans programı (ebit.hacettepe.edu.tr/op_lisans-2018.html); izlenceler bilsis
Bologna'dan (bilsis.hacettepe.edu.tr/oibs/bologna, BÖTE lisans birimi curSunit=780; ders ayrıntısı
progCourseDetails.aspx?curCourse=<no>&lang=tr, BTE114 = 78042). Genel kültür dersleri yazılmaz.

**Kural (Ahmet 28.09):** her ders için 1 genel ders yazısı + en az 2 derin açıklayıcı yazı (toplam en az 3),
birbirine bağlı. Konu izlenceden ve kaynakçadan; öğrenci slaytlarından içerik ALINMAZ (yalnız konu fikri).
Hocanın sunum bölüştürmesi kopyalanmaz; izlencedeki haftalık sıra ve konu bağımlılığı esas.

**BTE 114 Elektronik Devre Elemanları** (2. yarıyıl, 3+0+0, 5 AKTS, izlence 25.04.2024):
- İçerik (resmî): dirençler, kondansatörler, bobinler, diyot, transistör; ölçme aletleri; iletken/yalıtkan/yarı
  iletken; DA, AA, seri, paralel, karışık devreler, Ohm, Kirchhoff, güç; sayı sistemleri, mantık kapıları,
  Boolean (De Morgan, Karnaugh); sayısal devre tasarımı; sayıcılar; elektrik kazaları ve ilk yardım.
- Haftalık plan sayısal ağırlıklı: sayı sistemleri, tümleyenler ve kodlar, TTL-CMOS, Boolean ve kapılar,
  Karnaugh ve Quine-McCluskey, toplayıcı/çıkarıcı, kod çözücü/çoklayıcı, bellek ve PLD, flip-flop,
  saklayıcı/sayıcı, DAC, ADC.
- Yazılar: (1) genel ders yazısı; (2) derin: mantık kapıları ve Boolean cebiri; (3) derin: Ohm ve Kirchhoff
  kanunları, seri-paralel devreler. Sonra: sayı sistemleri ve kodlar, diyot ve transistör, kondansatör ve
  bobin, multimetre ve elektrik güvenliği, Karnaugh, kombinasyonel devreler, flip-flop ve sayıcılar, DAC/ADC.
- Arama ölçümü (28.09, öneri/nedir): diyot 19/11, transistör 19/10, kondansatör 19/10, multimetre 17/8,
  ohm kanunu 15/7, lojik devre 10/1, sayı sistemleri 10/1, karnaugh 10/1, seri paralel devre 10/1,
  elektronik devre elemanları 11/1, mantık kapıları 5/1, boolean 4/1.

**Diğer dersler için ölçüm (28.09):** medya okuryazarlığı 19/10, dijital vatandaşlık 19/10, algoritma ve akış
şeması 19/10, robotik kodlama 19/10, siber zorbalık 18/10, bilişim etiği 17/10, nitel araştırma 18/10,
infografik 18/11, eleştirel düşünme 18/9; ayrıntı sohbet kaydında.
