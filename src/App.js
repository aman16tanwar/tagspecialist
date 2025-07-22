import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/services/ServicesSection';
import CaseStudiesSection from './components/casestudies/CaseStudiesSection';
import AIAssistantShowcase from './components/ai/AIAssistantShowcase';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import AboutSection from './components/about/AboutSection';
import PricingSection from './components/pricing/PricingSection';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
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
    </Layout>
  );
}

export default App;