interface AboutSectionProps {
  language: string;
}

export default function AboutSection({ language }: AboutSectionProps) {
  const content = {
    pt: {
      title: 'Quem Somos',
      text1:
        'A Maestro Business é mais do que uma consultoria. Somos estrategistas, conectores e facilitadores de oportunidades que transformam negócios.',
      text2:
        'Atuamos na interseção entre inteligência tributária, estruturas societárias, captação de recursos e intermediação de grandes negócios. Cada movimento é calculado, cada decisão é estratégica.',
      text3:
        'Trabalhamos com empresários e investidores que entendem que crescimento real exige mais do que boas intenções — exige estrutura, visão e inteligência.',
      highlight: 'Nossa missão é gerar conexões, com inteligência e visão global, criando o elo entre estratégia e resultado.',
    },
    en: {
      title: 'Who We Are',
      text1:
        'Maestro Business is more than a consultancy. We are strategists, connectors, and facilitators of opportunities that transform businesses.',
      text2:
        'We operate at the intersection of tax intelligence, corporate structures, fundraising, and major business intermediation. Every move is calculated, every decision is strategic.',
      text3:
        'We work with entrepreneurs and investors who understand that real growth requires more than good intentions — it requires structure, vision, and intelligence.',
      highlight: 'Our mission is to generate connections with intelligence and global vision, creating the link between strategy and results.',
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A962]/20 to-transparent rounded-lg blur-xl"></div>
            <img
              src="/Maestro_Business_Logo_Ultra_Premium_HQ (1).png"
              alt="Business Strategy"
              className="relative rounded-lg shadow-2xl hover:shadow-gold transition-all duration-500 border border-[#C9A962]/30"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#C9A962] mb-8">
              {t.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">{t.text1}</p>
            <p className="text-gray-400 text-lg leading-relaxed">{t.text2}</p>
            <p className="text-gray-400 text-lg leading-relaxed">{t.text3}</p>

            <div className="mt-8 p-6 border-l-4 border-[#C9A962] bg-gradient-to-r from-[#C9A962]/10 to-transparent">
              <p className="text-[#C9A962] text-xl font-serif italic leading-relaxed">
                "{t.highlight}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
