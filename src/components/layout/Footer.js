import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiMail, HiPhone, HiLocationMarker, HiShieldCheck,
  HiCheckCircle, HiLockClosed, HiExternalLink 
} from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglecloud, SiGoogleanalytics, SiGoogleads } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const trustBadges = [
    { icon: SiGooglecloud, text: 'GCP Certified', color: 'text-blue-400' },
    { icon: SiGoogleanalytics, text: 'GA4 Certified', color: 'text-orange-400' },
    { icon: SiGoogleads, text: 'Google Ads Certified', color: 'text-green-400' },
    { icon: HiShieldCheck, text: 'GDPR Compliant', color: 'text-purple-400' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Trust Badges Section */}
      <div className="bg-gray-950 py-6 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <badge.icon className={`w-6 h-6 ${badge.color}`} />
                <span className="text-gray-400 text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Tag Specialist</h3>
            <p className="text-gray-400 text-sm mb-4">
              Enterprise data engineering and marketing analytics solutions. Serving 70+ clients worldwide with proven results.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400 text-sm">
                <HiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>8+ Years Experience</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <HiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>70+ Enterprise Clients</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <HiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>451% Average ROAS</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Data Pipeline Development
                </Link>
              </li>
              <li>
                <Link to="/#solutions" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Marketing Analytics
                </Link>
              </li>
              <li>
                <Link to="/#expertise" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  GA4 & GTM Setup
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal & Compliance</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center">
                  <HiLockClosed className="w-3 h-3 mr-1" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/data-security" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Data Security
                </Link>
              </li>
              <li>
                <Link to="/sla" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Service Level Agreement
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:developer@tagspecialist.ca" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm">
                <HiMail className="w-4 h-4 mr-2" />
                developer@tagspecialist.ca
              </a>
              <a href="tel:+12366688922" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm">
                <HiPhone className="w-4 h-4 mr-2" />
                +1 (236) 668-8922
              </a>
              <div className="flex items-center text-gray-400 text-sm">
                <HiLocationMarker className="w-4 h-4 mr-2" />
                Vancouver, BC, Canada
              </div>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://www.linkedin.com/in/tamantanwar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/aman16tanwar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.upwork.com/freelancers/~01528e07812749b309" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center"
                >
                  Upwork Profile
                  <HiExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Tag Specialist. All rights reserved. | Registered Business in British Columbia, Canada
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center text-gray-500">
                <HiLockClosed className="w-4 h-4 mr-1 text-green-500" />
                SSL Secured
              </div>
              <div className="flex items-center text-gray-500">
                <HiShieldCheck className="w-4 h-4 mr-1 text-blue-500" />
                GDPR Compliant
              </div>
              <div className="text-gray-500">
                Business # BC1234567
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;