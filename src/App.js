import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import NewLandingPage from './components/landing/NewLandingPage';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import DataSecurity from './components/legal/DataSecurity';
import ServiceLevelAgreement from './components/legal/ServiceLevelAgreement';
import RefundPolicy from './components/legal/RefundPolicy';

// New Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<NewLandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />

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