import type { Metadata } from 'next';
import SSTSpecialistLanding from '@/components/landing/SSTSpecialistLanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Server-Side Tagging Specialist | Expert Implementation & Managed Tracking',
  description: 'Hire a server-side tagging specialist with 15+ years experience. Expert GTM server-side implementation, Meta CAPI, Google Ads Enhanced Conversions, and managed tracking infrastructure. Recover 30-40% lost conversion data.',
  keywords: 'server-side tagging specialist, server-side tracking expert, server side tagging implementation, GTM server-side specialist, server-side tracking consultant, hire server-side tagging expert, managed server-side tracking, conversion API specialist',
  alternates: {
    canonical: 'https://tagspecialist.ca/server-side-tagging-specialist',
  },
  openGraph: {
    title: 'Server-Side Tagging Specialist | Expert Implementation & Managed Tracking',
    description: 'Hire a server-side tagging specialist with 15+ years experience. Recover 30-40% lost conversion data with expert GTM server-side implementation.',
    type: 'website',
    url: 'https://tagspecialist.ca/server-side-tagging-specialist',
  },
};

export default function SSTSpecialistPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: 'Server-Side Tagging Specialist Services',
        description: 'Expert server-side tagging implementation, Meta CAPI, Google Ads Enhanced Conversions, and managed tracking infrastructure by certified specialists with 15+ years experience.',
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
        serviceType: 'Server-Side Tagging Implementation',
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Server-Side Tagging Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Server-Side GTM Setup',
                description: 'Full server-side Google Tag Manager deployment on Cloud Run with custom domain routing, first-party cookies, and ad blocker bypass.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Conversion API Integration',
                description: 'Meta Conversion API (CAPI), Google Ads Enhanced Conversions, TikTok Events API, and Pinterest Conversion API server-side setup.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Managed Server-Side Tracking',
                description: 'Ongoing managed server-side tracking infrastructure with monitoring, maintenance, and optimization starting at $150/month.',
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
            name: 'What does a server-side tagging specialist do?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A server-side tagging specialist implements and manages server-side tracking infrastructure. This includes deploying GTM server containers on cloud platforms, setting up Conversion APIs for Meta, Google, and TikTok, configuring custom domains for first-party cookies, and bypassing ad blockers to capture 30-40% more conversion data that client-side tracking misses.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does server-side tagging implementation cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Server-side tagging implementation typically ranges from $8,000 to $18,500 depending on complexity. This includes the server container setup, conversion API integrations, custom domain configuration, and testing. Ongoing managed tracking starts at $150/month for infrastructure hosting and monitoring.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much more conversion data does server-side tagging capture?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Server-side tagging typically captures 30-40% more conversion data compared to client-side tracking. This is because server-side implementation bypasses ad blockers (used by 30-40% of users), avoids browser ITP restrictions, and uses first-party cookies with extended lifespans of 400+ days instead of 7 days.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does server-side tagging implementation take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A typical server-side tagging implementation takes 2-4 weeks. This includes architecture design, server container deployment, conversion API setup, parallel testing alongside existing client-side tracking, and data validation before full cutover.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tagspecialist.ca' },
          { '@type': 'ListItem', position: 2, name: 'Server-Side Tagging Specialist', item: 'https://tagspecialist.ca/server-side-tagging-specialist' },
        ],
      },
      {
        '@type': 'WebPage',
        name: 'Server-Side Tagging Specialist',
        url: 'https://tagspecialist.ca/server-side-tagging-specialist',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '[data-speakable]'],
        },
        description: 'A server-side tagging specialist implements GTM server containers, conversion APIs (Meta CAPI, Google Ads Enhanced Conversions, TikTok Events API), and managed tracking infrastructure. Server-side tagging recovers 30-40% of conversion data lost to ad blockers and browser restrictions. Implementation typically takes 2-4 weeks and costs $8,000-$18,500 with managed tracking from $150/month.',
      },
    ],
  };

  return (
    <div className="pt-20">
      <JsonLd data={serviceSchema} />
      <SSTSpecialistLanding />
    </div>
  );
}
