import { useEffect, useRef } from 'react';

export default function About() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = ref.current?.querySelectorAll('.reveal') ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">MORE THAN JUST CODE.</span>
        </div>

        <div className="about-grid">
          <div className="about-copy reveal">
            <p>"I'm Harsh Sutrakar, a student developer from Madhya Pradesh, India. I enjoy experimenting with web technologies, building interactive experiences, and developing projects that connect technology with real-world challenges."</p>
            <p>One of my key projects is the Smart Water Security Index, a scientific initiative focused on understanding water security in villages and communities.</p>
            <p>I'm continuously learning, building, and improving.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card reveal">
              <span>01</span>
              <h3>BUILD</h3>
              <p>Creating responsive and interactive websites.</p>
            </article>
            <article className="feature-card reveal">
              <span>02</span>
              <h3>EXPLORE</h3>
              <p>Learning new tools and web technologies.</p>
            </article>
            <article className="feature-card reveal">
              <span>03</span>
              <h3>SOLVE</h3>
              <p>Using technology to explore practical problems.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
