import React from 'react';
import { FaGoogle, FaShopify, FaDatabase, FaCheckCircle, FaRobot, FaChartLine } from 'react-icons/fa';
import { SiMeta, SiTiktok } from 'react-icons/si';

const SolutionSection = () => {
  const solutions = [
    "Google Ads → BigQuery ETL",
    "Meta → BigQuery ETL",
    "Shopify → BigQuery ETL",
    "CRM → BigQuery integration",
    "Unified clean schema",
    "Daily auto-validation & backfill",
    "Pixel + GTM + GA4 + server-side tagging setup",
    "Third-party tracking (TikTok, Snap, Pinterest, etc.)",
    "Conversion API integrations",
    "Attribution alignment (GA4 to Ads)",
    "Custom Looker dashboards",
    "AI Analyst layer (auto insights, anomaly detection, forecasting)"
  ];

  return (
    <section className="py-20 bg-brand-highlight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            What TagSpecialist Delivers
          </h2>
          <p className="text-xl text-text-main max-w-2xl mx-auto">
            A complete DO-IT-FOR-YOU setup. No more manual exports. No more broken pixels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left: List of deliverables */}
          <div className="space-y-4">
            {solutions.map((item, index) => (
              <div key={index} className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-brand-secondary">{item}</span>
              </div>
            ))}
          </div>

          {/* Right: Visual Representation (Abstract) */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 relative overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded shadow-sm flex items-center gap-3 justify-center border border-gray-200">
                <FaGoogle className="text-red-600 w-6 h-6" /> <span className="font-semibold text-gray-700">Google Ads</span>
              </div>
              <div className="bg-gray-50 p-4 rounded shadow-sm flex items-center gap-3 justify-center border border-gray-200">
                <SiMeta className="text-blue-600 w-6 h-6" /> <span className="font-semibold text-gray-700">Meta</span>
              </div>
              <div className="bg-gray-50 p-4 rounded shadow-sm flex items-center gap-3 justify-center border border-gray-200">
                <FaShopify className="text-green-600 w-6 h-6" /> <span className="font-semibold text-gray-700">Shopify</span>
              </div>
              <div className="bg-gray-50 p-4 rounded shadow-sm flex items-center gap-3 justify-center border border-gray-200">
                <SiTiktok className="text-black w-6 h-6" /> <span className="font-semibold text-gray-700">TikTok</span>
              </div>
            </div>

            <div className="flex justify-center mb-8">
               <div className="h-16 w-0.5 bg-gray-300 relative">
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2">
                    <span className="text-xs font-bold text-gray-500">ETL</span>
                 </div>
               </div>
            </div>

            <div className="bg-white text-brand-primary p-6 rounded-lg text-center mb-8 shadow-md relative z-10 border-2 border-brand-accent">
               <FaDatabase className="w-10 h-10 mx-auto mb-2 text-brand-accent" />
               <h3 className="text-xl font-bold">BigQuery Data Warehouse</h3>
               <p className="text-text-main text-sm">Unified, Clean, Single Source of Truth</p>
            </div>

             <div className="flex justify-center mb-8">
               <div className="h-16 w-0.5 bg-gray-300"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded shadow-sm flex flex-col items-center justify-center border border-gray-200 text-center">
                <FaChartLine className="text-brand-accent w-6 h-6 mb-2" /> 
                <span className="font-semibold text-gray-700 text-sm">Looker Dashboards</span>
              </div>
              <div className="bg-gray-50 p-4 rounded shadow-sm flex flex-col items-center justify-center border border-gray-200 text-center">
                <FaRobot className="text-purple-600 w-6 h-6 mb-2" /> 
                <span className="font-semibold text-gray-700 text-sm">AI Insights</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
