import React from 'react';
import { HiCheck, HiPlus } from 'react-icons/hi';

const PricingSection = () => {
  const plans = [
    {
      name: "Setup",
      price: "$5,000 – $12,000",
      note: "One-time fee. Depends on integrations.",
      features: [
        "Full Data Warehouse Setup",
        "All ETL Pipelines",
        "Historical Data Backfill",
        "Tagging & Tracking Foundation",
        "Looker Studio Dashboard Suite"
      ]
    },
    {
      name: "Monthly",
      price: "$500 – $1,500",
      note: "Monthly retainer.",
      features: [
        "Pipeline Monitoring & Maintenance",
        "Data Validation Checks",
        "Dashboard Updates",
        "API Updates Handling",
        "Priority Support"
      ]
    }
  ];

  const addons = [
    { name: "AI Analyst Layer", price: "$500/mo" },
    { name: "Server-Side Tagging Setup", price: "$2,000 one-time" },
    { name: "Advanced Attribution Modeling", price: "$1,500 one-time" }
  ];

  return (
    <section id="pricing" className="py-20 bg-brand-highlight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-text-main">
            Enterprise-grade infrastructure at a fraction of the cost of SaaS + Agency fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:border-brand-accent transition-all">
              <div className="p-8 text-center bg-gray-50 border-b border-gray-200">
                <h3 className="text-2xl font-bold mb-2 text-brand-primary">{plan.name}</h3>
                <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-1">{plan.price}</div>
                <p className="text-text-main text-sm">{plan.note}</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-text-main">
                      <HiCheck className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
                  className="btn-primary w-full mt-8 uppercase tracking-wide text-sm"
                >
                  Book a Call
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-8">
           <h3 className="text-xl font-bold text-brand-primary mb-6 text-center">Powerful Add-Ons</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {addons.map((addon, index) => (
               <div key={index} className="flex flex-col items-center text-center p-4 bg-brand-highlight rounded-lg border border-gray-200">
                 <HiPlus className="w-6 h-6 text-brand-accent mb-2" />
                 <span className="font-semibold text-text-dark block mb-1">{addon.name}</span>
                 <span className="text-text-main text-sm">{addon.price}</span>
               </div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
