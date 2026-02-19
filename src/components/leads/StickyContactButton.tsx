'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChat, HiX, HiArrowRight, HiPhone, HiMail } from 'react-icons/hi';

interface StickyContactButtonProps {
  onOpenForm: () => void;
}

const StickyContactButton: React.FC<StickyContactButtonProps> = ({ onOpenForm }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100]" data-testid="sticky-contact-wrapper">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 border border-gray-100"
            data-testid="sticky-contact-menu"
          >
            <div className="space-y-2">
              <button
                onClick={() => {
                  setIsExpanded(false);
                  onOpenForm();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/20"
                data-testid="sticky-quick-form-btn"
              >
                <HiChat className="w-5 h-5" />
                <span className="font-bold text-sm">Quick Inquiry</span>
                <HiArrowRight className="w-4 h-4 ml-auto" />
              </button>
              
              <a
                href="mailto:developer@tagspecialist.ca"
                className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 text-navy-900 rounded-xl hover:bg-gray-100 transition-all"
                data-testid="sticky-email-btn"
              >
                <HiMail className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-sm">Email Us</span>
              </a>
              
              <a
                href="tel:+12368620650"
                className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 text-navy-900 rounded-xl hover:bg-gray-100 transition-all"
                data-testid="sticky-phone-btn"
              >
                <HiPhone className="w-5 h-5 text-green-600" />
                <span className="font-bold text-sm">Call Now</span>
              </a>
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-[10px] text-gray-400 text-center font-medium uppercase tracking-wide">
                Avg. response time: 2 hours
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all ${
          isExpanded 
            ? 'bg-gray-800 hover:bg-gray-900' 
            : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange-500/40'
        }`}
        data-testid="sticky-contact-toggle"
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <HiX className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <HiChat className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse animation */}
      {!isExpanded && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
        </span>
      )}
    </div>
  );
};

export default StickyContactButton;
