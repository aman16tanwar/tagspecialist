import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
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
      question: "What if I don’t have BigQuery yet?",
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-white transition-colors text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-navy-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white text-gray-700 border-t border-gray-200 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
