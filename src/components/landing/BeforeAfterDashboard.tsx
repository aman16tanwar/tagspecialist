'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiTrendingUp, HiTrendingDown } from 'react-icons/hi';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BeforeAfterDashboard() {
  const [adSpend, setAdSpend] = useState<number>(20000);
  const [conversions, setConversions] = useState<number>(400);
  const [recoveryRate, setRecoveryRate] = useState<number>(11);

  const stats = useMemo(() => {
    const beforeCPA = adSpend / conversions;
    const recoveredConversions = Math.round(conversions * (recoveryRate / 100));
    const afterConversions = conversions + recoveredConversions;
    const afterCPA = adSpend / afterConversions;
    const cpaDrop = beforeCPA - afterCPA;
    const cpaDropPct = (cpaDrop / beforeCPA) * 100;

    return {
      beforeCPA,
      afterCPA,
      recoveredConversions,
      afterConversions,
      cpaDrop,
      cpaDropPct,
    };
  }, [adSpend, conversions, recoveryRate]);

  const formatCurrency = (n: number) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <section id="estimate-recovery" className="section-padding bg-white scroll-mt-20">
      <div className="content-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Estimate Your Recovery
          </p>
          <h2>What Would the Numbers Look Like for You?</h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Adjust your monthly ad spend and current conversions. We&apos;ll project the impact based
            on Meta and Google&apos;s published averages for advertisers using Conversion API and
            Enhanced Conversions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-5xl mx-auto bg-white rounded-2xl border-2 border-gray-300 shadow-2xl overflow-hidden ring-1 ring-orange-100"
        >
          {/* Inputs Strip */}
          <div className="bg-navy-900 text-white p-6 lg:p-8 border-b border-gray-200">
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                  Monthly Ad Spend
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    min={500}
                    step={500}
                    value={adSpend}
                    onChange={(e) => setAdSpend(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full bg-white/10 border border-white/20 rounded-md py-2.5 pl-7 pr-3 text-white font-bold text-lg focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                  Current Tracked Conversions / mo
                </label>
                <input
                  type="number"
                  min={1}
                  step={10}
                  value={conversions}
                  onChange={(e) => setConversions(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full bg-white/10 border border-white/20 rounded-md py-2.5 px-3 text-white font-bold text-lg focus:outline-none focus:border-orange-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                  Estimated Recovery: {recoveryRate}%
                </label>
                <input
                  type="range"
                  min={8}
                  max={17}
                  step={1}
                  value={recoveryRate}
                  onChange={(e) => setRecoveryRate(Number(e.target.value))}
                  className="w-full accent-orange-500 mt-3"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-semibold">
                  <span>8% (Meta avg)</span>
                  <span>17% (Google max)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Before / After Cards */}
          <div className="grid md:grid-cols-2 gap-px bg-gray-200">
            {/* Before */}
            <div className="bg-gray-50 p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-8">
                <span className="px-2.5 py-1 bg-gray-300 text-gray-700 text-xs font-bold uppercase tracking-widest rounded">
                  Before
                </span>
                <span className="text-gray-500 text-sm">Pixel only</span>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                    Tracked Conversions
                  </p>
                  <p className="text-5xl lg:text-6xl font-black text-gray-500">
                    {conversions.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                    Reported CPA
                  </p>
                  <p className="text-5xl lg:text-6xl font-black text-gray-500">
                    {formatCurrency(stats.beforeCPA)}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Ad blockers, iOS 17 ATT, and ITP are hiding conversions your campaigns are actually
                    driving.
                  </p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-green-50 via-blue-50 to-white p-8 lg:p-12 relative">
              <div className="flex items-center gap-2 mb-8">
                <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-bold uppercase tracking-widest rounded">
                  After
                </span>
                <span className="text-gray-700 text-sm font-semibold">
                  Pixel + CAPI + Enhanced Conversions
                </span>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                    Tracked Conversions
                  </p>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <p className="text-5xl lg:text-7xl font-black text-orange-500">
                      {stats.afterConversions.toLocaleString()}
                    </p>
                    <span className="flex items-center gap-1 text-green-600 font-bold text-base bg-green-100 px-2.5 py-1 rounded">
                      <HiTrendingUp /> +{stats.recoveredConversions.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                    Reported CPA
                  </p>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <p className="text-5xl lg:text-7xl font-black text-orange-500">
                      {formatCurrency(stats.afterCPA)}
                    </p>
                    <span className="flex items-center gap-1 text-green-600 font-bold text-base bg-green-100 px-2.5 py-1 rounded">
                      <HiTrendingDown /> -{stats.cpaDropPct.toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-800 font-semibold">
                    Your campaigns optimize on cleaner data. CPA drops by{' '}
                    {formatCurrency(stats.cpaDrop)} per conversion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Bar */}
          <div className="bg-navy-900 text-white p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-bold text-lg">Want this for your account?</p>
              <p className="text-gray-400 text-sm">
                $1,500 setup + $150/mo managed hosting — delivered in 1 week.
              </p>
            </div>
            <Link
              href="/book-audit?service=conversion-api"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-md transition-colors whitespace-nowrap group"
            >
              Get a Free Diagnostic
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-gray-500 text-xs mt-6 max-w-2xl mx-auto">
          Illustrative estimate based on Meta&apos;s published 8% average attributed-conversion lift
          for CAPI users and Google&apos;s reported 5-17% range for Enhanced Conversions on Search.
          Actual results vary by vertical, audience composition, ad-blocker prevalence, and
          implementation quality. Not a guaranteed outcome.
        </p>
      </div>
    </section>
  );
}
