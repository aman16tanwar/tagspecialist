'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiArrowRight } from 'react-icons/hi';
import { useModal } from '@/contexts/ModalContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const benefits = [
  {
    title: 'Tracking Health Assessment',
    description: "We'll identify gaps in your current tracking setup and quantify data loss."
  },
  {
    title: 'Revenue Impact Analysis',
    description: 'Calculate how much broken attribution might be costing you monthly.'
  },
  {
    title: 'Custom Recommendation',
    description: 'Get a tailored plan for fixing your specific data challenges.'
  },
  {
    title: 'No-Pressure Conversation',
    description: 'Zero sales pitch—just honest engineering expertise and advice.'
  }
];

const testimonials = [
  {
    quote: "The audit call was incredibly valuable. In 15 minutes, they spotted three critical tracking issues we didn't even know we had.",
    author: 'Sarah K.',
    role: 'E-commerce Director'
  },
  {
    quote: "No BS, no sales pressure—just genuine expertise. They gave us a roadmap even though we weren't ready to hire yet.",
    author: 'Mike T.',
    role: 'Head of Growth'
  }
];

const adSpendRanges = [
  { value: '', label: 'Select range...' },
  { value: 'under-10k', label: 'Under $10k/month' },
  { value: '10-50k', label: '$10k - $50k/month' },
  { value: '50-100k', label: '$50k - $100k/month' },
  { value: '100k+', label: '$100k+/month' }
];

export default function BookAuditPage() {
  const { openSuccessModal } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    adSpend: '',
    challenge: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          subject: `FREE AUDIT REQUEST: ${formData.name} - ${formData.company}`,
          from_email: 'developer@tagspecialist.ca',
          message: `FREE AUDIT REQUEST\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMonthly Ad Spend: ${formData.adSpend}\n\nBiggest Data Challenge:\n${formData.challenge}`
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Network response was not ok');
      }

      setFormData({ name: '', email: '', company: '', adSpend: '', challenge: '' });
      openSuccessModal();
    } catch (error) {
      console.error('Error:', error);
      alert('Thank you for your interest. There was an issue submitting your request, but we may have received it. Our team will contact you shortly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-5 py-4 bg-gray-50 text-navy-900 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:bg-white focus:outline-none transition-all placeholder-gray-400 font-body font-medium text-base";
  const labelClasses = "block text-sm font-heading font-semibold text-gray-700 mb-2";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        <div className="content-container section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Benefits & Testimonials */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading mb-10">
                What You&apos;ll Get in 15 Minutes
              </h1>

              <div className="space-y-6 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                      <HiCheck className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg lg:text-xl mb-1">{benefit.title}</h3>
                      <p className="font-body text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.author}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-r-xl"
                  >
                    <p className="font-body text-gray-700 italic mb-3">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <p className="font-body text-sm text-gray-500 font-semibold">
                      — {testimonial.author}, {testimonial.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10"
            >
              <h2 className="font-heading text-blue-600 text-center mb-8">
                Schedule Your Free Audit
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={labelClasses}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={inputClasses}
                    required
                  />
                </div>

                <div>
                  <label className={labelClasses}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
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

                <div>
                  <label className={labelClasses}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses}>
                    Monthly Ad Spend
                  </label>
                  <select
                    name="adSpend"
                    value={formData.adSpend}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                  >
                    {adSpendRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClasses}>
                    Biggest Data Challenge
                  </label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    placeholder="e.g., GA4 shows different numbers than ad platforms, can't track conversions accurately, need a data warehouse..."
                    className={`${inputClasses} h-28 resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-orange-500/25 transition-all disabled:opacity-50 text-base flex items-center justify-center gap-2 group mt-6"
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
                      <span>Book My Free Audit</span>
                      <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  By submitting, you agree to receive email communication. No spam, ever.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
