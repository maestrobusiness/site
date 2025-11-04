import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FounderSection from './components/FounderSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          section.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className="bg-[#0F2B1E]">
      <Header language={language} onLanguageToggle={toggleLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ServicesSection language={language} />
      <FounderSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
