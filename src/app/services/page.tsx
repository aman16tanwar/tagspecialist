import type { Metadata } from 'next';
import ServicesSection from '@/components/services/ServicesSection';
import CapabilitiesSection from '@/components/services/CapabilitiesSection';
import PricingSection from '@/components/pricing/PricingSection';
import RetainerServices from '@/components/services/RetainerServices';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Server-Side Tracking & Data Engineering Services',
  description: 'Expert server-side tagging, GA4 implementation, BigQuery data warehousing, and AI analytics services. From $150/month managed tracking to full enterprise data infrastructure.',
  keywords: 'server-side tracking services, GA4 implementation, BigQuery data warehouse, GTM specialist services, conversion tracking, Meta CAPI, data engineering services',
  alternates: {
    canonical: 'https://tagspecialist.ca/services',
  },
  openGraph: {
    title: 'Server-Side Tracking & Data Engineering Services | Tag Specialist',
    description: 'Expert server-side tagging, GA4 implementation, BigQuery data warehousing, and AI analytics services.',
    type: 'website',
    url: 'https://tagspecialist.ca/services',
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
          url: 'https://tagspecialist.ca',
        },
        serviceType: 'Marketing Analytics & Data Engineering',
        offers: [
          {
            '@type': 'Offer',
            name: 'Server-Side & Attribution Engine',
            price: '18500',
            priceCurrency: 'USD',
            description: 'Full server-side GTM, Meta CAPI, Google Ads Enhanced Conversions, ad blocker bypass, and cross-channel attribution.',
          },
          {
            '@type': 'Offer',
            name: 'Enterprise Data & AI Warehouse',
            price: '28000',
            priceCurrency: 'USD',
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
              text: 'We offer full server-side GTM implementation including Google Ads Enhanced Conversions, Meta Conversion API (CAPI), ad blocker bypass, first-party identity stitching, cross-channel attribution, and Consent Mode v2. Our Server-Side & Attribution Engine package starts at $18,500 with a 3-4 week timeline.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much do your data engineering services cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our Enterprise Data & AI Warehouse starts at $28,000 (one-time, 5-6 week timeline) and includes GA4 to BigQuery pipelines, CRM & Shopify ETL, custom attribution models, and AI analytics. Managed tracking plans start at $150/month for ongoing server-side tracking.',
            },
          },
          {
            '@type': 'Question',
            name: 'What results can I expect from server-side tracking?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our clients typically see 30-40% more conversion data captured, up to 451% ROAS improvement, and $200K+ in additional monthly revenue from improved attribution. Server-side tracking captures conversions lost to ad blockers and browser restrictions.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tagspecialist.ca' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://tagspecialist.ca/services' },
        ],
      },
    ],
  };

  return (
    <div className="pt-20">
      <JsonLd data={servicesSchema} />
      <ServicesSection />
      <CapabilitiesSection />
      <PricingSection />
      <RetainerServices />
      <TestimonialsSection />
    </div>
  );
}
