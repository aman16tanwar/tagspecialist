import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaPython, FaGoogle, FaServer, FaCode, FaRobot, FaShoppingCart, FaProjectDiagram } from 'react-icons/fa';

const AboutSection = () => {
    const expertise = [
        { icon: FaDatabase, text: "BigQuery Architecture & SQL Engineering" },
        { icon: FaPython, text: "Python ETL Development" },
        { icon: FaGoogle, text: "Google Cloud Platform" },
        { icon: FaCode, text: "GA4 & GTM (Client-Side + Server-Side)" },
        { icon: FaServer, text: "Conversion APIs (Meta, TikTok, LinkedIn, Pinterest)" },
        { icon: FaProjectDiagram, text: "Custom Event Tracking & Attribution Modeling" },
        { icon: FaRobot, text: "LangChain, LLMs & AI Automation Systems" },
        { icon: FaShoppingCart, text: "Shopify Data Pipelines & CRM Integration" },
    ];

    return (
        <section id="about" className="relative py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
                        Meet Your <span className="text-brand-accent">Data Partner</span>
                    </h2>
                    <p className="text-xl text-text-main max-w-3xl mx-auto">
                         Aman — Lead Data Engineer & Marketing Data Architect
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto items-start">
                    
                    {/* Left Column: Bio & Mission */}
                    <motion.div 
                        className="lg:col-span-5 space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-brand-highlight p-8 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="text-2xl font-bold text-brand-primary mb-4">
                                I build the technical foundation behind modern marketing.
                            </h3>
                            <p className="text-text-main leading-relaxed mb-6">
                                From BigQuery pipelines to advanced tracking and AI analytics, I specialize in creating high-performance data systems that eliminate guesswork and fuel confident decision-making.
                            </p>
                            <p className="text-text-main leading-relaxed">
                                My expertise sits at the intersection of engineering, analytics, and digital marketing — enabling brands to run smarter, faster, and with total data clarity.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                             <p className="text-center text-blue-800 font-medium">
                                "Trusted By Agencies & Brands Across E-commerce, SaaS, and Performance Marketing."
                             </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Expertise Grid */}
                    <motion.div 
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-brand-primary mb-8 pl-2 border-l-4 border-brand-accent">
                            Core Expertise
                        </h3>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                            {expertise.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(243, 244, 246, 1)" }}
                                    className="flex items-start p-4 bg-brand-highlight rounded-lg border border-gray-200 hover:border-brand-accent transition-all"
                                >
                                    <div className="bg-white p-3 rounded-md mr-4 text-brand-accent border border-gray-200 shadow-sm">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="text-text-dark font-medium text-sm leading-snug pt-1">
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                            
                            {/* Full Width Item for Final Point */}
                            <motion.div
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(243, 244, 246, 1)" }}
                                className="flex items-start p-4 bg-brand-highlight rounded-lg border border-gray-200 hover:border-brand-accent transition-all sm:col-span-2"
                            >
                                <div className="bg-white p-3 rounded-md mr-4 text-brand-accent border border-gray-200 shadow-sm">
                                    <FaDatabase size={20} />
                                </div>
                                <span className="text-text-dark font-medium text-sm leading-snug pt-1">
                                    Cross-Channel Performance Data Unification
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Ticker / Cleaner Footer Line */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 pt-10 border-t border-gray-200 text-center"
                >
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-text-main font-mono text-sm tracking-wider uppercase">
                        <span>Clean</span>
                        <span className="hidden md:block">•</span>
                        <span>Powerful</span>
                        <span className="hidden md:block">•</span>
                        <span>Credible</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutSection;
