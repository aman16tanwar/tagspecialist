import React, { useEffect } from 'react';
import { HiArrowLeft, HiShieldCheck, HiLockClosed } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
          <HiArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
          <div className="flex items-center mb-6">
            <HiShieldCheck className="w-12 h-12 text-blue-500 mr-4" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
              <p className="text-gray-400">Last updated: January 18, 2025</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-gray-300 mb-4">
                At Tag Specialist, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our services. 
                We are committed to protecting your personal data and complying with applicable data protection laws, 
                including GDPR and CCPA.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <HiLockClosed className="w-6 h-6 mr-2 text-green-500" />
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-white mb-2">Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Contact information (name, email, phone number)</li>
                <li>Company information (company name, website URL)</li>
                <li>Project requirements and business challenges</li>
                <li>Communication preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-2">Information Automatically Collected</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>IP address and browser information</li>
                <li>Device and operating system information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website or source</li>
                <li>Analytics data (via Google Analytics 4 with IP anonymization)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To communicate with you about projects and inquiries</li>
                <li>To send project updates and important notifications</li>
                <li>To improve our services and website experience</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security Measures</h2>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <HiShieldCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">SSL/TLS encryption for all data transmissions</span>
                  </li>
                  <li className="flex items-start">
                    <HiShieldCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Secure cloud storage with encryption at rest</span>
                  </li>
                  <li className="flex items-start">
                    <HiShieldCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Regular security audits and updates</span>
                  </li>
                  <li className="flex items-start">
                    <HiShieldCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Access controls and authentication</span>
                  </li>
                  <li className="flex items-start">
                    <HiShieldCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">GDPR and CCPA compliant practices</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-gray-300 mb-4">
                We use trusted third-party services to help us provide and improve our services:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Google Cloud Platform (infrastructure and data storage)</li>
                <li>Google Analytics 4 (website analytics with IP anonymization)</li>
                <li>Web3Forms (contact form processing)</li>
                <li>Payment processors (Stripe/PayPal for secure transactions)</li>
              </ul>
              <p className="text-gray-300 mt-4">
                These services have their own privacy policies and we encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-4">You have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-gray-300">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined 
                in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. 
                Project-related data is retained for up to 3 years after project completion unless otherwise 
                required by law or agreed upon.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-300">
                Our services are not intended for individuals under the age of 18. We do not knowingly 
                collect personal information from children under 18.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-300 mb-4">
                  For any questions or concerns about this Privacy Policy or our data practices, please contact:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> developer@tagspecialist.ca</p>
                  <p><strong>Phone:</strong> +1 (236) 668-8922</p>
                  <p><strong>Address:</strong> Vancouver, BC, Canada</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                We encourage you to review this Privacy Policy periodically.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;