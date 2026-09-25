import { loadBlog, searchIndex } from '../lib.js';

export function GET() {
  return new Response(`${JSON.stringify(searchIndex(loadBlog()))}\n`, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
