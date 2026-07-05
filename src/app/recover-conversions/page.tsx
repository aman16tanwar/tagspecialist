import type { Metadata } from 'next';
import MetaCAPILanding from '@/components/landing/MetaCAPILanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Meta CAPI + Google Ads Enhanced Conversions Setup | $1,500 + $150/mo',
  description: 'Done-for-you Meta Conversion API and Google Ads Enhanced Conversions setup, bundled with managed hosting. Per Meta, CAPI users see 13% lower CPA and 8% more attributed conversions. $1,500 setup + $150/mo managed, delivered in 1 week.',
  keywords: 'meta conversion api setup, google ads enhanced conversions setup, conversion api implementation, server-side tracking setup, recover lost conversions, capi setup service, facebook conversion api setup, server side tagging service, fix ad tracking, conversion api expert',
  alternates: {
    canonical: 'https://tagspecialist.ca/recover-conversions',
  },
  openGraph: {
    title: 'Meta CAPI + Google Ads Enhanced Conversions Setup | $1,500 + $150/mo',
    description: 'Done-for-you Meta CAPI + Google Ads Enhanced Conversions setup, bundled with managed hosting. $1,500 setup + $150/mo. Delivered in 1 week.',
    type: 'website',
    url: 'https://tagspecialist.ca/recover-conversions',
  },
};

export default function RecoverConversionsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Conversion API Setup for Meta & Google Ads',
        description: 'Done-for-you Meta Conversion API (CAPI) and Google Ads Enhanced Conversions implementation. We host the server-side infrastructure on managed Cloud Run. 1-week delivery, $1,500 flat.',
        provider: {
          '@type': 'Organization',
          name: 'Tag Specialist',
          url: 'https://tagspecialist.ca',
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
              text: "The Meta Conversion API (also called CAPI) is a direct server-to-server connection between your website and Meta. It sends conversion data straight from your server to Facebook and Instagram ads, bypassing ad blockers and browser privacy restrictions like iOS 17 ATT. Per Meta's own published averages, advertisers running CAPI alongside the Pixel see a 13% lower cost per acquisition and 8% more attributed conversions on average. Recovery in tech-heavy or ad-blocker-heavy verticals can be substantially higher.",
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
            name: 'Is the $150/month managed hosting required, or can I just pay the $1,500 setup?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Managed hosting is required — they're sold as one bundled package, not separate optional tiers. The $1,500 covers building your Meta CAPI and Google Ads Enhanced Conversions setup; the $150/mo covers what keeps it running: cloud infrastructure on Google Cloud Run, 24/7 uptime monitoring, automatic scaling for traffic spikes, alert routing, monthly performance reviews, and unlimited tracking-issue support. Without managed hosting, the infrastructure has nowhere to live and no one watching it.",
            },
          },
          {
            '@type': 'Question',
            name: 'Why $1,500 — what is the catch?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "No catch — $1,500 covers about 20 hours of setup work, which is realistic because we've done 70+ Conversion API implementations and have a tight process. The $1,500 is intentionally an accessible entry point. Our business model is the bundled monthly managed hosting and clients who later expand into bigger projects (data warehouses, attribution modeling). The setup gets you working Conversion APIs and lets you experience the work before any larger commitment.",
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
          { '@type': 'ListItem', position: 2, name: 'Recover Lost Ad Conversions', item: 'https://tagspecialist.ca/recover-conversions' },
        ],
      },
      {
        '@type': 'WebPage',
        name: 'Recover Lost Ad Conversions — Meta CAPI + Google Ads Setup',
        url: 'https://tagspecialist.ca/recover-conversions',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '[data-speakable]'],
        },
        description: "Done-for-you Meta Conversion API (CAPI) and Google Ads Enhanced Conversions setup, bundled with managed hosting. We deploy server-side tracking on our managed Cloud Run infrastructure — no Google Cloud account needed. 1-week delivery, $1,500 setup + $150/month managed hosting (1 site) or $220/month (2 sites). Per Meta's published averages, advertisers using CAPI alongside the Pixel see a 13% lower CPA and 8% more attributed conversions; Google reports up to 17% conversion lift from Enhanced Conversions on Search.",
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
