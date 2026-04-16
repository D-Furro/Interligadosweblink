import { motion } from 'motion/react';
import { Gamepad2, FileText, Gauge, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: Gamepad2,
    title: 'Gamers',
    description: 'Estamos presentes nos principais PTTs do país para garantir menor latência, assim proporcionar melhor a melhor experiência de jogo.',
    color: 'text-[#f87906]'
  },
  {
    icon: FileText,
    title: 'Soluções corporativas',
    description: 'Link Dedicado, IP Fixo, Ponto-a-Ponto, VPN, Firewall',
    color: 'text-[#f87906]'
  },
  {
    icon: Gauge,
    title: 'Medidores de velocidade',
    description: 'Speed Test, Fast, Minha Conexão',
    color: 'text-[#f87906]'
  },
  {
    icon: Sparkles,
    title: 'Entretenimento',
    description: 'Obtenha o melhor do entretenimento para sua família, filmes, séries e jogos para garotada.',
    color: 'text-[#f87906]'
  }
];

export function AboutCompany() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="mb-4">
                  <Icon className={`w-12 h-12 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-[#1d1e22] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#1d1e22]/70 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-[#024af6] to-[#0358c7] rounded-3xl p-12 md:p-16 text-white shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A empresa
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            Estamos no mercado a mais de 10 anos, buscando sempre inovar e trazer maior capacidade e qualidade de acesso aos nossos clientes, tendo sempre nossos valores pautados na ética e transparência. Entre em contato conosco ou visite um de nossos escritórios, que teremos o maior prazer de lhe atender e esclarecer e ajudar com quais quer dúvida.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
