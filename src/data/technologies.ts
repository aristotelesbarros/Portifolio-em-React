// ============================================================
//  Tecnologias agrupadas por categoria, com logos e nível.
// ============================================================
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import react from "../assets/tech/react.png";
import nodejs from "../assets/tech/nodejs.png";
import sql from "../assets/tech/sql.png";

export type Tech = { name: string; level: number; logo?: string };

export type TechGroup = {
  category: string;
  hint: string;
  items: Tech[];
};

export const techGroups: TechGroup[] = [
  {
    category: "Front-end",
    hint: "Onde construo as interfaces",
    items: [
      { name: "HTML", level: 90, logo: html },
      { name: "CSS", level: 88, logo: css },
      { name: "JavaScript", level: 85, logo: javascript },
      { name: "TypeScript", level: 75, logo: typescript },
      { name: "React", level: 80, logo: react },
    ],
  },
  {
    category: "Back-end & Dados",
    hint: "Lógica e banco de dados",
    items: [
      { name: "Node.js", level: 70, logo: nodejs },
      { name: "MySQL", level: 70, logo: sql },
    ],
  },
  
];
