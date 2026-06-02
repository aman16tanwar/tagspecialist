import type { Metadata } from 'next';
import AgencyPartnerLanding from '@/components/landing/AgencyPartnerLanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Agency Partner Program | Tag Specialist',
  description: 'Add $500-2,000/month to your agency revenue. White-label server-side tracking for agencies. We handle the tech, you keep the margin.',
  keywords: 'agency partner program, white label tracking, reseller program, server-side tracking partner, marketing agency partnership',
  alternates: {
    canonical: 'https://tagspecialist.ca/agency-partners',
  },
  openGraph: {
    title: 'Agency Partner Program | Tag Specialist',
    description: 'Add $500-2,000/month to your agency revenue with white-label server-side tracking.',
    type: 'website',
    url: 'https://tagspecialist.ca/agency-partners',
  },
};

export default function AgencyPartnersPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Tag Specialist',
        url: 'https://tagspecialist.ca',
        description: 'Analytics and tracking specialists offering agency partnership programs.',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Partnership Inquiries',
          url: 'https://tagspecialist.ca/agency-partners',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much can I earn as an agency partner?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Agency partners earn $15-105 per client per month depending on your tier. Affiliates (1-4 clients) get 15% off, Agencies (5-19 clients) get 25% off, and Enterprise (20+ clients) get 35% off. This translates to $500-2,000+/month in recurring revenue.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the agency partner program white-label?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — our tracking infrastructure is fully white-label ready. Your clients see your brand, not ours. We handle all the technical implementation and support behind the scenes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need technical expertise to join?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. We handle all the technical work — server setup, tag implementation, monitoring, and troubleshooting. You just need to identify clients who need better tracking and make the introduction.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tagspecialist.ca' },
          { '@type': 'ListItem', position: 2, name: 'Agency Partners', item: 'https://tagspecialist.ca/agency-partners' },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <AgencyPartnerLanding />
    </>
  );
}
