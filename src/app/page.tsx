import type { Metadata } from 'next';
import NewHeroSection from '@/components/home/NewHeroSection';
import TrustedBy from '@/components/home/TrustedBy';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionSection from '@/components/home/SolutionSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import PricingSection from '@/components/pricing/PricingSection';
import CaseStudiesSection from '@/components/casestudies/CaseStudiesSection';
import TaggingSection from '@/components/home/TaggingSection';
import FAQSection from '@/components/home/FAQSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'TagSpecialist | Server-Side Tracking & Data Engineering Experts',
  description: 'Hire server-side tagging specialists and data engineers. GTM server-side implementation, GA4 setup, BigQuery data warehouses, and AI analytics for agencies and brands.',
  keywords: 'server-side tagging specialist, tag manager expert, GTM specialist, google tag manager expert, tagging specialist, server-side tracking, data engineering services, BigQuery consultant, GA4 implementation, conversion tracking expert',
  alternates: {
    canonical: '/',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "TagSpecialist",
      "description": "Expert server-side tagging specialists and data engineers. We build tracking infrastructure, GTM server-side implementations, BigQuery data warehouses, and AI analytics for agencies and brands.",
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo.png`,
      "image": `${SITE_URL}/og-image.png`,
      "areaServed": "Worldwide",
      "knowsAbout": [
        "Server-Side Tagging",
        "Google Tag Manager",
        "GA4 Implementation",
        "BigQuery Data Warehouses",
        "Data Engineering",
        "Meta Conversion API",
        "Conversion Tracking",
        "Marketing Analytics"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "TagSpecialist Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Server-Side Tracking & Attribution Engine",
              "description": "Full server-side GTM infrastructure, Meta CAPI, Google Ads Enhanced Conversions, ad blocker bypass, and cross-channel attribution."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Data Engineering & AI Warehouse",
              "description": "BigQuery data warehouse, ETL pipelines, custom SQL attribution models, GenAI analytics agents, and executive dashboards."
            }
          }
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vancouver",
        "addressRegion": "BC",
        "addressCountry": "CA"
      }
    },
    {
      "@type": "Organization",
      "name": "TagSpecialist",
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo.png`,
      "sameAs": ["https://github.com/tagspecialist"],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "developer@tagspecialist.ca",
        "contactType": "sales",
        "availableLanguage": "English"
      }
    },
    {
      "@type": "WebPage",
      "name": "TagSpecialist | Server-Side Tracking & Data Engineering Experts",
      "url": SITE_URL,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".hero-description", ".solution-summary"]
      },
      "description": "TagSpecialist is a boutique consultancy specializing in server-side tagging implementation and data engineering. We implement server-side GTM, Meta Conversions API and Google Ads Enhanced Conversions, build BigQuery data warehouses, and provide managed tracking infrastructure for e-commerce brands and agencies worldwide."
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <NewHeroSection />
      <TrustedBy />
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
