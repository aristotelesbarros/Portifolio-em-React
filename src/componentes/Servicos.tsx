import { servicos } from "../dados/servicos";
import Aparecer from "./Aparecer";
import TituloSecao from "./TituloSecao";

export default function Servicos() {
  return (
    <section id="servicos" className="secao container">
      <TituloSecao
        rotulo=""
        titulo="Meus Serviços"
        descricao=""
      />

      <div className="servicos-grade">
        {servicos.map(function (servico, indice) {
          return (
            <Aparecer key={servico.titulo} atraso={indice * 120}>
              <div className="servico-card">
                <span className="servico-icone">
                  <img src={servico.imagem} alt={servico.titulo} />
                </span>
                <h3 className="servico-titulo">{servico.titulo}</h3>
                <p className="servico-descricao">{servico.descricao}</p>
              </div>
            </Aparecer>
          );
        })}
      </div>
    </section>
  );
}
