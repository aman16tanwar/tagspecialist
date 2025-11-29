import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight, AlertCircle } from 'lucide-react';

const FivetranAlternative = () => {
  const comparisonData = [
    { feature: 'Pricing Model', fivetran: 'Monthly subscription', tagSpecialist: 'One-time purchase', winner: 'tagSpecialist' },
    { feature: 'Payment Structure', fivetran: 'Recurring monthly fees', tagSpecialist: '$497 once', winner: 'tagSpecialist' },
    { feature: 'Shopify Stores', fivetran: 'Per-connector pricing', tagSpecialist: 'Unlimited stores included', winner: 'tagSpecialist' },
    { feature: 'Data Volume', fivetran: 'MAR-based pricing', tagSpecialist: 'No volume limits', winner: 'tagSpecialist' },
    { feature: 'Setup Time', fivetran: '15-30 minutes', tagSpecialist: '2 hours initial setup', winner: 'fivetran' },
    { feature: 'Customization', fivetran: 'Limited to UI options', tagSpecialist: 'Full Python control', winner: 'tagSpecialist' },
    { feature: 'Data Ownership', fivetran: 'Passes through Fivetran', tagSpecialist: 'Direct to your BigQuery', winner: 'tagSpecialist' },
    { feature: 'Vendor Lock-in', fivetran: 'High switching costs', tagSpecialist: 'Own the code forever', winner: 'tagSpecialist' },
    { feature: 'Support', fivetran: 'Email/Chat support', tagSpecialist: 'Documentation + optional calls', winner: 'fivetran' },
    { feature: 'Maintenance', fivetran: 'Fully managed', tagSpecialist: 'Self-managed Python script', winner: 'fivetran' },
  ];

  const fivetranPainPoints = [
    {
      title: 'Expensive MAR Pricing',
      description: 'Fivetran charges based on Monthly Active Rows, which can quickly escalate to $5,000+ per month for growing Shopify stores.',
      solution: 'Our solution has no row limits - sync millions of records for the same $497 price.'
    },
    {
      title: 'Per-Connector Costs',
      description: 'Each Shopify store requires a separate connector, multiplying your costs for multi-store operations.',
      solution: 'Connect unlimited Shopify stores with a single Tag Specialist license.'
    },
    {
      title: 'Black Box Operations',
      description: "You can't see or modify how Fivetran transforms your data, limiting customization options.",
      solution: 'Full access to Python source code - customize every aspect of your pipeline.'
    },
    {
      title: 'Vendor Lock-in',
      description: 'Switching away from Fivetran means rebuilding your entire data pipeline from scratch.',
      solution: 'Own your pipeline code forever - no vendor dependencies or recurring fees.'
    }
  ];


  const faqs = [
    {
      question: "What's the difference between Fivetran and Tag Specialist?",
      answer: "Fivetran is a managed SaaS platform with monthly subscription fees, while Tag Specialist is a Python solution you purchase once and run on your own infrastructure (Google Cloud Functions or similar). You own the code and can modify it as needed."
    },
    {
      question: "What about reliability compared to Fivetran?",
      answer: "Our Python solution includes enterprise-grade error handling, automatic retries, and detailed logging. While Fivetran offers 99.9% SLA, our solution running on Google Cloud typically achieves similar uptime at a fraction of the cost."
    },
    {
      question: "Do I need technical expertise to use Tag Specialist?",
      answer: "Basic Python knowledge helps, but our Starter Package includes step-by-step documentation. For non-technical teams, our Professional Package ($997) includes a setup call, or choose Enterprise ($2,997) for complete done-for-you implementation."
    },
    {
      question: "Can I migrate from Fivetran to Tag Specialist?",
      answer: "Yes! Our solution can replicate your existing Fivetran schema in BigQuery. Most customers complete migration in 1-2 days without data loss. We provide migration guides to ensure smooth transition."
    },
    {
      question: "What if I need support after purchase?",
      answer: "The Starter Package includes comprehensive documentation and email support for setup questions. For ongoing support, we offer Professional and Enterprise packages with direct access to our team."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-50 text-red-700 px-4 py-2 rounded-sm mb-6 border border-red-100">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold text-sm uppercase tracking-wide">Stop Overpaying for Shopify Data Sync</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6">
              Fivetran Alternative for
              <span className="text-blue-600"> Shopify to BigQuery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Compare the costs: Fivetran charges monthly fees while Tag Specialist offers a one-time purchase Python solution for $497
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/starter-package"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-sm shadow-lg hover:bg-blue-700 transition-colors uppercase text-sm tracking-wide"
              >
                Get Tag Specialist for $497
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://calendly.com/aman16tanwar/30min"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-sm border border-blue-600 hover:bg-blue-50 transition-colors uppercase text-sm tracking-wide"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>

          {/* Cost Comparison Visual */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-16">
            <h2 className="text-2xl font-bold text-center text-navy-900 mb-8">Annual Cost Comparison</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-red-50 rounded-lg border border-red-100">
                <div className="text-3xl font-bold text-red-600 mb-2">Monthly Subscription</div>
                <div className="text-gray-600 mb-4">Fivetran Pricing Model</div>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-gray-600">
                    <X className="w-5 h-5 mr-2 text-red-500" />
                    <span>Recurring monthly fees</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <X className="w-5 h-5 mr-2 text-red-500" />
                    <span>Per-connector pricing</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <X className="w-5 h-5 mr-2 text-red-500" />
                    <span>MAR-based scaling costs</span>
                  </div>
                </div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-100">
                <div className="text-4xl font-bold text-green-600 mb-2">$497</div>
                <div className="text-gray-600 mb-4">Tag Specialist One-Time Cost</div>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    <span>One-time payment</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    <span>Unlimited stores</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    <span>No volume limits</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-green-50 border border-green-100 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-700">
                One-Time Purchase vs Recurring Monthly Fees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">
            Side-by-Side Comparison: Fivetran vs Tag Specialist
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-navy-900 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-navy-900 uppercase tracking-wider">Fivetran</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-navy-900 uppercase tracking-wider">Tag Specialist</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-navy-900">{row.feature}</td>
                      <td className={`px-6 py-4 text-sm text-center ${row.winner === 'fivetran' ? 'text-green-600 font-semibold' : 'text-gray-600'}`}>
                        {row.fivetran}
                      </td>
                      <td className={`px-6 py-4 text-sm text-center ${row.winner === 'tagSpecialist' ? 'text-green-600 font-semibold' : 'text-gray-600'}`}>
                        {row.tagSpecialist}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">
            Common Fivetran Pain Points (And How We Solve Them)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {fivetranPainPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-500 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600 mb-4">{point.description}</p>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="ml-2 text-green-700 font-medium">{point.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Migration Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Easy Migration from Fivetran</h2>
            <p className="text-gray-300">Switching is easier than you think. Start saving immediately.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Purchase Package</h3>
                <p className="text-sm text-gray-400">Get instant access to code and documentation</p>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Setup Pipeline</h3>
                <p className="text-sm text-gray-400">Deploy to Google Cloud Functions (2 hours)</p>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Test & Validate</h3>
                <p className="text-sm text-gray-400">Verify data matches Fivetran output</p>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Cancel Fivetran</h3>
                <p className="text-sm text-gray-400">Start saving $1,000+/month immediately</p>
              </div>
            </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-6">
            Ready to Switch from Monthly Fees to One-Time Purchase?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get your Shopify to BigQuery pipeline with a single payment
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold text-navy-900 mb-2">$497</h3>
              <p className="text-gray-600 mb-4">Starter Package</p>
              <Link
                to="/starter-package"
                className="block w-full py-3 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors uppercase text-sm tracking-wide"
              >
                Buy Now
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-600 transform scale-105">
              <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2 uppercase tracking-wide">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">$997</h3>
              <p className="text-gray-600 mb-4">Professional Package</p>
              <a
                href="https://calendly.com/aman16tanwar/30min"
                className="block w-full py-3 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors uppercase text-sm tracking-wide"
              >
                Book Setup Call
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold text-navy-900 mb-2">$2,997</h3>
              <p className="text-gray-600 mb-4">Enterprise Package</p>
              <a
                href="https://calendly.com/aman16tanwar/30min"
                className="block w-full py-3 bg-navy-900 text-white font-semibold rounded-sm hover:bg-navy-800 transition-colors uppercase text-sm tracking-wide"
              >
                Get Started
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            30-day money-back guarantee • Setup support included • Own the code forever
          </p>
        </div>
      </section>

      {/* Schema Markup for FAQs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </div>
  );
};

export default FivetranAlternative;