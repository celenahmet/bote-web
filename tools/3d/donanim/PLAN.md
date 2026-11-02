# Bilgisayar Donanımı ailesi: ders planı (Faz A)

Hazırlanış: 02.11.2026. Müfredat dayanağı: `MUFREDAT.md` (resmî kaynaklar, kazanım kodları, doğrulanamayanlar). Bu belge dersleri, adımları ve sahne tasarımını anlatır. Aile adı, kimliği ve adresi `src/aile.js` içinde TEK yerdedir; Ahmet'in kararı gelince yalnız orası değişir.

## 1. Aile ve dersler

Önerilen ad: **Bilgisayar Donanımı** (geçici adres `/3d/donanim/<ders>`). Ders kimliklerinde aile öneki yoktur.

| No | Ders kimliği | Başlık | Süre | Asıl sınıf | Resmî dayanak |
|---|---|---|---|---|---|
| 1 | `girdi-cikti-birimleri` | Girdi ve Çıktı Birimleri | 25 dk | 5 (6: tekrar) | BTY.5.1.5 a, b; BTY.6.2.5, 6.2.8 hatırlatması |
| 2 | `kasanin-ici` | Kasanın İçi | 30 dk | 5-6 (7-8: derinleştirme) | BTY.5.1.5 a (iç donanım, depolama), BTY.5.3.1-2 (ağ girişi) |
| 3 | `tusun-yolculugu` | Bir Tuşun Yolculuğu | 25 dk | 6-8 | BTY.5.1.5 b (bileşenler arası ilişki), BTY.5.6.1 b (girdi, işlem, çıktı) |
| 4 | `sorun-giderme` | Bilgisayar Açılmıyor! | 25 dk | 5-8 | BTY.5.1.5 (sorun giderme afişi: kablo, güç, sürücü) |

Sıra bilinçli: önce dışarısı (resmî etkinlik "Dışında ne var, içinde ne var?"), sonra içerisi, sonra ikisini bağlayan akış, en sonda bilgiyi kullanma. Her ders tek başına da açılabilir. 7-8. sınıf metinleri kazanım kodu taşımaz (`MUFREDAT.md` bölüm 2); sarmal tekrar ve derinleştirme olarak yazılır.

## 2. Her dersin kurgusu

Ortak kalıp (Arduino derslerindeki gibi): merak sorusu, keşif, "tahmin et, sonra gör" (her derste en az bir tahmin çifti), "değiştir ve gözle" (kartta düğme, sahnede anında sonuç), özet ve mini sınav (3 soru, her sınıf için ayrı).

### Ders 1: Girdi ve Çıktı Birimleri (masanın dışı)
1. `merak`: tüm masa. "Bilgisayara nasıl bir şey söyleriz, bize nasıl cevap verir?"
2. `donanim`: dokunabildiğimiz parçalar donanım, ekrandaki programlar yazılım (resmî tanım).
3. `giris`: klavye, fare, mikrofon, web kamerası. **Tahmin et:** "Mikrofon girdi mi çıktı mı?"
4. `klavye`: tuşa dokun, harf ekranda belirir; Ctrl, Esc, Shift, Enter, Boşluk etiketli (resmî özel tuşlar). Düğme: "Tuşa bas".
5. `fare`: dokun, imleç hareket eder, tıklama; tekerlek.
6. `mikrofon-kamera`: ses dalgası mikrofona girer; kamera görüntüyü alır (6. sınıf hatırlatması). Düğme: "Konuş", "Kamerayı aç".
7. `cikis`: ekran, hoparlör, yazıcı. Giriş ile karşıtlık.
8. `ekran`: piksel. Düğme: "Çözünürlüğü değiştir" (4 kademe: görüntü netleşir). 8. sınıf: 1920 x 1080 çarpımı.
9. `hoparlor-yazici`: ses dalgası halkaları, yazıcıdan kâğıt. Düğmeler: "Ses ver", "Yazdır".
10. `ikisi-de`: mikrofonlu kulaklık hem girdi hem çıktı. **Tahmin et:** "Kulaklık için ne dersin?"
11. `kablolar`: cihazlar kasaya hangi kablo ve girişle bağlanır (USB, HDMI, ses jakı, güç). Kasanın arkasından bakış.
12. `ozet`: sınıflandırma + mini sınav.

