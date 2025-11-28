# ☕ Cafe Project - Structure Notes

## 📁 Project Overview
A React-based cafe website with routing, built using Vite, Tailwind CSS, and DaisyUI.

---

## 🎯 PROJECT STRUCTURE ADVICE

### 📂 Recommended Folder Organization

For a well-organized cafe project, here's the ideal structure:

```
cafe/
├── public/
│   └── images/                    # Public images (cafe photos, menu items)
│       ├── hero-bg.jpg
│       ├── coffee/
│       └── food/
├── src/
│   ├── assets/                    # Static assets imported in components
│   │   ├── images/
│   │   └── icons/
│   ├── components/                # Reusable components
│   │   ├── layout/               # Layout components
│   │   │   ├── Nav.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx       # Wrapper component
│   │   ├── home/                 # Home page specific components
│   │   │   ├── Hero.jsx
│   │   │   ├── FeaturedItems.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── menu/                 # Menu page specific components
│   │   │   ├── MenuItem.jsx
│   │   │   ├── MenuCategory.jsx
│   │   │   └── MenuFilter.jsx
│   │   └── shared/               # Shared UI components
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── Modal.jsx
│   ├── pages/                    # Page components (route targets)
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/                     # Static data & constants
│   │   ├── menuData.js          # Menu items array
│   │   ├── testimonials.js      # Customer reviews
│   │   └── teamData.js          # Team members
│   ├── hooks/                    # Custom React hooks (future)
│   │   └── useMenuFilter.js
│   ├── utils/                    # Utility functions (future)
│   │   └── formatPrice.js
│   ├── styles/                   # Custom styles (if needed)
│   │   └── custom.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                          # Environment variables
├── package.json
└── vite.config.js
```

---

### 🏗️ Architecture Advice

#### 1. **Component Organization Strategy**

**❌ CURRENT (Flat structure):**
```
components/
├── Nav.jsx
├── Footer.jsx
├── Hero.jsx
└── MenuItem.jsx
```

**✅ RECOMMENDED (Organized by feature):**
```
components/
├── layout/          # Components used in layout
├── home/            # Homepage specific
├── menu/            # Menu page specific
└── shared/          # Used across multiple pages
```

**Why?** 
- Easier to find components
- Scales better as project grows
- Clear separation of concerns
- Team collaboration friendly

---

#### 2. **Data Management Strategy**

**Create a data folder for static content:**

**`src/data/menuData.js`**
```javascript
export const menuCategories = ['Coffee', 'Tea', 'Pastries', 'Sandwiches'];

export const menuItems = [
  {
    id: 1,
    name: 'Espresso',
    category: 'Coffee',
    price: 3.50,
    description: 'Rich and bold espresso shot',
    image: '/images/coffee/espresso.jpg',
    popular: true
  },
  {
    id: 2,
    name: 'Cappuccino',
    category: 'Coffee',
    price: 4.50,
    description: 'Espresso with steamed milk foam',
    image: '/images/coffee/cappuccino.jpg',
    popular: true
  },
  // ... more items
];
```

**Benefits:**
- ✅ Easy to update menu without touching code
- ✅ Centralized data management
- ✅ Can easily migrate to API later
- ✅ Reusable across components

---

#### 3. **Component Composition Pattern**

**Create a Layout component for consistent structure:**

**`src/components/layout/Layout.jsx`**
```javascript
import Nav from './Nav';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
```

**Then update App.jsx:**
```javascript
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
```

**Benefits:**
- ✅ Nav and Footer automatically on every page
- ✅ Cleaner App.jsx
- ✅ Easy to add global elements
- ✅ Consistent layout structure

---

#### 4. **Page Structure Advice**

Each page should follow this pattern:

```javascript
// Import components
import Hero from '../components/home/Hero';
import FeaturedItems from '../components/home/FeaturedItems';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Items */}
      <FeaturedItems />
      
      {/* Other sections */}
    </div>
  );
}

export default Home;
```

**Pages should:**
- ✅ Be composition containers (combine smaller components)
- ✅ Handle page-level state
- ✅ Import and arrange components
- ❌ NOT contain complex logic (move to components/hooks)
- ❌ NOT have too much JSX (break into components)

---

#### 5. **Naming Conventions**

**Files & Folders:**
- `PascalCase` for components: `MenuItem.jsx`, `Hero.jsx`
- `camelCase` for utilities/data: `menuData.js`, `formatPrice.js`
- `lowercase` for folders: `components/`, `pages/`, `data/`

**Components:**
```javascript
// ✅ Good
function MenuItem({ name, price }) { }
export default MenuItem;

// ❌ Bad
function menu_item({ name, price }) { }
export default menu_item;
```

