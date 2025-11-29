import React from 'react';
import { FaStar, FaCheckCircle } from 'react-icons/fa';

const PortfolioSection = () => (
  <section id="projects" className="bg-white py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Recent enterprise implementations and data infrastructure projects.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Project Card 1 */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200 hover:border-blue-400 transition-colors">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Enterprise Data Warehouse</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Built a complete marketing data warehouse for a multi-brand agency, ingesting data from Google Ads, Meta, TikTok, and Shopify into BigQuery.
          </p>
          <div className="flex flex-wrap gap-2">
             <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-sm font-medium">BigQuery</span>
             <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-sm font-medium">Python</span>
             <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-sm font-medium">dbt</span>
             <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-sm font-medium">Looker</span>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200 hover:border-green-400 transition-colors">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Server-Side Tracking Infrastructure</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Implemented full CAPI and Server-Side GTM setup for a high-volume e-commerce store, recovering 15% of lost attribution signal.
          </p>
           <div className="flex flex-wrap gap-2">
             <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-100 rounded-full text-sm font-medium">GTM Server-Side</span>
             <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-100 rounded-full text-sm font-medium">Meta CAPI</span>
             <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-100 rounded-full text-sm font-medium">Cloud Run</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioSection;