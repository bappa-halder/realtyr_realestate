import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Properties from './pages/Properties'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Login from './pages/Login'
import VerifyEmail from './pages/VerifyEmail'
import Wishlist from './pages/Wishlist'
import ScrollToTop from './ScrollToTop'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Lenis from 'lenis'

function App() {
  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/verify" element={<VerifyEmail/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
