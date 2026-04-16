import { motion, useScroll, useTransform } from 'motion/react';
import { Zap } from 'lucide-react';
import { useRef } from 'react';

const WHATSAPP_NUMBER = '558137218770';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-gradient-to-br from-[#1d1e22] via-[#024af6] to-[#0d0e14]">
      {/* Animated background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606814540563-5c02d62fd409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwaW50ZXJuZXQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjI0MjA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-20" />
        
        {/* Animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-[#024af6] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#f87906] rounded-full blur-3xl"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center justify-center"
          >
            <img
              src="/images/logo.png"
              alt="InterLigados WebLink"
              className="h-40 w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-[#f7f0eb] mb-6 leading-tight"
          >
            Internet de{' '}
            <span className="text-[#f87906]">
              Ultra Velocidade
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#f7f0eb]/90 mb-8 max-w-3xl mx-auto"
          >
            Conecte-se ao futuro com fibra óptica de alta performance. Velocidade real, estabilidade garantida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20contratar%20um%20plano%20de%20internet.%20Pode%20me%20ajudar?`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#024af6] text-white rounded-full font-semibold text-lg shadow-lg shadow-[#024af6]/50 flex items-center gap-2 hover:bg-[#0358c7] transition-all"
            >
              <Zap className="w-5 h-5" />
              Assine Já
            </motion.a>
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              Fale Conosco
            </motion.a>
          </motion.div>



        </div>
      </motion.div>
    </div>
  );
}