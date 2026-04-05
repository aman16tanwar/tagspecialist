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

interface PortfolioProject {
    category: string;
    title: string;
    industry: string;
    problem: string;
    solution: string;
    highlights: string[];
    tools: string[];
}

const CaseStudiesSection: React.FC = () => {

    const mainCase: MainCase = {
        client: "Multi-Resort Ski Group",
        title: "Unified Data Platform & Multi-Touch Attribution for Ski Resort Group",
        problem: "A ski resort group running paid campaigns across Google Ads, Meta, and DV360 through an agency had no way to connect ad spend to actual bookings or track customer journeys across products (lift tickets, rentals, ski school, lodging). Revenue attribution was blind — budget allocation was based on last-click data only, with zero cross-sell visibility.",
        solution: [
            "Built a full unified data platform in BigQuery integrating GA4 analytics, CRM transaction data (Ascent360 ski-industry CDP), and all three ad platforms",
            "Architected Medallion structure (Bronze → Silver → Gold layers) with incremental daily pipelines, partitioned tables, and MERGE-based refreshes",
            "Implemented SHA-256 hashed User ID matching to join GA4 behavioural data with CRM purchases without exposing PII",
            "Built deduplicated conversion path journeys by source/medium — clearly separating awareness campaigns from converting campaigns",
            "Created user value segmentation (high / medium / low) by joining CRM lifetime value with GA4 behavioural data at the user level",
            "Identified churn-risk user lists from CRM + GA4 drop-off signals for re-engagement targeting",
            "Delivered Looker Studio dashboards for campaign performance, geo reporting, and cross-sell analysis",
            "Deployed server-side Enhanced Conversions (Google) and Meta CAPI for improved signal quality"
        ],
        results: [
            { label: "Data Sources Unified", value: "6+", icon: HiTrendingUp, color: "text-blue-600" },
            { label: "User Segmentation", value: "High/Med/Low", icon: HiShieldCheck, color: "text-blue-600" },
            { label: "Attribution", value: "Deduplicated", icon: HiChartBar, color: "text-purple-600" }
        ],
        testimonial: {
            text: "For the first time, we can see the actual conversion path — which campaigns drive awareness vs which close the sale. Plus the user segmentation from CRM + GA4 showed us exactly where our high-value customers come from and who's at risk of churning.",
            author: "Director of Marketing",
            company: "Multi-Resort Ski Group"
        }
    };

    const portfolioProjects: PortfolioProject[] = [
        {
            category: "REVENUE TRACKING FIX",
            title: "Fixed 54% Revenue Tracking Gap for SaaS Platform",
            industry: "SaaS / Subscriptions",
            problem: "A 54% discrepancy between GA4 ($31K) and actual revenue ($52K via Stripe + RevenueCat). Missing purchase events across subscription and credit plan flows meant the marketing team was optimizing against incomplete data.",
            solution: "Audited the full GTM container, implemented a Stripe-to-dataLayer fix distinguishing purchase types, built new conversion tags for Meta, Google Ads, and TikTok with full QA, then extended with server-side Meta CAPI.",
            highlights: [
                "$21K in missing conversions recovered",
                "Tracking accuracy: 54% → 99%",
                "3 ad platforms fixed (Meta, Google, TikTok)",
                "Complete Notion documentation for handoff"
            ],
            tools: ["GTM", "GA4", "Stripe", "RevenueCat", "Meta Pixel", "TikTok Pixel", "Google Ads"]
        },
        {
            category: "SERVER-SIDE TRACKING",
            title: "Server-Side Meta CAPI for SaaS Subscription Platform",
            industry: "SaaS / Subscriptions",
            problem: "After fixing the revenue tracking gap, the client needed server-side tracking to recover conversion signals lost to ad blockers and iOS privacy restrictions.",
            solution: "Built full server-side Meta CAPI implementation with Cloud Run infrastructure, Stripe webhook integration, client/server event deduplication, and first-party GTM hosting on a custom subdomain.",
            highlights: [
                "Cloud Run server-side infrastructure deployed",
                "Stripe webhook → Meta CAPI pipeline",
                "Client-side + server-side event deduplication",
                "First-party subdomain for ad blocker bypass"
            ],
            tools: ["Meta CAPI", "GCP Cloud Run", "GTM Server-Side", "Stripe"]
        },
        {
            category: "DATA LAYER ARCHITECTURE",
            title: "Complete DataLayer Spec & GTM Build for Fintech SaaS",
            industry: "Fintech / SaaS",
            problem: "GTM was installed but zero dataLayer values were being passed — GA4 received no useful event data. Marketing had no visibility into the user journey from signup through purchase.",
            solution: "Wrote a complete 5-event dataLayer specification covering the full user journey, with dynamic vs. static field mapping and developer handoff documentation.",
            highlights: [
                "5-event dataLayer spec (view_item_list → purchase)",
                "Dynamic vs. static field mapping defined",
                "Developer handoff documentation via Notion",
                "GTM tag architecture prepared for implementation"
            ],
            tools: ["GTM", "GA4", "Stripe Checkout", "Next.js"]
        },
        {
            category: "TRACKING DIAGNOSIS",
            title: "Pinterest Pixel Conflict Resolution for Luxury Hospitality Brand",
            industry: "Luxury Hospitality",
            problem: "Pinterest lead conversion events were consistently attributing to the wrong ad account. The agency team couldn't identify why conversions were being misattributed despite a correctly configured GTM pixel.",
            solution: "Identified root cause as a legacy Pinterest pixel loaded via Adobe Launch conflicting with the GTM pixel. Produced a full investigation report with call stack analysis and Loom walkthrough for the agency team.",
            highlights: [
                "Root cause: legacy pixel conflict (Adobe Launch vs GTM)",
                "Call stack analysis confirming dual-fire issue",
                "Full investigation report with resolution steps",
                "Loom walkthrough for agency team handoff"
            ],
            tools: ["GTM", "Pinterest Ads", "Adobe Launch"]
        },
        {
            category: "COMPLIANCE AUDIT",
            title: "Full Pixel Compliance Audit for Luxury Hospitality Brand",
            industry: "Luxury Hospitality",
            problem: "Pre-migration compliance review needed for a luxury brand preparing to launch a new booking engine. Existing pixel setup had unclear data processing agreements and consent gaps.",
            solution: "Conducted a comprehensive compliance audit covering GDPR data transfer obligations, Meta and Google Ads DPAs, dataset category configuration, third-party integrations, and cookie consent requirements.",
            highlights: [
                "GDPR data transfer obligation review",
                "Meta & Google Ads DPA verification",
                "Meta Dataset Category configuration audit",
                "Pre-launch compliance checklist for booking engine migration"
            ],
            tools: ["Meta Pixel", "Google Ads", "GTM", "GDPR Framework"]
        },
        {
            category: "TECHNICAL ASSESSMENT",
            title: "Google Hotel Ads Activation Assessment for Hospitality Agency",
            industry: "Hospitality / Agency",
            problem: "A hospitality agency wanted to activate Google Hotel Ads for multiple clients but lacked clarity on technical requirements, connectivity partners, and per-property readiness.",
            solution: "Delivered a full technical assessment covering Hotel Center access pathways, connectivity partner requirements, agency capability scope, and per-property readiness evaluation with clear next steps.",
            highlights: [
                "Hotel Center access pathway analysis",
                "Connectivity partner requirements defined",
                "Per-property readiness evaluation",
                "Clear next steps for each property"
            ],
            tools: ["Google Hotel Center", "Google Ads"]
        },
        {
            category: "GA4 IMPLEMENTATION",
            title: "GA4 Tracking Implementation for Australian Pet Marketplace",
            industry: "E-Commerce / Marketplace",
            problem: "An Australian e-commerce marketplace needed a data collection strategy and full GA4 event tracking setup built from scratch to understand user behavior across their platform.",
            solution: "Designed the complete data collection strategy and implemented full GA4 event tracking through GTM, covering the marketplace's unique buyer and seller journeys.",
            highlights: [
                "Complete data collection strategy designed",
                "Full GA4 event tracking via GTM",
                "Marketplace-specific event taxonomy",
                "Buyer and seller journey tracking"
            ],
            tools: ["GA4", "GTM"]
        },
        {
            category: "DATA PIPELINE",
            title: "Multi-Store Shopify-to-BigQuery Pipeline for Nordic Agency",
            industry: "E-Commerce / Agency",
            problem: "A Nordic e-commerce agency serving marketplace sellers needed a scalable data pipeline handling multiple stores, multi-currency normalization, and tenant isolation — at minimal cost.",
            solution: "Built a production-grade multi-store Shopify pipeline on GCP with incremental loads, retry logic, tenant isolation, and multi-currency normalization. Runs on Cloud Run with Cloud Scheduler.",
            highlights: [
                "Multi-store architecture with tenant isolation",
                "Multi-currency normalization pipeline",
                "Incremental loads with retry logic",
                "Minimal GCP operating cost"
            ],
            tools: ["Python", "GCP Cloud Run", "Cloud Scheduler", "BigQuery", "Shopify API"]
        },
        {
            category: "DATA PIPELINE",
            title: "Cross-Channel Ad Data Unification for Field Services Agency",
            industry: "Home Services / Agency",
            problem: "An agency managing Google Ads and Meta Ads for field service businesses using Jobber had no way to connect ad spend to actual job revenue. Reporting was manual and couldn't attribute which channel drove real bookings.",
            solution: "Built a unified data pipeline pulling Google Ads, Meta Ads, and Jobber CRM data into BigQuery. Created cross-channel attribution models linking ad clicks to booked jobs and completed revenue.",
            highlights: [
                "Google Ads + Meta Ads → BigQuery pipeline",
                "Jobber CRM integration for job-level revenue",
                "Cross-channel attribution (ad click → booked job)",
                "Unified reporting dashboard for agency clients"
            ],
            tools: ["Python", "BigQuery", "Google Ads API", "Meta Ads API", "Jobber API", "GCP Cloud Run"]
        },
        {
            category: "DATA ENGINEERING",
            title: "GA4 + CRM User-Level Data Warehouse for E-Commerce Brand",
            industry: "E-Commerce",
            problem: "An e-commerce business had GA4 data in BigQuery and CRM data in a separate system with no linkage. They couldn't connect website behavior to actual customer records, making LTV analysis and personalization impossible.",
            solution: "Built a full data warehouse linking GA4 BigQuery export with CRM data at the user level using dbt for transformations, Cloud Run for orchestration, and Cloud Scheduler for automated runs.",
            highlights: [
                "GA4 BigQuery export + CRM data linked at user level",
                "dbt transformation layer for clean data models",
                "Cloud Run + Cloud Scheduler orchestration",
                "User-level journey from first visit to repeat purchase"
            ],
            tools: ["BigQuery", "dbt", "GCP Cloud Run", "Cloud Scheduler", "GA4", "CRM Integration"]
        },
        {
            category: "E-COMMERCE TRACKING",
            title: "Shopify Conversion Tracking for Multiple DTC Brands",
            industry: "E-Commerce / Multi-Vertical",
            problem: "Multiple Shopify brands across coaching, health, and retail verticals needed proper conversion tracking — from GTM setup through GA4 e-commerce events and server-side implementations.",
            solution: "Delivered end-to-end tracking implementations across multiple brands including GTM container setup, GA4 e-commerce events, Meta Pixel, Google Ads conversions, and server-side GTM.",
            highlights: [
                "Multi-brand GTM container architecture",
                "Full GA4 e-commerce event tracking",
                "Meta Pixel + Google Ads conversion setup",
                "Server-side GTM for ad blocker bypass"
            ],
            tools: ["GTM", "GA4", "Meta Pixel", "Google Ads", "Shopify", "Server-Side GTM"]
        },
    ];

    const trustBadges: string[] = [
        "10+ client implementations delivered",
        "SaaS, E-Commerce, Hospitality, Fintech",
        "6 countries across 3 continents"
    ];

    return (
        <section id="results" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6">
                        Real Projects. <span className="text-blue-600">Real Implementation Details.</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Every project below was delivered by our team — no outsourcing, no templates. From revenue tracking fixes to full data pipelines, here&apos;s the work we actually ship.
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
                            <HiLightningBolt /> Featured Project
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight text-white">
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
                                    <span className="w-8 h-px bg-blue-400/30"></span> What We Implemented
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
                                    DM
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
                        <Link
                            href="/book-audit"
                            className="mt-4 w-full py-5 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-3 uppercase tracking-wider text-sm"
                        >
                            Get Similar Results <HiArrowRight className="text-xl" />
                        </Link>
                    </div>
                </motion.div>

                {/* Social Proof Bar */}
                <div className="max-w-6xl mx-auto mb-24 px-8 py-10 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center">
                        <div className="text-navy-900 font-bold text-sm uppercase tracking-widest md:w-1/4">
                            Trusted by brands and agencies across SaaS, E-Commerce, and Hospitality
                        </div>
                        <div className="h-px w-full md:h-12 md:w-px bg-gray-300"></div>
                        {trustBadges.map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 text-navy-900 font-bold">
                                <HiCheckCircle className="text-blue-500 text-xl" />
                                <span>{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="max-w-6xl mx-auto mb-8">
                    <h3 className="text-2xl font-bold text-navy-900 mb-2 text-center">Full Project Portfolio</h3>
                    <p className="text-gray-600 text-center mb-12">Every project delivered — from tracking audits to production data pipelines.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {portfolioProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-blue-400 transition-all flex flex-col group shadow-sm hover:shadow-xl"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em]">
                                    {project.category}
                                </span>
                                <span className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">
                                    {project.industry}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight">
                                {project.title}
                            </h3>
                            <div className="space-y-3 mb-6 flex-grow">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <span className="font-bold text-navy-900 uppercase text-[10px] block mb-1">Challenge:</span>
                                    {project.problem}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <span className="font-bold text-navy-900 uppercase text-[10px] block mb-1">Solution:</span>
                                    {project.solution}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-gray-100 mt-auto space-y-2 mb-4">
                                {project.highlights.map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <HiCheckCircle className="text-blue-500 w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                                        <span className="text-navy-900 font-semibold text-xs leading-tight">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {project.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-semibold"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center bg-gray-50 rounded-3xl p-12 border border-gray-100 max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-navy-900 mb-4">Ready to Fix Your Tracking?</h3>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto font-medium">
                        Every project above started with a 15-minute discovery call. We&apos;ll audit your current setup, identify quick wins, and show you exactly how we&apos;d approach your data challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/book-audit"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-md font-semibold transition-all shadow-sm hover:shadow-orange-500/25 inline-block"
                        >
                            Book Your Free Audit
                        </Link>
                        <Link href="/services" className="btn-secondary">
                            See Our Services
                        </Link>
                    </div>
                    <p className="mt-8 text-gray-500 text-xs font-bold uppercase tracking-widest">
                        *Additional project details and client references available under NDA for qualified leads.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;
