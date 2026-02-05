import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import CombinedNotification from './components/CombinedNotification';
import SnowAnimation from './components/SnowAnimation';
import { products, categories } from './data/products';
import { translations } from './data/translations';

function App() {
  const [language, setLanguage] = useState('PL');
  const t = translations[language];
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [sortBy, setSortBy] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  // Show notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory, sortBy]);

  // Filter and sort products based on search term, category, and price
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Wszystkie' || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort by price if sortBy is selected
    if (sortBy === 'cheapest' || sortBy === 'expensive') {
      filtered = filtered.sort((a, b) => {
        const parsePrice = (priceStr) => {
             if (!priceStr) return 0;
             // Replace comma with dot, then remove non-numeric/dot characters
             const cleaned = priceStr.toString().replace(',', '.').replace(/[^0-9.]/g, '');
             return parseFloat(cleaned) || 0;
        };
        const priceA = parsePrice(a.price);
        const priceB = parsePrice(b.price);
        return sortBy === 'cheapest' ? priceA - priceB : priceB - priceA;
      });
    }

    return filtered;
  }, [searchTerm, activeCategory, sortBy]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      
      <Navbar 
        totalItems={filteredProducts.length} 
        language={language} 
        setLanguage={setLanguage} 
        t={t} 
      />
      
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
            t={t}
          />
          
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            t={t}
          />
          
          <div className="mt-8">
            <ProductGrid products={currentItems} t={t} />
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                <button 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 hover:bg-gray-600 transition-colors"
                >
                  {t.previous}
                </button>
                <span className="px-4 py-2 text-white flex items-center">
                  {t.page} {currentPage} {t.of} {totalPages}
                </span>
                <button 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 hover:bg-gray-600 transition-colors"
                >
                  {t.next}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </main>

      {/* Combined Notification Modal */}
      <CombinedNotification 
        isVisible={showNotification}
        onClose={handleCloseNotification}
        t={t}
      />
    </div>
  );
}

export default App;
