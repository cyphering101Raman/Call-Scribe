import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';
import { Button } from './ui';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={[
          'w-full max-w-5xl h-14',
          'flex items-center justify-between',
          'px-5 rounded-2xl border border-line-subtle',
          'transition-[background-color,box-shadow] duration-300',
          scrolled
            ? 'bg-canvas-card/95 backdrop-blur-md shadow-medium'
            : 'bg-canvas-card/70 backdrop-blur-sm shadow-subtle',
        ].join(' ')}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center transition-opacity duration-150 group-hover:opacity-85">
            <Mic size={14} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-sm font-semibold text-ink-primary tracking-tight">
            CallScribe
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7">
          <a
            href="#features"
            className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150"
          >
            How it works
          </a>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150 focus:outline-none">
            Log in
          </button>
          <Button variant="primary" size="sm" pill>
            Try Free
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
