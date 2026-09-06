/**
 * Canonical origin for the site, e.g. "https://tagspecialist.ca".
 *
 * This is deployment configuration, not application logic — it is the single
 * place the domain is written. Set NEXT_PUBLIC_SITE_URL in the environment
 * (Cloudflare Pages -> Settings -> Environment variables) to point a build at
 * a different origin; the fallback keeps local development working.
 *
 * Next.js `metadataBase` (set in src/app/layout.tsx) resolves RELATIVE urls in
 * metadata objects against this, so page metadata should use paths like
 * '/services' rather than absolute urls. JSON-LD requires absolute urls, so
 * schema objects interpolate SITE_URL directly.
 *
 * No trailing slash.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tagspecialist.ca'
).replace(/\/$/, '');
