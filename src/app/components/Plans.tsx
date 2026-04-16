import { motion } from 'motion/react';
import { Check, Wifi, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const WHATSAPP_NUMBER = '558137218770';

const plans = [
  {
    name: 'AVEXADINHO',
    speed: '90',
    unit: 'MB',
    icon: Wifi,
    color: 'from-[#024af6] to-[#0358c7]',
    popular: false,
    badge: null,
    features: [
      'Fibra Óptica',
      'Wifi Grátis',
    ],
  },
  {
    name: 'CÁ GOTA SERENA',
    speed: '600',
    unit: 'MB',
    icon: Zap,
    color: 'from-[#024af6] to-[#f87906]',
    popular: true,
    badge: 'Indicado',
    features: [
      'Fibra Óptica',
      'Wifi Premium Grátis',
      'Suporte Premium',
      'Desconto de R$15,00 pagando até o vencimento',
    ],
  },
];

export function Plans() {
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
    <div ref={ref} className="py-24 px-4 bg-[#f7f0eb]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#024af6] mb-4">
            NOSSOS PLANOS
          </h2>
          <p className="text-xl text-[#1d1e22]/70">
            Elaboramos os planos pensando em você, ultra velocidades, estabilidade, wifi turbo, entretenimento e agilidade no atendimento.
          </p>
        </motion.div>

        {/* Grid — 2 cols on md+, centered */}
        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                /* Extra top padding so the badge floats above without clipping */
                className="relative pt-7"
              >
                {/* Badge — sits ABOVE the card, fully visible */}
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-[#f87906] text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                {/* Card */}
                <div
                  className={`flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${
                    plan.popular ? 'border-[#024af6]' : 'border-transparent'
                  }`}
                >
                  {/* Gradient Header */}
                  <div
                    className={`bg-gradient-to-r ${plan.color} px-8 pt-8 pb-7 text-white relative overflow-hidden`}
                  >
                    {/* Decorative rotating circle */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="absolute -top-10 -right-10 w-36 h-36 bg-white/10 rounded-full"
                    />
                    <Icon className="w-11 h-11 mb-3 relative z-10" />
                    <h3 className="text-xl font-bold leading-tight mb-1 relative z-10">
                      {plan.speed}{' '}
                      <span className="text-base font-semibold opacity-90">{plan.unit}</span>
                    </h3>
                    <p className="text-base font-semibold tracking-wide opacity-90 relative z-10">
                      {plan.name}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="px-8 pt-6 pb-8 flex flex-col flex-1">
                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.07 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 mt-0.5 rounded-full bg-[#024af6]/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-[#024af6]" />
                          </div>
                          <span className="text-[#1d1e22]/75 text-sm leading-snug">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA button */}
                    <motion.a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20${encodeURIComponent(plan.name)}%20de%20${plan.speed}%20${plan.unit}.%20Pode%20me%20ajudar?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full py-4 rounded-2xl font-bold text-center transition-all block text-white text-base shadow-lg ${
                        plan.popular
                          ? 'bg-[#024af6] shadow-[#024af6]/40 hover:bg-[#0341d8]'
                          : 'bg-[#024af6] shadow-[#024af6]/30 hover:bg-[#0341d8]'
                      }`}
                    >
                      Assine Já
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}