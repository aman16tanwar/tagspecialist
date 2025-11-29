import React, { useEffect } from 'react';
import { HiArrowLeft, HiCurrencyDollar, HiRefresh, HiXCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <HiArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg p-8 md:p-12 border border-gray-200 shadow-sm">
          <div className="flex items-center mb-8">
             <div className="p-4 bg-yellow-50 rounded-lg mr-6">
                <HiCurrencyDollar className="w-12 h-12 text-yellow-600" />
             </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy-900">Refund & Cancellation Policy</h1>
              <p className="text-gray-600 mt-2">Clear terms for project-based and retainer engagements.</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            
            <section className="mb-10">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                    <h2 className="text-xl font-bold text-navy-900 mb-2">Our Philosophy</h2>
                    <p className="text-gray-700">
                        We sell professional engineering time and expertise, not just software. As such, refunds are generally tied to the <strong>delivery of milestones</strong> rather than "satisfaction" in the subjective sense. However, we strive for fair outcomes.
                    </p>
                </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                  <HiRefresh className="w-6 h-6 text-green-600 mr-3" />
                  Project-Based Services (One-Time)
              </h2>
              <p className="text-gray-700 mb-4">
                  For projects such as "Setup", "Audits", or "Migration":
              </p>
              <ul className="space-y-4">
                  <li className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <strong className="text-navy-900 block mb-1">Before Work Begins:</strong>
                      <span className="text-gray-600">100% Refund of deposit if cancelled within 48 hours of booking and no onboarding work has commenced.</span>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <strong className="text-navy-900 block mb-1">During Project:</strong>
                      <span className="text-gray-600">If cancelled mid-project, the deposit (50%) is non-refundable to cover time spent. Any completed milestones beyond the deposit are billable.</span>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <strong className="text-navy-900 block mb-1">Completed Work:</strong>
                      <span className="text-gray-600">No refunds are issued on completed and delivered milestones (e.g., "Audit Report Delivered").</span>
                  </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                  <HiRefresh className="w-6 h-6 text-purple-600 mr-3" />
                  Monthly Retainers
              </h2>
              <div className="space-y-4">
                  <p className="text-gray-700">
                      Retainer agreements are for reserving our capacity and monitoring your systems.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Cancellation:</strong> You may cancel any monthly retainer with <strong>30 days written notice</strong> via email.</li>
                      <li><strong>Unused Hours:</strong> Unused support hours do not roll over to the next month and are not refundable.</li>
                      <li><strong>Proration:</strong> If cancelled mid-month without notice, the full month's fee applies.</li>
                  </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                  <HiXCircle className="w-6 h-6 text-red-600 mr-3" />
                  Exceptions
              </h2>
              <p className="text-gray-700">
                  We reserve the right to refuse refunds in cases of:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Change of mind after work has been substantially completed.</li>
                  <li>Delays caused by client failure to provide access or data.</li>
                  <li>Third-party platform bans (e.g., Google Ads account suspension) that are outside our control.</li>
              </ul>
            </section>

             <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-gray-600 text-sm">
                    To request a cancellation or refund, email <a href="mailto:developer@tagspecialist.com" className="text-blue-600 hover:underline">developer@tagspecialist.com</a>.
                </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;