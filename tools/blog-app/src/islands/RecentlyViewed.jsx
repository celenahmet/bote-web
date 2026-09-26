import { useEffect, useState } from 'react';
import { store } from './views-client.js';

// Bu tarayicida son okunan yazilar (sunucuya gonderilmez).
export default function RecentlyViewed({ posts, current = '' }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const by = Object.fromEntries(posts.map((p) => [p.slug, p]));
    let list = store.get('bote:recent', []).filter((s) => typeof s === 'string');
    if (current) {
      list = [current, ...list.filter((s) => s !== current)].slice(0, 8);
      store.set('bote:recent', list);
    }
    setItems(list.filter((s) => s !== current && by[s]).slice(0, 5).map((s) => by[s]));
  }, []);
  if (!items.length) return null;
  return (
    <section className="widget" aria-labelledby="w-recent">
      <h2 className="widget-title" id="w-recent">Son okuduğun yazılar</h2>
      <ul className="mini plain mini-thumbs">
        {items.map((p) => (
          <li key={p.slug}>
            {p.img && <a className="mini-img" href={p.url} tabIndex={-1} aria-hidden="true"><img src={p.img} alt="" width="120" height="63" loading="lazy" decoding="async" /></a>}
            <div><a href={p.url}>{p.title}</a><small>{p.minutes} dk okuma</small></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
