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
push: `git push -u origin claude/vigilant-noether-o6k450 && git push origin claude/vigilant-noether-o6k450:main`

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
- Kuram yazıları 1-13 yayında (YOL_HARITASI.md > İlerleme). Kalan: 14 Güdülenme, 15 Freud-Marcia-Selman.
- **Tasarım elden geçirme başladı (Ahmet 26.09):** ad bote.web.tr; monospace yazı tipi hiçbir yerde
  yok; yazı tipi değişimi; ferahlık; koyu temada opak üst menü; içindekiler kutusu dengesi ve
  "Kaynaklar (n)" sayısının kaldırılması; yan paneldeki listeler görselli; kapak görselleri yeniden.

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
