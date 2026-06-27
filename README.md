# Portfólio — Aristoteles Barros Dal Farra

Portfólio pessoal feito com **React + TypeScript + Vite e CSS puro** (sem Next.js e sem Tailwind).
Tema em tons de azul, cards de projeto, seção de serviços, tecnologias, animações de scroll e responsividade.

## 🚀 Rodando o projeto

Precisa do **Node.js 18+** instalado.

```bash
npm install     # instala as dependências
npm run dev     # roda em modo desenvolvimento
```

Abra o endereço que aparecer no terminal (geralmente http://localhost:5173).

Outros comandos: `npm run build` (produção), `npm run preview`, `npm run lint`.

## ✏️ Como personalizar

Todo o conteúdo fica em `src/data/`:

| O que mudar | Arquivo |
|---|---|
| Nome, bio, foto, redes sociais | `src/data/profile.ts` |
| Projetos (cada um vira um card) | `src/data/projects.ts` |
| Serviços | `src/data/services.ts` |
| Tecnologias e nível | `src/data/technologies.ts` |

As cores e o visual ficam em `src/styles/index.css` (variáveis no topo, dentro de `:root`).
As imagens ficam em `src/assets/` (foto, `projetos/`, `servicos/`, `tech/`).

## 📁 Estrutura

```
src/
├── assets/            imagens (foto, projetos, serviços, tecnologias)
├── components/        Navbar, Hero, About, Services, Projects, ProjectCard,
│                      Technologies, Contact, Footer, Reveal, SectionHeading, Icons
├── data/              conteúdo editável
├── styles/index.css   tema azul + todos os estilos (CSS puro)
├── App.tsx            monta as seções
└── main.tsx           ponto de entrada
```

## 🧰 Tecnologias

React 19 · TypeScript · Vite · CSS puro
