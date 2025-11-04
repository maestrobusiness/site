import { Linkedin, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  language: string;
}

export default function Footer({ language }: FooterProps) {
  const content = {
    pt: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      contact: 'Contato',
      rights: '2025 Maestro Business. Todos os direitos reservados.',
      tagline: 'Inteligência Estratégica e Conexões de Alto Nível',
    },
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      rights: '2025 Maestro Business. All rights reserved.',
      tagline: 'Strategic Intelligence and High-Level Connections',
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <footer className="bg-[#0F2B1E] border-t border-[#C9A962]/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/Maestro_Business_Logo_Ultra_Premium_HQ-removebg-preview.png"
                alt="Maestro Business"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">{t.tagline}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-[#C9A962] transition-colors">
                {t.home}
              </a>
              <a href="#about" className="block text-gray-400 hover:text-[#C9A962] transition-colors">
                {t.about}
              </a>
              <a href="#services" className="block text-gray-400 hover:text-[#C9A962] transition-colors">
                {t.services}
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-[#C9A962] transition-colors">
                {t.contact}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#B8956A] via-[#C9A962] to-[#B8956A] rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_10px_rgba(201,169,98,0.3)]"
              >
                <Linkedin className="text-[#0F2B1E]" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#B8956A] via-[#C9A962] to-[#B8956A] rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_10px_rgba(201,169,98,0.3)]"
              >
                <Instagram className="text-[#0F2B1E]" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#B8956A] via-[#C9A962] to-[#B8956A] rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_10px_rgba(201,169,98,0.3)]"
              >
                <Mail className="text-[#0F2B1E]" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#C9A962]/20 pt-8 text-center">
          <p className="text-gray-500 text-sm">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
