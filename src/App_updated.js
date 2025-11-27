import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SEOHead from './components/seo/SEOHead';

// Core service components
import HeroSection from './components/home/HeroSection_v2';
import ServicesOverview from './components/services/ServicesOverview';
import TechnicalMarketingServices from './components/services/TechnicalMarketingServices';
import DataEngineeringServices from './components/services/DataEngineeringServices';
import GenAIServices from './components/services/GenAIServices';

// Solutions & Expertise
import SolutionsSection from './components/solutions/SolutionsSection';
import TechStackSection from './components/expertise/TechStackSection';
import CaseStudiesSection from './components/casestudies/CaseStudiesSection';

// About & Trust
import AboutSection from './components/about/AboutSection';
import ClientLogos from './components/trust/ClientLogos';
import StatsSection from './components/trust/StatsSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';

// Resources & Learning
import ResourceHub from './components/resources/ResourceHub';
import BlogHub from './components/blog/BlogHub';

// Contact & Legal
import ContactSection from './components/contact/ContactSection';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';

// Main page component with Netconomy-inspired structure
const HomePage = () => (
  <>
    <SEOHead 
      title="Technical Marketing & Data Engineering Services | Transform Your Digital Analytics"
      description="Expert GA4, GTM, server-side tracking implementation. Cloud data pipelines with Python, BigQuery, Airflow. AI-powered analytics solutions."
    />
    
    {/* Hero Section - Transform for the Future style */}
    <HeroSection />
    
    {/* Client Logos Bar */}
    <ClientLogos />
    
    {/* Core Services Grid */}
    <ServicesOverview />
    
    {/* Stats Section - Years, Projects, Clients */}
    <StatsSection />
    
    {/* Technical Stack & Expertise */}
    <TechStackSection />
    
    {/* Solutions by Industry */}
    <SolutionsSection />
    
    {/* Case Studies */}
    <CaseStudiesSection />
    
    {/* Testimonials */}
    <TestimonialsSection />
    
    {/* Contact CTA */}
    <ContactSection />
  </>
);

// Service detail pages
const TechnicalMarketingPage = () => (
  <>
    <SEOHead 
      title="Technical Marketing Implementation | GA4, GTM, Server-Side Tracking"
      description="Professional GA4 setup, GTM configuration, server-side tracking, and pixel implementation services."
    />
    <TechnicalMarketingServices />
  </>
);

const DataEngineeringPage = () => (
  <>
    <SEOHead 
      title="Data Engineering Services | Cloud Pipelines, BigQuery, Python"
      description="Build scalable data pipelines with Cloud Run, BigQuery, Apache Airflow, and Python."
    />
    <DataEngineeringServices />
  </>
);

const GenAIPage = () => (
  <>
    <SEOHead 
      title="GenAI Analytics Solutions | AI-Powered Data Intelligence"
      description="Leverage Generative AI for advanced analytics, automated insights, and data intelligence."
    />
    <GenAIServices />
  </>
);

function App() {
  return (
    <Layout>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        
        {/* Service Routes */}
        <Route path="/services/technical-marketing" element={<TechnicalMarketingPage />} />
        <Route path="/services/data-engineering" element={<DataEngineeringPage />} />
        <Route path="/services/genai-analytics" element={<GenAIPage />} />
        
        {/* Resource Routes */}
        <Route path="/resources" element={<ResourceHub />} />
        <Route path="/blog" element={<BlogHub />} />
        <Route path="/case-studies" element={<CaseStudiesSection />} />
        
        {/* Legal Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Layout>
  );
}

export default App;