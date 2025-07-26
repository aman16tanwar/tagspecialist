import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
    HiLockClosed, HiCheckCircle, HiCode, HiCloud,
    HiDatabase, HiArrowRight, HiCurrencyDollar,
    HiDocumentText, HiLightningBolt
} from 'react-icons/hi';
import { FaShopify, FaPython, FaDocker } from 'react-icons/fa';
import { SiGooglecloud, SiGooglebigquery } from 'react-icons/si';

const ShopifyBigQueryTutorial = () => {
    const [showPaywall, setShowPaywall] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Track scroll to show paywall at the right moment
    useEffect(() => {
        const handleScroll = () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercentage > 40 && !showPaywall) {
                setShowPaywall(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [showPaywall]);

    const tableSchema = [
        { field: 'order_id', type: 'STRING', description: 'Unique order identifier' },
        { field: 'created_at', type: 'TIMESTAMP', description: 'Order creation timestamp' },
        { field: 'total_price', type: 'FLOAT64', description: 'Total order value' },
        { field: 'customer_id', type: 'STRING', description: 'Customer identifier' },
        { field: 'line_items_count', type: 'INT64', description: 'Number of items in order' },
        { field: 'store_domain', type: 'STRING', description: 'Shopify store domain' }
    ];

    return (
        <div className="min-h-screen bg-gray-900 pt-20">
            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
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

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Complete Guide: Build Your Own 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 block mt-2">
                                Shopify → BigQuery Pipeline
                            </span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                                Technical Tutorial
                            </span>
                            <span className="text-gray-400">20 min read</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-green-400 font-medium">Save $12,000/year</span>
                        </div>

                        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-8">
                            <p className="text-yellow-200">
                                ⚡ <strong>What you'll build:</strong> A production-ready data pipeline that syncs unlimited Shopify stores to BigQuery for ~$50/month instead of $1,000+/month with traditional tools.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">What We'll Cover</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "The $1,000/month problem with ELT tools",
                            "Our Python + Cloud Run solution architecture",
                            "Setting up BigQuery schemas",
                            "Historical data backfill script",
                            "Incremental sync implementation",
                            "Docker containerization",
                            "Cloud Run deployment",
                            "Multi-store configuration"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Problem Statement */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto prose prose-invert">
                    <h2 className="text-3xl font-bold text-white mb-6">The Problem: Why ELT Tools Are Killing Your Budget</h2>
                    
                    <div className="bg-gray-800 rounded-lg p-6 mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Current Market Pricing Reality:</h3>
                        <ul className="space-y-2">
                            <li className="flex justify-between items-center">
                                <span className="text-gray-300">Fivetran (10 Shopify stores):</span>
                                <span className="text-red-400 font-bold">$1,000-2,500/month</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-gray-300">Stitch Data (10 stores):</span>
                                <span className="text-red-400 font-bold">$1,000-1,500/month</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-gray-300">Airbyte Cloud (10 stores):</span>
                                <span className="text-red-400 font-bold">$800-1,200/month</span>
                            </li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-700">
                            <p className="text-yellow-400">
                                💸 Annual cost: <strong>$12,000 - $30,000</strong> just to move your own data!
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-300 text-lg">
                        Here's the truth: These tools charge per data source, per row, or per monthly active row. 
                        When you have multiple Shopify stores, costs explode exponentially. But what if you could 
                        build your own pipeline that handles unlimited stores for just the cost of infrastructure?
                    </p>
                </div>
            </section>

            {/* Solution Architecture */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Our Solution Architecture</h2>
                    
                    <div className="bg-gray-900 rounded-xl p-8 mb-8">
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <FaShopify className="w-8 h-8 text-green-400" />
                                </div>
                                <h3 className="font-semibold text-white mb-2">Shopify Stores</h3>
                                <p className="text-sm text-gray-400">Unlimited stores, one pipeline</p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <SiGooglecloud className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="font-semibold text-white mb-2">Cloud Run</h3>
                                <p className="text-sm text-gray-400">Serverless, auto-scaling</p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <SiGooglebigquery className="w-8 h-8 text-purple-400" />
                                </div>
                                <h3 className="font-semibold text-white mb-2">BigQuery</h3>
                                <p className="text-sm text-gray-400">Petabyte-scale analytics</p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <h3 className="text-xl font-semibold text-white mb-4">Key Components:</h3>
                        <ol className="space-y-3 text-gray-300">
                            <li><strong>Historical Backfill Script:</strong> One-time import of all historical data</li>
                            <li><strong>Incremental Sync Script:</strong> Daily updates of new/modified records</li>
                            <li><strong>Store Configuration:</strong> JSON-based multi-store management</li>
                            <li><strong>Error Handling:</strong> Automatic retries and failure notifications</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* BigQuery Schema */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Step 1: BigQuery Schema Setup</h2>
                    
                    <div className="bg-gray-800 rounded-lg p-6 mb-8">
                        <h3 className="text-lg font-semibold text-white mb-4">Orders Table Schema Example:</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="text-left py-2 text-gray-400">Field Name</th>
                                        <th className="text-left py-2 text-gray-400">Type</th>
                                        <th className="text-left py-2 text-gray-400">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableSchema.map((field, idx) => (
                                        <tr key={idx} className="border-b border-gray-700/50">
                                            <td className="py-2 text-white font-mono">{field.field}</td>
                                            <td className="py-2 text-blue-400">{field.type}</td>
                                            <td className="py-2 text-gray-400">{field.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-4 mb-8">
                        <pre className="text-sm text-gray-300 overflow-x-auto">
                            <code>{`-- Order Insights Table
CREATE OR REPLACE TABLE your_dataset.order_insights (
    order_id STRING,
    order_number STRING,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    total_price FLOAT64,
    subtotal_price FLOAT64,
    total_tax FLOAT64,
    currency STRING,
    customer_id STRING,
    email STRING,
    financial_status STRING,
    fulfillment_status STRING,
    store_domain STRING,
    _synced_at TIMESTAMP
)
PARTITION BY DATE(created_at);

-- Order Items Table (Separate for better performance)
CREATE OR REPLACE TABLE your_dataset.order_items_insights (
    order_id STRING,
    product_id STRING,
    variant_id STRING,
    sku STRING,
    title STRING,
    quantity INT64,
    price FLOAT64,
    total_discount FLOAT64,
    store_domain STRING
);`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Here's where the paywall appears */}
            <div className={`relative ${showPaywall ? 'max-h-96 overflow-hidden' : ''}`}>
                {/* Shopify API Setup */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">Step 2: Shopify API Access Setup</h2>
                        
                        <p className="text-gray-300 mb-6">
                            First, you need to create a private app in your Shopify admin to get API credentials:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <img 
                                src="/images/tutorial/Shopify-API-1.webp" 
                                alt="Shopify Private App Creation"
                                className="rounded-lg border border-gray-700"
                            />
                            <img 
                                src="/images/tutorial/Shopify-API-2.webp" 
                                alt="Shopify API Permissions"
                                className="rounded-lg border border-gray-700"
                            />
                        </div>

                        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 mb-8">
                            <p className="text-blue-200">
                                💡 <strong>Required Permissions:</strong> Products (read), Orders (read), Customers (read), Inventory (read)
                            </p>
                        </div>
                    </div>
                </section>

            {/* Store Configuration Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">Step 3: Store Configuration</h2>
                        
                        <p className="text-gray-300 mb-6">
                            The magic happens in the <code className="bg-gray-900 px-2 py-1 rounded">store_config.json</code> file. 
                            This is where you configure all your Shopify stores:
                        </p>

                        <div className="bg-gray-900 rounded-lg p-4 mb-8">
                            <pre className="text-sm text-gray-300 overflow-x-auto">
                                <code>{`[
    {
        "MERCHANT": "your-store.myshopify.com",
        "TOKEN": "shpat_xxxxxxxxxxxxx",
        "GCP_PROJECT_ID": "your-gcp-project",
        "BIGQUERY_DATASET": "shopify_data",
        "BIGQUERY_TABLE_CUSTOMER_INSIGHTS": "customer_insights",
        "BIGQUERY_TABLE_ORDER_INSIGHTS": "order_insights",
        "BIGQUERY_TABLE_ORDER_ITEMS_INSIGHTS": "order_items_insights",
        "BIGQUERY_TABLE_PRODUCT_INSIGHTS": "products_insights",
        "BIGQUERY_CREDENTIALS_PATH": "bigquery.json"
    },
    {
        "MERCHANT": "second-store.myshopify.com",
        "TOKEN": "shpat_yyyyyyyyyyyyy",
        // ... additional stores
    }
]`}</code>
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Docker Implementation */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">Step 4: Dockerize Your Pipeline</h2>
                        
                        <p className="text-gray-300 mb-6">
                            We'll containerize the application using Docker for easy deployment to Cloud Run:
                        </p>

                        <div className="bg-gray-900 rounded-lg p-4 mb-8">
                            <p className="text-gray-400 text-sm mb-2">Dockerfile:</p>
                            <pre className="text-sm text-gray-300 overflow-x-auto">
                                <code>{`FROM python:3.11-slim

WORKDIR /app

COPY . .

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

CMD ["python", "main.py"]`}</code>
                            </pre>
                        </div>

                        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-8">
                            <p className="text-yellow-200">
                                ⚡ <strong>Pro Tip:</strong> Using Python 3.11-slim reduces image size by 60% compared to full Python images
                            </p>
                        </div>
                    </div>
                </section>

                {/* Results Preview */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">What You'll Achieve</h2>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">BigQuery Results:</h3>
                                <img 
                                    src="/images/tutorial/BigQuery-result.jpg" 
                                    alt="BigQuery query results showing Shopify data"
                                    className="rounded-lg border border-gray-700"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Cloud Run Costs:</h3>
                                <img 
                                    src="/images/tutorial/Cloud-run-cost.jpg" 
                                    alt="Cloud Run dashboard showing $50/month costs"
                                    className="rounded-lg border border-gray-700"
                                />
                            </div>
                        </div>

                        <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-green-400 mb-2">Your Monthly Costs:</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Cloud Run: ~$30-50/month</li>
                                <li>• BigQuery Storage: ~$20/month for 1TB</li>
                                <li>• Total: <strong className="text-green-400">~$50/month for unlimited stores!</strong></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Paywall Overlay */}
                {showPaywall && (
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent flex items-end justify-center pb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-2xl mx-auto px-4"
                        >
                            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-blue-500/50 shadow-2xl">
                                <HiLockClosed className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Get the Complete Implementation Guide + Source Code
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    This article continues with:
                                </p>
                                <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">Complete Python implementation</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">Docker containerization steps</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">Cloud Run deployment guide</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">Multi-store configuration</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">All source code files</span>
                                    </li>
                                </ul>

                                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                                    <p className="text-sm text-gray-400 mb-2">Starter Package includes:</p>
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-3xl font-bold text-white">$497</span>
                                        <span className="text-gray-500 line-through">$2,497</span>
                                        <span className="text-green-400 text-sm">Save 80%</span>
                                    </div>
                                    <ul className="text-sm text-gray-300 space-y-1 mb-4">
                                        <li>• Complete source code (1,000+ lines)</li>
                                        <li>• Step-by-step documentation</li>
                                        <li>• 30 days email support</li>
                                        <li>• Lifetime updates</li>
                                    </ul>
                                </div>

                                <button
                                    onClick={() => navigate('/starter-package')}
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg transform transition-all duration-200 hover:scale-105 mb-4"
                                >
                                    Get Instant Access
                                    <HiArrowRight className="inline-block ml-2 w-5 h-5" />
                                </button>

                                <p className="text-sm text-gray-400">
                                    ⚡ Instant download • 💰 30-day money back guarantee
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>

            {/* Hidden content preview for SEO */}
            <div className="opacity-0 h-0 overflow-hidden">
                <p>Docker implementation, Cloud Run deployment, Artifact Registry setup, incremental sync configuration...</p>
            </div>
        </div>
    );
};

export default ShopifyBigQueryTutorial;