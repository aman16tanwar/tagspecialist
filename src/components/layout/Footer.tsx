import Link from 'next/link';
import { HiMail, HiLocationMarker, HiChevronRight } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Logo from '../brand/Logo';

const Footer = () => {

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          <div>
            <Logo variant="full" theme="dark" className="mb-6" />
            <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8">
              Enterprise data engineering and marketing analytics solutions. Serving 70+ brands worldwide with proven results.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                <span className="text-blue-600 text-lg leading-none">☁️</span> GCP Certified
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                <span className="text-orange-500 text-lg leading-none">📊</span> GA4 Certified
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                <span className="text-blue-500 text-lg leading-none">🏷️</span> GTM Expert
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                <span className="text-blue-500 text-lg leading-none">🔒</span> GDPR Compliant
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-navy-900 mb-8 uppercase tracking-[0.2em] underline decoration-blue-600 decoration-2 underline-offset-8">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'All Services & Pricing', link: '/services' },
                { name: 'Managed Tracking', link: '/managed-tracking' },
                { name: 'Google Tag Manager Specialist', link: '/google-tag-manager-specialist' },
                { name: 'Server-Side Tagging Specialist', link: '/server-side-tagging-specialist' },
                { name: 'Shopify to BigQuery', link: '/shopify-bigquery' },
                { name: 'Agency Partners', link: '/agency-partners' },
                { name: 'Book Free Audit', link: '/book-audit' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-gray-500 hover:text-blue-600 transition-colors text-[11px] font-black uppercase tracking-widest flex items-center group">
                    <HiChevronRight className="mr-1 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-navy-900 mb-8 uppercase tracking-[0.2em] underline decoration-blue-600 decoration-2 underline-offset-8">Resources</h4>
            <ul className="space-y-4">
              {[
                { name: 'Server-Side Tagging Guide', link: '/server-side-tagging-guide' },
                { name: 'Benefits of Server-Side Tagging', link: '/benefits-of-server-side-tagging' },
                { name: 'Unified Data Platform Guide', link: '/unified-data-platform-guide' },
                { name: 'Case Studies', link: '/case-studies' },
                { name: 'Blog', link: '/blogs' },
                { name: 'Data Security', link: '/data-security' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-gray-500 hover:text-blue-600 transition-colors text-[11px] font-black uppercase tracking-widest flex items-center group">
                    <HiChevronRight className="mr-1 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-black text-navy-900 mt-10 mb-6 uppercase tracking-[0.2em] underline decoration-blue-600 decoration-2 underline-offset-8">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Partners', link: '/partners' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-gray-500 hover:text-blue-600 transition-colors text-[11px] font-black uppercase tracking-widest flex items-center group">
                    <HiChevronRight className="mr-1 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-navy-900 mb-8 uppercase tracking-[0.2em] underline decoration-blue-600 decoration-2 underline-offset-8">Get in Touch</h4>
            <ul className="space-y-6 mb-10">
              <li>
                <a href="mailto:developer@tagspecialist.ca" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <HiMail size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Us</span>
                    <span className="text-navy-900 font-bold text-sm">developer@tagspecialist.ca</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <HiLocationMarker size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Location</span>
                    <span className="text-navy-900 font-bold text-sm">Vancouver, BC, Canada</span>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mb-8">
              <Link
                href="/book-audit"
                className="block w-full py-4 bg-orange-500 text-white font-black rounded-xl uppercase text-xs tracking-widest hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25 text-center"
              >
                Book Free Audit →
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/tagspecialist" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-navy-900 hover:text-white transition-all shadow-sm">
                <FaGithub size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-100 py-10 bg-gray-50/50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-navy-900 font-black text-[10px] uppercase tracking-[0.3em]">
            © 2026 TagSpecialist. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
            <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-blue-600 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
