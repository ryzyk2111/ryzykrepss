import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ isVisible, onClose, product }) => {
  if (!product) return null;

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
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-dark-card border border-gray-700 rounded-lg p-6 max-w-md w-full relative shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-neon-blue transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Product Info */}
              <div className="text-center mb-6">
                <h2 className="text-white text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-neon-blue font-bold text-2xl">{product.price}</p>
                {product.isBest && (
                  <div className="inline-block bg-yellow-400 text-dark-bg px-2 py-1 rounded-full text-xs font-bold mt-2">
                    ⭐ BEST
                  </div>
                )}
              </div>

              {/* Two Buttons */}
              <div className="space-y-3">
                {/* CNFans Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(product.productUrlCN, '_blank')}
                  className="w-full bg-neon-blue text-dark-bg py-3 rounded-lg font-bold text-lg flex items-center justify-center hover:bg-cyan-400 transition-colors"
                >
                  Kup w CNFans
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>

                {/* KakoBuy Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(product.productUrlKako, '_blank')}
                  className="w-full border-2 border-neon-blue text-neon-blue py-3 rounded-lg font-bold text-lg flex items-center justify-center hover:bg-neon-blue hover:text-dark-bg transition-colors"
                >
                  Kup w KakoBuy
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

export default ProductModal;
