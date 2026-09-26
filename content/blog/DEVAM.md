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
