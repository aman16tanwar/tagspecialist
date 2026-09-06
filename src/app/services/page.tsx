import type { Metadata } from 'next';
import ServicesSection from '@/components/services/ServicesSection';
import TrustedBy from '@/components/home/TrustedBy';
import CapabilitiesSection from '@/components/services/CapabilitiesSection';
import PricingSection from '@/components/pricing/PricingSection';
import RetainerServices from '@/components/services/RetainerServices';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Server-Side Tracking & Data Engineering Services',
  description: 'Expert server-side tagging, GA4 implementation, BigQuery data warehousing, and AI analytics services. From $150/month managed tracking to full enterprise data infrastructure.',
  keywords: 'server-side tracking services, GA4 implementation, BigQuery data warehouse, GTM specialist services, conversion tracking, Meta CAPI, data engineering services',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Server-Side Tracking & Data Engineering Services | Tag Specialist',
    description: 'Expert server-side tagging, GA4 implementation, BigQuery data warehousing, and AI analytics services.',
    type: 'website',
    url: '/services',
  },
};

export default function ServicesPage() {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Server-Side Tracking & Data Engineering Services',
        description: 'Expert server-side tagging, GA4 implementation, BigQuery data warehousing, and AI analytics.',
        provider: {
          '@type': 'Organization',
          name: 'Tag Specialist',
          url: SITE_URL,
        },
        serviceType: 'Marketing Analytics & Data Engineering',
        offers: [
          {
            '@type': 'Offer',
            name: 'Server-Side & Attribution Engine',
            description: 'Full server-side GTM, Meta CAPI, Google Ads Enhanced Conversions, ad blocker bypass, and cross-channel attribution.',
          },
          {
            '@type': 'Offer',
            name: 'Enterprise Data & AI Warehouse',
            description: 'GA4 to BigQuery pipeline, CRM & Shopify ETL, custom SQL attribution, GenAI analytics agent, and executive dashboards.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What server-side tracking services do you offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We offer full server-side GTM implementation including Google Ads Enhanced Conversions, Meta Conversion API (CAPI), ad blocker bypass, first-party identity stitching, cross-channel attribution, and Consent Mode v2. Implementation is fixed-quoted after a $1,200 audit and typically runs $4,000-$15,000 with a 2-4 week timeline.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much do your data engineering services cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our Enterprise Data & AI Warehouse is custom-quoted after an audit and includes GA4 to BigQuery pipelines, CRM & Shopify ETL, custom attribution models, and AI analytics. Managed tracking plans start at $150/month for ongoing server-side tracking.',
            },
          },
          {
            '@type': 'Question',
            name: 'What results can I expect from server-side tracking?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Results depend on how much signal your current setup is losing today. Published platform benchmarks give a realistic range: Meta reports advertisers running the Conversions API alongside the Pixel see around 13% lower cost per action and 8% more attributed conversions, and Google reports Enhanced Conversions recover 5-17% additional conversions. A free audit shows which of these apply to your account.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        ],
      },
    ],
  };

  return (
    <div className="pt-20">
      <JsonLd data={servicesSchema} />
      <ServicesSection />
      <TrustedBy />
      <CapabilitiesSection />
      <PricingSection />
      <RetainerServices />
      <TestimonialsSection />
    </div>
  );
}
