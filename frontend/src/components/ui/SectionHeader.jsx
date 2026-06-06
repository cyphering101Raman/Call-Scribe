/**
 * SectionHeader
 *
 * Purpose:
 *   Standardised section introduction block: eyebrow label → headline → subheadline.
 *   Replaces the current pattern of "gradient word in H2" across every section.
 *   The eyebrow (accent-coloured monospace label) carries the emphasis — the H2 is plain.
 *
 * Props:
 *   eyebrow      — short category label, rendered in accent mono uppercase (optional)
 *   headline     — main section headline (required)
 *   subheadline  — supporting description below the headline (optional)
 *   align        — 'center' | 'left' (default: 'center')
 *   as           — heading element: 'h1' | 'h2' | 'h3' (default: 'h2')
 *   className    — additional wrapper classes
 *
 * Usage:
 *   // Centered (features, CTA, how it works)
 *   <SectionHeader
 *     eyebrow="Transcription"
 *     headline="Your words. Instantly."
 *     subheadline="Accurate speaker-labelled transcripts, ready the moment your call ends."
 *   />
 *
 *   // Left-aligned (two-column sections)
 *   <SectionHeader
 *     eyebrow="Output"
 *     headline="See exactly what you get."
 *     subheadline="From raw audio to structured minutes in under 30 seconds."
 *     align="left"
 *   />
 *
 *   // Hero (uses h1, no eyebrow — headline carries the weight)
 *   <SectionHeader
 *     headline="Never lose what was decided."
 *     as="h1"
 *     align="center"
 *   />
 */
import { cn } from '../../lib/utils';

const alignClasses = {
  center: 'text-center items-center',
  left:   'text-left  items-start',
};

const subAlignClasses = {
  center: 'mx-auto text-center',
  left:   '',
};

const headingSize = {
  h1: 'text-4xl md:text-5xl tracking-hero-lg leading-hero',
  h2: 'text-3xl md:text-4xl tracking-heading  leading-heading',
  h3: 'text-2xl md:text-3xl tracking-subhead  leading-heading',
};

export default function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  align = 'center',
  as: Heading = 'h2',
  className,
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        alignClasses[align],
        className
      )}
    >
      {/* Eyebrow — accent mono label, replaces gradient word in headline */}
      {eyebrow && (
        <span className="eyebrow">{eyebrow}</span>
      )}

      {/* Headline — always plain text-ink-primary, never gradient */}
      <Heading
        className={cn(
          'font-bold text-ink-primary',
          headingSize[Heading]
        )}
      >
        {headline}
      </Heading>

      {/* Subheadline */}
      {subheadline && (
        <p
          className={cn(
            'text-lg text-ink-secondary leading-body max-w-[52ch]',
            subAlignClasses[align]
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
