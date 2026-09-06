/**
 * Stamps the current SITE_URL into the static text files that Next.js does not
 * template: public/robots.txt, public/llms.txt, public/llms-full.txt.
 *
 * Runs automatically on `prebuild`. It is idempotent — if the files already
 * use the target origin it writes nothing, so a normal build produces no diff.
 * It only rewrites when NEXT_PUBLIC_SITE_URL has actually changed, which is
 * exactly when you want it to (a domain migration).
 */
import { readFileSync, writeFileSync } from 'node:fs';

const TARGET = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tagspecialist.ca').replace(/\/$/, '');
const FILES = ['public/robots.txt', 'public/llms.txt', 'public/llms-full.txt'];

// Any origin we may have previously stamped in. Add old domains here when migrating.
const KNOWN_ORIGINS = /https:\/\/tagspecialist\.(ca|com|io|co)/g;

let touched = 0;
for (const file of FILES) {
  let text;
  try {
    text = readFileSync(file, 'utf8');
  } catch {
    console.warn(`sync-site-url: skipping missing ${file}`);
    continue;
  }
  const next = text.replace(KNOWN_ORIGINS, TARGET);
  if (next !== text) {
    writeFileSync(file, next);
    console.log(`sync-site-url: rewrote ${file} -> ${TARGET}`);
    touched++;
  }
}
console.log(`sync-site-url: ${TARGET} (${touched} file(s) changed)`);
