import { motion } from 'motion/react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const WHATSAPP_NUMBER = '558137218770';
const INSTAGRAM_URL = 'https://www.instagram.com/interligadosweblink/';
const FACEBOOK_URL = 'https://www.facebook.com/interligadosweblink/';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1d1e22] to-[#0d0e14] text-white">
      {/* CTA Section */}
      <div className="bg-[#024af6] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Pronto para Navegar em Alta Velocidade?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 text-white/90"
          >
            Contrate agora e ganhe instalação grátis!
          </motion.p>
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20contratar%20um%20plano%20de%20internet.%20Pode%20me%20ajudar?`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-[#024af6] rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all inline-block"
          >
            Assinar Agora
          </motion.a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img
                  src="/images/logo.png"
                  alt="InterLigados WebLink"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-[#f7f0eb]/70 mb-2">
                MK TECNOLOGIA E SEGURANÇA LTDA - ME
              </p>
              <p className="text-[#f7f0eb]/70 mb-6">
                CNPJ: 15.654.082/0001-65
              </p>
              <p className="text-[#f7f0eb]/70 mb-6">
                Conectando você ao futuro com internet de fibra óptica de alta performance.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: FACEBOOK_URL, label: 'Facebook' },
                  { icon: Instagram, href: INSTAGRAM_URL, label: 'Instagram' }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.2, y: -2 }}
                      className="w-10 h-10 bg-[#024af6] rounded-full flex items-center justify-center hover:bg-[#0358c7] transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-[#f7f0eb]">Links Rápidos</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Início', href: '#inicio' },
                  { name: 'Nossos Planos', href: '#planos' },
                  { name: 'Cobertura', href: '#cobertura' },
                  { name: 'A Empresa', href: '#empresa' },
                  { name: 'Contato', href: '#contato' }
                ].map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-[#f7f0eb]/70 hover:text-[#024af6] transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-[#f7f0eb]">CONTATO</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#024af6] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#f7f0eb]/70 text-sm">
                      Rua Santa Luzia, 307, Salgado, Caruaru, PE 55016-250
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#024af6] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#f7f0eb]/70 text-sm">81 3721.8770</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#024af6] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#f7f0eb]/70 text-sm">
                      atendimento@interligadosweblink.com.br
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#f7f0eb]/70 text-sm text-center md:text-left">
                © {currentYear} InterLigados WebLink. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 flex-wrap justify-center">
                <a
                  href="/docs/lgpd.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f7f0eb]/70 hover:text-[#024af6] text-sm transition-colors"
                >
                  LGPD
                </a>
                <a
                  href="#"
                  className="text-[#f7f0eb]/70 hover:text-[#024af6] text-sm transition-colors"
                >
                  Privacidade
                </a>
                <a
                  href="#"
                  className="text-[#f7f0eb]/70 hover:text-[#024af6] text-sm transition-colors"
                >
                  Termos de Uso
                </a>
              </div>
              <p className="text-[#f7f0eb]/40 text-xs">
                Desenvolvido por <span className="text-[#8A00C4] font-semibold">GOTA</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}