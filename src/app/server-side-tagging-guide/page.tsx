import Link from 'next/link';
import { HiCheckCircle, HiCheck, HiShieldCheck } from 'react-icons/hi';
import GuideNavigation from '@/components/guide/GuideNavigation';
import BenefitsCountrySection from '@/components/guide/BenefitsCountrySection';
import PlatformComparison from '@/components/guide/PlatformComparison';
import ROICalculator from '@/components/guide/ROICalculator';
import CountryPlaybooks from '@/components/guide/CountryPlaybooks';

const navItems = [
  { id: 'executive-summary', label: 'Executive Summary' },
  { id: 'introduction', label: 'Introduction' },
  { id: 'technical-fundamentals', label: 'Technical Fundamentals' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'competitive-landscape', label: 'Competitive Landscape' },
  { id: 'roi-business-case', label: 'ROI & Business Case' },
  { id: 'trends-future', label: 'Trends & Future' },
  { id: 'country-considerations', label: 'Country Considerations' },
  { id: 'conclusion', label: 'Conclusion' },
];

export default function ServerSideTaggingGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Sidebar Navigation - Client Component */}
          <GuideNavigation navItems={navItems} />

          {/* Content */}
          <div className="flex-1 max-w-4xl">

            {/* Executive Summary */}
            <section id="executive-summary" className="mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                Server-Side Tagging Solutions
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Server-side tagging represents a strategic shift in data collection, enabling businesses to overcome browser restrictions and privacy challenges while improving marketing effectiveness.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#1d4ed8]">30-40%</div>
                  <div className="text-sm font-semibold text-gray-900 mt-2">Recapture Lost Data</div>
                  <div className="text-xs text-gray-500 mt-1">Recovery of conversion data blocked by ad blockers</div>
                </div>
                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#1d4ed8]">2x</div>
                  <div className="text-sm font-semibold text-gray-900 mt-2">Enhanced ROAS</div>
                  <div className="text-xs text-gray-500 mt-1">Meta ROAS doubled for Petrol Industries</div>
                </div>
                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#1d4ed8]">40-60%</div>
                  <div className="text-sm font-semibold text-gray-900 mt-2">Boost Performance</div>
                  <div className="text-xs text-gray-500 mt-1">Faster page loads with reduced JS</div>
                </div>
                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#1d4ed8]">Future</div>
                  <div className="text-sm font-semibold text-gray-900 mt-2">Privacy-First</div>
                  <div className="text-xs text-gray-500 mt-1">Resilient to cookie deprecation</div>
                </div>
              </div>
            </section>

            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">Introduction</h2>
                      <p className="text-gray-500 text-sm">Understanding the tracking landscape</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Traditional client-side tracking faces unprecedented challenges. Ad blockers affect 30-40% of users, browsers restrict third-party cookies, and privacy regulations demand compliance. The result? Critical data loss undermining marketing decisions.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Server-side tagging solves this by routing data through your controlled server before reaching platforms, bypassing browser restrictions while maintaining compliance and improving accuracy.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Fundamentals */}
            <section id="technical-fundamentals" className="mb-16">
              <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">Technical Fundamentals</h2>
                      <p className="text-gray-500 text-sm">How server-side tagging works</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Server-side tagging fundamentally transforms data collection by shifting processing from users&apos; browsers to your controlled server environment.
                  </p>

              {/* Top Banner - 3 Blue Boxes */}
              <div className="grid grid-cols-3 gap-0 mb-10 border border-[#bfdbfe] rounded-lg overflow-hidden">
                <div className="bg-[#eff6ff] p-4 border-r border-[#bfdbfe]">
                  <div className="text-xs font-bold text-[#1e40af] uppercase tracking-wider mb-1">DATA CONTROL</div>
                  <div className="text-sm text-gray-700">Full governance over every data point</div>
                </div>
                <div className="bg-[#eff6ff] p-4 border-r border-[#bfdbfe]">
                  <div className="text-xs font-bold text-[#1e40af] uppercase tracking-wider mb-1">BYPASS BLOCKERS</div>
                  <div className="text-sm text-gray-700">First-party context avoids restrictions</div>
                </div>
                <div className="bg-[#eff6ff] p-4">
                  <div className="text-xs font-bold text-[#1e40af] uppercase tracking-wider mb-1">SERVER-TO-SERVER</div>
                  <div className="text-sm text-gray-700">Direct API calls to vendor endpoints</div>
                </div>
              </div>

              {/* Technical Components */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Components</h3>
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="border border-[#bfdbfe] rounded-lg p-5 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Custom Domain</h4>
                    <p className="text-sm text-gray-500">e.g., analytics.yourdomain.com for first-party context</p>
                  </div>
                </div>

                <div className="border border-[#bfdbfe] rounded-lg p-5 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tagging Server</h4>
                    <p className="text-sm text-gray-500">Hosted on cloud infrastructure (GCP, AWS)</p>
                  </div>
                </div>

                <div className="border border-[#bfdbfe] rounded-lg p-5 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Server Container</h4>
                    <p className="text-sm text-gray-500">Houses your configuration and processing logic</p>
                  </div>
                </div>

                <div className="border border-[#bfdbfe] rounded-lg p-5 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Clients & Tags</h4>
                    <p className="text-sm text-gray-500">Parse requests and send data to vendor endpoints</p>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Client-Side vs Server-Side Comparison</h3>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr_1.2fr_1.2fr] border-b border-gray-200">
                  <div className="px-5 py-4 bg-white border-r border-gray-200">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">ASPECT</span>
                  </div>
                  <div className="px-5 py-4 bg-white border-r border-gray-200">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">CLIENT-SIDE TAGGING</span>
                  </div>
                  <div className="px-5 py-4 bg-[#eff6ff]">
                    <span className="text-sm font-semibold text-[#1e40af] uppercase tracking-wider">SERVER-SIDE TAGGING ✓</span>
                  </div>
                </div>

                {/* Table Rows */}
                {[
                  { aspect: 'Data Processing', client: 'Browser executes JavaScript', server: 'Server processes requests' },
                  { aspect: 'Performance Impact', client: 'Increases page load by 1-3s', server: 'Reduces load time by 40-60%' },
                  { aspect: 'Ad Blocker Resistance', client: '20-30% data loss', server: '95%+ data capture' },
                  { aspect: 'Data Control', client: 'Third-party scripts dictate collection', server: 'Full governance over data flows' },
                  { aspect: 'Privacy Compliance', client: 'Limited control, potential PII leaks', server: 'Complete data sanitization, consent enforcement' },
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-[1fr_1.2fr_1.2fr] border-b border-gray-100 last:border-b-0">
                    <div className="px-5 py-4 border-r border-gray-200">
                      <span className="text-sm font-medium text-gray-900 border-b-2 border-[#3b82f6]">{row.aspect}</span>
                    </div>
                    <div className="px-5 py-4 border-r border-gray-200">
                      <span className="text-sm text-gray-600">{row.client}</span>
                    </div>
                    <div className="px-5 py-4 bg-[#eff6ff]/50 flex items-center justify-between">
                      <span className="text-sm text-gray-700">{row.server}</span>
                      <div className="w-6 h-6 bg-[#dbeafe] rounded border border-[#93c5fd] flex items-center justify-center flex-shrink-0 ml-2">
                        <HiCheck className="w-4 h-4 text-[#1d4ed8]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                </div>
              </div>
            </section>

            {/* Core Benefits */}
            <section id="benefits" className="mb-16">
              <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">Core Benefits</h2>
                      <p className="text-gray-500 text-sm">Why server-side tagging matters</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">

              {/* Data Privacy */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#dbeafe] rounded-lg flex items-center justify-center">
                    <HiShieldCheck className="w-6 h-6 text-[#1d4ed8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Data Privacy & Compliance</h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Server-side tagging delivers <span className="border-b-2 border-[#3b82f6] font-medium">full data governance</span>, enabling you to inspect, filter, and sanitize every data point before vendor transmission. This architecture inherently reduces third-party risk by eliminating direct browser-to-vendor communication, preventing unauthorized data collection and PII leaks.
                </p>

                {/* Country Selector - Client Component */}
                <BenefitsCountrySection />
              </div>

              {/* Website Performance */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Performance</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Eliminating client-side JavaScript execution delivers 40-60% faster page loads and improves Core Web Vitals scores by 25-35%.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#eff6ff] rounded-xl p-6 border border-[#dbeafe]">
                    <div className="text-xs font-bold text-[#1d4ed8] uppercase mb-1">LCP</div>
                    <div className="text-3xl font-bold text-[#1d4ed8]">1.8<span className="text-lg">s</span></div>
                    <div className="text-xs text-gray-500 mt-1">49% faster</div>
                  </div>
                  <div className="bg-[#eff6ff] rounded-xl p-6 border border-[#dbeafe]">
                    <div className="text-xs font-bold text-[#1d4ed8] uppercase mb-1">FID</div>
                    <div className="text-3xl font-bold text-[#1d4ed8]">65<span className="text-lg">ms</span></div>
                    <div className="text-xs text-gray-500 mt-1">64% faster</div>
                  </div>
                  <div className="bg-[#eff6ff] rounded-xl p-6 border border-[#dbeafe]">
                    <div className="text-xs font-bold text-[#1d4ed8] uppercase mb-1">CLS</div>
                    <div className="text-3xl font-bold text-[#1d4ed8]">0.05</div>
                    <div className="text-xs text-gray-500 mt-1">80% better</div>
                  </div>
                </div>
              </div>

              {/* Campaign Performance */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Campaign Ads Performance</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Server-side implementations yield 30-40% more accurate data by bypassing ad blockers and browser restrictions.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-[#1d4ed8]">+40%</div>
                    <div className="text-sm font-medium text-gray-900 mt-2">Data Accuracy</div>
                  </div>
                  <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-[#1d4ed8]">25%</div>
                    <div className="text-sm font-medium text-gray-900 mt-2">CPA Reduction</div>
                  </div>
                  <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-[#1d4ed8]">+20%</div>
                    <div className="text-sm font-medium text-gray-900 mt-2">Attribution</div>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </section>

            {/* Implementation */}
            <section id="implementation" className="mb-16">
              <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">Implementation Strategies</h2>
                      <p className="text-gray-500 text-sm">Platform selection & deployment approaches</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Selecting the right server-side tagging platform depends on your technical capacity, budget, and privacy requirements.
                  </p>

              {/* Expandable Platform Table - Client Component */}
              <PlatformComparison />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Phased Rollout</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Run client-side and server-side tracking in parallel during transition, enabling data validation before full cutover.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Tag-by-Tag Method</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Configure each tag individually with data validation checkpoints. Use GTM&apos;s preview mode to verify.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </section>

            {/* Case Studies */}
            <section id="case-studies" className="mb-16">
              <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">Case Studies</h2>
                      <p className="text-gray-500 text-sm">Proven success stories</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Real Results from Server-Side Implementation</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                  <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                    <div className="text-xs font-medium opacity-80">Fashion Retail</div>
                    <div className="font-semibold">Petrol Industries</div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-600 mb-6">Doubled Meta ROAS through server-side implementation</p>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#1d4ed8]">2x</div>
                      <div className="text-sm text-gray-500">ROAS</div>
                    </div>
                  </div>
                </div>

                <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                  <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                    <div className="text-xs font-medium opacity-80">Beauty</div>
                    <div className="font-semibold">Skincare Brand</div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-600 mb-6">Increased recorded purchases by 162%</p>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#1d4ed8]">162%</div>
                      <div className="text-sm text-gray-500">Conversion Increase</div>
                    </div>
                  </div>
                </div>

                <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                  <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                    <div className="text-xs font-medium opacity-80">E-commerce</div>
                    <div className="font-semibold">HoneyBalm</div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-600 mb-6">Dramatically increased abandonment recovery</p>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#1d4ed8]">213%</div>
                      <div className="text-sm text-gray-500">Revenue Recovery</div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </section>

            {/* Competitive Landscape */}
            <section id="competitive-landscape" className="mb-16">
              <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">Competitive Landscape</h2>
                      <p className="text-gray-500 text-sm">Solution selection considerations</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
              <ul className="space-y-4">
                {[
                  'Technical capacity and developer resources available',
                  'Privacy compliance requirements (GDPR, CCPA, PIPEDA)',
                  'Budget for implementation and ongoing infrastructure costs',
                  'Integration needs with existing martech stack',
                  'Performance optimization priorities (Core Web Vitals impact)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheckCircle className="text-[#2563eb] flex-shrink-0 mt-0.5 w-5 h-5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
                </div>
              </div>
            </section>

            {/* ROI & Business Case */}
            <section id="roi-business-case" className="mb-16">
              <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">ROI & Business Case</h2>
                      <p className="text-gray-500 text-sm">Building your investment justification</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Implementation Investment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Initial setup costs typically range from $5,000–$15,000 for mid-market deployments. Monthly operational expenses average $500–$2,000 for cloud hosting and maintenance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Quantifiable Returns</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong className="text-gray-900">Recovered Conversions:</strong> 15–40% of lost data</li>
                    <li><strong className="text-gray-900">ROAS Improvement:</strong> 50–120% increases</li>
                    <li><strong className="text-gray-900">Risk Mitigation:</strong> Avoid $7,500–$75,000 fines</li>
                  </ul>
                </div>
              </div>

              {/* ROI Calculator - Client Component */}
              <ROICalculator />
                </div>
              </div>
            </section>

            {/* Trends & Future */}
            <section id="trends-future" className="mb-16">
              <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">Trends & Future Outlook</h2>
                      <p className="text-gray-500 text-sm">Where server-side tagging is headed</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-8">
                Server-side tagging adoption accelerated 180% in 2024–2025 as Chrome solidified third-party cookie restrictions. By 2027, 65% of enterprise digital marketing stacks will rely on server-side architectures.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#1d4ed8]">180%</div>
                  <div className="text-sm text-gray-600 mt-2">Adoption growth 2024-2025</div>
                </div>
                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#1d4ed8]">65%</div>
                  <div className="text-sm text-gray-600 mt-2">Enterprise adoption by 2027</div>
                </div>
                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#1d4ed8]">2025</div>
                  <div className="text-sm text-gray-600 mt-2">US opt-out signals enforced</div>
                </div>
              </div>
                </div>
              </div>
            </section>

            {/* Country Playbooks */}
            <section id="country-considerations" className="mb-16">
              <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">Country Implementation Playbooks</h2>
                      <p className="text-gray-500 text-sm">Region-specific compliance guidance</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
              {/* Country Playbooks - Client Component */}
              <CountryPlaybooks />
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-16">
              <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">Get Started</h2>
                      <p className="text-gray-500 text-sm">Your competitive edge starts here</p>
                    </div>
                  </div>
                </div>
              <div className="bg-[#eff6ff] p-10 text-gray-800 border-t border-[#bfdbfe]">
                <h2 className="text-3xl font-bold mb-4">Your Competitive Edge Starts Here</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Server-side tagging isn&apos;t optional—it&apos;s foundational infrastructure for privacy-compliant, performance-optimized digital marketing. Tag Specialist delivers turnkey implementations tailored to your jurisdiction, tech stack, and growth objectives.
                </p>

                <div className="flex gap-4">
                  <Link
                    href="/book-audit"
                    className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/25"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    href="/book-audit"
                    className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                  >
                    Schedule Consultation
                  </Link>
                </div>

                <div className="mt-10 pt-8 border-t border-[#bfdbfe]">
                  <h3 className="font-bold text-gray-900 mb-4">Continue Reading</h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <Link href="/benefits-of-server-side-tagging" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all">
                      <p className="font-semibold text-gray-900 text-sm">Benefits of Server-Side Tagging</p>
                      <p className="text-gray-500 text-xs mt-1">The business case for switching</p>
                    </Link>
                    <Link href="/google-tag-manager-specialist" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all">
                      <p className="font-semibold text-gray-900 text-sm">GTM Specialist Services</p>
                      <p className="text-gray-500 text-xs mt-1">Expert implementation & audit</p>
                    </Link>
                    <Link href="/unified-data-platform-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all">
                      <p className="font-semibold text-gray-900 text-sm">Unified Data Platform Guide</p>
                      <p className="text-gray-500 text-xs mt-1">BigQuery, attribution & ML</p>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
