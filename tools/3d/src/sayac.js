// Görüntülenme sayacı (blogdaki /api/views ile aynı uç). Sayfanın en altındaki [data-sayac] alanını doldurur.
// Kurallar: ilk boyamayı geciktirmez (sayfa yüklendikten sonra boşta çalışır), alan sayı gelene kadar gizli kalır;
// API kapalıysa ({disabled:true}) ya da hata varsa gizli kalır, yer tutucu yazı yok. Kişisel veri yok: yalnız sayfa anahtarı gider.
// Aynı oturumda ikinci kez POST atılmaz (blogdaki bote:seen: önlemi); sunucu ayrıca 30 dk içinde aynı ziyaretçiyi saymaz.
const API = '/api/views';

function calis() {
  const el = document.querySelector('[data-sayac]');
  if (!el) return;
  const anahtar = el.getAttribute('data-sayac');
  if (!anahtar) return;
  // Ders ve Özgür Mod sayfaları tam ekran uygulamadır (alt bilgi gizli): sayaç anlatım panelinin en altına taşınır
  // (Ahmet 03.11: her sayfada aşağıda görünsün); panel yoksa öğretmen notu panelinin sonuna.
  const ek = document.body.classList.contains('ders-sayfasi') && (document.querySelector('.kart-govde') || document.getElementById('ogretmen'));
  if (ek) ek.appendChild(el);
  const oturum = `bote:seen:${anahtar}`;
  let gorulmus = false;
  try { gorulmus = sessionStorage.getItem(oturum) === '1'; } catch (e) { /* depo kapalı: sunucu tekrarı yine önler */ }
  const istek = gorulmus
    ? fetch(`${API}?slugs=${encodeURIComponent(anahtar)}`)
    : fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug: anahtar }), keepalive: true });
  if (!gorulmus) { try { sessionStorage.setItem(oturum, '1'); } catch (e) { /* önemsiz */ } }
  istek.then((r) => r.json()).then((d) => {
    const v = gorulmus ? d && d.views && d.views[anahtar] : d && d.views;
    if (typeof v !== 'number' || !(v > 0)) return;
    el.textContent = `${new Intl.NumberFormat('tr-TR').format(v)} görüntülenme`;
    el.hidden = false;
  }).catch(() => { /* sessizce gizli kal */ });
}

const bosta = window.requestIdleCallback ? (f) => window.requestIdleCallback(f, { timeout: 3000 }) : (f) => setTimeout(f, 800);
if (document.readyState === 'complete') bosta(calis); else window.addEventListener('load', () => bosta(calis), { once: true });
