// ============================================================
//  Serviços que aparecem na seção "O que eu faço".
// ============================================================
import desenvolvimentoWeb from "../imagens/servicos/code1.png";
import desenvolvimentoBackend from "../imagens/servicos/code.png";
import desenvolvimentoMobile from "../imagens/servicos/mobile.png";

export type Servico = {
  titulo: string;
  descricao: string;
  imagem: string;
};

export const servicos: Servico[] = [
  {
    titulo: "Desenvolvimento Web",
    imagem: desenvolvimentoWeb,
    descricao:
      "Crio sites modernos e responsivos, alinhando design e funcionalidade para oferecer a melhor experiência ao usuário. Utilizo tecnologias como HTML, CSS, JavaScript e React.",
  },
  {
    titulo: "Desenvolvimento Back-end",
    imagem: desenvolvimentoBackend,
    descricao:
      "Desenvolvo soluções robustas no lado servidor, garantindo segurança, escalabilidade e performance com Node.js e bancos de dados.",
  },
  {
    titulo: "Desenvolvedor Mobile",
    imagem: desenvolvimentoMobile,
    descricao:
      "Crio aplicativos móveis com React Native, focando em usabilidade, desempenho e integração com diversas funcionalidades.",
  },
];
