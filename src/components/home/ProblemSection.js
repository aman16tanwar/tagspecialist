import React from 'react';
import { FaExclamationTriangle, FaUncharted, FaLink, FaClock } from 'react-icons/fa';
import { HiOutlineDatabase, HiOutlineChartBar } from 'react-icons/hi';

const ProblemSection = () => {
  const problems = [
    { icon: FaExclamationTriangle, text: "Broken or incomplete tracking" },
    { icon: FaUncharted, text: "GA4 discrepancies" },
    { icon: HiOutlineChartBar, text: "Unreliable ad platform data" },
    { icon: FaLink, text: "Google Ads native connector limitations" },
    { icon: FaExclamationTriangle, text: "Supermetrics failing or inconsistent" },
    { icon: HiOutlineDatabase, text: "No single source of truth" },
    { icon: FaClock, text: "Slow, manual reporting in Excel/Sheets" },
    { icon: FaLink, text: "Multi-platform chaos (Google, Meta, TikTok, Shopify)" },
    { icon: FaUncharted, text: "Attribution confusion" },
    { icon: FaLink, text: "Server-side tagging not implemented" }
  ];

  return (
    <section className="py-20 bg-brand-highlight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Why Brands Struggle
          </h2>
          <p className="text-xl text-text-main max-w-2xl mx-auto">
            Data engineering is hard. Most marketing teams are flying blind with broken data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((item, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-lg border border-gray-200 hover:border-brand-accent transition-colors shadow-sm">
              <div className="flex-shrink-0 mr-4">
                <item.icon className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-brand-secondary font-medium text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
