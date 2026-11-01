# harezmi-egitim-modeli-nedir — doğrulama notları
Son denetim: 2026-11-01

Yöntem: MEB belgeleri (PDF) pypdf ile metne dökülüp satır satır arandı; çalışma künyeleri Crossref (api.crossref.org/works/<DOI>) ve OpenAlex kayıtlarından, özet ve sayılar Crossref, ERIC (api.ies.ed.gov/eric), Semantic Scholar ve OpenAlex özet kayıtlarından alındı. Makalelerin tam metni okunmadı: bu bir "dizin düzeyi" denetimdir; tam metin denetimi yapılmamıştır. Her olgunun birebir alıntısı döküm dosyasında (scratchpad/dokum/bote/harezmi-egitim-modeli-nedir.json, 114 olgu) tutulur.

## Kaynak künyeleri
| id | Künye doğrulandı mı | Nereden açıldı (adres) | Erişim | Not |
|----|---------------------|------------------------|--------|-----|
| meb-cerceve-2024 | evet: başlık "Harezmi Eğitim Modeli Çerçeve Metni", kapak "Kasım 2024, Ankara"; MEB metni. Okul sitesindeki kopya | https://unyeanaokulu.meb.k12.tr/meb_iys_dosyalar/52/13/819995/dosyalar/2024_12/18101121_harezmiegitimmodelicercevemetni.pdf | 2026-11-01 | OGM'nin kendi adresindeki kopya doğrulanmadı |
| meb-cerceve-2023 | evet: kapak "Aralık 2023, Ankara"; dosya ogm.meb.gov.tr üzerinde | https://ogm.meb.gov.tr/meb_iys_dosyalar/2024_04/02131433_harezmiegitimmodelicerceveprogram.pdf | 2026-11-01 | dosya adındaki "program" ifadesine rağmen içerik Çerçeve Metni |
| meb-brosur-2026 | evet: "T.C. MEB Ortaöğretim Genel Müdürlüğü" imzalı üç kıvrımlı broşür; dosya yolu 2026_09 (Çankırı İl MEM sitesi) | https://cankiri.meb.gov.tr/meb_iys_dosyalar/2026_09/6a96adc027301613170697_Tan%C4%B1t%C4%B1m_Brosuru_26-27-a4_yatay_3_k%C4%B1vr%C4%B1ml%C4%B1-trifold.pdf | 2026-11-01 | yıl: dosya adındaki 26-27 ve yol 2026_09 |
| meb-tanitim-2023 | kısmen: MEB tanıtım metni, tarih ve yazar yok; metin 2023-2024 verilerini içerir | https://hayseatesal.meb.k12.tr/meb_iys_dosyalar/34/41/761451/dosyalar/2024_10/18140009_harezmi.pdf | 2026-11-01 | yıl "t.y." yazıldı |
| meb-yaygin-2024 | evet: OGM, ISBN 978-975-11-8746-8, genel koordinatör, editör ve bilim kurulu listesi künyede | https://harezmi.meb.gov.tr/dosyalar/yayinlar/2023_2024_yayginlastirma_raporu.pdf | 2026-11-01 | |
| mea-programi | evet: önceki yazıda (akademi-hazirlik-egitimi-dersleri) kullanılan aynı PDF; bu yazıda "Harezmi" araması yeniden yapıldı | https://www.meb.gov.tr/meb_iys_dosyalar/2026_03/11121847_MYLLI_EYYTYM_AKADEMYSY_HAZIRLIK_EYYTYMY_PROGRAMI.pdf | 2026-11-01 | |
| kocoglu2018 | evet: Crossref: Koçoğlu, Erol; Journal of Turkish Studies 13(19) 1187-1200; 2018 | https://doi.org/10.7827/turkishstudies.14050 | 2026-11-01 | özet Semantic Scholar kaydından; Crossref'te özet yok |
| cimen2022 | evet: Crossref: Çimen, Ali; Gülseçen, Sevinç; Turkish Studies-Educational Sciences 17(6) 1395-1419; 2022 | https://doi.org/10.7827/turkishstudies.62099 | 2026-11-01 | |
| tokmak2023 | evet: Crossref: Tokmak, Ahmet; Milli Eğitim Dergisi 52(1) 437-456; çevrimiçi 25.12.2023 | https://doi.org/10.37669/milliegitim.1309222 | 2026-11-01 | yıl 2023 (Crossref) |
| coskun2023 | evet: Crossref: Coşkun Keskin, Karaloğlu, Erdoğan; OMÜ Eğitim Fakültesi Dergisi; 17.12.2023 | https://doi.org/10.7822/omuefd.1285712 | 2026-11-01 | cilt/sayı/sayfa kayıtta yok |
| erdem2024 | evet: Crossref: Erdem, Şeyma; Eminoğlu Küçüktepe, Seval; Marmara Üniv. Atatürk Eğitim Fakültesi Eğitim Bilimleri Dergisi; 26.06.2024 | https://doi.org/10.15285/maruaebd.1498995 | 2026-11-01 | cilt/sayı/sayfa kayıtta yok |
| karakaya2026 | evet: Crossref: Karakaya, İsmail; Gümüş, Gökhan; Milli Eğitim Dergisi 55(249) 33-68; 01.02.2026 | https://doi.org/10.37669/milliegitim.1574890 | 2026-11-01 | OpenAlex'te 2024 tarihli DergiPark ön kaydı da var |
| bacak2026 | evet: Crossref: Bacak, Neslihan; Kök, Filiz; Kimyon, Hatice; BABUR Research 5(1) 59-73; 30.06.2026 | https://doi.org/10.66119/babur.1945183 | 2026-11-01 | OpenAlex üçüncü yazarı "Mertoğlu" gösteriyor; Crossref (yayıncı kaydı) "Kimyon", Crossref esas alındı |
| dogan2026 | evet: Crossref: Doğan, Emre; Milli Kültür Araştırmaları Dergisi 10(1); 06.03.2026 | https://doi.org/10.55774/mikad.1862926 | 2026-11-01 | sayfa kayıtta yok |
| tokmak2022 | evet: Crossref: Tokmak, Yılmaz, Şeker; Education Quarterly Reviews 5(4); 30.12.2022; ERIC EJ1371985 | https://doi.org/10.31014/aior.1993.05.04.641 | 2026-11-01 | |
| kert2026 | evet: Crossref: Kert, Erkoç, Tonbuloğlu; TechTrends 70(2) 411-425; 09.01.2026; ERIC EJ1511922 | https://doi.org/10.1007/s11528-025-01158-x | 2026-11-01 | tam metin açılamadı (yayıncı kimlik doğrulama yönlendirmesi) |
| filiz2026 | evet: Crossref: Filiz, Tunahan; Duran Erel, Bilgen; IOJPE 15(1) 81-102; 31.03.2026; ERIC EJ1506605 | https://doi.org/10.55020/iojpe.1855886 | 2026-11-01 | |
| zhou2025 | evet: Crossref: Zhou, Dong, Wang, Chiu; Research in Science Education 55(5); çevrimiçi 17.12.2024; ERIC EJ1489580 (yıl 2025) | https://doi.org/10.1007/s11165-024-10216-y | 2026-11-01 | yıl ERIC ve cilt (55) esas alınarak 2025; sayfa yok |
| chen2019 | evet: Crossref: Chen, Cheng-Huan; Yang, Yong-Cih; Educational Research Review 26, 71-81; 2019 | https://doi.org/10.1016/j.edurev.2018.11.001 | 2026-11-01 | özet Semantic Scholar kaydından |
| kokotsaki2016 | evet: Crossref: Kokotsaki, Menzies, Wiggins; Improving Schools 19(3) 267-277; 2016; ERIC EJ1117732 | https://doi.org/10.1177/1365480216659733 | 2026-11-01 | |
| kirschner2006 | evet: Crossref: Kirschner, Sweller, Clark; Educational Psychologist 41(2) 75-86; 2006 | https://doi.org/10.1207/s15326985ep4102_1 | 2026-11-01 | özet OpenAlex kaydından |

