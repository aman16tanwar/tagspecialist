import React from 'react';

const NewHeroSection = () => {
  return (
    <section className="relative bg-brand-highlight py-36 lg:py-48 overflow-hidden">
      
      {/* Technical Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'radial-gradient(#0A1A2F 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-primary tracking-tight mb-8 leading-tight">
            Your Marketing Data. <br className="hidden md:block" />
            <span className="text-brand-accent">
              Automated. Unified. Intelligent.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-main mb-12 leading-relaxed max-w-3xl mx-auto">
            We build your full tracking, analytics, and data infrastructure — ETL pipelines, BigQuery warehouse, custom tracking, server-side tagging, and AI-driven insights.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
              className="btn-primary uppercase tracking-wide text-lg"
            >
              Book a 15-Minute Call
            </button>
            <a 
              href="#pricing" 
              className="btn-secondary uppercase tracking-wide text-lg"
            >
              See Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
