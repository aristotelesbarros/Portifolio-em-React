// ============================================================
//  Tecnologias agrupadas por categoria, com logo e nível (0 a 100).
// ============================================================
import html from "../imagens/tecnologias/html.png";
import css from "../imagens/tecnologias/css.png";
import javascript from "../imagens/tecnologias/javascript.png";
import typescript from "../imagens/tecnologias/typescript.png";
import react from "../imagens/tecnologias/react.png";
import nodejs from "../imagens/tecnologias/nodejs.png";
import mysql from "../imagens/tecnologias/sql.png";

export type Tecnologia = {
  nome: string;
  nivel: number;
  logo: string;
};

export type GrupoTecnologia = {
  categoria: string;
  dica: string;
  itens: Tecnologia[];
};

export const gruposDeTecnologias: GrupoTecnologia[] = [
  {
    categoria: "Front-end",
    dica: "Onde construo as interfaces",
    itens: [
      { nome: "HTML", nivel: 90, logo: html },
      { nome: "CSS", nivel: 88, logo: css },
      { nome: "JavaScript", nivel: 85, logo: javascript },
      { nome: "TypeScript", nivel: 75, logo: typescript },
      { nome: "React", nivel: 80, logo: react },
    ],
  },
  {
    categoria: "Back-end & Dados",
    dica: "Lógica e banco de dados",
    itens: [
      { nome: "Node.js", nivel: 70, logo: nodejs },
      { nome: "MySQL", nivel: 70, logo: mysql },
    ],
  },
];
