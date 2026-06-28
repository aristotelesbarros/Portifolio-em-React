import type { Projeto } from "../dados/projetos";
import { IconeGithub } from "./Icones";

type PropriedadesCartao = {
  projeto: Projeto;
};

export default function CartaoProjeto(propriedades: PropriedadesCartao) {
  const projeto = propriedades.projeto;

  const estiloDoBanner = {
    background: "linear-gradient(135deg, " + projeto.corInicial + ", " + projeto.corFinal + ")",
  };

  return (
    <article className="projeto-card">
      <div className="projeto-banner" style={estiloDoBanner}>
        <img src={projeto.imagem} alt={projeto.titulo} className="projeto-imagem" />
        <div className="projeto-sombra" />
        <h3 className="projeto-titulo">{projeto.titulo}</h3>
      </div>

      <div className="projeto-corpo">
        <p className="projeto-descricao">{projeto.descricao}</p>

        <ul className="lista-tecnologias">
          {projeto.tecnologias.map(function (tecnologia) {
            return (
              <li key={tecnologia} className="etiqueta">
                {tecnologia}
              </li>
            );
          })}
        </ul>

        <div className="projeto-links">
          <a
            href={projeto.repositorio}
            target="_blank"
            rel="noreferrer"
            className="link-codigo"
            aria-label="Ver repositórios no GitHub"
            title="Ver no GitHub"
          >
            <IconeGithub className="icone-pequeno" />
            Código
          </a>
        </div>
      </div>
    </article>
  );
}
