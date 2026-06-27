import { projects } from "../data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projetos" className="section container">
      <SectionHeading
        eyebrow="Portfólio"
        title="Meus Projetos"
        description="Meus Projetos. Clique no ícone do GitHub para ver os repositórios."
      />

      <div className="projects-grid">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 2) * 100}
            className={project.featured ? "span-2" : ""}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
