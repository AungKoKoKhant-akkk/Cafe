# 🚀 Complete Rebuild Guide for Cafe Project

## 📚 **Step-by-Step Guide to Build Your Cafe Project**

---

## **🎯 PHASE 1: Foundation (Start Here)**

---

### **Task 1.1: Create Basic Page Components**

**Goal:** Build 4 simple page components with just a heading.

**Files to create/update:**

**1. `src/pages/Home.jsx`**
```jsx
// What to write:
- Import React
- Create Home function component
- Return a div with h1 "Home Page"
- Export default Home
```

**2. `src/pages/Menu.jsx`**
```jsx
// What to write:
- Import React
- Create Menu function component
- Return a div with h1 "Menu Page"
- Export default Menu
```

**3. `src/pages/About.jsx`**
```jsx
// Same pattern as above, just change name to "About Page"
```

**4. `src/pages/Contact.jsx`**
```jsx
// Same pattern as above, just change name to "Contact Page"
```

**✅ Test:** Run `npm run dev` and navigate to each route to see the pages.

---

### **Task 1.2: Create Simple Nav Component**

**Goal:** Build a basic navigation bar without scroll effects first.

**File: `src/components/Nav.jsx`**

**What to include:**
```jsx
// Steps:
1. Import React
2. Import Link from 'react-router-dom'
3. Import IoIosCafe icon from 'react-icons/io'

4. Create Nav function (accepts 'title' prop)
   
5. Return:
   - <nav> with className="navbar bg-base-100 shadow-lg"
   - Container div with flex layout
   - Left side: Icon + Title (using Link to="/")
   - Right side: Links to Home, Menu, About, Contact
   
6. Export default Nav
```

**Classes to use:**
- Nav: `navbar bg-base-100 shadow-lg px-8`
- Container: `container mx-auto flex items-center justify-between`
- Logo section: `flex items-center gap-2`
- Links container: `flex gap-4`
- Each link: `btn btn-ghost`

**✅ Test:** You should see a navbar at the top with working links.

---

## **🎯 PHASE 2: Hero Section**

---

### **Task 2.1: Create Basic Hero Component**

**Goal:** Build hero WITHOUT scroll effects or background image first.

**File: `src/components/Hero.jsx`**

**What to include:**
```jsx
// Steps:
1. Import React
2. Import Link from 'react-router-dom'
3. Import FaCoffee from 'react-icons/fa'

4. Create Hero function component

5. Return:
   - Outer div: className="hero min-h-screen bg-gradient-to-r from-amber-50 to-orange-100"
   - Inner div: className="hero-content text-center"
   - Content div: className="max-w-2xl"
   
   Inside content:
   - Coffee icon (animated)
   - h1: Welcome message
   - p: Tagline
   - p: Description
   - Two Link buttons (to /menu and /contact)

6. Export default Hero
```

**Classes for elements:**
- Icon: `text-7xl text-amber-700 animate-bounce`
- Heading: `text-5xl md:text-6xl font-bold mb-4`
- Tagline: `text-xl md:text-2xl mb-8`
- Buttons div: `flex gap-4 justify-center`
- Button 1: `btn btn-primary btn-lg`
- Button 2: `btn btn-outline btn-lg`

**✅ Test:** Import Hero in Home.jsx and you should see the hero section.

---

### **Task 2.2: Add Background Image to Hero**

**Goal:** Replace gradient with background image.

**What to change in Hero.jsx:**
```jsx
// Steps:
1. Import your background image at the top
2. Change outer div to use style prop instead of bg-gradient classes
3. Add style={{ backgroundImage: `url(${yourImage})` }}
4. Add `relative` class to outer div
5. Add overlay div: <div className="absolute inset-0 bg-black/60 z-0"></div>
6. Add `relative z-10` to content div
7. Change all text colors to white
8. Add drop-shadow classes for better visibility

// Text colors:
- Heading: text-white drop-shadow-lg
- Paragraphs: text-white drop-shadow-md
- Icon: text-amber-300 (or white)
```

**Structure should be:**
```jsx
<div className="hero min-h-screen relative" style={{backgroundImage: ...}}>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60 z-0"></div>
    
    {/* Content */}
    <div className="hero-content text-center relative z-10">
        {/* Your content */}
    </div>
</div>
```

**✅ Test:** You should see a cafe background image with white text.

