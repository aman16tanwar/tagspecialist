import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const StripeCheckoutModal = ({ isOpen, onClose, buyButtonId, publishableKey, productName }) => {
  useEffect(() => {
    if (isOpen) {
      // Load Stripe Buy Button script
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/buy-button.js';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        // Clean up script when modal closes
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">
                  Complete Your Purchase
                </h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-gray-300 mb-6">
                {productName || 'Starter Package - Shopify Data Pipeline'}
              </p>

              {/* Stripe Buy Button Container */}
              <div className="flex justify-center py-4" dangerouslySetInnerHTML={{
                __html: `<stripe-buy-button
                  buy-button-id="${buyButtonId}"
                  publishable-key="${publishableKey}">
                </stripe-buy-button>`
              }} />
              
              <p className="text-sm text-gray-400 text-center mt-4">
                Secure payment powered by Stripe
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StripeCheckoutModal;