**Props:**
```javascript
// ✅ Good (descriptive, camelCase)
<MenuItem name="Espresso" price={3.50} isPopular={true} />

// ❌ Bad (unclear, inconsistent)
<MenuItem n="Espresso" p={3.50} popular={true} />
```

---

#### 6. **Scalability Tips**

**Start Simple, Grow Gradually:**

**Phase 1 (Now):**
- Basic folder structure
- Static components
- Hardcoded data

**Phase 2 (Soon):**
- Move data to `data/` folder
- Create Layout component
- Add reusable UI components

**Phase 3 (Later):**
- Add custom hooks
- Implement state management (Context/Zustand)
- Connect to backend API
- Add animations & transitions

**Phase 4 (Future):**
- Shopping cart functionality
- User authentication
- Online ordering system
- Admin dashboard

---

#### 7. **File Size Guidelines**

**Keep components focused and small:**
- ✅ **Small components:** 50-100 lines
- ⚠️ **Medium components:** 100-200 lines
- ❌ **Large components:** 200+ lines (time to split!)

**When to split a component:**
```javascript
// ❌ Too big (300+ lines)
function Menu() {
  // Filters logic
  // Categories rendering
  // Items rendering
  // Sort logic
  // Search logic
}

// ✅ Split into smaller components
function Menu() {
  return (
    <div>
      <MenuFilter />
      <MenuSearch />
      <MenuCategories />
      <MenuGrid />
    </div>
  );
}
```

---

#### 8. **Import Organization**

**Organize imports in this order:**

```javascript
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party libraries
import { Link } from 'react-router-dom';
import { FaCoffee, FaHeart } from 'react-icons/fa';

// 3. Components
import MenuItem from '../components/menu/MenuItem';
import MenuFilter from '../components/menu/MenuFilter';

// 4. Data & utilities
import { menuItems } from '../data/menuData';

// 5. Styles (if any)
import './Menu.css';
```

---

#### 9. **State Management Advice**

**For a cafe website:**

**Local State (useState):**
- ✅ Form inputs
- ✅ Menu filters
- ✅ Modal open/close
- ✅ Active tab/category

**Example:**
```javascript
function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter menu items
  const filteredItems = menuItems.filter(item => 
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (/* ... */);
}
```

**Context/Global State (if needed later):**
- Shopping cart
- User preferences
- Theme (dark/light mode)

---

#### 10. **Performance Best Practices**

**Image Optimization:**
```javascript
// ✅ Use appropriate sizes
<img 
  src="/images/coffee/espresso.jpg" 
  alt="Espresso"
  loading="lazy"  // Lazy load images
  width="300"     // Specify dimensions
  height="200"
/>
```

**Component Optimization:**
```javascript
// Only recreate filtered items when dependencies change
import { useMemo } from 'react';

const filteredItems = useMemo(() => {
  return menuItems.filter(/* ... */);
}, [selectedCategory, searchTerm]);
```

---

### 📋 Quick Checklist for Good Structure

- [ ] Components organized by feature/purpose
- [ ] Data separated from components
- [ ] Layout component for consistent structure
- [ ] Reusable components in shared folder
- [ ] Clear naming conventions
- [ ] Small, focused components
- [ ] Proper import organization
- [ ] Images optimized and lazy loaded
- [ ] Responsive design with Tailwind
- [ ] DaisyUI components used consistently

---

## 🗂️ Folder Structure

```
cafe/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/              # Static assets (images, icons)
│   │   └── react.svg
│   ├── components/          # Reusable UI components
│   │   ├── Nav.jsx         # Navigation bar (appears on all pages)
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Hero.jsx        # Hero section (large banner for homepage)
│   │   └── MenuItem.jsx    # Menu item card component
│   ├── pages/              # Page components (route targets)
│   │   ├── Home.jsx        # Homepage (path: "/")
│   │   ├── Menu.jsx        # Menu page (path: "/menu")
│   │   ├── About.jsx       # About page (path: "/about")
│   │   └── Contact.jsx     # Contact page (path: "/contact")
│   ├── App.jsx             # Main app component with routes
│   ├── main.jsx            # Entry point with BrowserRouter
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── index.html              # HTML entry point
```

---

## 🔧 Tech Stack

### Core Technologies
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool & dev server
- **React Router DOM 7.9.6** - Client-side routing

### Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **DaisyUI 5.5.5** - Tailwind CSS component library

### Icons
- **React Icons** - Icon library (recently installed)

---

## 🛣️ Routing Setup

### Location: `main.jsx`
```jsx
// BrowserRouter wraps the entire app
<BrowserRouter>
  <App />
</BrowserRouter>
```

