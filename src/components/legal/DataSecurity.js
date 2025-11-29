import React, { useEffect } from 'react';
import { HiArrowLeft, HiShieldCheck, HiServer, HiLockClosed, HiCloud } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const DataSecurity = () => {
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
            <div className="p-4 bg-blue-50 rounded-lg mr-6">
                <HiShieldCheck className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy-900">Data Security & Privacy</h1>
              <p className="text-gray-600 mt-2">How we protect your marketing infrastructure.</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                  <HiCloud className="w-6 h-6 text-blue-600 mr-3" />
                  Architecture Philosophy
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                <strong>We build in your environment, not ours.</strong>
              </p>
              <p className="text-gray-700">
                Unlike SaaS tools that ingest your data into their black boxes, TagSpecialist designs and deploys data infrastructure directly inside <strong>your</strong> Google Cloud Platform (GCP) organization. This ensures:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                  <li>You retain 100% ownership of your data at all times.</li>
                  <li>You control the encryption keys and access logs.</li>
                  <li>There is no "vendor lock-in" regarding data storage.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                  <HiLockClosed className="w-6 h-6 text-green-600 mr-3" />
                  Access Control & IAM
              </h2>
              <p className="text-gray-700 mb-4">
                We strictly adhere to the Principle of Least Privilege (PoLP).
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <ul className="space-y-3">
                      <li className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                          <span><strong>Service Accounts:</strong> Automations run via dedicated Service Accounts with restricted scopes (e.g., `BigQuery Data Editor` only).</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                          <span><strong>Consultant Access:</strong> Our team's access is granted via specific IAM roles, never basic roles like "Owner" or "Editor" unless absolutely necessary for setup.</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                          <span><strong>Off-boarding:</strong> Scripts are provided to instantly revoke all external access upon project completion.</span>
                      </li>
                  </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                  <HiServer className="w-6 h-6 text-purple-600 mr-3" />
                  Data Handling Standards
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-navy-900 mb-2">Encryption</h3>
                      <p className="text-gray-600 text-sm">
                          All data is encrypted in transit (TLS 1.2+) and at rest (AES-256) within Google Cloud's infrastructure.
                      </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-navy-900 mb-2">PII Handling</h3>
                      <p className="text-gray-600 text-sm">
                          We implement hashing (SHA-256) for PII (emails, phones) before it enters BigQuery for marketing matches, ensuring GDPR/CCPA compliance.
                      </p>
                  </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Compliance</h2>
              <p className="text-gray-700">
                Our pipelines are designed to be compliant with:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>GDPR (General Data Protection Regulation)</li>
                  <li>CCPA (California Consumer Privacy Act)</li>
                  <li>SOC 2 Type II (via Google Cloud inheritance)</li>
              </ul>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-gray-600 text-sm">
                    For security audits or vendor questionnaires, please contact <a href="mailto:security@tagspecialist.com" className="text-blue-600 hover:underline">security@tagspecialist.com</a>.
                </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSecurity;