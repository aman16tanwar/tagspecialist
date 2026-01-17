import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Code2, 
  Sparkles, 
  ArrowRight,
  Settings,
  Database,
  Cpu,
  Globe
} from 'lucide-react';
import { HiCheckCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const ServicesOverview = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: BarChart3,
      title: "Technical Marketing Implementation",
      description: "Complete GA4, GTM, and server-side tracking setup. From pixel implementation to conversion API integration.",
      features: [
        "GA4 Migration & Setup",
        "GTM Container Management",
        "Server-Side Tracking",
        "Conversion APIs",
        "Enhanced E-commerce",
        "Custom Event Tracking"
      ],
      color: "blue",
      link: "/services/technical-marketing"
    },
    {
      icon: Database,
      title: "Data Engineering & Pipelines",
      description: "Build scalable data infrastructure with modern cloud technologies. Real-time processing and warehouse optimization.",
      features: [
        "Cloud Run Pipelines",
        "BigQuery Architecture",
        "Apache Airflow DAGs",
        "Python ETL/ELT",
        "Real-time Streaming",
        "Data Warehouse Design"
      ],
      color: "green",
      link: "/services/data-engineering"
    },
    {
      icon: Sparkles,
      title: "GenAI Analytics Solutions",
      description: "Leverage AI for automated insights, predictive analytics, and intelligent data processing.",
      features: [
        "AI-Powered Dashboards",
        "Automated Reporting",
        "Predictive Analytics",
        "Natural Language Queries",
        "Anomaly Detection",
        "Smart Recommendations"
      ],
      color: "purple",
      link: "/services/genai-analytics"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        hover: "hover:bg-blue-100",
        gradient: "from-blue-600 to-blue-700"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-600",
        hover: "hover:bg-green-100",
        gradient: "from-green-600 to-green-700"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        hover: "hover:bg-purple-100",
        gradient: "from-purple-600 to-purple-700"
      }
    };
    return colors[color];
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Settings className="w-4 h-4" />
            <span>What We Do</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            End-to-End Data Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tracking implementation to AI-powered insights, we provide comprehensive 
            solutions that transform how you collect, process, and leverage data.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`h-full bg-white rounded-2xl border ${colors.border} p-8 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                     onClick={() => navigate(service.link)}>
                  {/* Icon */}
                  <div className={`inline-flex p-3 ${colors.bg} rounded-xl mb-6`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center mt-0.5`}>
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`} />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                    <span className={`${colors.text}`}>Learn More</span>
                    <ArrowRight className={`w-4 h-4 ${colors.text}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-navy-900 to-blue-900 rounded-3xl p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-black mb-6">
                Not Sure Where to Start?
                </h3>
                <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
                Book a FREE 15-minute audit to identify your biggest tracking gaps and ROI opportunities.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                    <div className="flex items-center gap-3 text-sm font-bold text-blue-200">
                        <HiCheckCircle className="text-green-400 text-xl" /> Tracking Gap Analysis
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-blue-200">
                        <HiCheckCircle className="text-green-400 text-xl" /> ROI Opportunity Sizing
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-blue-200">
                        <HiCheckCircle className="text-green-400 text-xl" /> Package Recommendation
                    </div>
                </div>
                <button
                onClick={() => {
                    const event = new CustomEvent('openContactForm', { detail: { service: 'Free Audit' } });
                    window.dispatchEvent(event);
                }}
                className="px-10 py-5 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-500 transition-all duration-200 inline-flex items-center gap-3 uppercase tracking-widest shadow-xl hover:shadow-blue-500/25"
                >
                Book Free 15-Min Audit
                <ArrowRight className="w-5 h-5" />
                </button>
            </div>
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;