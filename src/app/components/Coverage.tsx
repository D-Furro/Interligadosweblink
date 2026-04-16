import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const WHATSAPP_NUMBER = '558137218770';

export function Coverage() {
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
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1602130520129-1994945ef133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwbmV0d29yayUyMGNvbm5lY3Rpb258ZW58MXx8fHwxNzc2MjkyODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cobertura de rede"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#024af6]/80 to-transparent" />

              {/* Animated pulse points */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute top-1/3 left-1/3 w-4 h-4 bg-[#024af6] rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                className="absolute top-1/2 right-1/3 w-4 h-4 bg-[#f87906] rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
                className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-[#024af6] rounded-full"
              />
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#024af6] mb-6">
              ÁREA DE COBERTURA
            </h2>
            <p className="text-xl text-[#1d1e22]/70 mb-8">
              Estamos presentes na Cidade de Caruaru-PE nos bairros abaixo listados. Levamos internet de fibra óptica para residências e empresas com a melhor infraestrutura do mercado.
            </p>

            <div className="space-y-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="bg-[#024af6]/10 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-[#024af6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1d1e22] mb-1">Endereço:</h3>
                  <p className="text-[#1d1e22]/70">Rua Santa Luzia, 307, Salgado, Caruaru, PE 55016-250</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="bg-[#024af6]/10 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-[#024af6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1d1e22] mb-1">Telefones:</h3>
                  <p className="text-[#1d1e22]/70">  (81)3721-8770</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="bg-[#024af6]/10 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-[#024af6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1d1e22] mb-1">Email:</h3>
                  <p className="text-[#1d1e22]/70">atendimento@interligadosweblink.com.br</p>
                </div>
              </motion.div>
            </div>

            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20verificar%20a%20disponibilidade%20de%20internet%20na%20minha%20regi%C3%A3o.%20Pode%20me%20ajudar?`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#024af6] text-white rounded-full font-semibold shadow-lg shadow-[#024af6]/50 hover:bg-[#0358c7] transition-all inline-block"
            >
              Consultar Disponibilidade
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}