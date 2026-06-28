import { projetos } from "../dados/projetos";
import Aparecer from "./Aparecer";
import TituloSecao from "./TituloSecao";
import CartaoProjeto from "./CartaoProjeto";

export default function Projetos() {
  return (
    <section id="projetos" className="secao container">
      <TituloSecao
        rotulo="Portfólio"
        titulo="Meus Projetos"
        descricao="Uma seleção de trabalhos. Clique no ícone do GitHub para ver os repositórios."
      />

      <div className="projetos-grade">
        {projetos.map(function (projeto, indice) {
          return (
            <Aparecer key={projeto.titulo} atraso={(indice % 2) * 100}>
              <CartaoProjeto projeto={projeto} />
            </Aparecer>
          );
        })}
      </div>
    </section>
  );
}
