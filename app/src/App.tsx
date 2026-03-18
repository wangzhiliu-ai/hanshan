import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import CoreSystems from './sections/CoreSystems';
import Products from './sections/Products';
import WallSystem from './sections/WallSystem';
import Applications from './sections/Applications';
import Advantages from './sections/Advantages';
import SupplyChain from './sections/SupplyChain';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Configure ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse',
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreSystems />
        <Products />
        <WallSystem />
        <Applications />
        <Advantages />
        <SupplyChain />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
