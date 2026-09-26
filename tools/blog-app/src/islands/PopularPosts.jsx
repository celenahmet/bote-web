import { useEffect, useState } from 'react';
import { getTop, fmt } from './views-client.js';

// Sunucuda "One cikanlar" listesi olarak basilir; sayac verisi varsa "Populer" olur.
export default function PopularPosts({ fallback, posts, current = '' }) {
  const [top, setTop] = useState(null);
  useEffect(() => {
    getTop(8).then((list) => {
      const by = Object.fromEntries(posts.map((p) => [p.slug, p]));
      const rows = list.filter((t) => t.views > 0 && by[t.slug] && t.slug !== current).slice(0, 5)
        .map((t) => ({ ...by[t.slug], views: t.views }));
      if (rows.length >= 3) setTop(rows);
    });
  }, []);
  const rows = top || fallback;
  if (!rows.length) return null;
  return (
    <section className="widget" aria-labelledby="w-popular">
      <h2 className="widget-title" id="w-popular">{top ? 'Popüler yazılar' : 'Öne çıkan yazılar'}</h2>
      <ol className="mini mini-thumbs mini-num">
        {rows.map((p) => (
          <li key={p.slug}>
            {p.img && <a className="mini-img" href={p.url} tabIndex={-1} aria-hidden="true"><img src={p.img} alt="" width="120" height="63" loading="lazy" decoding="async" /></a>}
            <div>
              <a href={p.url}>{p.title}</a>
              <small>{p.views ? `${fmt(p.views)} görüntülenme · ` : ''}{p.minutes} dk okuma</small>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
