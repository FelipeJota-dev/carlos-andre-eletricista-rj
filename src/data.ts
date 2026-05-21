import { HardHat, Zap, ShieldCheck, Home, Factory, Settings, Building2, BatteryCharging, CheckSquare } from 'lucide-react';

export const BUSINESS_INFO = {
  name: 'C.A Elétrica-RJ',
  owner: 'Carlos André',
  phone: '5521981826212',
  displayPhone: '(21) 98182-6212',
  address: 'R. Miguel Cervantes, 132 - Cachambi, Rio de Janeiro - RJ, 20780-370',
  addressLines: {
    street: 'R. Miguel Cervantes, 132',
    city: 'Rio de Janeiro',
    neighborhood: 'Cachambi',
    state: 'RJ',
    zip: '20780-370'
  },
  rating: 5.0,
  reviewsCount: 5,
  openingHours: 'Aberto · Fecha 18:00',
  whatsappMessage: 'Olá, vim pelo site da C.A Elétrica-RJ e gostaria de solicitar um orçamento.',
  areas: ['Cachambi', 'Zona Norte do Rio de Janeiro', 'Zona Sul', 'Zona Oeste', 'Niterói e região']
};

export const SERVICES = [
  {
    category: 'Residencial',
    icon: Home,
    title: 'Reforma Elétrica Residencial',
    description: 'Atualização completa da rede elétrica, troca de fiação antiga, redimensionamento para novos aparelhos e resolução de curtos.',
  },
  {
    category: 'Energia e Tecnologia',
    icon: Zap,
    title: 'Aumento de Carga',
    description: 'Adequação junto à concessionária para suportar mais equipamentos com segurança, de monofásico para bifásico ou trifásico.',
  },
  {
    category: 'Segurança',
    icon: ShieldCheck,
    title: 'Reforma de PCs de Entrada',
    description: 'Manutenção e modernização do Padrão de Entrada de Energia (PC) para condomínios, prédios e vilas, seguindo as normas da Light/Enel.',
  },
  {
    category: 'Industrial',
    icon: Factory,
    title: 'Reforma em SPDA',
    description: 'Instalação, manutenção e adequação de Sistemas de Proteção contra Descargas Atmosféricas (Para-raios).',
  },
  {
    category: 'Projetos',
    icon: CheckSquare,
    title: 'Projetos Elétricos',
    description: 'Planejamento e dimensionamento técnico de instalações, com emissão de ART, garantindo segurança e economia na execução.',
  },
  {
    category: 'Residencial',
    icon: Settings,
    title: 'Automação Residencial',
    description: 'Casas inteligentes: controle de iluminação, ar-condicionado, segurança e bombas via smartphone ou assistentes de voz.',
  },
  {
    category: 'Energia Sustentável',
    icon: BatteryCharging,
    title: 'Carregador para Carro Elétrico',
    description: 'Instalação de Wallbox e pontos de recarga para veículos híbridos e elétricos em garagens residenciais ou condomínios.',
  },
  {
    category: 'Comercial',
    icon: Building2,
    title: 'Montagem de Painéis',
    description: 'Montagem, organização e balanceamento de quadros de distribuição de luz e força (QDC) para comércios e indústrias.',
  }
];

