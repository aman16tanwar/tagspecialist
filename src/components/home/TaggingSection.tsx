'use client';

import React from 'react';
import Link from 'next/link';
import { FaTag, FaGlobe, FaServer, FaUserSecret, FaFilter } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Feature {
  title: string;
  desc: string;
  icon: IconType;
}

const TaggingSection: React.FC = () => {
  const features: Feature[] = [
    { title: "Google Tag Manager", desc: "Web + Server-side container architecture", icon: FaTag },
    { title: "GA4 Configuration", desc: "Advanced events & custom definitions", icon: FaGlobe },
    { title: "Consent Mode v2", desc: "Compliant & future-proof setup", icon: FaUserSecret },
    { title: "Server-Side Tagging", desc: "Shopify + CAPI tracking for accuracy", icon: FaServer },
    { title: "Social Tracking", desc: "TikTok, Snap, Pinterest, LinkedIn", icon: FaGlobe },
    { title: "Data Strategy", desc: "First-party data & Attribution cleanup", icon: FaFilter },
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-6 uppercase tracking-tighter">
            Tracking & Tagging <span className="text-blue-600">Foundation</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Before you analyze, you must track accurately. We engineer the entire infrastructure required to capture every signal with 100% precision.
          </p>
          <p className="text-base text-gray-600 font-medium max-w-3xl mx-auto mt-6 leading-relaxed">
            Hire a{' '}
            <Link href="/server-side-tagging-specialist" className="text-blue-600 hover:underline font-semibold">server-side tracking specialist</Link>
            {' '}or a{' '}
            <Link href="/google-tag-manager-specialist" className="text-blue-600 hover:underline font-semibold">Google Tag Manager specialist</Link>
            {' '}—{' '}
            <Link href="/benefits-of-server-side-tagging" className="text-blue-600 hover:underline">or learn why server-side tagging matters →</Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-blue-500/30 transition-all group shadow-sm hover:shadow-2xl">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-navy-900 mb-4 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
           <div className="inline-flex flex-wrap justify-center gap-8 px-10 py-6 bg-white rounded-full border border-gray-100 shadow-sm">
             <div className="flex items-center text-navy-900 font-bold uppercase text-xs tracking-widest"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Advanced Funnels</div>
             <div className="flex items-center text-navy-900 font-bold uppercase text-xs tracking-widest"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Custom Schemas</div>
             <div className="flex items-center text-navy-900 font-bold uppercase text-xs tracking-widest"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Deduplication</div>
           </div>
        </div>
      </div>

      {/* Subtle Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#0A1A2F 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
    </section>
  );
};

export default TaggingSection;
