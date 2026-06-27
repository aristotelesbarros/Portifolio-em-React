import { techGroups } from "../data/technologies";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Technologies() {
  return (
    <section id="tecnologias" className="section tech-section">
      <div className="tech-glow" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Stack"
          title="Tecnologias"
         
        />

        <div className="tech-grid">
          {techGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 120}>
              <div className="tech-card">
                <div className="tech-card-head">
                  <h3>{group.category}</h3>
                  <p>{group.hint}</p>
                </div>

                <ul className="tech-list">
                  {group.items.map((tech) => (
                    <li key={tech.name}>
                      <div className="tech-row">
                        <span className="tech-name">
                          {tech.logo && (
                            <span className="tech-logo">
                              <img src={tech.logo} alt={tech.name} />
                            </span>
                          )}
                          {tech.name}
                        </span>
                        <span className="tech-pct">{tech.level}%</span>
                      </div>
                      <div className="tech-bar">
                        <div className="tech-bar-fill" style={{ width: `${tech.level}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
