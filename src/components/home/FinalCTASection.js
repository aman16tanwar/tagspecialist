import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-white text-center border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-8">
          Turn Your Tracking + Data Into a <br />
          <span className="text-brand-accent">
             Competitive Advantage
          </span>
        </h2>
        
        <div className="flex justify-center">
           <button
             onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
             className="btn-primary text-xl px-10 py-5 uppercase tracking-wide transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
           >
             Book a 15-Minute Call
             <HiArrowRight className="ml-2 inline-block" />
           </button>
        </div>
        
        <p className="mt-8 text-gray-500 text-sm">
          No pressure sales. Just technical consultation.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
