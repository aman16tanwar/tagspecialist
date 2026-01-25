import type { Metadata } from 'next';
import ShopifyBigQueryLanding from '@/components/landing/ShopifyBigQueryLanding';

export const metadata: Metadata = {
  title: 'Shopify to BigQuery Pipeline | No Row Limits',
  description: 'The only Shopify to BigQuery connector with NO row limits. Real-time data sync, 5-minute setup, and you own the infrastructure. Save $1,200+/year vs Fivetran.',
  keywords: 'shopify to bigquery, shopify data pipeline, shopify bigquery connector, bigquery shopify integration, shopify data warehouse, unlimited rows shopify, fivetran alternative',
};

export default function ShopifyBigQueryPage() {
  return <ShopifyBigQueryLanding />;
}
