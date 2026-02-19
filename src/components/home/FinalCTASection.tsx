'use client';

import React from 'react';
import Link from 'next/link';
import { HiArrowRight, HiCheckCircle, HiLightningBolt } from 'react-icons/hi';
import { useModal } from '@/contexts/ModalContext';
import InlineLeadCapture from '@/components/leads/InlineLeadCapture';

const FinalCTASection: React.FC = () => {
  const { openSuccessModal } = useModal();

  return (
    <section className="py-32 bg-brand-highlight text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-600/20">
            <HiLightningBolt /> Direct Access to Lead Engineers
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-8 leading-tight uppercase tracking-tighter">
          Turn Your Data Into <br className="hidden md:block" />
          <span className="text-brand-accent">
             A Competitive Advantage
          </span>
        </h2>

        <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            One client went from 2.1x to 9.5x ROAS in 6 months by fixing their attribution and engineering a BigQuery warehouse. Let&apos;s discuss what we can do for you.
        </p>

        {/* Inline Lead Capture Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <InlineLeadCapture 
            title="Start With a Free Tracking Audit"
            subtitle="Get personalized recommendations in 15 minutes"
            onSuccess={openSuccessModal}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
           <Link
             href="/book-audit"
             className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6 rounded-md uppercase tracking-[0.2em] font-black transform hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/40 inline-flex items-center transition-all"
             data-testid="final-cta-book-btn"
           >
             Book a 15-Minute Call
             <HiArrowRight className="ml-3 inline-block" />
           </Link>
           <Link
             href="/case-studies"
             className="btn-secondary text-xl px-12 py-6 uppercase tracking-[0.2em] font-black transform hover:-translate-y-1 bg-white hover:bg-gray-50 border-gray-200"
             data-testid="final-cta-results-btn"
           >
             View Proven Results
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-gray-200 pt-12">
            <div className="flex items-center justify-center gap-3 text-xs font-black text-navy-900 uppercase tracking-widest">
                <HiCheckCircle className="text-blue-500 text-lg" /> No Account Managers
            </div>
            <div className="flex items-center justify-center gap-3 text-xs font-black text-navy-900 uppercase tracking-widest">
                <HiCheckCircle className="text-blue-500 text-lg" /> ROI-First Approach
            </div>
            <div className="flex items-center justify-center gap-3 text-xs font-black text-navy-900 uppercase tracking-widest">
                <HiCheckCircle className="text-blue-500 text-lg" /> Selective Onboarding
            </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] -mr-48 -mb-48"></div>
    </section>
  );
};

export default FinalCTASection;
