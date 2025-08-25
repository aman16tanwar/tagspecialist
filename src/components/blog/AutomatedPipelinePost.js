import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
    HiLightningBolt, HiCheckCircle, HiClock, HiCurrencyDollar,
    HiArrowRight, HiExternalLink, HiSparkles, HiChartBar,
    HiDesktopComputer, HiCloud, HiUserGroup, HiPlay
} from 'react-icons/hi';
import { FaRocket, FaGithub } from 'react-icons/fa';

const AutomatedPipelinePost = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const comparisonData = [
        { feature: 'Setup Time', diy: '2-3 days', automated: '5 minutes', savings: '99% faster' },
        { feature: 'Technical Skills', diy: 'Python, Docker, GCP', automated: 'None required', savings: '100% easier' },
        { feature: 'Deployment', diy: 'Manual CLI commands', automated: 'One-click UI', savings: 'Instant' },
        { feature: 'Multi-store', diy: 'Edit config files', automated: 'Web form', savings: 'No code' },
        { feature: 'Monitoring', diy: 'Setup logging yourself', automated: 'Built-in dashboard', savings: 'Included' },
        { feature: 'Updates', diy: 'Manual code updates', automated: 'Automatic', savings: 'Zero maintenance' }
    ];

    const pricingComparison = [
        { tool: 'Fivetran', stores: '500K rows/mo', cost: 'FREE tier', annual: 'Hit limits fast', limit: 'Then $120+/mo' },
        { tool: 'Stitch Data', stores: '5M rows/mo', cost: 'FREE tier', annual: 'Hit limits in days', limit: 'Then $100+/mo' },
        { tool: 'Airbyte Cloud', stores: '1M rows/mo', cost: 'FREE tier', annual: 'Hit limits quickly', limit: 'Then $100+/mo' },
        { tool: 'Our DIY Solution', stores: 'Unlimited', cost: '$497 once', annual: '$50/mo hosting', limit: 'No limits ever' },
        { tool: 'Our Automated Solution', stores: 'Unlimited rows', cost: 'FREE (3 stores)', annual: '$50/mo hosting', limit: 'No row limits' }
    ];

    return (
        <div className="min-h-screen bg-gray-900 pt-20">
            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {/* Breadcrumb */}
                        <Link 
                            to="/blogs" 
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                        >
                            ← Back to Blogs
                        </Link>

                        {/* New Badge */}
                        <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <HiSparkles className="w-4 h-4" />
                            NEW: Launched January 2025
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            From DIY to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Done-For-You
                            </span>
                            : Automated Shopify Pipelines
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                                Product Update
                            </span>
                            <span className="text-gray-400">15 min read</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-green-400 font-medium">Now FREE for up to 3 stores!</span>
                        </div>

                        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-lg p-6 mb-8">
                            <p className="text-blue-200 text-lg">
                                🚀 <strong>Big Announcement:</strong> We've transformed our Shopify → BigQuery pipeline into a fully automated service. No more Docker, no more CLI commands, no more manual deployments. Just a simple web UI that gets you running in 5 minutes.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Video Demo Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 text-center">See It In Action</h2>
                        <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video mb-8 group cursor-pointer border border-gray-700 hover:border-blue-500 transition-all">
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 group-hover:bg-gray-900/60 transition-all">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                                        <HiPlay className="w-10 h-10 text-white ml-1" />
                                    </div>
                                    <p className="text-white text-lg font-medium">Watch 2-minute Demo</p>
                                    <p className="text-gray-400 text-sm mt-1">See how easy it is to onboard a new store</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-gray-800 rounded-lg p-4 text-center">
                                <HiDesktopComputer className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                                <h3 className="font-semibold text-white mb-1">Web Interface</h3>
                                <p className="text-sm text-gray-400">Simple form-based setup</p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-4 text-center">
                                <HiCloud className="w-8 h-8 text-green-400 mx-auto mb-2" />
                                <h3 className="font-semibold text-white mb-1">Auto Deploy</h3>
                                <p className="text-sm text-gray-400">Cloud Build handles everything</p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-4 text-center">
                                <HiChartBar className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                                <h3 className="font-semibold text-white mb-1">Instant Data</h3>
                                <p className="text-sm text-gray-400">See results in BigQuery immediately</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Journey Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8">The Journey: From Manual to Magical</h2>
                    
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-gray-300 mb-6">
                            Six months ago, we launched our DIY Shopify → BigQuery pipeline tutorial. It was a hit – 
                            hundreds of developers saved thousands of dollars building their own data pipelines instead 
                            of paying for expensive ELT tools.
                        </p>

                        <p className="text-lg text-gray-300 mb-6">
                            But we kept hearing the same feedback:
                        </p>

                        <div className="bg-gray-800 rounded-lg p-6 mb-8">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-400">📧</span>
                                    <span className="text-gray-300 italic">"Love the solution, but I'm not technical enough to deploy it"</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-400">💬</span>
                                    <span className="text-gray-300 italic">"Can you just set this up for me? Happy to pay for the service"</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-400">🤔</span>
                                    <span className="text-gray-300 italic">"Docker and Cloud Run are intimidating for non-developers"</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-lg text-gray-300 mb-6">
                            So we built something better. Something that requires zero technical knowledge. 
                            Something that makes Fivetran look overpriced and overcomplicated.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">DIY vs Automated: Side-by-Side</h2>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                                    <th className="text-left py-4 px-4 text-gray-400 font-medium">DIY Solution</th>
                                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Automated Solution</th>
                                    <th className="text-left py-4 px-4 text-green-400 font-medium">Improvement</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, idx) => (
                                    <tr key={idx} className="border-b border-gray-800">
                                        <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                                        <td className="py-4 px-4 text-gray-300">{row.diy}</td>
                                        <td className="py-4 px-4 text-blue-400">{row.automated}</td>
                                        <td className="py-4 px-4 text-green-400 font-medium">{row.savings}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">How the Automated System Works</h2>
                    
                    <div className="space-y-8">
                        {[
                            {
                                step: 1,
                                title: 'Fill Out Simple Web Form',
                                description: 'Enter your store URL, API token, and choose a name for your BigQuery dataset.',
                                icon: HiDesktopComputer,
                                color: 'blue'
                            },
                            {
                                step: 2,
                                title: 'Click "Start Onboarding"',
                                description: 'Our system validates your credentials and creates all necessary resources.',
                                icon: HiLightningBolt,
                                color: 'yellow'
                            },
                            {
                                step: 3,
                                title: 'Automatic Deployment',
                                description: 'Cloud Build creates your container, deploys to Cloud Run, and sets up schedulers.',
                                icon: HiCloud,
                                color: 'green'
                            },
                            {
                                step: 4,
                                title: 'Data Flows to BigQuery',
                                description: 'Within minutes, your Shopify data appears in organized BigQuery tables.',
                                icon: HiChartBar,
                                color: 'purple'
                            }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-6"
                            >
                                <div className={`flex-shrink-0 w-12 h-12 bg-${step.color}-500/20 rounded-full flex items-center justify-center`}>
                                    <step.icon className={`w-6 h-6 text-${step.color}-400`} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        Step {step.step}: {step.title}
                                    </h3>
                                    <p className="text-gray-300">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Revolution Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4 text-center">The Pricing Revolution</h2>
                    <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                        Why we're making it free (and how we're still profitable)
                    </p>
                    
                    <div className="overflow-x-auto mb-12">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Solution</th>
                                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Row Limit</th>
                                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Starting Price</th>
                                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Reality Check</th>
                                    <th className="text-left py-4 px-4 text-gray-400 font-medium">After Limits</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingComparison.map((row, idx) => (
                                    <tr key={idx} className={`border-b border-gray-800 ${row.tool.includes('Our') ? 'bg-blue-900/20' : ''}`}>
                                        <td className="py-4 px-4 text-white font-medium">{row.tool}</td>
                                        <td className="py-4 px-4 text-gray-300">{row.stores}</td>
                                        <td className="py-4 px-4 text-gray-300">{row.cost}</td>
                                        <td className={`py-4 px-4 ${row.annual.includes('50/mo') ? 'text-green-400' : 'text-orange-400'}`}>
                                            {row.annual}
                                        </td>
                                        <td className={`py-4 px-4 font-medium ${row.limit.includes('No') ? 'text-green-400' : 'text-red-400'}`}>
                                            {row.limit}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">The Real Difference: No Row Limits</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-lg font-semibold text-blue-400 mb-3">What Others Don't Tell You:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400">❌</span>
                                        <span className="text-gray-300">500K rows = ~1 week of Shopify data</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400">❌</span>
                                        <span className="text-gray-300">Then you're paying $100-500/month</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400">❌</span>
                                        <span className="text-gray-300">Vendor lock-in makes switching hard</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-purple-400 mb-3">Our Approach:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">Unlimited rows from day one</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">You own the infrastructure ($50/mo)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">No vendor lock-in ever</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Revenue Model Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8">How We Make Money (Transparently)</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold text-white mb-4">Free Forever</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-gray-300">Up to 3 Shopify stores</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-gray-300">Full pipeline functionality</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-gray-300">Basic monitoring</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-gray-300">Community support</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-6 border border-blue-700/50">
                            <h3 className="text-xl font-semibold text-white mb-4">Premium Add-ons</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <HiCurrencyDollar className="w-5 h-5 text-yellow-400 mt-0.5" />
                                    <div>
                                        <span className="text-white font-medium">Additional stores</span>
                                        <span className="text-gray-400 text-sm block">$47/store/month after 3 stores</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCurrencyDollar className="w-5 h-5 text-yellow-400 mt-0.5" />
                                    <div>
                                        <span className="text-white font-medium">Priority support</span>
                                        <span className="text-gray-400 text-sm block">$197/month - 24hr response time</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCurrencyDollar className="w-5 h-5 text-yellow-400 mt-0.5" />
                                    <div>
                                        <span className="text-white font-medium">Custom integrations</span>
                                        <span className="text-gray-400 text-sm block">Starting at $2,500</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6">
                        <p className="text-yellow-200">
                            💡 <strong>The math:</strong> If just 10% of free users need more than 3 stores, 
                            we're profitable. If 5% need support, we're very profitable. If 1% need custom work, 
                            we're killing it. Meanwhile, you save $12,000+/year.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Architecture */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8">Under the Hood: Technical Architecture</h2>
                    
                    <div className="prose prose-invert max-w-none mb-8">
                        <p className="text-lg text-gray-300">
                            For the technical folks wondering how we made this scalable and cost-effective:
                        </p>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6 mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Multi-Tenant Architecture</h3>
                        <pre className="text-sm text-gray-300 overflow-x-auto">
                            <code>{`happyweb-project/
├── Cloud Run Services/
│   ├── shopify-onboarding-api (shared)
│   ├── shopify-pipeline-client1
│   ├── shopify-pipeline-client2
│   └── shopify-pipeline-clientN
├── BigQuery/
│   ├── shopify_client1/
│   ├── shopify_client2/
│   └── shopify_clientN/
└── Secret Manager/
    ├── shopify-token-client1
    ├── shopify-token-client2
    └── shopify-token-clientN`}</code>
                        </pre>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-900 rounded-lg p-6">
                            <h4 className="text-lg font-semibold text-white mb-3">Cost Optimizations</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>• Cloud Run scales to zero when idle</li>
                                <li>• Shared onboarding service</li>
                                <li>• BigQuery partitioning by date</li>
                                <li>• Efficient batch processing</li>
                                <li>• Smart caching strategies</li>
                            </ul>
                        </div>
                        <div className="bg-gray-900 rounded-lg p-6">
                            <h4 className="text-lg font-semibold text-white mb-3">Security Features</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>• Encrypted tokens in Secret Manager</li>
                                <li>• Service account isolation</li>
                                <li>• VPC service controls</li>
                                <li>• Audit logging enabled</li>
                                <li>• No cross-tenant data access</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
                        <p className="text-blue-200">
                            <FaGithub className="inline-block w-5 h-5 mr-2" />
                            Want to see the code? The onboarding UI is open source! Check it out on our GitHub.
                        </p>
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Early Adopter Success</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                            <div className="flex items-center gap-2 mb-4">
                                <HiUserGroup className="w-6 h-6 text-blue-400" />
                                <h3 className="text-lg font-semibold text-white">Fashion Retailer</h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                "We were quoted $1,800/month by Fivetran for our 3 stores. This free solution 
                                does exactly the same thing. Setup took 15 minutes total."
                            </p>
                            <div className="text-sm text-green-400">
                                Saving: $21,600/year
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                            <div className="flex items-center gap-2 mb-4">
                                <HiUserGroup className="w-6 h-6 text-purple-400" />
                                <h3 className="text-lg font-semibold text-white">Multi-Brand Agency</h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                "We manage 12 client stores. The paid tier is still 90% cheaper than alternatives, 
                                and the web UI means our junior analysts can onboard new clients."
                            </p>
                            <div className="text-sm text-green-400">
                                Saving: $18,000/year
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                    
                    <div className="space-y-6">
                        {[
                            {
                                q: "Is it really free? What's the catch?",
                                a: "Yes, it's really free for up to 3 stores. No catch. We make money from larger customers who need more stores or premium support. The free tier helps us build a community and showcase our expertise."
                            },
                            {
                                q: "What if I already bought the DIY package?",
                                a: "You get lifetime access to the automated system at no additional cost! Consider it an early adopter bonus. You can still use the source code for custom implementations."
                            },
                            {
                                q: "Can I migrate from Fivetran/Stitch?",
                                a: "Absolutely! The data schema is compatible. Just set up our pipeline and point your dashboards to the new tables. We even have a migration guide."
                            },
                            {
                                q: "What about data security?",
                                a: "Each client gets isolated resources. API tokens are encrypted in Google Secret Manager. Data never leaves your GCP project. We can't see your data."
                            },
                            {
                                q: "How reliable is it?",
                                a: "Cloud Run has 99.95% SLA. The pipeline retries failed syncs automatically. You get email alerts for any issues. Most users see 100% uptime."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-gray-900 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                                <p className="text-gray-300">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Stop Overpaying for Data Pipelines?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join hundreds of Shopify stores saving $12,000+ per year. 
                            Set up your first pipeline in 5 minutes. No credit card required.
                        </p>

                        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-700/50 max-w-md mx-auto mb-8">
                            <div className="mb-6">
                                <span className="text-5xl font-bold text-white">FREE</span>
                                <p className="text-gray-400 mt-2">For up to 3 Shopify stores</p>
                            </div>
                            
                            <ul className="text-left space-y-3 mb-8">
                                <li className="flex items-center gap-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-gray-300">5-minute web-based setup</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-gray-300">Automatic Cloud Run deployment</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-gray-300">Real-time data sync to BigQuery</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-gray-300">No credit card required</span>
                                </li>
                            </ul>

                            <a
                                href="https://shopify-onboarding-xxxxx.run.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transform transition-all duration-200 hover:scale-105"
                            >
                                Start Free Now
                                <HiArrowRight className="inline-block ml-2 w-5 h-5" />
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
                            <span className="flex items-center gap-2">
                                <FaRocket className="w-4 h-4 text-blue-400" />
                                1,247 pipelines created this month
                            </span>
                            <span className="flex items-center gap-2">
                                <HiSparkles className="w-4 h-4 text-yellow-400" />
                                $2.3M saved by our users
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final Note */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-400">
                        Still prefer the DIY approach? The{' '}
                        <Link to="/blog/shopify-bigquery-pipeline-tutorial" className="text-blue-400 hover:text-blue-300">
                            original tutorial
                        </Link>
                        {' '}and{' '}
                        <Link to="/starter-package" className="text-blue-400 hover:text-blue-300">
                            source code package
                        </Link>
                        {' '}are still available.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AutomatedPipelinePost;