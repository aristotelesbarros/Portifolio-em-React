import Avatar from "../Imagem/foto.png"

function Inicio() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero">

        <img className="foto" src={Avatar} alt="Minha foto" />

        <div className="hero-text">
          <h1 className="nome">Aristoteles Barros Dal Farra</h1>
          <p className="descrição">Bem vindos, me chamo Aristoteles Barros Dal Farra, Graduando em Análise e Desenvolvimento de Sistemas, com grande entusiasmo pelo mundo da tecnologia. Recentemente, concluí um curso de Desenvolvedor Full Stack Júnior, ampliando minha experiência no desenvolvimento web. Desde cedo, sempre me interessei por tecnologia e seu impacto na forma como nos conectamos e inovamos. Esse fascínio me motivou a aprofundar meus conhecimentos em programação e a desenvolver projetos próprios, sempre focado em unir estética e funcionalidade para proporcionar experiências digitais eficazes. Atualmente, estou dedicado a evoluir como desenvolvedor Full Stack, explorando novas ferramentas e metodologias para criar soluções modernas e eficientes. </p>
        </div>

      </div>
    </section>
  )
}

export default Inicio