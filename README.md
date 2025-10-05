# Modern E-commerce Product Gallery

A sleek, modern e-commerce product gallery built with React, Tailwind CSS, and Framer Motion. Features a dark theme with neon-blue accents and smooth animations.

## Features

- **Dark Theme**: Modern dark background with neon-blue accents
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for hover effects and transitions
- **Search Functionality**: Filter products by name
- **Category Filtering**: Filter products by category with visual feedback
- **Product Cards**: Beautiful product cards with hover effects, BEST badges, and verified icons
- **Clean Navigation**: Professional navigation bar with action buttons

## Tech Stack

- **React** - UI library
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **Responsive Design** - Mobile-first approach

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Top navigation bar
│   ├── ProductCard.js     # Individual product card component
│   ├── CategoryFilter.js  # Category filter buttons
│   ├── SearchBar.js       # Search input and filter button
│   └── ProductGrid.js     # Grid layout for products
├── data/
│   └── products.js        # Mock product data
├── App.js                 # Main application component
├── index.js              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## Features Overview

### Navigation Bar
- Centered logo with stylized 'V'
- Navigation links: Home, Tutorials, Tools, Products, Promotions
- Action buttons: "Zarejestruj się" and "Discord"

### Product Gallery
- Responsive grid layout (1-5 columns based on screen size)
- Product cards with images, names, prices, and verified icons
- BEST badges for featured products
- Hover effects with scale and glow animations

### Filtering & Search
- Real-time search by product name
- Category filtering with visual active state
- Filter button for future advanced filtering options

### Animations
- Smooth page load animations
- Hover effects on all interactive elements
- Staggered animations for product grid
- Scale and glow effects on product cards

## Customization

The design uses a custom color palette defined in `tailwind.config.js`:
- `dark-bg`: Main background color (#0a0a0a)
- `dark-card`: Card background color (#1a1a1a)
- `neon-blue`: Accent color (#00FFFF)

You can easily modify these colors or add new ones by updating the Tailwind configuration.

## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
