import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiX } from 'react-icons/hi';

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm overflow-y-auto h-full w-full flex justify-center items-center z-[60]"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-white border border-gray-200 rounded-lg shadow-2xl w-full max-w-md mx-4 p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-navy-900 transition-colors"
            >
              <HiX size={20} />
            </button>

            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-50 mb-6">
              <HiCheckCircle className="h-10 w-10 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-navy-900 mb-2">Message Sent!</h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thank you for reaching out. I've received your details and will get back to you within 24 hours to discuss your data strategy.
            </p>

            <button
              onClick={onClose}
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-sm shadow-lg transition-all transform hover:scale-[1.02] uppercase text-sm tracking-wide"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
