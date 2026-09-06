import type { Metadata } from 'next';
import CaseStudiesSection from '@/components/casestudies/CaseStudiesSection';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Case Studies | Server-Side Tracking & Data Engineering Results',
  description: 'Real projects: server-side GTM on Cloud Run, Meta CAPI with event deduplication, BigQuery data platforms, and GA4 attribution rebuilds for e-commerce, SaaS and hospitality brands.',
  keywords: 'google tag manager case studies, server-side tracking results, GTM implementation case study, conversion tracking results, attribution accuracy improvement',
  alternates: {
    canonical: 'https://tagspecialist.ca/case-studies',
  },
  openGraph: {
    title: 'Case Studies | Server-Side Tracking & Data Engineering Results',
    description: 'Real projects across e-commerce, SaaS and hospitality: server-side tracking, Meta CAPI, and BigQuery data platforms.',
    type: 'website',
    url: 'https://tagspecialist.ca/case-studies',
  },
};

export default function CaseStudiesPage() {
  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'TagSpecialist Case Studies',
        description: 'Real results from server-side tracking, data engineering, and AI analytics implementations.',
        url: 'https://tagspecialist.ca/case-studies',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tagspecialist.ca' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://tagspecialist.ca/case-studies' },
        ],
      },
    ],
  };

  return (
    <div className="pt-20">
      <JsonLd data={caseStudySchema} />
      <CaseStudiesSection />
    </div>
  );
}
