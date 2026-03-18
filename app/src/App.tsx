import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ProductsSection from '@/sections/ProductsSection';
import SystemOverview from '@/sections/SystemOverview';
import DecorationService from '@/sections/DecorationService';
import CustomFurniture from '@/sections/CustomFurniture';
import ReadyMadeFurniture from '@/sections/ReadyMadeFurniture';
import FlooringSystem from '@/sections/FlooringSystem';
import BathroomFixtures from '@/sections/BathroomFixtures';
import HomeAppliances from '@/sections/HomeAppliances';
import MaterialSelection from '@/sections/MaterialSelection';
import ExteriorWall from '@/sections/ExteriorWall';
import FactoryDirect from '@/sections/FactoryDirect';
import Partnership from '@/sections/Partnership';
import WhyChooseUs from '@/sections/WhyChooseUs';
import GlobalSupply from '@/sections/GlobalSupply';
import ContactSection from '@/sections/ContactSection';
import Footer from '@/sections/Footer';

const sections = [
  'decoration-service',
  'custom-furniture',
  'ready-made',
  'flooring',
  'bathroom',
  'appliances',
  'materials',
  'exterior-wall',
  'factory',
  'partnership',
];

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <SystemOverview />
        <DecorationService />
        <CustomFurniture />
        <ReadyMadeFurniture />
        <FlooringSystem />
        <BathroomFixtures />
        <HomeAppliances />
        <MaterialSelection />
        <ExteriorWall />
        <FactoryDirect />
        <Partnership />
        <WhyChooseUs />
        <GlobalSupply />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
