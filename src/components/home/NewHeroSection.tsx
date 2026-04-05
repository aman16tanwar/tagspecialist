'use client';

import React from 'react';
import Link from 'next/link';
import { HiArrowRight, HiLightningBolt, HiDatabase } from 'react-icons/hi';
import { motion } from 'framer-motion';

const NewHeroSection: React.FC = () => {

  return (
    <section className="relative bg-brand-highlight pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

      {/* Technical Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
           style={{
             backgroundImage: 'radial-gradient(#0A1A2F 1px, transparent 1px)',
             backgroundSize: '24px 24px'
           }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-brand-primary tracking-tighter mb-6 uppercase">
            Your Ad Platforms Are <span className="text-blue-600">Claiming Credit</span> for the Same Conversions
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Google says 50 conversions. Meta says 45. Your CRM says 30. We build the tracking infrastructure and data pipelines that show you what&apos;s actually happening.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

          {/* Left Column: Analytics & Tracking */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all flex flex-col items-start text-left relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <HiLightningBolt className="w-32 h-32 text-blue-600" />
             </div>

             <div className="bg-blue-50 p-3 rounded-lg mb-6 text-blue-600">
               <HiLightningBolt className="w-8 h-8" />
             </div>

             <h2 className="text-2xl md:text-3xl font-black text-brand-primary mb-4 uppercase tracking-tight">
               Marketing Analytics & Tracking
             </h2>
             <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">
               Fix broken attribution, implement server-side tracking (GTM), and capture every conversion signal.
               <span className="block mt-2 font-black text-blue-600 uppercase text-xs tracking-widest">Managed infrastructure included.</span>
             </p>

             <ul className="space-y-3 mb-8 text-navy-900 font-bold uppercase text-[10px] tracking-widest">
               <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                 Server-Side GTM & Meta CAPI
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                 Managed Hosting (Starts at $80/mo)
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                 Attribution Audit & Fixes
               </li>
             </ul>

             <Link
               href="/book-audit?service=tracking"
               className="mt-auto inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors w-full sm:w-auto shadow-lg hover:shadow-orange-500/25"
             >
               Fix My Tracking
               <HiArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </motion.div>

          {/* Right Column: Data Engineering */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-navy-900 rounded-2xl p-8 lg:p-12 border border-navy-800 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start text-left relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <HiDatabase className="w-32 h-32 text-blue-400" />
             </div>

             <div className="bg-navy-800 p-3 rounded-lg mb-6 text-blue-400">
               <HiDatabase className="w-8 h-8" />
             </div>

             <h2 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
               Data Engineering & AI
             </h2>
             <p className="text-blue-100/80 mb-8 text-lg leading-relaxed font-medium">
               Build your own data warehouse. Unlimited rows, real-time pipelines, and GenAI insights.
               <span className="block mt-2 font-black text-blue-400 uppercase text-xs tracking-widest">Zero vendor lock-in.</span>
             </p>

             <ul className="space-y-3 mb-8 text-white font-bold uppercase text-[10px] tracking-widest">
               <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                 Shopify to BigQuery Pipelines
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                 Custom ETL/ELT (Python/SQL)
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                 AI Analytics Agents (LangChain)
               </li>
             </ul>

             <Link
               href="/book-audit?service=data-engineering"
               className="mt-auto inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto shadow-lg hover:shadow-blue-500/25"
             >
               Build My Pipeline
               <HiArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
