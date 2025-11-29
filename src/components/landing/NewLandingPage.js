import React from 'react';
import NewHeroSection from '../home/NewHeroSection';
import ProblemSection from '../home/ProblemSection';
import SolutionSection from '../home/SolutionSection';
import WhyUsSection from '../home/WhyUsSection';
import TaggingSection from '../home/TaggingSection';
import PricingSection from '../pricing/PricingSection';
import CaseStudiesSection from '../casestudies/CaseStudiesSection';
import FAQSection from '../home/FAQSection';
import FinalCTASection from '../home/FinalCTASection';
import SEOHead from '../seo/SEOHead';

const NewLandingPage = () => {
  return (
    <>
      <SEOHead 
        title="TagSpecialist | Marketing Data Warehouse & Tracking Infrastructure"
        description="Automated marketing data warehouse, ETL pipelines, server-side tagging, and AI analytics for agencies and brands."
      />
      <NewHeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhyUsSection />
      <PricingSection />
      <CaseStudiesSection />
      <TaggingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
};

export default NewLandingPage;
