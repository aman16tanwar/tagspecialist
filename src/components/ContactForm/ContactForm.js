import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiMail, HiUser, HiChat } from 'react-icons/hi';

const ContactForm = ({ isOpen: propIsOpen, onClose, onSubmitSuccess }) => {
  const [isOpen, setIsOpen] = useState(propIsOpen || false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
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
      const response = await fetch('https://autumn-frost-d9cf.aman16tanwar.workers.dev/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
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
          className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm overflow-y-auto h-full w-full flex justify-center items-center z-50"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-t-2xl">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <HiX size={24} />
              </button>
              <h3 className="text-2xl font-bold text-white mb-2">Let's Build Something Amazing</h3>
              <p className="text-white/80 text-sm">Tell me about your project and I'll get back to you within 24 hours.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                <div className="relative">
                  <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700/50 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <div className="relative">
                  <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700/50 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Company Input */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Company (Optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full px-3 py-3 bg-gray-700/50 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Budget Select */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Project Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-3 py-3 bg-gray-700/50 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select Budget Range</option>
                  <option value="5-15k">$5,000 - $15,000</option>
                  <option value="15-25k">$15,000 - $25,000</option>
                  <option value="25k+">$25,000+</option>
                  <option value="custom">Let's Discuss</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Project Details</label>
                <div className="relative">
                  <HiChat className="absolute left-3 top-3 text-gray-500" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your data challenges, current setup, and goals..."
                    className="w-full pl-10 pr-3 py-3 bg-gray-700/50 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors h-32 resize-none"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  'Send Message'
                )}
              </motion.button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center">
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