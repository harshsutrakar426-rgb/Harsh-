import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ID CARD', href: '#id-card' },
  { label: 'GITHUB', href: '#github' },
  { label: 'CONTACT', href: '#contact' },
];

type Props = { activeId: string };

export default function Navbar({ activeId }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav-bar" aria-label="Main navigation">
        <a href="#home" className="brand">HS</a>

        <div className="nav-links desktop-only">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeId === item.href.replace('#', '') ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button type="button" className="menu-toggle mobile-only" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {links.map((item) => (
            <a key={item.href} href={item.href} className={activeId === item.href.replace('#', '') ? 'mobile-link active' : 'mobile-link'} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
