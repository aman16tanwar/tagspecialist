import type { Metadata } from 'next';
import AgencyPartnerLanding from '@/components/landing/AgencyPartnerLanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Agency Partner Program | Tag Specialist',
  description: 'Add $500-2,000/month to your agency revenue. White-label server-side tracking for agencies. We handle the tech, you keep the margin.',
  keywords: 'agency partner program, white label tracking, reseller program, server-side tracking partner, marketing agency partnership',
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
    '@type': 'Organization',
    name: 'Tag Specialist',
    url: 'https://tagspecialist.ca',
    description: 'Analytics and tracking specialists offering agency partnership programs.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Partnership Inquiries',
      url: 'https://tagspecialist.ca/agency-partners',
    },
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <AgencyPartnerLanding />
    </>
  );
}
