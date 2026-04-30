import Inicio from './componentes/Inicio'
import Serviços from './componentes/Serviços'
import Projeto from './componentes/Projetos'
import Contato from './componentes/Contato'
import Tecnologias from './componentes/Tecnologia'


const App = () => {
  return (
    <>
    
     <nav>
  <a href="#inicio">Início</a>
  <a href="#Serviços">Serviços</a>
  <a href="#projetos">Projetos</a>
  <a href="#tecnologia">Tecnologia</a>
  <a href="#contato">Contato</a>
</nav>
     
      <Inicio />
       <Serviços/>
      <Projeto />
       <Tecnologias/>
      <Contato />
     
  
    </>
  )
}

export default App