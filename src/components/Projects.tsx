import { ArrowUpRight, Github, Link2 } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">SELECTED PROJECTS</span>
        </div>

        <div className="project-grid">
          {portfolio.projects.map((project, index) => (
            <article key={project.title} className="project-card reveal" style={{ animationDelay: `${index * 120}ms` }}>
              <div className="project-art" style={{ background: `linear-gradient(135deg, ${project.accent}, rgba(255,255,255,0.04))` }} />
              <div className="project-body">
                <span className="project-status">{project.status}</span>
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-copy">{project.description}</p>

                <div className="feature-pills">
                  {project.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>

                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button tiny primary">
                      <span>LIVE DEMO</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="button tiny secondary">
                      <Github size={14} />
                      <span>REPO</span>
                    </a>
                  )}
                  <a href="#projects" className="button tiny secondary">
                    <Link2 size={14} />
                    <span>PROJECT DETAILS</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
