import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SEOHead from './components/seo/SEOHead';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/services/ServicesSection';
import SolutionsSection from './components/solutions/SolutionsSection';
import ExpertiseSection from './components/expertise/ExpertiseSection';
import CaseStudiesSection from './components/casestudies/CaseStudiesSection';
import AIAssistantShowcase from './components/ai/AIAssistantShowcase';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import AboutSection from './components/about/AboutSection';
import PricingSection from './components/pricing/PricingSection';
import ProductsSection from './components/products/ProductsSection';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';
import StarterPackagePage from './components/blog/StarterPackagePage';
import BlogsPage from './components/blog/BlogsPage';
import ShopifyBigQueryTutorial from './components/blog/ShopifyBigQueryTutorial';
import AutomatedPipelinePost from './components/blog/AutomatedPipelinePost';
import FivetranAlternative from './components/alternatives/FivetranAlternative';
import StitchAlternative from './components/alternatives/StitchAlternative';
import ROICalculator from './components/calculator/ROICalculator';
import ShopifyBigQueryLanding from './components/landing/ShopifyBigQueryLanding';
import ShopifyPipelineComparison from './components/comparison/ShopifyPipelineComparison';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';

// Main page component
const HomePage = () => (
  <>
    <SEOHead />
    <HeroSection />
    <ServicesSection />
    <SolutionsSection />
    <ExpertiseSection />
    <CaseStudiesSection />
    <AIAssistantShowcase />
    <AboutSection />
    <TestimonialsSection />
    <PricingSection />
    <div id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Make Data Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Competitive Advantage?
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Let's discuss how to transform your data chaos into clear, profitable decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const event = new CustomEvent('openContactForm');
              window.dispatchEvent(event);
            }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
          >
            Get Started - Contact Me
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-8">
          I take on 2-3 new implementations per month. Current availability: January 2025
        </p>
        <p className="text-sm text-gray-500 mt-2">
          🍁 Based in Vancouver, BC • Available for clients worldwide • PST/PDT timezone
        </p>
      </div>
    </div>
  </>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/starter-package" element={<StarterPackagePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/shopify-bigquery-pipeline-tutorial" element={<ShopifyBigQueryTutorial />} />
        <Route path="/blog/automated-shopify-pipeline" element={<AutomatedPipelinePost />} />
        <Route path="/fivetran-alternative" element={<FivetranAlternative />} />
        <Route path="/stitch-data-alternative" element={<StitchAlternative />} />
        <Route path="/case-studies" element={<CaseStudiesSection />} />
        <Route path="/shopify-bigquery" element={<ShopifyBigQueryLanding />} />
        <Route path="/shopify-pipeline-comparison" element={<ShopifyPipelineComparison />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Layout>
  );
}

export default App;