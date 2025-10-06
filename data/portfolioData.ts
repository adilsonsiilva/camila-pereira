import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  profile: {
    name: "Camila Pereira",
    title: "Comunicadora Multiplataforma",
    summary: "Especialista em Marketing Digital, Design Gráfico e Produção Audiovisual, com um perfil que integra visão analítica e criativa para desenvolver campanhas e identidades visuais de impacto.",
    intro: "Olá, eu sou",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto-format&fit=crop",
    stats: [
        { label: "Projetos Concluídos", value: "45+"},
        { label: "Anos de Experiência", value: "8+"},
    ]
  },
  experience: [
    {
      role: "Analista de Comunicação e Marketing",
      employer: "Prefeitura de Carapicuíba",
      period: "2023 - 2025",
      description: [
        "Planejamento e implementação de campanhas institucionais, desenvolvimento de conteúdos multiplataforma, e elaboração de relatórios analíticos.",
      ],
    },
    {
      role: "Analista de Mídias Sociais",
      employer: "Partido Social Trabalhista (PSD)",
      period: "2024",
      description: [
        "Criação de conteúdos visuais e audiovisuais para redes sociais, e planejamento de calendário editorial.",
      ],
    },
    {
      role: "Designer Gráfica",
      employer: "Freelancer",
      period: "2015 - 2022",
      description: [
        "Criação de identidades visuais e materiais gráficos para pequenos empreendedores e profissionais liberais.",
      ],
    },
  ],
  projects: [
    {
      title: "Documentário: A Cor Dessa Cidade",
      role: "Roteirista e Pesquisadora",
      description: "Vídeo documental como ferramenta estratégica de mobilização social para estimular o pensamento crítico e o engajamento comunitário.",
      imageUrl: "/a-cor-dessa-cidade.jpg",
      link: "https://www.youtube.com/watch?v=4fGrWSdAIgk",
      tags: ["Documentário", "Roteiro", "Pesquisa Social"],
    },
    {
      title: "Rádio News",
      role: "Roteirista e Apresentadora",
      description: "Boletim informativo em áudio com foco no cenário internacional, oferecendo um panorama atualizado de forma ágil e objetiva.",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto-format&fit=crop",
      link: "/radio-news-internacional.mp3",
      tags: ["Podcast", "Jornalismo", "Áudio"],
    },
    {
      title: "Jornal Vestígios",
      role: "Diretora, Produtora e Redatora",
      description: "Edição especial com abordagem literária e jornalística sobre a memória histórica do Hospital Colônia de Barbacena.",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto-format&fit=crop",
      link: "/Jornal-Vestigios.pdf",
      tags: ["Editorial", "Direção", "Redação"],
    },
     {
      title: "Revista Planeta Verde",
      role: "Editora de Arte e Redatora",
      description: "Publicação infantil com foco em sustentabilidade para a formação de cidadãos conscientes.",
      imageUrl: "/Revista Planeta Verde.jpg",
      link: "/Revista-Planeta-Verde.pdf",
      tags: ["Design Editorial", "Infantil", "Sustabilidade"],
    },
  ],
  academic: [
    {
      degree: "Pós-Graduação em Comunicação Digital e Business Intelligence",
      institution: "Escola Superior de Propaganda e Marketing (ESPM)",
      period: "2025 - 2026",
    },
    {
      degree: "Tecnologia em Produção Audiovisual",
      institution: "Universidade Nove de Julho (UNINOVE)",
      period: "2019 - 2021",
    },
    {
      degree: "Comunicação Social - Jornalismo",
      institution: "Universidade Nove de Julho (UNINOVE)",
      period: "2014 - 2017",
    },
  ],
  certifications: [
    {
      degree: "Google Analytics, Search Console, Ads",
      institution: "Udemy",
      period: "Certificação",
    },
    {
      degree: "Meta Business Suite",
      institution: "Udemy",
      period: "Certificação",
    },
    {
      degree: "Adobe Premiere Pro",
      institution: "Udemy",
      period: "Certificação",
    },
    {
      degree: "Editoração: Photoshop, Illustrator e InDesign",
      institution: "SENAC",
      period: "Certificação",
    }
  ],
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Em desenvolvimento (Previsão 2027)" },
  ],
  contact: {
    email: "pereiracamila.midia@outlook.com",
    phone: "(11) 97591-0796",
    socials: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/camilapereiramidia/" },
        { name: "Behance", url: "https://www.behance.net/camilapereiramidia" },
        { name: "Instagram", url: "https://www.instagram.com/cmlspace/" },
    ],
  },
};