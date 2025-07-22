import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay, HiCheckCircle } from 'react-icons/hi';
import ContactForm from '../ContactForm/ContactForm';

const HeroSection = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.645, 0.045, 0.355, 1],
            },
        },
    };

    const floatingVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const trustMetrics = [
        { label: "9+ Years Experience", icon: HiCheckCircle },
        { label: "100+ Implementations", icon: HiCheckCircle },
        { label: "Trusted by Leading Agencies", icon: HiCheckCircle },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.2, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-20"
                />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-50" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
                }} />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-sm text-blue-300 font-medium">Now accepting Q1 2025 projects</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1 
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Turn Your Marketing Data Into{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Revenue-Driving Intelligence
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p 
                        variants={itemVariants}
                        className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        I build AI-powered data pipelines and implement bulletproof tracking systems that give you the insights your competition doesn't have.
                    </motion.p>

                    {/* Supporting Text */}
                    <motion.p 
                        variants={itemVariants}
                        className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
                    >
                        From GA4 setup to custom BigQuery dashboards with AI assistants — I help ambitious brands make data-driven decisions that actually move the needle.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <button
                            onClick={() => setIsContactFormOpen(true)}
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 flex items-center gap-2"
                        >
                            <span>Book Your Strategy Call</span>
                            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                        </button>

                        <a
                            href="#case-studies"
                            className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-semibold rounded-lg border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 flex items-center gap-2"
                        >
                            <HiPlay className="w-5 h-5" />
                            <span>See It In Action</span>
                        </a>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div variants={itemVariants}>
                        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                            {trustMetrics.map((metric, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <metric.icon className="w-5 h-5 text-green-400" />
                                    <span>{metric.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-sm text-gray-500">
                            🇨🇦 Vancouver-based • Serving clients across North America
                        </div>
                    </motion.div>

                    {/* Floating Cards Preview */}
                    <motion.div 
                        variants={floatingVariants}
                        animate="animate"
                        className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden xl:block"
                    >
                        <div className="bg-gray-800/80 backdrop-blur-md p-4 rounded-lg shadow-xl border border-gray-700 transform rotate-6">
                            <div className="text-xs text-gray-400 mb-1">Real-time Analytics</div>
                            <div className="text-2xl font-bold text-white">+47% ROAS</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={floatingVariants}
                        animate="animate"
                        className="absolute -left-20 top-1/3 hidden xl:block"
                        style={{ animationDelay: '2s' }}
                    >
                        <div className="bg-gray-800/80 backdrop-blur-md p-4 rounded-lg shadow-xl border border-gray-700 transform -rotate-6">
                            <div className="text-xs text-gray-400 mb-1">AI Insights</div>
                            <div className="text-2xl font-bold text-white">10hrs/week saved</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
                    <div className="w-1 h-2 bg-gray-600 rounded-full mx-auto animate-bounce" />
                </div>
            </motion.div>

            {/* Contact Form Modal */}
            <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
        </section>
    );
};

export default HeroSection;