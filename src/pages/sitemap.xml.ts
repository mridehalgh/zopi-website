import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { directoryPages } from '../data/directory-pages';

export const GET: APIRoute = () => {
  const sitePaths = ['/', '/partners/', '/integrations/', '/pricing/', '/enterprise/', '/developers/', '/contact/', '/security/', '/privacy/', '/terms/', '/guides/', '/guides/edi-costs/', '/guides/retailer-edi-onboarding/'];
  const editorialPaths = [...directoryPages.partners, ...directoryPages.integrations]
    .filter(page => page.editorial?.status === 'reviewed').map(page => page.path);
  const urls = [...sitePaths, ...editorialPaths].map(path => `<url><loc>${new URL(path, site.origin).href}</loc></url>`);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
