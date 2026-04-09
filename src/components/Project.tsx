import React, { useMemo, useState } from "react";
import rawProjects from "../data/projects.json";
import "../assets/styles/Project.scss";
import { ProjectItem } from "../types/portfolio";

const projects = rawProjects as ProjectItem[];

function Project() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id ?? "");

  const activeProject = useMemo(() => {
    return projects.find((item) => item.id === selectedProjectId) || projects[0];
  }, [selectedProjectId]);

  if (!activeProject) {
    return null;
  }

  return (
    <div className="projects-container" id="projects">
      <p className="section-kicker">Work</p>
      <h1>Eight systems built and shipped.</h1>
      <p className="section-intro">
        Across property management AI, a biosensor-driven hardware product, and infrastructure
        automation. Each one is here because it ran in production, not because it looked good in a demo.
      </p>

      <div className="projects-shell">
        <aside className="project-list" aria-label="Project selector">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className={`project-tab ${project.id === activeProject.id ? "active" : ""}`}
              onClick={() => setSelectedProjectId(project.id)}
              aria-pressed={project.id === activeProject.id}
            >
              <span className="project-tab-title">{project.title}</span>
              <span className="project-tab-meta">{project.meta}</span>
            </button>
          ))}
        </aside>

        <article className="project-detail" aria-live="polite">
          <h3>{activeProject.title}</h3>
          <p className="project-summary">{activeProject.summary}</p>

          <div className="chip-row">
            {activeProject.metrics.map((metric) => (
              <span key={metric} className="chip">
                {metric}
              </span>
            ))}
          </div>

          <div className="stack-row">
            {activeProject.stack.map((item) => (
              <span key={item} className="stack-chip">
                {item}
              </span>
            ))}
          </div>

          <h4>How it was built</h4>
          <ol className="flow-list">
            {activeProject.flow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <h4>Evidence</h4>
          <ul className="proof-list">
            {activeProject.proof.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}

export default Project;
