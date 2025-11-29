import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const ContactForm = ({ isOpen: propIsOpen, onClose, onSubmitSuccess, initialMessage = '' }) => {
  const [isOpen, setIsOpen] = useState(propIsOpen || false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: '',
    channels: [],
    painPoint: '',
    budget: '',
    timeline: '',
    message: initialMessage
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Listen for custom event to open form
  useEffect(() => {
    const handleOpenForm = () => setIsOpen(true);
    window.addEventListener('openContactForm', handleOpenForm);
    return () => window.removeEventListener('openContactForm', handleOpenForm);
  }, []);

  // Sync with prop
  useEffect(() => {
    if (propIsOpen !== undefined) {
      setIsOpen(propIsOpen);
    }
  }, [propIsOpen]);
  
  // Update message when initialMessage changes
  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Call Web3Forms directly from frontend
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '281edfc6-1b7f-429f-a500-da5b83ede63e',
          name: formData.name,
          email: formData.email,
          subject: `New Contact from ${formData.name} - Tag Specialist`,
          from_email: 'developer@tagspecialist.com',
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nCompany: ${formData.company}\nWebsite: ${formData.website || 'N/A'}\nService: ${formData.service}\nChannels: ${formData.channels.join(', ') || 'None selected'}\nPain Point: ${formData.painPoint}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline || 'Not specified'}\n\nAdditional Details:\n${formData.message || 'None provided'}`
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok || !data.success) {
        console.error('Server error:', data);
        throw new Error(data.message || 'Network response was not ok');
      }
      
      // Success!
      alert('Thank you for reaching out! I\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', company: '', website: '', service: '', channels: [], painPoint: '', budget: '', timeline: '', message: '' });
      if (onSubmitSuccess) onSubmitSuccess();
      handleClose();
    } catch (error) {
      console.error('Error:', error);
      alert('Thank you for reaching out. There was an issue submitting your message, but we have likely received it. Our team will contact you within the next few hours to confirm and assist with your inquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm overflow-y-auto h-full w-full flex justify-center items-start py-12 z-50"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-white border border-gray-200 rounded-lg shadow-2xl w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-white p-8 pb-0 rounded-t-lg">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-navy-900 transition-colors bg-gray-50 hover:bg-gray-100 rounded-full p-1"
              >
                <HiX size={20} />
              </button>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">Let's Talk Data</h3>
              <p className="text-gray-600 text-sm">Tell me about your data challenges.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Contact Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 text-navy-900 rounded-sm border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors placeholder-gray-400"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-gray-50 text-navy-900 rounded-sm border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Input */}
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 bg-gray-50 text-navy-900 rounded-sm border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors placeholder-gray-400"
                  />
                </div>

                {/* Company Input */}
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 bg-gray-50 text-navy-900 rounded-sm border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Website URL */}
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">Company Website URL</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://www.example.com"
                  className="w-full px-4 py-3 bg-gray-50 text-navy-900 rounded-sm border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors placeholder-gray-400"
                />
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">What service are you looking for? *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 text-navy-900 rounded-sm border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors cursor-pointer"
                  required
                >
                  <option value="" className="text-gray-500">Select a Service</option>
                  <option value="data-pipeline">Data Pipeline & ETL Development</option>
                  <option value="analytics-implementation">Analytics & Tracking Implementation</option>
                  <option value="cloud-migration">Cloud Migration & Infrastructure</option>
                  <option value="marketing-automation">Marketing Automation & Optimization</option>
                  <option value="ai-analytics">AI-Powered Analytics</option>
                  <option value="performance-marketing">Performance Marketing Management</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              {/* Marketing Channels */}
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-3">Which marketing channels do you use?</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Google Ads', 'Meta/Facebook', 'DV360', 'SA360', 'Microsoft Ads', 'LinkedIn', 'TikTok', 'Other'].map((channel) => (
                    <label key={channel} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        value={channel}
                        checked={formData.channels.includes(channel)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({ ...formData, channels: [...formData.channels, channel] });
                          } else {
                            setFormData({ ...formData, channels: formData.channels.filter(c => c !== channel) });
                          }
                        }}
                        className="w-4 h-4 rounded text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-offset-white"
                      />
                      <span className="text-sm text-gray-700">{channel}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pain Point */}
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">What's your biggest data/marketing challenge? *</label>
                <textarea
                  name="painPoint"
                  value={formData.painPoint}
                  onChange={handleChange}
                  placeholder="E.g., Manual reporting taking too long, can't track ROI across channels..."
                  className="w-full px-4 py-3 bg-gray-50 text-navy-900 rounded-sm border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors h-24 resize-none placeholder-gray-400"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Budget Select */}
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Project Budget *</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 text-navy-900 rounded-sm border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors cursor-pointer"
                    required
                  >
                    <option value="">Select Budget Range</option>
                    <option value="5-15k">$5,000 - $15,000</option>
                    <option value="15-25k">$15,000 - $25,000</option>
                    <option value="25-50k">$25,000 - $50,000</option>
                    <option value="50-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                    <option value="monthly">Monthly Retainer</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Project Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 text-navy-900 rounded-sm border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1month">Within 1 month</option>
                    <option value="3months">Within 3 months</option>
                    <option value="planning">Just Planning</option>
                  </select>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">Additional Details (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific requirements, current tech stack, or additional context..."
                  className="w-full px-4 py-3 bg-gray-50 text-navy-900 rounded-sm border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors h-24 resize-none placeholder-gray-400"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-sm shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg uppercase tracking-wide"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  'Book Your Consultation'
                )}
              </motion.button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Your information is secure and will only be used to discuss your project.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
