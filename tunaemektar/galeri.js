// tunaemektar/galeri.js: sunum göstericisi (26.10.2026)
// Yakınlaştırma: tekerlek (imlecin olduğu noktaya), iki parmak, çift tık ya da çift dokunuş.
// Yakınken sürükleyerek kaydırma; normal boyuttayken yana kaydırınca önceki/sonraki.
// Klavye: ← → boşluk, + − 0, F tam ekran, Esc kapat. Sunum modunda araçlar 2,5 sn hareketsizlikte gizlenir.
(function () {
  'use strict';
  var GORSELLER = [
    { src: '/tunaemektar/foto/01.webp', baslik: 'Bölüm girişi' },
    { src: '/tunaemektar/foto/02.webp', baslik: 'Oyun alanı 1' },
    { src: '/tunaemektar/foto/03.webp', baslik: 'Oyun alanı 2' },
    { src: '/tunaemektar/foto/04.webp', baslik: 'Oyun alanı 3' },
    { src: '/tunaemektar/foto/05.webp', baslik: 'Gol ekranı' },
    { src: '/tunaemektar/foto/06.webp', baslik: 'Göstergeler' },
    { src: '/tunaemektar/foto/07.webp', baslik: 'Nasıl oynanır' }
  ];
  var EN_AZ = 1, EN_COK = 6;

  var $ = function (id) { return document.getElementById(id); };
  var gosterici = $('gosterici'), sahne = $('sahne'), img = $('buyukGorsel');
  var sayac = $('sayac'), baslik = $('baslik'), yuzde = $('sifirla');
  var oncekiBtn = $('onceki'), sonrakiBtn = $('sonraki');

  var aktif = 0, olcek = 1, x = 0, y = 0, sonOdak = null;
  var temel = { w: 0, h: 0, sol: 0, ust: 0 }; // görselin ölçek 1'deki kutusu (sahneye göre)

  function temelOlc() {
    var s = sahne.getBoundingClientRect();
    var k = img.naturalWidth && img.naturalHeight ? Math.min(s.width / img.naturalWidth, s.height / img.naturalHeight, 1) : 1;
    temel.w = img.naturalWidth * k; temel.h = img.naturalHeight * k;
    temel.sol = (s.width - temel.w) / 2; temel.ust = (s.height - temel.h) / 2;
  }
  function sinirla() {
    var s = sahne.getBoundingClientRect();
    var w = temel.w * olcek, h = temel.h * olcek;
    // Görsel sahneden küçükse ortala, büyükse kenar boşluk bırakmadan sınırla.
    var minX = w > s.width ? s.width - w - temel.sol : (s.width - w) / 2 - temel.sol;
    var maxX = w > s.width ? -temel.sol : minX;
    var minY = h > s.height ? s.height - h - temel.ust : (s.height - h) / 2 - temel.ust;
    var maxY = h > s.height ? -temel.ust : minY;
    x = Math.min(maxX, Math.max(minX, x));
    y = Math.min(maxY, Math.max(minY, y));
  }
  function uygula(anlik) {
    sinirla();
    img.classList.toggle('anlik', !!anlik);
    // transform-origin 0 0: görsel kendi yerinden başlar; x, y ölçeğe göre kayma
    img.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + olcek + ')';
    yuzde.textContent = Math.round(olcek * 100) + '%';
  }
  function sifirla() { olcek = 1; x = 0; y = 0; uygula(); }

  // (px, py) sahne koordinatındaki noktayı sabit tutarak yeni ölçeğe geç
  function yakinlas(yeni, px, py, anlik) {
    yeni = Math.min(EN_COK, Math.max(EN_AZ, yeni));
    var s = sahne.getBoundingClientRect();
    if (px == null) { px = s.width / 2; py = s.height / 2; }
    var gx = (px - temel.sol - x) / olcek, gy = (py - temel.ust - y) / olcek;
    olcek = yeni;
    x = px - temel.sol - gx * olcek; y = py - temel.ust - gy * olcek;
    uygula(anlik);
  }

  function goster(i) {
    aktif = (i + GORSELLER.length) % GORSELLER.length;
    var g = GORSELLER[aktif];
    olcek = 1; x = 0; y = 0;
    img.classList.add('anlik');
    img.style.transform = 'none';
    img.alt = g.baslik;
    img.onload = function () { temelOlc(); uygula(true); };
    img.src = g.src;
    sayac.textContent = (aktif + 1) + ' / ' + GORSELLER.length;
    baslik.textContent = g.baslik;
    yuzde.textContent = '100%';
    // Komşuları önceden yükle: sunumda geçiş beklemesin
    [aktif + 1, aktif - 1].forEach(function (k) {
      var p = new Image(); p.src = GORSELLER[(k + GORSELLER.length) % GORSELLER.length].src;
    });
  }

  function ac(i, sunum) {
    sonOdak = document.activeElement;
    gosterici.hidden = false;
    document.body.style.overflow = 'hidden';
    goster(i);
    $('kapat').focus({ preventScroll: true });
    if (sunum) tamEkranAc();
    hareket();
  }
  function kapat() {
    if (document.fullscreenElement) document.exitFullscreen().catch(function () {});
    gosterici.hidden = true;
    document.body.style.overflow = '';
    clearTimeout(sessizZaman);
    gosterici.classList.remove('sessiz');
    if (sonOdak && sonOdak.focus) sonOdak.focus({ preventScroll: true });
  }
  function tamEkranAc() {
    var el = document.documentElement;
    if (el.requestFullscreen && !document.fullscreenElement) el.requestFullscreen().catch(function () {});
  }
  function tamEkranDegistir() {
    if (document.fullscreenElement) document.exitFullscreen().catch(function () {});
    else tamEkranAc();
  }

  // Araçları hareketsizlikte gizle (yalnız tam ekranda: sunum anı)
  var sessizZaman;
  function hareket() {
    gosterici.classList.remove('sessiz');
    clearTimeout(sessizZaman);
    sessizZaman = setTimeout(function () {
      if (document.fullscreenElement && !gosterici.hidden) gosterici.classList.add('sessiz');
    }, 2500);
  }

  // Izgara ve düğmeler
  document.getElementById('izgara').addEventListener('click', function (e) {
    var kart = e.target.closest('.kart'); if (!kart) return;
    ac(Number(kart.getAttribute('data-i')), false);
  });
  $('sunumBaslat').addEventListener('click', function () { ac(0, true); });
  $('kapat').addEventListener('click', kapat);
  oncekiBtn.addEventListener('click', function () { goster(aktif - 1); });
  sonrakiBtn.addEventListener('click', function () { goster(aktif + 1); });
  $('yakinlas').addEventListener('click', function () { yakinlas(olcek * 1.5); });
  $('uzaklas').addEventListener('click', function () { yakinlas(olcek / 1.5); });
  yuzde.addEventListener('click', sifirla);
  $('tamEkran').addEventListener('click', tamEkranDegistir);

  document.addEventListener('keydown', function (e) {
    if (gosterici.hidden) return;
    hareket();
    switch (e.key) {
      case 'Escape': if (!document.fullscreenElement) kapat(); break;
      case 'ArrowRight': case 'PageDown': case ' ': e.preventDefault(); goster(aktif + 1); break;
      case 'ArrowLeft': case 'PageUp': e.preventDefault(); goster(aktif - 1); break;
      case '+': case '=': yakinlas(olcek * 1.5); break;
      case '-': case '_': yakinlas(olcek / 1.5); break;
      case '0': sifirla(); break;
      case 'f': case 'F': tamEkranDegistir(); break;
      case 'Tab': // odak göstericinin içinde kalsın
        var odaklar = gosterici.querySelectorAll('button:not([disabled])');
        var ilk = odaklar[0], son = odaklar[odaklar.length - 1];
        if (e.shiftKey && document.activeElement === ilk) { e.preventDefault(); son.focus(); }
        else if (!e.shiftKey && document.activeElement === son) { e.preventDefault(); ilk.focus(); }
        break;
    }
  });
  gosterici.addEventListener('mousemove', hareket);
  window.addEventListener('resize', function () { if (!gosterici.hidden) { temelOlc(); uygula(true); } });

  // Tekerlek: imlecin olduğu yere yakınlaş
  sahne.addEventListener('wheel', function (e) {
    e.preventDefault();
    var s = sahne.getBoundingClientRect();
    var carpan = Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0015));
    yakinlas(olcek * carpan, e.clientX - s.left, e.clientY - s.top, true);
  }, { passive: false });

  // İşaretçi olayları: sürükleme, iki parmak, kaydırarak geçiş, çift dokunuş
  var isaretciler = new Map(), baslangic = null, sonDokunus = 0;
  sahne.addEventListener('pointerdown', function (e) {
    sahne.setPointerCapture(e.pointerId);
    isaretciler.set(e.pointerId, { x: e.clientX, y: e.clientY });
    var s = sahne.getBoundingClientRect();
    if (isaretciler.size === 1) {
      baslangic = { tip: 'tek', px: e.clientX, py: e.clientY, x: x, y: y, zaman: Date.now() };
      var simdi = Date.now();
      if (simdi - sonDokunus < 300) { // çift tık / çift dokunuş
        if (olcek > 1.05) sifirla(); else yakinlas(2.5, e.clientX - s.left, e.clientY - s.top);
        sonDokunus = 0; baslangic = null; return;
      }
      sonDokunus = simdi;
    } else if (isaretciler.size === 2) {
      var n = Array.from(isaretciler.values());
      baslangic = {
        tip: 'iki', mesafe: Math.hypot(n[0].x - n[1].x, n[0].y - n[1].y), olcek: olcek,
        mx: (n[0].x + n[1].x) / 2 - s.left, my: (n[0].y + n[1].y) / 2 - s.top
      };
    }
    hareket();
  });
  sahne.addEventListener('pointermove', function (e) {
    if (!isaretciler.has(e.pointerId) || !baslangic) return;
    isaretciler.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (baslangic.tip === 'iki' && isaretciler.size === 2) {
      var n = Array.from(isaretciler.values());
      var d = Math.hypot(n[0].x - n[1].x, n[0].y - n[1].y);
      yakinlas(baslangic.olcek * d / baslangic.mesafe, baslangic.mx, baslangic.my, true);
    } else if (baslangic.tip === 'tek' && olcek > 1.01) {
      sahne.classList.add('surukleniyor');
      x = baslangic.x + (e.clientX - baslangic.px);
      y = baslangic.y + (e.clientY - baslangic.py);
      uygula(true);
    }
  });
  function birak(e) {
    if (!isaretciler.has(e.pointerId)) return;
    isaretciler.delete(e.pointerId);
    sahne.classList.remove('surukleniyor');
    if (baslangic && baslangic.tip === 'tek' && olcek <= 1.01) {
      var dx = e.clientX - baslangic.px, dy = e.clientY - baslangic.py;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5 && Date.now() - baslangic.zaman < 600) {
        sonDokunus = 0; goster(aktif + (dx < 0 ? 1 : -1));
      }
    }
    if (isaretciler.size === 0) baslangic = null;
    else if (isaretciler.size === 1) {
      var kalan = Array.from(isaretciler.values())[0];
      baslangic = { tip: 'tek', px: kalan.x, py: kalan.y, x: x, y: y, zaman: Date.now() };
    }
  }
  sahne.addEventListener('pointerup', birak);
  sahne.addEventListener('pointercancel', birak);
})();
