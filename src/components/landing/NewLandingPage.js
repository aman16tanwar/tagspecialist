import React from 'react';
import NewHeroSection from '../home/NewHeroSection';
import ProblemSection from '../home/ProblemSection';
import SolutionSection from '../home/SolutionSection';
import WhyUsSection from '../home/WhyUsSection';
import TaggingSection from '../home/TaggingSection';
import PricingSection from '../pricing/PricingSection';
import CaseStudiesSection from '../casestudies/CaseStudiesSection';
import FAQSection from '../home/FAQSection';
import FinalCTASection from '../home/FinalCTASection';
import SEOHead from '../seo/SEOHead';

const NewLandingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Shopify to BigQuery Automated Pipeline",
    "applicationCategory": "DataManagementApplication",
    "operatingSystem": "Web-based",
    "description": "Automated Shopify to BigQuery data pipeline with no row limits. Break free from Fivetran's 500K row limit. 5-minute web UI setup, own your infrastructure for $50/month total.",
    "url": "https://tagspecialist.ca/shopify-bigquery",
    "featureList": [
      "UNLIMITED data rows (no 500K/5M limits)",
      "5-minute web-based setup",
      "Own your infrastructure ($50/mo hosting)",
      "No vendor lock-in",
      "Automated daily syncs",
      "4 BigQuery tables (customers, orders, products, order items)",
      "No coding required",
      "Free for up to 3 Shopify stores",
      "Multi-store support",
      "Web-based onboarding UI",
      "Automatic Cloud Run deployment",
      "Built-in monitoring dashboard"
    ],
    "screenshot": "https://tagspecialist.ca/shopify-bigquery-screenshot.png",
    "softwareVersion": "2.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "243"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "10000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31",
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Plan",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Up to 3 Shopify stores, unlimited rows, no credit card required"
        },
        {
          "@type": "Offer",
          "name": "Additional Stores",
          "price": "47",
          "priceCurrency": "USD",
          "description": "Per store per month after 3 stores"
        },
        {
          "@type": "Offer",
          "name": "DIY Source Code",
          "price": "497",
          "priceCurrency": "USD",
          "description": "Python source code for self-hosting"
        },
        {
          "@type": "Offer",
          "name": "Enterprise Setup",
          "price": "2997",
          "priceCurrency": "USD",
          "description": "Done-for-you setup with custom integrations"
        }
      ]
    },
    "author": {
      "@type": "Organization",
      "name": "Tag Specialist",
      "url": "https://tagspecialist.ca"
    },
    "competitor": [
      {
        "@type": "SoftwareApplication",
        "name": "Fivetran",
        "description": "Limited to 500K rows/month on free tier"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Stitch Data",
        "description": "Limited to 5M rows/month on free tier"
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="TagSpecialist | Marketing Data Warehouse & Tracking Infrastructure"
        description="Automated marketing data warehouse, ETL pipelines, server-side tagging, and AI analytics for agencies and brands."
        structuredData={structuredData}
      />
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
};

export default NewLandingPage;
