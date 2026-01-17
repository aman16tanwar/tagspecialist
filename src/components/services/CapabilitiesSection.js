import React from 'react';
import { 
    HiTrendingUp, 
    HiDatabase, 
    HiChartBar, 
    HiUserGroup 
} from 'react-icons/hi';

const CapabilitiesSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl font-black text-navy-900 mb-12 text-center uppercase tracking-widest underline decoration-blue-600 decoration-4 underline-offset-8">Specialized Capabilities</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: HiTrendingUp,
                                title: "TRACKING",
                                color: "text-blue-600",
                                bg: "bg-blue-50",
                                features: ["GTM Container Ops", "GA4 Debugging", "Server-Side", "Signal Loss Fix"]
                            },
                            {
                                icon: HiDatabase,
                                title: "ENGINEERING",
                                color: "text-purple-600",
                                bg: "bg-purple-50",
                                features: ["BigQuery ETL", "Pipeline Updates", "SQL Tuning", "API Management"]
                            },
                            {
                                icon: HiChartBar,
                                title: "ANALYTICS",
                                color: "text-green-600",
                                bg: "bg-green-50",
                                features: ["Attribution", "LTV Modeling", "ML Insights", "Exec Dashboards"]
                            },
                            {
                                icon: HiUserGroup,
                                title: "STRATEGY",
                                color: "text-orange-600",
                                bg: "bg-orange-50",
                                features: ["Bi-Weekly Syncs", "Tech Roadmapping", "Agency Support", "15-Min Response"]
                            }
                        ].map((cap, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-lg transition-all group">
                                <div className={`w-12 h-12 rounded-xl ${cap.bg} ${cap.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <cap.icon className="w-6 h-6" />
                                </div>
                                <h4 className="font-black text-sm text-navy-900 mb-4 tracking-widest">{cap.title}</h4>
                                <ul className="space-y-2">
                                    {cap.features.map((f, idx) => (
                                        <li key={idx} className="text-[10px] font-black text-gray-400 flex items-center gap-2 uppercase tracking-tighter">
                                            <div className={`w-1 h-1 rounded-full ${cap.color.replace('text-', 'bg-')}`} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CapabilitiesSection;