### Location: `App.jsx`
```jsx
// Routes defined here
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

**Important:** BrowserRouter is in `main.jsx`, so DON'T add it again in `App.jsx`

---

## 📄 File Purposes

### **Entry Points**
- **`index.html`** - HTML template, mounts React app to `<div id="root">`
- **`main.jsx`** - JavaScript entry point, renders App with BrowserRouter
- **`App.jsx`** - Main component, contains Nav and Routes

### **Components** (`src/components/`)
- **`Nav.jsx`** - Navigation bar
  - Should appear on ALL pages
  - Use `<Link>` from react-router-dom (not `<a>` tags)
  - Contains links to: Home, Menu, About, Contact
  
- **`Footer.jsx`** - Footer section
  - Can include: contact info, social links, copyright
  - Should appear on ALL pages (add to App.jsx)
  
- **`Hero.jsx`** - Hero/Banner section
  - Used on Homepage
  - Large visual section with headline, tagline, CTA buttons
  - First impression component
  
- **`MenuItem.jsx`** - Individual menu item card
  - Reusable component for displaying menu items
  - Props: name, price, description, image, category
  - Used in Menu.jsx

### **Pages** (`src/pages/`)
- **`Home.jsx`** - Homepage (/)
  - Should include: Hero component, featured items, highlights
  
- **`Menu.jsx`** - Menu page (/menu)
  - Display cafe menu: drinks, food, pastries
  - Use MenuItem components
  
- **`About.jsx`** - About page (/about)
  - Cafe story, values, team information
  
- **`Contact.jsx`** - Contact page (/contact)
  - Contact form, location, hours, map

---

## 🎨 Styling Guide

### DaisyUI Components Available
- `navbar` - Navigation bar
- `hero` - Hero sections
- `card` - Menu item cards
- `btn` - Buttons
- `footer` - Footer sections
- `input`, `textarea` - Form elements
- `badge` - Category tags

### Example Usage
```jsx
// DaisyUI class usage
<div className="navbar bg-base-100">
  <div className="card shadow-xl">
    <button className="btn btn-primary">Click Me</button>
  </div>
</div>
```

---

## 📝 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🚀 Next Steps / TODO

### Essential Setup
- [ ] Add `<Footer />` to App.jsx
- [ ] Update Nav.jsx to use `<Link>` instead of `<a>`
- [ ] Create menu data structure
- [ ] Add cafe images to assets folder

### Page Development
- [ ] Build Hero component with background image
- [ ] Create Home page with Hero and featured items
- [ ] Design Menu page with MenuItem cards
- [ ] Add content to About page
- [ ] Build Contact form in Contact page

### Enhancements
- [ ] Add active link styling in Nav
- [ ] Implement menu categories/filtering
- [ ] Add smooth scroll animations
- [ ] Make responsive for mobile
- [ ] Add loading states
- [ ] Implement dark/light theme toggle

---

## 💡 Best Practices

### Component Organization
✅ **DO:**
- Keep components small and focused
- Use props to make components reusable
- Put shared components in `components/`
- Put page-level components in `pages/`

❌ **DON'T:**
- Mix page logic with reusable components
- Hardcode data (use props or data files)
- Use `<a>` tags for internal links (use `<Link>`)

### Routing
✅ **DO:**
- Use `<Link to="/path">` for internal navigation
- Keep routes in one place (App.jsx)
- Use descriptive path names

❌ **DON'T:**
- Add multiple BrowserRouter instances
- Use window.location for navigation
- Nest routes unnecessarily for simple sites

### Styling
✅ **DO:**
- Use DaisyUI components when available
- Keep consistent spacing and colors
- Use Tailwind utility classes
- Make responsive (use `sm:`, `md:`, `lg:` prefixes)

❌ **DON'T:**
- Mix custom CSS with Tailwind unnecessarily
- Use inline styles
- Forget mobile responsiveness

---

## 📚 Resources

- **React Router Docs:** https://reactrouter.com/
- **DaisyUI Components:** https://daisyui.com/components/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Icons:** https://react-icons.github.io/react-icons/

---

## 🐛 Common Issues & Solutions

### Issue: Routes not working
- **Solution:** Make sure BrowserRouter is wrapping App in `main.jsx`

### Issue: Page not found on refresh
- **Solution:** This is expected in development. Vite handles it automatically.

### Issue: Links reload the page
- **Solution:** Use `<Link>` from react-router-dom, not `<a>` tags

### Issue: Styles not applying
- **Solution:** Check if Tailwind/DaisyUI is imported in `index.css`

---

**Last Updated:** November 26, 2025
**Version:** Initial Setup
**Status:** ✅ Ready for Development
