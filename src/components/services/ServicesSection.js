import React from 'react';
import { motion } from 'framer-motion';
import { 
    HiDatabase, 
    HiLightningBolt,
    HiCheckCircle,
    HiArrowRight,
    HiTag,
    HiShieldCheck,
    HiCog,
    HiChip,
    HiGlobeAlt,
    HiPresentationChartLine
} from 'react-icons/hi';

const ServicesSection = () => {
    const services = [
        {
            title: "Full Tracking & Attribution Fix",
            icon: HiCheckCircle, // Changed icon to reflect 'fix'
            iconColor: "text-red-600",
            bgColor: "bg-red-50",
            borderColor: "hover:border-red-400",
            buttonColor: "bg-red-600 hover:bg-red-700",
            description: "Stop revenue leaks. Get 100% accurate tracking for marketing spend, ensuring every dollar is attributed correctly.",
            features: [
                "Comprehensive GA4 Audit & Setup",
                "Server-Side GTM Build (First-Party Data)",
                "Meta CAPI & Google Ads Conversions API Integration",
                "TikTok Events API & Shopify Checkout Tracking",
                "Advanced Cross-Channel Attribution Models",
                "Real-time Validation Dashboard & Alerts"
            ],
            deliverables: [
                "Fully deployed tracking infrastructure",
                "Custom dataLayer & consent mode setup",
                "SOP documentation & team training",
                "30-day post-launch support & QA"
            ],
            pricing: "$3,000 – $7,500 (one-time)",
            timeline: "2-4 weeks"
        },
        {
            title: "Data Pipeline & Reporting Infrastructure",
            icon: HiDatabase,
            iconColor: "text-blue-600",
            bgColor: "bg-blue-50",
            borderColor: "hover:border-blue-400",
            buttonColor: "bg-blue-600 hover:bg-blue-700",
            description: "Build a single source of truth for all marketing data, powering executive-level insights and automated reporting.",
            features: [
                "GA4 → BigQuery Real-time Pipeline",
                "Shopify/CRM → BigQuery ETL",
                "Automated Attribution & LTV SQL Models",
                "Custom Executive Dashboards (Looker Studio/PowerBI)",
                "Proactive Data Quality Monitoring & Alerts",
                "AI-Driven Anomaly Detection & Insights"
            ],
            deliverables: [
                "Production-ready BigQuery data warehouse",
                "Custom SQL transformations & models",
                "Automated reporting dashboards",
                "Documentation & ongoing optimization plan"
            ],
            pricing: "$5,000 – $15,000 (one-time)",
            timeline: "4-8 weeks"
        },
        {
            title: "Monthly Technical Retainer",
            icon: HiLightningBolt, // Reusing existing icon, but could be HiSupport
            iconColor: "text-green-600", // Using green for ongoing
            bgColor: "bg-green-50",
            borderColor: "hover:border-green-400",
            buttonColor: "bg-green-600 hover:bg-green-700",
            description: "Ongoing partnership for continuous optimization, incident response, and strategic evolution of your MarTech stack.",
            features: [
                "Proactive Monitoring & Incident Response",
                "Continuous GTM & GA4 Updates",
                "New Event Tracking & Parameter Implementation",
                "ETL Pipeline Maintenance & Expansion",
                "Monthly Performance Reporting & Insights",
                "AI Automation Workflows & Experimentation"
            ],
            deliverables: [
                "Dedicated technical support & SLA",
                "Monthly strategy & optimization calls",
                "Access to proprietary tools & templates",
                "Proactive recommendations for growth"
            ],
            pricing: "$2,000 – $6,000/month",
            timeline: "Ongoing"
        }
    ];

    const additionalServices = [
        {
            icon: HiTag,
            title: "Google Ads & DV360 Management",
            description: "Advanced campaign strategy, optimization, and bidding for maximum ROAS."
        },
        {
            icon: HiShieldCheck,
            title: "Privacy & Compliance Consulting",
            description: "GDPR/CCPA audits, consent management, and data governance strategy."
        },
        {
            icon: HiCog,
            title: "Custom AI Automation Workflows",
            description: "Leverage AI for tasks like anomaly detection, forecasting, and content generation."
        },
        {
            icon: HiChip,
            title: "Custom API & Webhook Integrations",
            description: "Build bespoke connections between your marketing tools and data platforms."
        },
        {
            icon: HiGlobeAlt,
            title: "Multi-Region & Global Rollouts",
            description: "Expand your tracking and data infrastructure to new markets and languages."
        },
        {
            icon: HiPresentationChartLine,
            title: "Executive-Level BI Dashboards",
            description: "Design and implement actionable dashboards for C-suite decision-making."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                        Technical Marketing Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From tracking implementation to AI automation. Choose standalone services or combine them for a complete marketing technology stack.
                    </p>
                </motion.div>

                {/* Main Services Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-3 gap-8 mb-16"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`bg-gray-50 rounded-lg p-6 border border-gray-200 ${service.borderColor} transition-all duration-300 group`}
                        >
                            {/* Service Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 ${service.bgColor} rounded-lg border border-gray-200`}>
                                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                                </div>
                                <span className={`text-sm font-semibold ${service.iconColor}`}>
                                    {service.timeline}
                                </span>
                            </div>

                            {/* Service Title & Description */}
                            <h3 className="text-2xl font-bold text-navy-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">What's Included</h4>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <HiCheckCircle className={`w-5 h-5 ${service.iconColor} mt-0.5 flex-shrink-0`} />
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Deliverables */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Deliverables</h4>
                                <ul className="space-y-1">
                                    {service.deliverables.map((deliverable, idx) => (
                                        <li key={idx} className="text-sm text-gray-600">
                                            • {deliverable}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pricing & CTA */}
                            <div className="pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl font-bold text-navy-900">
                                        {service.pricing}
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
                                        const event = new CustomEvent('openContactForm', { 
                                            detail: { service: service.title } 
                                        });
                                        window.dispatchEvent(event);
                                    }}
                                    className={`w-full px-4 py-3 ${service.buttonColor} text-white font-semibold rounded-sm transition-all duration-200 flex items-center justify-center gap-2 group uppercase text-sm tracking-wide`}
                                >
                                    <span>Get Started</span>
                                    <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Services */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-8 border border-gray-200"
                >
                    <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
                        Additional Services & Capabilities
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additionalServices.map((service, index) => (
                            <div key={index} className="flex gap-3">
                                <div className="p-2 bg-white border border-gray-200 rounded-lg h-fit">
                                    <service.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="text-navy-900 font-semibold mb-1">{service.title}</h4>
                                    <p className="text-sm text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Service Packages CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="bg-navy-50 rounded-lg p-8 border border-navy-100">
                        <h3 className="text-2xl font-bold text-navy-900 mb-4">
                            Looking for a Complete Solution?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Combine services for a full marketing technology transformation. Get custom packages tailored to your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => {
                                    const event = new CustomEvent('openContactForm', { 
                                        detail: { service: 'Custom Package' } 
                                    });
                                    window.dispatchEvent(event);
                                }}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-sm transition-all duration-200 uppercase text-sm tracking-wide"
                            >
                                Get Custom Quote
                            </button>
                            <a
                                href="/case-studies"
                                className="px-6 py-3 bg-white hover:bg-gray-50 text-navy-900 font-semibold rounded-sm border border-gray-300 transition-all duration-200 uppercase text-sm tracking-wide"
                            >
                                View Case Studies
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
