import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Product from './components/Product';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import PricingPage from './components/PricingPage';
import Hero from './components/Hero';
import ContactForm from './components/ContactUs';
import AboutUs from './components/About-Us';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // Handle the end of the splash screen animation
  const handleAnimationEnd = () => {
    setShowSplashScreen(false);
  };

  return (
    <BrowserRouter>
      {/* Show the splash screen conditionally */}
      {showSplashScreen && <SplashScreen onAnimationEnd={handleAnimationEnd} />}
      
      {/* Render the rest of the app content if the splash screen is not shown */}
      {!showSplashScreen && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact-us" element={<ContactForm />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* Add other routes as needed */}
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
