import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function Streamings() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="py-16 px-4 bg-[#f7f0eb]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#024af6] mb-3">
            COMPATÍVEL COM SEUS STREAMINGS
          </h2>
          <p className="text-[#1d1e22]/60 text-lg">
            Aproveite ao máximo as suas plataformas favoritas com nossa internet de alta velocidade.
          </p>
        </motion.div>

        {/* Streaming logos image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/streamings/apps.png`}
            alt="Plataformas compatíveis: Max, Deezer, Letterboxd, PlayKids+, Kaspla, NoPing"
            className="max-w-full w-full object-contain"
            style={{ maxHeight: '160px' }}
          />
        </motion.div>
      </div>
    </div>
  );
}
