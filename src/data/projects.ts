// ============================================================
//  Projetos. Cada item vira um card. Todos têm o ícone do GitHub
//  que leva para a lista de repositórios.
// ============================================================
import jogos from "../assets/projetos/jogos.jpg";
import spot from "../assets/projetos/spot.jpg";
import comentario from "../assets/projetos/comentario.jpg";
import calculadora from "../assets/projetos/calculadora.jpg";
import peso from "../assets/projetos/peso.jpg";
import churrasco from "../assets/projetos/churrasco.jpg";
import carro from "../assets/projetos/carro.jpg";
import ba from "../assets/projetos/ba.jpg";
import admin from "../assets/projetos/admin.jpg";

const GITHUB_REPOS = "https://github.com/aristotelesbarros?tab=repositories";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: [string, string];
  image: string;
  demo?: string;
  repo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Sistema Gerenciador Administrativo",
    description:
      "Sistema administrativo para cadastro, listagem, edição e exclusão de produtos, com login, dashboard e integração com banco de dados.",
    tags: ["Node.js", "Express", "MySQL", "JavaScript"],
    accent: ["#1d4ed8", "#38bdf8"],
    image: admin,
    demo: "",
    repo: GITHUB_REPOS,
    featured: true,
  },
  {
    title: "Loja de Jogos",
    description: "Loja online para venda de jogos.",
    tags: ["React", "CSS"],
    accent: ["#0ea5e9", "#6366f1"],
    image: jogos,
    demo: "",
    repo: GITHUB_REPOS,
  },
  {
    title: "Clone do Spotify",
    description: "Clone da interface do Spotify para reprodução de músicas.",
    tags: ["React", "CSS"],
    accent: ["#2563eb", "#22d3ee"],
    image: spot,
    demo: "",
    repo: GITHUB_REPOS,
  },
  {
    title: "App de Comentários",
    description: "Aplicação onde o usuário pode adicionar e remover comentários.",
    tags: ["React", "JavaScript"],
    accent: ["#1e40af", "#60a5fa"],
    image: comentario,
    demo: "",
    repo: GITHUB_REPOS,
  },
  {
    title: "Calculadora Básica",
    description: "Calculadora de soma e subtração.",
    tags: ["JavaScript", "HTML", "CSS"],
    accent: ["#0369a1", "#38bdf8"],
    image: calculadora,
    demo: "",
    repo: GITHUB_REPOS,
  },
  {
    title: "Calculadora de IMC",
    description: "A famosa calculadora de peso / IMC.",
    tags: ["JavaScript", "HTML", "CSS"],
    accent: ["#1d4ed8", "#0ea5e9"],
    image: peso,
    demo: "",
    repo: GITHUB_REPOS,
  },
  {
    title: "Churrascômetro",
    description:
      "Calcula a quantidade de carne e bebida por pessoa para o churrasco.",
    tags: ["JavaScript", "CSS"],
    accent: ["#1e3a8a", "#3b82f6"],
    image: churrasco,
    demo: "",
    repo: GITHUB_REPOS,
  },
  {
    title: "Venda de Carros",
    description: "Página para anúncio e venda de carros.",
    tags: ["React", "CSS"],
    accent: ["#155e75", "#22d3ee"],
    image: carro,
    demo: "",
    repo: GITHUB_REPOS,
  },
  {
    title: "Curiosidades Breaking Bad",
    description: "Site com curiosidades sobre a série Breaking Bad.",
    tags: ["React", "CSS"],
    accent: ["#0c4a6e", "#38bdf8"],
    image: ba,
    demo: "",
    repo: GITHUB_REPOS,
  },
];
