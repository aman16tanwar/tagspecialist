'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    HiShieldCheck,
    HiTrendingUp,
    HiUserGroup,
    HiLightningBolt,
    HiDatabase,
    HiArrowRight,
    HiCheckCircle
} from 'react-icons/hi';
import { IconType } from 'react-icons';

interface PartnerModel {
    title: string;
    subtitle: string;
    desc: string;
    benefits: string[];
    icon: IconType;
    color: 'blue' | 'purple';
}

interface Capability {
    icon: IconType;
    title: string;
    desc: string;
}

const PartnersSection: React.FC = () => {

    const models: PartnerModel[] = [
        {
            title: "White-Label Partner",
            subtitle: "The 'Ghost' Engineer",
            desc: "We work as your internal technical department under your brand. You manage the client; we handle the deep engineering.",
            benefits: [
                "100% Invisible to your client",
                "You set the final retail price",
                "Enterprise results under your agency",
                "Fixed wholesale partner rates"
            ],
            icon: HiShieldCheck,
            color: "blue"
        },
        {
            title: "Referral Partner",
            subtitle: "The Trusted Specialist",
            desc: "Introduce us directly to your clients as your exclusive data infrastructure partner. We handle the close and the build.",
            benefits: [
                "10% Lifetime referral commission",
                "We handle all support & technicals",
                "Co-branded discovery calls",
                "Seamless handover process"
            ],
            icon: HiUserGroup,
            color: "purple"
        }
    ];

    const capabilities: Capability[] = [
        { icon: HiLightningBolt, title: "Stop Client Churn", desc: "Fix the attribution gaps that make your ad performance look worse than it actually is." },
        { icon: HiDatabase, title: "No Tech Overhead", desc: "Stop trying to hire $150K/year engineers. Use our senior team on-demand for complex builds." },
        { icon: HiTrendingUp, title: "Scale Your ROAS", desc: "Give your media buyers the 100% accurate data they need to optimize and scale budgets confidently." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-100">
                        <HiUserGroup /> Exclusive for Marketing Agencies
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-navy-900 mb-8 uppercase tracking-tighter leading-tight">
                        Give Your Clients Elite Data. <br className="hidden md:block" />
                        <span className="text-blue-600">Keep Your Agency Lean.</span>
                    </h1>
                    <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                        We become your &quot;Technical Data Department.&quot; You sell the growth, we build the infrastructure. No hiring overhead, just enterprise-grade attribution and BigQuery pipelines.
                    </p>
                </div>

                {/* Core Benefits */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
                    {capabilities.map((cap, i) => (
                        <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <cap.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-black text-navy-900 mb-3 uppercase tracking-tight">{cap.title}</h3>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed">{cap.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Partnership Models */}
                <div className="max-w-6xl mx-auto mb-24">
                    <h2 className="text-2xl font-black text-navy-900 mb-12 text-center uppercase tracking-widest">Choose Your Model</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {models.map((model, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className={`p-10 lg:p-12 rounded-[3rem] border-2 flex flex-col h-full ${model.color === 'blue' ? 'bg-navy-900 border-navy-800 text-white' : 'bg-white border-gray-100 text-navy-900 shadow-xl'}`}
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${model.color === 'blue' ? 'bg-blue-600 text-white' : 'bg-purple-100 text-purple-600'}`}>
                                    <model.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{model.title}</h3>
                                <p className={`text-sm font-black uppercase tracking-[0.2em] mb-6 ${model.color === 'blue' ? 'text-blue-400' : 'text-purple-600'}`}>
                                    {model.subtitle}
                                </p>
                                <p className={`text-lg font-medium mb-10 leading-relaxed ${model.color === 'blue' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {model.desc}
                                </p>
                                <ul className="space-y-4 mb-12 flex-grow">
                                    {model.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <HiCheckCircle className={model.color === 'blue' ? 'text-blue-400' : 'text-purple-600'} />
                                            <span className="font-bold text-sm tracking-tight">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/book-audit"
                                    className={`block w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all text-center ${model.color === 'blue' ? 'bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/20' : 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20'}`}
                                >
                                    Apply to Partner
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="bg-brand-highlight rounded-[3rem] p-12 lg:p-20 text-center border border-blue-100 relative overflow-hidden shadow-2xl">
                    <h2 className="text-3xl lg:text-5xl font-black text-navy-900 mb-8 uppercase tracking-tighter">
                        Stop Losing Clients To <br /> Broken Attribution.
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
                        Schedule a partner discovery call. We&apos;ll show you how we&apos;ve helped agencies deliver server-side tracking with up to 451% ROAS in documented case studies — under their own brand.
                    </p>
                    <Link
                        href="/book-audit"
                        className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6 rounded-md uppercase tracking-[0.2em] font-black shadow-xl hover:shadow-orange-500/25 inline-flex items-center transition-all"
                    >
                        Book Partner Call <HiArrowRight className="inline-block ml-2" />
                    </Link>
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
