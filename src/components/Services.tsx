import { SERVICES, BUSINESS_INFO } from '../data';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Services = () => {
  const waLink = `https://wa.me/${BUSINESS_INFO.phone}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`;

  return (
    <section id="servicos" className="py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#6AB317] font-bold tracking-wider uppercase text-sm mb-4 block">Nossos Serviços</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-6 tracking-tight">
            Soluções completas para sua segurança elétrica
          </h2>
          <p className="text-lg text-gray-600">
            Executamos uma rotina rigorosa focada em prevenção e correção com qualidade em cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#0B3D91] transition-colors">
                <service.icon className="w-7 h-7 text-[#0B3D91] group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{service.category}</span>
              <h3 className="text-xl font-bold text-[#111111] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-1 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <a 
                href={waLink} 
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#0B3D91] hover:text-[#6AB317] transition-colors"
              >
                Solicitar orçamento <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
