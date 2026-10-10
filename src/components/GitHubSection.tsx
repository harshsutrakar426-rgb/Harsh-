import { AlertTriangle, Github, Loader2, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { portfolio } from '../data/portfolio';

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
};

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const username = portfolio.github.username;

  useEffect(() => {
    if (!portfolio.github.includeLiveData || !username || username === 'YOUR_GITHUB_USERNAME') return;

    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const cached = sessionStorage.getItem(`gh-${username}`);
        if (cached) {
          setRepos(JSON.parse(cached));
          return;
        }

        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=6`);
        if (!res.ok) throw new Error('GitHub fetch failed');

        const data = (await res.json()) as Repo[];
        setRepos(data);
        sessionStorage.setItem(`gh-${username}`, JSON.stringify(data));
      } catch {
        setError('GitHub data is temporarily unavailable.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [username]);

  return (
    <section id="github" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">CODE. CREATE. CONTRIBUTE.</span>
        </div>

        {username && username !== 'YOUR_GITHUB_USERNAME' ? (
          <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="github-link">
            <Github size={16} />
            <span>GITHUB PROFILE</span>
          </a>
        ) : (
          <div className="github-link disabled">
            <AlertTriangle size={16} />
            <span>Configure GitHub Profile</span>
          </div>
        )}

        {loading && <div className="state-row"><Loader2 size={16} className="spin" /> Loading GitHub repositories...</div>}
        {error && <div className="state-row error"><AlertTriangle size={16} /> {error}</div>}

        {!loading && repos.length > 0 && (
          <div className="repo-grid">
            {repos.map((repo) => (
              <a key={repo.name} href={repo.html_url} target="_blank" rel="noreferrer" className="repo-card">
                <div className="repo-header"><Sparkles size={12} /> {repo.name}</div>
                <p>{repo.description || 'No description provided.'}</p>
                {repo.language && <span className="repo-lang">{repo.language}</span>}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
