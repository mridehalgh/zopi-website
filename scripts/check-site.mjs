import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { pricing, estimateMonthlyCost } from '../src/config/pricing.ts';
import config from '../astro.config.mjs';

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
let links = 0;
for (const path of files) {
  const html = await readFile(path, 'utf8');
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${path}: one main heading`);
  assert.match(html, /<main\b[^>]*id="main-content"/);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const is404 = path === join(root, '404.html');
  const pageUrl = is404 ? new URL('/404.html', origin).href : canonical;
  if (is404) {
    assert.match(html, /<meta name="robots" content="noindex, follow"/);
    assert.equal(canonical, undefined, '404 page has no canonical URL');
    assert.doesNotMatch(sitemap, /\/404(?:\.html|\/)?<\/loc>/);
  } else {
    assert.ok(canonical, `${path}: canonical URL`);
    assert.equal(new URL(canonical).origin, new URL(origin).origin);
    assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `${path}: sitemap membership`);
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
console.log(`Passed: pricing boundaries, invalid volumes, ${files.length} pages, ${links} local links, canonical URLs, sitemap, JSON-LD and landmarks.`);
