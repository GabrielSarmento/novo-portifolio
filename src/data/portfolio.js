// ============================================================================
// Dados do portfólio — altere aqui para atualizar textos, projetos, links etc.
// ============================================================================

export const personalInfo = {
  name: "Gabriel Sarmento",
  fullName: "Gabriel de Souza Sarmento da Silva",
  location: "Belém do Pará",
  tagline: "Natural de Belém do Pará, sou um Desenvolvedor apaixonado pela área da programação.",
  aboutShort: "Desenvolvedor Web",
  aboutLong:
    "Sou natural de Belém do Pará, nascido em 2007. Meu contato com o mundo da programação me fez enxergar uma oportunidade de me desenvolver e aprender. Me identifiquei muito na área dos games — foi ela que me trouxe até aqui e me motivou a absorver os mais diversos conhecimentos dessa área.",
  email: "gabrielsouzasarmento16@gmail.com",
  profileImage: "/images/profile.jpeg",
  heroBackground: "/images/hero-bg.jpg",
};

export const socialLinks = {
  github: "https://github.com/GabrielSarmento",
  linkedin:
    "https://www.linkedin.com/in/gabriel-de-souza-sarmento-da-silva-92b376281",
  instagram: "https://www.instagram.com/bielsr20/",
  email: "mailto:gabrielsouzasarmento16@gmail.com",
};

// Seção: Conhecimentos (Skills)
export const skills = [
  {
    name: "Python",
    // ícone via devicon CDN — carrega direto da web (funciona offline depois do primeiro acesso)
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
  },
];

// Seção: Projetos
export const projects = [
  {
    id: 1,
    title: "Goularte Doceria",
    description:
      "Site de confeitaria personalizado que oferece uma experiência única ao cliente, com fotos irresistíveis, informações sobre os produtos e um processo de pedido simplificado. Design atrativo e funcionalidades intuitivas tornam fácil escolher e solicitar suas delícias favoritas.",
    repository: "https://github.com/GabrielSarmento/Goularte-Doceria",
    liveSite: "https://site-goularte.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "GabDev Links",
    description:
      "Projeto desenvolvido para apresentar minha identidade profissional de maneira simples, moderna e acessível. Centraliza em um único espaço meus principais links e formas de contato, destacando portfólio, projetos, redes profissionais e serviços com navegação rápida e agradável.",
    repository: "https://github.com/GabrielSarmento/Gabdevlinks7",
    liveSite: "https://gabdevlinks.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Perfil Social",
    description:
      "Projeto criado para divulgar redes sociais e redes de trabalho de uma pessoa. Uma página personalizada com ícones e links para cada uma das redes — LinkedIn, Instagram, Twitter, entre outras — com design simples, objetivo e organizado, facilitando a conexão com os visitantes.",
    repository: "https://github.com/GabrielSarmento/Perfil-Social",
    liveSite: "https://social-links-profile-main-navy-theta.vercel.app/",
    tags: ["HTML", "CSS"],
  },
];

// Itens do menu de navegação
export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Conhecimentos", href: "#conhecimentos" },
  { label: "Sobre mim", href: "#sobre" },
];
