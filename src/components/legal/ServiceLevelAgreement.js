import React, { useEffect } from 'react';
import { HiArrowLeft, HiClipboardCheck, HiClock, HiSupport, HiExclamation } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ServiceLevelAgreement = () => {
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
             <div className="p-4 bg-green-50 rounded-lg mr-6">
                <HiClipboardCheck className="w-12 h-12 text-green-600" />
             </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy-900">Service Level Agreement (SLA)</h1>
              <p className="text-gray-600 mt-2">Applicable to Retainer & Managed Service Plans.</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 mb-8 text-lg">
                This SLA outlines the support standards and guarantees provided to clients subscribed to our <strong>"Monthly Maintenance"</strong> or <strong>"Growth Partner"</strong> retainer plans.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                  <HiClock className="w-6 h-6 text-blue-600 mr-3" />
                  Support Response Times
              </h2>
              <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="border-b border-gray-200">
                              <th className="p-4 text-navy-900 font-semibold">Severity Level</th>
                              <th className="p-4 text-navy-900 font-semibold">Definition</th>
                              <th className="p-4 text-navy-900 font-semibold">Response Time</th>
                              <th className="p-4 text-navy-900 font-semibold">Resolution Target</th>
                          </tr>
                      </thead>
                      <tbody className="text-gray-700">
                          <tr className="border-b border-gray-100 bg-red-50">
                              <td className="p-4 font-bold text-red-600">Critical (P1)</td>
                              <td className="p-4">Complete data pipeline failure, 0% conversion tracking, site down due to tag.</td>
                              <td className="p-4">4 Hours</td>
                              <td className="p-4">24 Hours</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                              <td className="p-4 font-bold text-orange-600">High (P2)</td>
                              <td className="p-4">Data discrepancy >20%, missing specific events, dashboard broken.</td>
                              <td className="p-4">12 Hours</td>
                              <td className="p-4">48 Hours</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                              <td className="p-4 font-bold text-yellow-600">Normal (P3)</td>
                              <td className="p-4">General questions, minor display issues, new request for access.</td>
                              <td className="p-4">24 Hours</td>
                              <td className="p-4">3-5 Business Days</td>
                          </tr>
                          <tr>
                              <td className="p-4 font-bold text-blue-600">Low (P4)</td>
                              <td className="p-4">Feature requests, cosmetic dashboard changes, proactive advice.</td>
                              <td className="p-4">48 Hours</td>
                              <td className="p-4">Next Sprint</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                  <HiSupport className="w-6 h-6 text-purple-600 mr-3" />
                  Support Channels & Hours
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 grid md:grid-cols-2 gap-8">
                  <div>
                      <h3 className="text-navy-900 font-bold mb-2">Standard Support</h3>
                      <ul className="text-gray-600 space-y-2 text-sm">
                          <li><strong>Email:</strong> developer@tagspecialist.com</li>
                          <li><strong>Slack:</strong> Dedicated Channel (Retainer only)</li>
                          <li><strong>Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM (PST)</li>
                      </ul>
                  </div>
                  <div>
                      <h3 className="text-navy-900 font-bold mb-2">Maintenance Windows</h3>
                      <p className="text-gray-600 text-sm mb-2">
                          Routine updates to Airflow/GCP are scheduled for:
                      </p>
                      <p className="text-navy-900 text-sm"><strong>Sundays, 2:00 AM - 4:00 AM (PST)</strong></p>
                  </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                  <HiExclamation className="w-6 h-6 text-red-600 mr-3" />
                  Exclusions
              </h2>
              <p className="text-gray-700 mb-2">This SLA does not cover:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Outages caused by third-party providers (Google Cloud, Meta API, Shopify) outages.</li>
                  <li>Issues resulting from unauthorized client changes to GTM or Codebase.</li>
                  <li>Legacy setups implemented by prior agencies (unless audited and accepted).</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLevelAgreement;