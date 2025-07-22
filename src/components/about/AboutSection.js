import React from 'react';
import { motion } from 'framer-motion';
import { 
    HiClock, HiBriefcase, HiUserGroup,
    HiCheckCircle, HiLightningBolt, HiGlobeAlt, HiMail
} from 'react-icons/hi';
import { FaFacebook, FaAws, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglecloud, SiGoogleanalytics } from 'react-icons/si';

const AboutSection = () => {
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

    const certifications = [
        { name: "Google Analytics Certified", icon: SiGoogleanalytics, color: "text-orange-400" },
        { name: "Meta Marketing Science", icon: FaFacebook, color: "text-blue-400" },
        { name: "Google Cloud Data Engineer", icon: SiGooglecloud, color: "text-blue-500" },
        { name: "AWS Solutions Architect", icon: FaAws, color: "text-yellow-500" }
    ];

    const milestones = [
        { year: "2016", event: "Started with basic Google Analytics implementations" },
        { year: "2018", event: "Mastered server-side tracking and GTM" },
        { year: "2020", event: "Expanded into BigQuery and data engineering" },
        { year: "2023", event: "Built first AI-powered analytics assistant" },
        { year: "2025", event: "Leading the charge in AI-driven marketing analytics" }
    ];

    const values = [
        {
            icon: HiLightningBolt,
            title: "Speed & Efficiency",
            description: "I deliver solutions fast without compromising quality"
        },
        {
            icon: HiCheckCircle,
            title: "Accuracy First",
            description: "If you can't trust the data, nothing else matters"
        },
        {
            icon: HiUserGroup,
            title: "True Partnership",
            description: "Your success is my success - I'm invested in your growth"
        }
    ];

    return (
        <section id="about" className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-50" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid-pattern' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid-pattern)' /%3E%3C/svg%3E")`
                }} />
            </div>

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
                            Hi, I'm Aman —{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                Your Data Implementation Partner
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Story */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            {/* Main Story */}
                            <div className="prose prose-lg prose-invert">
                                <p className="text-gray-300 leading-relaxed">
                                    For 9+ years, I've been in the trenches helping businesses turn messy data into clear decisions.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Started with basic Google Analytics setups. Now I build AI-powered data systems that make CMOs look like heroes.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    I've implemented tracking for 100+ businesses — from Shopify stores doing $50K/month to agencies managing $10M in ad spend.
                                </p>
                                <p className="text-gray-300 leading-relaxed font-semibold">
                                    My philosophy is simple: If you can't measure it properly, you can't improve it. And if analyzing it takes hours, you need better tools.
                                </p>
                            </div>

                            {/* Values */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white mb-4">What Drives Me</h3>
                                {values.map((value, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="flex items-start gap-4 p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg"
                                    >
                                        <value.icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                                            <p className="text-gray-400 text-sm">{value.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Personal Touch */}
                            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-6">
                                <p className="text-gray-300 italic mb-4">
                                    "When I'm not building data pipelines or debugging tracking pixels, you'll find me exploring the latest in AI and sharing insights with my newsletter community."
                                </p>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <HiGlobeAlt className="w-4 h-4" />
                                    <span>Based in Vancouver, BC, Canada • Serving clients globally</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Credentials */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            {/* Certifications */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">Certifications & Expertise</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {certifications.map((cert, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 flex items-center gap-3"
                                        >
                                            <cert.icon className={`w-8 h-8 ${cert.color}`} />
                                            <span className="text-sm text-gray-300">{cert.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Timeline */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">Journey Milestones</h3>
                                <div className="space-y-4">
                                    {milestones.map((milestone, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="flex gap-4"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 pt-3">
                                                <p className="text-gray-300">{milestone.event}</p>
                                                {index < milestones.length - 1 && (
                                                    <div className="w-px h-8 bg-gray-700 ml-6 mt-2" />
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Community Involvement */}
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Active in the Community</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span>Regular contributor to GA4 forums</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span>Speaker at marketing analytics events</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span>Open source data tools contributor</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Connect */}
                            <div className="flex gap-4 justify-center">
                                <a
                                    href="https://linkedin.com/in/amantagspecialist"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <FaLinkedin className="w-6 h-6 text-blue-400" />
                                </a>
                                <a
                                    href="https://github.com/amantagspecialist"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <FaGithub className="w-6 h-6 text-gray-400" />
                                </a>
                                <a
                                    href="mailto:aman@tagspecialist.ca"
                                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <HiMail className="w-6 h-6 text-gray-400" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Stats */}
                    <motion.div 
                        variants={itemVariants}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700"
                    >
                        {[
                            { icon: HiClock, value: "9+ Years", label: "Experience" },
                            { icon: HiBriefcase, value: "100+", label: "Projects Completed" },
                            { icon: HiUserGroup, value: "$50M+", label: "Ad Spend Tracked" },
                            { icon: HiGlobeAlt, value: "5 Countries", label: "Clients Worldwide" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <p className="text-sm text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;