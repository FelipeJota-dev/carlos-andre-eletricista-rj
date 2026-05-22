import { BUSINESS_INFO } from '../data';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const Header = () => {
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const waLink = `https://wa.me/${BUSINESS_INFO.phone}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center group">
          <img 
            src="https://i.imgur.com/kwNSUez.png" 
            alt="C.A Elétrica-RJ Logo" 
            className="h-10 sm:h-12 w-auto object-contain"
            fetchPriority="high"
            decoding="sync"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#0B3D91] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a 
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#6AB317] hover:bg-[#5a9813] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Fale Conosco</span>
        </a>
      </div>
    </header>
  );
};
