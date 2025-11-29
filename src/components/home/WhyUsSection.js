import React from 'react';

const WhyUsSection = () => {
  const points = [
    "3+ years building enterprise-grade ETL + Kedet pipelines",
    "Expertise across: GA4, GTM, Server-Side Tagging, custom trackers",
    "Custom SA360, DV360, and Floodlight integrations",
    "Multi-channel performance modeling",
    "Automated first-party data tracking",
    "BigQuery ML for predictions",
    "Delivered 70+ pipelines and multi-store Shopify ingestion",
    "10× more customizable than Supermetrics/Funnel",
    "Costs 80% less long term than enterprise SaaS"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-primary">
              Why TagSpecialist?
            </h2>
            <p className="text-xl text-text-main">
              Technical depth you won't find in a generalist agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
             {points.map((point, index) => (
               <div key={index} className="flex items-start">
                  <span className="text-brand-accent font-bold text-xl mr-4">/0{index + 1}</span>
                  <p className="text-lg text-text-main">{point}</p>
               </div>
             ))}
          </div>
          
          <div className="mt-16 p-8 bg-brand-highlight rounded-lg text-center border border-gray-200">
             <p className="text-2xl font-semibold text-brand-primary mb-2">
               "We don't just connect data. We engineer it."
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
