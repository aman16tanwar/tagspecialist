'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown, HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '../brand/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setupPackages = [
    { name: 'Tracking Audit & Strategy', price: 'Starting at $3,500', desc: 'Comprehensive audit with prioritized recommendations', timeline: '1 week', icon: '🔍', id: 'tracking-audit' },
    { name: 'Analytics Foundation', price: 'Starting at $12,000', desc: 'GA4 + GTM setup for growing businesses', timeline: '2-3 weeks', icon: '📊', id: 'analytics-foundation' },
    { name: 'Server-Side Infrastructure', price: 'Starting at $18,500', desc: 'Bypass ad blockers, capture 30-40% more data', timeline: '3-4 weeks', icon: '⚡', id: 'server-side', popular: true },
    { name: 'Complete Data Infrastructure', price: 'Starting at $28,000', desc: 'BigQuery warehouse + AI-powered insights', timeline: '5-6 weeks', icon: '🗄️', id: 'complete-data' }
  ];

  const retainers = [
    { name: 'Essentials Retainer', price: '$3,500/mo', desc: 'Monitoring, troubleshooting & peace of mind', hours: 'Up to 10 hrs/mo', icon: '🔧', id: 'essentials' },
    { name: 'Growth Retainer', price: '$7,500/mo', desc: 'Proactive optimization for scaling brands', hours: 'Up to 25 hrs/mo', icon: '📈', id: 'growth', featured: true },
    { name: 'Scale Retainer', price: '$14,000/mo', desc: 'Your technical co-founder for data', hours: 'Up to 50 hrs/mo', icon: '🚀', id: 'scale' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Logo variant="full" theme="dark" />
          </motion.div>

          <div className="hidden lg:flex items-center space-x-10">
            <div
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="text-gray-900 hover:text-blue-600 transition-colors duration-300 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-1 py-4">
                Services <HiChevronDown className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[1000px] bg-white border border-gray-200 rounded-3xl shadow-2xl p-8 grid grid-cols-12 gap-8"
                  >
                    <div className="col-span-4 border-r border-gray-100 pr-8">
                      <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">One-Time Setup Packages</h3>
                      <div className="space-y-4">
                        {setupPackages.map((pkg) => (
                          <Link
                            key={pkg.id}
                            href={`/services#${pkg.id}`}
                            className={`block p-4 rounded-2xl transition-all border ${pkg.popular ? 'bg-blue-50/50 border-blue-100' : 'hover:bg-gray-50 border-transparent'}`}
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <div className="flex justify-between items-start mb-1">
                              <span className="text-lg">{pkg.icon}</span>
                              <span className="font-black text-navy-900 text-sm tracking-tight">{pkg.price}</span>
                            </div>
                            <div className="font-black text-navy-900 text-sm mb-1 uppercase tracking-tight flex items-center gap-2">
                              {pkg.name}
                              {pkg.popular && <span className="bg-blue-600 text-white text-[8px] px-2 py-0.5 rounded-full">POPULAR</span>}
                            </div>
                            <p className="text-[11px] text-gray-500 font-bold leading-tight mb-2">{pkg.desc}</p>
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{pkg.timeline}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-4 border-r border-gray-100 pr-8">
                      <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">Monthly Retainers</h3>
                      <div className="space-y-4">
                        {retainers.map((pkg) => (
                          <Link
                            key={pkg.id}
                            href={`/services#${pkg.id}`}
                            className={`block p-4 rounded-2xl transition-all border ${pkg.featured ? 'bg-indigo-50/50 border-indigo-100' : 'hover:bg-gray-50 border-transparent'}`}
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <div className="flex justify-between items-start mb-1">
                              <span className="text-lg">{pkg.icon}</span>
                              <span className="font-black text-navy-900 text-sm tracking-tight">{pkg.price}</span>
                            </div>
                            <div className="font-black text-navy-900 text-sm mb-1 uppercase tracking-tight flex items-center gap-2">
                              {pkg.name}
                              {pkg.featured && <span className="bg-indigo-600 text-white text-[8px] px-2 py-0.5 rounded-full">BEST VALUE</span>}
                            </div>
                            <p className="text-[11px] text-gray-500 font-bold leading-tight mb-2">{pkg.desc}</p>
                            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{pkg.hours}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-4">
                      <div className="bg-navy-900 rounded-3xl p-6 text-white h-full flex flex-col">
                        <div className="text-2xl mb-4">🎯</div>
                        <h4 className="font-black text-lg mb-2 uppercase tracking-tighter">Not sure where to start?</h4>
                        <p className="text-blue-200 text-xs font-bold leading-relaxed mb-6">Get a free 15-minute audit and custom package recommendation for your business.</p>
                        <ul className="space-y-2 mb-8">
                          <li className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-100">
                            <HiCheckCircle className="text-blue-400 text-sm" /> Identify Gaps
                          </li>
                          <li className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-100">
                            <HiCheckCircle className="text-blue-400 text-sm" /> ROI Opportunity
                          </li>
                        </ul>
                        <Link
                          href="/book-audit"
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-xl transition-all uppercase text-[10px] tracking-widest shadow-lg text-center"
                        >
                          Book Free Audit →
                        </Link>

                        <div className="mt-auto pt-6 space-y-3 border-t border-white/10">
                          <Link href="/services" className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-blue-300 hover:text-white transition-colors" onClick={() => setIsMegaMenuOpen(false)}>
                            Detailed Pricing <HiArrowRight />
                          </Link>
                          <Link href="/case-studies" className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-blue-300 hover:text-white transition-colors" onClick={() => setIsMegaMenuOpen(false)}>
                            Client Results <HiArrowRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/services#pricing" className="text-gray-900 hover:text-blue-600 transition-colors duration-300 font-black text-xs uppercase tracking-[0.2em]">Pricing</Link>
            <Link href="/case-studies" className="text-gray-900 hover:text-blue-600 transition-colors duration-300 font-black text-xs uppercase tracking-[0.2em]">Case Studies</Link>
            <Link href="/blogs" className="text-gray-900 hover:text-blue-600 transition-colors duration-300 font-black text-xs uppercase tracking-[0.2em]">Blog</Link>
            <Link href="/about" className="text-gray-900 hover:text-blue-600 transition-colors duration-300 font-black text-xs uppercase tracking-[0.2em]">About</Link>

            <Link href="/book-audit">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-xl transition-all shadow-lg hover:shadow-orange-500/25 uppercase text-[10px] tracking-widest"
              >
                Book Free Audit
              </motion.span>
            </Link>
          </div>

          <button
            className="lg:hidden text-navy-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white border border-gray-200 rounded-[2rem] shadow-2xl overflow-hidden"
            >
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">Services</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <Link href="/services#tracking-audit" onClick={() => setIsMobileMenuOpen(false)} className="block p-4 bg-blue-50 rounded-2xl font-black text-xs uppercase tracking-tight text-blue-700">Tracking Audit ($3.5k)</Link>
                    <Link href="/services#analytics-foundation" onClick={() => setIsMobileMenuOpen(false)} className="block p-4 bg-gray-50 rounded-2xl font-black text-xs uppercase tracking-tight">Analytics Foundation ($12k)</Link>
                    <Link href="/services#server-side" onClick={() => setIsMobileMenuOpen(false)} className="block p-4 bg-blue-50 rounded-2xl font-black text-xs uppercase tracking-tight text-blue-700">Server-Side Infra ($18.5k) ⭐</Link>
                    <Link href="/services#complete-data" onClick={() => setIsMobileMenuOpen(false)} className="block p-4 bg-gray-50 rounded-2xl font-black text-xs uppercase tracking-tight">Complete Data ($28k)</Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link href="/services#pricing" onClick={() => setIsMobileMenuOpen(false)} className="block font-black text-sm uppercase tracking-widest text-navy-900">Pricing</Link>
                  <Link href="/case-studies" onClick={() => setIsMobileMenuOpen(false)} className="block font-black text-sm uppercase tracking-widest text-navy-900">Case Studies</Link>
                  <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="block font-black text-sm uppercase tracking-widest text-navy-900">Blog</Link>
                  <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block font-black text-sm uppercase tracking-widest text-navy-900">About</Link>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <Link
                    href="/book-audit"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-xl uppercase text-xs tracking-widest shadow-lg text-center"
                  >
                    Book Free Audit
                  </Link>
                </div>

                <div className="text-center space-y-2 pb-4">
                  <a href="mailto:hello@tagspecialist.ca" className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">hello@tagspecialist.ca</a>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">📍 Vancouver, BC, Canada</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
