import { perfil } from "../dados/perfil";

export default function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="container rodape-interno">
        <p>
          © {ano} {perfil.nome}. Feito com React, TypeScript &amp; CSS.
        </p>
        <a href="#topo" className="rodape-topo">
          voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
