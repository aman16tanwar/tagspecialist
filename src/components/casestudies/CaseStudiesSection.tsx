'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    HiTrendingUp,
    HiChartBar,
    HiLightningBolt,
    HiShieldCheck,
    HiArrowRight,
    HiCheckCircle
} from 'react-icons/hi';
import { IconType } from 'react-icons';
import { useModal } from '@/contexts/ModalContext';

interface CaseResult {
    label: string;
    value: string;
    icon: IconType;
    color: string;
}

interface MainCase {
    client: string;
    title: string;
    problem: string;
    solution: string[];
    results: CaseResult[];
    testimonial: {
        text: string;
        author: string;
        company: string;
    };
}

interface SupportingCase {
    title: string;
    subtitle: string;
    problem: string;
    solution: string;
    results: string[];
}

const CaseStudiesSection: React.FC = () => {
    const { openContactForm } = useModal();

    const mainCase: MainCase = {
        client: "$50M DTC Fashion Brand",
        title: "451% ROAS Increase via Attribution Infrastructure",
        problem: "$50M DTC Fashion Brand was hemorrhaging $50K monthly due to broken attribution. Their marketing team was flying blind—Meta and Google Ads both claimed credit for the same conversions, making it impossible to optimize spend or scale profitably.",
        solution: [
            "Implemented First-Party data stitching to map the complete customer journey",
            "Created cross-platform attribution models using BigQuery ML",
            "Built real-time dashboards showing true incremental lift by channel",
            "Deployed server-side conversion tracking to bypass iOS 14.5 limitations"
        ],
        results: [
            { label: "ROAS Increase", value: "451%", icon: HiTrendingUp, color: "text-green-600" },
            { label: "Attribution Accuracy", value: "+38%", icon: HiShieldCheck, color: "text-blue-600" },
            { label: "Monthly Revenue", value: "+$200K", icon: HiChartBar, color: "text-purple-600" }
        ],
        testimonial: {
            text: "Tag Specialist transformed our data infrastructure. For the first time in two years, we finally know exactly where our next dollar should be spent. The ROI was immediate and massive.",
            author: "VP of Marketing",
            company: "$50M+ DTC Fashion Brand"
        }
    };

    const supportingCases: SupportingCase[] = [
        {
            title: "Scaled Agency to 70+ Clients (Zero Data Team Overhead)",
            subtitle: "DATA WAREHOUSE AUTOMATION",
            problem: "Growing agency was spending 2 days per client on monthly reporting. Hiring more analysts was eating all margins. Client churn was increasing due to slow insights.",
            solution: "Built automated BigQuery data lake pulling from Google Ads, Meta, GA4, Shopify, and CRM. Created templated Looker Studio dashboards with automated alerts.",
            results: [
                "100+ hours saved monthly on reporting",
                "Reporting down from 2 days to 2 hours per client",
                "Enabled agency to scale from 45 to 70+ clients with same team",
                "$180K annual cost savings vs. hiring 2 analysts"
            ]
        },
        {
            title: "AI-Driven Insights for Global Resort Brand",
            subtitle: "GENAI ANALYTICS AGENT",
            problem: "Executive team couldn't get answers from data without waiting 48 hours for a data analyst. Strategic decisions were being delayed by data access bottlenecks.",
            solution: "Built custom AI analytics agent powered by BigQuery + OpenAI. Natural language interface allows executives to ask questions and get instant visualizations.",
            results: [
                "30% faster strategic decision making",
                "Instant data accessibility for entire leadership team",
                "90% reduction in 'data request' tickets to analytics team",
                "$120K saved in analyst time redirected to strategic projects"
            ]
        },
        {
            title: "First-Party Data Strategy for B2B SaaS",
            subtitle: "SERVER-SIDE TAGGING FIX",
            problem: "iOS 14.5 and ad-blockers caused 40% signal loss on LinkedIn and Meta campaigns. Cost per qualified lead jumped 60% in 6 months. Attribution was broken.",
            solution: "Migrated to server-side GTM with custom subdomain setup. Implemented enhanced conversions and CAPI. Built first-party identity graph in BigQuery.",
            results: [
                "40% increase in conversion signal capture",
                "CPL decreased 35% after better optimization",
                "$15K monthly saved in wasted ad spend",
                "Full compliance with GDPR and privacy regulations"
            ]
        }
    ];

    const trustBadges: string[] = [
        "3 eight-figure e-commerce brands",
        "5 performance marketing agencies",
        "2 B2B SaaS companies scaling to IPO"
    ];

    return (
        <section id="results" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6">
                        Real Clients. <span className="text-blue-600">Real Revenue Growth.</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We build data infrastructure that directly impacts your bottom line—not just dashboards that look pretty. Every system we engineer is designed to increase attribution accuracy, reduce wasted ad spend, and scale your data operations.
                    </p>
                </div>

                {/* Hero Case Study */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto mb-16 bg-navy-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
                >
                    <div className="lg:w-3/5 p-8 lg:p-12 text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-bold mb-6 uppercase tracking-wider border border-blue-500/30">
                            <HiLightningBolt /> Featured Result
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
                            {mainCase.title}
                        </h3>

                        <div className="space-y-8 mb-10">
                            <div>
                                <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-8 h-px bg-blue-400/30"></span> The Challenge
                                </h4>
                                <p className="text-gray-300 text-lg leading-relaxed">{mainCase.problem}</p>
                            </div>
                            <div>
                                <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-8 h-px bg-blue-400/30"></span> The Solution
                                </h4>
                                <ul className="space-y-2">
                                    {mainCase.solution.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-base">
                                            <HiCheckCircle className="text-blue-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10 relative">
                            <p className="italic text-gray-200 text-lg leading-relaxed mb-6">
                                &quot;{mainCase.testimonial.text}&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                                    VM
                                </div>
                                <div>
                                    <div className="font-bold text-white text-base">— {mainCase.testimonial.author}</div>
                                    <div className="text-gray-400 text-sm">{mainCase.testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/5 bg-gray-50 p-8 lg:p-12 flex flex-col justify-center gap-6">
                        <div className="text-center mb-4">
                            <h4 className="text-navy-900 font-black uppercase text-sm tracking-[0.2em] mb-2">The Results</h4>
                            <div className="h-1 w-12 bg-blue-600 mx-auto"></div>
                        </div>
                        {mainCase.results.map((result, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 transform hover:scale-[1.02] transition-transform">
                                <div className={`p-4 rounded-xl bg-gray-50 ${result.color}`}>
                                    <result.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <div className={`text-3xl font-black ${result.color}`}>{result.value}</div>
                                    <div className="text-gray-500 font-bold text-sm uppercase tracking-wide">{result.label}</div>
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={() => openContactForm({ service: 'Attribution Infrastructure' })}
                            className="mt-4 w-full py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 uppercase tracking-wider text-sm"
                        >
                            Get Similar Results <HiArrowRight className="text-xl" />
                        </button>
                    </div>
                </motion.div>

                {/* Social Proof Bar */}
                <div className="max-w-6xl mx-auto mb-24 px-8 py-10 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center">
                        <div className="text-navy-900 font-bold text-sm uppercase tracking-widest md:w-1/4">
                            Trusted by high-growth brands and agencies managing $50M+ in annual ad spend
                        </div>
                        <div className="h-px w-full md:h-12 md:w-px bg-gray-300"></div>
                        {trustBadges.map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 text-navy-900 font-bold">
                                <HiCheckCircle className="text-green-500 text-xl" />
                                <span>{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Supporting Cases Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {supportingCases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400 transition-all flex flex-col group shadow-sm hover:shadow-xl"
                        >
                            <h4 className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                                {item.subtitle}
                            </h4>
                            <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                                {item.title}
                            </h3>
                            <div className="space-y-4 mb-8 flex-grow">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <span className="font-bold text-navy-900 uppercase text-[10px] block mb-1">Problem:</span>
                                    {item.problem}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <span className="font-bold text-navy-900 uppercase text-[10px] block mb-1">Solution:</span>
                                    {item.solution}
                                </p>
                            </div>
                            <div className="pt-6 border-t border-gray-100 mt-auto space-y-3">
                                {item.results.map((res, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <HiCheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span className="text-navy-900 font-bold text-[13px] leading-tight italic">
                                            {res}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center bg-gray-50 rounded-3xl p-12 border border-gray-100 max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-navy-900 mb-4">Ready to Transform Your Marketing Data?</h3>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto font-medium">
                        Every case study started with a 15-minute discovery call. We&apos;ll audit your current setup, identify quick wins, and show you exactly how we&apos;d approach your data challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => openContactForm()}
                            className="btn-primary"
                        >
                            Book Your Data Audit
                        </button>
                        <Link href="/services#pricing" className="btn-secondary">
                            See Our Pricing
                        </Link>
                    </div>
                    <p className="mt-8 text-gray-500 text-xs font-bold uppercase tracking-widest">
                        *Detailed performance metrics and client references available under NDA for qualified leads.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;
