import type { APIRoute } from 'astro';
import { site } from '../config/site';
export const GET: APIRoute = () => new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site.origin).href}\n`, { headers: { 'Content-Type': 'text/plain' } });
