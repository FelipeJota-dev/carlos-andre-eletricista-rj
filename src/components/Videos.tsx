import { useState, useEffect, useCallback } from 'react';
import { BUSINESS_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, MessageCircle } from 'lucide-react';

const VIDEOS = [
  { id: '-chiIbttV4Q', label: 'Manutenção' },
  { id: 'LA6FIEsbqwQ', label: 'Reforma Elétrica' },
  { id: 'XsFTcNc-fiI', label: 'Instalação' },
  { id: 'f79I_-CPvF0', label: 'Quadro' }
];

export const Videos = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setActiveVideoId(null), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeVideoId && e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideoId, closeLightbox]);

  const waLink = `https://wa.me/${BUSINESS_INFO.phone}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`;

  return (
    <section id="videos" className="py-24 bg-white relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#6AB317 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0B3D91] font-bold tracking-wider uppercase text-sm mb-4 block">Rotina em Ação</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-6 tracking-tight">
            Vídeos de serviços realizados
          </h2>
          <p className="text-lg text-gray-600">
            Veja alguns registros reais de instalações, manutenções e serviços executados pela C.A Elétrica-RJ.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
              onClick={() => setActiveVideoId(video.id)}
              role="button"
              tabIndex={0}
              aria-label={`Ver vídeo de ${video.label}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveVideoId(video.id);
                }
              }}
            >
              {/* Thumbnail */}
              <img 
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} 
                alt={`Serviço de ${video.label}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-[#111111]/20 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#6AB317]/90 text-white flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(106,179,23,0.5)] transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#6AB317]">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#222222] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-xl text-lg transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Solicite um orçamento via WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white p-2 z-50 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Fechar vídeo"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside video from closing modal
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&modestbranding=1&rel=0&playsinline=1`}
                title="Vídeo do serviço"
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