---

## **🎯 PHASE 3: Advanced Nav (Scroll Effect)**

---

### **Task 3.1: Add Scroll Detection to Nav**

**Goal:** Make navbar transparent at top, colored when scrolled.

**What to add to Nav.jsx:**

```jsx
// Steps:
1. Import useState, useEffect from React
2. Import useLocation from 'react-router-dom'

3. Create state:
   const [scrolled, setScrolled] = useState(false);

4. Get current location:
   const location = useLocation();
   const isHomePage = location.pathname === '/';

5. Add useEffect for scroll detection:
   - Create handleScroll function
   - Check if window.scrollY > 50
   - If yes: setScrolled(true), else: setScrolled(false)
   - Add scroll event listener
   - Return cleanup function to remove listener

6. Determine if nav should be transparent:
   const isTransparent = isHomePage && !scrolled;

7. Update nav className with conditional classes:
   - Add: fixed top-0 left-0 right-0 z-50
   - Add: transition-all duration-300
   - Conditional: isTransparent ? 'bg-transparent' : 'bg-white shadow-lg'

8. Update text/icon colors with conditionals:
   - isTransparent ? 'text-white' : 'text-gray-800'

9. Update link hover states:
   - isTransparent ? 'hover:bg-white/20' : 'hover:bg-gray-100'
```

**How it should work:**
- Home page at top: Transparent with white text
- Home page scrolled: White background with dark text
- Other pages: Always white background with dark text

**✅ Test:** Scroll down on homepage - navbar should change from transparent to white.

---

## **🎯 PHASE 4: Menu System**

---

### **Task 4.1: Create Menu Data**

**Goal:** Create a data file with menu items.

**Create: `src/data/menuData.js`**

```javascript
// What to create:
1. Export const menuCategories = ['All', 'Coffee', 'Pastries', 'Food']

2. Export const menuItems = [
   // Array of objects, each with:
   - id (number)
   - name (string)
   - category (string - Coffee, Pastries, or Food)
   - price (string - "$3.50")
   - description (string)
   - image (url string or imported image)
   - popular (boolean)
   
   // Create 24 items total: 8 Coffee, 8 Pastries, 8 Food
]

3. Export default menuItems
```

**Example item structure:**
```javascript
{
    id: 1,
    name: "Cappuccino",
    category: "Coffee",
    price: "$4.00",
    description: "A classic Italian coffee drink...",
    image: "/images/cappuccino.jpg",
    popular: true
}
```

**✅ Test:** Import and console.log the data to verify it works.

---

### **Task 4.2: Create MenuItem Component**

**Goal:** Build a card to display one menu item.

**File: `src/components/MenuItem.jsx`**

```jsx
// What to build:
1. Import React

2. Create MenuItem function
   - Accept props using destructuring: { name, price, description, image, category }

3. Return a DaisyUI card:
   - Card wrapper with classes
   - Figure element with image
   - Card body with:
     * Name as card-title
     * Description
     * Badge for category
     * Price (bold and colored)
   
4. Export default MenuItem
```

**Classes to use:**
- Card wrapper: `card bg-base-100 shadow-xl`
- Figure: `w-full h-48`
- Image: `w-full h-full object-cover`
- Card body: `card-body`
- Title: `card-title`
- Badge: `badge badge-secondary`
- Price: `text-xl font-bold text-primary`

**✅ Test:** Import one menu item and display it to see if it looks good.

---

### **Task 4.3: Build Menu Page with Filtering**

**Goal:** Display all menu items with category filtering.

**File: `src/pages/Menu.jsx`**

```jsx
// What to build:
1. Import React, useState
2. Import MenuItem component
3. Import menuItems and menuCategories from data

4. Create state for selected category:
   const [selectedCategory, setSelectedCategory] = useState('All');

5. Filter items based on category:
   - If 'All', show all items
   - Otherwise, use .filter() to show only items matching category

6. Return JSX with:
   - Container div with padding
   - Heading "Our Menu"
   - Category filter buttons (map through menuCategories)
   - Grid of MenuItem components (map through filtered items)

7. Make filter buttons interactive:
   - onClick should update selectedCategory
   - Active button should have different style (btn-primary)
   
8. Export default Menu
```

