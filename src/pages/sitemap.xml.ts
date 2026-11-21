import type { APIRoute } from 'astro';
import { site } from '../config/site';

export const GET: APIRoute = () => {
  const paths = ['/', '/partners', '/integrations', '/pricing', '/enterprise', '/developers', '/contact', '/security', '/privacy', '/terms', '/guides', '/guides/edi-costs', '/guides/retailer-edi-onboarding'];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${new URL(path === '/' ? path : `${path}/`, site.origin).href}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
