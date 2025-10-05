import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import CombinedNotification from './components/CombinedNotification';
import SnowAnimation from './components/SnowAnimation';
import { products, categories } from './data/products';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [sortBy, setSortBy] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  // Show notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Filter and sort products based on search term, category, and price
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Wszystkie' || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort by price if sortBy is selected
    if (sortBy === 'cheapest') {
      filtered = filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(' PLN', '').replace(',', '.'));
        const priceB = parseFloat(b.price.replace(' PLN', '').replace(',', '.'));
        return priceA - priceB;
      });
    } else if (sortBy === 'expensive') {
      filtered = filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(' PLN', '').replace(',', '.'));
        const priceB = parseFloat(b.price.replace(' PLN', '').replace(',', '.'));
        return priceB - priceA;
      });
    }

    return filtered;
  }, [searchTerm, activeCategory, sortBy]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
  };


  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="min-h-screen bg-dark-bg relative">
      {/* Snow Animation Background */}
      <SnowAnimation />
      
      <Navbar totalItems={filteredProducts.length} />
      
      <main className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            sortBy={sortBy}
            onSortChange={handleSortChange}
          />
          
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
          
          <div className="mt-8">
            <ProductGrid products={filteredProducts} />
          </div>
        </motion.div>
      </main>

      {/* Combined Notification Modal */}
      <CombinedNotification 
        isVisible={showNotification}
        onClose={handleCloseNotification}
      />
    </div>
  );
}

export default App;
