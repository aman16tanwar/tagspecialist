'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiArrowRight, HiGift } from 'react-icons/hi';

const WEB3FORMS_KEY = '281edfc6-1b7f-429f-a500-da5b83ede63e';

interface ExitIntentPopupProps {
  onSuccess: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem('exitIntentShown');
    if (alreadyShown) {
      setHasTriggered(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Delay adding listener to avoid instant trigger
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggered]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Save to database
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          source: 'exit_intent',
          message: 'Captured via exit intent popup - interested in free tracking checklist',
          lead_type: 'Client'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      // Send email notification via Web3Forms
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `🔔 NEW LEAD: ${formData.name} via exit_intent`,
          from_name: 'TagSpecialist Lead System',
          message: `NEW LEAD (Exit Intent Popup)\n\nName: ${formData.name}\nEmail: ${formData.email}\nSource: Exit Intent Popup\nInterest: Free Tracking Checklist`
        }),
      });

      setFormData({ name: '', email: '' });
      handleClose();
      onSuccess();
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm z-[300] flex items-center justify-center p-4"
        onClick={handleClose}
        data-testid="exit-intent-overlay"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          data-testid="exit-intent-modal"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors z-10"
            data-testid="exit-intent-close-btn"
          >
            <HiX className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="relative p-8 text-center">
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30">
              <HiGift className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
              Wait! Don't Leave Empty-Handed
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Get our <span className="font-bold text-blue-600">Free Tracking Audit Checklist</span> — the same one we use to identify $50K+ in lost revenue for our clients.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" data-testid="exit-intent-form">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-navy-900 font-medium"
                  required
                  data-testid="exit-intent-name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-navy-900 font-medium"
                  required
                  data-testid="exit-intent-email"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm" data-testid="exit-intent-error">{error}</p>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-lg"
                disabled={isSubmitting}
                data-testid="exit-intent-submit-btn"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Me The Checklist</span>
                    <HiArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-xs text-gray-400 mt-4">
              No spam, unsubscribe anytime. Your data is safe.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
