'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { HiCheck, HiArrowRight, HiLightningBolt, HiDatabase, HiCalendar, HiMail } from 'react-icons/hi';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useModal } from '@/contexts/ModalContext';

type ServiceType = 'tracking' | 'data-engineering';
type ContactMethod = 'call' | 'message';

const trackingBenefits = [
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

const dataEngineeringBenefits = [
  {
    title: 'Data Architecture Review',
    description: "We'll assess your current data stack and identify optimization opportunities."
  },
  {
    title: 'Pipeline Feasibility Analysis',
    description: 'Understand what custom pipelines and integrations are possible for your needs.'
  },
  {
    title: 'Technology Recommendations',
    description: 'Get expert advice on BigQuery, ETL tools, and AI/ML implementation.'
  },
  {
    title: 'No-Pressure Conversation',
    description: 'Zero sales pitch—just honest engineering expertise and advice.'
  }
];

const trackingTestimonials = [
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

const dataEngineeringTestimonials = [
  {
    quote: "They helped us build a BigQuery pipeline that replaced three expensive SaaS tools. Game changer for our analytics.",
    author: 'James R.',
    role: 'Analytics Manager'
  },
  {
    quote: "Finally, a team that understands both marketing data AND engineering. Our Shopify-to-BigQuery setup is bulletproof.",
    author: 'Lisa M.',
    role: 'Head of Data'
  }
];

const adSpendRanges = [
  { value: '', label: 'Select range...' },
  { value: 'under-10k', label: 'Under $10k/month' },
  { value: '10-50k', label: '$10k - $50k/month' },
  { value: '50-100k', label: '$50k - $100k/month' },
  { value: '100k+', label: '$100k+/month' }
];

const dataSources = [
  { value: '', label: 'Select primary source...' },
  { value: 'shopify', label: 'Shopify' },
  { value: 'woocommerce', label: 'WooCommerce' },
  { value: 'magento', label: 'Magento' },
  { value: 'custom-ecommerce', label: 'Custom E-commerce' },
  { value: 'saas-product', label: 'SaaS Product' },
  { value: 'marketing-platforms', label: 'Marketing Platforms (GA4, Ads, etc.)' },
  { value: 'crm', label: 'CRM (Salesforce, HubSpot, etc.)' },
  { value: 'other', label: 'Other' }
];

const projectScopes = [
  { value: '', label: 'Select scope...' },
  { value: 'data-warehouse', label: 'Build a data warehouse (BigQuery)' },
  { value: 'etl-pipeline', label: 'Create ETL/ELT pipelines' },
  { value: 'reporting-dashboard', label: 'Custom reporting & dashboards' },
  { value: 'ai-analytics', label: 'AI/ML analytics & insights' },
  { value: 'data-integration', label: 'Integrate multiple data sources' },
  { value: 'not-sure', label: 'Not sure yet - need guidance' }
];

function BookAuditContent() {
  const { openSuccessModal } = useModal();
  const searchParams = useSearchParams();
  const [serviceType, setServiceType] = useState<ServiceType>('tracking');
  const [contactMethod, setContactMethod] = useState<ContactMethod>('call');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    // Tracking fields
    adSpend: '',
    trackingChallenge: '',
    // Data engineering fields
    dataSource: '',
    projectScope: '',
    engineeringChallenge: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set service type from URL query param
  useEffect(() => {
    const service = searchParams.get('service');
    if (service === 'data-engineering') {
      setServiceType('data-engineering');
    } else if (service === 'tracking') {
      setServiceType('tracking');
    }
  }, [searchParams]);

  // Configure Cal.com embed appearance
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal('ui', {
        styles: { branding: { brandColor: '#2563eb' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    })();
  }, []);

  const benefits = serviceType === 'tracking' ? trackingBenefits : dataEngineeringBenefits;
  const testimonials = serviceType === 'tracking' ? trackingTestimonials : dataEngineeringTestimonials;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isTracking = serviceType === 'tracking';
    const subject = isTracking
      ? `TRACKING AUDIT REQUEST: ${formData.name} - ${formData.company}`
      : `DATA ENGINEERING INQUIRY: ${formData.name} - ${formData.company}`;

    const message = isTracking
      ? `TRACKING AUDIT REQUEST\n\nService: Marketing Analytics & Tracking\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMonthly Ad Spend: ${formData.adSpend}\n\nBiggest Tracking Challenge:\n${formData.trackingChallenge}`
      : `DATA ENGINEERING INQUIRY\n\nService: Data Engineering & AI\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPrimary Data Source: ${formData.dataSource}\nProject Scope: ${formData.projectScope}\n\nProject Details:\n${formData.engineeringChallenge}`;

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
          subject: subject,
          botcheck: '',
          message: message
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Network response was not ok');
      }

      setFormData({
        name: '',
        email: '',
        company: '',
        adSpend: '',
        trackingChallenge: '',
        dataSource: '',
        projectScope: '',
        engineeringChallenge: ''
      });
      openSuccessModal();
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`Submission failed: ${errorMessage}\n\nPlease email us directly at developer@tagspecialist.ca`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-5 py-4 bg-gray-50 text-navy-900 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:bg-white focus:outline-none transition-all placeholder-gray-400 font-body font-medium text-base";
  const labelClasses = "block text-sm font-heading font-semibold text-gray-700 mb-2";

  return (
    <>
      <main className="min-h-screen bg-white pt-24">
        <div className="content-container section-padding">
          {/* Service Type Selector */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-center text-gray-600 font-medium mb-4">What can we help you with?</p>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setServiceType('tracking')}
                className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                  serviceType === 'tracking'
                    ? 'border-blue-600 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  serviceType === 'tracking' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  <HiLightningBolt className="w-6 h-6" />
                </div>
                <span className={`font-heading font-bold text-sm ${
                  serviceType === 'tracking' ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  Marketing Analytics & Tracking
                </span>
                <span className="text-xs text-gray-500">GTM, GA4, CAPI, Attribution</span>
              </button>

              <button
                type="button"
                onClick={() => setServiceType('data-engineering')}
                className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                  serviceType === 'data-engineering'
                    ? 'border-blue-600 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  serviceType === 'data-engineering' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  <HiDatabase className="w-6 h-6" />
                </div>
                <span className={`font-heading font-bold text-sm ${
                  serviceType === 'data-engineering' ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  Data Engineering & AI
                </span>
                <span className="text-xs text-gray-500">BigQuery, Pipelines, Analytics</span>
              </button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Benefits & Testimonials */}
            <motion.div
              key={serviceType}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading mb-10">
                {serviceType === 'tracking'
                  ? "What You'll Get in 15 Minutes"
                  : "Let's Discuss Your Data Project"
                }
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
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-orange-500">
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
              <h2 className="font-heading text-blue-600 text-center mb-6">
                {contactMethod === 'call'
                  ? 'Pick a Time That Works for You'
                  : serviceType === 'tracking'
                    ? 'Tell Us About Your Tracking'
                    : 'Start Your Data Project'
                }
              </h2>

              {/* Call / Message toggle */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <button
                  type="button"
                  onClick={() => setContactMethod('call')}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 font-heading font-bold text-sm transition-all ${
                    contactMethod === 'call'
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                  }`}
                >
                  <HiCalendar className="w-5 h-5" /> Book a Call
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod('message')}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 font-heading font-bold text-sm transition-all ${
                    contactMethod === 'message'
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                  }`}
                >
                  <HiMail className="w-5 h-5" /> Send a Message
                </button>
              </div>

              {contactMethod === 'call' && (
                <div className="min-h-[560px]">
                  <Cal
                    calLink="tagspecialist"
                    style={{ width: '100%', height: '100%', overflow: 'auto' }}
                    config={{ layout: 'month_view' }}
                  />
                  <p className="text-xs text-gray-400 text-center mt-4">
                    Free 15-minute call. No sales pitch — just honest engineering advice.
                  </p>
                </div>
              )}

              {contactMethod === 'message' && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
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

                {/* Tracking-specific fields */}
                {serviceType === 'tracking' && (
                  <>
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
                        Biggest Tracking Challenge
                      </label>
                      <textarea
                        name="trackingChallenge"
                        value={formData.trackingChallenge}
                        onChange={handleChange}
                        placeholder="e.g., GA4 shows different numbers than ad platforms, can't track conversions accurately, need server-side tracking..."
                        className={`${inputClasses} h-28 resize-none`}
                      />
                    </div>
                  </>
                )}

                {/* Data Engineering-specific fields */}
                {serviceType === 'data-engineering' && (
                  <>
                    <div>
                      <label className={labelClasses}>
                        Primary Data Source
                      </label>
                      <select
                        name="dataSource"
                        value={formData.dataSource}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                      >
                        {dataSources.map((source) => (
                          <option key={source.value} value={source.value}>
                            {source.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Project Scope
                      </label>
                      <select
                        name="projectScope"
                        value={formData.projectScope}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                      >
                        {projectScopes.map((scope) => (
                          <option key={scope.value} value={scope.value}>
                            {scope.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Tell Us About Your Project
                      </label>
                      <textarea
                        name="engineeringChallenge"
                        value={formData.engineeringChallenge}
                        onChange={handleChange}
                        placeholder="e.g., Want to build a Shopify-to-BigQuery pipeline, need custom dashboards, looking to implement AI-powered analytics..."
                        className={`${inputClasses} h-28 resize-none`}
                      />
                    </div>
                  </>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all disabled:opacity-50 text-base flex items-center justify-center gap-2 group mt-6 bg-orange-500 hover:bg-orange-600 shadow-orange-500/25"
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
                      <span>
                        {serviceType === 'tracking'
                          ? 'Book My Free Audit'
                          : 'Schedule Consultation'
                        }
                      </span>
                      <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  By submitting, you agree to receive email communication. No spam, ever.
                </p>
              </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}

export default function BookAuditPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    }>
      <BookAuditContent />
    </Suspense>
  );
}
