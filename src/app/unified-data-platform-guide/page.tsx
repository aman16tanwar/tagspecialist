'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiCheck, HiChevronDown } from 'react-icons/hi';

const navItems = [
  { id: 'executive-summary', label: 'Executive Summary' },
  { id: 'the-problem', label: 'The Problem' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'data-sources', label: 'Data Sources & Pipelines' },
  { id: 'identity-resolution', label: 'Identity Resolution' },
  { id: 'attribution', label: 'Multi-Touch Attribution' },
  { id: 'dashboards', label: 'Dashboards & Reporting' },
  { id: 'ml-activation', label: 'ML & Audience Activation' },
  { id: 'roi-calculator', label: 'ROI Calculator' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'faq', label: 'FAQ' },
];

export default function UnifiedDataPlatformGuidePage() {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set(['executive-summary']));
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // ROI Calculator state
  const [monthlyAdSpend, setMonthlyAdSpend] = useState(50000);
  const [numDataSources, setNumDataSources] = useState(4);
  const [reportingHoursPerSource, setReportingHoursPerSource] = useState(8);

  // ROI Calculations — based on spend reallocation, not "more conversions"
  const misallocatedPercent = 0.20; // ~20% of ad spend typically misallocated due to duplicate attribution
  const reallocationEfficiency = 0.50; // unified attribution helps recover ~50% of misallocated spend
  const monthlySpendSaved = monthlyAdSpend * misallocatedPercent * reallocationEfficiency;
  const annualSpendSaved = monthlySpendSaved * 12;
  const hourlyAnalystRate = 75; // $/hr for manual reporting work
  const annualReportingSaved = numDataSources * reportingHoursPerSource * 12 * hourlyAnalystRate;
  const totalAnnualBenefit = annualSpendSaved + annualReportingSaved;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setVisitedSections(prev => {
        const newSet = new Set(prev);
        newSet.add(id);
        return newSet;
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          setVisitedSections(prev => {
            const newSet = new Set(prev);
            newSet.add(navItems[i].id);
            return newSet;
          });
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: 'What is a unified data platform for marketing?',
      a: 'A unified data platform connects all your data sources — website analytics (GA4), CRM/transaction data, and ad platform data (Google Ads, Meta, DV360) — into a single data warehouse like BigQuery. This enables true multi-touch attribution, cross-sell analytics, and customer journey analysis that is impossible when data lives in silos.',
    },
    {
      q: 'Why use BigQuery instead of other data warehouses?',
      a: 'BigQuery integrates natively with GA4 (free daily export), scales without infrastructure management, supports ML via BigQuery ML for propensity modeling and audience activation, and costs as little as $5/TB for queries. Being part of Google Cloud means seamless integration with Google Ads and Looker Studio.',
    },
    {
      q: 'How do you join GA4 data with CRM data without exposing PII?',
      a: 'We implement SHA-256 hashed User IDs on both sides — the website (via the data layer and GTM) and the CRM export pipeline. This hashed ID is the join key in BigQuery. No raw email, name, or PII is ever stored alongside behavioural data. The salt is client-controlled and never leaves your infrastructure.',
    },
    {
      q: 'What is a Medallion architecture?',
      a: 'Medallion architecture organizes your warehouse into three layers: Bronze (raw landing zone — GA4 export, CRM dumps, API pulls as-is), Silver (cleaned and standardized — deduplication, type casting, schema alignment), and Gold (business logic marts — attribution models, LTV calculations, cross-sell metrics). This keeps your warehouse maintainable and trustworthy.',
    },
    {
      q: 'How long does it take to build a unified data platform?',
      a: 'A full build with GA4, CRM, and 2-3 ad platform integrations typically takes 5-8 weeks. This includes architecture design, pipeline development, identity resolution, attribution modeling, dashboards, and documentation. Phased rollouts are possible — start with GA4 + CRM in 3 weeks, add ad platforms incrementally.',
    },
    {
      q: 'How much does it cost?',
      a: 'A full unified data platform build ranges from $28,000-$50,000 depending on scope. Ongoing BigQuery costs are typically $50-200/month. The ROI is significant — businesses typically see 20-30% revenue lift from first-party data integration vs. relying on platform-reported metrics alone.',
    },
    {
      q: 'Can I use dbt with this architecture?',
      a: 'Yes — dbt is an excellent fit for the Silver and Gold layers. We use dbt for SQL-based transformations, data testing, and documentation. dbt models run on Cloud Run with Cloud Scheduler for automated daily refreshes. This gives you version-controlled, testable data transformations.',
    },
    {
      q: 'What about real-time data?',
      a: 'GA4 BigQuery export runs daily (streaming export available on GA4 360). For most marketing analytics, daily granularity is sufficient. If you need real-time, we can add Pub/Sub streaming pipelines for specific events like high-value conversions or inventory changes.',
    },
  ];

  const sectionCardClass = "border border-[#bfdbfe] rounded-xl overflow-hidden";
  const sectionHeaderClass = "bg-[#eff6ff] px-6 py-4 text-gray-800";

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Contents</h3>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-left text-sm rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#eff6ff] text-[#1e40af] font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                      visitedSections.has(item.id) ? 'bg-[#2563eb] border-[#2563eb]' : 'border-gray-300'
                    }`}>
                      {visitedSections.has(item.id) && <HiCheck className="w-3 h-3 text-white" />}
                    </div>
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="mt-8">
                <Link
                  href="/book-audit?service=data-engineering"
                  className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all text-xs tracking-wider text-center uppercase"
                >
                  Get a Free Assessment →
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-4xl">

            {/* Executive Summary */}
            <section id="executive-summary" className="mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Unified Data Platform Guide
              </h1>
              <p className="text-lg text-gray-500 mb-8">Marketing Data Warehouse & Multi-Touch Attribution</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Most businesses run marketing with fragmented data — GA4 in one place, CRM in another, ad platforms each telling a different story. The result is blind budget allocation, false attribution, and zero cross-sell visibility. A unified data platform fixes this by connecting every source into one warehouse, enabling true multi-touch attribution and ML-powered audience activation.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#1d4ed8]">~20%</div>
                  <div className="text-sm font-semibold text-gray-900 mt-2">Spend Reallocation</div>
                  <div className="text-xs text-gray-500 mt-1">Ad budget shifted from duplicate-credited to undervalued channels</div>
                </div>
                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#1d4ed8]">6+</div>
                  <div className="text-sm font-semibold text-gray-900 mt-2">Sources Unified</div>
                  <div className="text-xs text-gray-500 mt-1">GA4, CRM, Google Ads, Meta, DV360, more</div>
                </div>
                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#1d4ed8]">100%</div>
                  <div className="text-sm font-semibold text-gray-900 mt-2">Data Ownership</div>
                  <div className="text-xs text-gray-500 mt-1">Your BigQuery, your infrastructure, no lock-in</div>
                </div>
                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#1d4ed8]">ML</div>
                  <div className="text-sm font-semibold text-gray-900 mt-2">Ready</div>
                  <div className="text-xs text-gray-500 mt-1">BigQuery ML for propensity & audience activation</div>
                </div>
              </div>
            </section>

            {/* The Problem */}
            <section id="the-problem" className="mb-16">
              <div className={sectionCardClass}>
                <div className={sectionHeaderClass}>
                  <h2 className="font-bold text-lg">The Problem: Fragmented Marketing Data</h2>
                  <p className="text-gray-500 text-sm">Why siloed data costs you revenue</p>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Every ad platform tells its own story. Google Ads claims credit for conversions that Meta also claims. Your CRM shows different revenue than GA4. Nobody can answer the simple question: <strong>&quot;Which channel actually drove this sale?&quot;</strong>
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {[
                      { problem: 'Duplicate attribution', detail: 'Google, Meta, and TikTok all claim the same conversion. Total reported ROAS is 3x actual.' },
                      { problem: 'No cross-sell visibility', detail: 'You can\'t see that a customer who bought Product A also bought Product B two weeks later via a different channel.' },
                      { problem: 'Last-click blindness', detail: 'Upper-funnel campaigns (display, video, social) look unprofitable because last-click gives all credit to branded search.' },
                      { problem: 'Manual reporting chaos', detail: 'Teams spend days pulling data from 5 platforms into spreadsheets. Numbers never match. Decisions are delayed.' },
                      { problem: 'No customer journey', detail: 'You see sessions, not people. You can\'t connect anonymous website visits to known CRM customers.' },
                      { problem: 'Zero ML capability', detail: 'Without unified data, you can\'t build propensity models, LTV predictions, or activate audiences in ad platforms.' },
                    ].map((item, i) => (
                      <div key={i} className="bg-red-50 border border-red-100 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 text-sm mb-1">{item.problem}</p>
                        <p className="text-gray-600 text-xs">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Architecture */}
            <section id="architecture" className="mb-16">
              <div className={sectionCardClass}>
                <div className={sectionHeaderClass}>
                  <h2 className="font-bold text-lg">Medallion Architecture</h2>
                  <p className="text-gray-500 text-sm">Bronze → Silver → Gold data layers</p>
                </div>
                <div className="p-6 space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    We use a Medallion architecture in BigQuery — the same pattern used by Databricks and Netflix — to organize data from raw ingestion to business-ready analytics.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-600 bg-amber-50 p-5 rounded-r-lg">
                      <h3 className="font-bold text-gray-900 mb-1">Bronze Layer — Raw Landing Zone</h3>
                      <p className="text-gray-600 text-sm mb-2">Data lands exactly as received from each source. No transformations. Full audit trail.</p>
                      <div className="flex flex-wrap gap-2">
                        {['GA4 BigQuery Export', 'CRM SFTP Dumps', 'Google Ads API', 'Meta Marketing API', 'DV360 Reports'].map(s => (
                          <span key={s} className="px-2 py-0.5 bg-white border border-amber-200 rounded text-xs font-medium text-gray-700">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="border-l-4 border-gray-400 bg-gray-50 p-5 rounded-r-lg">
                      <h3 className="font-bold text-gray-900 mb-1">Silver Layer — Cleaned & Standardized</h3>
                      <p className="text-gray-600 text-sm mb-2">Deduplication, data type casting, schema alignment, null handling. Consistent naming conventions across all sources.</p>
                      <div className="flex flex-wrap gap-2">
                        {['Deduplication', 'Type Casting', 'Schema Alignment', 'Incremental MERGE', 'Partitioned Tables'].map(s => (
                          <span key={s} className="px-2 py-0.5 bg-white border border-gray-200 rounded text-xs font-medium text-gray-700">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="border-l-4 border-yellow-500 bg-yellow-50 p-5 rounded-r-lg">
                      <h3 className="font-bold text-gray-900 mb-1">Gold Layer — Business Logic Marts</h3>
                      <p className="text-gray-600 text-sm mb-2">Attribution models, customer LTV, cross-sell metrics, campaign performance. Ready for dashboards and ML.</p>
                      <div className="flex flex-wrap gap-2">
                        {['Attribution Model', 'Customer LTV', 'Cross-Sell Mart', 'Campaign Performance', 'Audience Segments'].map(s => (
                          <span key={s} className="px-2 py-0.5 bg-white border border-yellow-200 rounded text-xs font-medium text-gray-700">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Sources & Pipelines */}
            <section id="data-sources" className="mb-16">
              <div className={sectionCardClass}>
                <div className={sectionHeaderClass}>
                  <h2 className="font-bold text-lg">Data Sources & Pipelines</h2>
                  <p className="text-gray-500 text-sm">Connecting every data source to BigQuery</p>
                </div>
                <div className="p-6 space-y-6">
                  {[
                    {
                      source: 'GA4 → BigQuery',
                      method: 'Native BigQuery Export (free)',
                      frequency: 'Daily (streaming on 360)',
                      details: 'Automatic export of all GA4 events including user properties, event parameters, and e-commerce data. No pipeline code needed — just enable in GA4 settings.',
                    },
                    {
                      source: 'CRM / CDP → BigQuery',
                      method: 'API / SFTP Connector on Cloud Run',
                      frequency: 'Daily incremental',
                      details: 'Custom Python pipeline pulling customer records, transactions, and segments. Supports Salesforce, HubSpot, Ascent360, Klaviyo, and custom CRMs. Incremental loads with deduplication.',
                    },
                    {
                      source: 'Google Ads → BigQuery',
                      method: 'Google Ads API via Cloud Run',
                      frequency: 'Daily',
                      details: 'Campaign, ad group, keyword, and conversion data. Cost, clicks, impressions, and conversion values at the granularity you need for attribution.',
                    },
                    {
                      source: 'Meta Ads → BigQuery',
                      method: 'Meta Marketing API via Cloud Run',
                      frequency: 'Daily',
                      details: 'Campaign, ad set, ad-level performance data. Spend, reach, frequency, and conversion data including attribution windows.',
                    },
                    {
                      source: 'DV360 / SA360 → BigQuery',
                      method: 'Native BigQuery Transfer or API',
                      frequency: 'Daily',
                      details: 'Display & Video 360 and Search Ads 360 data for enterprise advertisers. Native BigQuery Data Transfer Service available.',
                    },
                    {
                      source: 'Shopify / E-Commerce → BigQuery',
                      method: 'Shopify API via Cloud Run',
                      frequency: 'Daily incremental',
                      details: 'Orders, customers, products, and inventory data. Multi-store support with tenant isolation and multi-currency normalization.',
                    },
                  ].map((pipeline, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-bold text-gray-900">{pipeline.source}</h3>
                        <div className="flex gap-2 mt-1 sm:mt-0">
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-medium">{pipeline.method}</span>
                          <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs font-medium">{pipeline.frequency}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{pipeline.details}</p>
                    </div>
                  ))}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">Orchestration: Cloud Run + Cloud Scheduler</h3>
                    <p className="text-gray-600 text-sm">All pipelines run as containerized Python services on Cloud Run, triggered by Cloud Scheduler on configurable cron schedules. Cloud Logging provides monitoring and alerting. Retry logic handles transient API failures. Total infrastructure cost: typically $20-50/month.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Identity Resolution */}
            <section id="identity-resolution" className="mb-16">
              <div className={sectionCardClass}>
                <div className={sectionHeaderClass}>
                  <h2 className="font-bold text-lg">Privacy-Safe Identity Resolution</h2>
                  <p className="text-gray-500 text-sm">Connecting website behaviour to CRM customers without exposing PII</p>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    The critical challenge: how do you join anonymous GA4 sessions with known CRM customers? Our approach uses SHA-256 hashed User IDs — the same cryptographic standard used by Google and Meta for their conversion APIs.
                  </p>
                  <div className="bg-navy-900 text-white rounded-xl p-6 font-mono text-sm leading-relaxed">
                    <p className="text-gray-400 mb-2">-- Identity resolution in BigQuery (Gold layer)</p>
                    <p><span className="text-blue-400">SELECT</span></p>
                    <p className="pl-4">ga4.hashed_user_id,</p>
                    <p className="pl-4">ga4.event_name,</p>
                    <p className="pl-4">ga4.event_date,</p>
                    <p className="pl-4">ga4.source_medium,</p>
                    <p className="pl-4">crm.customer_segment,</p>
                    <p className="pl-4">crm.lifetime_value,</p>
                    <p className="pl-4">crm.last_purchase_date</p>
                    <p><span className="text-blue-400">FROM</span> silver.ga4_events ga4</p>
                    <p><span className="text-blue-400">LEFT JOIN</span> silver.crm_customers crm</p>
                    <p className="pl-4"><span className="text-blue-400">ON</span> ga4.hashed_user_id = crm.hashed_user_id</p>
                    <p><span className="text-blue-400">WHERE</span> ga4.hashed_user_id <span className="text-blue-400">IS NOT NULL</span></p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 text-sm mb-1">Privacy-Safe</p>
                      <p className="text-gray-600 text-xs">SHA-256 hashing with client-controlled salt. No raw PII in the warehouse.</p>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 text-sm mb-1">GDPR / CCPA Compliant</p>
                      <p className="text-gray-600 text-xs">Hashed IDs are pseudonymized data — satisfies privacy regulations when combined with proper consent.</p>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 text-sm mb-1">Deterministic Matching</p>
                      <p className="text-gray-600 text-xs">No probabilistic guessing. Same user = same hash. 100% match accuracy on logged-in users.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Multi-Touch Attribution */}
            <section id="attribution" className="mb-16">
              <div className={sectionCardClass}>
                <div className={sectionHeaderClass}>
                  <h2 className="font-bold text-lg">Multi-Touch Attribution</h2>
                  <p className="text-gray-500 text-sm">Moving beyond last-click to true customer journey attribution</p>
                </div>
                <div className="p-6 space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    With unified data, you can finally see the complete customer journey — from first ad impression through to purchase and repeat buy. This enables attribution models that give proper credit to every touchpoint.
                  </p>
                  <div className="space-y-4">
                    {[
                      { model: 'Last-Click (default)', description: 'All credit to the final touchpoint. Overvalues branded search, undervalues awareness.', accuracy: 'Low', color: 'border-red-200 bg-red-50' },
                      { model: 'First-Click', description: 'All credit to the first touchpoint. Overvalues discovery channels, ignores nurture.', accuracy: 'Low', color: 'border-red-200 bg-red-50' },
                      { model: 'Linear', description: 'Equal credit to every touchpoint. Simple but doesn\'t reflect reality.', accuracy: 'Medium', color: 'border-yellow-200 bg-yellow-50' },
                      { model: 'Position-Based (U-shaped)', description: '40% to first touch, 40% to last touch, 20% distributed to middle. Good default.', accuracy: 'High', color: 'border-green-200 bg-green-50' },
                      { model: 'Data-Driven (BigQuery ML)', description: 'ML model learns which touchpoints actually influence conversion for your business. Best accuracy.', accuracy: 'Highest', color: 'border-blue-200 bg-blue-50' },
                    ].map((model, i) => (
                      <div key={i} className={`border rounded-lg p-4 ${model.color}`}>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-gray-900 text-sm">{model.model}</h4>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                            model.accuracy === 'Highest' ? 'bg-blue-600 text-white' :
                            model.accuracy === 'High' ? 'bg-green-600 text-white' :
                            model.accuracy === 'Medium' ? 'bg-yellow-600 text-white' :
                            'bg-red-500 text-white'
                          }`}>{model.accuracy} accuracy</span>
                        </div>
                        <p className="text-gray-600 text-sm">{model.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Dashboards & Reporting */}
            <section id="dashboards" className="mb-16">
              <div className={sectionCardClass}>
                <div className={sectionHeaderClass}>
                  <h2 className="font-bold text-lg">Dashboards & Reporting</h2>
                  <p className="text-gray-500 text-sm">Looker Studio dashboards powered by Gold layer data</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    With clean, unified data in the Gold layer, dashboards become simple. No more pulling from 5 platforms. One source of truth, refreshed daily.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: 'Campaign Performance', metrics: 'True ROAS by channel, cost per acquisition, attributed revenue, budget pacing', audience: 'Marketing managers, media buyers' },
                      { name: 'Customer Journey', metrics: 'Touchpoint sequences, time-to-conversion, channel interaction paths, assisted conversions', audience: 'CMO, strategy team' },
                      { name: 'Cross-Sell / Share of Wallet', metrics: 'Product affinity, bundle attach rates, upsell conversion rates, category penetration', audience: 'Product marketing, merchandising' },
                      { name: 'Geo & Market Analysis', metrics: 'Performance by region, market-level ROAS, geo-targeted campaign efficiency', audience: 'Regional managers, expansion planning' },
                    ].map((dashboard, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                        <h4 className="font-bold text-gray-900 mb-2">{dashboard.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">{dashboard.metrics}</p>
                        <p className="text-xs text-gray-400"><strong>For:</strong> {dashboard.audience}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ML & Audience Activation */}
            <section id="ml-activation" className="mb-16">
              <div className={sectionCardClass}>
                <div className={sectionHeaderClass}>
                  <h2 className="font-bold text-lg">ML & Audience Activation</h2>
                  <p className="text-gray-500 text-sm">BigQuery ML for propensity modeling and ad platform activation</p>
                </div>
                <div className="p-6 space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    The ultimate payoff of a unified data platform: using BigQuery ML to predict customer behaviour and push those audiences directly into ad platforms for smarter bidding.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                      <h4 className="font-bold text-gray-900 mb-2">Propensity Modeling</h4>
                      <p className="text-gray-600 text-sm mb-3">BigQuery ML logistic regression or XGBoost model trained on historical CRM + GA4 data. Scores every user as high / medium / low propensity to convert.</p>
                      <div className="bg-navy-900 text-white rounded-lg p-4 font-mono text-xs">
                        <p className="text-gray-400">-- BigQuery ML propensity model</p>
                        <p><span className="text-blue-400">CREATE MODEL</span> gold.propensity_model</p>
                        <p><span className="text-blue-400">OPTIONS</span>(model_type=&apos;LOGISTIC_REG&apos;) <span className="text-blue-400">AS</span></p>
                        <p><span className="text-blue-400">SELECT</span> sessions, pages_viewed, days_since_last_visit,</p>
                        <p className="pl-4">channel_grouping, device_category, converted</p>
                        <p><span className="text-blue-400">FROM</span> gold.user_features</p>
                      </div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                      <h4 className="font-bold text-gray-900 mb-2">Audience Activation Loop</h4>
                      <p className="text-gray-600 text-sm">High-propensity segments are exported from BigQuery → uploaded to Google Ads as Customer Match audiences → used for Smart Bidding bid adjustments. Close the loop between data and ad spend.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ROI Calculator */}
            <section id="roi-calculator" className="mb-16">
              <div className="border-2 border-blue-200 rounded-xl overflow-hidden bg-blue-50/30">
                <div className="bg-[#1d4ed8] px-6 py-4 text-white">
                  <h2 className="font-bold text-lg">ROI Calculator</h2>
                  <p className="text-blue-200 text-sm">Estimate the value of unifying your marketing data</p>
                </div>
                <div className="p-6 space-y-6">
                  <p className="text-gray-600 text-sm mb-6">
                    This calculator estimates savings from eliminating duplicate attribution (reallocating misspent budget) and reducing manual reporting time. It does <strong>not</strong> assume more conversions — GA4 only tracks click-through. The value comes from spending smarter, not spending more.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Monthly Ad Spend: <span className="text-blue-600">${monthlyAdSpend.toLocaleString()}</span>
                      </label>
                      <input
                        type="range"
                        min={5000}
                        max={500000}
                        step={5000}
                        value={monthlyAdSpend}
                        onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                        className="w-full blue-slider"
                        style={{background: `linear-gradient(to right, #2563eb ${((monthlyAdSpend - 5000) / 495000) * 100}%, #e5e7eb ${((monthlyAdSpend - 5000) / 495000) * 100}%)`}}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Data Sources to Unify: <span className="text-blue-600">{numDataSources}</span>
                      </label>
                      <input
                        type="range"
                        min={2}
                        max={10}
                        step={1}
                        value={numDataSources}
                        onChange={(e) => setNumDataSources(Number(e.target.value))}
                        className="w-full blue-slider"
                        style={{background: `linear-gradient(to right, #2563eb ${((numDataSources - 2) / 8) * 100}%, #e5e7eb ${((numDataSources - 2) / 8) * 100}%)`}}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Hours/Month on Manual Reporting per Source: <span className="text-blue-600">{reportingHoursPerSource}h</span>
                      </label>
                      <input
                        type="range"
                        min={2}
                        max={20}
                        step={1}
                        value={reportingHoursPerSource}
                        onChange={(e) => setReportingHoursPerSource(Number(e.target.value))}
                        className="w-full blue-slider"
                        style={{background: `linear-gradient(to right, #2563eb ${((reportingHoursPerSource - 2) / 18) * 100}%, #e5e7eb ${((reportingHoursPerSource - 2) / 18) * 100}%)`}}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl p-5 border border-blue-100">
                      <div className="text-2xl font-bold text-[#1d4ed8]">${Math.round(monthlySpendSaved).toLocaleString()}</div>
                      <div className="text-xs text-gray-600 font-medium mt-1">Monthly savings from smarter allocation</div>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-blue-100">
                      <div className="text-2xl font-bold text-[#1d4ed8]">${Math.round(annualSpendSaved).toLocaleString()}</div>
                      <div className="text-xs text-gray-600 font-medium mt-1">Annual ad spend reallocated</div>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-blue-100">
                      <div className="text-2xl font-bold text-[#1d4ed8]">${annualReportingSaved.toLocaleString()}</div>
                      <div className="text-xs text-gray-600 font-medium mt-1">Annual reporting hours saved</div>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-green-200 bg-green-50">
                      <div className="text-2xl font-bold text-green-700">${Math.round(totalAnnualBenefit).toLocaleString()}</div>
                      <div className="text-xs text-gray-600 font-medium mt-1">Total annual benefit</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Case Study */}
            <section id="case-study" className="mb-16">
              <div className="border-2 border-navy-100 rounded-xl overflow-hidden bg-navy-900 text-white">
                <div className="p-8">
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Real Implementation</p>
                  <h2 className="text-2xl font-bold text-white mb-6">Ski Resort Group — Unified Data Platform</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-orange-400">6+</div>
                      <div className="text-xs text-gray-400 mt-1">Data sources unified</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-orange-400">Deduped</div>
                      <div className="text-xs text-gray-400 mt-1">Conversion path journeys</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-orange-400">H/M/L</div>
                      <div className="text-xs text-gray-400 mt-1">User value segmentation</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-orange-400">Churn</div>
                      <div className="text-xs text-gray-400 mt-1">At-risk user identification</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-300 text-sm">
                    <p>A multi-resort ski group running Google Ads, Meta, and DV360 campaigns had no way to connect ad spend to actual bookings. Every platform claimed credit for the same conversions. Zero cross-sell visibility across lift tickets, rentals, ski school, and lodging.</p>
                    <p>We built a full unified data platform in BigQuery integrating GA4, CRM (Ascent360), and all three ad platforms. The key deliverables: deduplicated conversion path journeys by source/medium showing which campaigns drive awareness vs. which actually convert. User value segmentation (high/medium/low) by joining CRM lifetime value with GA4 behaviour. Churn-risk user lists combining CRM purchase gaps with GA4 drop-off signals. Looker Studio dashboards for campaign performance, geo reporting, and cross-sell analysis. Server-side Enhanced Conversions + Meta CAPI for improved signal quality.</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['BigQuery', 'Cloud Run', 'Google Ads API', 'Meta Ads API', 'DV360', 'Ascent360 CRM', 'Looker Studio', 'BigQuery ML', 'Server-Side GTM', 'Meta CAPI'].map(tool => (
                      <span key={tool} className="px-2 py-0.5 bg-white/10 border border-white/20 rounded text-xs text-gray-300">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                      <HiChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedFaq === i && (
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold text-white mb-3">Ready to Unify Your Marketing Data?</h2>
                <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
                  Book a free data engineering consultation. We&apos;ll assess your current data stack, identify integration opportunities, and outline a custom architecture for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/book-audit?service=data-engineering"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-lg"
                  >
                    Book Free Consultation →
                  </Link>
                  <Link
                    href="/case-studies"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-bold text-sm transition-all"
                  >
                    See More Case Studies
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
