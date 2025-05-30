# Makonis Website

This is a modern, responsive implementation of the Makonis Software website built with React and Vite.

## Features

- Modern, responsive design
- Interactive industry tabs with auto-switching functionality
- Media solutions section with service cards
- Auto-carousel gallery showing multiple images per slide
- Continuously scrolling client logos
- Quick Testing section with detailed information
- Animated UI elements for better user experience
- Mobile-friendly layout
- Placeholder images (to be replaced with actual images)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Development Server

To start the development server:

```bash
npm run dev
```

This will start the Vite development server, typically at http://localhost:5173/

### Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/` - Source code
  - `components/` - React components
  - `App.jsx` - Main application component
  - `main.jsx` - Entry point
  - `index.css` - Global styles
  - `App.css` - App-specific styles
- `public/` - Static assets

## Customization

### Adding Your Own Images

To add your own images, simply replace the placeholder URLs in the component files with the paths to your images.

### Changing Colors

The main colors can be modified in the CSS files:

- Primary color: #0056b3
- Secondary color: #00a0e9
- Background gradient: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)
- Button gradient: linear-gradient(90deg, #0056b3, #00a0e9)

## Browser Compatibility

This implementation is compatible with:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Mobile Responsiveness

The design is fully responsive and works well on:
- Desktop
- Tablets
- Mobile phones
