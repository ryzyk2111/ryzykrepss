import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CombinedNotification = ({ isVisible, onClose, t }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          />
          
          {/* Notification Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-dark-card border border-gray-700 rounded-lg p-8 max-w-2xl w-full relative shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-neon-blue transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Title */}
              <h2 className="text-neon-blue text-2xl font-bold mb-6 pr-8 text-center">
                {t.exclusiveOffers}
              </h2>

              {/* Main Offer Text */}
              <p className="text-white text-lg mb-6 text-center">
                {t.signUpOffer}
              </p>

              {/* Limited Offer Tag */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-5 h-5 bg-yellow-400 rounded-sm mr-3 flex items-center justify-center">
                  <span className="text-dark-bg text-sm font-bold">!</span>
                </div>
                <span className="text-white font-bold text-lg">
                  {t.limitedOffer}
                </span>
              </div>

              {/* Discount Highlight */}
              <div className="text-neon-blue text-4xl font-bold mb-8 text-center">
                {t.discount15Off}
              </div>

              {/* Two Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* CNFans Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://cnfans.com/register?ref=115813', '_blank')}
                  className="bg-neon-blue text-dark-bg py-4 rounded-lg font-bold text-lg flex items-center justify-center hover:bg-cyan-400 transition-colors"
                >
                  {t.registerCNFans}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>

                {/* KakoBuy Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://ikako.vip/r/ryzykreps', '_blank')}
                  className="border-2 border-neon-blue text-neon-blue py-4 rounded-lg font-bold text-lg flex items-center justify-center hover:bg-neon-blue hover:text-dark-bg transition-colors"
                >
                  {t.registerKakoBuy}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CombinedNotification;
