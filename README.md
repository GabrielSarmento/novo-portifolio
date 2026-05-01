# Portfólio — Gabriel Sarmento

Portfólio pessoal de Gabriel de Souza Sarmento da Silva — Desenvolvedor.
Construído com **React 19 + Tailwind CSS**, sem backend (frontend puro).

---

## 🚀 Como rodar localmente

### Pré-requisitos
- **Node.js** 18+ ([baixe aqui](https://nodejs.org))
- **Yarn** ou **npm**

### Passos
```bash
# 1. Instale as dependências (use yarn se tiver, senão npm)
yarn install
# ou
npm install

# 2. Rode o servidor de desenvolvimento
yarn start
# ou
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de produção
```bash
yarn build
# ou
npm run build
```
Os arquivos finais ficam em `build/`. Você pode fazer deploy dessa pasta em
Vercel, Netlify, GitHub Pages, etc.

---

## 📁 Estrutura do projeto

```
portfolio-gabriel/
├── public/
│   ├── index.html            # HTML base (título, fontes, metadados)
│   └── images/               # Imagens do portfólio
│       ├── profile.jpeg      # Sua foto (sessão Sobre mim)
│       └── hero-bg.jpg       # Fundo do hero
├── src/
│   ├── App.js                # Rotas (BrowserRouter)
│   ├── App.css               # Estilos globais + animações
│   ├── index.js              # Entry point do React
│   ├── index.css             # Tailwind + variáveis CSS
│   ├── data/
│   │   └── portfolio.js      # ⭐ TODOS os textos, links e projetos
│   ├── hooks/
│   │   └── useScrollReveal.js  # Animações de scroll
│   ├── pages/
│   │   └── Portfolio.jsx     # Página principal
│   └── components/
│       ├── Header.jsx        # Menu fixo
│       ├── Hero.jsx          # Primeira seção
│       ├── Projects.jsx      # Cards de projetos
│       ├── Skills.jsx        # Conhecimentos
│       ├── About.jsx         # Sobre mim
│       ├── Contact.jsx       # Contato
│       └── Footer.jsx        # Rodapé
├── craco.config.js           # Config do Create-React-App
├── tailwind.config.js        # Config do Tailwind
├── postcss.config.js
└── package.json
```

---

## ✏️ Como editar o conteúdo

### Textos, projetos e links
Abra **`src/data/portfolio.js`** — está tudo centralizado ali:

```js
export const personalInfo = {
  name: "Gabriel Sarmento",
  location: "Palhoça, Santa Catarina",
  tagline: "...",
  email: "gabrielsouzasarmento16@gmail.com",
  ...
};

export const projects = [
  {
    title: "Goularte Doceria",
    description: "...",
    repository: "https://github.com/...",
    liveSite: "https://...",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  // ...adicione mais projetos aqui
];
```

### Trocar imagens
- **Sua foto**: substitua `public/images/profile.jpeg`
- **Fundo do hero**: substitua `public/images/hero-bg.jpg`

Mantenha os mesmos nomes de arquivo OU altere os caminhos em `portfolio.js`.

### Cores e visual
- **Paleta principal**: azul (#3b82f6) + laranja (#f97316) + navy (#05080f)
- **Editar cores**: `src/App.css` (gradientes, botões, glow) e `tailwind.config.js`
- **Fontes**: Press Start 2P (pixel art), Inter (corpo), JetBrains Mono (código) — carregadas via Google Fonts em `public/index.html`

---

## ✨ Features

- Scroll suave entre seções
- Animações de fade-in no scroll (IntersectionObserver)
- Menu destaca seção ativa automaticamente
- Responsivo (menu hamburger no mobile)
- Botão "Copiar email" com feedback visual
- Efeito CRT/scanlines no hero
- Todos os links externos abrem em nova aba

---

## 📦 Deploy

### Vercel (recomendado)
1. Suba o projeto no GitHub
2. Entre em [vercel.com](https://vercel.com) e importe o repositório
3. Pronto! Deploy automático a cada push

### Netlify
1. `yarn build`
2. Arraste a pasta `build/` em [netlify.com/drop](https://app.netlify.com/drop)

### GitHub Pages
```bash
yarn add gh-pages --dev
# adicione no package.json: "homepage": "https://seuusuario.github.io/repo-name"
# adicione scripts: "predeploy": "yarn build", "deploy": "gh-pages -d build"
yarn deploy
```

---

**Feito com ❤️ por Gabriel Sarmento — 2026**
