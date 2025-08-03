import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, ArrowRight, Info, Check } from 'lucide-react';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    monthlyOrders: 10000,
    averageOrderValue: 75,
    numberOfStores: 1,
    currentTool: 'fivetran',
    dataVolume: 'medium'
  });

  const [results, setResults] = useState({
    currentCost: 0,
    tagSpecialistCost: 497,
    monthlySavings: 0,
    annualSavings: 0,
    fiveYearSavings: 0,
    roiPercentage: 0,
    paybackPeriod: 0
  });

  const competitorPricing = {
    fivetran: {
      base: 500, // Estimated starting price
      perStore: 250,
      volumeMultiplier: { low: 1, medium: 2, high: 4 }
    },
    stitch: {
      base: 100, // Known starting price
      perStore: 100,
      volumeMultiplier: { low: 1, medium: 3, high: 8 }
    },
    airbyte: {
      base: 300, // Estimated
      perStore: 150,
      volumeMultiplier: { low: 1, medium: 1.5, high: 2.5 }
    },
    manual: {
      base: 1000, // Developer time estimate
      perStore: 300,
      volumeMultiplier: { low: 1, medium: 1, high: 1 }
    }
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]); // eslint-disable-line react-hooks/exhaustive-deps

  const calculateROI = () => {
    const pricing = competitorPricing[inputs.currentTool];
    const volumeMultiplier = pricing.volumeMultiplier[inputs.dataVolume];
    
    // Calculate current monthly cost
    const baseCost = pricing.base;
    const storesCost = (inputs.numberOfStores - 1) * pricing.perStore;
    const monthlyCurrentCost = (baseCost + storesCost) * volumeMultiplier;
    
    // Tag Specialist is one-time cost
    const tagSpecialistMonthly = 0; // No monthly cost after initial purchase
    
    const monthlySavings = monthlyCurrentCost - tagSpecialistMonthly;
    const annualSavings = monthlySavings * 12;
    const fiveYearSavings = annualSavings * 5;
    
    // ROI calculation
    const roiPercentage = ((annualSavings - 497) / 497) * 100;
    const paybackPeriod = 497 / monthlySavings; // in months
    
    setResults({
      currentCost: monthlyCurrentCost,
      tagSpecialistCost: 497,
      monthlySavings,
      annualSavings,
      fiveYearSavings,
      roiPercentage,
      paybackPeriod
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getVolumeLabel = () => {
    const orders = inputs.monthlyOrders;
    if (orders < 5000) return 'low';
    if (orders < 50000) return 'medium';
    return 'high';
  };

  useEffect(() => {
    setInputs(prev => ({
      ...prev,
      dataVolume: getVolumeLabel()
    }));
  }, [inputs.monthlyOrders]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <Calculator className="w-5 h-5 mr-2" />
              <span className="font-semibold">Interactive ROI Calculator</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Calculate Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Cost Comparison</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare estimated costs between monthly subscription tools and Tag Specialist's one-time purchase
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Your Current Setup</h2>
              
              <div className="space-y-6">
                {/* Monthly Orders */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Orders
                    <span className="ml-2 text-gray-400 text-xs">(affects data volume pricing)</span>
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={inputs.monthlyOrders}
                    onChange={(e) => handleInputChange('monthlyOrders', parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>1K</span>
                    <span className="font-semibold text-blue-600">{inputs.monthlyOrders.toLocaleString()}</span>
                    <span>100K</span>
                  </div>
                </div>

                {/* Number of Stores */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Shopify Stores
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 5, 10].map(num => (
                      <button
                        key={num}
                        onClick={() => handleInputChange('numberOfStores', num)}
                        className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                          inputs.numberOfStores === num
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Current Tool */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Solution
                  </label>
                  <select
                    value={inputs.currentTool}
                    onChange={(e) => handleInputChange('currentTool', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="fivetran">Fivetran (Estimated)</option>
                    <option value="stitch">Stitch Data (From $100/month)</option>
                    <option value="airbyte">Airbyte Cloud (Estimated)</option>
                    <option value="manual">Manual Development (Time Cost)</option>
                  </select>
                </div>

                {/* Data Volume Indicator */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-blue-900">
                        Data Volume: <span className="uppercase">{inputs.dataVolume}</span>
                      </p>
                      <p className="text-xs text-blue-700 mt-1">
                        Estimated tier based on {inputs.monthlyOrders.toLocaleString()} monthly orders (actual pricing varies)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {/* Main Savings Card */}
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Estimated Cost Comparison</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/80">Estimated Monthly Cost</span>
                    <span className="text-2xl font-bold">~{formatCurrency(results.currentCost)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/80">Tag Specialist (One-Time)</span>
                    <span className="text-2xl font-bold">{formatCurrency(results.tagSpecialistCost)}</span>
                  </div>
                  
                  <div className="pt-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg">Monthly Savings</span>
                      <span className="text-3xl font-bold">{formatCurrency(results.monthlySavings)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg">Annual Savings</span>
                      <span className="text-3xl font-bold">{formatCurrency(results.annualSavings)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg">5-Year Savings</span>
                      <span className="text-4xl font-bold">{formatCurrency(results.fiveYearSavings)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Metrics */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold mb-4">ROI Metrics</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">ROI Percentage</p>
                    <p className="text-3xl font-bold text-green-600">
                      {results.roiPercentage.toFixed(0)}%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Estimated return</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Payback Period</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {results.paybackPeriod.toFixed(1)} 
                      <span className="text-lg ml-1">months</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Break-even time</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <p className="ml-2 text-sm text-green-800">
                      Estimated payback period: {Math.ceil(results.paybackPeriod)} months (based on calculator inputs)
                    </p>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold mb-4">What You Get for $497</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="ml-3 text-gray-700">Complete Python source code</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="ml-3 text-gray-700">Sync unlimited Shopify stores</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="ml-3 text-gray-700">No monthly fees or row limits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="ml-3 text-gray-700">Step-by-step setup documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="ml-3 text-gray-700">30-day money-back guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Compare Costs: Monthly Subscription vs One-Time Purchase
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Estimated difference based on calculator inputs (actual savings may vary)
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/starter-package"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started for $497
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://calendly.com/aman16tanwar/30min"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors"
              >
                Schedule Free Consultation
              </a>
            </div>
            
            <p className="text-sm text-white/70 mt-6">
              30-day money-back guarantee • No recurring fees • Own the code forever
            </p>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Shopify to BigQuery ROI Calculator",
          "description": "Calculate your savings when switching from Fivetran, Stitch, or other ELT tools to Tag Specialist",
          "url": "https://tagspecialist.ca/roi-calculator",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "497",
            "priceCurrency": "USD"
          }
        })}
      </script>
    </div>
  );
};

export default ROICalculator;