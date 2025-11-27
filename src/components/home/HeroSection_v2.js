import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Code2, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Analytics Solutions</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Data Into Intelligence
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert technical marketing implementation, enterprise data engineering, 
                and AI-driven analytics. From GA4 setup to cloud pipelines, 
                we build the infrastructure that powers data-driven decisions.
              </p>

              {/* Service Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                  GA4 & GTM Implementation
                </div>
                <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                  Server-Side Tracking
                </div>
                <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                  Data Pipelines
                </div>
                <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                  BigQuery & Cloud
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    const event = new CustomEvent('openContactForm');
                    window.dispatchEvent(event);
                  }}
                  className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                >
                  Explore Services
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">5+ Years</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Floating Cards */}
                <div className="absolute -top-8 -left-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-float">
                  <BarChart3 className="w-8 h-8 text-blue-600 mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Real-time Analytics</div>
                  <div className="text-xs text-gray-600">GA4 + BigQuery</div>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-float-delayed">
                  <Code2 className="w-8 h-8 text-green-600 mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Automated Pipelines</div>
                  <div className="text-xs text-gray-600">Python + Airflow</div>
                </div>

                {/* Main Visual */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                    {/* Code Preview */}
                    <div className="font-mono text-sm text-white/90 space-y-2">
                      <div><span className="text-blue-300">const</span> analytics = <span className="text-green-300">new</span> <span className="text-yellow-300">GA4Pipeline</span>({</div>
                      <div className="pl-4">  source: <span className="text-orange-300">'gtm-container'</span>,</div>
                      <div className="pl-4">  destination: <span className="text-orange-300">'bigquery'</span>,</div>
                      <div className="pl-4">  processing: <span className="text-orange-300">'real-time'</span>,</div>
                      <div className="pl-4">  ai: <span className="text-purple-300">true</span></div>
                      <div>});</div>
                      <div className="mt-4">
                        <span className="text-blue-300">await</span> analytics.<span className="text-yellow-300">transform</span>()
                      </div>
                      <div className="pl-4">  .<span className="text-yellow-300">enrich</span>()</div>
                      <div className="pl-4">  .<span className="text-yellow-300">analyze</span>()</div>
                      <div className="pl-4">  .<span className="text-yellow-300">visualize</span>();</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll" />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        @keyframes scroll {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;