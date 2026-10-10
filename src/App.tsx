import { useEffect, useState } from 'react';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import DeveloperIdCard from './DeveloperIdCard';
import GitHubSection from './GitHubSection';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';
import { useActiveSection } from '../hooks/useActiveSection';
import { useReducedMotion } from '../hooks/useReducedMotion';

const sectionIds = ['home', 'about', 'skills', 'projects', 'id-card', 'github', 'contact'];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cursorEnabled, setCursorEnabled] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    setCursorEnabled(!reducedMotion && !isTouch);
  }, [reducedMotion]);

  useEffect(() => {
    if (!cursorEnabled) return;

    const dot = document.querySelector('.cursor-dot') as HTMLElement | null;
    const ring = document.querySelector('.cursor-ring') as HTMLElement | null;

    const move = (event: MouseEvent) => {
      if (dot) dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      if (ring) ring.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };

    const hover = (event: Event) => {
      const target = event.target as HTMLElement;
      const interactive = !!target.closest('a, button, input, textarea, .project-card, .skill-card');
      if (ring) ring.classList.toggle('hovered', interactive);
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', hover);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', hover);
    };
  }, [cursorEnabled]);

  return (
    <>
      {loading && (
        <div className="loading-screen">
          <div className="loading-panel">
            <div className="loading-title">HARSH SUTRAKAR</div>
            <div className="loading-sub">INITIALIZING DIGITAL EXPERIENCE...</div>
            <div className="loading-bar"><span style={{ width: '100%' }} /></div>
          </div>
        </div>
      )}

      {cursorEnabled && (
        <>
          <div className="cursor-dot" />
          <div className="cursor-ring" />
        </>
      )}

      <div className="page-shell">
        <Navbar activeId={activeId} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <DeveloperIdCard />
          <GitHubSection />
          <Dashboard />
          <Contact />
        </main>
      </div>
    </>
  );
}
