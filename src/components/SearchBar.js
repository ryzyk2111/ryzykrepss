import React from 'react';
import { motion } from 'framer-motion';

const SearchBar = ({ searchTerm, onSearchChange, sortBy, onSortChange }) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 relative"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Wyszukaj po nazwie..."
          className="w-full bg-dark-card border border-neon-blue rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300"
        />
        <svg 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </motion.div>

      {/* Sort Dropdown */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative"
      >
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-dark-card border border-neon-blue rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300 appearance-none pr-8"
        >
          <option value="">Sort by price</option>
          <option value="cheapest">From cheapest</option>
          <option value="expensive">From most expensive</option>
        </select>
        <svg 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </div>
  );
};

export default SearchBar;
