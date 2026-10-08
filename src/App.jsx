import { ThemeProvider } from './hooks/useTheme.jsx';
import ScrollProgress from './components/animation/ScrollProgress.jsx';
import CustomCursor from './components/animation/CustomCursor.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import Stats from './components/sections/Stats.jsx';
import About from './components/sections/About.jsx';
import Programs from './components/sections/Programs.jsx';
import Approach from './components/sections/Approach.jsx';
import CTA from './components/sections/CTA.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Approach />
        <CTA />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
