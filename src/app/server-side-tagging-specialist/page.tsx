import type { Metadata } from 'next';
import SSTSpecialistLanding from '@/components/landing/SSTSpecialistLanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Server-Side Tracking Specialist for Hire | Senior Expert, 10 Years',
  description: 'Hire a server-side tracking & tagging specialist. GTM server-side, Meta CAPI, Google Ads Enhanced Conversions on Cloud Run. 10 years of enterprise experience. Free audit.',
  keywords: 'server-side tagging specialist, server-side tracking specialist, server-side tracking expert, server side tagging implementation, GTM server-side specialist, server-side tracking consultant, hire server-side tagging expert, managed server-side tracking, conversion API specialist, tagging specialist, server-side tagging agency',
  alternates: {
    canonical: 'https://tagspecialist.ca/server-side-tagging-specialist',
  },
  openGraph: {
    title: 'Server-Side Tracking Specialist for Hire | Senior Expert, 10 Years',
    description: 'Hire a server-side tracking & tagging specialist. GTM server-side, Meta CAPI, Google Ads Enhanced Conversions on Cloud Run. 10 years of enterprise experience.',
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
        },
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Verified Client' },
            datePublished: '2025-01-11',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Incredibly skilled with Facebook attribution. Thorough in troubleshooting and solving issues even on checkout software he wasn’t already familiar with.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Verified Client' },
            datePublished: '2024-01-22',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Excellent troubleshooting and testing for Meta CAPI setup. Professional and knowledgeable with Google Analytics, Tag Manager, and Facebook Ads Manager.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Verified Client' },
            datePublished: '2025-12-28',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Built ETL pipelines for my company. Works perfectly. Took the initiative and suggested ways to improve the setup. Super reactive.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Verified Client' },
            datePublished: '2025-09-26',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Skilled and responsive data engineer with deep GCP experience. Highly recommend.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Verified Client' },
            datePublished: '2025-02-26',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Hands down the best Google and Meta tracking specialist I’ve ever worked with. Deep expertise and attention to detail.',
          },
        ],
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
            name: 'Is a server-side tracking specialist the same as a server-side tagging specialist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. "Server-side tracking specialist" and "server-side tagging specialist" describe the same role. Both implement server-side GTM, conversion APIs (Meta CAPI, Google Ads Enhanced Conversions, TikTok Events API), first-party cookie configuration, and ad blocker bypass. Marketing teams typically say "tracking specialist" while engineering teams say "tagging specialist," but the deliverables are identical.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does server-side tagging implementation cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Server-side tagging implementation typically ranges from $4,000 to $15,000 depending on complexity. This includes the server container setup, conversion API integrations, custom domain configuration, and testing. Ongoing managed tracking starts at $150/month for infrastructure hosting and monitoring.',
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
        description: 'A server-side tagging specialist implements GTM server containers, conversion APIs (Meta CAPI, Google Ads Enhanced Conversions, TikTok Events API), and managed tracking infrastructure. Server-side tagging recovers 30-40% of conversion data lost to ad blockers and browser restrictions. Implementation typically takes 2-4 weeks and costs $4,000-$15,000 with managed tracking from $150/month.',
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
