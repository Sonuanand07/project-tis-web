import { motion, useReducedMotion } from 'framer-motion';
import Button from '../ui/Button.jsx';

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="hero">
      <div className="wrap hero__in">
        <div className="hero__copy">
          <p className="badge">Tulas International School · Dehradun</p>
          <h1>
            {['What makes', 'school', 'awesome?'].map((w, i) => (
              <motion.span
                key={w}
                className="hero__word"
                initial={reduce ? false : { opacity: 0, y: '60%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: 'easeOut' }}
              >
                {w}{' '}
              </motion.span>
            ))}
          </h1>
          <p className="hero__lead">Learning that feels like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover.</p>
          <div className="hero__cta">
            <Button href="#admissions">Explore admissions</Button>
            <Button href="#programs" variant="ghost">Explore life at Tulas</Button>
          </div>
          <p className="hero__note">Admissions enquiries are welcome</p>
        </div>
        <figure className="hero__visual">
          <span className="hero__halo" aria-hidden="true" />
          <img
            className="hero__photo"
            src="/images/learning-music.webp"
            alt="Tulas students making music together in a group class"
            width="1200"
            height="734"
            fetchpriority="high"
          />
          <figcaption className="hero__caption">
            <span className="hero__caption-mark" aria-hidden="true">✳</span>
            <span>Curiosity in action<br /><strong>Every day at Tulas</strong></span>
          </figcaption>
          <span className="hero__stamp" aria-hidden="true">LEARN · EXPLORE · GROW</span>
        </figure>
      </div>
      <div className="hero__shape" aria-hidden="true" />
    </section>
  );
}
