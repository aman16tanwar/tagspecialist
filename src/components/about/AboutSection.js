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
                    <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-6 leading-tight uppercase tracking-tighter">
                        We're Not an Agency. <br className="hidden md:block" />
                        <span className="text-brand-accent text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">We're Your Data Infrastructure Team.</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                         Small Team. Deep Expertise. Real Business Transformation.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto items-start">
                    
                    {/* Left Column: Bio & Mission */}
                    <motion.div 
                        className="lg:col-span-5 space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-white p-10 rounded-[2rem] border-2 border-gray-100 shadow-xl hover:border-blue-500/30 transition-all group">
                            <h3 className="text-2xl font-black text-brand-primary mb-6 uppercase tracking-tight">
                                Tired of junior staff learning on your dime?
                            </h3>
                            <p className="text-gray-600 font-medium leading-relaxed mb-6">
                                TagSpecialist is a boutique consultancy founded by Lead Data Engineers who got tired of watching generalist agencies fumble complex implementations.
                            </p>
                            <p className="text-gray-600 font-medium leading-relaxed mb-6">
                                <strong className="text-navy-900 uppercase text-sm tracking-widest">No account managers. No middlemen.</strong> <br />
                                Just senior specialists who build enterprise-grade data infrastructure and actually know how to make GTM, BigQuery, and server-side tracking work together.
                            </p>
                            <div className="pt-6 border-t border-gray-100 mt-8">
                                <p className="text-brand-accent font-black text-lg uppercase tracking-tighter">
                                    "When you work with us, you get us."
                                </p>
                            </div>
                        </div>

                        <div className="bg-navy-900 p-8 rounded-2xl border border-navy-800 shadow-2xl relative overflow-hidden">
                             <p className="text-center text-blue-200 font-bold uppercase tracking-widest text-sm relative z-10">
                                Trusted By Brands Managing <br />
                                <span className="text-white text-2xl font-black">$50M+ In Annual Ad Spend</span>
                             </p>
                             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
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
                        <h3 className="text-xl font-black text-brand-primary mb-8 pl-4 border-l-4 border-blue-600 uppercase tracking-widest">
                            Technical Arsenal
                        </h3>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                            {expertise.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5, borderColor: '#2563eb' }}
                                    className="flex items-start p-6 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all group"
                                >
                                    <div className="bg-blue-50 p-4 rounded-xl mr-5 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <item.icon size={24} />
                                    </div>
                                    <span className="text-navy-900 font-bold text-sm leading-snug pt-1 uppercase tracking-tight">
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                            
                            {/* Full Width Item for Final Point */}
                            <motion.div
                                whileHover={{ y: -5, borderColor: '#2563eb' }}
                                className="flex items-start p-6 bg-navy-900 rounded-2xl border border-navy-800 shadow-lg transition-all sm:col-span-2 group"
                            >
                                <div className="bg-blue-600 p-4 rounded-xl mr-5 text-white shadow-lg">
                                    <FaDatabase size={24} />
                                </div>
                                <span className="text-white font-black text-sm leading-snug pt-1 uppercase tracking-widest">
                                    Cross-Channel Performance Data Unification (The Single Source of Truth)
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
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-text-main font-mono text-sm tracking-wider uppercase font-black">
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