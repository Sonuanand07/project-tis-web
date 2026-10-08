import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '../../data/content.js';
import ThemeToggle from '../animation/ThemeToggle.jsx';
import Button from '../ui/Button.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="brand" href="#top" onClick={close} aria-label="Tulas International School home">
          <img src="/images/tis-logo.png" alt="" />
          <span>Tulas International<br /><strong>School</strong></span>
        </a>
        <nav id="menu" className={`nav__links${open ? ' is-open' : ''}`} aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={close}>{n.label}</a>
          ))}
        </nav>
        <div className="nav__actions">
          <ThemeToggle />
          <Button href="https://admission.tis.edu.in" target="_blank" rel="noopener noreferrer">Apply now</Button>
          <button type="button" className="nav__burger" aria-expanded={open} aria-controls="menu" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
