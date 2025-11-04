import { Quote } from 'lucide-react';

interface FounderSectionProps {
  language: string;
}

export default function FounderSection({ language }: FounderSectionProps) {
  const content = {
    pt: {
      title: 'Sobre o Fundador',
      name: 'Caio Ferreira',
      role: 'Estrategista e Fundador da Maestro Business',
      bio1:
        'Com mais de uma década de experiência no mercado corporativo, Caio Ferreira construiu sua reputação conectando oportunidades e estruturando negócios de alto impacto.',
      bio2:
        'Especialista em planejamento tributário, M&A e captação de recursos, Caio entende que cada empresa tem um momento único — e que decisões estratégicas podem determinar décadas de sucesso ou fracasso.',
      bio3:
        'Sua abordagem combina visão global, inteligência estratégica e uma rede de contatos que conecta os melhores players do mercado.',
      quote1: 'Sua vantagem está em quem enxerga o jogo antes dos outros.',
      quote2: 'Todo negócio extraordinário nasce de uma visão fora do comum.',
    },
    en: {
      title: 'About the Founder',
      name: 'Caio Ferreira',
      role: 'Strategist and Founder of Maestro Business',
      bio1:
        'With over a decade of experience in the corporate market, Caio Ferreira built his reputation by connecting opportunities and structuring high-impact businesses.',
      bio2:
        'Specialist in tax planning, M&A, and fundraising, Caio understands that every company has a unique moment — and that strategic decisions can determine decades of success or failure.',
      bio3:
        'His approach combines global vision, strategic intelligence, and a network of contacts that connects the best market players.',
      quote1: 'Your advantage lies in those who see the game before others.',
      quote2: 'Every extraordinary business is born from an uncommon vision.',
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A962] to-transparent rounded-lg blur-2xl opacity-30"></div>
              <div className="relative border-4 border-[#C9A962] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(201,169,98,0.3)]">
                <img
                  src="/568325352_18375073237145229_1545141734776423720_n.jpg"
                  alt="Caio Ferreira"
                  className="w-full hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="mb-8">
              <p className="text-[#C9A962] text-sm uppercase tracking-wider mb-2">{t.title}</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#C9A962] mb-2">
                {t.name}
              </h2>
              <p className="text-xl text-gray-500">{t.role}</p>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">{t.bio1}</p>
            <p className="text-gray-400 text-lg leading-relaxed">{t.bio2}</p>
            <p className="text-gray-400 text-lg leading-relaxed">{t.bio3}</p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-[#C9A962]/10 to-transparent border-l-2 border-[#C9A962]">
                <Quote className="text-[#C9A962] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-200 text-lg italic font-serif">{t.quote1}</p>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-[#C9A962]/10 to-transparent border-l-2 border-[#C9A962]">
                <Quote className="text-[#C9A962] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-200 text-lg italic font-serif">{t.quote2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
