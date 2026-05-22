import { BUSINESS_INFO } from '../data';
import { Smartphone, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

export const Footer = () => {
  const waLink = `https://wa.me/${BUSINESS_INFO.phone}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`;

  return (
    <footer id="contato" className="bg-[#111111] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1 border-r-0 lg:border-r border-gray-800 pr-0 lg:pr-8">
            <div className="flex items-center mb-6 bg-white w-fit px-4 py-2 rounded-xl">
              <img 
                src="https://i.imgur.com/kwNSUez.png" 
                alt="C.A Elétrica-RJ Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Eletricista em Cachambi e Rio de Janeiro. Reformas, aumento de carga, painéis e projetos. Segurança em primeiro lugar.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#6AB317] animate-pulse"></span>
              <span className="text-sm font-medium">{BUSINESS_INFO.openingHours}</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {[
                { name: 'Início', href: '#inicio' },
                { name: 'Sobre', href: '#sobre' },
                { name: 'Serviços', href: '#servicos' },
                { name: 'Projetos', href: '#projetos' },
                { name: 'Avaliações', href: '#avaliacoes' }
              ].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-[#6AB317]" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Áreas de Atendimento</h4>
            <ul className="space-y-3">
              {BUSINESS_INFO.areas.map(area => (
                <li key={area} className="text-gray-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0B3D91]" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Fale Diretamente</h4>
            <div className="space-y-4">
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#6AB317] hover:bg-[#5a9813] text-white px-5 py-3 rounded-xl transition-colors group"
              >
                <Smartphone className="w-5 h-5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold text-white/80">WhatsApp Direto</span>
                  <span className="font-semibold">{BUSINESS_INFO.displayPhone}</span>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-900 border border-gray-800">
                <MapPin className="w-5 h-5 text-[#0B3D91] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  {BUSINESS_INFO.address}
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center flex flex-col items-center gap-2">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Produzido com <span className="text-[#6AB317]">♥</span> para o Rio de Janeiro
          </p>
        </div>
      </div>
    </footer>
  );
};
