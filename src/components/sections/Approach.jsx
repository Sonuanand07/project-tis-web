import { Compass, Lightbulb, Sparkles } from 'lucide-react';
import Reveal from '../animation/Reveal.jsx';

const principles = [
  { icon: Compass, title: 'Curiosity leads', text: 'Questions are the beginning of a great learning adventure.' },
  { icon: Lightbulb, title: 'Creativity thrives', text: 'Ideas grow when students have the space to make and imagine.' },
  { icon: Sparkles, title: 'Every day brings something new', text: 'Each discovery helps students shape their own future.' },
];

export default function Approach() {
  return (
    <section id="approach" className="section approach">
      <div className="wrap approach__in">
        <Reveal className="approach__intro">
          <p className="eyebrow">The Tulas idea</p>
          <h2>That’s what makes school awesome.</h2>
          <p>When students feel inspired, they do more than learn. They grow, explore, and begin to shape their own futures.</p>
        </Reveal>
        <div className="principles">
          {principles.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} className="principle" delay={i * 0.08}>
              <span className="principle__icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
