import { motion } from 'framer-motion';
import { Mic, FileText, ListChecks, Users, Download, ShieldCheck } from 'lucide-react';
import { SectionHeader, FeatureCard } from '../ui';
import Container from '../ui/Container';

// Only current capabilities — no future features.
const FEATURES = [
  {
    icon:  Mic,
    title: 'Accurate Transcription',
    description:
      'Speaker-labelled transcripts with timestamps. Technical vocabulary and jargon handled without custom training.',
  },
  {
    icon:  FileText,
    title: 'AI Meeting Minutes',
    description:
      'Structured MoM generated from the transcript — attendees, discussion summary, and decisions. Business-ready format.',
  },
  {
    icon:  ListChecks,
    title: 'Action Item Extraction',
    description:
      'Tasks, assigned owners, and deadlines identified directly from the conversation. Nothing slips through.',
  },
  {
    icon:  Users,
    title: 'Speaker Detection',
    description:
      'Multiple speakers identified and consistently labelled throughout the transcript without manual tagging.',
  },
  {
    icon:  Download,
    title: 'PDF Export',
    description:
      'Download structured meeting minutes as a formatted PDF in one click. Ready to share immediately.',
  },
  {
    icon:  ShieldCheck,
    title: 'Secure Processing',
    description:
      'Audio is processed securely. Your conversations are not used for training or shared with third parties.',
  },
];

export default function Features() {
  return (
    <motion.section
      id="features"
      className="py-20 bg-canvas-elevated border-y border-line-subtle"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
    >
      <Container>
        <SectionHeader
          eyebrow="Features"
          headline="Everything your meeting produces."
          subheadline="Six outputs. All generated from the same audio. No setup required."
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
