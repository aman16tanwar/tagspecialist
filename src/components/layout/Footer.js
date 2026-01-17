import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiMail, HiLocationMarker, HiChevronRight
} from 'react-icons/hi';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import Logo from '../brand/Logo';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Company */}
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
                <span className="text-green-500 text-lg leading-none">🔒</span> GDPR Compliant
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-black text-navy-900 mb-8 uppercase tracking-[0.2em] underline decoration-blue-600 decoration-2 underline-offset-8">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Analytics Foundation', link: '/services#analytics-foundation' },
                { name: 'Server-Side Infrastructure', link: '/services#server-side' },
                { name: 'Complete Data Infrastructure', link: '/services#complete-data' },
                { name: 'Essentials Retainer', link: '/services#essentials' },
                { name: 'Growth Retainer', link: '/services#growth' },
                { name: 'Scale Retainer', link: '/services#scale' },
                { name: 'View All Pricing', link: '/services#pricing' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="text-gray-500 hover:text-blue-600 transition-colors text-[11px] font-black uppercase tracking-widest flex items-center group">
                    <HiChevronRight className="mr-1 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-black text-navy-900 mb-8 uppercase tracking-[0.2em] underline decoration-blue-600 decoration-2 underline-offset-8">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Case Studies', link: '/case-studies' },
                { name: 'Blog', link: '/blogs' },
                { name: 'Careers', link: '/#' },
                { name: 'Agency Partners', link: '/#' },
                { name: 'Contact', link: '/#' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="text-gray-500 hover:text-blue-600 transition-colors text-[11px] font-black uppercase tracking-widest flex items-center group">
                    <HiChevronRight className="mr-1 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-black text-navy-900 mb-8 uppercase tracking-[0.2em] underline decoration-blue-600 decoration-2 underline-offset-8">Get in Touch</h4>
            <ul className="space-y-6 mb-10">
              <li>
                <a href="mailto:hello@tagspecialist.ca" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <HiMail size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Us</span>
                    <span className="text-navy-900 font-bold text-sm">hello@tagspecialist.ca</span>
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
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
                className="w-full py-4 bg-blue-600 text-white font-black rounded-xl uppercase text-xs tracking-widest hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25"
              >
                Book Free Audit →
              </button>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/company/tagspecialist" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <FaLinkedin size={18} />
              </a>
              <a href="https://twitter.com/tagspecialist" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all shadow-sm">
                <FaTwitter size={18} />
              </a>
              <a href="https://github.com/tagspecialist" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-navy-900 hover:text-white transition-all shadow-sm">
                <FaGithub size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-100 py-10 bg-gray-50/50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-navy-900 font-black text-[10px] uppercase tracking-[0.3em]">
            © 2026 TagSpecialist. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
            <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            <Link to="/refund-policy" className="hover:text-blue-600 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
