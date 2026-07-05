'use client';

import { motion } from 'framer-motion';
import {
  HiCheck,
  HiArrowRight,
  HiDatabase,
  HiLightningBolt,
  HiChartBar,
  HiCode,
  HiCog,
  HiChevronDown,
  HiChevronUp,
  HiCheckCircle,
  HiServer,
} from 'react-icons/hi';
import Link from 'next/link';
import { useState } from 'react';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';

interface FAQ {
  q: string;
  a: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BigQuerySpecialistLanding() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      icon: HiDatabase,
      title: 'Marketing Data Warehouse Build',
      description:
        'A unified BigQuery warehouse that combines GA4, Google Ads, Meta Ads, Shopify, Stripe, and CRM data into one queryable model. Built with partitioning, clustering, and dbt models tuned for marketing attribution.',
      deliverables: [
        'Source-to-warehouse ELT pipelines',
        'Partitioned, clustered tables for fast queries',
        'dbt models for staging, intermediate, and marts layers',
        'Identity resolution across web, app, and CRM',
        'Documentation and lineage diagrams',
      ],
    },
    {
      icon: HiServer,
      title: 'Server-Side GA4 → BigQuery Pipelines',
      description:
        'Capture every server-side GA4 event in BigQuery — separate from the sampled native GA4 export — for unbiased attribution analysis and downstream activation. Built on Cloud Run with Pub/Sub buffering.',
      deliverables: [
        'sGTM container → Pub/Sub → BigQuery streaming',
        'Schema design for raw and modeled events',
        'Partitioning on event_timestamp, clustering on event_name',
        'Event deduplication and late-arrival handling',
        'BigQuery cost guardrails',
      ],
    },
    {
      icon: HiCode,
      title: 'dbt Modeling & Identity Resolution',
      description:
        'Turn raw event streams into trusted marketing tables. dbt models that resolve user identity across devices, sessionize events, attribute conversions, and roll up to channel and campaign level — versioned, tested, and documented.',
      deliverables: [
        'dbt project scaffolding (staging / intermediate / marts)',
        'Identity stitching across client_id / user_id / hashed email',
        'Sessionization and channel attribution models',
        'dbt tests for data quality and uniqueness',
        'Exposure tracking to downstream BI / activation',
      ],
    },
    {
      icon: HiChartBar,
      title: 'BigQuery ML & Forecasting',
      description:
        'Predictive models built directly in BigQuery — no separate ML infrastructure required. Customer LTV, churn propensity, conversion likelihood, and demand forecasting models trained on your warehouse data.',
      deliverables: [
        'BQML model design and training',
        'LTV and propensity score generation',
        'Time-series forecasting for revenue / acquisition',
        'Model evaluation and monitoring',
        'Activation: scores piped to Google Ads / Meta as audiences',
      ],
    },
    {
      icon: HiLightningBolt,
      title: 'Cost Optimization Audit',
      description:
        'BigQuery costs growing faster than warehouse value? We audit query patterns, table design, partitioning, and slot usage — and deliver a fixed remediation plan. Most clients cut BigQuery spend by 30-60% after remediation.',
      deliverables: [
        'Slot consumption analysis (on-demand vs reservations)',
        'Query pattern audit for full-scan offenders',
        'Partitioning and clustering recommendations',
        'Materialized view and BI Engine opportunities',
        'Storage tiering and retention policy review',
      ],
    },
    {
      icon: HiCog,
      title: 'Reverse ETL & Activation',
      description:
        'Push warehouse insights back into the tools where work happens. BigQuery audiences activated to Google Ads, Meta, HubSpot, Klaviyo, and CRM — server-side, schedule-driven, with consent gating.',
      deliverables: [
        'Reverse ETL pipelines (Cloud Run / Hightouch / Census)',
        'Audience builds for ad-platform Customer Match',
        'CRM enrichment with LTV / propensity scores',
        'Consent-aware destination filtering',
        'Activation cadence and freshness monitoring',
      ],
    },
  ];

  const whyUs = [
    {
      title: '15+ Years of Data Engineering',
      description:
        'Not analytics generalists — we ship production data infrastructure on Google Cloud (BigQuery, Cloud Run, Pub/Sub, dbt) every week.',
    },
    {
      title: 'Marketing-Native, Not Generic Data Eng',
      description:
        'We model GA4, Ads, CAPI, and CRM data daily. Generic data teams spend the first month learning your stack; we start in week one.',
    },
    {
      title: 'BigQuery Cost Discipline',
      description:
        'Every table partitioned and clustered. Every query reviewed for full-scan risk. Most clients see 30-60% lower BigQuery bills after our audits.',
    },
    {
      title: 'Direct Engineer Access',
      description:
        'No project managers, no offshore handoffs. You work directly with the engineer writing the dbt models and Cloud Run services.',
    },
    {
      title: 'End-to-End Data Ownership',
      description:
        'Everything we build, you own. dbt repos, Cloud Run services, BigQuery datasets, IAM — all in your GCP project under your control.',
    },
    {
      title: 'A Decade of Implementations',
      description:
        'From DTC Shopify brands to enterprise advertisers spending $50M+ annually — proven results across industries and scales.',
    },
  ];

  const faqs: FAQ[] = [
    {
      q: 'What does a BigQuery specialist do?',
      a: 'A BigQuery specialist designs, builds, and operates marketing data warehouses on Google Cloud. This includes ELT pipeline design (server-side GA4, Google Ads, Meta CAPI, Shopify, Stripe, CRM), schema design with partitioning and clustering, dbt modeling for identity resolution and attribution, BigQuery ML for predictive analytics, reverse ETL for audience activation, and cost optimization. We go beyond generic data engineering — we know the marketing stack and the tracking sources end to end.',
    },
    {
      q: 'How is hiring a BigQuery specialist different from a general data engineer?',
      a: 'A general data engineer typically spends the first 4-6 weeks learning your marketing stack — GA4 schema, Google Ads conversion structure, Meta CAPI event format, Shopify webhook payloads. A BigQuery specialist who works in marketing daily already knows these systems and starts shipping in week one. The cost difference is similar; the time-to-value difference is large. For marketing data warehouses specifically, a specialist also brings opinionated dbt patterns (staging/intermediate/marts) and identity-resolution logic that a generalist would have to design from scratch.',
    },
    {
      q: 'How much does a BigQuery marketing data warehouse cost?',
      a: 'Engagements range from a focused BigQuery audit ($1,500-$5,000, 3-5 days) to a full marketing data warehouse build ($18,000-$35,000, 5-8 weeks). Server-side GA4 → BigQuery pipelines on their own typically run $5,000-$12,000. Ongoing managed pipeline operations start at $300/month. Pricing is fixed-scope, not hourly. Book a 15-minute call for an exact quote on your situation.',
    },
    {
      q: 'Do you work with our existing dbt project, or do you need to start fresh?',
      a: 'Both. We can extend an existing dbt project — adding marketing-specific staging models, identity-resolution logic, attribution marts — or scaffold a new dbt project from scratch with the staging / intermediate / marts pattern. We work with dbt Core and dbt Cloud, and we follow standard dbt project conventions so any future engineer can pick up the work.',
    },
    {
      q: 'How do you keep BigQuery costs under control?',
      a: 'Three layers. (1) At table design time: aggressive partitioning on event_timestamp / date, clustering on the columns that actually appear in WHERE clauses, and BigQuery storage tier policies. (2) At query time: dbt incremental models, materialized views for hot dashboards, and BI Engine for sub-second response on rolled-up tables. (3) At ops time: monthly slot consumption review, query-pattern monitoring, and alerts on full-scan queries. Most clients see 30-60% lower bills after the audit.',
    },
    {
      q: 'Can you migrate us from Snowflake / Redshift / Databricks to BigQuery?',
      a: 'Yes. We do BigQuery migrations from Snowflake, Redshift, and Databricks regularly — typically driven by either GCP-native tool integration (Vertex AI, Looker, GA4 native export) or cost reasons. Migrations include schema translation, dbt model porting, ETL pipeline rebuild, parallel running for validation, and a phased cutover. Timeline depends on warehouse size and dbt complexity.',
    },
    {
      q: 'Do you handle BigQuery ML, or just SQL modeling?',
      a: 'Both. BQML for in-warehouse modeling — LTV, propensity, churn, time-series forecasting — and Vertex AI for cases that need more than what BQML supports. We also wire BQML model outputs into reverse ETL pipelines so predicted LTV or churn scores end up as Customer Match audiences in Google Ads or as CRM segments in HubSpot, where the marketing team can act on them.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl" />
        </div>
        <div className="content-container py-16 lg:py-24 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              BigQuery Data Engineer for Hire
            </p>
            <h1 className="text-white text-[32px] lg:text-[52px] leading-[1.1] tracking-tight mb-6">
              BigQuery Specialist:{' '}
              <span className="text-orange-400">Marketing Data Warehouses Built for Attribution and Activation</span>
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Stop running attribution off sampled GA4 reports. We build production BigQuery warehouses that combine GA4,
              Google Ads, Meta Ads, Shopify, Stripe, and CRM into one trusted model — with dbt, BigQuery ML, and reverse
              ETL out to the channels where work happens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit?service=bigquery"
                className="btn-primary text-center inline-flex items-center justify-center gap-2 group"
              >
                Book a Free BigQuery Audit
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="bg-white/10 text-white border-2 border-white/20 px-7 py-3.5 rounded-md font-heading font-semibold transition-all hover:bg-white/20 text-center"
              >
                See Our Results
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 justify-center mt-12 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> 10 years of implementations
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> 30-60% lower BigQuery bills
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> 15+ years experience
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> 5.0 client rating
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Answer-First Summary for AI/AEO */}
      <section className="py-10 bg-gray-50 border-b border-gray-200" data-speakable="true">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>A BigQuery specialist</strong> designs and builds marketing data warehouses on Google Cloud —
              ingesting GA4, Google Ads, Meta CAPI, Shopify, and CRM data into BigQuery, modeling it with dbt for
              attribution and identity resolution, and activating insights via BigQuery ML and reverse ETL. As of 2026,
              a typical engagement runs <strong>2-8 weeks</strong> and costs between{' '}
              <strong>$5,000 (single pipeline)</strong> and <strong>$35,000 (full marketing data warehouse)</strong>,
              with managed pipeline operations from <strong>$300/month</strong>. TagSpecialist has spent a decade shipping
              BigQuery implementations for DTC brands, agencies, and enterprise advertisers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2>BigQuery Specialist Services</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              From a focused cost audit to a full marketing data warehouse — production-grade BigQuery work, end to end.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <HiCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2>Why Choose TagSpecialist as Your BigQuery Engineer</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Marketing-native data engineering — not generalists who learn your stack on your dime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <HiCheck className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — productized service tiers */}
      <section className="section-padding bg-white" data-speakable="true">
        <div className="content-container max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-10"
          >
            <h2>BigQuery Specialist Engagements</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
              Fixed-scope, fixed-price engagements. No hourly billing, no scope creep surprises.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-left px-6 py-4 font-heading font-semibold rounded-tl-xl">Engagement</th>
                  <th className="text-left px-6 py-4 font-heading font-semibold">Price Range</th>
                  <th className="text-left px-6 py-4 font-heading font-semibold">Timeline</th>
                  <th className="text-left px-6 py-4 font-heading font-semibold rounded-tr-xl">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold text-navy-900">BigQuery Audit &amp; Cost Optimization</td>
                  <td className="px-6 py-4 text-orange-600 font-bold whitespace-nowrap">$1,500 – $5,000</td>
                  <td className="px-6 py-4 text-gray-700 whitespace-nowrap">3–5 business days</td>
                  <td className="px-6 py-4 text-gray-600">Cutting BigQuery spend, fixing query patterns</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-navy-900">Marketing Pipeline Build</td>
                  <td className="px-6 py-4 text-orange-600 font-bold whitespace-nowrap">$5,000 – $12,000</td>
                  <td className="px-6 py-4 text-gray-700 whitespace-nowrap">2–3 weeks</td>
                  <td className="px-6 py-4 text-gray-600">Server-side GA4 → BigQuery, Ads + CAPI ingest</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold text-navy-900">Full Marketing Data Warehouse</td>
                  <td className="px-6 py-4 text-orange-600 font-bold whitespace-nowrap">$18,000 – $35,000</td>
                  <td className="px-6 py-4 text-gray-700 whitespace-nowrap">5–8 weeks</td>
                  <td className="px-6 py-4 text-gray-600">dbt models, identity resolution, BQML, activation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-navy-900">Managed Pipeline Operations</td>
                  <td className="px-6 py-4 text-orange-600 font-bold whitespace-nowrap">From $300/month</td>
                  <td className="px-6 py-4 text-gray-700 whitespace-nowrap">Ongoing</td>
                  <td className="px-6 py-4 text-gray-600">Monitoring, dbt updates, schema evolution</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/book-audit?service=bigquery"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              Get a Fixed-Price Quote
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2>How It Works</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              From audit to live warehouse with zero disruption to your existing reporting.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Audit Current State',
                description:
                  'We map your existing data sources, BigQuery usage, and reporting needs. Identify what is broken, missing, or expensive.',
              },
              {
                step: '2',
                title: 'Architecture Proposal',
                description:
                  'Fixed-price quote with schema design, dbt project layout, pipeline architecture, and clear deliverables.',
              },
              {
                step: '3',
                title: 'Build & Validate',
                description:
                  'We build pipelines, dbt models, and dashboards in parallel with your existing stack. You see progress weekly.',
              },
              {
                step: '4',
                title: 'Handoff & Operate',
                description:
                  'Documentation, runbooks, and knowledge transfer. Optional managed retainer for ongoing operations and changes.',
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-navy-900 text-white flex items-center justify-center mx-auto mb-4 text-xl font-heading font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="content-container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2>BigQuery Specialist FAQ</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-heading font-semibold text-navy-900">{faq.q}</span>
                  {activeFaq === i ? (
                    <HiChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <HiChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="content-container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-white mb-4">Ready to Build a Real Marketing Data Warehouse?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Book a free 15-minute audit. We&apos;ll review your current BigQuery usage, identify cost wins, and scope a
              warehouse architecture that actually answers attribution questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit?service=bigquery"
                className="bg-orange-500 text-white px-8 py-4 rounded-md font-heading font-semibold hover:bg-orange-600 transition-all shadow-lg inline-flex items-center justify-center gap-2 group"
              >
                Book Your Free BigQuery Audit
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-md font-heading font-semibold hover:bg-white/20 transition-all text-center"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
