import "./Projects.css";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-shell section-pad">
      <div className="section-heading">
        <span className="eyebrow">03 / SELECTED WORK</span>
        <h2>
          A few things I've <em>built & imagined.</em>
        </h2>
        <p className="muted-copy">
          Dari ide pertama sampai detail terakhir. Berikut ruang eksplorasi
          saya.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={`${project.id}-${index}`}>
            <div className="project-art" style={{ padding: 0 }}>
              <img
                src={project.image}
                alt={`Preview ${project.name}`}
                loading="lazy"
                decoding="async"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="project-body">
              <div className="project-meta">
                <span>{project.status}</span>
                <span>/{project.year}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <details>
                <summary>
                  Project details <ArrowUpRight size={16} />
                </summary>
                <p>{project.details}</p>
                <div className="button-row">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live demo ↗
                    </a>
                  )}
                  {project.source && (
                    <a href={project.source} target="_blank" rel="noreferrer">
                      Source code ↗
                    </a>
                  )}
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
