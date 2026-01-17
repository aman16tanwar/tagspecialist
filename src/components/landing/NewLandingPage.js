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
      "availability": "https://schema.org/InStock",
      "offers": [
        {
          "@type": "Offer",
          "name": "Analytics Foundation",
          "price": "12000",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "Server-Side Infrastructure",
          "price": "18500",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "Complete Data Infrastructure",
          "price": "28000",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "Essentials Retainer",
          "price": "3500",
          "priceCurrency": "USD"
        }
      ]
    },
    "author": {
      "@type": "Organization",
      "name": "TagSpecialist",
      "url": "https://tagspecialist.ca"
    }
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