import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, FileText, ListChecks, CheckSquare, Clock } from 'lucide-react';
import { SectionHeader } from '../ui';
import Container from '../ui/Container';

// ─── Mock Data — Q3 Infrastructure Migration (different meeting from Hero) ────
const TRANSCRIPT = [
  { speaker: 'Alex',  time: '00:00', text: "Let's go through the Q3 infrastructure migration and settle on an AWS strategy." },
  { speaker: 'Sarah', time: '00:06', text: "I've completed the cluster assessment. We need to decide on instance types before we can proceed." },
  { speaker: 'James', time: '00:14', text: "Graviton instances would give us roughly 20% savings on compute costs." },
  { speaker: 'Alex',  time: '00:20', text: "Good. Sarah, can you run benchmarks on Graviton by Friday?" },
  { speaker: 'Sarah', time: '00:25', text: "Yes. I'll prepare the instance proposal alongside the results." },
  { speaker: 'James', time: '00:31', text: "I'll have the migration roadmap documented for the engineering team by next week." },
];

const MINUTES_TEXT = `Meeting: Q3 Infrastructure Migration\nAttendees: Alex, Sarah, James\n\nThe team discussed the Q3 AWS cluster migration plan, focusing on instance type selection. James proposed adopting Graviton instances to achieve an estimated 20% reduction in compute costs.\n\nSarah will conduct performance benchmarks to validate the projected savings before a final decision is committed.\n\nDecision: Evaluate Graviton instances. Final decision pending benchmark results.`;

const ACTIONS = [
  { owner: 'Sarah', task: 'Run Graviton instance benchmarks',   due: 'Friday' },
  { owner: 'Sarah', task: 'Prepare final instance proposal',    due: 'Next week' },
  { owner: 'James', task: 'Document migration roadmap',         due: 'Next week' },
  { owner: 'Alex',  task: 'Schedule budget review follow-up',   due: 'Friday' },
];

const SPEAKER_COLOR = {
  Alex:  { text: 'text-blue-400',    bg: 'bg-blue-400/10',    ring: 'ring-blue-400/30' },
  Sarah: { text: 'text-violet-400',  bg: 'bg-violet-400/10',  ring: 'ring-violet-400/30' },
  James: { text: 'text-emerald-400', bg: 'bg-emerald-400/10', ring: 'ring-emerald-400/30' },
};

const TABS = [
  { id: 'transcript', label: 'Transcript', icon: MessageSquare },
  { id: 'minutes',    label: 'Minutes',    icon: FileText },
  { id: 'actions',    label: 'Actions',    icon: ListChecks },
];

// ─── Column content ───────────────────────────────────────────────────────────
function TranscriptColumn() {
  return (
    <div className="space-y-4 h-full overflow-y-auto custom-scrollbar pr-1">
      {TRANSCRIPT.map((item, i) => {
        const color = SPEAKER_COLOR[item.speaker] ?? { text: 'text-ink-muted', bg: 'bg-canvas-raised', ring: 'ring-line-subtle' };
        return (
          <div key={i} className="flex gap-3">
            <div className={`w-6 h-6 rounded-full ${color.bg} flex items-center justify-center shrink-0 mt-0.5 ring-1 ${color.ring}`}>
              <span className={`text-[10px] font-bold font-mono ${color.text}`}>{item.speaker[0]}</span>
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
    </div>
  );
}

function MinutesColumn() {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar pr-1">
      <div className="whitespace-pre-line text-xs text-ink-secondary leading-relaxed font-mono">
        {MINUTES_TEXT}
      </div>
    </div>
  );
}

function ActionsColumn() {
  return (
    <div className="space-y-2 h-full overflow-y-auto custom-scrollbar pr-1">
      {ACTIONS.map((item, i) => (
        <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-canvas-raised border border-line-subtle">
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
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ProductShowcase() {
  // Mobile tab state — desktop shows all three columns
  const [mobileTab, setMobileTab] = useState('transcript');

  return (
    <motion.section
      id="product-output"
      className="py-20 bg-canvas-elevated border-y border-line-subtle"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
    >
      <Container>
        {/* Section header */}
        <SectionHeader
          eyebrow="Output"
          headline="From audio to structured output."
          subheadline="One recording. Three deliverables. All in seconds."
          className="mb-10"
        />

        {/* ── Output Panel ── */}
        <div className="bg-canvas-card border border-line-subtle rounded-2xl overflow-hidden shadow-medium">

          {/* Panel header — source file info */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-line-subtle">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-canvas-raised block" />
                <span className="w-2.5 h-2.5 rounded-full bg-canvas-raised block" />
                <span className="w-2.5 h-2.5 rounded-full bg-canvas-raised block" />
              </div>
              <span className="text-xs text-ink-muted font-mono">
                Q3_Infra_Migration.mp3 · 32 min · 3 speakers
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-success/10 border border-success/20">
              <span className="w-1.5 h-1.5 rounded-full bg-success block" />
              <span className="text-[10px] font-medium font-mono text-success uppercase tracking-wide">
                Complete
              </span>
            </div>
          </div>

          {/* ── Desktop: three visible columns ── */}
          <div className="hidden lg:grid lg:grid-cols-3 divide-x divide-line-subtle">
            {TABS.map((tab) => (
              <div key={tab.id} className="flex flex-col">
                {/* Column header */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-line-subtle">
                  <tab.icon size={13} className="text-ink-muted" />
                  <span className="text-xs font-semibold text-ink-secondary uppercase tracking-widest font-mono">
                    {tab.label}
                  </span>
                </div>
                {/* Column content */}
                <div className="p-5 h-72">
                  {tab.id === 'transcript' && <TranscriptColumn />}
                  {tab.id === 'minutes'    && <MinutesColumn />}
                  {tab.id === 'actions'    && <ActionsColumn />}
                </div>
              </div>
            ))}
          </div>

          {/* ── Mobile: tab-based ── */}
          <div className="lg:hidden">
            {/* Mobile tab bar */}
            <div className="flex items-center border-b border-line-subtle">
              {TABS.map((tab) => {
                const isActive = mobileTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setMobileTab(tab.id)}
                    className={[
                      'flex-1 flex items-center justify-center gap-1.5',
                      'py-3 text-xs font-medium',
                      'border-b-2 -mb-px transition-[color,border-color] duration-150',
                      isActive
                        ? 'text-ink-primary border-accent'
                        : 'text-ink-muted border-transparent',
                    ].join(' ')}
                  >
                    <tab.icon size={12} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {/* Mobile content */}
            <div className="p-5 h-72">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="h-full"
                >
                  {mobileTab === 'transcript' && <TranscriptColumn />}
                  {mobileTab === 'minutes'    && <MinutesColumn />}
                  {mobileTab === 'actions'    && <ActionsColumn />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </Container>
    </motion.section>
  );
}
