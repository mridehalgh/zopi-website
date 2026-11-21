import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import { parseEnv } from 'node:util';

const mode = process.argv.includes('dev') ? 'development' : 'production';
const env = {};
for (const file of ['.env', '.env.local', `.env.${mode}`, `.env.${mode}.local`]) {
  try { Object.assign(env, parseEnv(readFileSync(file, 'utf8'))); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
}
const origin = process.env.PUBLIC_SITE_URL?.trim() || env.PUBLIC_SITE_URL?.trim() || 'https://zopi.co.uk/';
if (origin) {
  const url = new URL(origin);
  if (url.protocol !== 'https:' || url.username || url.password || /(^|\.)example\.(com|net|org)$/.test(url.hostname) || url.hostname.endsWith('.example') || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('PUBLIC_SITE_URL must be a real HTTPS origin, without a path.');
  }
}

export default defineConfig({
  output: 'static',
  site: origin,
});
