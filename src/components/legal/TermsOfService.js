import React, { useEffect } from 'react';
import { HiArrowLeft, HiDocumentText, HiCheckCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
          <div className="flex items-center mb-6">
            <div className="p-3 bg-blue-50 rounded-lg mr-4">
              <HiDocumentText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy-900">Terms of Service</h1>
              <p className="text-gray-600 mt-1">Effective Date: January 18, 2025</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                By accessing or using Tag Specialist's services ("Services"), you agree to be bound by these 
                Terms of Service ("Terms"). If you disagree with any part of these terms, you do not have 
                permission to access our Services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tag Specialist is a registered business operating in British Columbia, Canada, providing 
                data engineering, marketing analytics, and cloud infrastructure services to clients worldwide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Services Provided</h2>
              <p className="text-gray-700 mb-4">Tag Specialist provides the following professional services:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Data pipeline development and ETL/ELT solutions</li>
                <li>Marketing analytics implementation (GA4, GTM, etc.)</li>
                <li>Cloud infrastructure setup and management</li>
                <li>API integrations and automation</li>
                <li>Consulting and technical support</li>
                <li>Custom software development for data solutions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a client, you agree to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate and complete information necessary for service delivery</li>
                <li>Grant necessary access to platforms, accounts, and systems</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Make payments according to agreed terms</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain confidentiality of any credentials provided</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Payment Terms</h2>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 space-y-3">
                <p className="text-gray-700">
                  <strong className="text-navy-900">Pricing:</strong> All prices are in USD unless otherwise specified. Prices are subject 
                  to change with 30 days notice.
                </p>
                <p className="text-gray-700">
                  <strong className="text-navy-900">Payment Schedule:</strong> 50% deposit upon project initiation, 50% upon completion, 
                  unless otherwise agreed in writing.
                </p>
                <p className="text-gray-700">
                  <strong className="text-navy-900">Late Payments:</strong> Payments more than 30 days overdue may incur a 1.5% monthly 
                  interest charge.
                </p>
                <p className="text-gray-700">
                  <strong className="text-navy-900">Refunds:</strong> Refunds are handled on a case-by-case basis. See our Refund Policy 
                  for details.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                <strong className="text-navy-900">Client Data:</strong> You retain all rights to your data. We only use your data to 
                provide our Services.
              </p>
              <p className="text-gray-700 mb-4">
                <strong className="text-navy-900">Deliverables:</strong> Upon full payment, you own all custom code, configurations, 
                and documentation created specifically for your project.
              </p>
              <p className="text-gray-700">
                <strong className="text-navy-900">Our IP:</strong> We retain ownership of our pre-existing tools, frameworks, methodologies, 
                and general know-how that are not specifically created for your project.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed">
                Both parties agree to maintain confidentiality of any proprietary information shared during 
                the engagement. This includes business strategies, technical specifications, customer data, 
                and financial information. This obligation survives termination of the agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Service Level Agreement (SLA)</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <HiCheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">
                    <strong className="text-navy-900">Response Time:</strong> Initial response within 24 business hours
                  </span>
                </div>
                <div className="flex items-start">
                  <HiCheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">
                    <strong className="text-navy-900">Uptime:</strong> 99.9% uptime for managed services (excluding scheduled maintenance)
                  </span>
                </div>
                <div className="flex items-start">
                  <HiCheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">
                    <strong className="text-navy-900">Support Hours:</strong> Monday-Friday, 9 AM - 6 PM PST
                  </span>
                </div>
                <div className="flex items-start">
                  <HiCheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">
                    <strong className="text-navy-900">Emergency Support:</strong> Available for critical issues (additional fees may apply)
                  </span>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Warranties and Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                <strong className="text-navy-900">Our Warranty:</strong> We warrant that our Services will be performed in a professional 
                and workmanlike manner consistent with industry standards.
              </p>
              <p className="text-gray-700">
                <strong className="text-navy-900">Disclaimer:</strong> Services are provided "as is" without warranty of any kind, either 
                express or implied, including but not limited to implied warranties of merchantability and fitness 
                for a particular purpose. We do not guarantee specific results or outcomes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Our total liability for any claim arising out of or relating to these Terms or our Services 
                shall not exceed the amount paid by you for the Services in the 12 months preceding the claim. 
                We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate the agreement with 30 days written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>All outstanding payments become immediately due</li>
                <li>We will provide all completed work and documentation</li>
                <li>Access to our systems will be revoked</li>
                <li>Data will be retained per our Privacy Policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">11. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these Terms shall first be addressed through good faith negotiations. 
                If unresolved, disputes shall be settled through binding arbitration in Vancouver, British Columbia, 
                Canada, under the rules of the Canadian Arbitration Association.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of British Columbia, 
                Canada, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Material changes will be notified to 
                clients at least 30 days in advance. Continued use of our Services after changes constitutes 
                acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">14. Contact Information</h2>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 mb-4">
                  For questions about these Terms of Service:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong className="text-navy-900">Tag Specialist</strong></p>
                  <p>Email: developer@tagspecialist.com</p>
                  <p>Phone: +1 (236) 668-8922</p>
                  <p>Address: Vancouver, BC, Canada</p>
                  <p>Business Registration: BC1234567</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
