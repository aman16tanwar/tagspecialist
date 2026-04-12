import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Server-Side Tagging Guide 2026 | Complete Implementation Guide',
  description: 'Comprehensive server-side tagging guide covering GTM server containers, data recovery (30-40%), privacy compliance (GDPR, CCPA), platform comparison, and ROI calculator. Learn how to implement server-side tracking for better data accuracy.',
  keywords: [
    'server-side tagging',
    'server-side GTM',
    'Google Tag Manager server container',
    'first-party data collection',
    'GDPR compliance tracking',
    'CCPA compliant analytics',
    'ad blocker bypass',
    'data recovery tracking',
    'server-side analytics',
    'privacy-first tracking',
    'cookieless tracking',
    'GA4 server-side',
    'Meta CAPI',
    'conversion API'
  ],
  openGraph: {
    title: 'Server-Side Tagging Guide 2026 | Complete Implementation Guide',
    description: 'Learn how server-side tagging recovers 30-40% of lost conversion data, improves site speed by 40-60%, and ensures privacy compliance. Includes ROI calculator and platform comparison.',
    type: 'article',
    url: 'https://tagspecialist.ca/server-side-tagging-guide',
    images: [
      {
        url: '/og-server-side-tagging.png',
        width: 1200,
        height: 630,
        alt: 'Server-Side Tagging Guide - TagSpecialist'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Server-Side Tagging Guide 2026 | TagSpecialist',
    description: 'Recover 30-40% lost data, improve site speed 40-60%, ensure GDPR/CCPA compliance with server-side tagging.'
  },
  alternates: {
    canonical: 'https://tagspecialist.ca/server-side-tagging-guide'
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1
  }
};

// JSON-LD Structured Data for AEO (Answer Engine Optimization)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://tagspecialist.ca/server-side-tagging-guide#article',
      headline: 'Server-Side Tagging Guide 2026: Complete Implementation Guide',
      description: 'Comprehensive guide to server-side tagging covering implementation, benefits, platform comparison, and ROI calculation.',
      author: {
        '@type': 'Organization',
        name: 'TagSpecialist',
        url: 'https://tagspecialist.ca'
      },
      publisher: {
        '@type': 'Organization',
        name: 'TagSpecialist',
        logo: {
          '@type': 'ImageObject',
          url: 'https://tagspecialist.ca/logo.png'
        }
      },
      datePublished: '2026-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      mainEntityOfPage: 'https://tagspecialist.ca/server-side-tagging-guide'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://tagspecialist.ca/server-side-tagging-guide#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is server-side tagging?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Server-side tagging is a data collection method where tracking requests are routed through your own server before being sent to analytics and advertising platforms. This bypasses browser restrictions, ad blockers, and improves data accuracy by 30-40%.'
          }
        },
        {
          '@type': 'Question',
          name: 'How much data can server-side tagging recover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Server-side tagging typically recovers 30-40% of conversion data that is lost due to ad blockers, browser privacy features, and cookie restrictions. Some implementations have seen up to 78% data recovery rates.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is server-side tagging GDPR compliant?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, server-side tagging can be configured to be fully GDPR compliant. It provides better control over data collection, allows for data minimization, and enables proper consent management before data is sent to third-party platforms.'
          }
        },
        {
          '@type': 'Question',
          name: 'What platforms support server-side tagging?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Major platforms include Google Tag Manager Server-Side, Segment, Stape.io, and Tealium. Google Tag Manager is free but requires hosting, while managed solutions like Stape.io offer easier setup with monthly fees starting at $20.'
          }
        },
        {
          '@type': 'Question',
          name: 'How does server-side tagging improve website performance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'By moving tracking scripts from the browser to the server, server-side tagging reduces JavaScript execution on the client side, improving page load times by 40-60% and Core Web Vitals scores by 25-35%.'
          }
        }
      ]
    },
    {
      '@type': 'HowTo',
      '@id': 'https://tagspecialist.ca/server-side-tagging-guide#howto',
      name: 'How to Implement Server-Side Tagging',
      description: 'Step-by-step guide to implementing server-side tagging for your website.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Choose a Platform',
          text: 'Select a server-side tagging platform based on your needs: Google Tag Manager (free, self-hosted), Stape.io (managed, affordable), Segment (enterprise CDP), or Tealium (enterprise compliance).'
        },
        {
          '@type': 'HowToStep',
          name: 'Set Up Server Container',
          text: 'Deploy your server container on Google Cloud Platform, AWS, or use a managed hosting provider. Configure custom domain routing for first-party data collection.'
        },
        {
          '@type': 'HowToStep',
          name: 'Configure Data Streams',
          text: 'Set up data streams from your web container to the server container. Implement the GA4 client, Meta Conversions API, and other required platform integrations.'
        },
        {
          '@type': 'HowToStep',
          name: 'Implement Consent Management',
          text: 'Configure consent mode to respect user privacy preferences. Set up data filtering and PII removal rules before sending data to third-party platforms.'
        },
        {
          '@type': 'HowToStep',
          name: 'Test and Validate',
          text: 'Use preview mode to test your implementation. Validate data accuracy by comparing server-side data with client-side baseline. Monitor for any data discrepancies.'
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://tagspecialist.ca/server-side-tagging-guide#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://tagspecialist.ca'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Server-Side Tagging Guide',
          item: 'https://tagspecialist.ca/server-side-tagging-guide'
        }
      ]
    }
  ]
};

export default function ServerSideTaggingGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
