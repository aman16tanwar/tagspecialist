import type { Metadata } from 'next';
import GTMSpecialistLanding from '@/components/landing/GTMSpecialistLanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Google Tag Manager Specialist for Hire | Senior Expert, 10 Years',
  description: 'Hire a GTM specialist to fix broken tracking and recover 30–40% lost conversions. Server-side GTM, GA4, Meta CAPI. 10 years of enterprise experience. Free audit.',
  keywords: 'google tag manager specialist, tag manager expert, google tag manager expert, expert google tag manager, GTM specialist, GTM expert, GTM consultant, google tag manager consultant, hire GTM expert, tag management expert, tagging specialist, google tag manager implementation, google tag manager cost, hire google tag manager expert',
  alternates: {
    canonical: 'https://tagspecialist.ca/google-tag-manager-specialist',
  },
  openGraph: {
    title: 'Google Tag Manager Specialist for Hire | Senior Expert, 10 Years',
    description: 'Hire a GTM specialist to fix broken tracking and recover 30–40% lost conversions. Server-side GTM, GA4, Meta CAPI. 10 years of enterprise experience.',
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
        description: 'Expert Google Tag Manager implementation, server-side tagging, GA4 setup, and conversion tracking by a certified GTM specialist with 10 years of experience.',
        provider: {
          '@type': 'Organization',
          name: 'Tag Specialist',
          url: 'https://tagspecialist.ca',
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
              text: 'GTM specialist costs vary by scope. A basic GTM audit and fix typically ranges from $1,500-$5,000. Full server-side GTM implementation with conversion APIs typically runs $4,000-$15,000. Ongoing managed tracking services start at $150/month. At Tag Specialist, we offer transparent pricing with no hidden fees.',
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
              text: 'Results depend on how much signal your current setup is losing today. Published platform benchmarks give a realistic range: Meta reports advertisers running the Conversions API alongside the Pixel see around 13% lower cost per action and 8% more attributed conversions, and Google reports Enhanced Conversions recover 5-17% additional conversions. A free audit shows which of these apply to your account.',
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
      {
        '@type': 'WebPage',
        name: 'Google Tag Manager Specialist',
        url: 'https://tagspecialist.ca/google-tag-manager-specialist',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '[data-speakable]'],
        },
        description: 'A Google Tag Manager specialist implements and manages tracking tags, conversion pixels, and analytics scripts. Services include GTM audit and fix, server-side GTM implementation with Meta CAPI and Google Ads Enhanced Conversions, GA4 migration, e-commerce tracking, and Consent Mode v2. Recovery depends on how much signal the current setup is losing; Meta reports around 13% lower cost per action for advertisers running the Conversions API alongside the Pixel, and Google reports Enhanced Conversions recover 5-17% additional conversions.',
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
