// GET  /api/views?slugs=a,b   -> { views: { a: 12, b: 3 } }
// GET  /api/views?top=5       -> { top: [{ slug, views }] }
// POST /api/views {slug}      -> { slug, views, counted }
// Upstash ortam degiskenleri yoksa { disabled: true } doner; sayfalar sayac alanini gizler.
'use strict';

const { createHandler, upstashStore } = require('./_lib/views-core.js');
const slugs = require('./_lib/posts.json');

module.exports = createHandler({ store: upstashStore(), slugs });
