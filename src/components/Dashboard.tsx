import { Cpu, FolderGit2, Lightbulb, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { portfolio } from '../data/portfolio';

export default function Dashboard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">INTERACTIVE DASHBOARD</span>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="dash-icon"><FolderGit2 size={18} /></div>
            <div>
              <small>Featured project</small>
              <strong>{portfolio.dashboard.featuredProject}</strong>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dash-icon"><Cpu size={18} /></div>
            <div>
              <small>Selected technologies</small>
              <strong>{portfolio.dashboard.technologies.join(' • ')}</strong>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dash-icon"><TrendingUp size={18} /></div>
            <div>
              <small>Project status</small>
              <strong>{portfolio.dashboard.status}</strong>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dash-icon"><Lightbulb size={18} /></div>
            <div>
              <small>Current learning</small>
              <strong>{portfolio.dashboard.learning.join(' • ')}</strong>
            </div>
          </div>

          <div className="dashboard-card wide">
            <div className="dash-icon"><Cpu size={18} /></div>
            <div>
              <small>Local time</small>
              <strong>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
