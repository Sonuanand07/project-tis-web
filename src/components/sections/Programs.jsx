import { programs } from '../../data/content.js';
import Reveal from '../animation/Reveal.jsx';

export default function Programs() {
  return (
    <section id="programs" className="section section--alt">
      <div className="wrap">
        <div className="section__heading">
          <div>
            <Reveal as="p" className="eyebrow">Learning beyond the lesson</Reveal>
            <Reveal as="h2">Discover what you love.</Reveal>
          </div>
          <Reveal>
            <p>There is more than one way to learn. At Tulas, every day can bring a new interest, a new challenge, or a new reason to feel proud.</p>
          </Reveal>
        </div>
        <ul className="cards">
          {programs.map((p, i) => (
            <Reveal as="li" key={p.title} className="card" delay={i * 0.08}>
              <img src={p.image} alt={p.alt} width="900" height="900" style={p.position ? { objectPosition: p.position } : undefined} loading="lazy" decoding="async" />
              <div className="card__body">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
