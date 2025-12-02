import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Nav from './components/Nav'
import Contact from './pages/Contact'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />


    </div>
  )
}

export default App
