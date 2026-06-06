import { motion } from 'framer-motion';
import { Upload, Zap, FileCheck } from 'lucide-react';
import { SectionHeader } from '../ui';
import Container from '../ui/Container';

const STEPS = [
  {
    number: '01',
    icon:   Upload,
    title:  'Upload or Record',
    desc:   'Drop any audio or video file, or record live in your browser. Supports MP3, MP4, WAV, and WebM.',
  },
  {
    number: '02',
    icon:   Zap,
    title:  'AI Transcribes',
    desc:   'The audio is processed and converted into a speaker-labelled transcript with timestamps.',
  },
  {
    number: '03',
    icon:   FileCheck,
    title:  'Get Minutes & Actions',
    desc:   'Receive structured meeting minutes and a clean list of action items with owners — ready to share.',
  },
];

export default function HowItWorks() {
  return (
    <motion.section
      id="how-it-works"
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
    >
      <Container>
        <SectionHeader
          eyebrow="Process"
          headline="Three steps. No manual work."
          subheadline="From recording to deliverables without touching a keyboard."
          className="mb-14"
        />

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px border-t border-dashed border-line-subtle"
          />

          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center gap-5">
              {/* Icon container with step number */}
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-canvas-card border border-line-subtle flex items-center justify-center shadow-subtle">
                  <step.icon size={28} className="text-accent" strokeWidth={1.75} />
                </div>
                {/* Step badge */}
                <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-canvas-elevated border border-line-default flex items-center justify-center">
                  <span className="text-[10px] font-bold font-mono text-ink-muted">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-ink-primary tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-[28ch] mx-auto">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
