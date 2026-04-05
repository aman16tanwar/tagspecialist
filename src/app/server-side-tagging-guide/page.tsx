'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiCheckCircle, HiCheck, HiShieldCheck, HiChevronDown } from 'react-icons/hi';

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
  const [selectedCountry, setSelectedCountry] = useState<'usa' | 'canada' | 'australia'>('usa');
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set(['executive-summary']));

  // ROI Calculator state
  const [monthlyTraffic, setMonthlyTraffic] = useState(100000);
  const [conversionRate, setConversionRate] = useState(2.5);
  const [dataLoss, setDataLoss] = useState(30);
  const [avgOrderValue, setAvgOrderValue] = useState(85);
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null);

  const toggleCheckItem = (id: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // ROI Calculations
  const recoveryRate = 0.78;
  const currentMonthlyConversions = monthlyTraffic * (conversionRate / 100);
  const lostConversions = currentMonthlyConversions * (dataLoss / 100);
  const recoveredConversions = lostConversions * recoveryRate;
  const monthlyRecovery = recoveredConversions * avgOrderValue;
  const annualRecovery = monthlyRecovery * 12;
  const roasImprovement = Math.round((recoveredConversions / currentMonthlyConversions) * 100);

  const countryData = {
    usa: {
      name: 'United States',
      laws: ['CCPA/CPRA', 'State Privacy Laws', 'FTC Act Section 5'],
      consentModel: 'Opt-out (opt-in for minors under 16)',
      keyLegislation: ['CCPA/CPRA', 'State Privacy Laws', 'FTC Act Section 5'],
      keyRequirements: [
        'Honor Universal Opt-Out Mechanisms (UOOM) and Global Privacy Control (GPC) signals at the server level',
        'Implement data minimization for sensitive personal information categories including precise geolocation, race, and health data',
        'Conduct Data Protection Impact Assessments (DPIAs) for targeted advertising and profiling activities',
        'Provide clear opt-out mechanisms for the sale or sharing of personal information',
        'Maintain contracts with service providers that include CPRA-required provisions',
      ],
      dataSubjectRights: [
        'Right to Access personal information',
        'Right to Delete collected data',
        'Right to Correct inaccurate information',
        'Right to Opt-out of Sale/Sharing',
        'Right to Limit Use of Sensitive PI',
      ],
      checklist: [
        { id: 'us-1', category: 'Technical', item: 'Configure server-side consent mode with GPC signal detection' },
        { id: 'us-2', category: 'Technical', item: 'Implement Do Not Sell/Share link in website footer' },
        { id: 'us-3', category: 'Technical', item: 'Set up sensitive data category flagging in server container' },
        { id: 'us-4', category: 'Legal', item: 'Map vendor contracts to state-specific data processing clauses' },
        { id: 'us-5', category: 'Legal', item: 'Document legitimate business purpose for each data collection point' },
        { id: 'us-6', category: 'Operations', item: 'Establish 45-day DSAR (Data Subject Access Request) response workflows' },
        { id: 'us-7', category: 'Operations', item: 'Configure data retention policies per state requirements' },
        { id: 'us-8', category: 'Operations', item: 'Set up consumer request intake and verification process' },
      ],
    },
    canada: {
      name: 'Canada',
      laws: ['PIPEDA', 'Proposed CPPA', 'Quebec Law 25'],
      consentModel: 'Meaningful consent (express for sensitive, implied for legitimate interest)',
      keyLegislation: ['PIPEDA', 'Proposed CPPA', 'Provincial Laws (Quebec Law 25)'],
      keyRequirements: [
        'Obtain meaningful express consent for non-essential data processing activities',
        'Document clearly stated purposes for all data collection at server endpoints',
        'Ensure adequate safeguards for cross-border data transfers (contractual clauses, adequacy)',
        'Implement Privacy by Design principles in server architecture',
        'Appoint designated privacy officer with documented accountability',
      ],
      dataSubjectRights: [
        'Right to Access personal information',
        'Right to Correction of data',
        'Right to Data Mobility (proposed CPPA)',
        'Right to Disposal of data',
        'Right to Withdraw consent',
      ],
      keyDates: [
        { date: 'SEP 2024', description: 'Quebec Law 25 fully in effect with penalties' },
      ],
      checklist: [
        { id: 'ca-1', category: 'Governance', item: 'Appoint Chief Privacy Officer with documented responsibilities' },
        { id: 'ca-2', category: 'Governance', item: 'Implement Privacy Impact Assessment (PIA) process' },
        { id: 'ca-3', category: 'Legal', item: 'Deploy transparent, plain-language privacy policies' },
        { id: 'ca-4', category: 'Legal', item: 'Conduct Transfer Impact Assessments for US-based server hosting' },
        { id: 'ca-5', category: 'Compliance', item: 'Retain consent records with timestamp and version tracking' },
        { id: 'ca-6', category: 'Compliance', item: 'Document data flow mappings with cross-border disclosures' },
        { id: 'ca-7', category: 'Technical', item: 'Configure bilingual consent collection (English/French)' },
        { id: 'ca-8', category: 'Operations', item: 'Set up breach notification protocols (72-hour reporting)' },
      ],
    },
    australia: {
      name: 'Australia',
      laws: ['Privacy Act 1988', '13 Australian Privacy Principles (APPs)', 'Notifiable Data Breaches scheme'],
      consentModel: 'Express/implied (higher bar for sensitive information)',
      keyLegislation: ['Privacy Act 1988', '13 Australian Privacy Principles (APPs)', 'Notifiable Data Breaches scheme'],
      keyRequirements: [
        'Ensure \'fair and reasonable\' collection practices under APP 3',
        'Implement server-side notice-at-collection mechanisms before data capture',
        'Disclose overseas data flows to US cloud providers explicitly in privacy policy',
        'Maintain data quality and security safeguards under APP 6 and APP 11',
        'Provide direct marketing opt-out with immediate effect',
      ],
      dataSubjectRights: [
        'Right to Access personal information',
        'Right to Correction of data',
        'Right to Anonymity (where practicable)',
        'Right to Opt-out of direct marketing',
        'Right to Complain to OAIC',
      ],
      checklist: [
        { id: 'au-1', category: 'Legal', item: 'Update privacy policy with overseas disclosure clauses (US servers)' },
        { id: 'au-2', category: 'Technical', item: 'Configure regional server endpoints or document transfer basis' },
        { id: 'au-3', category: 'Technical', item: 'Implement collection notices at point of server-side data capture' },
        { id: 'au-4', category: 'Technical', item: 'Configure direct marketing preference center with real-time sync' },
        { id: 'au-5', category: 'Operations', item: 'Establish data breach notification protocols (notify OAIC and affected)' },
        { id: 'au-6', category: 'Operations', item: 'Set up data retention and destruction schedules per APP 11.2' },
        { id: 'au-7', category: 'Compliance', item: 'Document APP compliance across all 13 principles' },
        { id: 'au-8', category: 'Compliance', item: 'Configure data quality validation at server endpoints' },
      ],
    },
  };

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

  // Track scroll position to update active section
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

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
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
            </div>
          </div>

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

              {/* Top Banner - 3 Green Boxes */}
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

                {/* Country Selector */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Select Region</div>
                  <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                    {(['usa', 'canada', 'australia'] as const).map((country) => (
                      <button
                        key={country}
                        onClick={() => setSelectedCountry(country)}
                        className={`flex-1 py-3 px-6 text-sm font-medium transition-colors ${
                          selectedCountry === country
                            ? 'bg-[#eff6ff] text-gray-800'
                            : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {country.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Regulatory Details Table */}
                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-[#eff6ff] text-gray-800 px-6 py-3 font-semibold">
                      REGULATORY DETAILS: {countryData[selectedCountry].name.toUpperCase()}
                    </div>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50 w-1/3">Primary Laws</td>
                          <td className="px-6 py-4 text-gray-600">{countryData[selectedCountry].laws.join(', ')}</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">Consent Model</td>
                          <td className="px-6 py-4 text-gray-600">{countryData[selectedCountry].consentModel}</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">Data Subject Rights</td>
                          <td className="px-6 py-4 text-gray-600">{countryData[selectedCountry].dataSubjectRights.slice(0, 3).map(r => r.replace('Right to ', '')).join(', ')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Geographic Overview */}
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-[#eff6ff] text-gray-800 px-6 py-3 font-semibold">
                      GEOGRAPHIC OVERVIEW
                    </div>
                    <div className="p-6 flex items-center justify-center min-h-[200px] bg-[#eff6ff]">
                      <div className="text-center">
                        <div className="text-6xl mb-2">
                          {selectedCountry === 'usa' ? '🇺🇸' : selectedCountry === 'canada' ? '🇨🇦' : '🇦🇺'}
                        </div>
                        <div className="text-sm font-medium text-gray-700">{countryData[selectedCountry].name}</div>
                        <div className="flex gap-2 justify-center mt-3">
                          {countryData[selectedCountry].keyLegislation.map((law, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white rounded text-xs font-medium text-[#1d4ed8] border border-[#bfdbfe]">
                              {law}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Legislation */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-[#eff6ff] rounded-full"></div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Key Legislation</span>
                  </div>
                  <div className="flex gap-2">
                    {countryData[selectedCountry].keyLegislation.map((law, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                        {law}
                      </span>
                    ))}
                  </div>
                </div>
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

              {/* Expandable Platform Table */}
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-8">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr_1fr_1fr_1.5fr_auto] bg-[#eff6ff] text-gray-800">
                  <div className="px-4 py-3 font-semibold text-sm flex items-center gap-1">Platform <HiChevronDown className="w-4 h-4" /></div>
                  <div className="px-4 py-3 font-semibold text-sm flex items-center gap-1">Best For <HiChevronDown className="w-4 h-4" /></div>
                  <div className="px-4 py-3 font-semibold text-sm flex items-center gap-1">Pricing <HiChevronDown className="w-4 h-4" /></div>
                  <div className="px-4 py-3 font-semibold text-sm">Key Features</div>
                  <div className="px-4 py-3 w-12"></div>
                </div>

                {/* Google sGTM Row */}
                <div className="border-t border-gray-100">
                  <div
                    onClick={() => setExpandedPlatform(expandedPlatform === 'sgtm' ? null : 'sgtm')}
                    className="grid grid-cols-[1fr_1fr_1fr_1.5fr_auto] cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="px-4 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#dbeafe] rounded flex items-center justify-center text-[#1d4ed8] text-sm">📊</div>
                      <span className="font-medium text-gray-900">Google sGTM</span>
                    </div>
                    <div className="px-4 py-4 text-gray-600 underline decoration-dotted">Google ecosystem users</div>
                    <div className="px-4 py-4 text-gray-600 underline decoration-dotted">Free (hosting costs apply)</div>
                    <div className="px-4 py-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-[#eff6ff] border border-[#bfdbfe] rounded text-xs text-[#1e40af]">Native GA4 & Google Ads integration</span>
                      <span className="px-2 py-1 bg-[#eff6ff] border border-[#bfdbfe] rounded text-xs text-[#1e40af]">Custom domain routing</span>
                      <span className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs text-gray-600">+3 more</span>
                    </div>
                    <div className="px-4 py-4 flex items-center">
                      <HiChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedPlatform === 'sgtm' ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Expanded Content - sGTM */}
                  {expandedPlatform === 'sgtm' && (
                    <div className="border-t border-gray-100 bg-gray-50 p-6">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">BEST FOR (DETAILS)</h4>
                            <p className="text-sm text-gray-600">Ideal for businesses already heavily invested in Google Analytics, Google Ads, and the broader Google Marketing Platform.</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">PRICING DETAILS</h4>
                            <p className="text-sm text-gray-600">The sGTM container itself is free, but you&apos;ll pay for cloud hosting (GCP typically $50-200/month depending on traffic).</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">BEST FIT SCENARIO</h4>
                            <div className="bg-[#eff6ff] text-gray-800 p-4 rounded-lg text-sm">
                              E-commerce brands using GA4 and Google Ads who want full control over their data pipeline without vendor lock-in.
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">ALL FEATURES</h4>
                            <div className="space-y-2">
                              {['Native GA4 & Google Ads integration', 'Custom domain routing', 'Built-in event transformations', 'Preview mode for testing', 'Community templates'].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                  <div className="w-4 h-4 bg-[#eff6ff] rounded flex items-center justify-center">
                                    <HiCheck className="w-3 h-3 text-white" />
                                  </div>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-xs font-bold text-[#1d4ed8] uppercase tracking-wider mb-2">PROS</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                <li className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> No licensing cost</li>
                                <li className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> Deep Google integration</li>
                                <li className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> Large community support</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">CONS</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                <li className="flex items-start gap-1"><span className="text-gray-400">-</span> Requires technical expertise</li>
                                <li className="flex items-start gap-1"><span className="text-gray-400">-</span> Self-managed infrastructure</li>
                                <li className="flex items-start gap-1"><span className="text-gray-400">-</span> Limited native support for non-Google vendors</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Segment Row */}
                <div className="border-t border-gray-100">
                  <div
                    onClick={() => setExpandedPlatform(expandedPlatform === 'segment' ? null : 'segment')}
                    className="grid grid-cols-[1fr_1fr_1fr_1.5fr_auto] cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="px-4 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#dbeafe] rounded flex items-center justify-center text-[#1d4ed8] text-sm">🔗</div>
                      <span className="font-medium text-gray-900">Segment</span>
                    </div>
                    <div className="px-4 py-4 text-gray-600 underline decoration-dotted">Complex tech stacks</div>
                    <div className="px-4 py-4 text-gray-600 underline decoration-dotted">From $120/month</div>
                    <div className="px-4 py-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-[#eff6ff] border border-[#bfdbfe] rounded text-xs text-[#1e40af]">Unified customer profiles</span>
                      <span className="px-2 py-1 bg-[#eff6ff] border border-[#bfdbfe] rounded text-xs text-[#1e40af]">400+ native integrations</span>
                      <span className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs text-gray-600">+3 more</span>
                    </div>
                    <div className="px-4 py-4 flex items-center">
                      <HiChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedPlatform === 'segment' ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Expanded Content - Segment */}
                  {expandedPlatform === 'segment' && (
                    <div className="border-t border-gray-100 bg-gray-50 p-6">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">BEST FOR (DETAILS)</h4>
                            <p className="text-sm text-gray-600">Organizations with complex martech stacks requiring unified customer data across multiple platforms and tools.</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">PRICING DETAILS</h4>
                            <p className="text-sm text-gray-600">Starts at $120/month for Teams plan. Growth and Business tiers scale with MTU (monthly tracked users).</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">BEST FIT SCENARIO</h4>
                            <div className="bg-[#eff6ff] text-gray-800 p-4 rounded-lg text-sm">
                              SaaS companies and enterprises needing a Customer Data Platform with server-side capabilities and extensive integrations.
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">ALL FEATURES</h4>
                            <div className="space-y-2">
                              {['Unified customer profiles', '400+ native integrations', 'Identity resolution', 'Real-time audiences', 'Data governance tools'].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                  <div className="w-4 h-4 bg-[#eff6ff] rounded flex items-center justify-center">
                                    <HiCheck className="w-3 h-3 text-white" />
                                  </div>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-xs font-bold text-[#1d4ed8] uppercase tracking-wider mb-2">PROS</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                <li className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> Extensive integrations</li>
                                <li className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> Built-in CDP features</li>
                                <li className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> Managed infrastructure</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">CONS</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                <li className="flex items-start gap-1"><span className="text-gray-400">-</span> Higher cost at scale</li>
                                <li className="flex items-start gap-1"><span className="text-gray-400">-</span> Learning curve</li>
                                <li className="flex items-start gap-1"><span className="text-gray-400">-</span> Vendor lock-in concerns</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Stape Row */}
                <div className="border-t border-gray-100">
                  <div
                    onClick={() => setExpandedPlatform(expandedPlatform === 'stape' ? null : 'stape')}
                    className="grid grid-cols-[1fr_1fr_1fr_1.5fr_auto] cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="px-4 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#dbeafe] rounded flex items-center justify-center text-[#1d4ed8] text-sm">⚡</div>
                      <span className="font-medium text-gray-900">Stape</span>
                    </div>
                    <div className="px-4 py-4 text-gray-600 underline decoration-dotted">Quick setup, agencies</div>
                    <div className="px-4 py-4 text-gray-600 underline decoration-dotted">From $20/month</div>
                    <div className="px-4 py-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-[#eff6ff] border border-[#bfdbfe] rounded text-xs text-[#1e40af]">Hosted sGTM infrastructure</span>
                      <span className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs text-gray-600">+3 more</span>
                    </div>
                    <div className="px-4 py-4 flex items-center">
                      <HiChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedPlatform === 'stape' ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Expanded Content - Stape */}
                  {expandedPlatform === 'stape' && (
                    <div className="border-t border-gray-100 bg-gray-50 p-6">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">BEST FOR (DETAILS)</h4>
                            <p className="text-sm text-gray-600">Agencies and businesses wanting sGTM benefits without managing cloud infrastructure themselves.</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">PRICING DETAILS</h4>
                            <p className="text-sm text-gray-600">Starts at $20/month for small sites. Scales based on server requests and number of containers needed.</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">BEST FIT SCENARIO</h4>
                            <div className="bg-[#eff6ff] text-gray-800 p-4 rounded-lg text-sm">
                              Agencies managing multiple client accounts or SMBs wanting quick sGTM deployment without DevOps overhead.
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">ALL FEATURES</h4>
                            <div className="space-y-2">
                              {['Hosted sGTM infrastructure', 'One-click deployment', 'Custom domain setup', 'Auto-scaling', 'Multi-region support'].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                  <div className="w-4 h-4 bg-[#eff6ff] rounded flex items-center justify-center">
                                    <HiCheck className="w-3 h-3 text-white" />
                                  </div>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-xs font-bold text-[#1d4ed8] uppercase tracking-wider mb-2">PROS</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                <li className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> No DevOps required</li>
                                <li className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> Quick setup</li>
                                <li className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> Affordable pricing</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">CONS</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                <li className="flex items-start gap-1"><span className="text-gray-400">-</span> Less customization</li>
                                <li className="flex items-start gap-1"><span className="text-gray-400">-</span> Third-party dependency</li>
                                <li className="flex items-start gap-1"><span className="text-gray-400">-</span> Limited enterprise features</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tealium Row */}
                <div className="border-t border-gray-100">
                  <div
                    onClick={() => setExpandedPlatform(expandedPlatform === 'tealium' ? null : 'tealium')}
                    className="grid grid-cols-[1fr_1fr_1fr_1.5fr_auto] cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="px-4 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#dbeafe] rounded flex items-center justify-center text-[#1d4ed8] text-sm">🏢</div>
                      <span className="font-medium text-gray-900">Tealium</span>
                    </div>
                    <div className="px-4 py-4 text-gray-600 underline decoration-dotted">Enterprise</div>
                    <div className="px-4 py-4 text-gray-600 underline decoration-dotted">Custom pricing</div>
                    <div className="px-4 py-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-[#eff6ff] border border-[#bfdbfe] rounded text-xs text-[#1e40af]">Enterprise-grade compliance</span>
                      <span className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs text-gray-600">+4 more</span>
                    </div>
                    <div className="px-4 py-4 flex items-center">
                      <HiChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedPlatform === 'tealium' ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Expanded Content - Tealium */}
                  {expandedPlatform === 'tealium' && (
                    <div className="border-t border-gray-100 bg-gray-50 p-6">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">BEST FOR (DETAILS)</h4>
                            <p className="text-sm text-gray-600">Large enterprises with strict compliance requirements, complex data governance needs, and dedicated analytics teams.</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">PRICING DETAILS</h4>
                            <p className="text-sm text-gray-600">Enterprise pricing based on data volume and features. Typically starts at $50K+/year for full platform access.</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">BEST FIT SCENARIO</h4>
                            <div className="bg-[#eff6ff] text-gray-800 p-4 rounded-lg text-sm">
                              Fortune 500 companies in regulated industries (finance, healthcare) requiring enterprise SLAs and advanced consent management.
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">ALL FEATURES</h4>
                            <div className="space-y-2">
                              {['Enterprise-grade compliance', 'Advanced consent orchestration', 'Real-time data enrichment', 'Machine learning audiences', 'Dedicated support'].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                  <div className="w-4 h-4 bg-[#eff6ff] rounded flex items-center justify-center">
                                    <HiCheck className="w-3 h-3 text-white" />
                                  </div>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-xs font-bold text-[#1d4ed8] uppercase tracking-wider mb-2">PROS</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                <li className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> Enterprise SLAs</li>
                                <li className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> Advanced compliance</li>
                                <li className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> Dedicated support</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">CONS</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                <li className="flex items-start gap-1"><span className="text-gray-400">-</span> High cost</li>
                                <li className="flex items-start gap-1"><span className="text-gray-400">-</span> Complex implementation</li>
                                <li className="flex items-start gap-1"><span className="text-gray-400">-</span> Long sales cycle</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

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

              {/* ROI Calculator */}
              <div className="border border-[#bfdbfe] rounded-xl overflow-hidden">
                {/* Header */}
                <div className="bg-[#eff6ff] px-6 py-4 text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Interactive ROI Calculator</h3>
                      <p className="text-gray-500 text-sm">Estimate your potential revenue recovery</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2">
                  {/* Left: YOUR INPUTS */}
                  <div className="p-6 border-r border-[#dbeafe]">
                    <div className="inline-block px-3 py-1 bg-[#dbeafe] text-[#1e40af] text-xs font-bold uppercase tracking-wider rounded mb-6">
                      YOUR INPUTS
                    </div>

                    <div className="space-y-6">
                      {/* Monthly Traffic */}
                      <div className="border border-[#bfdbfe] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-[#dbeafe] rounded flex items-center justify-center">
                              <svg className="w-4 h-4 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">Monthly Traffic</span>
                            <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center cursor-help" title="Total monthly website visitors">
                              <span className="text-[10px] text-gray-500 font-bold">?</span>
                            </div>
                          </div>
                          <span className="text-lg font-bold text-[#1d4ed8]">{(monthlyTraffic / 1000).toFixed(0)}K</span>
                        </div>
                        <input
                          type="range"
                          min="10000"
                          max="1000000"
                          step="10000"
                          value={monthlyTraffic}
                          onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                          className="w-full blue-slider"
                          style={{
                            background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((monthlyTraffic - 10000) / (1000000 - 10000)) * 100}%, #e5e7eb ${((monthlyTraffic - 10000) / (1000000 - 10000)) * 100}%, #e5e7eb 100%)`
                          }}
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                          <span>10K</span>
                          <span>1M</span>
                        </div>
                      </div>

                      {/* Conversion Rate */}
                      <div className="border border-[#bfdbfe] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-[#dbeafe] rounded flex items-center justify-center">
                              <svg className="w-4 h-4 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">Current Conversion Rate</span>
                            <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center cursor-help" title="Your current conversion rate percentage">
                              <span className="text-[10px] text-gray-500 font-bold">?</span>
                            </div>
                          </div>
                          <span className="text-lg font-bold text-[#1d4ed8]">{conversionRate.toFixed(1)}%</span>
                        </div>
                        <input
                          type="range"
                          min="0.5"
                          max="10"
                          step="0.1"
                          value={conversionRate}
                          onChange={(e) => setConversionRate(Number(e.target.value))}
                          className="w-full blue-slider"
                          style={{
                            background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((conversionRate - 0.5) / (10 - 0.5)) * 100}%, #e5e7eb ${((conversionRate - 0.5) / (10 - 0.5)) * 100}%, #e5e7eb 100%)`
                          }}
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                          <span>0.5%</span>
                          <span>10%</span>
                        </div>
                      </div>

                      {/* Estimated Data Loss */}
                      <div className="border border-[#bfdbfe] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-[#dbeafe] rounded flex items-center justify-center">
                              <svg className="w-4 h-4 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">Estimated Data Loss</span>
                            <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center cursor-help" title="Data lost due to ad blockers and browser restrictions">
                              <span className="text-[10px] text-gray-500 font-bold">?</span>
                            </div>
                          </div>
                          <span className="text-lg font-bold text-[#1d4ed8]">{dataLoss}%</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="50"
                          step="1"
                          value={dataLoss}
                          onChange={(e) => setDataLoss(Number(e.target.value))}
                          className="w-full blue-slider"
                          style={{
                            background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((dataLoss - 10) / (50 - 10)) * 100}%, #e5e7eb ${((dataLoss - 10) / (50 - 10)) * 100}%, #e5e7eb 100%)`
                          }}
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                          <span>10%</span>
                          <span>50%</span>
                        </div>
                      </div>

                      {/* Average Order Value */}
                      <div className="border border-[#bfdbfe] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-[#dbeafe] rounded flex items-center justify-center">
                              <svg className="w-4 h-4 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">Average Order Value</span>
                            <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center cursor-help" title="Average revenue per transaction">
                              <span className="text-[10px] text-gray-500 font-bold">?</span>
                            </div>
                          </div>
                          <span className="text-lg font-bold text-[#1d4ed8]">${avgOrderValue}</span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="500"
                          step="5"
                          value={avgOrderValue}
                          onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                          className="w-full blue-slider"
                          style={{
                            background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((avgOrderValue - 20) / (500 - 20)) * 100}%, #e5e7eb ${((avgOrderValue - 20) / (500 - 20)) * 100}%, #e5e7eb 100%)`
                          }}
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                          <span>$20</span>
                          <span>$500</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: POTENTIAL IMPACT */}
                  <div className="p-6 bg-[#eff6ff]/50">
                    <div className="inline-block px-3 py-1 bg-[#eff6ff] text-gray-800 text-xs font-bold uppercase tracking-wider rounded mb-6">
                      POTENTIAL IMPACT
                    </div>

                    {/* Top Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white border border-[#bfdbfe] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-4 h-4 bg-[#dbeafe] rounded flex items-center justify-center">
                            <svg className="w-3 h-3 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-xs font-semibold text-gray-500 uppercase">Monthly Recovery</span>
                        </div>
                        <div className="text-2xl font-bold text-[#1d4ed8]">${(monthlyRecovery / 1000).toFixed(1)}K</div>
                      </div>
                      <div className="bg-white border border-[#bfdbfe] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-4 h-4 bg-[#dbeafe] rounded flex items-center justify-center">
                            <svg className="w-3 h-3 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <span className="text-xs font-semibold text-gray-500 uppercase">ROAS Improvement</span>
                        </div>
                        <div className="text-2xl font-bold text-[#1d4ed8]">+{roasImprovement}%</div>
                      </div>
                    </div>

                    {/* Annual Recovered Revenue */}
                    <div className="bg-[#eff6ff] rounded-lg p-5 text-gray-800 mb-4 border border-[#bfdbfe]">
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">ANNUAL RECOVERED REVENUE</div>
                      <div className="text-4xl font-bold">${(annualRecovery / 1000).toFixed(1)}K</div>
                      <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
                        <span>→</span>
                        <span>Based on 78% data recovery rate</span>
                      </div>
                    </div>

                    {/* Monthly Revenue Breakdown */}
                    <div className="bg-white border border-[#bfdbfe] rounded-lg p-4 mb-4">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 border-b border-[#dbeafe] pb-2">
                        MONTHLY REVENUE BREAKDOWN
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-500 w-16">Current</span>
                          <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                            <div className="bg-[#2563eb] h-full rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-500 w-16">Lost</span>
                          <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                            <div className="bg-red-400 h-full rounded-full" style={{ width: `${dataLoss}%` }}></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-500 w-16">Recovered</span>
                          <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                            <div className="bg-[#93c5fd] h-full rounded-full" style={{ width: `${dataLoss * 0.78}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data Capture Distribution */}
                    <div className="bg-white border border-[#bfdbfe] rounded-lg p-4">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 border-b border-[#dbeafe] pb-2">
                        DATA CAPTURE DISTRIBUTION
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                            {/* Background circle */}
                            <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#e5e7eb" strokeWidth="3"></circle>
                            {/* Captured Data (green) - original data not lost */}
                            <circle
                              cx="18" cy="18" r="15.91549430918954"
                              fill="transparent"
                              stroke="#2563eb"
                              strokeWidth="3"
                              strokeDasharray={`${100 - dataLoss} 100`}
                              strokeDashoffset="0"
                            ></circle>
                            {/* Recovered Data (light green) - recovered via server-side */}
                            <circle
                              cx="18" cy="18" r="15.91549430918954"
                              fill="transparent"
                              stroke="#93c5fd"
                              strokeWidth="3"
                              strokeDasharray={`${dataLoss * 0.78} 100`}
                              strokeDashoffset={`${-(100 - dataLoss)}`}
                            ></circle>
                            {/* Lost Data (red) - permanently lost */}
                            <circle
                              cx="18" cy="18" r="15.91549430918954"
                              fill="transparent"
                              stroke="#f87171"
                              strokeWidth="3"
                              strokeDasharray={`${dataLoss * 0.22} 100`}
                              strokeDashoffset={`${-(100 - dataLoss) - (dataLoss * 0.78)}`}
                            ></circle>
                          </svg>
                          {/* Center text showing captured percentage */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold text-[#1d4ed8]">{Math.round(100 - dataLoss * 0.22)}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-4 mt-4">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-[#2563eb] rounded"></div>
                          <span className="text-xs text-gray-600">Captured Data</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-red-400 rounded"></div>
                          <span className="text-xs text-gray-600">Lost Data</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-[#93c5fd] rounded"></div>
                          <span className="text-xs text-gray-600">Recovered</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

              {/* Country Tabs - Full Width */}
              <div className="grid grid-cols-3 border border-gray-200 rounded-t-lg overflow-hidden">
                {(['usa', 'canada', 'australia'] as const).map((country) => (
                  <button
                    key={country}
                    onClick={() => setSelectedCountry(country)}
                    className={`py-4 px-6 text-sm font-semibold transition-colors border-r last:border-r-0 border-gray-200 ${
                      selectedCountry === country
                        ? 'bg-[#eff6ff] text-gray-800'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {country === 'usa' ? 'UNITED STATES' : country === 'canada' ? 'CANADA' : 'AUSTRALIA'}
                  </button>
                ))}
              </div>

              {/* Two Column Layout */}
              <div className="grid lg:grid-cols-[1fr_340px] border border-t-0 border-gray-200 rounded-b-lg overflow-hidden">
                {/* Left Column - Country Details */}
                <div className="p-6 border-r border-gray-200">
                  {/* Country Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#dbeafe] rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-[#3b82f6] pb-1">{countryData[selectedCountry].name}</h3>
                  </div>

                  {/* Legislation Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {countryData[selectedCountry].keyLegislation.map((law, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white border border-[#93c5fd] rounded text-xs font-medium text-[#1e40af]">
                        {law}
                      </span>
                    ))}
                  </div>

                  {/* Consent Model Box */}
                  <div className="border border-[#93c5fd] rounded-lg mb-6">
                    <div className="bg-[#eff6ff] px-4 py-2 border-b border-[#93c5fd]">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-xs font-bold text-[#1e40af] uppercase tracking-wider">CONSENT MODEL</span>
                      </div>
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-700 font-medium">{countryData[selectedCountry].consentModel}</p>
                    </div>
                  </div>

                  {/* Key Requirements */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-[#dbeafe] rounded-full flex items-center justify-center">
                        <span className="text-[#1d4ed8] text-xs font-bold">!</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 border-b-2 border-[#3b82f6]">Key Requirements</h4>
                    </div>
                    <div className="space-y-3">
                      {countryData[selectedCountry].keyRequirements.map((req, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-[#dbeafe] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-[#1d4ed8] text-xs font-bold">{idx + 1}</span>
                          </div>
                          <p className="text-sm text-gray-600">{req}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Data Subject Rights */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-5 h-5 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <h4 className="text-sm font-bold text-gray-900 border-b-2 border-[#3b82f6]">Data Subject Rights</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {countryData[selectedCountry].dataSubjectRights.map((right, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                          <div className="w-5 h-5 bg-[#dbeafe] rounded flex items-center justify-center flex-shrink-0">
                            <HiCheck className="w-3 h-3 text-[#1d4ed8]" />
                          </div>
                          <span className="text-xs text-gray-700">{right}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Dates - Only for Canada */}
                  {selectedCountry === 'canada' && countryData.canada.keyDates && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h4 className="text-sm font-bold text-gray-900 border-b-2 border-[#3b82f6]">Key Dates</h4>
                      </div>
                      <div className="space-y-2">
                        {countryData.canada.keyDates.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-[#eff6ff] text-gray-800 text-xs font-bold rounded">{item.date}</span>
                            <span className="text-sm text-gray-600">{item.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column - Implementation Checklist */}
                <div className="bg-gray-50 p-5">
                  {/* Checklist Progress */}
                  <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">CHECKLIST PROGRESS</span>
                      <span className="text-sm font-bold text-gray-900">
                        {countryData[selectedCountry].checklist.filter(item => checkedItems.has(item.id)).length}/{countryData[selectedCountry].checklist.length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#eff6ff] rounded-full h-2 transition-all"
                        style={{ width: `${(countryData[selectedCountry].checklist.filter(item => checkedItems.has(item.id)).length / countryData[selectedCountry].checklist.length) * 100}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {Math.round((countryData[selectedCountry].checklist.filter(item => checkedItems.has(item.id)).length / countryData[selectedCountry].checklist.length) * 100)}% complete
                    </div>
                  </div>

                  {/* Implementation Checklist Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <h4 className="text-sm font-bold text-gray-900 border-b-2 border-[#3b82f6]">Implementation Checklist</h4>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">Track your implementation progress. Click items to mark them complete.</p>

                  {/* Grouped Checklist Items */}
                  <div className="space-y-4">
                    {['Technical', 'Legal', 'Governance', 'Compliance', 'Operations'].map(category => {
                      const categoryItems = countryData[selectedCountry].checklist.filter(item => item.category === category);
                      if (categoryItems.length === 0) return null;
                      return (
                        <div key={category}>
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-[#3b82f6]">{category}</span>
                          </div>
                          <div className="space-y-2">
                            {categoryItems.map((item) => (
                              <div
                                key={item.id}
                                onClick={() => toggleCheckItem(item.id)}
                                className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors border ${
                                  checkedItems.has(item.id) ? 'bg-[#eff6ff] border-[#bfdbfe]' : 'bg-white border-gray-200 hover:bg-gray-50'
                                }`}
                              >
                                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                  checkedItems.has(item.id) ? 'bg-[#eff6ff] border-[#2563eb]' : 'border-gray-300'
                                }`}>
                                  {checkedItems.has(item.id) && <HiCheck className="w-2.5 h-2.5 text-white" />}
                                </div>
                                <span className={`text-xs ${checkedItems.has(item.id) ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                                  {item.item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
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