## Sayılar
| Yazıdaki ifade | Değer | Belge | Tablo / sayfa | Erişim |
|----------------|-------|-------|---------------|--------|
| Çalıştay tarihi ve düzenleyen | 22-23 Ekim 2016, İstanbul İl MEM, YEĞİTEK desteği | Çerçeve Metni (Kasım 2024) | 3. Gerekçe | 2026-11-01 |
| Pilot 2017 | 1 il, 5 okul | Broşür 2026-2027 | "Geçmişten Günümüze" zaman çizelgesi | 2026-11-01 |
| 2017-2018 | 15 il, 64 okul | Broşür | aynı | 2026-11-01 |
| 2018-2019 | 17 il, 208 okul, 208 ekip | Broşür | aynı | 2026-11-01 |
| 2019-2020 | 25 il, 451 okul, 508 ekip | Broşür | aynı | 2026-11-01 |
| 2020-2021 | 25 il, 508 okul, 508 ekip | Broşür | aynı | 2026-11-01 |
| 2021-2022 | 60 il, 681 okul, 712 ekip | Broşür | aynı | 2026-11-01 |
| 2022-2023 | 60 il, 818 okul, 938 ekip | Broşür | aynı | 2026-11-01 |
| 2023-2024 | 28 il, 753 okul, 885 ekip | Broşür | aynı | 2026-11-01 |
| "2024-2025" iki satır (tabloya alınmadı) | 73 il/1098 okul/2375 ekip; 76 il/1979 okul/2237 ekip | Broşür | aynı | 2026-11-01 |
| Rapor: ilk pilot 5 okul, 2017'de 50 okul | 5; 50 | Yaygınlaştırma Raporu | 1. Giriş (s. 8) | 2026-11-01 |
| Tanıtım metni: İstanbul 38 ilçe, 50 okul | 38; 50 | MEB tanıtım metni | 2. paragraf grubu | 2026-11-01 |
| 2017-2018 Harezmi Öğretmeni sertifikası | 258 öğretmen | MEB tanıtım metni | aynı | 2026-11-01 |
| İkinci pilot | 13 Kasım 2017; ilk dört hafta HİS belirleme | MEB tanıtım metni | aynı | 2026-11-01 |
| 2023-2024 tanıtım metni | 27 il, 465 öğretmen | MEB tanıtım metni | aynı | 2026-11-01 |
| Haftalık işleyiş | 1 ön toplantı + 2 uygulama + 1 değerlendirme ders saati; 40 dk | Çerçeve Metni (Kasım 2024) | 2. Kapsam | 2026-11-01 |
| Ekip büyüklüğü | 2023: en az 2, en fazla 4 öğretmen; 2024: 4 alanı temsil eden öğretmen | Çerçeve Metni Aralık 2023 ve Kasım 2024 | 2. Kapsam | 2026-11-01 |
| On bir adım | 11 numaralı adım başlığı | Broşür | "Uygulama Süreci" | 2026-11-01 |
| Rapor örneklemi | 12 hafta, 28 il, 132 öğretmen; öğrenci 404 / 713 / 118 | Yaygınlaştırma Raporu | 2.2 Çalışma Grubu (s. 14) | 2026-11-01 |
| Rapor anketi | 80 madde (17+25+20+18) | Yaygınlaştırma Raporu | 2.3 Veri Toplama Araçları (s. 14-15) | 2026-11-01 |
| Çimen-Gülseçen | 2019-2020, 411 okul, 4195 öğrenci, 32 hafta, 54 konu, tutarlılık .73 ve .70 (yazıda 0,73 ve 0,70) | Makale özeti (Crossref) | özet | 2026-11-01 |
| Tokmak 2023 | 18 öğrenci, 5 öğretmen, 8 hafta, 8 etkinlik | Makale özeti (Crossref) | özet | 2026-11-01 |
| Coşkun Keskin ve ark. | 25 öğretmen ("yirmi beş"), Ümraniye | Makale özeti (Crossref) | özet | 2026-11-01 |
| Erdem ve Eminoğlu Küçüktepe | 30 öğretmen, 2021-2023 | Makale özeti (Crossref) | özet | 2026-11-01 |
| Karakaya-Gümüş | 8 katılımcı (3 profesör, 1 araştırma uzmanı, 4 MEB koordinatörü); 13 saat veri | Makale özeti (Crossref) | özet | 2026-11-01 |
| Bacak ve ark. | 19 öğrenci, 2025-2026 | Makale özeti (Crossref) | özet | 2026-11-01 |
| Filiz-Erel | n = 26 deney, n = 26 kontrol | Makale özeti (ERIC EJ1506605, Crossref) | özet | 2026-11-01 |
| Tokmak ve ark. 2022 | 54 öğrenci; yalnız algoritma alt boyutunda anlamlı fark | Makale özeti (ERIC EJ1371985) | özet | 2026-11-01 |
| Kert ve ark. | Ekim 2022-Mayıs 2023, 868 öğrenci (belirsiz örneklem notuyla) | Makale özeti (ERIC EJ1511922) | özet | 2026-11-01 |
| Zhou ve ark. | k = 40, 79 etki büyüklüğü, N = 15.577 (kaynakta 15,577), g = 0,661 (kaynakta 0.661), %95 GA [0,548; 0,774] | Makale özeti (ERIC EJ1489580) | özet | 2026-11-01 |
| Chen ve Yang | 30 makale, 46 etki büyüklüğü, 12.585 öğrenci (kaynakta 12,585), 189 okul, 9 ülke, d+ = 0,71 (kaynakta 0.71) | Makale özeti (Semantic Scholar kaydı) | özet | 2026-11-01 |

