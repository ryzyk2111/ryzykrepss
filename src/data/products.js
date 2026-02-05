import allProducts from './all_products.json';

// Get unique categories from the imported products
const uniqueCategories = [...new Set(allProducts.map(p => p.category))].filter(Boolean).sort();

export const categories = [
  'Wszystkie',
  ...uniqueCategories
];

export const products = allProducts;
