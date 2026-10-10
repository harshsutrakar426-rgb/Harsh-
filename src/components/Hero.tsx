import { ArrowRight, Github, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { portfolio } from '../data/portfolio';

const phrases = ['WEB DEVELOPER', 'CREATIVE BUILDER', 'DIGITAL EXPLORER'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % phrases.length), 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="section hero-section">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="grid" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">STUDENT DEVELOPER • INDIA</div>
          <h1>
            HARSH
            <span>SUTRAKAR.</span>
          </h1>

          <div className="rotator">
            <span className="label">I BUILD</span>
            <div className="phrase-wrap">
              {phrases.map((phrase, i) => (
                <span key={phrase} className={i === index ? 'phrase visible' : 'phrase'}>{phrase}</span>
              ))}
            </div>
          </div>

          <p>"I build interactive websites and digital experiences that bring ideas to life."</p>

          <div className="cta-row">
            <a href="#projects" className="button primary">
              <span>EXPLORE MY WORK</span>
              <ArrowRight size={16} />
            </a>
            <a href={portfolio.socialLinks.github || '#github'} className="button secondary">
              <Github size={16} />
              <span>VIEW GITHUB</span>
            </a>
          </div>

          {portfolio.profile.availability.enabled && (
            <div className="status-badge">
              <span className="dot" />
              {portfolio.profile.availability.status}
            </div>
          )}
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="glass-panel">
            <div className="panel-tag">creative / build / explore</div>
            <div className="mini-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="floating-chip">
              <Sparkles size={14} />
              <span>digital creator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
