'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [monthlyTraffic, setMonthlyTraffic] = useState(100000);
  const [conversionRate, setConversionRate] = useState(2.5);
  const [dataLoss, setDataLoss] = useState(30);
  const [avgOrderValue, setAvgOrderValue] = useState(85);

  const recoveryRate = 0.78;
  const currentMonthlyConversions = monthlyTraffic * (conversionRate / 100);
  const lostConversions = currentMonthlyConversions * (dataLoss / 100);
  const recoveredConversions = lostConversions * recoveryRate;
  const monthlyRecovery = recoveredConversions * avgOrderValue;
  const annualRecovery = monthlyRecovery * 12;
  const roasImprovement = Math.round((recoveredConversions / currentMonthlyConversions) * 100);

  return (
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
            <div className="bg-white rounded-lg p-4 border border-[#bfdbfe]">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Monthly Recovery</div>
              <div className="text-2xl font-bold text-[#1d4ed8]">${monthlyRecovery.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#bfdbfe]">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Annual Recovery</div>
              <div className="text-2xl font-bold text-[#1d4ed8]">${annualRecovery.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 border border-[#bfdbfe]">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Recovered Conversions/mo</div>
              <div className="text-2xl font-bold text-[#1d4ed8]">{Math.round(recoveredConversions).toLocaleString()}</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#bfdbfe]">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">ROAS Uplift</div>
              <div className="text-2xl font-bold text-[#1d4ed8]">+{roasImprovement}%</div>
            </div>
          </div>

          {/* Assumptions */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">ASSUMPTIONS</div>
            <ul className="space-y-1 text-xs text-gray-500">
              <li>Recovery rate: 78% of lost conversions</li>
              <li>Based on industry average server-side implementations</li>
              <li>Actual results may vary based on traffic quality and setup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
