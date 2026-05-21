import { Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const InstagramCTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#6AB317]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0B3D91]/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl p-8 sm:p-12 text-center"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-2xl flex items-center justify-center mb-8 transform rotate-3 shadow-lg">
            <Instagram className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-6 tracking-tight">
            Veja mais serviços realizados no Instagram
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Acompanhe instalações, reformas, manutenções e bastidores dos serviços realizados pela C.A Elétrica-RJ.
          </p>
          
          <a
            href="https://www.instagram.com/eletricistaamigosdolarecia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#222222] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-xl text-lg transform hover:-translate-y-1 group"
          >
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Ver mais serviços no Instagram</span>
            <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
