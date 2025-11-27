import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import ServicesSection from '../components/services/ServicesSection';
import ContactForm from '../components/ContactForm/ContactForm';

const ServicesPage = () => {
    const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);

    React.useEffect(() => {
        const handleOpenContact = () => setIsContactFormOpen(true);
        window.addEventListener('openContactForm', handleOpenContact);
        return () => window.removeEventListener('openContactForm', handleOpenContact);
    }, []);

    return (
        <>
            <SEOHead
                title="Services | Tag Specialist"
                description="Data Engineering, Analytics Implementation, and AI Automation services."
            />
            <div className="pt-20">
                <ServicesSection />
            </div>
            <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
        </>
    );
};

export default ServicesPage;
