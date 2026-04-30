import code1 from "../Imagem/code1.png"
import code from "../Imagem/code.png"
import mobile from "../Imagem/mobile.png"

const Serviços = () => {
  return (
    <section id="Serviços">
      <div className="container">
        <h1>Meus Serviços</h1>

        {/* 🔥 ADICIONADO "servicos" */}
        <div className="cards servicos">

          <div className="card">
            <h2 className="servic">Desenvolvimento Web</h2>
            <img className="foto2" src={code1} />
            <p>
              Crio sites modernos e responsivos, alinhando design e funcionalidade
              para oferecer a melhor experiência ao usuário. Utilizo tecnologias
              como HTML, CSS, JavaScript e React.
            </p>
          </div>

          <div className="card">
            <h2 className="servic">Desenvolvimento Back-end</h2>
            <img className="foto2" src={code} />
            <p>
              Desenvolvo soluções robustas no lado servidor, garantindo segurança,
              escalabilidade e performance com Node.js e bancos de dados.
            </p>
          </div>

          <div className="card">
            <h2 className="servic">Desenvolvedor Mobile</h2>
            <img className="foto2" src={mobile} />
            <p>
              Crio aplicativos móveis com React Native, focando em usabilidade,
              desempenho e integração com diversas funcionalidades.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Serviços