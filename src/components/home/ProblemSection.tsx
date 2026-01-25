'use client';

import React from 'react';
import { FaExclamationTriangle, FaUncharted, FaLink, FaClock } from 'react-icons/fa';
import { HiOutlineDatabase, HiOutlineChartBar } from 'react-icons/hi';
import { IconType } from 'react-icons';

interface Problem {
  icon: IconType;
  text: string;
}

const ProblemSection: React.FC = () => {
  const problems: Problem[] = [
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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-6 uppercase tracking-tighter">
            Why Leading Brands <span className="text-red-600 underline decoration-red-600/20 underline-offset-8">Struggle</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Data engineering is difficult. Most marketing teams are flying blind with broken attribution, inconsistent tracking, and manual reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-start p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-red-500/30 transition-all shadow-sm hover:shadow-xl group">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mr-6 group-hover:bg-red-600 group-hover:text-white transition-colors text-red-600">
                  <IconComponent className="w-6 h-6" />
                </div>
                <p className="text-navy-900 font-bold text-lg leading-snug pt-1">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
