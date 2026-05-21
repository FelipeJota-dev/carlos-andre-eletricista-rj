import { REVIEWS } from '../data';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const Testimonials = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#F59E0B] text-[#F59E0B]" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-6 tracking-tight">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600">
            Avaliações 5 estrelas reais no Google. Nosso compromisso é sua tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-gray-100" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic flex-1 relative z-10">"{review.text}"</p>
              <div className="mt-auto">
                <span className="font-bold text-[#111111] block">{review.name}</span>
                <span className="text-xs text-gray-500">Cliente via Google</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
