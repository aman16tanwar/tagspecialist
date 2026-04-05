import type { Metadata } from 'next';
import CaseStudiesSection from '@/components/casestudies/CaseStudiesSection';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Case Studies | 451% ROAS Increase & Real Client Results',
  description: 'See how TagSpecialist helped brands achieve 451% ROAS increase, +38% attribution accuracy, and $200K+ monthly revenue growth through server-side tracking and data engineering.',
  keywords: 'google tag manager case studies, server-side tracking results, GTM implementation case study, conversion tracking results, attribution accuracy improvement',
  openGraph: {
    title: 'Case Studies | 451% ROAS Increase & Real Client Results',
    description: 'See how TagSpecialist helped brands achieve 451% ROAS increase and $200K+ monthly revenue growth.',
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
