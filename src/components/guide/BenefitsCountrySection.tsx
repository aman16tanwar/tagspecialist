'use client';

import { useState } from 'react';

const countryData = {
  usa: {
    name: 'United States',
    laws: ['CCPA/CPRA', 'State Privacy Laws', 'FTC Act Section 5'],
    consentModel: 'Opt-out (opt-in for minors under 16)',
    keyLegislation: ['CCPA/CPRA', 'State Privacy Laws', 'FTC Act Section 5'],
    dataSubjectRights: [
      'Right to Access personal information',
      'Right to Delete collected data',
      'Right to Correct inaccurate information',
      'Right to Opt-out of Sale/Sharing',
      'Right to Limit Use of Sensitive PI',
    ],
  },
  canada: {
    name: 'Canada',
    laws: ['PIPEDA', 'Proposed CPPA', 'Quebec Law 25'],
    consentModel: 'Meaningful consent (express for sensitive, implied for legitimate interest)',
    keyLegislation: ['PIPEDA', 'Proposed CPPA', 'Provincial Laws (Quebec Law 25)'],
    dataSubjectRights: [
      'Right to Access personal information',
      'Right to Correction of data',
      'Right to Data Mobility (proposed CPPA)',
      'Right to Disposal of data',
      'Right to Withdraw consent',
    ],
  },
  australia: {
    name: 'Australia',
    laws: ['Privacy Act 1988', '13 Australian Privacy Principles (APPs)', 'Notifiable Data Breaches scheme'],
    consentModel: 'Express/implied (higher bar for sensitive information)',
    keyLegislation: ['Privacy Act 1988', '13 Australian Privacy Principles (APPs)', 'Notifiable Data Breaches scheme'],
    dataSubjectRights: [
      'Right to Access personal information',
      'Right to Correction of data',
      'Right to Anonymity (where practicable)',
      'Right to Opt-out of direct marketing',
      'Right to Complain to OAIC',
    ],
  },
};

type CountryKey = keyof typeof countryData;

export default function BenefitsCountrySection() {
  const [selectedCountry, setSelectedCountry] = useState<CountryKey>('usa');

  const country = countryData[selectedCountry];

  return (
    <>
      {/* Country Selector */}
      <div className="mb-6">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Select Region</div>
        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
          {(['usa', 'canada', 'australia'] as const).map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCountry(c)}
              className={`flex-1 py-3 px-6 text-sm font-medium transition-colors ${
                selectedCountry === c
                  ? 'bg-[#eff6ff] text-gray-800'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Regulatory Details Table */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-[#eff6ff] text-gray-800 px-6 py-3 font-semibold">
            REGULATORY DETAILS: {country.name.toUpperCase()}
          </div>
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50 w-1/3">Primary Laws</td>
                <td className="px-6 py-4 text-gray-600">{country.laws.join(', ')}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">Consent Model</td>
                <td className="px-6 py-4 text-gray-600">{country.consentModel}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">Data Subject Rights</td>
                <td className="px-6 py-4 text-gray-600">{country.dataSubjectRights.slice(0, 3).map(r => r.replace('Right to ', '')).join(', ')}</td>
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
                {selectedCountry === 'usa' ? '\u{1F1FA}\u{1F1F8}' : selectedCountry === 'canada' ? '\u{1F1E8}\u{1F1E6}' : '\u{1F1E6}\u{1F1FA}'}
              </div>
              <div className="text-sm font-medium text-gray-700">{country.name}</div>
              <div className="flex gap-2 justify-center mt-3">
                {country.keyLegislation.map((law, idx) => (
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
          {country.keyLegislation.map((law, idx) => (
            <span key={idx} className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
              {law}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
