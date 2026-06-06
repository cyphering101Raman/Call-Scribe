/**
 * FeatureCard
 *
 * Purpose:
 *   Standardised card for the features grid. Icon → title → description.
 *   Built on top of <Card interactive> — icon and border transition to accent
 *   on hover via CSS group targeting.
 *
 * Props:
 *   icon        — Lucide icon component (required)
 *   title       — feature name (required)
 *   description — one to two sentences, max ~40 characters per line (required)
 *   className   — additional wrapper classes
 *
 * Design rules:
 *   - Icon container: 40×40px, canvas-raised background, rounded-lg (12px)
 *   - Icon: 20px, ink-muted at rest → accent on hover
 *   - Title: 16px / Inter 600 / ink-primary
 *   - Description: 14px / Inter 400 / ink-secondary — max 40ch
 *   - Card: interactive hover (bg, border, shadow lift)
 *
 * Usage:
 *   import { Mic, Zap, ListChecks } from 'lucide-react';
 *
 *   <FeatureCard
 *     icon={Mic}
 *     title="Real-time Transcription"
 *     description="Speaker-labelled transcripts appear as your meeting progresses. No post-processing delay."
 *   />
 *
 *   // In a grid:
 *   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
 *     {features.map(f => <FeatureCard key={f.title} {...f} />)}
 *   </div>
 */
import Card from './Card';
import { cn } from '../../lib/utils';

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}) {
  return (
    <Card
      interactive
      className={cn('group flex flex-col gap-4', className)}
    >
      {/* Icon container */}
      <div
        className={cn(
          'w-10 h-10 rounded-lg flex items-center justify-center shrink-0',
          'bg-canvas-raised border border-line-subtle',
          // Accent transition on group hover
          'transition-[background-color,border-color] duration-200',
          'group-hover:bg-accent/10 group-hover:border-accent/25'
        )}
      >
        <Icon
          size={20}
          className={cn(
            'text-ink-muted shrink-0',
            'transition-colors duration-200',
            'group-hover:text-accent'
          )}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-ink-primary tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-sm text-ink-secondary leading-relaxed max-w-[40ch]">
          {description}
        </p>
      </div>
    </Card>
  );
}
