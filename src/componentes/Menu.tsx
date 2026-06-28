import { useEffect, useState } from "react";
import { perfil } from "../dados/perfil";

const links = [
  { destino: "#sobre", texto: "Sobre" },
  { destino: "#servicos", texto: "Serviços" },
  { destino: "#projetos", texto: "Projetos" },
  { destino: "#tecnologias", texto: "Tecnologias" },
  { destino: "#contato", texto: "Contato" },
];

export default function Menu() {
  const [rolou, definirRolou] = useState(false);
  const [aberto, definirAberto] = useState(false);

  useEffect(function () {
    function aoRolar() {
      definirRolou(window.scrollY > 24);
    }
    aoRolar();
    window.addEventListener("scroll", aoRolar);
    return function () {
      window.removeEventListener("scroll", aoRolar);
    };
  }, []);

  function abrirOuFecharMenu() {
    definirAberto(!aberto);
  }

  function fecharMenu() {
    definirAberto(false);
  }

  const partesDoNome = perfil.nome.split(" ");
  const iniciais = (partesDoNome[0][0] + (partesDoNome[1] ? partesDoNome[1][0] : "")).toUpperCase();

  return (
    <header className={"menu " + (rolou ? "menu-fixo" : "")}>
      <nav className="menu-interno">
        <a href="#topo" className="marca">
          <span className="marca-icone">{iniciais}</span>
          <span className="marca-nome">{perfil.nome}</span>
        </a>

        <ul className="menu-links">
          {links.map(function (link) {
            return (
              <li key={link.destino}>
                <a href={link.destino}>{link.texto}</a>
              </li>
            );
          })}
        </ul>

        <button
          className="menu-botao"
          onClick={abrirOuFecharMenu}
          aria-label="Abrir menu"
          aria-expanded={aberto}
        >
          <span className={"hamburguer " + (aberto ? "aberto" : "")}>
            <i />
            <i />
            <i />
          </span>
        </button>
      </nav>

      <div className={"menu-celular " + (aberto ? "aberto" : "")}>
        <ul>
          {links.map(function (link) {
            return (
              <li key={link.destino}>
                <a href={link.destino} onClick={fecharMenu}>
                  {link.texto}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
