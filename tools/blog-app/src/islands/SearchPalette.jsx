import { useEffect, useMemo, useRef, useState } from 'react';

const TR = { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'â': 'a', 'î': 'i', 'û': 'u' };
const norm = (s) => String(s).toLocaleLowerCase('tr-TR').replace(/[çğıöşüâîû]/g, (c) => TR[c]);

// ⌘K / Ctrl+K / "/" ile acilan yazi arama paleti.
export default function SearchPalette() {
  const dialog = useRef(null);
  const input = useRef(null);
  const [posts, setPosts] = useState(null);
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);

  const open = () => {
    if (!posts) fetch('/blog/search.json').then((r) => r.json()).then(setPosts).catch(() => setPosts([]));
    dialog.current?.showModal();
    setTimeout(() => input.current?.focus(), 0);
  };
  useEffect(() => {
    const onKey = (e) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || '');
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const hits = useMemo(() => {
    if (!posts) return [];
    const words = norm(q.trim()).split(/\s+/).filter(Boolean);
    const list = posts.filter((p) => {
      const hay = norm(`${p.title} ${p.description} ${p.category} ${(p.tags || []).join(' ')}`);
      return words.every((w) => hay.includes(w));
    });
    return list.slice(0, 8);
  }, [posts, q]);

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, hits.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    if (e.key === 'Enter' && hits[sel]) window.location.href = hits[sel].url;
  };

  return (
    <>
      <button type="button" className="icon-btn" onClick={open} aria-label="Blogda ara" aria-haspopup="dialog">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></svg>
        <span className="search-label">Ara</span>
        <span className="kbd" aria-hidden="true">⌘K</span>
      </button>
      <dialog ref={dialog} className="palette" aria-label="Blogda ara" onClick={(e) => e.target === dialog.current && dialog.current.close()}>
        <div className="palette-in">
          <label htmlFor="palette-q" className="sr-only">Yazılarda ara</label>
          <input id="palette-q" ref={input} type="search" placeholder="Yazılarda ara: kariyer, AGS, TPACK…" value={q}
            onChange={(e) => { setQ(e.target.value); setSel(0); }} onKeyDown={onInputKey} autoComplete="off" />
          {posts && hits.length === 0 && <p className="palette-empty">Sonuç bulunamadı.</p>}
          {!posts && <p className="palette-empty">Yükleniyor…</p>}
          <ul role="listbox" aria-label="Sonuçlar">
            {hits.map((p, i) => (
              <li key={p.slug}>
                <a href={p.url} role="option" aria-selected={i === sel} onMouseEnter={() => setSel(i)}>
                  <b>{p.title}</b>
                  <small>{p.category} · {p.minutes} dk · {p.sources} kaynak</small>
                </a>
              </li>
            ))}
          </ul>
          <div className="palette-foot" aria-hidden="true"><span>↑↓ seç</span><span>↵ aç</span><span>esc kapat</span></div>
        </div>
      </dialog>
    </>
  );
}
