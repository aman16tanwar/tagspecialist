import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Tag Specialist | Data Engineering & Marketing Analytics Solutions",
  description = "Expert Google Tag Manager, GA4, and BigQuery implementation services. We build server-side tracking and real-time data pipelines for Shopify and enterprise brands.",
  keywords = "data engineering, BigQuery pipeline, Google Ads API, SA360, DV360, GA4 migration, GTM server-side, marketing analytics, ETL pipeline, cloud functions, airflow, data automation",
  canonicalUrl = "https://tagspecialist.ca",
  ogImage = "https://tagspecialist.ca/og-image.png",
  structuredData = null
}) => {
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tag Specialist",
    "description": "Enterprise data engineering and marketing analytics solutions",
    "url": "https://tagspecialist.ca",
    "email": "aman@tagspecialist.ca",
    "telephone": "+1-236-668-8922",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.2827,
      "longitude": -123.1207
    },
    "priceRange": "$2,500 - $15,000+",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Data Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shopify to BigQuery Pipeline",
            "description": "Real-time, unlimited row data pipeline for Shopify"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Server-Side Tracking",
            "description": "GA4, GTM server-side tracking, Meta CAPI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Monthly Retainer",
            "description": "Ongoing analytics and GTM support"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "70",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Tag Specialist" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Tag Specialist" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Additional SEO Tags */}
      <meta name="google-site-verification" content="your-verification-code" />
    </Helmet>
  );
};

export default SEOHead;