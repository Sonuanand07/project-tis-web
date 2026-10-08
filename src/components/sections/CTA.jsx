import Reveal from '../animation/Reveal.jsx';
import Button from '../ui/Button.jsx';

export default function CTA() {
  return (
    <section id="admissions" className="cta">
      <Reveal className="wrap cta__in">
        <h2>Take the next step toward a Tulas education.</h2>
        <p>Explore the school, learn about day and boarding options, and continue to the official Tulas admissions portal.</p>
        <Button href="https://admission.tis.edu.in" target="_blank" rel="noopener noreferrer">Visit the admissions portal</Button>
      </Reveal>
    </section>
  );
}
