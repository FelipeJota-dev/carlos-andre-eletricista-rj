import { BUSINESS_INFO } from '../data';
import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export const LocalSEO = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-6 tracking-tight">
                Atendimento elétrico em todo o Grande Rio
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Chegamos rapidamente até você. Nossa base em Cachambi permite atendimento ágil para emergências e projetos elétricos em toda a capital e municípios do estado do Rio de Janeiro.
              </p>

              <div className="grid grid-cols-2 gap-y-4 gap-x-4 sm:gap-x-8 mb-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-[#0B3D91] border-b border-gray-100 pb-2">Rio de Janeiro</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700 text-sm sm:text-base"><Navigation className="w-3 h-3 text-[#6AB317] shrink-0" /> Cachambi e Zona Norte</li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm sm:text-base"><Navigation className="w-3 h-3 text-[#6AB317] shrink-0" /> Zona Sul e Centro</li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm sm:text-base"><Navigation className="w-3 h-3 text-[#6AB317] shrink-0" /> Barra e Zona Oeste</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-[#0B3D91] border-b border-gray-100 pb-2">Região Metropolitana</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700 text-sm sm:text-base"><Navigation className="w-3 h-3 text-[#6AB317] shrink-0" /> Baixada Fluminense</li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm sm:text-base"><Navigation className="w-3 h-3 text-[#6AB317] shrink-0" /> Niterói e São Gonçalo</li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm sm:text-base"><Navigation className="w-3 h-3 text-[#6AB317] shrink-0" /> Nova Iguaçu e Caxias</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#0B3D91] shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Localização Base</h4>
                  <p className="text-gray-600">{BUSINESS_INFO.address}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 h-[400px] lg:h-auto min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-200"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2979268802996!2d-43.2750!3d-22.8879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUzJzE2LjQiUyA0M8KwMTYnMzAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1611234567890!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização C.A Elétrica-RJ em Cachambi"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
