// ============================================================
//  Projetos. Cada item vira um card igual aos outros.
//  Todos têm o link do GitHub no botão "Código".
// ============================================================
import jogos from "../imagens/projetos/jogos.jpg";
import spotify from "../imagens/projetos/spot.jpg";
import comentarios from "../imagens/projetos/comentario.jpg";
import calculadora from "../imagens/projetos/calculadora.jpg";
import peso from "../imagens/projetos/peso.jpg";
import churrasco from "../imagens/projetos/churrasco.jpg";
import carros from "../imagens/projetos/carro.jpg";
import breakingBad from "../imagens/projetos/ba.jpg";
import administrativo from "../imagens/projetos/admin.jpg";

const linkGithub = "https://github.com/aristotelesbarros?tab=repositories";

export type Projeto = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  corInicial: string;
  corFinal: string;
  imagem: string;
  repositorio: string;
};

export const projetos: Projeto[] = [
  {
    titulo: "Sistema Gerenciador Administrativo",
    descricao:
      "Sistema administrativo para cadastro, listagem, edição e exclusão de produtos, com login, dashboard e integração com banco de dados.",
    tecnologias: ["Node.js", "Express", "MySQL", "JavaScript"],
    corInicial: "#1d4ed8",
    corFinal: "#38bdf8",
    imagem: administrativo,
    repositorio: linkGithub,
  },
  {
    titulo: "Loja de Jogos",
    descricao: "Loja online para venda de jogos.",
    tecnologias: ["React", "CSS"],
    corInicial: "#0ea5e9",
    corFinal: "#6366f1",
    imagem: jogos,
    repositorio: linkGithub,
  },
  {
    titulo: "Clone do Spotify",
    descricao: "Clone da interface do Spotify para reprodução de músicas.",
    tecnologias: ["React", "CSS"],
    corInicial: "#2563eb",
    corFinal: "#22d3ee",
    imagem: spotify,
    repositorio: linkGithub,
  },
  {
    titulo: "App de Comentários",
    descricao: "Aplicação onde o usuário pode adicionar e remover comentários.",
    tecnologias: ["React", "JavaScript"],
    corInicial: "#1e40af",
    corFinal: "#60a5fa",
    imagem: comentarios,
    repositorio: linkGithub,
  },
  {
    titulo: "Calculadora Básica",
    descricao: "Calculadora de soma e subtração.",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    corInicial: "#0369a1",
    corFinal: "#38bdf8",
    imagem: calculadora,
    repositorio: linkGithub,
  },
  {
    titulo: "Calculadora de IMC",
    descricao: "A famosa calculadora de peso / IMC.",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    corInicial: "#1d4ed8",
    corFinal: "#0ea5e9",
    imagem: peso,
    repositorio: linkGithub,
  },
  {
    titulo: "Churrascômetro",
    descricao:
      "Calcula a quantidade de carne e bebida por pessoa para o churrasco.",
    tecnologias: ["JavaScript", "CSS"],
    corInicial: "#1e3a8a",
    corFinal: "#3b82f6",
    imagem: churrasco,
    repositorio: linkGithub,
  },
  {
    titulo: "Venda de Carros",
    descricao: "Página para anúncio e venda de carros.",
    tecnologias: ["React", "CSS"],
    corInicial: "#155e75",
    corFinal: "#22d3ee",
    imagem: carros,
    repositorio: linkGithub,
  },
  {
    titulo: "Curiosidades Breaking Bad",
    descricao: "Site com curiosidades sobre a série Breaking Bad.",
    tecnologias: ["React", "CSS"],
    corInicial: "#0c4a6e",
    corFinal: "#38bdf8",
    imagem: breakingBad,
    repositorio: linkGithub,
  },
];
