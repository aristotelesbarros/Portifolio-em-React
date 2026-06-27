// ============================================================
//  Serviços.
// ============================================================
import code1 from "../assets/servicos/code1.png";
import code from "../assets/servicos/code.png";
import mobile from "../assets/servicos/mobile.png";

export type Service = {
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Desenvolvimento Web",
    image: code1,
    description:
      "Crio sites modernos e responsivos, alinhando design e funcionalidade para oferecer a melhor experiência ao usuário. Utilizo tecnologias como HTML, CSS, JavaScript e React.",
  },
  {
    title: "Desenvolvimento Back-end",
    image: code,
    description:
      "Desenvolvo soluções robustas no lado servidor, garantindo segurança, escalabilidade e performance com Node.js e bancos de dados.",
  },
  {
    title: "Desenvolvedor Mobile",
    image: mobile,
    description:
      "Crio aplicativos móveis com React Native, focando em usabilidade, desempenho e integração com diversas funcionalidades.",
  },
];
