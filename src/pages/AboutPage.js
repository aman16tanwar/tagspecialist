import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import AboutSection from '../components/about/AboutSection';

const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About Us | Tag Specialist"
        description="Meet the team behind Tag Specialist. Expert data engineers and campaign managers working together to grow your business."
      />
      <div className="pt-20">
        <AboutSection />
      </div>
    </>
  );
};

export default AboutPage;
