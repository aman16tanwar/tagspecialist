import type { Metadata } from 'next';
import BigQuerySpecialistLanding from '@/components/landing/BigQuerySpecialistLanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'BigQuery Specialist for Hire | Marketing Data Warehouse Engineer',
  description:
    'Hire a BigQuery specialist to build production marketing data warehouses. Server-side GA4 → BigQuery, dbt models, identity resolution, BigQuery ML, reverse ETL. Audits from $1,500.',
  keywords:
    'BigQuery specialist, BigQuery consultant, BigQuery data engineer, hire BigQuery engineer, marketing data warehouse, BigQuery for marketing, GA4 BigQuery, server-side GA4 BigQuery, dbt BigQuery, BigQuery ML, BigQuery cost optimization, marketing data engineer',
  alternates: {
    canonical: 'https://tagspecialist.ca/bigquery-specialist',
  },
  openGraph: {
    title: 'BigQuery Specialist for Hire | Marketing Data Warehouse Engineer',
    description:
      'Hire a BigQuery specialist to build production marketing data warehouses on Google Cloud. Server-side GA4 → BigQuery, dbt, identity resolution, BQML, reverse ETL.',
    type: 'website',
    url: 'https://tagspecialist.ca/bigquery-specialist',
  },
};

export default function BigQuerySpecialistPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: 'BigQuery Specialist Services',
        description:
          'Expert BigQuery data warehouse implementation, server-side GA4 pipelines, dbt modeling, BigQuery ML, and managed pipeline operations by certified specialists with 15+ years experience.',
        provider: {
          '@type': 'Organization',
          name: 'Tag Specialist',
          url: 'https://tagspecialist.ca',
        },
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Verified Client' },
            datePublished: '2025-12-28',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'Built ETL pipelines for my company. Works perfectly. Took the initiative and suggested ways to improve the setup. Super reactive.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Verified Client' },
            datePublished: '2025-09-26',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Skilled and responsive data engineer with deep GCP experience. Highly recommend.',
          },
        ],
        serviceType: 'BigQuery Data Warehouse Implementation',
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'BigQuery Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'BigQuery Audit & Cost Optimization',
                description:
                  'Comprehensive audit of BigQuery usage, query patterns, table design, and slot consumption with a fixed remediation plan that typically cuts BigQuery spend 30-60%.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Marketing Data Warehouse Build',
                description:
                  'Production BigQuery warehouse combining GA4, Google Ads, Meta Ads, Shopify, Stripe, and CRM data with dbt modeling, identity resolution, and partitioned table design.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Server-Side GA4 → BigQuery Pipelines',
                description:
                  'Capture every server-side GA4 event in BigQuery via Cloud Run + Pub/Sub, separate from the sampled native GA4 export, for unbiased attribution analysis and downstream activation.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'BigQuery ML & Forecasting',
                description:
                  'Predictive models in BigQuery — customer LTV, churn propensity, conversion likelihood, and demand forecasting trained on your warehouse data, activated via reverse ETL.',
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
            name: 'What does a BigQuery specialist do?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A BigQuery specialist designs, builds, and operates marketing data warehouses on Google Cloud. This includes ELT pipeline design (server-side GA4, Google Ads, Meta CAPI, Shopify, Stripe, CRM), schema design with partitioning and clustering, dbt modeling for identity resolution and attribution, BigQuery ML for predictive analytics, reverse ETL for audience activation, and cost optimization.',
            },
          },
          {
            '@type': 'Question',
            name: 'How is hiring a BigQuery specialist different from a general data engineer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A general data engineer typically spends 4-6 weeks learning your marketing stack — GA4 schema, Google Ads conversion structure, Meta CAPI event format, Shopify webhook payloads. A BigQuery specialist who works in marketing daily already knows these systems and ships in week one. The cost difference is similar; the time-to-value difference is significant.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does a BigQuery marketing data warehouse cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Engagements range from a focused BigQuery audit ($1,500-$5,000, 3-5 days) to a full marketing data warehouse build ($18,000-$35,000, 5-8 weeks). Server-side GA4 → BigQuery pipelines on their own typically run $5,000-$12,000. Ongoing managed pipeline operations start at $300/month. Pricing is fixed-scope, not hourly.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you keep BigQuery costs under control?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Three layers. (1) At table design time: aggressive partitioning on event_timestamp / date, clustering on the columns that actually appear in WHERE clauses, and BigQuery storage tier policies. (2) At query time: dbt incremental models, materialized views for hot dashboards, and BI Engine for sub-second response. (3) At ops time: monthly slot consumption review, query-pattern monitoring, and alerts on full-scan queries. Most clients see 30-60% lower bills after the audit.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tagspecialist.ca' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'BigQuery Specialist',
            item: 'https://tagspecialist.ca/bigquery-specialist',
          },
        ],
      },
      {
        '@type': 'WebPage',
        name: 'BigQuery Specialist',
        url: 'https://tagspecialist.ca/bigquery-specialist',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '[data-speakable]'],
        },
        description:
          'A BigQuery specialist designs and builds marketing data warehouses on Google Cloud — ingesting GA4, Google Ads, Meta CAPI, Shopify, and CRM data into BigQuery, modeling it with dbt, and activating insights via BigQuery ML and reverse ETL. Engagements range from $1,500 audits to $35,000 full warehouse builds, with managed operations from $300/month.',
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <BigQuerySpecialistLanding />
    </>
  );
}
