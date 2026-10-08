import { nav } from '../../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__in">
        <p>© {new Date().getFullYear()} Tulas International School, Dehradun.</p>
        <nav aria-label="Footer" className="footer__links">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
          <a href="https://tis.edu.in/" target="_blank" rel="noopener noreferrer">Official website</a>
        </nav>
        <p>Design concept for assessment. Brand and copy belong to TIS.</p>
      </div>
    </footer>
  );
}
