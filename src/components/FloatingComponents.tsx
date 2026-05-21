import { useEffect, useState } from 'react';
import { BUSINESS_INFO } from '../data';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingComponents = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [viewerCount, setViewerCount] = useState(7);
  
  const waLink = `https://wa.me/${BUSINESS_INFO.phone}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`;

  // Social Proof Logic
  useEffect(() => {
    // Initial popup after 2 minutes (120000ms) - using 10s for dev preview if needed, but sticking to requested 2m
    const initialDelay = 120000; 
    const repeatDelay = 120000;

    const triggerPopup = () => {
      // Randomize viewers slightly for realism
      setViewerCount(Math.floor(Math.random() * 5) + 5);
      setShowPopup(true);
      
      // Hide after 5 seconds
      setTimeout(() => setShowPopup(false), 5000);
    };

    const initialTimer = setTimeout(() => {
      triggerPopup();
      // Then repeat every 2 minutes
      setInterval(triggerPopup, repeatDelay);
    }, initialDelay);

    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <>
      {/* Sticky WhatsApp Floating Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Tooltip */}
        <span className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          Dúvidas? Fale direto com o técnico
        </span>
      </motion.a>

      {/* Social Proof Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-[60] bg-white text-gray-800 p-4 rounded-xl shadow-2xl border border-gray-100 flex items-center gap-3 w-72"
          >
            <div className="w-2 h-2 rounded-full bg-[#6AB317] animate-ping shrink-0" />
            <p className="text-sm font-medium">
              <span className="font-bold">{viewerCount} pessoas</span> visualizando este site agora
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
