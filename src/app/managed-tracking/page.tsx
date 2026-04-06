import type { Metadata } from 'next';
import ManagedTrackingLanding from '@/components/landing/ManagedTrackingLanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Managed Server-Side Tracking | Tag Specialist',
  description: 'Stop losing 40-70% of your conversion data. Fully managed server-side tracking for Google Ads, Meta CAPI, and more. From $150/month.',
  keywords: 'server-side tracking, Google Tag Manager server, Meta CAPI, conversion API, ad blocker bypass, managed tracking',
  openGraph: {
    title: 'Managed Server-Side Tracking | Tag Specialist',
    description: 'Stop losing 40-70% of your conversion data. Fully managed server-side tracking from $150/month.',
    type: 'website',
    url: 'https://tagspecialist.ca/managed-tracking',
  },
};

export default function ManagedTrackingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Managed Server-Side Tracking',
        description: 'Fully managed server-side tracking infrastructure for Google Ads Enhanced Conversions and Meta Conversion API.',
        provider: {
          '@type': 'Organization',
          name: 'Tag Specialist',
          url: 'https://tagspecialist.ca',
        },
        serviceType: 'Marketing Analytics',
        offers: [
          {
            '@type': 'Offer',
            name: 'Starter',
            price: '150',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '150',
              priceCurrency: 'USD',
              billingDuration: 'P1M',
            },
          },
          {
            '@type': 'Offer',
            name: 'Growth',
            price: '250',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '250',
              priceCurrency: 'USD',
              billingDuration: 'P1M',
            },
          },
          {
            '@type': 'Offer',
            name: 'Scale',
            price: '350',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '350',
              priceCurrency: 'USD',
              billingDuration: 'P1M',
            },
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does managed server-side tracking cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Managed server-side tracking starts at $150/month (Starter: 1 domain, 100K pageviews). Growth plan is $250/month (3 domains, 500K pageviews) and Scale is $350/month (5 domains, 1M pageviews). One-time setup fees range from $500-$1,000.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is included in managed server-side tracking?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'All plans include server-side GTM container, Google Ads Enhanced Conversions, Meta Conversion API (CAPI), custom domain for first-party cookies, ad blocker bypass, monitoring, and support. Higher tiers add TikTok Events API, Pinterest API, cross-domain tracking, and dedicated resources.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much more conversion data will I capture?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Clients typically see 30-40% more conversions captured. Google case studies report +46% increase in Google Ads conversions and Meta studies show +90% increase in reported conversions, with 13% lower cost per result.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tagspecialist.ca' },
          { '@type': 'ListItem', position: 2, name: 'Managed Tracking', item: 'https://tagspecialist.ca/managed-tracking' },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <ManagedTrackingLanding />
    </>
  );
}
