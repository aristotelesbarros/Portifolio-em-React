import Menu from "./componentes/Menu";
import Inicio from "./componentes/Inicio";
import Sobre from "./componentes/Sobre";
import Servicos from "./componentes/Servicos";
import Projetos from "./componentes/Projetos";
import Tecnologias from "./componentes/Tecnologias";
import Contato from "./componentes/Contato";
import Rodape from "./componentes/Rodape";

export default function Aplicativo() {
  return (
    <>
      <Menu />
      <main>
        <Inicio />
        <Sobre />
        <Servicos />
        <Projetos />
        <Tecnologias />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
