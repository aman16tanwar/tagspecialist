import React from 'react';
import { 
    HiDatabase, 
    HiArrowRight,
    HiLightningBolt,
    HiStar,
    HiCheckCircle,
    HiShieldCheck
} from 'react-icons/hi';

const ServicesSection = () => {
    const services = [
        {
            title: "Server-Side & Attribution Engine",
            icon: HiLightningBolt,
            iconColor: "text-blue-600",
            bgColor: "bg-blue-50",
            borderColor: "hover:border-blue-400",
            buttonColor: "bg-blue-600 hover:bg-blue-700",
            popular: true,
            popularTag: "Most Popular for DTC Brands",
            value: "Captures 30-40% more conversion data you're currently losing. If you spend $50K/month on ads, that's $15K-20K in previously invisible conversions.",
            description: "Stop revenue leaks. Get 100% accurate tracking for marketing spend, ensuring every dollar is attributed correctly with server-side accuracy.",
            features: [
                "Full Server-Side GTM Infrastructure",
                "Facebook CAPI & Google Ads Enhanced Conversions",
                "Ad blocker bypass (20-40% more data)",
                "First-Party Identity Stitching",
                "Advanced Cross-Channel Attribution",
                "Consent Mode v2 Implementation"
            ],
            deliverables: [
                "Fully deployed tracking infrastructure",
                "Custom dataLayer & custom subdomain setup",
                "SOP documentation & team training",
                "30-day post-launch support & QA"
            ],
            pricing: "$18,500 (one-time)",
            timeline: "3-4 weeks"
        },
        {
            title: "Enterprise Data & AI Warehouse",
            icon: HiDatabase,
            iconColor: "text-purple-600",
            bgColor: "bg-purple-50",
            borderColor: "hover:border-purple-400",
            buttonColor: "bg-purple-600 hover:bg-purple-700",
            value: "One client went from 2.1x to 9.5x ROAS in 6 months—$200K+ additional monthly revenue from better attribution and optimization.",
            description: "Build a single source of truth for all marketing data, powering executive-level insights and automated GenAI reporting.",
            features: [
                "GA4 → BigQuery Real-time Pipeline",
                "CRM & Shopify → BigQuery ETL",
                "Custom SQL Attribution & LTV Models",
                "GenAI Analytics Agent Integration",
                "Automated Anomaly Detection Alerts",
                "Executive Dashboards (Looker/PowerBI)"
            ],
            deliverables: [
                "Production-ready BigQuery data warehouse",
                "Custom SQL transformations & views",
                "GenAI natural language query interface",
                "Documentation & ongoing optimization plan"
            ],
            pricing: "$28,000 (one-time)",
            timeline: "5-6 weeks"
        }
    ];

    return (
        <section id="services" className="pt-20 pb-10 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-4 uppercase tracking-tighter">
                        Flagship Data Solutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        High-performance data infrastructure engineered for 8-figure brands. We build the systems that turn your data into profitable growth.
                    </p>
                </div>

                {/* Social Proof Stats Bar */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-4xl font-black text-blue-600 mb-1">451%</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Average ROAS Delivered</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-4xl font-black text-blue-600 mb-1">30-40%</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">More Data Captured</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-4xl font-black text-blue-600 mb-1">50+</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Brands Served</div>
                        </div>
                    </div>

                    <div className="bg-brand-highlight border border-blue-100 rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => <HiStar key={i} className="w-6 h-6" />)}
                            </div>
                            <p className="text-gray-600 italic text-xl lg:text-2xl leading-relaxed max-w-3xl mb-6">
                                "TagSpecialist transformed our data infrastructure. For the first time in two years, we finally know exactly where our next dollar should be spent. The ROI was immediate and massive."
                            </p>
                            <span className="block font-black text-navy-900 text-sm uppercase tracking-widest">
                                — VP of Marketing, $50M+ DTC Fashion Brand
                            </span>
                        </div>
                        <HiStar className="absolute -bottom-10 -right-10 w-48 h-48 text-blue-600/5 rotate-12" />
                    </div>
                </div>

                {/* Main Services Grid - Removed Motion wrapper to fix gap issues */}
                <div className="grid lg:grid-cols-2 lg:max-w-6xl mx-auto gap-8 mb-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-gray-50 rounded-3xl p-8 border-2 ${service.popular ? 'border-blue-600 shadow-xl lg:scale-105 z-10' : 'border-gray-200'} transition-all duration-300 group hover:shadow-xl hover:bg-white flex flex-col relative`}
                        >
                            {service.popular && (
                                <div className="bg-blue-600 text-white text-center py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-t-xl absolute top-0 left-0 right-0">
                                    {service.popularTag}
                                </div>
                            )}
                            
                            <div className={`flex items-start justify-between ${service.popular ? 'mt-6' : ''} mb-6`}>
                                <div className={`p-4 ${service.bgColor} rounded-2xl border border-gray-200 group-hover:scale-110 transition-transform`}>
                                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                                </div>
                                <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${service.bgColor} ${service.iconColor}`}>
                                    {service.timeline}
                                </span>
                            </div>

                            <h3 className="text-2xl font-black text-navy-900 mb-4 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed font-medium text-sm">
                                {service.description}
                            </p>

                            <div className="mb-8">
                                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Core Capabilities</h4>
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <HiCheckCircle className={`w-5 h-5 ${service.iconColor} mt-0.5 flex-shrink-0`} />
                                            <span className="text-sm text-navy-900 font-bold">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Strategic Deliverables</h4>
                                <ul className="space-y-2">
                                    {service.deliverables.map((deliverable, idx) => (
                                        <li key={idx} className="text-xs text-gray-500 font-bold italic">
                                            • {deliverable}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8 border-t border-gray-200 mt-auto">
                                <div className="mb-6">
                                    <div className="flex items-baseline justify-between mb-2">
                                        <span className="text-3xl font-black text-navy-900 tracking-tighter">
                                            {service.pricing}
                                        </span>
                                    </div>
                                    <div className="p-3 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                                        <p className="text-xs font-bold text-blue-800 leading-relaxed">
                                            <span className="text-blue-600">💰 VALUE:</span> {service.value}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-4 justify-center font-bold uppercase tracking-widest">
                                    <HiShieldCheck className="text-green-500 text-base" />
                                    <span>30-Day Satisfaction Guarantee</span>
                                </div>

                                <button
                                    onClick={() => {
                                        const event = new CustomEvent('openContactForm', { 
                                            detail: { service: service.title } 
                                        });
                                        window.dispatchEvent(event);
                                    }}
                                    className={`w-full py-4 ${service.buttonColor} text-white font-black rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group uppercase text-xs tracking-[0.2em] shadow-lg hover:shadow-blue-500/25`}
                                >
                                    <span>Reserve Your Build Slot</span>
                                    <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;