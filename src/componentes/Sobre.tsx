import { perfil } from "../dados/perfil";
import Aparecer from "./Aparecer";
import TituloSecao from "./TituloSecao";
import { IconeUsuario } from "./Icones";

export default function Sobre() {
  return (
    <section id="sobre" className="secao container">
      <TituloSecao rotulo="" titulo="Um pouco sobre minha Jornada" />

      <div className="sobre-grade">
        <Aparecer direcao="direita">
          <div className="foto-area">
            <div className="foto-brilho" aria-hidden="true" />
            <div className="foto-borda">
              <div className="foto-interna">
                <div className="foto-reserva">
                  <IconeUsuario className="icone-grande" />
                </div>
                <img src={perfil.foto} alt={perfil.nome} className="foto-imagem" />
              </div>
            </div>
          </div>
        </Aparecer>

        <div className="sobre-texto">
          {perfil.sobre.map(function (paragrafo, indice) {
            return (
              <Aparecer key={indice} atraso={indice * 90}>
                <p className="sobre-paragrafo">{paragrafo}</p>
              </Aparecer>
            );
          })}

          {perfil.cidade && (
            <Aparecer atraso={perfil.sobre.length * 90}>
              <p className="sobre-cidade">📍 {perfil.cidade}</p>
            </Aparecer>
          )}

          <Aparecer atraso={perfil.sobre.length * 90 + 80}>
            <div className="numeros">
              {perfil.numeros.map(function (numero) {
                return (
                  <div className="numero-card" key={numero.texto}>
                    <span className="numero-valor texto-gradiente">{numero.valor}</span>
                    <span className="numero-texto">{numero.texto}</span>
                  </div>
                );
              })}
            </div>
          </Aparecer>
        </div>
      </div>
    </section>
  );
}
