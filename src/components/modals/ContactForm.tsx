'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { useModal } from '@/contexts/ModalContext';

const ContactForm = () => {
  const { isContactFormOpen, formMessage, leadType, closeContactForm, openSuccessModal } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    services: [] as string[],
    channels: [] as string[],
    painPoint: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (formMessage) {
      setFormData(prev => ({ ...prev, message: formMessage }));
    }
  }, [formMessage]);

  const handleClose = () => {
    closeContactForm();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChannelChange = (channel: string) => {
    const updatedChannels = formData.channels.includes(channel)
      ? formData.channels.filter(c => c !== channel)
      : [...formData.channels, channel];
    setFormData({ ...formData, channels: updatedChannels });
  };

  const handleServiceChange = (service: string) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];
    setFormData({ ...formData, services: updatedServices });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '281edfc6-1b7f-429f-a500-da5b83ede63e',
          name: formData.name,
          email: formData.email,
          subject: `NEW ${leadType.toUpperCase()} INQUIRY: ${formData.name}`,
          botcheck: '',
          message: `LEAD TYPE: ${leadType}\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nCompany: ${formData.company}\nWebsite: ${formData.website || 'N/A'}\nServices: ${formData.services.join(', ') || 'None selected'}\nChannels: ${formData.channels.join(', ') || 'None selected'}\nPain Point: ${formData.painPoint}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline || 'Not specified'}\n\nAdditional Details:\n${formData.message || 'None provided'}`
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Network response was not ok');
      }

      setFormData({ name: '', email: '', phone: '', company: '', website: '', services: [], channels: [], painPoint: '', budget: '', timeline: '', message: '' });
      openSuccessModal();
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`Submission failed: ${errorMessage}\n\nPlease email us directly at developer@tagspecialist.ca`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-5 py-4 bg-gray-50 text-navy-900 rounded-xl border-2 border-gray-100 focus:border-blue-600 focus:bg-white focus:outline-none transition-all placeholder-gray-400 font-bold text-sm";
  const labelClasses = "block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 ml-1";

  return (
    <AnimatePresence>
      {isContactFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-navy-900/90 backdrop-blur-md overflow-y-auto h-full w-full flex justify-center items-start py-12 z-[100]"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-3xl mx-4 overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="relative p-10 pb-0 flex justify-between items-start">
              <div>
                <div className="flex gap-2 mb-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${leadType === 'Partner' ? 'bg-purple-50 text-purple-600 border border-purple-100' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                    <HiCheckCircle /> {leadType === 'Partner' ? 'Agency Partnership' : 'Direct Consultation'}
                  </div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-navy-900 uppercase tracking-tighter leading-none mb-2">Let&apos;s Talk Data</h3>
                <p className="text-gray-500 font-bold text-sm tracking-tight">Tell us about your infrastructure challenges.</p>
              </div>
              <button
                onClick={handleClose}
                className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-navy-900 transition-colors bg-gray-50 hover:bg-gray-100 rounded-2xl"
              >
                <HiX size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-10 space-y-8">
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Contact Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label className={labelClasses}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={inputClasses}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Phone Number (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Company Name (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className={labelClasses}>Primary Marketing Channels</label>
                <div className="flex flex-wrap gap-3">
                  {['Google Ads', 'Meta', 'TikTok', 'LinkedIn', 'Shopify'].map((channel) => (
                    <button
                      key={channel}
                      type="button"
                      onClick={() => handleChannelChange(channel)}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${formData.channels.includes(channel)
                        ? 'bg-navy-900 border-navy-900 text-white shadow-lg shadow-navy-900/20 scale-105'
                        : 'bg-white border-gray-100 text-gray-400 hover:border-blue-200'
                        }`}
                    >
                      {channel}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClasses}>The Core Challenge *</label>
                <textarea
                  name="painPoint"
                  value={formData.painPoint}
                  onChange={handleChange}
                  placeholder="E.g., Can't track ROI across channels"
                  className={`${inputClasses} h-32 resize-none`}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Estimated Monthly Ad Spend (Optional)</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    <option value="">Select Spend Range</option>
                    <option value="under-10k">Under $10k/mo</option>
                    <option value="10-50k">$10k - $50k/mo</option>
                    <option value="50-100k">$50k - $100k/mo</option>
                    <option value="100k+">$100k+/mo</option>
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Project Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1month">Within 1 month</option>
                    <option value="3months">Within 3 months</option>
                    <option value="planning">Just Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClasses}>What services are required? (Optional)</label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'server-side', label: 'Server-Side Tracking' },
                    { id: 'data-warehouse', label: 'Data Warehouse (BigQuery)' },
                    { id: 'attribution', label: 'Attribution Modeling' },
                    { id: 'retainer', label: 'Monthly Support' },
                    { id: 'audit', label: 'Tracking Audit' }
                  ].map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceChange(service.label)}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${formData.services.includes(service.label)
                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105'
                        : 'bg-white border-gray-100 text-gray-400 hover:border-blue-200'
                        }`}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="text-center mb-6">
                  <p className="text-blue-600 font-black text-xs uppercase tracking-[0.2em]">
                    Answered personally by a senior engineer within 1 business day
                  </p>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-5 px-8 rounded-2xl shadow-xl shadow-blue-600/20 transition-all disabled:opacity-50 uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <span>Book Your Consultation</span>
                      <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                <p className="text-[10px] text-gray-400 text-center mt-6 font-bold uppercase tracking-widest">
                  🔒 Secure Data Handling • No Sales Pitch • Direct Expert Access
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
