import { perfil } from "../dados/perfil";
import Aparecer from "./Aparecer";
import { IconeGithub, IconeLinkedin, IconeWhatsapp, IconeSeta } from "./Icones";

export default function Inicio() {
  return (
    <section id="topo" className="inicio">
      <div className="inicio-fundo" aria-hidden="true">
        <div className="grade" />
        <div className="brilho brilho-1" />
        <div className="brilho brilho-2" />
        <div className="inicio-degrade" />
      </div>

      <div className="container">
        <Aparecer>
          <p className="aviso">
            {perfil.disponivel && <span className="ponto-piscando" />}
            {perfil.disponivel ? "Disponível para projetos" : perfil.cidade}
          </p>
        </Aparecer>

        <Aparecer atraso={80}>
          <h1 className="inicio-titulo">
            Olá, eu sou <br />
            <span className="texto-gradiente">{perfil.nome}</span>
          </h1>
        </Aparecer>

        <Aparecer atraso={160}>
          <p className="inicio-subtitulo">
            <span className="inicio-cargo">{perfil.cargo}.</span> {perfil.frase}
          </p>
        </Aparecer>

        <Aparecer atraso={240}>
          <div className="inicio-botoes">
            <a href="#projetos" className="botao botao-azul">
              Ver projetos
              <IconeSeta className="icone-pequeno" />
            </a>
            <a href="#contato" className="botao botao-vazado">
              Entrar em contato
            </a>
          </div>
        </Aparecer>

        <Aparecer atraso={320}>
          <div className="linha-redes">
            <a href={perfil.redes.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="botao-rede">
              <IconeGithub className="icone-medio" />
            </a>
            <a href={perfil.redes.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="botao-rede">
              <IconeLinkedin className="icone-medio" />
            </a>
            <a href={perfil.redes.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="botao-rede">
              <IconeWhatsapp className="icone-medio" />
            </a>
          </div>
        </Aparecer>
      </div>
    </section>
  );
}
