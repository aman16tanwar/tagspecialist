import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Tag Specialist | Data Engineering & Marketing Analytics Solutions",
  description = "Enterprise data pipelines, marketing analytics, and AI-powered solutions. 8+ years experience, 70+ clients, 451% average ROAS. Google Ads, BigQuery, GA4, GTM expert.",
  keywords = "data engineering, BigQuery pipeline, Google Ads API, SA360, DV360, GA4 migration, GTM server-side, marketing analytics, ETL pipeline, cloud functions, airflow, data automation",
  canonicalUrl = "https://tagspecialist.com",
  ogImage = "https://tagspecialist.com/og-image.png",
  structuredData = null
}) => {
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tag Specialist",
    "description": "Enterprise data engineering and marketing analytics solutions",
    "url": "https://tagspecialist.com",
    "email": "developer@tagspecialist.ca",
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
    "priceRange": "$4,997 - $24,997+",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/in/tamantanwar/",
      "https://github.com/aman16tanwar",
      "https://www.upwork.com/freelancers/~01528e07812749b309"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Data Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Pipeline Development",
            "description": "ETL/ELT pipelines for Google Ads, Meta, SA360, DV360 to BigQuery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Analytics Implementation",
            "description": "GA4, GTM server-side tracking, Meta Conversions API"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Automation",
            "description": "Campaign optimization, bid management, AI-powered insights"
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
      <meta name="msvalidate.01" content="your-bing-code" />
    </Helmet>
  );
};

export default SEOHead;