import Reveal from '../animation/Reveal.jsx';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about">
        <Reveal className="about__visual">
          <img
            src="/images/campus-sport.webp"
            alt="Tulas students taking part in a group activity on campus"
            width="640"
            height="360"
            loading="lazy"
            decoding="async"
          />
          <span className="about__image-label">Make room for wonder</span>
        </Reveal>
        <div className="about__copy">
          <Reveal as="p" className="eyebrow">A little more Tulas</Reveal>
          <Reveal as="h2">A place to learn, explore and shape what comes next.</Reveal>
          <Reveal delay={0.1}>
            <p>At Tulas, we believe a truly unforgettable school experience makes learning feel like an adventure. Students are encouraged to follow their curiosity, find creative ways to express themselves, and discover something new every day.</p>
            <p>Based in Dehradun, Tulas International School is a co-educational CBSE school offering day and boarding options.</p>
            <a className="text-link" href="https://tis.edu.in/" target="_blank" rel="noopener noreferrer">
              Discover Tulas <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
