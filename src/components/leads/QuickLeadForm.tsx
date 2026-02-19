'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiArrowRight, HiMail, HiPhone, HiCheckCircle } from 'react-icons/hi';

interface QuickLeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  source?: string;
}

const QuickLeadForm: React.FC<QuickLeadFormProps> = ({ isOpen, onClose, onSuccess, source = 'quick_form' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    challenge: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          pain_point: formData.challenge,
          source: source,
          lead_type: 'Client'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setFormData({ name: '', email: '', phone: '', challenge: '' });
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
        className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
        onClick={onClose}
        data-testid="quick-lead-overlay"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          data-testid="quick-lead-modal"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              data-testid="quick-lead-close-btn"
            >
              <HiX className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold mb-1">Let's Fix Your Tracking</h3>
            <p className="text-blue-100 text-sm">Get a free 15-min consultation with a data expert</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4" data-testid="quick-lead-form">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-navy-900 font-medium"
                required
                data-testid="quick-lead-name"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-navy-900 font-medium"
                required
                data-testid="quick-lead-email"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Phone (Optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-navy-900 font-medium"
                data-testid="quick-lead-phone"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">What's your biggest challenge?</label>
              <textarea
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                placeholder="e.g., Can't track conversions accurately..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-navy-900 font-medium resize-none h-20"
                data-testid="quick-lead-challenge"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm" data-testid="quick-lead-error">{error}</p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-orange-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              disabled={isSubmitting}
              data-testid="quick-lead-submit-btn"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Get My Free Consultation</span>
                  <HiArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>

            <p className="text-xs text-gray-400 text-center">
              ✓ No spam · ✓ No sales pitch · ✓ Direct expert access
            </p>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuickLeadForm;
