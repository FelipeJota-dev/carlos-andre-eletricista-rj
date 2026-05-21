import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full max-w-md lg:max-w-none relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://i.imgur.com/2cKePTa.jpeg" 
                alt="André Oliveira - Proprietário da C.A Elétrica-RJ" 
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-2xl">André Oliveira</h3>
                <p className="text-[#6AB317] font-medium">Especialista Técnico / Proprietário</p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#6AB317] font-bold tracking-wider uppercase text-sm mb-4 block">Sobre a Empresa</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-6 tracking-tight">
                Garantia de segurança e foco em soluções definitivas
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 mb-8">
                <p>
                  André Oliveira atua há mais de 20 anos no setor elétrico, sendo o responsável técnico pela <strong>C.A Elétrica-RJ</strong>. Realiza instalações, reformas e projetos com foco em segurança, qualidade e responsabilidade direcionados para todo o Grande Rio.
                </p>
                <p>
                  O trabalho é focado em segurança, organização, diagnóstico correto e execução profissional, sempre buscando entregar soluções duráveis e construindo extrema confiança com cada cliente.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Atendimento em todo o Grande Rio e Baixada',
                  'Mais de 20 anos de experiência técnica',
                  'Forte compromisso com segurança e normas',
                  'Cuidado extremo com o imóvel do cliente',
                  'Serviço limpo, organizado e transparente'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#0B3D91] shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
