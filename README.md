# Portfólio — Aristoteles Barros Dal Farra

Portfólio pessoal feito com **React, TypeScript e CSS puro** (sem Next.js e sem Tailwind).
Tema em tons de azul, cards de projeto, serviços, tecnologias, animações e responsividade.

## Como rodar

Você precisa do **Node.js** instalado.

```bash
npm install     # baixa as dependências (só na primeira vez)
npm run dev     # liga o site no navegador
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

Para parar, aperte `Ctrl + C`. Outros comandos: `npm run build`, `npm run preview`.

## Onde editar cada coisa

Todo o conteúdo fica na pasta `src/dados/`:

| O que mudar | Arquivo |
|---|---|
| Nome, textos, foto, links das redes | `src/dados/perfil.ts` |
| Projetos (cada um vira um card) | `src/dados/projetos.ts` |
| Serviços | `src/dados/servicos.ts` |
| Tecnologias e nível | `src/dados/tecnologias.ts` |

As cores e o visual ficam em `src/estilos/estilo.css` (variáveis no topo, em `:root`).
As imagens ficam em `src/imagens/`.

## Organização das pastas

```
src/
├── imagens/            fotos e imagens (foto, projetos, servicos, tecnologias)
├── componentes/        cada parte da tela:
│                       Menu, Inicio, Sobre, Servicos, Projetos, CartaoProjeto,
│                       Tecnologias, Contato, Rodape, Aparecer, TituloSecao, Icones
├── dados/              conteúdo editável (perfil, projetos, servicos, tecnologias)
├── estilos/estilo.css  cores e estilos (CSS puro)
├── Aplicativo.tsx      junta todas as seções
└── principal.tsx       inicia o site
```

## Tecnologias usadas

React · TypeScript · Vite · CSS puro
