import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const CaseStudiesSection = () => {
  const cases = [
    "Built a multi-channel warehouse for an agency managing 70+ clients",
    "Migrated a $5M/year e-commerce brand from spreadsheets to a full BigQuery warehouse",
    "Implemented custom GA4 + server-side tagging improving match rates by 38%",
    "Automated Shopify → BigQuery pipelines across 7 stores",
    "Built AI-based reporting for a resort brand driving 30% faster insights"
  ];

  return (
    <section className="py-20 bg-gray-50">
       <div className="container mx-auto px-4">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Proven Results
            </h2>
         </div>

         <div className="max-w-4xl mx-auto space-y-6">
            {cases.map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-white border-l-4 border-blue-600 rounded-r-sm shadow-sm border-t border-b border-r border-gray-200">
                 <div className="mr-4 pt-1">
                    <HiArrowRight className="w-5 h-5 text-blue-600" />
                 </div>
                 <p className="text-lg text-gray-800 font-medium">
                   {item}
                 </p>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};

export default CaseStudiesSection;