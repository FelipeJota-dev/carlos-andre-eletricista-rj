import { BUSINESS_INFO } from '../data';
import { motion } from 'motion/react';
import { ShieldCheck, Cog, Zap, CheckCircle, Smartphone } from 'lucide-react';

export const Hero = () => {
  const waLink = `https://wa.me/${BUSINESS_INFO.phone}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`;

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F7F7F7]">
      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0B3D91 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Column - Copy */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold text-[#0B3D91] mb-6"
          >
            <Zap className="w-4 h-4 text-[#6AB317]" />
            <span>Atendimento Técnico Profissional</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] leading-tight tracking-tight mb-6"
          >
            Eletricista na Zona Norte <br className="hidden sm:block"/>
            e Zona Sul do Rio de Janeiro com <span className="text-gradient">segurança e qualidade</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Instalações, reformas, manutenções e projetos elétricos para residências, comércios e empresas, com atendimento técnico, responsável e dentro das normas.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12"
          >
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#0B3D91] hover:bg-[#082d6b] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg transform hover:-translate-y-0.5"
            >
              <Smartphone className="w-5 h-5" />
              Solicitar orçamento pelo WhatsApp
            </a>
            <a 
              href="#servicos" 
              className="w-full sm:w-auto bg-white border-2 border-gray-200 hover:border-[#6AB317] hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center text-lg"
            >
              Ver serviços elétricos
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm font-medium text-gray-500"
          >
            <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#6AB317]"/> Segurança em 1º lugar</div>
            <div className="flex items-center gap-1.5"><Cog className="w-4 h-4 text-[#6AB317]"/> Atendimento técnico</div>
            <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#6AB317]"/> NR10 e normas</div>
            <div className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#6AB317]"/> 5.0 no Google</div>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Custom Frame Background styling details */}
            <div className="absolute top-4 -right-4 bottom-4 -left-4 bg-gradient-brand rounded-tl-[60px] rounded-br-[60px] opacity-10 blur-xl"></div>
            <div className="absolute -inset-0.5 bg-gradient-brand rounded-tl-[80px] rounded-br-[80px]" style={{ zIndex: 0 }}></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full h-[500px] sm:h-[600px] rounded-tl-[80px] rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://i.imgur.com/FE1xHtA.jpeg" 
                alt="Eletricista em Cachambi realizando manutenção em painel elétrico"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Badge Detail */}
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 z-20 bg-white rounded-full p-4 shadow-xl border border-gray-100 flex items-center justify-center">
              <div className="bg-[#e6f4d9] text-[#6AB317] w-12 h-12 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 fill-current" />
              </div>
            </div>

            {/* Satisfaction floating tag */}
            <div className="absolute bottom-12 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex justify-center items-center overflow-hidden"><img src="https://i.imgur.com/2cKePTa.jpeg" alt="Client" className="w-full h-full object-cover" /></div>
                <div className="w-10 h-10 rounded-full bg-[#0B3D91] border-2 border-white flex justify-center items-center text-white font-bold text-xs">5.0</div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900">Nota Máxima</span>
                <span className="text-xs text-gray-500">Google Avaliações</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
