/**
 * Pill
 *
 * Purpose:
 *   Inline announcement strip / status indicator. Used in the Hero for
 *   product announcements (e.g. "Now in beta"). Also used for the
 *   live recording state indicator.
 *
 *   Distinct from Badge:
 *   - Badge → uppercase monospace, rectangular, semantic status
 *   - Pill  → sentence-case, rounded-full, informational strip with optional live dot
 *
 * Props:
 *   dot       — boolean — shows animated ping dot (use for LIVE/RECORDING state only)
 *   dotColor  — 'accent' | 'success' | 'danger' | 'warning' (default: 'accent')
 *   children  — pill label content
 *   className — additional classes
 *
 * Usage:
 *   // Product announcement in Hero
 *   <Pill>
 *     Accurate transcripts for any meeting format
 *   </Pill>
 *
 *   // Live recording indicator
 *   <Pill dot dotColor="danger">
 *     Recording...
 *   </Pill>
 *
 *   // Processing state
 *   <Pill dot dotColor="warning">
 *     Transcribing audio
 *   </Pill>
 */
import { cn } from '../../lib/utils';

const dotColorClasses = {
  accent:  'bg-accent',
  success: 'bg-success',
  danger:  'bg-danger',
  warning: 'bg-warning',
};

export default function Pill({
  dot = false,
  dotColor = 'accent',
  children,
  className,
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2',
        'px-3 py-1.5 rounded-full',
        'bg-canvas-card border border-line-subtle',
        'text-sm font-medium text-ink-secondary',
        'select-none',
        className
      )}
    >
      {dot && (
        // Animated ping — permitted ONLY for live/recording state per design.md §9
        <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              dotColorClasses[dotColor]
            )}
          />
          <span
            className={cn(
              'relative inline-flex rounded-full h-1.5 w-1.5',
              dotColorClasses[dotColor]
            )}
          />
        </span>
      )}
      {children}
    </div>
  );
}
