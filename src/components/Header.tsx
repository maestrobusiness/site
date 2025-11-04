import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

interface HeaderProps {
  language: string;
  onLanguageToggle: () => void;
}

export default function Header({ language, onLanguageToggle }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    pt: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      contact: 'Contato',
    },
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0F2B1E]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/Maestro_Business_Logo_Ultra_Premium_HQ-removebg-preview.png"
            alt="Maestro Business"
            className="h-12 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-[#C9A962] transition-colors">
            {t.home}
          </a>
          <a href="#about" className="text-gray-300 hover:text-[#C9A962] transition-colors">
            {t.about}
          </a>
          <a href="#services" className="text-gray-300 hover:text-[#C9A962] transition-colors">
            {t.services}
          </a>
          <a href="#contact" className="text-gray-300 hover:text-[#C9A962] transition-colors">
            {t.contact}
          </a>

          <button
            onClick={onLanguageToggle}
            className="flex items-center space-x-2 text-gray-300 hover:text-[#C9A962] transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={20} />
            <span className="text-sm font-medium">{language === 'pt' ? 'EN' : 'PT'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
