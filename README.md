# New Zealand Honey Co. - Responsive E-commerce Product Page

A responsive ReactJS implementation of New Zealand Honey Co.'s product page design, featuring Manuka Honey UMF 24+ product showcase with desktop and mobile optimizations.

## 🎯 Project Overview

This project implements a pixel-perfect, responsive product page based on the provided Figma design. The application showcases a premium Manuka honey product with an intuitive shopping experience across all devices.

## ✨ Features

- **Responsive Design**: Seamlessly adapts from desktop (>1024px) to mobile (<768px)
- **Product Showcase**: Interactive product gallery with image carousel
- **Product Details**: Comprehensive product information including UMF ratings and benefits
- **Shopping Cart Integration**: Add to cart functionality with quantity selection
- **Subscription Options**: Subscribe & Save feature with discount pricing
- **Cross-selling**: Beauty Bundle and related product recommendations
- **Delivery Information**: Dynamic delivery estimates and shipping options
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: ReactJS
- **Styling**: CSS3 with Flexbox & Grid
- **Design System**: Mobile-first responsive approach
- **Icons**: Custom SVG icons matching design system

## 📱 Responsive Breakpoints

- **Desktop**: `>1024px` - Full multi-column layout
- **Tablet**: `768px - 1024px` - Adapted layout with optimized spacing
- **Mobile**: `<768px` - Single-column layout with hamburger navigation

## 🎨 Design Implementation

### Desktop Layout Features:
- **Navigation**: Full horizontal navigation with search and cart icons
- **Product Gallery**: Large image display with thumbnail navigation
- **Product Info**: Detailed sidebar with ratings, pricing, and options
- **Cross-sell Section**: Horizontal product recommendations

### Mobile Layout Features:
- **Navigation**: Collapsible hamburger menu
- **Product Gallery**: Full-width image carousel
- **Product Info**: Stacked vertical layout
- **Optimized CTAs**: Full-width buttons for better touch interaction

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   bash git clone <repository-url> cd nz-honey-co-product-page


2. **Install dependencies**
   

bash npm install
or
yarn install


3. **Start development server**
   bash npm start

or
yarn start

4. **Open browser**
   Navigate to `http://localhost:3000` to view the application

## 📁 Project Structure

src/ ├── components/ │ ├── Header/ │ │ ├── Header.js │ │ └── Header.css │ ├── ProductGallery/ │ │ ├── ProductGallery.js │ │ └── ProductGallery.css │ ├── ProductInfo/ │ │ ├── ProductInfo.js │ │ └── ProductInfo.css │ ├── ProductRecommendations/ │ │ ├── ProductRecommendations.js │ │ └── ProductRecommendations.css │ └── Footer/ │ ├── Footer.js │ └── Footer.css ├── assets/ │ ├── images/ │ └── icons/ ├── styles/ │ ├── globals.css │ ├── variables.css │ └── responsive.css ├── App.js └── index.js

## 🎯 Key Components

### Header Component
- Responsive navigation with brand logo
- Search functionality and cart icon
- Mobile hamburger menu implementation

### ProductGallery Component
- Interactive image carousel
- Thumbnail navigation
- Touch/swipe support for mobile

### ProductInfo Component
- Product title, ratings, and pricing
- UMF information and benefits
- Quantity selector and add to cart
- Subscribe & Save options

### ProductRecommendations Component
- Beauty Bundle cross-sell
- Related product suggestions
- Responsive grid layout

## 📐 Design Specifications

### Typography
- **Primary Font**: System font stack for optimal performance
- **Font Sizes**: Responsive scaling (14px mobile, 16px desktop base)
- **Line Heights**: 1.4-1.6 for optimal readability

### Color Palette
- **Primary Orange**: `#FF6B35` (CTAs and highlights)
- **Manuka Green**: `#2D5D31` (accent color)
- **Neutral Grays**: `#F5F5F5`, `#E0E0E0`, `#666666`
- **Text Colors**: `#333333` (primary), `#666666` (secondary)

### Spacing System
- **Base Unit**: 8px
- **Component Spacing**: 16px, 24px, 32px
- **Section Spacing**: 48px (desktop), 32px (mobile)

## 🔧 Responsive Implementation

### CSS Grid & Flexbox Usage
css /* Desktop Layout */ .product-container { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }

/* Mobile Layout */ @media (max-width: 768px) { .product-container { grid-template-columns: 1fr; gap: 24px; } }

### Mobile-First Approach
- Base styles written for mobile devices
- Progressive enhancement for larger screens
- Touch-optimized interactions and button sizes

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Management**: Visible focus indicators

## 🧪 Testing & Quality Assurance

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Device Testing
- Desktop: 1920x1080, 1366x768
- Tablet: iPad, Android tablets
- Mobile: iPhone, Android phones

### Performance Optimization
- Optimized images with appropriate formats
- Lazy loading for non-critical images
- Minimal CSS and JS bundle sizes

## 📋 Development Checklist

- [x] Figma design analysis and component breakdown
- [x] Responsive breakpoint planning
- [x] Component architecture setup
- [x] Desktop layout implementation
- [x] Mobile layout implementation
- [x] Interactive features (carousel, cart)
- [x] Cross-browser testing
- [x] Accessibility audit
- [x] Performance optimization

## 🔗 Design Reference

**Figma Design**: [NZHC-UMF-MGO Design File](https://www.figma.com/design/KuTJztBgGAGZCKGbotH2nU/NZHC-UMF-MGO?node-id=1-2&t=rGX2823gt6Uba7uJ-0)

## 🚀 Deployment

The application is ready for deployment to platforms like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 📝 Future Enhancements

- Shopping cart persistence
- Product reviews integration
- Advanced filtering options
- Wishlist functionality
- Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is created for educational/assessment purposes based on the provided design specifications.

---

**Note**: This implementation focuses on responsive design excellence and pixel-perfect accuracy to the provided Figma designs while maintaining optimal performance and accessibility standards.
