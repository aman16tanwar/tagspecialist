import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    HiSparkles, HiChartBar, HiLightningBolt, HiDatabase,
    HiTrendingUp, HiClock, HiPlay,
    HiCode, HiChatAlt, HiCursorClick
} from 'react-icons/hi';
import { FaRobot } from 'react-icons/fa';

const AIAssistantShowcase = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [displayedText, setDisplayedText] = useState('');

    const demoSteps = useMemo(() => [
        {
            id: 1,
            question: "Which products have the highest LTV?",
            sql: `SELECT 
    product_name,
    COUNT(DISTINCT customer_id) as customers,
    ROUND(AVG(lifetime_value), 2) as avg_ltv,
    ROUND(SUM(total_revenue), 2) as total_revenue
FROM ecommerce.customer_products
WHERE purchase_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 90 DAY)
GROUP BY product_name
ORDER BY avg_ltv DESC
LIMIT 10`,
            result: {
                headers: ["Product", "Customers", "Avg LTV", "Total Revenue"],
                rows: [
                    ["Premium Bundle", "847", "$285.40", "$241,734"],
                    ["Pro Subscription", "1,234", "$234.50", "$289,383"],
                    ["Elite Package", "523", "$198.20", "$103,659"]
                ]
            },
            insight: "Your Premium Bundle has 22% higher LTV than average. Consider increasing ad spend for this product."
        },
        {
            id: 2,
            question: "Show me CAC trends by channel",
            sql: `SELECT 
    marketing_channel,
    DATE_TRUNC(date, MONTH) as month,
    ROUND(SUM(ad_spend) / COUNT(DISTINCT customer_id), 2) as cac,
    COUNT(DISTINCT customer_id) as conversions
FROM marketing.attribution
WHERE date >= DATE_SUB(CURRENT_DATE(), INTERVAL 6 MONTH)
GROUP BY marketing_channel, month
ORDER BY month DESC, cac ASC`,
            result: {
                headers: ["Channel", "Month", "CAC", "Conversions"],
                rows: [
                    ["Google Ads", "2025-01", "$45.30", "1,847"],
                    ["Meta Ads", "2025-01", "$52.80", "2,134"],
                    ["Email", "2025-01", "$12.40", "3,523"]
                ]
            },
            insight: "Email CAC is 73% lower than paid channels. Recommendation: Increase email list building efforts."
        },
        {
            id: 3,
            question: "Forecast next month's revenue",
            sql: `WITH historical_data AS (
    SELECT 
        DATE_TRUNC(date, MONTH) as month,
        SUM(revenue) as monthly_revenue
    FROM sales.transactions
    WHERE date >= DATE_SUB(CURRENT_DATE(), INTERVAL 24 MONTH)
    GROUP BY month
)
SELECT 
    ML.FORECAST(
        MODEL sales.revenue_forecast_model,
        STRUCT(30 AS horizon, 0.95 AS confidence_level)
    ) AS forecast`,
            result: {
                headers: ["Forecast Period", "Predicted Revenue", "Lower Bound", "Upper Bound"],
                rows: [
                    ["February 2025", "$847,523", "$798,234", "$896,812"]
                ]
            },
            insight: "Based on seasonality and growth trends, expect 12% revenue increase. Ensure inventory for top products."
        }
    ], []);

    const features = [
        { icon: HiDatabase, text: "Connects directly to your BigQuery data warehouse" },
        { icon: HiChatAlt, text: "Ask questions in plain English" },
        { icon: HiCode, text: "Generates optimized SQL automatically" },
        { icon: HiChartBar, text: "Visualizes results instantly" },
        { icon: HiTrendingUp, text: "Provides actionable recommendations" },
        { icon: HiClock, text: "Saves 10+ hours per week on analysis" }
    ];

    // Typing animation effect
    useEffect(() => {
        if (isTyping && currentStep < demoSteps.length) {
            const text = demoSteps[currentStep].question;
            let index = 0;
            setDisplayedText('');
            
            const interval = setInterval(() => {
                if (index < text.length) {
                    setDisplayedText(prev => prev + text[index]);
                    index++;
                } else {
                    clearInterval(interval);
                    setIsTyping(false);
                }
            }, 50);

            return () => clearInterval(interval);
        }
    }, [isTyping, currentStep, demoSteps]);

    const nextStep = () => {
        if (currentStep < demoSteps.length - 1) {
            setCurrentStep(currentStep + 1);
            setIsTyping(true);
        } else {
            setCurrentStep(0);
            setIsTyping(true);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.645, 0.045, 0.355, 1],
            },
        },
    };

    return (
        <section id="ai-assistant" className="relative py-20 bg-white overflow-hidden">
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                            <HiSparkles className="w-5 h-5 text-blue-600" />
                            <span className="text-sm text-blue-800 font-medium">AI-Powered Analytics</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                            Your Data, <span className="text-blue-600">Supercharged with AI</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See how my AI Analytics Assistant transforms complex data questions into instant insights
                        </p>
                    </motion.div>

                    {/* How it Works */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">How It Works</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg"
                                >
                                    <feature.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                    <span className="text-gray-700">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Interactive Demo */}
                    <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xl">
                            {/* Demo Header */}
                            <div className="bg-navy-900 p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <FaRobot className="w-8 h-8 text-white" />
                                        <h3 className="text-xl font-bold text-white">AI Analytics Assistant Demo</h3>
                                    </div>
                                    <button
                                        onClick={() => { setCurrentStep(0); setIsTyping(true); }}
                                        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-sm transition-colors flex items-center gap-2 text-sm uppercase tracking-wide"
                                    >
                                        <HiPlay className="w-4 h-4" />
                                        Restart Demo
                                    </button>
                                </div>
                            </div>

                            {/* Demo Content */}
                            <div className="p-8 space-y-6">
                                {/* Question Input */}
                                <div>
                                    <label className="block text-sm font-semibold text-navy-900 mb-2">Your Question:</label>
                                    <div className="bg-gray-50 border border-gray-300 rounded-sm p-4 flex items-center gap-3">
                                        <HiCursorClick className="w-5 h-5 text-gray-500" />
                                        <span className="text-navy-900 font-mono">
                                            {isTyping ? displayedText : (currentStep < demoSteps.length ? demoSteps[currentStep].question : '')}
                                            {isTyping && <span className="animate-pulse">|</span>}
                                        </span>
                                    </div>
                                </div>

                                {/* SQL Generation */}
                                <AnimatePresence>
                                    {!isTyping && currentStep < demoSteps.length && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <label className="block text-sm font-semibold text-navy-900 mb-2">Generated SQL:</label>
                                            <div className="bg-navy-900 border border-navy-800 rounded-sm p-4 overflow-x-auto">
                                                <pre className="text-sm text-green-400 font-mono">
                                                    {demoSteps[currentStep].sql}
                                                </pre>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Results Table */}
                                <AnimatePresence>
                                    {!isTyping && currentStep < demoSteps.length && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                        >
                                            <label className="block text-sm font-semibold text-navy-900 mb-2">Results:</label>
                                            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                                                <table className="w-full">
                                                    <thead>
                                                        <tr className="bg-gray-100">
                                                            {demoSteps[currentStep].result.headers.map((header, index) => (
                                                                <th key={index} className="px-4 py-3 text-left text-sm font-semibold text-navy-900">
                                                                    {header}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {demoSteps[currentStep].result.rows.map((row, rowIndex) => (
                                                            <motion.tr
                                                                key={rowIndex}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.5 + rowIndex * 0.1 }}
                                                                className="border-t border-gray-200"
                                                            >
                                                                {row.map((cell, cellIndex) => (
                                                                    <td key={cellIndex} className="px-4 py-3 text-sm text-gray-700">
                                                                        {cell}
                                                                    </td>
                                                                ))}
                                                            </motion.tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* AI Insight */}
                                <AnimatePresence>
                                    {!isTyping && currentStep < demoSteps.length && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5, delay: 0.6 }}
                                            className="bg-blue-50 border border-blue-100 rounded-sm p-6"
                                        >
                                            <div className="flex items-start gap-3">
                                                <HiLightningBolt className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                                <div>
                                                    <h4 className="text-sm font-semibold text-blue-800 mb-2">AI Insight</h4>
                                                    <p className="text-gray-700">{demoSteps[currentStep].insight}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Next Button */}
                                {!isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                        className="flex justify-center"
                                    >
                                        <button
                                            onClick={nextStep}
                                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-sm shadow-md hover:shadow-lg transform transition-all duration-200 hover:scale-105 flex items-center gap-2 uppercase text-sm tracking-wide"
                                        >
                                            Try Another Question
                                            <HiSparkles className="w-5 h-5" />
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div variants={itemVariants} className="text-center mt-12">
                        <p className="text-lg text-gray-600 mb-6">
                            Ready to unlock insights from your data in seconds?
                        </p>
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-sm shadow-lg transition-all duration-200 hover:scale-105 uppercase tracking-wide"
                        >
                            Get Your AI Assistant
                            <FaRobot className="w-5 h-5" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AIAssistantShowcase;
