import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, FileText, ListChecks, Clock, CheckSquare } from 'lucide-react';
import { Button, GradientText } from '../ui';
import Container from '../ui/Container';

// ─── Mock Data — Q4 Launch Review ────────────────────────────────────────────
const TRANSCRIPT = [
  { speaker: 'Alex',  time: '00:00', text: "Let's review the Q4 product launch timeline and confirm our release date." },
  { speaker: 'Sarah', time: '00:08', text: "Backend API integration is complete. All endpoints are tested and stable." },
  { speaker: 'James', time: '00:17', text: "Design assets are finalized. I'll hand them off to engineering by end of day." },
  { speaker: 'Alex',  time: '00:24', text: "Great. Sarah, can you coordinate the final QA pass before Thursday?" },
  { speaker: 'Sarah', time: '00:29', text: "Yes, I'll have the full test report ready by Wednesday evening." },
];

const MINUTES = [
  { label: 'Meeting',    value: 'Q4 Product Launch Review' },
  { label: 'Attendees',  value: 'Alex, Sarah, James' },
  { label: 'Discussion', value: 'The team reviewed the Q4 launch timeline. Backend API integration is confirmed complete with all endpoints tested and stable. Design assets are finalised and ready for engineering handoff today. A final QA pass is scheduled before the November 15th release.' },
  { label: 'Decision',   value: 'November 15th launch date confirmed. Proceed.' },
];

const ACTIONS = [
  { owner: 'Sarah', task: 'Coordinate final QA pass',              due: 'Thursday' },
  { owner: 'James', task: 'Hand off design assets to engineering', due: 'Today' },
  { owner: 'Sarah', task: 'Deliver QA test report',                due: 'Wednesday' },
  { owner: 'Alex',  task: 'Confirm launch date with stakeholders', due: 'Tomorrow' },
];

const SPEAKER_COLOR = {
  Alex:  { ring: 'ring-blue-400/40',    text: 'text-blue-400',    bg: 'bg-blue-400/10' },
  Sarah: { ring: 'ring-violet-400/40',  text: 'text-violet-400',  bg: 'bg-violet-400/10' },
  James: { ring: 'ring-emerald-400/40', text: 'text-emerald-400', bg: 'bg-emerald-400/10' },
};

const TABS = [
  { id: 'transcript', label: 'Transcript', icon: MessageSquare },
  { id: 'minutes',    label: 'Minutes',    icon: FileText },
  { id: 'actions',    label: 'Actions',    icon: ListChecks },
];

// ─── Tab Content Components ───────────────────────────────────────────────────
function TranscriptPanel() {
  return (
    <motion.div
      key="transcript"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="space-y-4"
    >
      {TRANSCRIPT.map((item, i) => {
        const color = SPEAKER_COLOR[item.speaker] ?? { text: 'text-ink-muted', bg: 'bg-canvas-raised' };
        return (
          <div key={i} className="flex gap-3">
            <div className={`w-6 h-6 rounded-full ${color.bg} flex items-center justify-center shrink-0 mt-0.5 ring-1 ${color.ring}`}>
              <span className={`text-[10px] font-bold font-mono ${color.text}`}>
                {item.speaker[0]}
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`text-xs font-semibold ${color.text}`}>{item.speaker}</span>
                <span className="text-[10px] text-ink-muted font-mono flex items-center gap-0.5">
                  <Clock size={8} /> {item.time}
                </span>
              </div>
              <p className="text-xs text-ink-secondary leading-relaxed">{item.text}</p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

function MinutesPanel() {
  return (
    <motion.div
      key="minutes"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="space-y-3"
    >
      {MINUTES.map((item, i) => (
        <div key={i}>
          <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-ink-muted block mb-0.5">
            {item.label}
          </span>
          <p className="text-xs text-ink-secondary leading-relaxed">{item.value}</p>
        </div>
      ))}
    </motion.div>
  );
}

function ActionsPanel() {
  return (
    <motion.div
      key="actions"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="space-y-2"
    >
      {ACTIONS.map((item, i) => (
        <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-canvas-raised border border-line-subtle">
          <CheckSquare size={13} className="text-ink-muted shrink-0 mt-0.5" />
          <div className="min-w-0 flex-1">
            <p className="text-xs text-ink-secondary leading-snug">{item.task}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] text-ink-muted font-mono">{item.owner}</span>
              <span className="text-[10px] text-ink-muted">·</span>
              <span className="text-[10px] text-ink-muted">Due {item.due}</span>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

// ─── Product Preview Panel ────────────────────────────────────────────────────
function ProductPreview() {
  const [activeTab, setActiveTab] = useState('transcript');

  // Auto-cycle through tabs every 3.5 s
  useEffect(() => {
    const ids = TABS.map((t) => t.id);
    const interval = setInterval(() => {
      setActiveTab((current) => ids[(ids.indexOf(current) + 1) % ids.length]);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-canvas-card border border-line-subtle rounded-2xl overflow-hidden shadow-medium">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-line-subtle">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-canvas-raised block" />
            <span className="w-2.5 h-2.5 rounded-full bg-canvas-raised block" />
            <span className="w-2.5 h-2.5 rounded-full bg-canvas-raised block" />
          </div>
          <span className="text-[11px] text-ink-muted font-mono">
            Q4_Launch_Review.mp3 · 28 min
          </span>
        </div>
        {/* Status badge */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-success/10 border border-success/20">
          <span className="w-1.5 h-1.5 rounded-full bg-success block" />
          <span className="text-[10px] font-medium font-mono text-success uppercase tracking-wide">
            Complete
          </span>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex items-center gap-1 px-4 pt-2 border-b border-line-subtle">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={[
                'flex items-center gap-1.5 px-3 py-2 text-[11px] font-medium',
                'border-b-2 -mb-px transition-[color,border-color] duration-150',
                isActive
                  ? 'text-ink-primary border-accent'
                  : 'text-ink-muted border-transparent hover:text-ink-secondary hover:border-line-default',
              ].join(' ')}
            >
              <tab.icon size={11} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content area */}
      <div className="h-64 overflow-y-auto p-4 custom-scrollbar">
        <AnimatePresence mode="wait">
          {activeTab === 'transcript' && <TranscriptPanel />}
          {activeTab === 'minutes'    && <MinutesPanel />}
          {activeTab === 'actions'    && <ActionsPanel />}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Text Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Headline */}
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-hero-lg leading-hero text-ink-primary">
                Your meetings,{' '}
                <GradientText>fully documented.</GradientText>
              </h1>
              <p className="text-lg text-ink-secondary leading-body max-w-[48ch]">
                Upload or record any meeting. CallScribe produces an accurate
                transcript, AI-written minutes, and a list of action items —
                automatically.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="lg"
              >
                Get Started Free
              </Button>
              <Button
                variant="secondary"
                size="lg"
                as="a"
                href="#how-it-works"
              >
                See how it works
              </Button>
            </div>

            {/* Trust line — factual, no fake numbers */}
            <p className="text-sm text-ink-muted">
              No credit card required · Your audio stays private
            </p>
          </motion.div>

          {/* ── Preview Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
          >
            <ProductPreview />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
