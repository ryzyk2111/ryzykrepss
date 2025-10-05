import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductModal from './ProductModal';

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
      }}
      transition={{ duration: 0.3 }}
      className="bg-dark-card rounded-lg p-4 cursor-pointer border border-gray-800 hover:border-neon-blue transition-all duration-300"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        
        {product.isBest && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-dark-bg px-2 py-1 rounded-full text-xs font-bold flex items-center">
            ⭐ BEST
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-medium text-lg">{product.name}</h3>
        {product.verified && (
          <div className="w-5 h-5 bg-neon-blue rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-dark-bg" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      <p className="text-neon-blue font-bold text-xl mb-4">{product.price}</p>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowModal(true)}
        className="w-full bg-neon-blue text-dark-bg py-2 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
      >
        • Zobacz produkt
      </motion.button>

      {/* Product Modal */}
      <ProductModal 
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        product={product}
      />
    </motion.div>
  );
};

export default ProductCard;
