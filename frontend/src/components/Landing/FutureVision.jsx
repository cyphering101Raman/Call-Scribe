import { motion } from 'framer-motion';
import { Bot, Network, Search } from 'lucide-react';
import { SectionHeader } from '../ui';
import Container from '../ui/Container';

// Future capabilities — clearly labelled, intentionally lighter visual weight
const FUTURE_ITEMS = [
  {
    icon:  Bot,
    title: 'AI Call Agent',
    desc:  'An AI that joins your calls directly, captures context, and documents everything without manual recording.',
  },
  {
    icon:  Network,
    title: 'Memory Graph',
    desc:  'A knowledge graph built from your meeting history — connecting topics, decisions, and people over time.',
  },
  {
    icon:  Search,
    title: 'Searchable History',
    desc:  'Query your past conversations like a database. Find any decision, name, or topic across all your meetings.',
  },
];

export default function FutureVision() {
  return (
    <motion.section
      id="roadmap"
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
    >
      <Container>
        <SectionHeader
          eyebrow="Roadmap"
          headline="Where we're headed."
          subheadline="The current product is focused and complete. These capabilities are in development."
          className="mb-12"
        />

        <div className="grid sm:grid-cols-3 gap-4">
          {FUTURE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 p-6 rounded-xl border border-line-subtle border-dashed bg-canvas-elevated"
            >
              {/* Header row — icon + badge */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-9 h-9 rounded-lg bg-canvas-card border border-line-subtle flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-ink-muted" strokeWidth={1.75} />
                </div>
                {/* Coming Soon badge */}
                <span className="shrink-0 px-2 py-0.5 rounded border border-line-subtle bg-canvas-card text-[10px] font-medium font-mono uppercase tracking-wide text-ink-muted">
                  Coming Soon
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-ink-secondary tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
