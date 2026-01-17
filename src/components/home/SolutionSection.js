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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-6 uppercase tracking-tighter">
            What <span className="text-blue-600">TagSpecialist</span> Delivers
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            A complete DO-IT-FOR-YOU engineering setup. No more manual exports. No more broken pixels. Just pure, actionable data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left: List of deliverables */}
          <div className="space-y-6">
            {solutions.map((item, index) => (
              <div key={index} className="flex items-start group">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                    <FaCheckCircle className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors flex-shrink-0" />
                </div>
                <span className="text-xl text-navy-900 font-bold tracking-tight">{item}</span>
              </div>
            ))}
          </div>

          {/* Right: Visual Representation (Abstract) */}
          <div className="bg-gray-50 p-10 lg:p-12 rounded-[3rem] border border-gray-100 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-2 gap-6 mb-10 relative z-10">
              <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center gap-4 justify-center border border-gray-100 hover:border-blue-400 transition-colors">
                <FaGoogle className="text-red-600 w-6 h-6" /> <span className="font-black text-navy-900 uppercase text-xs tracking-widest">Google Ads</span>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center gap-4 justify-center border border-gray-100 hover:border-blue-400 transition-colors">
                <SiMeta className="text-blue-600 w-6 h-6" /> <span className="font-black text-navy-900 uppercase text-xs tracking-widest">Meta</span>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center gap-4 justify-center border border-gray-100 hover:border-blue-400 transition-colors">
                <FaShopify className="text-green-600 w-6 h-6" /> <span className="font-black text-navy-900 uppercase text-xs tracking-widest">Shopify</span>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center gap-4 justify-center border border-gray-100 hover:border-blue-400 transition-colors">
                <SiTiktok className="text-black w-6 h-6" /> <span className="font-black text-navy-900 uppercase text-xs tracking-widest">TikTok</span>
              </div>
            </div>

            <div className="flex justify-center mb-10 relative z-10">
               <div className="h-20 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 relative rounded-full">
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-navy-900 text-white rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest border-2 border-white">
                    ETL Pipeline
                 </div>
               </div>
            </div>

            <div className="bg-navy-900 text-white p-8 rounded-3xl text-center mb-10 shadow-2xl relative z-10 border-2 border-blue-600/30">
               <FaDatabase className="w-12 h-12 mx-auto mb-4 text-blue-400" />
               <h3 className="text-2xl font-black uppercase tracking-widest mb-2">BigQuery Data Warehouse</h3>
               <p className="text-blue-200 font-bold uppercase text-[10px] tracking-[0.2em]">Unified • Clean • Single Source of Truth</p>
            </div>

             <div className="flex justify-center mb-10 relative z-10">
               <div className="h-20 w-1 bg-gradient-to-b from-navy-900 to-transparent relative rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center border border-gray-100 hover:border-blue-400 transition-colors text-center group">
                <FaChartLine className="text-blue-600 w-8 h-8 mb-3 group-hover:scale-110 transition-transform" /> 
                <span className="font-black text-navy-900 uppercase text-[10px] tracking-widest">Looker Dashboards</span>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center border border-gray-100 hover:border-purple-400 transition-colors text-center group">
                <FaRobot className="text-purple-600 w-8 h-8 mb-3 group-hover:scale-110 transition-transform" /> 
                <span className="font-black text-navy-900 uppercase text-[10px] tracking-widest">GenAI Analytics</span>
              </div>
            </div>

            {/* Background Decor */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
