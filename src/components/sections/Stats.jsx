import { facts } from '../../data/content.js';
import Reveal from '../animation/Reveal.jsx';

export default function Stats() {
  return (
    <section className="facts" aria-label="Tulas International School at a glance">
      <div className="wrap facts__grid">
        {facts.map((fact, i) => (
          <Reveal key={fact.label} className="fact" delay={i * 0.06}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
