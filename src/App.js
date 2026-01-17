import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import NewLandingPage from './components/landing/NewLandingPage';
import ShopifyBigQueryLanding from './components/landing/ShopifyBigQueryLanding';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import DataSecurity from './components/legal/DataSecurity';
import ServiceLevelAgreement from './components/legal/ServiceLevelAgreement';
import RefundPolicy from './components/legal/RefundPolicy';

// New Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogsPage from './components/blog/BlogsPage';
import BlogPost from './components/blog/BlogPost';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<NewLandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        
        {/* Landing Pages */}
        <Route path="/shopify-bigquery" element={<ShopifyBigQueryLanding />} />

        {/* Blog Routes */}
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/data-security" element={<DataSecurity />} />
        <Route path="/sla" element={<ServiceLevelAgreement />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </Layout>
  );
}

export default App;
