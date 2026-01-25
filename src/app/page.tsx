import type { Metadata } from 'next';
import NewHeroSection from '@/components/home/NewHeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionSection from '@/components/home/SolutionSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import PricingSection from '@/components/pricing/PricingSection';
import CaseStudiesSection from '@/components/casestudies/CaseStudiesSection';
import TaggingSection from '@/components/home/TaggingSection';
import FAQSection from '@/components/home/FAQSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'TagSpecialist | Marketing Data Warehouse & Tracking Infrastructure',
  description: 'Automated marketing data warehouse, ETL pipelines, server-side tagging, and AI analytics for agencies and brands.',
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Automated Marketing Data Warehouse",
  "applicationCategory": "DataManagementApplication",
  "operatingSystem": "Web-based",
  "description": "Enterprise-grade data infrastructure for marketing analytics. GA4, GTM Server-side, and BigQuery automation for 8-figure brands.",
  "url": "https://tagspecialist.ca",
  "featureList": [
    "Server-side GTM Infrastructure",
    "BigQuery Data Warehouse Automation",
    "GA4 Enterprise Implementation",
    "First-Party Data Identity Stitching",
    "Automated Daily ETL Pipelines",
    "No row limits, total infrastructure ownership"
  ],
  "screenshot": "https://tagspecialist.ca/og-image.png",
  "softwareVersion": "2026.1",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "70"
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "3500",
    "highPrice": "28000",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "author": {
    "@type": "Organization",
    "name": "TagSpecialist",
    "url": "https://tagspecialist.ca"
  }
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <NewHeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhyUsSection />
      <PricingSection />
      <CaseStudiesSection />
      <TaggingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
