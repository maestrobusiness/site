import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  language: string;
}

export default function HeroSection({ language }: HeroSectionProps) {
  const content = {
    pt: {
      title: 'Maestria para o próximo grande salto do seu negócio.',
      subtitle: 'Somos a ponte entre negócios extraordinários e resultados excepcionais.',
      cta: 'Descubra como podemos ajudar',
    },
    en: {
      title: 'Mastery for the next big leap in your business.',
      subtitle: 'We are the bridge between extraordinary businesses and exceptional results.',
      cta: 'Discover how we can help',
    },
  };

  const t = content[language as keyof typeof content];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source
            src="https://cdn.pixabay.com/video/2021/04/22/76290-543255221_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0F2B1E]/60 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,98,0.08)_0%,_transparent_70%)]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
          {t.subtitle}
        </p>
        <button
          onClick={scrollToAbout}
          className="group inline-flex items-center space-x-2 bg-gradient-to-r from-[#B8956A] via-[#C9A962] to-[#B8956A] text-[#0F2B1E] px-8 py-4 rounded-sm font-semibold hover:shadow-[0_0_30px_rgba(201,169,98,0.5)] transition-all duration-300 hover:scale-105"
        >
          <span>{t.cta}</span>
          <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#C9A962]" size={32} />
      </div>
    </section>
  );
}
