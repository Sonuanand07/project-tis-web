import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme.jsx';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';
  return (
    <button type="button" className="toggle" onClick={toggle} role="switch" aria-checked={dark} aria-label="Dark mode">
      <motion.span className="toggle__knob" animate={{ x: dark ? 24 : 0 }} transition={{ type: 'spring', stiffness: 500, damping: 30 }}>
        {dark ? <Moon size={14} /> : <Sun size={14} />}
      </motion.span>
    </button>
  );
}
