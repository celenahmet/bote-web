// GET  /api/views?slugs=a,b   -> { views: { a: 12, b: 3 } }
// GET  /api/views?top=5       -> { top: [{ slug, views }] }
// POST /api/views {slug}      -> { slug, views, counted }
// Upstash ortam degiskenleri yoksa { disabled: true } doner; sayfalar sayac alanini gizler.
'use strict';

const { createHandler, upstashStore } = require('./_lib/views-core.js');
const posts = require('./_lib/posts.json');
// 3D sayfa anahtarlari: tools/3d/build.mjs yollar.mjs'ten uretir (izin listesi, bilinmeyen anahtar red).
const sayfalar3d = require('./_lib/3d-sayac.json');
const slugs = [...posts, ...sayfalar3d];

module.exports = createHandler({ store: upstashStore(), slugs });
