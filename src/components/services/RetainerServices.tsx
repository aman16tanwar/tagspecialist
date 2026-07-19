'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    HiCheckCircle,
    HiLightningBolt
} from 'react-icons/hi';

interface RetainerPackage {
    name: string;
    roi: string;
    value: string;
    description: string;
    hours: string;
    features: string[];
    recommended?: boolean;
    recommendedTag?: string;
}

const RetainerServices: React.FC = () => {

    const packages: RetainerPackage[] = [
        {
            name: "Essentials Retainer",
            roi: "Ensure 100% data uptime",
            value: "The cost of 1 junior analyst, but you get two senior specialists monitoring your data 24/7 + world-class infrastructure.",
            description: "Best for: Businesses with stable tracking needs wanting ongoing peace of mind.",
            hours: "Up to 10 hours",
            features: [
                "Monthly performance monitoring",
                "Tag troubleshooting & fixes",
                "Basic reporting & insights",
                "Conversion tracking optimization",
                "Email support (48-hour response)",
                "Quarterly strategy call"
            ]
        },
        {
            name: "Growth Retainer",
            roi: "Designed to pay for itself in ad savings",
            value: "Less than one day of lost revenue from poor tracking decisions. Our proactive optimization typically pays for itself in week 1.",
            description: "Best for: High-growth brands launching regular campaigns and optimizing for scale.",
            hours: "Up to 25 hours",
            recommended: true,
            recommendedTag: "BEST VALUE: Most clients transition here after setup",
            features: [
                "Everything in Essentials, PLUS:",
                "Proactive optimization recommendations",
                "New tracking implementation (2-3/mo)",
                "Monthly data quality audits",
                "Priority support (24-hour response)",
                "Bi-weekly strategy calls (30 min)"
            ]
        },
        {
            name: "Scale Retainer",
            roi: "Your Technical Co-founder for data",
            value: "Your technical co-founder for data—without equity or benefits. Full senior team for the cost of 1.5 hires.",
            description: "Best for: Enterprise organizations needing elite data engineering and strategic insight.",
            hours: "Up to 50 hours",
            features: [
                "Everything in Growth, PLUS:",
                "Advanced attribution modeling",
                "Predictive analytics & ML insights",
                "Custom BigQuery analysis",
                "Dedicated Slack channel",
                "Weekly strategy calls (1 hour)"
            ]
        }
    ];

    return (
        <section id="retainers" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
                        <HiLightningBolt className="w-4 h-4" />
                        <span>Monthly Strategy Retainers</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-4 uppercase tracking-tighter">
                        Scale Your Data Operations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        Choose a partnership level that matches your growth stage. No account managers. Just direct access to the specialists doing the work.
                    </p>
                </motion.div>

                {/* Packages Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {packages.map((pkg, index) => {
                        const id = pkg.name.toLowerCase().split(' ')[0];
                        return (
                            <motion.div
                                key={index}
                                id={id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative bg-white rounded-3xl border-2 ${pkg.recommended ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-gray-200 shadow-sm'} p-8 hover:border-blue-400 transition-all duration-300 flex flex-col relative`}
                            >
                                {pkg.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                                        {pkg.recommendedTag}
                                    </div>
                                )}

                                <div className={`text-center mb-8 ${pkg.recommended ? 'pt-6' : ''}`}>
                                    <h3 className="text-2xl font-black text-navy-900 mb-3 uppercase tracking-tight">{pkg.name}</h3>
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-black text-xs mb-4 uppercase tracking-[0.2em]">
                                        {pkg.hours} / month
                                    </div>
                                    <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg mb-4 text-left">
                                        <p className="text-[10px] font-black text-blue-800 leading-relaxed uppercase mb-1">ROI / Value</p>
                                        <p className="text-[11px] font-bold text-blue-700 leading-tight">{pkg.value}</p>
                                    </div>
                                    <p className="text-[11px] text-gray-500 font-bold italic px-4 leading-normal">
                                        {pkg.description}
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow border-t border-gray-100 pt-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <HiCheckCircle className={`w-5 h-5 flex-shrink-0 ${pkg.recommended ? 'text-blue-600' : 'text-blue-500'}`} />
                                            <span className="text-sm text-navy-900 font-bold leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/book-audit"
                                    className={`block w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all duration-200 text-center ${
                                        pkg.recommended
                                        ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/25'
                                        : 'bg-navy-900 text-white hover:bg-navy-800 shadow-md'
                                    }`}
                                >
                                    Book Consultation
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Final CTA Section */}
                <div className="bg-navy-900 rounded-[3rem] p-10 lg:p-20 text-center relative overflow-hidden shadow-2xl border border-white/5">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-500/20">
                            <HiLightningBolt /> Scale Stage Ready
                        </div>
                        <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">
                            Ready to Transform <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Your Marketing Data?
                            </span>
                        </h3>
                        <p className="text-blue-100/80 mb-12 max-w-3xl mx-auto text-lg lg:text-xl font-medium leading-relaxed">
                            One client went from 2.1x to 9.5x ROAS in 6 months—$200K+ additional monthly revenue from accurate attribution and optimization. <br className="hidden md:block" />
                            Let&apos;s discuss what we can do for your business.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                            <Link
                                href="/book-audit"
                                className="inline-block px-12 py-6 bg-orange-500 text-white font-black rounded-xl hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-500/40 uppercase tracking-[0.2em] text-sm"
                            >
                                Book Free Data Audit
                            </Link>
                            <Link
                                href="/case-studies"
                                className="px-12 py-6 bg-white/5 text-white font-black rounded-xl hover:bg-white/10 transition-all border border-white/20 uppercase tracking-[0.2em] text-sm backdrop-blur-sm"
                            >
                                View Case Studies
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-xs font-black uppercase tracking-[0.2em] text-blue-200/40 border-t border-white/10 pt-12">
                            <div className="flex items-center justify-center gap-2">
                                <HiCheckCircle className="text-blue-400 text-lg" /> 15-Min Consultation
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <HiCheckCircle className="text-blue-400 text-lg" /> No sales pitch
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <HiCheckCircle className="text-blue-400 text-lg" /> Direct Expert Access
                            </div>
                        </div>
                    </div>
                    {/* Background Orbs */}
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
                </div>
            </div>
        </section>
    );
};

export default RetainerServices;
