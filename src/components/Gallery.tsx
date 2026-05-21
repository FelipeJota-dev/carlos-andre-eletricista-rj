import { useState, useEffect, useCallback } from 'react';
import { GALLERY_IMAGES } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, GALLERY_IMAGES.length));
  };

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? GALLERY_IMAGES.length - 1 : selectedIndex - 1);
    }
  }, [selectedIndex]);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === GALLERY_IMAGES.length - 1 ? 0 : selectedIndex + 1);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, prevImage, nextImage]);

  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-6 tracking-tight">
            Projetos e serviços realizados pela C.A Elétrica-RJ
          </h2>
          <p className="text-lg text-gray-600">
            Veja alguns registros de instalações, manutenções, reformas elétricas, painéis, sistemas e soluções executadas com padrão profissional.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_IMAGES.slice(0, visibleCount).map((src, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(idx)}
              className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden group cursor-zoom-in"
              aria-label={`Ver imagem ${idx + 1} da galeria ampliadamente`}
            >
              <img 
                src={src} 
                alt={`Montagem de painel elétrico pela C.A Elétrica-RJ - Imagem ${idx + 1}`} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Maximize2 className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" />
              </div>
            </motion.button>
          ))}
        </div>

        {visibleCount < GALLERY_IMAGES.length && (
          <div className="mt-12 text-center">
            <button 
              onClick={loadMore}
              className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-800 font-semibold rounded-xl hover:border-[#0B3D91] hover:text-[#0B3D91] transition-all"
            >
              Ver mais projetos ({GALLERY_IMAGES.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-50 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-50 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Próxima"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="w-full h-full max-w-6xl max-h-[85vh] p-4 flex items-center justify-center pointer-events-none">
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                src={GALLERY_IMAGES[selectedIndex]}
                alt="Galeria C.A Elétrica-RJ"
                className="max-w-full max-h-full object-contain shadow-2xl rounded-sm pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {selectedIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
