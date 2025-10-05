import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ totalItems }) => {
  return (
    <nav className="bg-dark-bg border-b border-gray-800 px-4 py-4 relative z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Logo and Items Counter */}
        <div className="flex items-center space-x-4">
          <h1 className="text-white text-2xl font-bold tracking-wide">
            RyzykReps SpreadSheet
          </h1>
          <div className="bg-neon-blue text-dark-bg px-3 py-1 rounded-full text-sm font-bold">
            {totalItems} items
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