## Doğrudan alıntılar
| Alıntı | Kaynak | Sayfa |
|--------|--------|-------|
| Yazıda tırnak içinde yalnız belge ifadeleri: "en az 2, en fazla 4 öğretmen" (Aralık 2023 metnindeki "en az 2 en fazla 4 öğretmen" ifadesinin yazımı), "4 alanı temsil eden öğretmenlerden oluşturulan bir ekip" (Kasım 2024), alan adları (broşür) | Çerçeve Metni; Broşür | 2. Kapsam; tanıtım sayfası |
| "2024-2025" etiketi | Broşür | zaman çizelgesi |

## Hakem okuması
- Bulunan: (1) Pilot yılı belgeler arasında çelişiyor (2016 ya da 2017); (2) 2023-2024 sayıları üç belgede farklı (27 il/465 öğretmen; 28 il/753 okul/885 ekip; rapor çalışması 28 il); (3) broşürde iki satır "2024-2025" etiketli; (4) çerçeve metninin 2024 sürümünde "dil bilimleri" giriş ve kapsamda geçerken ilkeler listesinde geçmiyor; (5) Harezmi'yi değerlendiren çalışmaların önemli kısmında yazarlar modelin bilim kurulu ya da koordinasyon ekibiyle ilişkili; (6) Harezmi'ye özgü meta-analiz bulunamadı (yalnız ERIC ve OpenAlex taraması); (7) etki büyüklükleri yalnızca genel STEM ve proje tabanlı öğrenme meta-analizlerinde var.
- Düzeltilen: ilk taslaktaki "ilk hakemli değerlendirme" iddiası (doğrulanamadı) "yayımlanmış hakemli değerlendirmelerden biri" yapıldı; kurgusal sınıf senaryosu MEB belgesinde olmayan ayrıntı sayıldığı için kaldırıldı; Kokotsaki'ye atfedilen "materyal, zaman" iddiası özetteki etkenlerle (dijital teknoloji, grup süreçleri, öğretmen iskelesi) sınırlandı; Kirschner anlatımından "deneyimsiz" sözcüğü çıkarıldı (özette yok); Kert örnekleminde belirsizlik yazıya eklendi; BÖTE bağlantısı kaynaklı cümleyle değiştirildi; Akademi programı ders adları PDF'ten tek tek doğrulandı.
- Doğrulanamayan (yazıya alınmadı ya da belirsizlik notuyla alındı): pilot illerin adları; 2024-2025 satırlarının yıl eşleşmesi; Kert ve ark.'nın analiz örneklemi; Bacak ve ark.'nın Cohen d değeri; on bir adımın görsel yerleşimi; harezmi.meb.gov.tr alt sayfaları (JavaScript); tam metin düzeyinde hiçbir makale.
