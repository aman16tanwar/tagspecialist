import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Paid Tracking Debug Session ($150) | Tag Specialist',
  description: 'Book a 1-hour paid screen-share session ($150 USD) to debug GTM, server-side GTM, GA4, Meta CAPI or BigQuery issues live. Larger projects are scoped after the session.',
  keywords: 'tracking debug session, GA4 debugging, GTM debugging, server-side GTM help, Meta CAPI help, BigQuery consulting',
  alternates: {
    canonical: '/book-audit',
  },
  openGraph: {
    title: 'Book a Paid Tracking Debug Session ($150) | Tag Specialist',
    description: 'A 1-hour paid screen-share session to debug your tracking or data setup live.',
    type: 'website',
    url: '/book-audit',
  },
};

export default function BookAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
