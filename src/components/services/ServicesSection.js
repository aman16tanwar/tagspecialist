import React from 'react';
import { motion } from 'framer-motion';
import { 
    HiChartBar, 
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
            title: "Analytics & Tracking Implementation",
            icon: HiChartBar,
            // Using specific text/bg classes instead of dynamic 'color' prop
            iconColor: "text-blue-600",
            bgColor: "bg-blue-50",
            borderColor: "hover:border-blue-400",
            buttonColor: "bg-blue-600 hover:bg-blue-700",
            description: "End-to-end tracking setup that captures every customer touchpoint with precision and privacy compliance.",
            features: [
                "GA4 & GTM complete setup",
                "Meta Pixel & Conversions API",
                "Server-side tagging (First-party data)",
                "Enhanced eCommerce tracking",
                "Cross-domain tracking",
                "Cookie consent & GDPR/CCPA compliance"
            ],
            deliverables: [
                "Full tracking documentation",
                "Custom dataLayer implementation",
                "QA testing & debugging",
                "30-day support post-launch"
            ],
            pricing: "Starting at $2,500",
            timeline: "5-10 days"
        },
        {
            title: "Marketing Data Engineering",
            icon: HiDatabase,
            iconColor: "text-blue-600",
            bgColor: "bg-blue-50",
            borderColor: "hover:border-blue-400",
            buttonColor: "bg-blue-600 hover:bg-blue-700",
            description: "Transform scattered marketing data into a unified, AI-ready data warehouse with automated pipelines.",
            features: [
                "All marketing channels → BigQuery",
                "Automated data pipelines (Shopify, Meta, Google)",
                "Custom attribution models",
                "ML-powered predictions (LTV, churn)",
                "Real-time reporting dashboards",
                "Data quality monitoring"
            ],
            deliverables: [
                "Complete data infrastructure",
                "Looker Studio dashboards",
                "Documentation & training",
                "Monthly optimization"
            ],
            pricing: "Starting at $5,000 + $500/mo",
            timeline: "2-3 weeks"
        },
        {
            title: "AI & Automation Solutions",
            icon: HiLightningBolt,
            iconColor: "text-blue-600", // Unified accent color
            bgColor: "bg-blue-50",
            borderColor: "hover:border-blue-400",
            buttonColor: "bg-blue-600 hover:bg-blue-700",
            description: "Cutting-edge AI integration with MCP servers and GenAI to automate your marketing operations.",
            features: [
                "MCP servers for GTM/GA4 automation",
                "AI-powered tag debugging",
                "Automated reporting with insights",
                "ChatGPT/Claude integration for analytics",
                "Predictive analytics models",
                "Anomaly detection & alerts"
            ],
            deliverables: [
                "Custom MCP server deployment",
                "AI workflow automation",
                "Training & documentation",
                "Ongoing AI optimization"
            ],
            pricing: "Starting at $10,000",
            timeline: "3-4 weeks"
        }
    ];

    const additionalServices = [
        {
            icon: HiTag,
            title: "Google Ads & DV360",
            description: "Campaign setup, optimization, and advanced bidding strategies"
        },
        {
            icon: HiShieldCheck,
            title: "Privacy & Compliance",
            description: "GDPR/CCPA audits, consent management, data governance"
        },
        {
            icon: HiCog,
            title: "Marketing Automation",
            description: "Workflow automation, lead scoring, customer journey mapping"
        },
        {
            icon: HiChip,
            title: "Custom Integrations",
            description: "API development, webhook setup, third-party connections"
        },
        {
            icon: HiGlobeAlt,
            title: "Multi-region Setup",
            description: "International tracking, multi-currency, language handling"
        },
        {
            icon: HiPresentationChartLine,
            title: "Executive Dashboards",
            description: "C-suite reporting, KPI monitoring, business intelligence"
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
