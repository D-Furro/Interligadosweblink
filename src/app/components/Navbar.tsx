import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '558137218770';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(29, 30, 34, 0)', 'rgba(29, 30, 34, 0.95)']
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Área de cobertura', href: '#cobertura' },
    { name: 'Nossos planos', href: '#planos' },
    { name: 'A empresa', href: '#empresa' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#inicio"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="InterLigados WebLink"
              className="h-12 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-white hover:text-[#024af6] transition-colors font-medium text-sm"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href={`${import.meta.env.BASE_URL}docs/lgpd.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 border-2 border-white text-white rounded-md font-semibold text-sm hover:bg-white hover:text-[#024af6] transition-all"
            >
              LGPD
            </motion.a>
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20contratar%20um%20plano%20de%20internet.%20Pode%20me%20ajudar?`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[#024af6] text-white rounded-full font-semibold text-sm hover:bg-[#0358c7] transition-all"
            >
              Assinar
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#024af6] transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}docs/lgpd.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#024af6] transition-colors font-medium py-2"
              >
                LGPD
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20contratar%20um%20plano%20de%20internet.%20Pode%20me%20ajudar?`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-[#024af6] text-white rounded-full font-semibold w-full hover:bg-[#0358c7] transition-all text-center block"
              >
                Assinar
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}