export const GALLERY_IMAGES = [
  "https://i.imgur.com/XYG16ZW.png",
  "https://i.imgur.com/u2sHMu7.jpeg",
  "https://i.imgur.com/z2ONVAy.jpeg",
  "https://i.imgur.com/S028a8j.png",
  "https://i.imgur.com/w3lgKAN.png",
  "https://i.imgur.com/RJu7mv7.png",
  "https://i.imgur.com/GX7ypcK.png",
  "https://i.imgur.com/uTBM6jP.png",
  "https://i.imgur.com/V37gHgd.png",
  "https://i.imgur.com/7hTo8fq.png",
  "https://i.imgur.com/K12pVwQ.png",
  "https://i.imgur.com/ugaOG2f.png",
  "https://i.imgur.com/zCKqYmF.png",
  "https://i.imgur.com/95DnjLb.png",
  "https://i.imgur.com/uyhzdbv.png",
  "https://i.imgur.com/ftSo2UL.png",
  "https://i.imgur.com/iWIisAo.png",
  "https://i.imgur.com/dqzniiP.png",
  "https://i.imgur.com/fAyr6gR.png",
  "https://i.imgur.com/CwU4HK4.png",
  "https://i.imgur.com/EQDiWEs.jpeg",
  "https://i.imgur.com/APQ9i3R.png",
  "https://i.imgur.com/HmRPJrM.jpeg",
  "https://i.imgur.com/ge8yRoc.jpeg",
  "https://i.imgur.com/d6zmbAQ.jpeg",
  "https://i.imgur.com/KCopgrO.jpeg",
  "https://i.imgur.com/j06IgSu.jpeg",
  "https://i.imgur.com/DCq8gCX.jpeg",
  "https://i.imgur.com/DaexOZz.jpeg",
  "https://i.imgur.com/rO4MoMi.png",
  "https://i.imgur.com/Lcc2JqX.png",
  "https://i.imgur.com/kWhSXqK.png"
];

export const REVIEWS = [
  {
    name: "Andrea Delmonte",
    text: "O eletricista Carlos André é extremamente competente, sério e altamente qualificado. Fiz a troca recentemente de toda a parte elétrica do meu apartamento e estou muito feliz com o resultado.",
    rating: 5
  },
  {
    name: "Glaucio Jujuba",
    text: "Profissional altamente capacitado, trocou toda fiação do PC que vai da garagem até meu apartamento no quinto andar. Tudo perfeito, excelente profissional.",
    rating: 5
  },
  {
    name: "Alyne Moraes",
    text: "Super indico! Empresa qualificada, com uma equipe exemplar. Um grande profissional, atendimento rápido e honesto.",
    rating: 5
  },
  {
    name: "Adriana",
    text: "Muito bom profissional! Serviço perfeito e com preço justo. Eu recomendo!",
    rating: 5
  },
  {
    name: "Flavia Gouvea",
    text: "Profissional excepcional. Capacitado e comprometido. Super recomendo.",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "Vocês atendem em Cachambi?",
    answer: "Sim, a C.A Elétrica-RJ tem forte atuação no bairro de Cachambi. Também atendemos toda a Zona Norte do Rio, Méier, Engenho de Dentro, além de Zona Sul, Zona Oeste e Niterói."
  },
  {
    question: "A C.A Elétrica atende emergência?",
    answer: "Sim, realizamos atendimentos emergenciais (manutenção corretiva) para restabelecer a energia e resolver curtos-circuitos com agilidade e total segurança."
  },
  {
    question: "Fazem reforma elétrica residencial?",
    answer: "Sim, somos especialistas em reforma elétrica residencial completa, desde a troca de fiação antiga até a modernização de painéis e tomadas, garantindo um ambiente seguro para sua família."
  },
  {
    question: "Fazem aumento de carga?",
    answer: "Sim, executamos todo o processo físico de adequação e aumento de carga (monofásico para bifásico/trifásico) para que seu imóvel suporte mais aparelhos (como ar e chuveiros) sem desarmar disjuntores."
  },
  {
    question: "Trabalham com SPDA?",
    answer: "Sim. Realizamos projeto, instalação e reforma em Sistemas de Proteção contra Descargas Atmosféricas (SPDA - Para-raios) para condomínios, indústrias e galpões."
  },
  {
    question: "Fazem projeto elétrico?",
    answer: "Sim, desenvolvemos projetos elétricos profissionais. Um bom planejamento evita desperdício de material, garante o dimensionamento correto dos disjuntores e fiação (evitando riscos de incêndio) e pode contar com ART."
  },
  {
    question: "Atendem empresas e comércios?",
    answer: "Trabalhamos com manutenção técnica, montagem de quadros (QDC), adequação de carga e rotinas completas de manutenção preventiva para comércios, lojas e galpões industriais."
  },
  {
    question: "Como solicitar orçamento pelo WhatsApp?",
    answer: "Basta clicar em qualquer botão de WhatsApp aqui no site! Você será direcionado para uma conversa direta com o Carlos André. Nos mande fotos do problema/projeto para agilizarmos seu atendimento."
  }
];
