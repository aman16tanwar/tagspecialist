import React from 'react';

const WhyUsSection = () => {
  const points = [
    "Founded by 2 Lead Data Engineers",
    "15+ Years Combined Technical Experience",
    "Direct Access to Experts (No Account Managers)",
    "Proven Results: 451% Average ROAS",
    "Enterprise-Grade Engineering (GCP/BigQuery)",
    "No Vendor Lock-in (Own Your Data)",
    "Custom SA360, DV360, and Floodlight integrations",
    "10× more customizable than Supermetrics/Funnel",
    "Costs 80% less long term than enterprise SaaS"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-primary">
              Specialists vs. Generalists
            </h2>
            <p className="text-xl text-text-main">
              Why leading brands choose a boutique consultancy over big agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
             {points.map((point, index) => (
               <div key={index} className="flex items-start">
                  <span className="text-brand-accent font-bold text-xl mr-4">/0{index + 1}</span>
                  <p className="text-lg text-text-main font-medium">{point}</p>
               </div>
             ))}
          </div>
          
          <div className="mt-16 p-8 bg-brand-highlight rounded-lg text-center border border-gray-200">
             <p className="text-2xl font-semibold text-brand-primary mb-2">
               "We don't just use the tools. We engineer them."
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
