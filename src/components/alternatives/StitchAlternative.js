import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight, TrendingUp, Shield, Zap, DollarSign } from 'lucide-react';

const StitchAlternative = () => {
  const comparisonData = [
    { feature: 'Pricing Model', stitch: 'Monthly subscription', tagSpecialist: 'One-time purchase', winner: 'tagSpecialist' },
    { feature: 'Payment Type', stitch: 'Recurring fees', tagSpecialist: '$497 once', winner: 'tagSpecialist' },
    { feature: 'Row Limits', stitch: '5M rows/month (Standard)', tagSpecialist: 'Unlimited rows', winner: 'tagSpecialist' },
    { feature: 'Shopify Stores', stitch: '1 per plan', tagSpecialist: 'Unlimited stores', winner: 'tagSpecialist' },
    { feature: 'Setup Complexity', stitch: 'Simple UI setup', tagSpecialist: '2-hour deployment', winner: 'stitch' },
    { feature: 'Data Freshness', stitch: '1-hour minimum', tagSpecialist: 'Real-time possible', winner: 'tagSpecialist' },
    { feature: 'Custom Transformations', stitch: 'Not supported', tagSpecialist: 'Full Python control', winner: 'tagSpecialist' },
    { feature: 'Historical Data', stitch: 'Limited lookback', tagSpecialist: 'Full history access', winner: 'tagSpecialist' },
    { feature: 'API Access', stitch: 'REST API available', tagSpecialist: 'Direct Shopify API', winner: 'tie' },
    { feature: 'Support', stitch: 'Email support only', tagSpecialist: 'Docs + optional calls', winner: 'tagSpecialist' },
  ];

  const stitchLimitations = [
    {
      title: 'Row-Based Pricing Trap',
      description: 'Stitch charges per row replicated. A growing Shopify store can quickly exceed the 5M row limit, forcing expensive upgrades.',
      solution: 'Tag Specialist has no row limits. Sync billions of rows for the same $497 price.'
    },
    {
      title: 'Single Store Limitation',
      description: 'Each Stitch plan covers only one data source. Multi-store brands need multiple subscriptions.',
      solution: 'Connect unlimited Shopify stores with one Tag Specialist license.'
    },
    {
      title: 'No Data Transformation',
      description: 'Stitch is extract-and-load only. You need additional tools like dbt for transformations.',
      solution: 'Full Python control allows custom transformations before loading to BigQuery.'
    },
    {
      title: 'Limited Historical Data',
      description: 'Stitch limits historical data backfill, making it hard to analyze long-term trends.',
      solution: 'Access your complete Shopify history - we sync all available historical data.'
    }
  ];


  const technicalAdvantages = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-Time Sync',
      description: 'Configure webhooks for instant updates vs Stitch\'s 1-hour minimum replication'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Data Security',
      description: 'Direct API connection to your BigQuery - no third-party data storage'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Scalability',
      description: 'Handles millions of products and orders without performance degradation'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      title: 'Cost Predictability',
      description: 'One-time cost means no surprise bills or forced upgrades'
    }
  ];

  const pricingComparison = {
    scenarios: [
      {
        name: 'Scenario A',
        volume: 'Low volume',
        stitchCost: 'Monthly subscription',
        stitchAnnual: 'Recurring',
        tagCost: '$497 once',
        savings: 'No monthly fees'
      },
      {
        name: 'Scenario B',
        volume: 'Medium volume',
        stitchCost: 'Monthly subscription',
        stitchAnnual: 'Recurring',
        tagCost: '$497 once',
        savings: 'No monthly fees'
      },
      {
        name: 'Scenario C',
        volume: 'High volume',
        stitchCost: 'Monthly subscription',
        stitchAnnual: 'Recurring',
        tagCost: '$497 once',
        savings: 'No monthly fees'
      },
      {
        name: 'Multi-Store',
        volume: 'Multiple stores',
        stitchCost: 'Per-store pricing',
        stitchAnnual: 'Recurring',
        tagCost: '$497 once',
        savings: 'Single solution'
      }
    ]
  };

  const faqs = [
    {
      question: "How does Tag Specialist handle row limits?",
      answer: "Our Python solution connects directly to Shopify's API and BigQuery. There are no built-in row limits in the code itself, though you'll need to consider your Google Cloud quotas and costs."
    },
    {
      question: "Is the setup really more complex than Stitch?",
      answer: "Initial setup takes about 2 hours vs 30 minutes for Stitch, but you gain complete control and customization. Our documentation walks you through every step, and the Professional package includes guided setup if needed."
    },
    {
      question: "What about Stitch's Singer taps ecosystem?",
      answer: "While Stitch uses Singer taps, our solution is purpose-built for Shopify → BigQuery, making it more efficient and feature-rich for this specific use case. You get better performance and Shopify-specific optimizations."
    },
    {
      question: "Can I replicate my Stitch setup exactly?",
      answer: "Yes, our solution can match your existing BigQuery schema from Stitch, making migration seamless. Most customers migrate without any downstream query changes."
    },
    {
      question: "What if Stitch adds new Shopify features?",
      answer: "You own the Python code, so you can add new Shopify API endpoints yourself or request updates from us. With Stitch, you wait for their product team's priorities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-orange-50 text-orange-800 px-4 py-2 rounded-sm mb-6 border border-orange-100">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="font-semibold text-sm uppercase tracking-wide">Escape Stitch Data's Row Limits</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6">
              Stitch Data Alternative:
              <span className="text-orange-600"> Unlimited Shopify Sync</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Compare Stitch Data's monthly subscription model with Tag Specialist's one-time purchase Python solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/starter-package"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-sm shadow-lg hover:bg-blue-700 transition-colors uppercase text-sm tracking-wide"
              >
                Replace Stitch for $497
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#pricing-comparison"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-sm border border-blue-600 hover:bg-blue-50 transition-colors uppercase text-sm tracking-wide"
              >
                See Cost Comparison
              </a>
            </div>
          </div>

          {/* Row Limit Comparison */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-16">
            <h2 className="text-2xl font-bold text-center text-navy-900 mb-8">The Row Limit Problem</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-red-50 rounded-lg border border-red-100">
                <div className="text-5xl font-bold text-red-600 mb-4">5M</div>
                <div className="text-gray-600 mb-4">Stitch Standard Plan Row Limit</div>
                <div className="bg-white rounded-sm p-4 border border-red-100">
                  <p className="text-sm text-red-800">
                    Row limits may require plan upgrades as your store grows
                  </p>
                </div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-100">
                <div className="text-5xl font-bold text-green-600 mb-4">∞</div>
                <div className="text-gray-600 mb-4">Tag Specialist Row Limit</div>
                <div className="bg-white rounded-sm p-4 border border-green-100">
                  <p className="text-sm text-green-800">
                    No built-in row limits in the Python code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">
            Stitch Data vs Tag Specialist: Feature Comparison
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-navy-900 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-navy-900 uppercase tracking-wider">Stitch Data</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-navy-900 uppercase tracking-wider">Tag Specialist</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-navy-900">{row.feature}</td>
                      <td className={`px-6 py-4 text-sm text-center ${row.winner === 'stitch' ? 'text-green-600 font-semibold' : 'text-gray-600'}`}>
                        {row.stitch}
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

      {/* Pricing Scenarios */}
      <section id="pricing-comparison" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">
            Real Cost Comparison by Store Size
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingComparison.scenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{scenario.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{scenario.volume}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Stitch Data:</p>
                    <p className="text-lg font-semibold text-red-600">{scenario.stitchCost}</p>
                    <p className="text-sm text-gray-500">({scenario.stitchAnnual}/year)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tag Specialist:</p>
                    <p className="text-lg font-semibold text-green-600">{scenario.tagCost}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-sm font-semibold text-green-700">You Save:</p>
                    <p className="text-sm text-green-600">{scenario.savings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">
            Stitch Data Limitations (And Our Solutions)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {stitchLimitations.map((limitation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
                <div className="flex items-start">
                  <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{limitation.title}</h3>
                    <p className="text-gray-600 mb-4">{limitation.description}</p>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="ml-2 text-green-700 font-medium">{limitation.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">
            Technical Advantages Over Stitch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalAdvantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Migration Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple Migration from Stitch</h2>
            <p className="text-gray-300">Switching is seamless. Keep your historical data.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Export Stitch Schema</h3>
                <p className="text-sm text-gray-400">Document your current BigQuery table structure</p>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Deploy Tag Specialist</h3>
                <p className="text-sm text-gray-400">Match schema and start syncing (2 hours)</p>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Cancel Stitch</h3>
                <p className="text-sm text-gray-400">Stop monthly payments, keep unlimited sync</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/starter-package"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors uppercase text-sm tracking-wide shadow-lg"
              >
                Start Migration Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
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

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-6">
            Choose One-Time Purchase Over Monthly Subscriptions
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get your Shopify to BigQuery pipeline without recurring fees
          </p>
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Stitch Data Costs</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-gray-600">
                    <X className="w-4 h-4 mr-2 text-red-500" />
                    <span>Monthly subscription fees</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <X className="w-4 h-4 mr-2 text-red-500" />
                    <span>Row limits on plans</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <X className="w-4 h-4 mr-2 text-red-500" />
                    <span>Recurring costs</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Tag Specialist</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    <span>$497 one-time payment</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    <span>No built-in row limits</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    <span>No recurring fees</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              to="/starter-package"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors w-full justify-center uppercase text-sm tracking-wide shadow-md"
            >
              Get Unlimited Sync for $497
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              30-day money-back guarantee • Setup support included
            </p>
          </div>
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

export default StitchAlternative;
