import { gruposDeTecnologias } from "../dados/tecnologias";
import Aparecer from "./Aparecer";
import TituloSecao from "./TituloSecao";

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="secao secao-tecnologias">
      <div className="tecnologias-brilho" aria-hidden="true" />

      <div className="container">
        <TituloSecao
          rotulo=""
          titulo="Tecnologias"
          descricao=""
        />

        <div className="tecnologias-grade">
          {gruposDeTecnologias.map(function (grupo, indiceGrupo) {
            return (
              <Aparecer key={grupo.categoria} atraso={indiceGrupo * 120}>
                <div className="tecnologia-card">
                  <div className="tecnologia-cabecalho">
                    <h3>{grupo.categoria}</h3>
                    <p>{grupo.dica}</p>
                  </div>

                  <ul className="tecnologia-lista">
                    {grupo.itens.map(function (item) {
                      return (
                        <li key={item.nome}>
                          <div className="tecnologia-linha">
                            <span className="tecnologia-nome">
                              <span className="tecnologia-logo">
                                <img src={item.logo} alt={item.nome} />
                              </span>
                              {item.nome}
                            </span>
                            <span className="tecnologia-porcentagem">{item.nivel}%</span>
                          </div>
                          <div className="tecnologia-barra">
                            <div
                              className="tecnologia-barra-preenchida"
                              style={{ width: item.nivel + "%" }}
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Aparecer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
