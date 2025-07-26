import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiMail, HiDownload, HiArrowRight } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Get order details from URL parameters (Stripe adds these)
    const params = new URLSearchParams(location.search);
    const sessionId = params.get('session_id');
    const success = params.get('success');
    
    if (success === 'true') {
      setOrderDetails({
        package: 'Starter Package',
        price: '$497',
        sessionId: sessionId
      });
    } else if (!success) {
      // If no success parameter, check if coming from Stripe
      setOrderDetails({
        package: 'Starter Package',
        price: '$497',
        sessionId: 'direct-access'
      });
    }
  }, [location]);

  const nextSteps = [
    {
      icon: HiMail,
      title: "Check Your Email",
      description: "You'll receive your order confirmation and access details within 5 minutes"
    },
    {
      icon: HiDownload,
      title: "Access Your Files",
      description: "Download link will be in your confirmation email with all pipeline code"
    },
    {
      icon: HiCheckCircle,
      title: "Get Started",
      description: "Follow the setup documentation included in your package"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          {/* Success Icon */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 rounded-full mb-4"
            >
              <HiCheckCircle className="w-12 h-12 text-green-500" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              Thank You for Your Purchase!
            </h1>
            
            <p className="text-xl text-gray-400">
              Your order has been confirmed and is being processed
            </p>
          </div>

          {/* Order Details */}
          {orderDetails && (
            <div className="bg-gray-800 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Order Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Package:</span>
                  <span className="text-white font-medium">{orderDetails.package}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Amount:</span>
                  <span className="text-white font-medium">{orderDetails.price} USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400 font-medium">Confirmed</span>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">What Happens Next?</h2>
            <div className="space-y-4">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 bg-gray-800/50 rounded-lg p-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Need Help?</h3>
            <p className="text-gray-300 mb-4">
              Our support team is here to help you get started
            </p>
            <a
              href="mailto:support@tagspecialist.ca"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
            >
              support@tagspecialist.ca
              <HiArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Return Home Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
            >
              Return to Homepage
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation;