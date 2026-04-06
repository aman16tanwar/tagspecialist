import type { Metadata } from 'next';
import GTMSpecialistLanding from '@/components/landing/GTMSpecialistLanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Google Tag Manager Specialist | Certified GTM Expert',
  description: 'Hire a Google Tag Manager specialist with 15+ years experience. Expert GTM implementation, server-side tagging, GA4 migration, Meta CAPI, and conversion tracking. Results-driven.',
  keywords: 'google tag manager specialist, google tag manager expert, GTM specialist, GTM expert, GTM consultant, google tag manager consultant, hire GTM expert, tag management specialist, google tag manager implementation',
  alternates: {
    canonical: 'https://tagspecialist.ca/google-tag-manager-specialist',
  },
  openGraph: {
    title: 'Google Tag Manager Specialist | Certified GTM Expert',
    description: 'Hire a Google Tag Manager specialist with 15+ years experience. Expert GTM implementation, server-side tagging, and conversion tracking.',
    type: 'website',
    url: 'https://tagspecialist.ca/google-tag-manager-specialist',
  },
};

export default function GTMSpecialistPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Google Tag Manager Specialist Services',
        description: 'Expert Google Tag Manager implementation, server-side tagging, GA4 setup, and conversion tracking by certified GTM specialists with 15+ years experience.',
        provider: {
          '@type': 'Organization',
          name: 'Tag Specialist',
          url: 'https://tagspecialist.ca',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '70',
            bestRating: '5',
          },
        },
        serviceType: 'Google Tag Manager Implementation',
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'GTM Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'GTM Audit & Fix',
                description: 'Comprehensive audit of your existing GTM setup with fixes for broken tags, triggers, and data layer issues.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Server-Side GTM Implementation',
                description: 'Full server-side Google Tag Manager setup with Meta CAPI, Google Ads Enhanced Conversions, and ad blocker bypass.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'GA4 + GTM Migration',
                description: 'Complete migration from Universal Analytics to GA4 with proper GTM configuration and data layer implementation.',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What does a Google Tag Manager specialist do?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Google Tag Manager specialist implements and manages tracking tags, conversion pixels, and analytics scripts across your website without modifying code directly. They set up GA4, server-side tagging, Meta CAPI, Google Ads conversion tracking, and ensure accurate data collection across all marketing platforms.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does it cost to hire a Google Tag Manager expert?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GTM specialist costs vary by scope. A basic GTM audit and fix typically ranges from $1,500-$5,000. Full server-side GTM implementation with conversion APIs starts at $12,000-$18,500. Ongoing managed tracking services start at $150/month. At Tag Specialist, we offer transparent pricing with no hidden fees.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need a GTM specialist or can I set it up myself?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'While basic GTM setup is possible DIY, a specialist is essential for: server-side tagging, conversion API integrations (Meta CAPI, TikTok Events API), complex e-commerce tracking, cross-domain tracking, and privacy compliance (Consent Mode v2). Incorrect GTM setup leads to data loss that directly impacts ad spend ROI.',
            },
          },
          {
            '@type': 'Question',
            name: 'What results can I expect from professional GTM implementation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our clients typically see: 30-40% more conversion data captured, +46% increase in Google Ads reported conversions, up to 451% ROAS improvement through better attribution, and 15-20% lower cost per acquisition from improved signal quality.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://tagspecialist.ca',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Google Tag Manager Specialist',
            item: 'https://tagspecialist.ca/google-tag-manager-specialist',
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <GTMSpecialistLanding />
    </>
  );
}
