import type { Metadata } from 'next';
import MetaCAPILanding from '@/components/landing/MetaCAPILanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Meta Conversion API Setup Service | Done-for-You in 1 Week — $1,500',
  description: 'Done-for-you Meta Conversion API and Google Ads Enhanced Conversions setup. We host the infrastructure — no GCP account needed. $1,500 flat, 1-week delivery. 5.0 rated.',
  keywords: 'meta conversion api setup, meta capi setup, facebook conversion api setup, google ads enhanced conversions setup, conversion api implementation, conversion api service, capi expert, facebook capi setup service, meta capi expert, hire conversion api specialist',
  alternates: {
    canonical: 'https://tagspecialist.ca/meta-conversion-api-setup',
  },
  openGraph: {
    title: 'Meta Conversion API Setup Service | Done-for-You in 1 Week — $1,500',
    description: 'Done-for-you Meta Conversion API and Google Ads Enhanced Conversions setup. We host the infrastructure — no GCP account needed. $1,500 flat, 1-week delivery.',
    type: 'website',
    url: 'https://tagspecialist.ca/meta-conversion-api-setup',
  },
};

export default function MetaCAPISetupPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Meta Conversion API Setup Service',
        description: 'Done-for-you Meta Conversion API (CAPI) and Google Ads Enhanced Conversions implementation. We host the server-side infrastructure on managed Cloud Run. 1-week delivery, $1,500 flat.',
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
        offers: {
          '@type': 'Offer',
          name: 'Meta + Google Conversion API Setup',
          price: '1500',
          priceCurrency: 'USD',
          description: 'One-time flat fee. Includes Meta CAPI, Google Ads Enhanced Conversions, GA4 server-side, and 1 week of post-launch monitoring.',
        },
        serviceType: 'Conversion API Implementation',
        areaServed: 'Worldwide',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the Meta Conversion API?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Meta Conversion API (also called CAPI) is a direct server-to-server connection between your website and Meta. It sends conversion data straight from your server to Facebook and Instagram ads, bypassing ad blockers and browser privacy restrictions like iOS 17. Meta uses this data to optimize your ad delivery and report accurate conversions — typically recovering 30-40% of conversions that pixel-only tracking misses.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will this break my current Meta Pixel or Google Ads tracking?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. We set up the Conversion API alongside your existing Meta Pixel and Google Ads tag — they run in parallel. We use event deduplication to ensure conversions are not double-counted. Your current campaigns keep running normally throughout the setup, and we test everything before going live.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need a Google Cloud, AWS, or any technical account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. We host all the infrastructure on our managed Cloud Run setup. You do not need a Google Cloud account, a server, or any technical knowledge. You give us access to your Meta Business Manager and Google Ads account — we handle everything else.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does setup take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '1 week from kickoff to live. Day 1-2: we learn your store and configure events. Day 3-5: we deploy and test the Conversion API in a sandbox. Day 6-7: we go live and validate data is flowing correctly. You will see results in your Meta Ads Manager and Google Ads accounts within 14-21 days.',
            },
          },
          {
            '@type': 'Question',
            name: 'What platforms do you support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ad platforms: Meta Conversion API (Facebook + Instagram), Google Ads Enhanced Conversions, GA4 server-side, TikTok Events API, Pinterest Conversion API, Snapchat CAPI, and LinkedIn Conversions API. E-commerce platforms: Shopify, Shopify Plus, WooCommerce, Magento, BigCommerce, and custom-built sites.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the $150/month managed hosting for?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The $150/month covers: cloud infrastructure hosting on Google Cloud Run, 24/7 uptime monitoring, automatic scaling for traffic spikes, alert routing if anything breaks, monthly performance review, and unlimited support for tracking issues. Equivalent to running your own infrastructure plus monitoring tools — without the operational headache.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why $1,500 — what is the catch?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No catch. We can deliver in approximately 20 hours because we have done 70+ implementations and have a battle-tested process. Our revenue model is the recurring managed hosting and clients who later upgrade to more complex projects (data warehouses, attribution modeling). The $1,500 is our entry service — it gets you working Conversion APIs and lets you experience our work.',
            },
          },
          {
            '@type': 'Question',
            name: 'What if I want to cancel or move to my own setup later?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Your plan includes a 6-month service term. After that, cancel anytime or migrate to your own Google Cloud account ($500 migration service). If something goes wrong in the first 30 days of going live, we offer a full money-back guarantee. For early exits before the 6-month term, you can either pay out remaining months or use the $500 migration service — whichever is lower.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tagspecialist.ca' },
          { '@type': 'ListItem', position: 2, name: 'Meta Conversion API Setup', item: 'https://tagspecialist.ca/meta-conversion-api-setup' },
        ],
      },
      {
        '@type': 'WebPage',
        name: 'Meta Conversion API Setup Service',
        url: 'https://tagspecialist.ca/meta-conversion-api-setup',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '[data-speakable]'],
        },
        description: 'Done-for-you Meta Conversion API (CAPI) and Google Ads Enhanced Conversions setup. We deploy server-side tracking on our managed infrastructure — you do not need a Google Cloud account or any technical setup. 1-week delivery, $1,500 flat one-time fee, then $150/month managed hosting (1 site) or $220/month (2 sites). Recovers 30-40% of conversions lost to ad blockers and browser privacy restrictions.',
      },
    ],
  };

  return (
    <div className="pt-20">
      <JsonLd data={serviceSchema} />
      <MetaCAPILanding />
    </div>
  );
}
