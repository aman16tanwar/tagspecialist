import React from 'react';
import { motion } from 'framer-motion';
import { 
    HiDatabase, HiChartBar, HiLightningBolt, HiDesktopComputer,
    HiChip, HiCode, HiShieldCheck, HiCursorClick,
    HiClock, HiTrendingUp, HiBeaker, HiPuzzle
} from 'react-icons/hi';
import { FaRobot, FaServer } from 'react-icons/fa';

const ServicesSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.645, 0.045, 0.355, 1],
            },
        },
    };

    const aiInfrastructureServices = [
        {
            icon: HiDatabase,
            title: "Custom Data Pipelines",
            description: "Automatically sync Shopify, Meta Ads, and Google Ads data to BigQuery in real-time",
            highlight: "Real-time sync"
        },
        {
            icon: FaRobot,
            title: "AI Analytics Assistant",
            description: "Ask questions in plain English, get SQL queries and insights instantly",
            highlight: "Natural language"
        },
        {
            icon: HiChartBar,
            title: "Predictive Dashboards",
            description: "Looker Studio dashboards that forecast trends and highlight opportunities",
            highlight: "Predictive analytics"
        },
        {
            icon: HiLightningBolt,
            title: "Automated Reporting",
            description: "Daily/weekly insights delivered to Slack or email, no manual work needed",
            highlight: "Zero maintenance"
        },
        {
            icon: HiChip,
            title: "Data Warehouse Setup",
            description: "Professional BigQuery architecture that scales with your business",
            highlight: "Scalable design"
        }
    ];

    const trackingServices = [
        {
            icon: HiCode,
            title: "GA4 Migration & Setup",
            description: "Full implementation with enhanced ecommerce and custom events",
            highlight: "Complete migration"
        },
        {
            icon: FaServer,
            title: "Server-Side Tracking",
            description: "Bypass iOS restrictions with server-side GTM on Google Cloud",
            highlight: "iOS-proof"
        },
        {
            icon: HiShieldCheck,
            title: "Conversion API Setup",
            description: "Meta CAPI and Google Enhanced Conversions for 30%+ better attribution",
            highlight: "+30% accuracy"
        },
        {
            icon: HiCursorClick,
            title: "Cross-Platform Tracking",
            description: "Unified customer journey from ads to CRM to lifetime value",
            highlight: "End-to-end view"
        },
        {
            icon: HiTrendingUp,
            title: "Technical SEO Analytics",
            description: "Core Web Vitals monitoring and page performance tracking",
            highlight: "Performance tracking"
        }
    ];

    const ServiceCard = ({ service, index }) => (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                        <span className="inline-flex items-center text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                            {service.highlight}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="services" className="relative py-20 bg-gray-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-50" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dots' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.05)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dots)' /%3E%3C/svg%3E")`
            }} />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Two Ways I Transform Your{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                Data Operations
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Choose the solution that fits your current needs, or combine both for maximum impact
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* AI-Powered Data Infrastructure */}
                        <motion.div variants={itemVariants}>
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                        <HiBeaker className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">AI-Powered Data Infrastructure</h3>
                                        <p className="text-gray-400">Build a competitive advantage with automated intelligence</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {aiInfrastructureServices.map((service, index) => (
                                    <ServiceCard key={index} service={service} index={index} />
                                ))}
                            </div>

                            <motion.div 
                                variants={itemVariants}
                                className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <HiClock className="w-5 h-5 text-blue-400" />
                                    <span className="text-sm font-semibold text-blue-400">Typical Timeline</span>
                                </div>
                                <p className="text-gray-300">4-8 weeks from kickoff to full deployment</p>
                            </motion.div>
                        </motion.div>

                        {/* Bulletproof Tracking Implementation */}
                        <motion.div variants={itemVariants}>
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                                        <HiPuzzle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Bulletproof Tracking Implementation</h3>
                                        <p className="text-gray-400">Never miss a conversion or waste ad spend on bad data</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {trackingServices.map((service, index) => (
                                    <ServiceCard key={index} service={service} index={index} />
                                ))}
                            </div>

                            <motion.div 
                                variants={itemVariants}
                                className="mt-8 p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-xl"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <HiClock className="w-5 h-5 text-indigo-400" />
                                    <span className="text-sm font-semibold text-indigo-400">Typical Timeline</span>
                                </div>
                                <p className="text-gray-300">1-2 weeks for complete implementation</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* CTA Section */}
                    <motion.div 
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <p className="text-lg text-gray-400 mb-6">
                            Not sure which solution is right for you?
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
                        >
                            Let's Discuss Your Needs
                            <HiLightningBolt className="w-5 h-5" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;