/* BÖTE Blog: sayac, populer yazilar, son goruntulenenler, arama, paylasim.
   Sayfalar bu betik olmadan da tam okunur; betik yalnizca ek ozellikler sunar. */
(function () {
  'use strict';
  var API = '/api/views';
  var slug = document.body.getAttribute('data-slug');
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  };
  var fmt = new Intl.NumberFormat('tr-TR');
  var postsPromise;
  function posts() {
    if (!postsPromise) {
      postsPromise = fetch('/blog/search.json').then(function (r) { return r.ok ? r.json() : []; }).catch(function () { return []; });
    }
    return postsPromise;
  }
  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  // Alt menuler (dokunmatik ve klavye icin)
  document.querySelectorAll('.sub-toggle').forEach(function (b) {
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.sub-toggle[aria-expanded=true]').forEach(function (o) { o.setAttribute('aria-expanded', 'false'); });
      b.setAttribute('aria-expanded', String(!open));
    });
  });

  // Goruntulenme sayilari
  function showViews(map) {
    document.querySelectorAll('[data-views]').forEach(function (e) {
      var v = map[e.getAttribute('data-views')];
      if (typeof v === 'number' && v > 0) {
        e.querySelector('.n').textContent = fmt.format(v);
        e.hidden = false;
      }
    });
  }
  function readViews() {
    var slugs = [];
    document.querySelectorAll('[data-views]').forEach(function (e) {
      var s = e.getAttribute('data-views');
      if (slugs.indexOf(s) < 0 && s !== slug) slugs.push(s);
    });
    if (!slugs.length) return;
    fetch(API + '?slugs=' + encodeURIComponent(slugs.join(',')))
      .then(function (r) { return r.json(); })
      .then(function (d) { if (d && d.views) showViews(d.views); })
      .catch(function () {});
  }
  if (slug) {
    fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug: slug }), keepalive: true })
      .then(function (r) { return r.json(); })
      .then(function (d) { if (d && typeof d.views === 'number') { var m = {}; m[slug] = d.views; showViews(m); } })
      .catch(function () {});
  }
  readViews();

  // Populer yazilar (sayac verisi varsa "One cikanlar" listesinin yerini alir)
  var pop = document.querySelector('[data-popular]');
  if (pop) {
    Promise.all([fetch(API + '?top=6').then(function (r) { return r.json(); }).catch(function () { return {}; }), posts()])
      .then(function (res) {
        var top = (res[0] && res[0].top) || [];
        var bySlug = {};
        res[1].forEach(function (p) { bySlug[p.slug] = p; });
        var current = pop.getAttribute('data-current');
        var list = top.filter(function (t) { return t.views > 0 && bySlug[t.slug] && t.slug !== current; }).slice(0, 5);
        if (list.length < 3) return;
        var ol = el('ol', { class: 'mini-list' });
        list.forEach(function (t) {
          var p = bySlug[t.slug];
          var li = el('li');
          li.appendChild(el('a', { href: p.url }, p.title));
          li.appendChild(el('span', { class: 'mini-meta' }, fmt.format(t.views) + ' görüntülenme · ' + p.minutes + ' dk'));
          ol.appendChild(li);
        });
        pop.querySelector('.mini-list').replaceWith(ol);
        pop.querySelector('[data-popular-title]').textContent = 'Popüler Yazılar';
      });
  }

  // Son goruntulenen yazilar (yalnizca bu tarayicida tutulur)
  var recent = store.get('bote:recent', []);
  if (slug) {
    var h1 = document.querySelector('h1');
    var entry = { slug: slug, title: h1 ? h1.textContent.trim() : document.title, url: location.pathname };
    recent = [entry].concat(recent.filter(function (r) { return r.slug !== slug; })).slice(0, 6);
    store.set('bote:recent', recent);
  }
  var rw = document.querySelector('[data-recent]');
  if (rw) {
    posts().then(function (all) {
      var live = {};
      all.forEach(function (p) { live[p.slug] = p; });
      var items = recent.filter(function (r) { return r.slug !== slug && live[r.slug]; }).slice(0, 5);
      if (!items.length) return;
      var ul = rw.querySelector('.mini-list');
      items.forEach(function (r) {
        var li = el('li');
        li.appendChild(el('a', { href: live[r.slug].url }, live[r.slug].title));
        ul.appendChild(li);
      });
      rw.hidden = false;
    });
  }

  // Arama (Turkce karakter duyarsiz)
  function norm(s) {
    return String(s).toLocaleLowerCase('tr-TR').replace(/[çğıöşüâîû]/g, function (c) {
      return { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'â': 'a', 'î': 'i', 'û': 'u' }[c];
    });
  }
  var form = document.querySelector('.search');
  if (form) {
    var input = form.querySelector('input');
    var out = form.parentNode.querySelector('.search-results');
    var run = function () {
      var q = norm(input.value.trim());
      out.innerHTML = '';
      if (q.length < 2) { out.hidden = true; return; }
      posts().then(function (all) {
        var words = q.split(/\s+/);
        var hits = all.filter(function (p) {
          var hay = norm(p.title + ' ' + p.description + ' ' + p.category + ' ' + (p.tags || []).join(' '));
          return words.every(function (w) { return hay.indexOf(w) >= 0; });
        }).slice(0, 8);
        if (!hits.length) out.appendChild(el('li', {}, 'Sonuç bulunamadı.'));
        hits.forEach(function (p) { var li = el('li'); li.appendChild(el('a', { href: p.url }, p.title)); out.appendChild(li); });
        out.hidden = false;
      });
    };
    var t;
    input.addEventListener('input', function () { clearTimeout(t); t = setTimeout(run, 150); });
    form.addEventListener('submit', function (e) { e.preventDefault(); run(); });
    var q0 = new URLSearchParams(location.search).get('q');
    if (q0) { input.value = q0; run(); }
  }

  // Baglantiyi kopyala
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.hidden = false;
    b.addEventListener('click', function () {
      var done = function () { b.textContent = 'Kopyalandı'; setTimeout(function () { b.textContent = 'Bağlantıyı kopyala'; }, 2000); };
      if (navigator.clipboard) navigator.clipboard.writeText(b.getAttribute('data-copy')).then(done).catch(function () {});
    });
  });

  // Okuma ilerlemesi
  var bar = document.querySelector('.progress');
  var body = document.querySelector('.post-body');
  if (bar && body) {
    var tick = function () {
      var r = body.getBoundingClientRect();
      var total = r.height - window.innerHeight;
      var p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
      bar.style.width = (p * 100).toFixed(1) + '%';
    };
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  // AdSense alanlari (yalnizca ayarlanmissa sayfada bulunur)
  document.querySelectorAll('ins.adsbygoogle').forEach(function () {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
  });
})();
