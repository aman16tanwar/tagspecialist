import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Tag, 
  Server, 
  Zap, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Code2,
  Database,
  Settings,
  TrendingUp
} from 'lucide-react';

const TechnicalMarketingServices = () => {
  const services = [
    {
      icon: BarChart3,
      title: "GA4 Implementation & Migration",
      description: "Complete Google Analytics 4 setup with advanced configuration",
      features: [
        "Full GA4 property setup and configuration",
        "Universal Analytics to GA4 migration",
        "Enhanced e-commerce tracking",
        "Custom dimensions and metrics",
        "Audience creation and segmentation",
        "Cross-domain tracking setup",
        "Consent mode v2 implementation",
        "Server-side GA4 configuration"
      ]
    },
    {
      icon: Tag,
      title: "Google Tag Manager Excellence",
      description: "Advanced GTM container management and optimization",
      features: [
        "GTM container setup and organization",
        "Custom JavaScript variables",
        "Advanced trigger configuration",
        "Data layer implementation",
        "Container version control",
        "Debug mode and testing protocols",
        "Template creation and management",
        "Container migration and backup"
      ]
    },
    {
      icon: Server,
      title: "Server-Side Tracking",
      description: "First-party data collection for maximum accuracy",
      features: [
        "Server-side GTM deployment",
        "Google Cloud Platform setup",
        "Custom domain configuration",
        "Client-side to server-side migration",
        "Enhanced conversions setup",
        "Cookie lifetime extension",
        "Ad blocker bypass strategies",
        "GDPR compliant implementation"
      ]
    },
    {
      icon: Zap,
      title: "Conversion API Integration",
      description: "Direct server-to-server tracking for all platforms",
      features: [
        "Meta (Facebook) Conversion API",
        "Google Ads Enhanced Conversions",
        "TikTok Events API",
        "Pinterest Conversion API",
        "LinkedIn Conversion API",
        "Snapchat Conversion API",
        "Custom API integrations",
        "Deduplication strategies"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Audit",
      description: "Comprehensive review of your current tracking setup, identifying gaps and opportunities for improvement."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a customized implementation roadmap aligned with your business objectives and KPIs."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Expert setup of all tracking components with rigorous testing and quality assurance."
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Thorough testing across all scenarios to ensure accurate data collection."
    },
    {
      step: "05",
      title: "Documentation & Training",
      description: "Comprehensive documentation and team training for ongoing management."
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "Continuous monitoring, optimization, and support to maintain tracking accuracy."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Privacy Compliant",
      description: "GDPR, CCPA, and cookie consent ready implementations"
    },
    {
      icon: TrendingUp,
      title: "Better Attribution",
      description: "Accurate conversion tracking across all touchpoints"
    },
    {
      icon: Database,
      title: "Data Quality",
      description: "Clean, structured data ready for analysis and activation"
    },
    {
      icon: Zap,
      title: "Real-Time Insights",
      description: "Instant data flow for immediate decision making"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              <span>Technical Marketing Services</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional Marketing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Analytics Implementation
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert GA4, GTM, and server-side tracking implementation. 
              Get accurate, privacy-compliant data collection that drives better marketing decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const event = new CustomEvent('openContactForm');
                  window.dispatchEvent(event);
                }}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 inline-flex items-center gap-2"
              >
                Start Your Implementation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById('services-detail')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-all duration-200"
              >
                View Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="services-detail" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Technical Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tracking solutions that capture every interaction and conversion
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful tracking implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 h-full border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-4 opacity-20">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Implementation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Fix Your Tracking?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get accurate data that drives better marketing decisions
            </p>
            <button
              onClick={() => {
                const event = new CustomEvent('openContactForm');
                window.dispatchEvent(event);
              }}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 inline-flex items-center gap-2"
            >
              Schedule Implementation Call
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalMarketingServices;