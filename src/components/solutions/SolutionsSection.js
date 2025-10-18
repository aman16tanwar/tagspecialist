import React from 'react';
import { motion } from 'framer-motion';
import { HiCloud, HiDatabase, HiChartBar, HiLightningBolt, HiCog, HiShieldCheck } from 'react-icons/hi';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: HiDatabase,
      title: "Enterprise Data Pipelines",
      description: "End-to-end ETL/ELT solutions connecting Google Ads, SA360, DV360, Meta, and 70+ platforms to BigQuery. Automated data ingestion serving 70+ enterprise clients.",
      features: ["Real-time data sync", "Automated scheduling", "Error handling & monitoring", "Custom transformations"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: HiCloud,
      title: "Cloud Infrastructure Automation",
      description: "GCP-native solutions using Cloud Functions, Cloud Run, Airflow, and Composer. Scalable architecture designed for high-volume data processing.",
      features: ["Serverless architecture", "Auto-scaling", "Cost optimization", "99.9% uptime SLA"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: HiChartBar,
      title: "Marketing Analytics Platform",
      description: "AI-powered analytics with LangChain integration. Real-time campaign performance tracking with 451% average ROAS improvement.",
      features: ["AI chatbot for data queries", "Automated reporting", "Cross-channel attribution", "Predictive analytics"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: HiLightningBolt,
      title: "Server-Side Tracking Implementation",
      description: "Enhanced data accuracy with GTM server-side solutions. Complete GA4 migration and Meta Conversions API setup to bypass iOS restrictions.",
      features: ["First-party cookies", "Enhanced privacy compliance", "Improved attribution", "Reduced data loss"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: HiCog,
      title: "Campaign Automation & Optimization",
      description: "Automated bid strategies with CRM integration. Dynamic conversion value optimization resulting in 65% conversion rate improvement.",
      features: ["Smart bidding", "Audience automation", "A/B testing framework", "Performance monitoring"],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: HiShieldCheck,
      title: "Data Governance & Compliance",
      description: "Enterprise-grade security with Secret Manager integration. GDPR/CCPA compliant data handling with audit trails.",
      features: ["Data encryption", "Access control", "Compliance reporting", "Audit logging"],
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Battle-tested solutions deployed across 70+ clients, processing millions in ad spend with proven ROI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                <solution.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-gray-400 mb-4">{solution.description}</p>
              
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-2"></span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            Discuss Your Requirements
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;