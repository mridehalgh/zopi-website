import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const tokenFlag = process.argv.indexOf('--token');
const token = tokenFlag >= 0 ? process.argv[tokenFlag + 1] : process.env.LOGO_DEV_PUBLISHABLE_KEY;
const force = process.argv.includes('--force');
const onlyFlag = process.argv.indexOf('--only');
const only = onlyFlag >= 0 ? new Set(process.argv[onlyFlag + 1].split(',')) : null;

if (!token?.startsWith('pk_')) {
  throw new Error('Pass a Logo.dev publishable key with --token or LOGO_DEV_PUBLISHABLE_KEY.');
}

const projectRoot = process.cwd();
const builtPage = join(projectRoot, 'dist/partners/index.html');
const html = await readFile(builtPage, 'utf8');
const matches = [...html.matchAll(/data-logo-query="([^"]+)" data-logo-file="([^"]+)"/g)];
const logos = [...new Map(matches.map((match) => [match[2], { query: match[1], path: match[2] }])).values()]
  .filter((logo) => !only || only.has(logo.path.split('/').pop().replace(/\.webp$/, '')));

if (!logos.length) {
  throw new Error('No partner logo manifest found. Run npm run build first.');
}

const outputRoot = join(projectRoot, 'public');
const failures = [];
let downloaded = 0;
let skipped = 0;
let cursor = 0;

async function downloadLogo(logo) {
  const outputPath = join(outputRoot, logo.path.replace(/^\//, ''));
  try {
    const existing = await stat(outputPath);
    if (!force && existing.size > 0) {
      skipped += 1;
      return;
    }
  } catch {
    // The asset is missing and should be fetched.
  }

  const identifier = decodeURIComponent(logo.query);
  const [mode, ...valueParts] = identifier.split(':');
  const value = valueParts.join(':');
  const endpoint = mode === 'domain'
    ? `https://img.logo.dev/${encodeURIComponent(value)}`
    : `https://img.logo.dev/name/${encodeURIComponent(value)}`;
  const url = new URL(endpoint);
  url.searchParams.set('token', token);
  url.searchParams.set('format', 'webp');
  url.searchParams.set('size', '256');
  url.searchParams.set('theme', 'light');
  url.searchParams.set('retina', 'true');
  url.searchParams.set('fallback', '404');

  const response = await fetch(url, { headers: { Accept: 'image/webp,image/*' } });
  const contentType = response.headers.get('content-type') ?? '';
  if (!response.ok || !contentType.startsWith('image/')) {
    failures.push(`${value} (${response.status})`);
    return;
  }

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, Buffer.from(await response.arrayBuffer()));
  downloaded += 1;
}

async function worker() {
  while (cursor < logos.length) {
    const logo = logos[cursor];
    cursor += 1;
    await downloadLogo(logo);
  }
}

await Promise.all(Array.from({ length: Math.min(6, logos.length) }, () => worker()));

console.log(`Partner logos: ${downloaded} downloaded, ${skipped} already present, ${failures.length} unavailable.`);
if (failures.length) console.log(`Text fallback retained for: ${failures.join(', ')}`);
