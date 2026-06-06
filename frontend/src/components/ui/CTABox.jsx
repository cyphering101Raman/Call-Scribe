/**
 * CTABox
 *
 * Purpose:
 *   Structured content block for conversion sections. Manages the layout of
 *   eyebrow → headline → subheadline → CTA buttons → trust signals.
 *   This is the inner content block, not the section wrapper.
 *   The section wrapper (with background, borders, padding) lives in the page.
 *
 * Props:
 *   eyebrow       — category label (optional, rendered as .eyebrow)
 *   headline      — primary conversion headline (required)
 *   subheadline   — supporting sentence below headline (optional)
 *   primaryCTA    — { label: string, onClick?: fn, href?: string, icon?: LucideIcon }
 *   secondaryCTA  — { label: string, onClick?: fn, href?: string } (optional)
 *   trustSignals  — string[] — short trust labels shown below buttons (optional)
 *                   e.g. ['SOC2 Certified', 'GDPR Compliant', 'No credit card required']
 *   className     — additional wrapper classes
 *
 * Design rules (design.md §7.5):
 *   - Layout is always centered
 *   - Primary CTA: Button variant="primary" size="lg"
 *   - Secondary CTA: Button variant="ghost" size="lg"
 *   - Trust signals: full opacity, monospace, ink-muted — NOT at 50% opacity
 *   - No glass card wrapper — that's the parent section's responsibility
 *
 * Usage:
 *   <CTABox
 *     eyebrow="Get started"
 *     headline="Your meetings, already documented."
 *     subheadline="No setup. No integrations. Upload audio and get structured minutes in under a minute."
 *     primaryCTA={{ label: 'Try CallScribe Free', href: '/signup' }}
 *     secondaryCTA={{ label: 'See how it works' }}
 *     trustSignals={['SOC2 Certified', 'GDPR Compliant', 'No credit card required']}
 *   />
 */
import Button from './Button';
import { cn } from '../../lib/utils';

export default function CTABox({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  trustSignals = [],
  className,
}) {
  return (
    <div className={cn('flex flex-col items-center text-center gap-6', className)}>
      {/* Eyebrow */}
      {eyebrow && (
        <span className="eyebrow">{eyebrow}</span>
      )}

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-bold tracking-heading leading-heading text-ink-primary max-w-2xl">
        {headline}
      </h2>

      {/* Subheadline */}
      {subheadline && (
        <p className="text-lg text-ink-secondary leading-body max-w-[50ch]">
          {subheadline}
        </p>
      )}

      {/* CTA Buttons */}
      {(primaryCTA || secondaryCTA) && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2">
          {primaryCTA && (
            <Button
              variant="primary"
              size="lg"
              icon={primaryCTA.icon}
              iconPosition="right"
              href={primaryCTA.href}
              onClick={primaryCTA.onClick}
            >
              {primaryCTA.label}
            </Button>
          )}
          {secondaryCTA && (
            <Button
              variant="ghost"
              size="lg"
              href={secondaryCTA.href}
              onClick={secondaryCTA.onClick}
            >
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      )}

      {/* Trust Signals — full opacity, not decorative */}
      {trustSignals.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-2">
          {trustSignals.map((signal, i) => (
            <span
              key={i}
              className="font-mono text-xs font-medium uppercase tracking-widest text-ink-muted"
            >
              {signal}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
