import { Copy, ExternalLink, Github, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { portfolio } from '../data/portfolio';

export default function DeveloperIdCard() {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyProfile = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="id-card" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">DEVELOPER ID CARD</span>
        </div>

        <div className="id-card-wrap">
          <button type="button" className={flipped ? 'id-card flipped' : 'id-card'} onClick={() => setFlipped((v) => !v)}>
            <div className="card-face front">
              <div className="card-holo" />
              <div className="profile-pill">HS</div>
              <div className="front-copy">
                <h3>HARSH SUTRAKAR</h3>
                <p>STUDENT DEVELOPER</p>
              </div>

              <div className="pill-row">
                <span>WEB DEVELOPMENT</span>
                <span>CREATIVE TECHNOLOGY</span>
              </div>

              <div className="info-row">
                <div>
                  <small>LOCATION</small>
                  <strong>MADHYA PRADESH, INDIA</strong>
                </div>
                <div>
                  <small>IDENTITY</small>
                  <strong>DIGITAL CREATOR</strong>
                </div>
              </div>

              <div className="mini-status"><span className="live-dot" /> ACTIVE</div>
            </div>

            <div className="card-face back">
              <div className="back-header"><Sparkles size={14} /> DEVELOPER PROFILE</div>
              <div className="detail-list">
                <div><span>Name:</span> Harsh Sutrakar</div>
                <div><span>Role:</span> Student Developer</div>
                <div><span>Focus:</span> Web Development</div>
                <div><span>Featured Project:</span> Smart Water Security Index</div>
              </div>

              <div className="card-actions">
                <a href="https://smartwatersecurtiy.netlify.app/" target="_blank" rel="noreferrer" className="button tiny primary">
                  <ExternalLink size={14} />
                  <span>VIEW PROJECT</span>
                </a>
                <a href={portfolio.socialLinks.github || '#github'} className="button tiny secondary">
                  <Github size={14} />
                  <span>GITHUB PROFILE</span>
                </a>
                <button type="button" className="button tiny secondary" onClick={(e) => { e.stopPropagation(); copyProfile(); }}>
                  <Copy size={14} />
                  <span>{copied ? 'COPIED' : 'COPY PROFILE LINK'}</span>
                </button>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
