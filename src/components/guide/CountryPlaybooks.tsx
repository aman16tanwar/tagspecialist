'use client';

import { useState } from 'react';
import { HiCheck } from 'react-icons/hi';

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
    keyDates: [] as { date: string; description: string }[],
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
      "Ensure 'fair and reasonable' collection practices under APP 3",
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
    keyDates: [] as { date: string; description: string }[],
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

type CountryKey = keyof typeof countryData;

export default function CountryPlaybooks() {
  const [selectedCountry, setSelectedCountry] = useState<CountryKey>('usa');
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

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

  const country = countryData[selectedCountry];

  return (
    <>
      {/* Country Tabs */}
      <div className="grid grid-cols-3 border border-gray-200 rounded-t-lg overflow-hidden">
        {(['usa', 'canada', 'australia'] as const).map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCountry(c)}
            className={`py-4 px-6 text-sm font-semibold transition-colors border-r last:border-r-0 border-gray-200 ${
              selectedCountry === c
                ? 'bg-[#eff6ff] text-gray-800'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {c === 'usa' ? 'UNITED STATES' : c === 'canada' ? 'CANADA' : 'AUSTRALIA'}
          </button>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-[1fr_340px] border border-t-0 border-gray-200 rounded-b-lg overflow-hidden">
        {/* Left Column */}
        <div className="p-6 border-r border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#dbeafe] rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-[#3b82f6] pb-1">{country.name}</h3>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {country.keyLegislation.map((law, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-white border border-[#93c5fd] rounded text-xs font-medium text-[#1e40af]">
                {law}
              </span>
            ))}
          </div>

          {/* Consent Model */}
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
              <p className="text-sm text-gray-700 font-medium">{country.consentModel}</p>
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
              {country.keyRequirements.map((req, idx) => (
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
              {country.dataSubjectRights.map((right, idx) => (
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
          {selectedCountry === 'canada' && countryData.canada.keyDates.length > 0 && (
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
          <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">CHECKLIST PROGRESS</span>
              <span className="text-sm font-bold text-gray-900">
                {country.checklist.filter(item => checkedItems.has(item.id)).length}/{country.checklist.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#eff6ff] rounded-full h-2 transition-all"
                style={{ width: `${(country.checklist.filter(item => checkedItems.has(item.id)).length / country.checklist.length) * 100}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {Math.round((country.checklist.filter(item => checkedItems.has(item.id)).length / country.checklist.length) * 100)}% complete
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <h4 className="text-sm font-bold text-gray-900 border-b-2 border-[#3b82f6]">Implementation Checklist</h4>
          </div>
          <p className="text-xs text-gray-500 mb-4">Track your implementation progress. Click items to mark them complete.</p>

          <div className="space-y-4">
            {['Technical', 'Legal', 'Governance', 'Compliance', 'Operations'].map(category => {
              const categoryItems = country.checklist.filter(item => item.category === category);
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
    </>
  );
}
