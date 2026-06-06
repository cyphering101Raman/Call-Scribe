/**
 * Badge
 *
 * Purpose:
 *   Inline status and label indicators. Used for feature tags, status
 *   communicators (processing, complete, etc.), and category labels.
 *   NOT pill-shaped — rounded-sm per design.md §7.2.
 *
 * Props:
 *   intent    — 'default' | 'accent' | 'success' | 'warning' | 'danger'
 *   dot       — boolean — prepends a filled colour dot (semantic indicator)
 *   children  — badge label
 *   className — additional classes
 *
 * Usage:
 *   <Badge intent="success">Complete</Badge>
 *   <Badge intent="warning" dot>Processing</Badge>
 *   <Badge intent="accent">New</Badge>
 *   <Badge>Label</Badge>
 */
import { cn } from '../../lib/utils';

const intentClasses = {
  default: 'bg-canvas-raised border-line-subtle    text-ink-secondary',
  accent:  'bg-accent/10   border-accent/25        text-accent',
  success: 'bg-success/10  border-success/25       text-success',
  warning: 'bg-warning/10  border-warning/25       text-warning',
  danger:  'bg-danger/10   border-danger/25        text-danger',
};

const dotClasses = {
  default: 'bg-ink-muted',
  accent:  'bg-accent',
  success: 'bg-success',
  warning: 'bg-warning',
  danger:  'bg-danger',
};

export default function Badge({
  intent = 'default',
  dot = false,
  children,
  className,
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5',
        'px-2 py-0.5 rounded',          // radius-sm (4px) per design.md
        'border',
        'text-xs font-medium font-mono tracking-wide uppercase',
        intentClasses[intent],
        className
      )}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            'inline-block h-1.5 w-1.5 rounded-full shrink-0',
            dotClasses[intent]
          )}
        />
      )}
      {children}
    </span>
  );
}
