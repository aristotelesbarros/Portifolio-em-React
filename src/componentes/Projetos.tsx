import Jogos from "../Imagem/jogos.jpg"
import Calculadora from "../Imagem/calculadora.jpg"
import spotfy from "../Imagem/spot.jpg"
import comentario from"../Imagem/comentario.jpg"
import peso from"../Imagem/peso.jpg"
import churasco from"../Imagem/churrasco.jpg"
import carro from"../Imagem/carro.jpg"
import bd from"../Imagem/ba.jpg"
const Projetos = () => {
  return (
    <section id="projetos">
      <div className="container">
        <h1>Meus Projetos</h1>

        <div className="cards">
          <div className="card">
            <h2>Loja de Jogos</h2>
            <img className="foto" src={Jogos} />
            <p>LOja para vendas de jogos</p>
          </div>

          <div className="card">
            <h2>Copiador de spotfy</h2>
            <img className="foto" src={spotfy} />
            <p>clone do spotify de musica</p>
          </div>

           <div className="card">
            <h2>Eexercio de comentario</h2>
              <img className="foto" src={comentario} />
            <p>Projeto onde a pessoa pode remover ou tirar comentario</p>
          </div>

            <div className="card">
            <h2>calcularda basica</h2>
              <img className="foto" src={Calculadora} />
            <p>calculadora de soma e subistração</p>
          </div>
             
             <div className="card">
            <h2>calculadora de peso</h2>
              <img className="foto" src={peso} />
            <p>famosa calculadora de peso/IMC</p>
          </div>

           <div className="card">
            <h2>churascocometro</h2>
              <img className="foto" src={churasco} />
            <p>churascomentro onde clacula pessoas e quantidades de churasco para cada pesoa</p>
          </div>

          
            <div className="card">
            <h2>venda de carro</h2>
              <img className="foto" src={carro} />
            <p>venda de carro</p>
          </div>

           <div className="card">
            <h2>brekaing bad</h2>
              <img className="foto" src={bd} />
            <p>site de curiosidades da serie Breaking bad </p>
          </div>
           
        </div>
        </div>
    </section>
  )
}

export default Projetos