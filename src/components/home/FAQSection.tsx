'use client';

import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Why not use Google Ads native connector?",
      answer: "Native connectors often sample data, break frequently, and lack the flexibility to join with other data sources like CRM or Shopify for true ROAS calculation."
    },
    {
      question: "Why BigQuery instead of Data Studio connectors?",
      answer: "BigQuery allows for granular data ownership, complex SQL transformations, historical storage, and joining data from any source. Connectors are slow and often limited."
    },
    {
      question: "How do you ensure data accuracy?",
      answer: "We implement daily automated validation checks. If row counts or totals drift beyond a threshold, our system alerts us immediately to fix it."
    },
    {
      question: "What is server-side tagging and why do I need it?",
      answer: "Browser tracking is dying due to cookies and ad blockers. Server-side tagging sends data directly from your server to ad platforms (CAPI), restoring lost signal."
    },
    {
      question: "Can you handle GA4 migration problems?",
      answer: "Yes, we specialize in fixing broken GA4 setups, including cross-domain tracking, missing events, and thresholding issues."
    },
    {
      question: "Do you maintain tracking + pipelines?",
      answer: "Yes, our monthly retainers include monitoring, maintenance, and updates when platforms change their APIs."
    },
    {
      question: "How long does setup take?",
      answer: "Typical foundation setup takes 2-4 weeks depending on the number of integrations and complexity of custom tracking."
    },
    {
      question: "What if I don't have BigQuery yet?",
      answer: "We set it up for you completely in your own Google Cloud account. You own the data forever."
    },
    {
      question: "Do I get dashboards included?",
      answer: "Yes, we build custom Looker Studio (formerly Data Studio) dashboards powered by your new BigQuery warehouse."
    },
    {
      question: "What is the AI Analyst Layer?",
      answer: "It's an advanced add-on that uses LLMs to analyze your daily data, detect anomalies (e.g., 'CPA spiked 20%'), and provide plain-english insights automatically."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-6 uppercase tracking-tighter">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our engineering process and high-performance data systems.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-navy-900 text-lg pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <HiChevronUp className="text-blue-600 flex-shrink-0" />
                ) : (
                  <HiChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-gray-100"
                  >
                    <div className="p-6 text-gray-600 font-medium leading-relaxed bg-gray-50/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
