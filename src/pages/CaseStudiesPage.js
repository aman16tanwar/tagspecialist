import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import CaseStudiesSection from '../components/casestudies/CaseStudiesSection';

const CaseStudiesPage = () => {
    return (
        <>
            <SEOHead
                title="Case Studies | Tag Specialist"
                description="Real-world examples of data engineering and analytics success stories."
            />
            <div className="pt-20">
                <CaseStudiesSection />
            </div>
        </>
    );
};

export default CaseStudiesPage;
