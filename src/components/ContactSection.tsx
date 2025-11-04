import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

interface ContactSectionProps {
  language: string;
}

export default function ContactSection({ language }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const content = {
    pt: {
      title: 'Vamos Conversar',
      subtitle:
        'Seja qual for o momento da sua empresa — crescimento, venda, expansão, blindagem ou captação — você está pronto para o próximo passo.',
      incentive: 'Cada conversa é o primeiro passo para transformar desafios em oportunidades.',
      name: 'Nome',
      email: 'E-mail',
      company: 'Empresa',
      message: 'Mensagem',
      cta: 'Agendar Conversa Estratégica',
      success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      info: 'Informações de Contato',
    },
    en: {
      title: "Let's Talk",
      subtitle:
        'Whatever stage your company is in — growth, sale, expansion, protection, or fundraising — you are ready for the next step.',
      incentive: 'Every conversation is the first step to turning challenges into opportunities.',
      name: 'Name',
      email: 'Email',
      company: 'Company',
      message: 'Message',
      cta: 'Schedule Strategic Conversation',
      success: 'Message sent successfully! We will contact you soon.',
      info: 'Contact Information',
    },
  };

  const t = content[language as keyof typeof content];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C9A962_1px,transparent_1px),linear-gradient(to_bottom,#C9A962_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#C9A962] mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">{t.subtitle}</p>
          <p className="text-lg text-[#C9A962] font-serif italic">{t.incentive}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#0A1F15] to-[#0F2B1E] border border-[#C9A962]/30 rounded-lg p-8">
              <h3 className="text-2xl font-serif font-semibold text-[#C9A962] mb-6">{t.info}</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#B8956A] via-[#C9A962] to-[#B8956A] flex items-center justify-center shadow-[0_0_15px_rgba(201,169,98,0.3)]">
                    <Mail className="text-[#0F2B1E]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">contato@maestrobusiness.org</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#B8956A] via-[#C9A962] to-[#B8956A] flex items-center justify-center shadow-[0_0_15px_rgba(201,169,98,0.3)]">
                    <Phone className="text-[#0F2B1E]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Telefone</p>
                    <p className="text-white">+55 11 98371-1418</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#B8956A] via-[#C9A962] to-[#B8956A] flex items-center justify-center shadow-[0_0_15px_rgba(201,169,98,0.3)]">
                    <MapPin className="text-[#0F2B1E]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Localização</p>
                    <p className="text-white">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Strategic Meeting"
                className="rounded-lg shadow-2xl grayscale opacity-60"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0A1F15] to-[#0F2B1E] border border-[#C9A962]/30 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
            <a
              href="https://forms.gle/ibsde2TKHYp7Dqdb9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#B8956A] via-[#C9A962] to-[#B8956A] text-[#0F2B1E] font-semibold py-4 px-8 rounded-lg hover:shadow-[0_0_30px_rgba(201,169,98,0.5)] transition-all duration-300 hover:scale-105"
            >
              <span>{t.cta}</span>
              <Send size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
