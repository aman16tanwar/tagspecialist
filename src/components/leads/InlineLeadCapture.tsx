'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCheckCircle, HiLightningBolt } from 'react-icons/hi';

const WEB3FORMS_KEY = '281edfc6-1b7f-429f-a500-da5b83ede63e';

interface InlineLeadCaptureProps {
  variant?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
  onSuccess: () => void;
}

const InlineLeadCapture: React.FC<InlineLeadCaptureProps> = ({ 
  variant = 'light', 
  title = "Get Your Free Tracking Audit",
  subtitle = "Discover hidden revenue opportunities in 15 minutes",
  onSuccess 
}) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
          source: 'inline_capture',
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
          subject: `🔔 NEW LEAD: ${formData.name} via inline_capture`,
          from_name: 'TagSpecialist Lead System',
          message: `NEW LEAD (Quick Capture)\n\nName: ${formData.name}\nEmail: ${formData.email}\nSource: Inline CTA Form`
        }),
      });

      setFormData({ name: '', email: '' });
      onSuccess();
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = variant === 'dark';

  return (
    <div 
      className={`rounded-2xl p-8 ${
        isDark 
          ? 'bg-navy-900 text-white' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100'
      }`}
      data-testid="inline-lead-capture"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
          isDark ? 'bg-blue-600' : 'bg-blue-600'
        }`}>
          <HiLightningBolt className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-navy-900'}`}>{title}</h3>
          <p className={`text-sm ${isDark ? 'text-blue-200' : 'text-gray-600'}`}>{subtitle}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" data-testid="inline-lead-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={`flex-1 px-4 py-3 rounded-xl outline-none transition-all font-medium ${
            isDark 
              ? 'bg-navy-800 border border-navy-700 text-white placeholder-gray-400 focus:border-blue-500' 
              : 'bg-white border border-gray-200 text-navy-900 placeholder-gray-400 focus:border-blue-500'
          }`}
          required
          data-testid="inline-lead-name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={`flex-1 px-4 py-3 rounded-xl outline-none transition-all font-medium ${
            isDark 
              ? 'bg-navy-800 border border-navy-700 text-white placeholder-gray-400 focus:border-blue-500' 
              : 'bg-white border border-gray-200 text-navy-900 placeholder-gray-400 focus:border-blue-500'
          }`}
          required
          data-testid="inline-lead-email"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-orange-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
          disabled={isSubmitting}
          data-testid="inline-lead-submit"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>Get Free Audit</span>
              <HiArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </form>

      {error && (
        <p className="text-red-400 text-sm mt-2" data-testid="inline-lead-error">{error}</p>
      )}

      <div className="flex flex-wrap gap-4 mt-4">
        {['No commitment', 'Free consultation', '15 min call'].map((item) => (
          <span key={item} className={`flex items-center gap-1 text-xs font-medium ${isDark ? 'text-blue-200' : 'text-gray-600'}`}>
            <HiCheckCircle className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InlineLeadCapture;
