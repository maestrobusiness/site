import { TrendingUp, Handshake, Shield, DollarSign, Building2 } from 'lucide-react';

interface ServicesSectionProps {
  language: string;
}

export default function ServicesSection({ language }: ServicesSectionProps) {
  const content = {
    pt: {
      title: 'Nossos Serviços',
      subtitle: 'Sua empresa não pode depender da sorte. Ela precisa de estrutura, visão e inteligência.',
      services: [
        {
          icon: TrendingUp,
          title: 'Planejamento Tributário e Recuperação Fiscal',
          description:
            'Redução legal de carga tributária e recuperação de créditos fiscais com estratégias personalizadas.',
          gif: 'https://images.pexels.com/photos/6077983/pexels-photo-6077983.jpeg',
        },
        {
          icon: Handshake,
          title: 'Assessoria em M&A',
          description:
            'Conectamos compradores e vendedores qualificados, estruturando negócios estratégicos e lucrativos.',
          gif: 'https://img.freepik.com/free-photo/businessmen-analyzing-business-plan-tablet_23-2148252119.jpg',
        },
        {
          icon: Shield,
          title: 'Proteção Patrimonial e Economia Societária',
          description:
            'Blindagem patrimonial inteligente e estruturação societária para proteger seu patrimônio.',
          gif: 'https://images.pexels.com/photos/34103766/pexels-photo-34103766/free-photo-of-empire-state-building-against-blue-sky.jpeg',
        },
        {
          icon: DollarSign,
          title: 'Captação de Recursos e Expansão Estratégica',
          description:
            'Conexão com investidores e estruturação de operações de capital para crescimento acelerado.',
          gif: 'https://uploads.bpmoney.com.br/2023/09/ibovespa-grafico.jpg',
        },
        {
          icon: Building2,
          title: 'Negócios, Holdings e Reestruturação Comercial',
          description:
            'Criação de holdings, reorganização empresarial e estruturas que potencializam resultados.',
          gif: 'https://img.freepik.com/premium-photo/business-man-working-with-laptop-young-business-man-thinking-concentrated-work_1715-18593.jpg',
        },
      ],
    },
    en: {
      title: 'Our Services',
      subtitle: 'Your company cannot depend on luck. It needs structure, vision, and intelligence.',
      services: [
        {
          icon: TrendingUp,
          title: 'Tax Planning and Fiscal Recovery',
          description:
            'Legal reduction of tax burden and recovery of tax credits with customized strategies.',
          gif: 'https://media.giphy.com/media/gEvab1ilmJjbziplJO/giphy.gif',
        },
        {
          icon: Handshake,
          title: 'Business M&A Intermediation',
          description:
            'We connect qualified buyers and sellers, structuring strategic and profitable deals.',
          gif: 'https://media.giphy.com/media/l3q2K6AIJULvIx3NEv/giphy.gif',
        },
        {
          icon: Shield,
          title: 'Asset Protection and Corporate Economy',
          description:
            'Intelligent asset protection and corporate structuring to safeguard your wealth.',
          gif: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
        },
        {
          icon: DollarSign,
          title: 'Fundraising and Strategic Expansion',
          description:
            'Connection with investors and capital operation structuring for accelerated growth.',
          gif: 'https://media.giphy.com/media/3o7TKU8RsvmBGCwWxO/giphy.gif',
        },
        {
          icon: Building2,
          title: 'Business, Holdings and Commercial Restructuring',
          description:
            'Creation of holdings, business reorganization, and structures that maximize results.',
          gif: 'https://media.giphy.com/media/lSIpZMfvLHgvN5vQ2p/giphy.gif',
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-white to-gray-50 border border-[#C9A962]/20 rounded-lg overflow-hidden hover-lift shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#C9A962]/0 to-[#C9A962]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-8">
                <div className="mb-6 flex items-center justify-center h-48 overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={service.gif}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#B8956A] via-[#C9A962] to-[#B8956A] flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(201,169,98,0.3)]">
                    <service.icon className="text-[#0F2B1E]" size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-black">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
