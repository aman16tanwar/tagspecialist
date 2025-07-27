import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
    HiLockClosed, HiCheckCircle, HiCode,
    HiDatabase, HiArrowRight, HiCurrencyDollar,
    HiLightningBolt, HiExternalLink
} from 'react-icons/hi';
import { FaPython } from 'react-icons/fa';

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
            // TEMPORARILY DISABLED FOR TESTING - Change back to 40 for production
            if (scrollPercentage > 101 && !showPaywall) {
                setShowPaywall(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [showPaywall]);

    const requiredScopes = [
        { scope: 'read_customers', description: 'Access customer data and insights' },
        { scope: 'read_orders', description: 'Access order history and details' },
        { scope: 'read_products', description: 'Access product catalog information' },
        { scope: 'read_inventory', description: 'Access inventory levels' }
    ];

    const bigqueryTables = [
        { name: 'customer_insights', description: 'Customer profiles and metrics' },
        { name: 'order_insights', description: 'Order details and financials' },
        { name: 'order_items_insights', description: 'Line items for each order' },
        { name: 'products_insights', description: 'Product catalog and variants' }
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

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-normal">
                            Complete Guide: Build Your Own{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 whitespace-nowrap">
                                Shopify → BigQuery
                            </span>
                            {' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                                Pipeline
                            </span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                                Technical Tutorial
                            </span>
                            <span className="text-gray-400">25 min read</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-green-400 font-medium">Save $12,000/year</span>
                        </div>

                        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-8">
                            <p className="text-yellow-200">
                                ⚡ <strong>What you'll build:</strong> A production-ready data pipeline that syncs multiple Shopify stores to BigQuery for ~$50/month total infrastructure cost.
                            </p>
                        </div>

                        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 mb-8">
                            <p className="text-blue-200">
                                📝 <strong>Important Note:</strong> While our solution can handle many stores, performance depends on data volume, API rate limits, and processing requirements. Most clients successfully run 10-50 stores on a single pipeline.
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
                            "Step 1: Shopify API access setup",
                            "Step 2: Store configuration (multi-store)",
                            "Step 3: Our pre-built extraction code",
                            "Step 4: BigQuery table schemas",
                            "Step 5: Docker containerization",
                            "Step 6: Artifact Registry setup",
                            "Step 7: Cloud Run deployment"
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
                            <li className="flex justify-between items-center">
                                <span className="text-gray-300">Zapier (30k tasks/month):</span>
                                <span className="text-red-400 font-bold">$500-1,000/month</span>
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
                        build your own pipeline that handles multiple stores for just the cost of infrastructure?
                    </p>
                </div>
            </section>

            {/* Step 1: Shopify API Setup */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Step 1: Shopify Private App & API Access</h2>
                    
                    <p className="text-gray-300 mb-6">
                        First, you need to create a private app in each Shopify store to get API credentials. This is crucial for data extraction.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="group cursor-pointer" onClick={() => window.open('/images/tutorial/Shopify-API-1.webp', '_blank')}>
                            <img 
                                src="/images/tutorial/Shopify-API-1.webp" 
                                alt="Shopify Private App Creation"
                                className="rounded-lg border border-gray-700 group-hover:border-blue-500 transition-all w-full h-auto"
                            />
                            <p className="text-sm text-gray-400 mt-2 text-center">Click to enlarge</p>
                        </div>
                        <div className="group cursor-pointer" onClick={() => window.open('/images/tutorial/Shopify-API-2.webp', '_blank')}>
                            <img 
                                src="/images/tutorial/Shopify-API-2.webp" 
                                alt="Shopify API Permissions"
                                className="rounded-lg border border-gray-700 group-hover:border-blue-500 transition-all w-full h-auto"
                            />
                            <p className="text-sm text-gray-400 mt-2 text-center">Click to enlarge</p>
                        </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 mb-8">
                        <h3 className="text-lg font-semibold text-white mb-4">Required API Scopes:</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {requiredScopes.map((scope, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <code className="text-blue-400 font-mono text-sm">{scope.scope}</code>
                                        <p className="text-gray-300 text-sm">{scope.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-4">
                        <p className="text-gray-400 text-sm mb-2">Navigation path in Shopify Admin:</p>
                        <code className="text-green-400 text-sm">
                            Settings → Apps and sales channels → Develop apps → Create an app
                        </code>
                    </div>
                </div>
            </section>

            {/* Step 2: Store Configuration */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Step 2: Multi-Store Configuration</h2>
                    
                    <p className="text-gray-300 mb-6">
                        Configure all your Shopify stores in a single <code className="bg-gray-900 px-2 py-1 rounded">store_config.json</code> file. 
                        The pipeline will iterate through each store automatically:
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
        "GCP_PROJECT_ID": "your-gcp-project",
        "BIGQUERY_DATASET": "shopify_data_store2",
        // ... same structure for additional stores
    }
]`}</code>
                        </pre>
                    </div>

                    <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                        <p className="text-yellow-200">
                            💡 <strong>Pro Tip:</strong> Use separate BigQuery datasets for each store to maintain data isolation and easier management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Step 3: Pre-built Code */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Step 3: Our Production-Ready Extraction Code</h2>
                    
                    <p className="text-gray-300 mb-6">
                        We've already built and tested the complete extraction logic. Our Python solution includes:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-900 rounded-lg p-6">
                            <FaPython className="w-8 h-8 text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-3">Core Modules</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <code className="text-green-400">customer_queue.py</code>
                                    <span className="text-gray-400">- Customer data extraction</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <code className="text-green-400">order_queue.py</code>
                                    <span className="text-gray-400">- Order processing</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <code className="text-green-400">order_items_queue.py</code>
                                    <span className="text-gray-400">- Line items handling</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <code className="text-green-400">products_queue.py</code>
                                    <span className="text-gray-400">- Product catalog sync</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 rounded-lg p-6">
                            <HiCode className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-center gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400" />
                                    Automatic retry logic for API failures
                                </li>
                                <li className="flex items-center gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400" />
                                    Pagination handling for large datasets
                                </li>
                                <li className="flex items-center gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400" />
                                    Rate limit management
                                </li>
                                <li className="flex items-center gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400" />
                                    Error logging and monitoring
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-4">
                        <p className="text-gray-400 text-sm mb-2">Main orchestrator (main.py):</p>
                        <pre className="text-sm text-gray-300 overflow-x-auto">
                            <code>{`# Loop through each store configuration
for store in stores:
    print(f"🚀 Processing store: {store['MERCHANT']}")
    
    # Run customer insights
    run_customer_insights(store)
    
    # Run order insights
    run_order_insights(store)
    
    # Run order items insights
    run_order_items_insights(store)
    
    # Run product insights
    run_product_insights(store)`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Step 4: BigQuery Schema */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Step 4: BigQuery Table Schemas</h2>
                    
                    <p className="text-gray-300 mb-6">
                        Our pipeline creates 4 optimized tables in BigQuery:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {bigqueryTables.map((table, idx) => (
                            <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                                <div className="flex items-center gap-2 mb-2">
                                    <HiDatabase className="w-5 h-5 text-blue-400" />
                                    <h3 className="font-semibold text-white">{table.name}</h3>
                                </div>
                                <p className="text-sm text-gray-400">{table.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-white mb-4">Visual Schema Overview:</h3>
                        <div className="group cursor-pointer" onClick={() => window.open('/images/tutorial/BigQuery-tables.jpg', '_blank')}>
                            <img 
                                src="/images/tutorial/BigQuery-tables.jpg" 
                                alt="BigQuery table schemas"
                                className="rounded-lg border border-gray-700 group-hover:border-blue-500 transition-all w-full h-auto"
                            />
                            <p className="text-sm text-gray-400 mt-2 text-center">Click to enlarge</p>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-4">
                        <p className="text-gray-400 text-sm mb-2">Example: Order Insights Table Schema</p>
                        <pre className="text-sm text-gray-300 overflow-x-auto">
                            <code>{`CREATE OR REPLACE TABLE your_dataset.order_insights (
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
PARTITION BY DATE(created_at);`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Here's where the paywall appears */}
            <div className={`relative ${showPaywall ? 'max-h-96 overflow-hidden' : ''}`}>
                {/* Step 5: Docker */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">Step 5: Dockerize Your Pipeline</h2>
                        
                        <p className="text-gray-300 mb-6">
                            Container your application for consistent deployment:
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

                        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                            <p className="text-blue-200">
                                💡 Build command: <code className="bg-gray-900 px-2 py-1 rounded">docker build -t shopify-pipeline .</code>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Step 6: Artifact Registry */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">Step 6: Push to Google Artifact Registry</h2>
                        
                        <p className="text-gray-300 mb-6">
                            Following the official Google Cloud documentation for Artifact Registry:
                        </p>

                        <div className="bg-gray-900 rounded-lg p-4 mb-8">
                            <pre className="text-sm text-gray-300 overflow-x-auto">
                                <code>{`# 1. Create repository
gcloud artifacts repositories create shopify-pipeline \
    --repository-format=docker \
    --location=us-central1

# 2. Configure Docker
gcloud auth configure-docker us-central1-docker.pkg.dev

# 3. Tag your image
docker tag shopify-pipeline \
    us-central1-docker.pkg.dev/YOUR_PROJECT/shopify-pipeline/shopify-pipeline:latest

# 4. Push to Artifact Registry
docker push us-central1-docker.pkg.dev/YOUR_PROJECT/shopify-pipeline/shopify-pipeline:latest`}</code>
                            </pre>
                        </div>

                        <a 
                            href="https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                        >
                            View full Artifact Registry documentation
                            <HiExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </section>

                {/* Step 7: Cloud Run Deployment */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">Step 7: Deploy to Cloud Run</h2>
                        
                        <div className="bg-gray-900 rounded-lg p-4 mb-8">
                            <pre className="text-sm text-gray-300 overflow-x-auto">
                                <code>{`# Deploy from Artifact Registry
gcloud run deploy shopify-pipeline \
    --image us-central1-docker.pkg.dev/YOUR_PROJECT/shopify-pipeline/shopify-pipeline:latest \
    --region us-central1 \
    --memory 2Gi \
    --timeout 3600 \
    --max-instances 10 \
    --no-allow-unauthenticated`}</code>
                            </pre>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">BigQuery Results:</h3>
                                <div className="group cursor-pointer" onClick={() => window.open('/images/tutorial/BigQuery-result.jpg', '_blank')}>
                                    <img 
                                        src="/images/tutorial/BigQuery-result.jpg" 
                                        alt="BigQuery query results"
                                        className="rounded-lg border border-gray-700 group-hover:border-blue-500 transition-all w-full h-auto"
                                    />
                                    <p className="text-sm text-gray-400 mt-2 text-center">Click to enlarge</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Cloud Run Costs:</h3>
                                <div className="group cursor-pointer" onClick={() => window.open('/images/tutorial/Cloud-run-cost.jpg', '_blank')}>
                                    <img 
                                        src="/images/tutorial/Cloud-run-cost.jpg" 
                                        alt="Cloud Run costs"
                                        className="rounded-lg border border-gray-700 group-hover:border-blue-500 transition-all w-full h-auto"
                                    />
                                    <p className="text-sm text-gray-400 mt-2 text-center">Click to enlarge</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-green-400 mb-2">Your Total Monthly Costs:</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Cloud Run: ~$30-50/month (for all stores)</li>
                                <li>• BigQuery Storage: ~$20/month per TB</li>
                                <li>• Total: <strong className="text-green-400">~$50-70/month for multiple stores!</strong></li>
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
                                    Get the Complete Implementation + Source Code
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    This tutorial continues with:
                                </p>
                                <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">Complete Python source code (1000+ lines)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">Cloud Scheduler setup for automation</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">Error handling & monitoring setup</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">Performance optimization tips</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-300">30 days of email support</span>
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
                                        <li>• All Python modules (customer, orders, products)</li>
                                        <li>• Complete deployment documentation</li>
                                        <li>• Store configuration templates</li>
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
                <p>Cloud Scheduler setup, monitoring, performance optimization, incremental sync configuration...</p>
            </div>

            {/* Final CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Save $12,000/Year on Your Data Pipeline?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Stop paying thousands to ELT tools. Get our complete Python solution and deploy your own 
                            Shopify → BigQuery pipeline this week.
                        </p>

                        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 max-w-md mx-auto mb-8">
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <HiCurrencyDollar className="w-12 h-12 text-green-400" />
                                <div className="text-left">
                                    <p className="text-sm text-gray-400">One-time investment</p>
                                    <p className="text-3xl font-bold text-white">$497</p>
                                </div>
                            </div>
                            
                            <ul className="text-left space-y-3 mb-8">
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">Complete Python source code (1000+ lines)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">Multi-store configuration templates</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">Step-by-step deployment guide</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">30 days of email support</span>
                                </li>
                            </ul>

                            <a
                                href="https://buy.stripe.com/fZu14o0xZ9EU0hkbaW83C01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg transform transition-all duration-200 hover:scale-105"
                            >
                                Get Instant Access
                                <HiArrowRight className="inline-block ml-2 w-5 h-5" />
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
                            <span className="flex items-center gap-2">
                                <HiLightningBolt className="w-4 h-4 text-yellow-400" />
                                Instant download
                            </span>
                            <span className="flex items-center gap-2">
                                <HiCheckCircle className="w-4 h-4 text-green-400" />
                                30-day money back guarantee
                            </span>
                            <span className="flex items-center gap-2">
                                <HiLockClosed className="w-4 h-4 text-blue-400" />
                                Secure checkout
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ShopifyBigQueryTutorial;