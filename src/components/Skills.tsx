import { Code2, Layers3, Sparkles } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const icons = {
  Frontend: Code2,
  UX: Layers3,
  Workflow: Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">MY DIGITAL TOOLKIT</span>
        </div>

        <div className="skills-grid">
          {portfolio.skills.map((skill) => {
            const Icon = icons[skill.category as keyof typeof icons] ?? Code2;
            return (
              <article key={skill.name} className="skill-card reveal">
                <div className="skill-icon"><Icon size={18} /></div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
