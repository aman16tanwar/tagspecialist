import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Free Tracking Audit | Tag Specialist',
  description: 'Schedule a free 15-minute tracking audit or data engineering consultation. Get a tracking health assessment, revenue impact analysis, and custom recommendations — no sales pressure.',
  keywords: 'free tracking audit, GA4 audit, GTM audit, server-side tracking consultation, data engineering consultation, BigQuery consultation',
  alternates: {
    canonical: 'https://tagspecialist.ca/book-audit',
  },
  openGraph: {
    title: 'Book a Free Tracking Audit | Tag Specialist',
    description: 'Schedule a free 15-minute tracking audit. Get a tracking health assessment and revenue impact analysis.',
    type: 'website',
    url: 'https://tagspecialist.ca/book-audit',
  },
};

export default function BookAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
