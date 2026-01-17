import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import PartnersSection from '../components/partners/PartnersSection';

const PartnersPage = () => {
    return (
        <>
            <SEOHead
                title="Agency Partner Program | White-Label Data Engineering | Tag Specialist"
                description="Become a TagSpecialist partner. We offer white-label server-side tracking, BigQuery pipelines, and attribution modeling for marketing agencies."
                canonicalUrl="https://tagspecialist.ca/partners"
            />
            <div className="pt-20">
                <PartnersSection />
            </div>
        </>
    );
};

export default PartnersPage;
