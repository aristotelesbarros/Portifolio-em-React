import type { CSSProperties } from "react";
import type { Project } from "../data/projects";
import { GithubIcon, ArrowUpRightIcon } from "./Icons";

export default function ProjectCard({ project }: { project: Project }) {
  const [from, to] = project.accent;
  const style = { "--from": from, "--to": to } as CSSProperties;

  return (
    <article className={`project-card ${project.featured ? "is-featured" : ""}`} style={style}>
      <div className="project-banner">
        <img src={project.image} alt={project.title} className="project-img" />
        <div className="project-scrim" />
        {project.featured && <span className="project-badge">★ Destaque</span>}
        <h3 className="project-title">{project.title}</h3>
      </div>

      <div className="project-body">
        <p className="project-desc">{project.description}</p>

        <ul className="tag-list">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        <div className="project-links">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="link-demo">
              Ver demo
              <ArrowUpRightIcon className="icon-xs" />
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="link-repo"
            aria-label="Ver repositórios no GitHub"
            title="Ver no GitHub"
          >
            <GithubIcon className="icon-sm" />
            Código
          </a>
        </div>
      </div>
    </article>
  );
}
