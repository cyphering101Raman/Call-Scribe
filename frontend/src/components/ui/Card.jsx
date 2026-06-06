/**
 * Card
 *
 * Purpose:
 *   Base surface container. Solid opaque background — no glassmorphism.
 *   Three variants that communicate increasing levels of interaction/emphasis.
 *
 * Props:
 *   interactive — boolean — adds hover states (background, border, shadow lift)
 *   accent      — boolean — adds accent border + glow (selected/active state)
 *   padding     — 'none' | 'sm' | 'md' | 'lg' (default: 'md')
 *   as          — HTML element (default: 'div')
 *   className   — additional classes
 *   children    — card content
 *
 * Note:
 *   Do NOT combine `interactive` and `accent` — accent represents a static
 *   selected state. If the card is interactive AND currently selected,
 *   apply `accent` only (it visually overrides interactive hover styles).
 *
 * Usage:
 *   // Static content card
 *   <Card>
 *     <p>Content</p>
 *   </Card>
 *
 *   // Clickable card (feature grid, etc.)
 *   <Card interactive onClick={handleClick}>
 *     <p>Content</p>
 *   </Card>
 *
 *   // Active/selected state card (tab panel, active step)
 *   <Card accent>
 *     <p>Selected content</p>
 *   </Card>
 *
 *   // Compact padding
 *   <Card padding="sm">
 *     <p>Compact</p>
 *   </Card>
 */
import { cn } from '../../lib/utils';

const paddingClasses = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
};

export default function Card({
  interactive = false,
  accent = false,
  padding = 'md',
  as: Tag = 'div',
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        // Base surface — solid, opaque, no blur
        'bg-canvas-card rounded-xl border shadow-subtle',
        // Border state
        accent
          ? 'border-accent/25 shadow-glow-sm'
          : 'border-line-subtle',
        // Interactive hover — only when `interactive` and not `accent`
        interactive && !accent && [
          'cursor-pointer',
          'transition-[background-color,border-color,box-shadow]',
          'duration-200 ease-out',
          'hover:bg-canvas-raised',
          'hover:border-line-default',
          'hover:shadow-medium',
        ],
        // Padding
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
