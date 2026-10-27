'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { HiCheck, HiArrowRight, HiLightningBolt, HiDatabase, HiCalendar, HiMail } from 'react-icons/hi';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useModal } from '@/contexts/ModalContext';

type ServiceType = 'tracking' | 'data-engineering';
type ContactMethod = 'call' | 'message';

// Booking is paid only: the 1-hour session is the single way to get time with me.
const PAID_SESSION_CAL_LINK = 'tagspecialist/1-hour-tracking-debug-session';

const trackingBenefits = [
  {
    title: '1 Hour, Live on a Screen-Share',
    description: 'Bring your broken GTM, sGTM, GA4 or Meta CAPI setup. We debug it together, in your accounts.'
  },
  {
    title: 'Fixed While We Talk',
    description: 'Most issues get fixed in the session. You leave with it working, or with a clear plan for what\'s left.'
  },
  {
    title: 'Larger Work, Scoped After',
    description: 'If it needs a project, you get a fixed-scope quote after the session.'
  },
  {
    title: '$150 USD, Paid at Booking',
    description: "If I can't help in the first 10 minutes, full refund."
  }
];

const dataEngineeringBenefits = [
  {
    title: '1 Hour, Live on a Screen-Share',
    description: 'Walk me through your data stack: BigQuery, pipelines, dashboards or an AI/analytics idea.'
  },
  {
    title: 'Straight Answers',
    description: 'What to build, what to skip, and where the cost and risk sit, with your actual setup in front of us.'
  },
  {
    title: 'Larger Work, Scoped After',
    description: 'If it needs a project, you get a fixed-scope quote after the session.'
  },
  {
    title: '$150 USD, Paid at Booking',
    description: "If I can't help in the first 10 minutes, full refund."
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
        styles: { branding: { brandColor: '#1d4ed8' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    })();
  }, []);

  const benefits = serviceType === 'tracking' ? trackingBenefits : dataEngineeringBenefits;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isTracking = serviceType === 'tracking';
    const subject = isTracking
      ? `TRACKING QUOTE REQUEST: ${formData.name} - ${formData.company}`
      : `DATA ENGINEERING INQUIRY: ${formData.name} - ${formData.company}`;

    const message = isTracking
      ? `TRACKING QUOTE REQUEST\n\nService: Marketing Analytics & Tracking\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMonthly Ad Spend: ${formData.adSpend}\n\nBiggest Tracking Challenge:\n${formData.trackingChallenge}`
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
            <p className="text-center text-gray-600 font-medium mb-4">What do you need help with?</p>
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
            {/* Left Column - What the paid session includes */}
            <motion.div
              key={serviceType}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading mb-10">
                {serviceType === 'tracking'
                  ? '1-Hour Tracking Debug Session'
                  : '1-Hour Data Engineering Session'
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
                  ? 'Book Your Paid Session'
                  : 'Request a Project Quote'
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
                  <HiCalendar className="w-5 h-5" /> Paid Session
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
                  <HiMail className="w-5 h-5" /> Project Quote
                </button>
              </div>

              {contactMethod === 'call' && (
                <div className="min-h-[560px]">
                  <Cal
                    calLink={PAID_SESSION_CAL_LINK}
                    style={{ width: '100%', height: '100%', overflow: 'auto' }}
                    config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
                  />
                  <p className="text-xs text-gray-400 text-center mt-4">
                    $150 USD, paid when you book. If I can&apos;t help in the first 10 minutes, full refund.
                  </p>
                </div>
              )}

              {contactMethod === 'message' && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-sm text-gray-500 text-center -mt-2">
                  For fixed-scope projects. I reply by email with a quote; any call is the paid session.
                </p>
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
                        Request a Quote
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
