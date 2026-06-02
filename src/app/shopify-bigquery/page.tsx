import type { Metadata } from 'next';
import ShopifyBigQueryLanding from '@/components/landing/ShopifyBigQueryLanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Shopify to BigQuery Pipeline | No Row Limits',
  description: 'The only Shopify to BigQuery connector with NO row limits. Real-time data sync, 5-minute setup, and you own the infrastructure. Save $1,200+/year vs Fivetran.',
  keywords: 'shopify to bigquery, shopify data pipeline, shopify bigquery connector, bigquery shopify integration, shopify data warehouse, unlimited rows shopify, fivetran alternative',
  alternates: {
    canonical: 'https://tagspecialist.ca/shopify-bigquery',
  },
  openGraph: {
    title: 'Shopify to BigQuery Pipeline | No Row Limits',
    description: 'The only Shopify to BigQuery connector with NO row limits. $50/month total. Save $1,200+/year vs Fivetran.',
    type: 'website',
    url: 'https://tagspecialist.ca/shopify-bigquery',
  },
};

export default function ShopifyBigQueryPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Shopify to BigQuery Pipeline',
        description: 'The only Shopify to BigQuery connector with NO row limits. Real-time data sync with 4 core tables.',
        applicationCategory: 'Data Integration',
        operatingSystem: 'Google Cloud Platform',
        offers: {
          '@type': 'Offer',
          price: '50',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '50',
            priceCurrency: 'USD',
            billingDuration: 'P1M',
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does the Shopify to BigQuery pipeline cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '$50/month total with NO row limits. Compare this to Fivetran which starts at $1 per MAR (Monthly Active Row) and quickly scales to $100+/month for most Shopify stores. You save $1,200+/year.',
            },
          },
          {
            '@type': 'Question',
            name: 'What Shopify data tables are synced to BigQuery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Four core tables are synced: Customers, Orders, Products, and Order Items. This covers the essential data needed for analytics, LTV modeling, and marketing attribution.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I own the infrastructure?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — the pipeline runs in your own Google Cloud project. You have full ownership and control. No vendor lock-in.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tagspecialist.ca' },
          { '@type': 'ListItem', position: 2, name: 'Shopify to BigQuery', item: 'https://tagspecialist.ca/shopify-bigquery' },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <ShopifyBigQueryLanding />
    </>
  );
}
