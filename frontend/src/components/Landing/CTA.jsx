import { motion } from 'framer-motion';
import { CTABox } from '../ui';
import Container from '../ui/Container';

export default function CTA() {
  return (
    <motion.section
      id="cta"
      className="py-24 border-t border-line-subtle"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
    >
      <Container size="narrow">
        <CTABox
          eyebrow="Get started"
          headline="Your next meeting is already documented."
          subheadline="Upload any recording and get a transcript, structured minutes, and action items in under a minute."
          primaryCTA={{
            label: 'Get Started Free',
            href: '/app',
          }}
          secondaryCTA={{
            label: 'See how it works',
            href:  '#how-it-works',
          }}
          trustSignals={[
            'No credit card required',
            'Secure processing',
            'Your audio stays private',
          ]}
        />
      </Container>
    </motion.section>
  );
}
