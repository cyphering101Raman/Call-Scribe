import Navbar          from '../components/Navbar';
import Hero            from '../components/Landing/Hero';
import ProductShowcase from '../components/Landing/ProductShowcase';
import HowItWorks      from '../components/Landing/HowItWorks';
import Features        from '../components/Landing/Features';
import FutureVision    from '../components/Landing/FutureVision';
import CTA             from '../components/Landing/CTA';
import Footer          from '../components/Landing/Footer';
import { Glow }        from '../components/ui';

export default function Home() {
  return (
    <div className="bg-canvas-base min-h-screen text-ink-primary font-sans overflow-x-hidden selection:bg-accent/20 selection:text-ink-primary">

      {/*
        Page-level ambient glow — maximum 2 orbs, positioned at page edges.
        Fixed so they don't scroll with content. accent/5% opacity only.
      */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <Glow position="top-right" size="lg" />
        <Glow position="bottom-left" size="md" />
      </div>

      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Main Content ── */}
      <main>
        {/* 1. Hook — what is it + product preview */}
        <Hero />

        {/* 2. Proof — what do I get (realistic output showcase) */}
        <ProductShowcase />

        {/* 3. Process — how does it work */}
        <HowItWorks />

        {/* 4. Depth — full feature list */}
        <Features />

        {/* 5. Direction — coming soon, visually lighter */}
        <FutureVision />

        {/* 6. Conversion — single focused CTA */}
        <CTA />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
