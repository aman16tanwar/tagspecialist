import React from 'react';
import { FaTag, FaGlobe, FaServer, FaUserSecret, FaFilter } from 'react-icons/fa';

const TaggingSection = () => {
  const features = [
    { title: "Google Tag Manager", desc: "Web + Server-side container architecture", icon: FaTag },
    { title: "GA4 Configuration", desc: "Advanced events & custom definitions", icon: FaGlobe },
    { title: "Consent Mode v2", desc: "Compliant & future-proof setup", icon: FaUserSecret },
    { title: "Server-Side Tagging", desc: "Shopify + CAPI tracking for accuracy", icon: FaServer },
    { title: "Social Tracking", desc: "TikTok, Snap, Pinterest, LinkedIn", icon: FaGlobe },
    { title: "Data Strategy", desc: "First-party data & Attribution cleanup", icon: FaFilter },
  ];

  return (
    <section className="py-20 bg-brand-highlight border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Tracking & Tagging Foundation
          </h2>
          <p className="text-xl text-text-main max-w-2xl mx-auto">
            Before you analyze, you must track accurately. We handle your entire tracking infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-brand-accent transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-brand-accent">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">{feature.title}</h3>
              <p className="text-text-main leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <ul className="inline-block text-left space-y-2">
             <li className="flex items-center text-text-main"><span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>Advanced funnel tracking</li>
             <li className="flex items-center text-text-main"><span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>Custom event schemas</li>
             <li className="flex items-center text-text-main"><span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>Deduplication & offline imports</li>
           </ul>
        </div>
      </div>
    </section>
  );
};

export default TaggingSection;