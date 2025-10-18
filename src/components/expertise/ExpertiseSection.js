import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiTrendingUp, HiCode, HiPresentationChartBar } from 'react-icons/hi';

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      category: "Data Engineering & Cloud Architecture",
      icon: HiCode,
      years: "8+",
      highlights: [
        "BigQuery data warehouse architecture for 70+ enterprise clients",
        "Apache Airflow orchestration with complex DAG workflows",
        "GCP infrastructure (Cloud Functions, Cloud Run, Compute Engine)",
        "Real-time streaming pipelines with 99.9% uptime",
        "Python, SQL, JavaScript API development",
        "Serverless architecture reducing costs by 40%"
      ],
      certifications: ["Google Cloud Platform Associate Engineer", "AWS Certified"],
      impact: "Processed $3.5M+ in ad spend data with 20% faster reporting cycles"
    },
    {
      category: "Marketing Technology & Analytics",
      icon: HiPresentationChartBar,
      years: "8+",
      highlights: [
        "Google Ads, SA360, DV360, Campaign Manager expertise",
        "Meta Ads & Conversions API implementation",
        "GA4 migration and server-side GTM deployment",
        "Full-funnel tracking increasing revenue attribution by 1.5x",
        "Looker Studio automated dashboards",
        "AI-powered analytics with LangChain integration"
      ],
      certifications: ["Google Ads", "Google Analytics", "GTM", "Meta Blueprint"],
      impact: "Achieved 451% ROAS and 65% conversion rate improvements"
    },
    {
      category: "Performance Marketing & Optimization",
      icon: HiTrendingUp,
      years: "6+",
      highlights: [
        "Managed $3.5M+ annual ad budgets across platforms",
        "Programmatic advertising (DV360, CM360)",
        "Automated bidding strategies with CRM integration",
        "Cross-channel attribution modeling",
        "A/B testing frameworks improving CTR by 82%",
        "Brand uplift campaigns with HTML5 creatives"
      ],
      certifications: ["Google Ads", "Microsoft Ads", "DV360", "Facebook Blueprint"],
      impact: "82% course admissions through digital marketing strategies"
    }
  ];

  const techStack = {
    "Cloud & Infrastructure": ["Google Cloud Platform", "AWS", "Azure", "Kubernetes", "Docker"],
    "Data & Analytics": ["BigQuery", "Snowflake", "Apache Airflow", "Pandas", "DBT"],
    "Marketing Platforms": ["Google Ads", "SA360", "DV360", "Meta Ads", "Microsoft Ads"],
    "Development": ["Python", "JavaScript", "React", "Node.js", "SQL", "APIs"],
    "Analytics Tools": ["GA4", "GTM", "Looker Studio", "Tableau", "Power BI"],
    "AI & Automation": ["LangChain", "OpenAI", "Cloud Functions", "Composer"]
  };

  return (
    <section id="expertise" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Deep Technical Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Combined expertise from leading enterprise implementations at War Room, Google, Microsoft, and Accenture
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-3 mr-4">
                    <area.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{area.category}</h3>
                    <p className="text-blue-400">{area.years} Years Experience</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">Key Capabilities</h4>
                  <ul className="space-y-2">
                    {area.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-400">
                        <HiCheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-300 mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.certifications.map((cert, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg border border-blue-700/30">
                    <p className="text-sm font-semibold text-blue-400 mb-1">Proven Impact</p>
                    <p className="text-gray-300 text-sm">{area.impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Technology Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, tools], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h4 className="text-lg font-semibold text-blue-400 mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;