### Ders 2: Kasanın İçi
1. `merak`: kapalı kasa. "İçinde ne var?" 2. `kapak`: yan kapak açılır (düğme "Kapağı aç/kapat"), iç donanım / dış donanım ayrımı. 3. `anakart`: her parça buraya bağlı. 4. `islemci`: soğutucu kalkar, işlemci görünür (düğme "Soğutucuyu kaldır"); **tahmin:** "Soğutucu olmasa ne olur?" 5. `ram`: çubuk yuvadan çıkar; kapasite, geçici bellek. 6. `depolama`: HDD, SSD, M.2, USB bellek, bulut; hız/kapasite/amaç; bit-byte-KB-MB-GB-TB merdiveni. 7. `ekran-karti`: görüntüyü üretir. 8. `guc-kaynagi`: duvar elektriğini parçaların istediği düşük gerilime çevirir; kablolar. 9. `sogutma`: fanlar, hava akışı (düğme "Bilgisayarı çalıştır"). 10. `baglantilar`: arka panel, ağ girişi (ethernet) ve Wi-Fi ayrımı. 11. `ozet`.

### Ders 3: Bir Tuşun Yolculuğu
1. `merak`: bir tuşa basınca ekranda harf. Ne oldu? 2. `tus`: basış bir elektrik sinyaline dönüşür. 3. `kablo-usb`: sinyal kabloda, kasanın arkasına. 4. `anakart-yolu`: anakart üzerinde işlemciye. 5. `islemci-karar`: işlemci ve işletim sistemi/yazılım karar verir (yazılım adımı). 6. `ram`: harf geçici bellekte. 7. `ekran-karti`: görüntü hazırlanır. 8. `ekran`: harf ekranda. 9. `kaydet`: SSD'ye yazılır; **tahmin:** "Elektrik gidince ne kalır?" Düğme "Elektriği kes": RAM'deki kaybolur, SSD'dekini korur. 10. `hiz`: yolculuk milisaniyeler sürer (8. sınıf: GHz, saniyede kaç tık). 11. `ozet`. Yolculuk aşamaları düğmeyle ("Sinyali gönder", "Sonraki aşama") yürütülür.

### Ders 4: Bilgisayar Açılmıyor!
1. `merak`: ekran karanlık. 2. `strateji`: "kablo, güç, sürücü" sırası (resmî afiş). 3. `acilmiyor`: güç kablosu çıkık; **tahmin:** "İlk neye bakarsın?"; düğme "Kabloyu tak". 4. `ses-yok`: hoparlör kablosu / ses kapalı. 5. `yazici-yok`: kablo ve kâğıt. 6. `goruntu-yok`: ekran kablosu gevşek. 7. `sen-bul`: gizli arıza, parçalara dokunarak ara (düğme "Yeni arıza"). 8. `ozet`. Her arıza parça takılı mı değil mi durumundan hesaplanır (tek durum tablosu).

## 3. Sınıf kademeleme
- 5: kısa cümle, benzetme (giriş = kulak/göz, işlemci = beyin, RAM = çalışma masası).
- 6: resmî tanım cümleleri, terimler.
- 7: neden/sonuç, kıyas (HDD ile SSD).
- 8: sayı ve işlem (piksel çarpımı, GB/MB çevirisi, GHz, W).
Her kavramda `teknik` (ne olduğu) ve `sosyal` (günlük hayat/sorumlu kullanım) metni dört sınıf için ayrı.

## 4. Sahne tasarımı
- Birim: 1 birim = 5 mm. Masa 216 x 116 birim (108 x 58 cm), tamamı ±110 içinde. Y yukarı, izleyici +z.
- Sol uçta ATX orta kule kasa (ön yüz +z, açılan yan kapak -x). Arkada monitör, yanlarda iki hoparlör; önde klavye, fare; sağda yazıcı, mikrofon (sol ön), kulaklık, web kamerası (monitör üstünde), USB bellek.
- Kasa içi yan kapak açılınca görünür; kapalıyken gizli (çizim çağrısı tasarrufu).
- Performans bütçesi: en geniş görünüm en çok 80 çizim çağrısı ve 120 bin üçgen; tipik adım 50 altı. Tekrarlayan parçalar InstancedMesh, aynı malzemeli sabit parçalar tek geometride, tek tuş atlası, boşta kare yok.
- Fanlar yalnız "çalıştır" ile döner ve 25 sn sonra kendiliğinden durur.

## 5. Ortak motorda gerekenler (ana oturum yapar)
Ayrıntı raporda. Özet: aile için bir ders sayfası şablonu, `DERSLER/KAMERA/KONTROL` okuyan `main.js` kolu, `vurguYap` ve etiket köprüsü, ailenin kendi `GORUNUM` yönleri (kasa yan kapağı -x tarafında).

## 6. Ahmet'e sorular
1. Aile adı: "Bilgisayar Donanımı" mı? (öneri: evet)
2. Adres: `/3d/donanim/` mı? (öneri: evet)
3. Ders adları ve sırası yukarıdaki gibi mi? (öneri: evet; ders 3 ve 4 sonraya bırakılabilir)
4. 7-8. sınıf: resmî program bulunamadığı için metinler "tekrar ve derinleştirme". Böyle kalsın mı? (öneri: evet)
