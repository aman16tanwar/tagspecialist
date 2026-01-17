import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import ServicesSection from '../components/services/ServicesSection';
import PricingSection from '../components/pricing/PricingSection';
import RetainerServices from '../components/services/RetainerServices';
import CapabilitiesSection from '../components/services/CapabilitiesSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';

const ServicesPage = () => {
    return (
        <>
            <SEOHead
                title="Services | Tag Specialist"
                description="Data Engineering, Analytics Implementation, and AI Automation services."
            />
            <div className="pt-20">
                <ServicesSection />
                <CapabilitiesSection />
                <PricingSection />
                <RetainerServices />
                <TestimonialsSection />
            </div>
        </>
    );
};

export default ServicesPage;