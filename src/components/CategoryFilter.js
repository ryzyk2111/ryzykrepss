import React from 'react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
            ${activeCategory === category
              ? 'bg-neon-blue text-dark-bg shadow-lg shadow-neon-blue/30'
              : 'border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg'
            }
          `}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
