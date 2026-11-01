// 3D Simülasyon Merkezi: Sanal | Fiziksel görünüm durumu ve üst çubuktaki geçiş düğmeleri (three.js yok).
// Ahmet 01.11: "gerçek modda da sanaldaki gibi aynı şekilde olacak". İki görünüm aynı 3D sahnedir; fark yalnız
// görünüştedir (gercekci.js). Durum sırası: adres ?gorunum=, sonra bu cihazdaki tercih, sonra Sanal.
// Dışa açılan: html[data-gorunum-kip] (DİKKAT: data-gorunum DEĞİL; main.js [data-gorunum] seçicisi kamera
// düğmelerine aittir), document üzerinde '3d:gorunum' { detail: { ad } } olayı.
const html = document.documentElement;
const ANAHTAR = 'bote-3d-gorunum';
const sakla = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* gizli pencere */ } };
const oku = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const duyur = (t) => { const d = document.querySelector('#duyuru'); if (d) d.textContent = t; };
const GECERLI = ['sanal', 'fiziksel'];

export function ilkGorunum() {
  const u = new URLSearchParams(location.search).get('gorunum');
  if (GECERLI.includes(u)) return u;
  return oku(ANAHTAR) === 'fiziksel' ? 'fiziksel' : 'sanal';
}

// Geçiş düğmelerinin biçimi çalışma anında eklenir (build.mjs ve stil.css değişmez). Seçili olan yalnız renkle
// değil alt çizgiyle de belli. Dar ekranda yazı gizlenir, simge kalır.
const CSS = [
  '.gorunum-gecis{display:inline-flex;flex:none;align-items:stretch;border:1px solid var(--line);border-radius:12px;background:var(--surface);overflow:hidden}',
  '.gorunum-gecis button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:var(--btn);min-width:var(--btn);padding:0 13px;border:0;border-radius:0;background:transparent;color:var(--muted);font-weight:700;white-space:nowrap;cursor:pointer;touch-action:manipulation;user-select:none}',
  '.gorunum-gecis button+button{border-left:1px solid var(--line)}',
  '.gorunum-gecis button[aria-pressed=true]{background:var(--violet-soft);color:var(--violet);box-shadow:inset 0 -3px 0 var(--violet)}',
  '.gorunum-gecis button[aria-busy=true]{cursor:progress}',
  '.gorunum-gecis button:focus-visible{outline-offset:-4px}',
  '@media (hover:hover) and (pointer:fine){.gorunum-gecis button:not([aria-pressed=true]):hover{background:var(--raised);color:var(--ink)}}',
  '@media (max-width:900px){.gorunum-gecis .gg-yazi{display:none}.gorunum-gecis button{padding:0}}',
].join('\n');

const SVG = '<svg class="ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';
const IKON = { // lucide-static: box (Sanal), cpu (Fiziksel: gerçek kart)
  sanal: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  fiziksel: '<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
};

// uygula(ad): sahneyi o görünüme alır; Promise ya da değer döner. Hata olursa Sanal'da kalınır.
export function gorunumKur(uygula) {
  let simdiki = 'sanal', istenen = 'sanal';
  const stil = document.createElement('style'); stil.textContent = CSS; document.head.appendChild(stil);
  const gecis = document.createElement('div');
  gecis.className = 'gorunum-gecis'; gecis.setAttribute('role', 'group'); gecis.setAttribute('aria-label', 'Görünüm');
  for (const [ad, yazi, aciklama] of [['sanal', 'Sanal', 'Sanal görünüm: sade 3D çizim'], ['fiziksel', 'Fiziksel', 'Fiziksel görünüm: gerçek kart ve set gibi']]) {
    const b = document.createElement('button');
    b.type = 'button'; b.dataset.gorunumSec = ad; b.title = aciklama; b.setAttribute('aria-label', `${yazi} görünüm`);
    b.setAttribute('aria-pressed', String(ad === 'sanal'));
    b.innerHTML = `${SVG}${IKON[ad]}</svg><span class="gg-yazi">${yazi}</span>`;
    gecis.append(b);
  }
  const yuva = document.querySelector('#gorunum-yuva');
  if (yuva) yuva.append(gecis); else document.querySelector('.ust-sag')?.prepend(gecis);
  const dugmeler = [...gecis.querySelectorAll('button')];
  const durumYaz = () => { for (const b of dugmeler) b.setAttribute('aria-pressed', String(b.dataset.gorunumSec === simdiki)); };

  async function ayarla(ad, { kaydet = true, sessiz = false } = {}) {
    if (!GECERLI.includes(ad)) return;
    istenen = ad;
    if (ad === simdiki) { durumYaz(); return; }
    const f = dugmeler.find((b) => b.dataset.gorunumSec === ad);
    f?.setAttribute('aria-busy', 'true');
    if (ad === 'fiziksel' && !sessiz) duyur('Fiziksel görünüm hazırlanıyor');
    let tamam = true;
    try { await uygula(ad); } catch (e) {
      tamam = false;
      console.warn('Fiziksel görünüm açılamadı', e);
    }
    f?.removeAttribute('aria-busy');
    if (istenen !== ad) return; // bu arada başka görünüm seçildi
    if (!tamam) { simdiki = 'sanal'; sakla(ANAHTAR, 'sanal'); durumYaz(); duyur('Fiziksel görünüm açılamadı, Sanal görünümde devam ediliyor'); return; }
    simdiki = ad;
    html.dataset.gorunumKip = ad;
    durumYaz();
    if (!sessiz) duyur(ad === 'fiziksel' ? 'Fiziksel görünüm: gerçek kart ve set gibi' : 'Sanal görünüm');
    document.dispatchEvent(new CustomEvent('3d:gorunum', { detail: { ad } }));
    if (kaydet) {
      sakla(ANAHTAR, ad);
      const u = new URL(location.href);
      if (ad === 'fiziksel') u.searchParams.set('gorunum', 'fiziksel'); else u.searchParams.delete('gorunum');
      history.replaceState(null, '', u);
    }
  }
  gecis.addEventListener('click', (e) => { const b = e.target.closest('[data-gorunum-sec]'); if (b) ayarla(b.dataset.gorunumSec); });
  html.dataset.gorunumKip = 'sanal';
  return { ayarla, simdiki: () => simdiki, gecis, onIsit: (f) => { for (const t of ['pointerenter', 'focusin']) dugmeler[1].addEventListener(t, f, { once: true }); } };
}
