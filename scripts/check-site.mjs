import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { pricing, estimateMonthlyCost, formatPrice, pricingDisplay } from '../src/config/pricing.ts';
import config from '../astro.config.mjs';
import { assessmentPath, directoryPages } from '../src/data/directory-pages.ts';

for (const [documents, expected] of [[0, 49.50], [100, 94.50], [500, 274.50], [1000, 499.50], [2000, 949.50], [5000, 2299.50], [10000, 4549.50]]) {
  assert.equal(estimateMonthlyCost(documents), expected, `Price for ${documents} documents`);
  assert.equal(Math.round(estimateMonthlyCost(documents) * 100), 4950 + documents * 45);
}
for (const invalid of [-1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER, '100']) {
  assert.throws(() => estimateMonthlyCost(invalid), RangeError);
}
assert.equal(pricing.estimator.defaultDocuments % pricing.estimator.step, 0);
for (const origin of ['http://zopi.co.uk/', 'https://www.example.com/', 'https://zopi.co.uk/path', 'https://user:password@zopi.co.uk/']) {
  const result = spawnSync(process.execPath, ['--input-type=module', '-e', 'await import("./astro.config.mjs")'], {
    cwd: resolve('.'), env: { ...process.env, PUBLIC_SITE_URL: origin }, encoding: 'utf8',
  });
  assert.notEqual(result.status, 0, `Reject invalid public origin ${new URL(origin).hostname}`);
  assert.ok(result.stderr.includes('PUBLIC_SITE_URL must be a real HTTPS origin'));
}

async function htmlFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(path));
    else if (entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}
const root = resolve('dist');
const files = await htmlFiles(root);
assert.ok(files.length >= 13, 'All intended website routes were built');
const origin = config.site;
const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
const robots = await readFile(join(root, 'robots.txt'), 'utf8');
assert.ok(robots.includes(new URL('/sitemap.xml', origin).href));
const details = [...directoryPages.partners, ...directoryPages.integrations];
const detailByPath = new Map(details.map(detail => [join(root, detail.path, 'index.html'), detail]));
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
const sitemapSet = new Set(sitemapUrls);
assert.equal(sitemapSet.size, sitemapUrls.length, 'Sitemap has no duplicate URLs');
const emittedDetails = files.filter(file => /\/(partners|integrations)\/[^/]+\/index\.html$/.test(file));
assert.deepEqual(new Set(emittedDetails), new Set(detailByPath.keys()), 'One generated detail page per canonical entity');
for (const image of ['retail-document-workspace.webp', 'invoice-field-mapping.webp']) {
  assert.ok((await stat(join(root, 'product', image))).size > 0, `Built product illustration: ${image}`);
}
const indexableDescriptions = new Set();
const indexableTitles = new Set();
const indexableCanonicals = new Set();
for (const kind of ['partners', 'integrations']) {
  const directoryHtml = await readFile(join(root, kind, 'index.html'), 'utf8');
  for (const detail of directoryPages[kind]) {
    assert.ok(directoryHtml.includes(`href="${detail.path}"`), `Directory links to ${detail.path}`);
  }
}
let links = 0;
for (const path of files) {
  const html = await readFile(path, 'utf8');
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${path}: one main heading`);
  assert.match(html, /<main\b[^>]*id="main-content"/);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const is404 = path === join(root, '404.html');
  const detail = detailByPath.get(path);
  const pageUrl = new URL(is404 ? '/404.html' : detail?.path ?? canonical, origin).href;
  if (detail) {
    const image = detail.kind === 'partners' ? 'retail-document-workspace.webp' : 'invoice-field-mapping.webp';
    assert.ok(html.includes(`src="/product/${image}"`), `${path}: relevant product illustration`);
    assert.match(html, /alt="Illustrative /);
    for (const section of ['business-value', 'workflow-example', 'connection-questions']) {
      assert.ok(html.includes(`id="${section}"`), `${path}: ${section}`);
    }
    for (const amount of [pricingDisplay.monthlyFee, pricingDisplay.documentFee, formatPrice(estimateMonthlyCost(pricing.estimator.defaultDocuments))]) {
      assert.ok(html.includes(amount), `${path}: standard price and example reflect pricing configuration`);
    }
    assert.ok(html.includes(`href="${assessmentPath(detail.entity.name).replace('&', '&amp;')}"`), `${path}: prefilled enquiry`);
    const breadcrumbs = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .flatMap(([, json]) => JSON.parse(json)['@graph'] ?? []).find(node => node['@type'] === 'BreadcrumbList');
    assert.deepEqual(breadcrumbs?.itemListElement.map(({ item }) => item), [
      new URL(`/${detail.kind}/`, origin).href, pageUrl,
    ], `${path}: detail breadcrumbs`);
  }
  if (is404) {
    assert.match(html, /<meta name="robots" content="noindex, follow"/);
    assert.equal(canonical, undefined, '404 page has no canonical URL');
    assert.doesNotMatch(sitemap, /\/404(?:\.html|\/)?<\/loc>/);
  } else if (detail && detail.editorial?.status !== 'reviewed') {
    assert.match(html, /<meta name="robots" content="noindex, follow"/);
    assert.ok(!sitemapSet.has(pageUrl), `${path}: unreviewed detail excluded from sitemap`);
  } else {
    assert.ok(canonical, `${path}: canonical URL`);
    assert.equal(new URL(canonical).origin, new URL(origin).origin);
    assert.ok(sitemapSet.has(canonical), `${path}: sitemap membership`);
    assert.ok(!indexableCanonicals.has(canonical), `${path}: unique canonical URL`);
    indexableCanonicals.add(canonical);
    if (detail) {
      assert.equal(canonical, pageUrl, `${path}: canonical detail URL`);
      assert.doesNotMatch(html, /<meta name="robots" content="noindex/);
      const title = html.match(/<title>([^<]+)<\/title>/)[1];
      const description = html.match(/<meta name="description" content="([^"]+)"/)[1];
      assert.ok(!indexableTitles.has(title) && !indexableDescriptions.has(description), `${path}: unique search metadata`);
      indexableTitles.add(title);
      indexableDescriptions.add(description);
    }
  }
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${path}: unique IDs`);
  for (const match of html.matchAll(/<(?:a|link)\b[^>]*\bhref="([^"]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    assert.ok(!/example\.com|\.example\b/.test(href), `Placeholder link in ${path}`);
    if (/^(mailto:|tel:)/.test(href)) { assert.ok(!/^mailto:(?:\?|$)/.test(href)); continue; }
    const url = new URL(href, pageUrl);
    if (url.origin !== new URL(origin).origin) continue;
    const target = join(root, decodeURIComponent(url.pathname));
    const info = await stat(target).catch(() => null);
    assert.ok(info, `${path}: missing destination ${href}`);
    const targetFile = info.isDirectory() ? join(target, 'index.html') : target;
    if (url.hash && targetFile.endsWith('.html')) {
      const targetHtml = await readFile(targetFile, 'utf8');
      assert.ok(targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `Missing anchor ${href}`);
    }
    links++;
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
}
assert.deepEqual(sitemapSet, indexableCanonicals, 'Sitemap corresponds to indexable generated pages');
console.log(`Passed: pricing boundaries, invalid volumes, ${files.length} pages, ${links} local links, canonical URLs, sitemap, JSON-LD and landmarks. ${details.length} directory detail pages with ${indexableTitles.size} indexable.`);
