import html from "../Imagem/html.png";
import css from "../Imagem/css.png";
import javascript from "../Imagem/javascript.png";
import nodejs from"../Imagem/nodejs.png"
import react from"../Imagem/react.png"
import sql from"../Imagem/sql.png"
import typescript from "../Imagem/typescript.png"



const Tecnologias = () => {
  return (
    <section id="tecnologia">
      <div className="container">
        <h1>Tecnologias</h1>

        <div className="techs">
          <div className="tech">
            <img src={html} alt="HTML" />
            <p>HTML</p>
          </div>

          <div className="tech">
             <img src={css} alt="css" />
            <p>CSS</p>
          </div>

          <div className="tech">
             <img src={javascript} alt="javascript" />
            <p>JavaScript</p>
          </div>

          <div className="tech">
             <img src={typescript} alt="typescript" />
            <p>TypeSript</p>
          </div>

          <div className="tech">
             <img src={nodejs} alt="nodejs" />
            <p>Node.js</p>
          </div>

          <div className="tech">
             <img src={react} alt="react" />
            <p>React</p>
          </div>

           <div className="tech">
             <img src={sql} alt="sql" />
            <p>Mysql</p>
          </div>

         
        </div>

          

        

      </div>
    </section>
  );
};

export default Tecnologias;