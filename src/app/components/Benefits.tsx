import { motion } from 'motion/react';
import { Gauge, Shield, Headphones, Award, Clock, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const benefits = [
  {
    icon: Gauge,
    title: 'Velocidade Real',
    description: 'Fibra óptica com velocidade real garantida, sem oscilações',
    color: 'bg-[#024af6]'
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Conexão segura e estável para proteger seus dados',
    color: 'bg-[#024af6]'
  },
  {
    icon: Headphones,
    title: 'Suporte 24/7',
    description: 'Equipe especializada pronta para te atender a qualquer hora',
    color: 'bg-[#f87906]'
  },
  {
    icon: Award,
    title: 'Melhor Custo-Benefício',
    description: 'Planos acessíveis com a melhor qualidade do mercado',
    color: 'bg-[#f87906]'
  },
  {
    icon: Clock,
    title: 'Instalação Rápida',
    description: 'Instalação gratuita em até 48 horas após a contratação',
    color: 'bg-[#024af6]'
  },
  {
    icon: MapPin,
    title: 'Cobertura Ampla',
    description: 'Levamos internet de qualidade para toda sua região',
    color: 'bg-[#f87906]'
  }
];

export function Benefits() {
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
    <div ref={ref} className="py-24 px-4 bg-gradient-to-b from-[#1d1e22] to-[#0d0e14] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#024af6] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f87906] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f7f0eb] mb-4">
            Por Que Escolher a InterligadosWebLink?
          </h2>
          <p className="text-xl text-[#f7f0eb]/80">
            Benefícios exclusivos para você navegar sem limites
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`${benefit.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#f7f0eb] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#f7f0eb]/70">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}