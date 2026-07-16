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
import financias from "../imagens/projetos/financias.jpg"
import jogo from "../imagens/projetos/jogo.jpg"

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
    tecnologias: ["Html", "css", "Node.js", "Express", "TypeScript", "MySQL", ],
    corInicial: "#1d4ed8",
    corFinal: "#38bdf8",
    imagem: administrativo,
    repositorio: linkGithub,
  },
 {
  titulo: "Loja de Jogos",
  descricao:
    "Aplicação web de uma loja virtual de jogos, desenvolvida com foco em navegação intuitiva, organização dos produtos e uma experiência moderna para o usuário.",
  tecnologias: ["html", "Css", "React", ],
  corInicial: "#0ea5e9",
  corFinal: "#6366f1",
  imagem: jogos,
  repositorio: linkGithub,
},
{
  titulo: "Clone do Spotify",
  descricao:
    "Clone da interface do Spotify, reproduzindo o visual da plataforma e oferecendo uma experiência de navegação semelhante para explorar músicas.",
  tecnologias: ["React", "CSS"],
  corInicial: "#2563eb",
  corFinal: "#22d3ee",
  imagem: spotify,
  repositorio: linkGithub,
},
{
  titulo: "App de Comentários",
  descricao:
    "Aplicação que permite adicionar e remover comentários dinamicamente, simulando a interação de usuários em uma plataforma de publicações.",
  tecnologias: ["React", "JavaScript"],
  corInicial: "#1e40af",
  corFinal: "#60a5fa",
  imagem: comentarios,
  repositorio: linkGithub,
},
{
  titulo: "Calculadora Básica",
  descricao:
    "Calculadora desenvolvida para realizar operações matemáticas básicas, oferecendo uma interface simples, prática e de fácil utilização.",
  tecnologias: ["JavaScript", "HTML", "CSS"],
  corInicial: "#0369a1",
  corFinal: "#38bdf8",
  imagem: calculadora,
  repositorio: linkGithub,
},
{
  titulo: "Calculadora de IMC",
  descricao:
    "Aplicação que calcula o Índice de Massa Corporal (IMC), informando ao usuário sua classificação de acordo com o resultado obtido.",
  tecnologias: ["JavaScript", "HTML", "CSS"],
  corInicial: "#1d4ed8",
  corFinal: "#0ea5e9",
  imagem: peso,
  repositorio: linkGithub,
},
{
  titulo: "Churrascômetro",
  descricao:
    "Aplicação que estima a quantidade ideal de carne e bebidas para um churrasco, considerando o número de participantes informados pelo usuário.",
  tecnologias: ["JavaScript", "CSS"],
  corInicial: "#1e3a8a",
  corFinal: "#3b82f6",
  imagem: churrasco,
  repositorio: linkGithub,
},
{
  titulo: "Venda de Carros",
  descricao:
    "Página desenvolvida para exibição e anúncio de veículos, apresentando informações organizadas e um layout voltado para a experiência do usuário.",
  tecnologias: ["Html", "Css", "JavaScript"],
  corInicial: "#155e75",
  corFinal: "#22d3ee",
  imagem: carros,
  repositorio: linkGithub,
},

{
  titulo: "Gerenciador de Financias",
  descricao:"Este projeto é uma aplicação web que permite gerenciar transações financeiras, possibilitando criar, editar, excluir e listar registros. A aplicação realiza o armazenamento e a atualização dos dados, garantindo que as informações sejam persistidas e organizadas para consulta e gerenciamento.",
  tecnologias: ["html", "css", "JavaScript" , "Express", ],
  corInicial: "#0c4a6e",
  corFinal: "#38bdf8",
  imagem: financias,
  repositorio: linkGithub,
},

{
  titulo: "Jogo da Velha",
  descricao:"Este é um projeto simples de Jogo da Velha onde o jogo permite que dois jogadores joguem de maneira interativa, alternando entre os símbolos X e 0",
  tecnologias: ["Html", "Css","JavaScript"],
  corInicial: "#0c4a6e",
  corFinal: "#38bdf8",
  imagem: jogo,
  repositorio: linkGithub,
},


{
  titulo: "Curiosidades Breaking Bad",
  descricao:
    "Site dedicado à série Breaking Bad, reunindo curiosidades, informações e conteúdos apresentados em uma interface moderna e organizada.",
  tecnologias: ["Html", "Css","JavaScript"],
  corInicial: "#0c4a6e",
  corFinal: "#38bdf8",
  imagem: breakingBad,
  repositorio: linkGithub,
},


];
