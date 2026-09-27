import { useEffect, useRef, useState } from 'react';
import { getTop, fmt } from './views-client.js';

// Yazi sayfasi sag sutunu: Populer / Yeni sekmeli liste (Ahmet 26.09: "secilebilir sekilde").
// Sunucuda Populer sekmesi one cikanlarla basilir; sayac verisi gelince gercek populer listeye doner.
const TABS = [['pop', 'Popüler'], ['new', 'Yeni']];

export default function PostTabs({ posts, latest, fallback, current = '' }) {
  const [tab, setTab] = useState('pop');
  const [top, setTop] = useState(null);
  const refs = useRef({});
  useEffect(() => {
    getTop(8).then((list) => {
      const by = Object.fromEntries(posts.map((p) => [p.slug, p]));
      const rows = list.filter((t) => t.views > 0 && by[t.slug] && t.slug !== current).slice(0, 5)
        .map((t) => ({ ...by[t.slug], views: t.views }));
      if (rows.length >= 3) setTop(rows);
    });
  }, []);
  const rows = tab === 'pop' ? (top || fallback) : latest;
  const pick = (id) => { setTab(id); refs.current[id]?.focus(); };
  const onKey = (e) => {
    const i = TABS.findIndex(([id]) => id === tab);
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      pick(TABS[(i + (e.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length][0]);
    }
  };
  return (
    <section className="widget wtabs-widget" aria-label="Yazı listeleri">
      <div className="wtabs" role="tablist" aria-label="Liste türü" onKeyDown={onKey}>
        {TABS.map(([id, label]) => (
          <button key={id} type="button" role="tab" id={`wt-${id}`} ref={(el) => { refs.current[id] = el; }}
            aria-selected={tab === id} aria-controls="wt-panel" tabIndex={tab === id ? 0 : -1} onClick={() => setTab(id)}>
            {label}
          </button>
        ))}
      </div>
      {/* tabpanel rolu SARMALAYICIDA: <ol>'a verilince liste anlami eziliyor ve her <li>
          Lighthouse'ta "listitem" hatasi veriyordu (56 yazi, 27.09). */}
      <div id="wt-panel" role="tabpanel" aria-labelledby={`wt-${tab}`}>
      <ol className={`mini mini-thumbs${tab === 'pop' ? ' mini-num' : ' plain'}`}>
        {rows.map((p) => (
          <li key={p.slug}>
            {p.img && <a className="mini-img" href={p.url} tabIndex={-1} aria-hidden="true"><img src={p.img} alt="" width="64" height="64" loading="lazy" decoding="async" /></a>}
            <div>
              <a href={p.url}>{p.title}</a>
              <small>
                {tab === 'new' ? `${p.dateText} · ` : p.views ? `${fmt(p.views)} görüntülenme · ` : ''}{p.minutes} dk okuma
              </small>
            </div>
          </li>
        ))}
      </ol>
      </div>
    </section>
  );
}