**Layout classes:**
- Container: `container mx-auto px-8 py-20`
- Heading: `text-4xl font-bold text-center mb-8`
- Buttons wrapper: `flex gap-2 justify-center mb-12 flex-wrap`
- Filter button: `btn` (add `btn-primary` if active)
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

**✅ Test:** Click category buttons to filter menu items.

---

## **🎯 PHASE 5: Footer & Layout**

---

### **Task 5.1: Create Footer Component**

**Goal:** Build a footer with contact info and links.

**File: `src/components/Footer.jsx`**

```jsx
// What to include:
1. Import React
2. Import Link from 'react-router-dom'
3. Import social media icons from 'react-icons/fa'

4. Create Footer function

5. Return footer with:
   - Dark background
   - 3 columns (grid):
     * Column 1: About section
     * Column 2: Quick Links
     * Column 3: Contact Info
   - Social media icons
   - Copyright text at bottom

6. Export default Footer
```

**Classes:**
- Footer: `footer bg-neutral text-neutral-content p-10`
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-8`
- Section headings: `text-xl font-bold mb-4`
- Links: `link link-hover`

**✅ Test:** Import in App.jsx below Routes.

---

### **Task 5.2: Create Layout Component**

**Goal:** Wrap Nav and Footer around all pages.

**File: `src/components/Layout.jsx`**

```jsx
// What to build:
1. Import React
2. Import Nav and Footer components

3. Create Layout function
   - Accept { children } prop
   
4. Return:
   - Wrapper div with min-h-screen flex flex-col
   - Nav component at top
   - Main element with flex-grow (contains {children})
   - Footer component at bottom
   
5. Export default Layout
```

**Then update App.jsx:**
```jsx
// Wrap Routes with Layout:
import Layout from './components/Layout'

<Layout>
  <Routes>
    {/* your routes */}
  </Routes>
</Layout>
```

**✅ Test:** Nav and Footer should appear on all pages.

---

## **🎯 PHASE 6: Polish & Extras**

---

### **Task 6.1: About Page**

**What to add:**
- Hero section with cafe story
- Team members section (3-4 cards)
- Our values/mission section
- Use grid layout for team cards
- Add images for team members

---

### **Task 6.2: Contact Page**

**What to add:**
- Contact form with fields:
  * Name input
  * Email input
  * Message textarea
  * Submit button
- Location/hours information
- Optional: Google Maps iframe
- Social media links

---

### **Task 6.3: Add Featured Items to Home**

**What to add:**
- New section below Hero in Home.jsx
- Filter menuItems where popular === true
- Display in grid (3-4 items)
- Add "View Full Menu" button linking to /menu

---

## **📋 Your Action Plan:**

**Recommended order:**
1. ✅ Phase 1 - Basic pages and nav (30 mins)
2. ✅ Phase 2 - Hero section (30 mins)
3. ✅ Phase 3 - Scroll effect (20 mins)
4. ✅ Phase 4 - Menu system (1 hour)
5. ✅ Phase 5 - Footer & Layout (30 mins)
6. ✅ Phase 6 - Polish (ongoing)

---

## **💡 General Tips:**

### **Component Structure:**
```jsx
// Standard component pattern:
import React from 'react'
// other imports

function ComponentName() {
    // State and logic here
    
    return (
        // JSX here
    )
}

export default ComponentName
```

### **Conditional Classes:**
```jsx
// Use template literals for dynamic classes:
className={`base-class ${condition ? 'class-if-true' : 'class-if-false'}`}
```

### **Map Array to Components:**
```jsx
// Display list of items:
{items.map(item => (
    <Component key={item.id} {...item} />
))}
```

### **Filter Array:**
```jsx
// Filter items by category:
const filtered = items.filter(item => item.category === 'Coffee')
```

---

## **🐛 Debugging Tips:**

1. **Check browser console** (F12) for errors
2. **Use console.log()** to debug values
3. **Check import paths** are correct
4. **Verify props** are passed correctly
5. **Test one thing at a time**

---

## **✅ Checklist for Each Component:**

- [ ] Imports at top
- [ ] Function created
- [ ] Props destructured (if needed)
- [ ] State defined (if needed)
- [ ] JSX returned
- [ ] Proper className usage
- [ ] Export at bottom
- [ ] No console errors
- [ ] Tested in browser

---

**Remember:** Take it step by step, test frequently, and don't be afraid to make mistakes! That's how you learn! 🚀

Good luck building your cafe website! ☕
