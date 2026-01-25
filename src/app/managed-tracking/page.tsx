import type { Metadata } from 'next';
import ManagedTrackingLanding from '@/components/landing/ManagedTrackingLanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Managed Server-Side Tracking | Tag Specialist',
  description: 'Stop losing 40-70% of your conversion data. Fully managed server-side tracking for Google Ads, Meta CAPI, and more. From $99/month.',
  keywords: 'server-side tracking, Google Tag Manager server, Meta CAPI, conversion API, ad blocker bypass, managed tracking',
  openGraph: {
    title: 'Managed Server-Side Tracking | Tag Specialist',
    description: 'Stop losing 40-70% of your conversion data. Fully managed server-side tracking from $99/month.',
    type: 'website',
    url: 'https://tagspecialist.ca/managed-tracking',
  },
};

export default function ManagedTrackingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
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
        price: '99',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '99',
          priceCurrency: 'USD',
          billingDuration: 'P1M',
        },
      },
      {
        '@type': 'Offer',
        name: 'Growth',
        price: '199',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '199',
          priceCurrency: 'USD',
          billingDuration: 'P1M',
        },
      },
      {
        '@type': 'Offer',
        name: 'Scale',
        price: '299',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '299',
          priceCurrency: 'USD',
          billingDuration: 'P1M',
        },
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
