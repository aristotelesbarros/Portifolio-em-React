import { perfil } from "../dados/perfil";
import Aparecer from "./Aparecer";
import { IconeGithub, IconeLinkedin, IconeWhatsapp, IconeSeta } from "./Icones";

export default function Contato() {
  return (
    <section id="contato" className="secao container">
      <Aparecer>
        <div className="contato-card">
          <div className="contato-fundo" aria-hidden="true">
            <div className="brilho brilho-3" />
            <div className="brilho brilho-4" />
          </div>

          <p className="rotulo-centro">Contato</p>
          <h2 className="contato-titulo">
            Vamos construir algo <span className="texto-gradiente">juntos</span>
          </h2>
          <p className="contato-subtitulo">
            Tem um projeto em mente ou uma vaga aberta? Fico feliz em conversar.
          </p>

          <div className="contato-botoes">
            <a href={perfil.redes.whatsapp} target="_blank" rel="noreferrer" className="botao botao-azul">
              <IconeWhatsapp className="icone-pequeno" />
              Falar no WhatsApp
              <IconeSeta className="icone-pequeno" />
            </a>
          </div>

          <div className="contato-redes">
            <a href={perfil.redes.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="botao-rede">
              <IconeGithub className="icone-medio" />
            </a>
            <a href={perfil.redes.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="botao-rede">
              <IconeLinkedin className="icone-medio" />
            </a>
          </div>
        </div>
      </Aparecer>
    </section>
  );
}
