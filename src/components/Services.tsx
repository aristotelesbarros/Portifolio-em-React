import { services } from "../data/services";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="servicos" className="section container">
      <SectionHeading
        eyebrow="Serviços"
        title="Meus Serviços"
        
      />

      <div className="services-grid">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 120}>
            <div className="service-card">
              <span className="service-icon">
                <img src={service.image} alt={service.title} />
              </span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
