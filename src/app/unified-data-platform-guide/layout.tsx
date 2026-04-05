import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unified Data Platform Guide 2026 | Marketing Data Warehouse & Multi-Touch Attribution',
  description: 'Complete guide to building a unified marketing data platform with BigQuery. Connect GA4, CRM, Google Ads, Meta, and DV360 data for multi-touch attribution, cross-sell analytics, and ML-powered audience activation.',
  keywords: [
    'unified data platform',
    'marketing data warehouse',
    'multi-touch attribution',
    'BigQuery marketing data',
    'GA4 BigQuery pipeline',
    'CRM data integration',
    'cross-channel attribution',
    'marketing data lake',
    'medallion architecture BigQuery',
    'first-party data strategy',
    'customer data platform',
    'Looker Studio dashboards',
    'BigQuery ML marketing',
    'data engineering marketing',
  ],
  openGraph: {
    title: 'Unified Data Platform Guide 2026 | Marketing Data Warehouse & Attribution',
    description: 'Learn how to unify GA4, CRM, and ad platform data in BigQuery for true multi-touch attribution and ML-powered audience activation.',
    type: 'article',
    url: 'https://tagspecialist.ca/unified-data-platform-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unified Data Platform Guide 2026 | TagSpecialist',
    description: 'Connect GA4, CRM, and ad platforms in BigQuery for true multi-touch attribution.',
  },
  alternates: {
    canonical: 'https://tagspecialist.ca/unified-data-platform-guide',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://tagspecialist.ca/unified-data-platform-guide#article',
      headline: 'Unified Data Platform Guide: Marketing Data Warehouse & Multi-Touch Attribution',
      description: 'Complete guide to building a unified marketing data platform with BigQuery for multi-touch attribution and ML-powered insights.',
      author: {
        '@type': 'Organization',
        name: 'TagSpecialist',
        url: 'https://tagspecialist.ca',
      },
      publisher: {
        '@type': 'Organization',
        name: 'TagSpecialist',
        logo: {
          '@type': 'ImageObject',
          url: 'https://tagspecialist.ca/logo.png',
        },
      },
      datePublished: '2026-04-05',
      dateModified: new Date().toISOString().split('T')[0],
      mainEntityOfPage: 'https://tagspecialist.ca/unified-data-platform-guide',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://tagspecialist.ca/unified-data-platform-guide#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a unified data platform for marketing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A unified data platform for marketing connects all your data sources — website analytics (GA4), CRM/transaction data, and ad platform data (Google Ads, Meta, DV360) — into a single data warehouse like BigQuery. This enables true multi-touch attribution, cross-sell analytics, and customer journey analysis that is impossible when data lives in silos.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why use BigQuery as a marketing data warehouse?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BigQuery is ideal because it integrates natively with GA4 (free export), scales to petabytes without infrastructure management, supports ML via BigQuery ML for propensity modeling and audience activation, and costs as little as $5/TB for queries. It is also part of Google Cloud, enabling seamless integration with Google Ads and Looker Studio.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you connect CRM data with GA4 in BigQuery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CRM data is connected to GA4 in BigQuery using privacy-safe user ID matching. A SHA-256 hashed User ID is implemented on both sides — the website (via data layer) and the CRM export. This allows joining GA4 behavioural data with CRM purchase/transaction data at the user level without exposing personally identifiable information.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a Medallion architecture for marketing data?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Medallion architecture organizes your data warehouse into three layers: Bronze (raw data landing zone — GA4 export, CRM dumps, API pulls), Silver (cleaned and standardized — deduplication, data type casting, schema alignment), and Gold (business logic marts — attribution models, customer LTV, cross-sell metrics). This approach ensures data quality and makes the warehouse maintainable as sources grow.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does it cost to build a unified marketing data platform?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A full unified data platform build typically ranges from $28,000-$50,000 depending on the number of data sources, complexity of attribution modeling, and dashboard requirements. Ongoing BigQuery costs are typically $50-200/month for most businesses. The ROI is significant — businesses typically see 20-30% revenue lift from first-party data integration versus relying on platform-reported metrics alone.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': 'https://tagspecialist.ca/unified-data-platform-guide#howto',
      name: 'How to Build a Unified Marketing Data Platform',
      description: 'Step-by-step guide to building a unified data platform for marketing analytics.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Set Up BigQuery Foundation',
          text: 'Create your GCP project with prod and staging environments. Enable GA4 BigQuery export. Design your Medallion architecture with Bronze, Silver, and Gold layers.',
        },
        {
          '@type': 'HowToStep',
          name: 'Build Data Pipelines',
          text: 'Create automated pipelines for each data source: GA4 export (automatic), CRM data (API/SFTP connector), ad platforms (Google Ads API, Meta Marketing API, DV360 API). Use Cloud Run + Cloud Scheduler for orchestration.',
        },
        {
          '@type': 'HowToStep',
          name: 'Implement Identity Resolution',
          text: 'Deploy SHA-256 hashed User ID matching across website and CRM. This enables privacy-safe joining of behavioural and transaction data without exposing PII.',
        },
        {
          '@type': 'HowToStep',
          name: 'Build Attribution Models',
          text: 'Create multi-touch attribution models in the Gold layer joining ad touchpoints with actual conversions. Move beyond last-click to data-driven or position-based models.',
        },
        {
          '@type': 'HowToStep',
          name: 'Deploy Dashboards & Activate',
          text: 'Build Looker Studio dashboards for campaign performance, geo reporting, and cross-sell analysis. Activate audiences via BigQuery ML propensity models pushed to Google Ads for smart bidding.',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://tagspecialist.ca/unified-data-platform-guide#breadcrumb',
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
          name: 'Unified Data Platform Guide',
          item: 'https://tagspecialist.ca/unified-data-platform-guide',
        },
      ],
    },
  ],
};

export default function UnifiedDataPlatformGuideLayout({
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
