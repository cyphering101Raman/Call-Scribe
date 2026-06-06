/**
 * Glow
 *
 * Purpose:
 *   Replaces the 14 hand-coded background glow blobs in the current codebase.
 *   Renders a single ambient colour orb. Rules per design.md §8:
 *   - Maximum 2 visible at any scroll position
 *   - Accent colour only, at 5% opacity
 *   - Maximum 600px size
 *   - Always pointer-events-none and aria-hidden
 *
 * Props:
 *   position  — 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
 *   size      — 'sm' (300px) | 'md' (500px) | 'lg' (600px)
 *   className — additional positioning or opacity overrides
 *
 * Wrapper requirement:
 *   The parent element MUST have `position: relative` (or absolute/fixed)
 *   and `overflow-hidden` to clip the orb correctly.
 *
 * Usage:
 *   // In a page-level wrapper — two orbs max
 *   <div className="relative overflow-hidden">
 *     <Glow position="top-right" size="lg" />
 *     <Glow position="bottom-left" size="md" />
 *     {children}
 *   </div>
 *
 *   // Inside a specific section (accent-heavy section only)
 *   <section className="relative overflow-hidden py-20">
 *     <Glow position="center" size="md" />
 *     <Container>...</Container>
 *   </section>
 */
import { cn } from '../../lib/utils';

const positionClasses = {
  'top-left':     'top-0 left-0 -translate-x-1/3 -translate-y-1/3',
  'top-right':    'top-0 right-0 translate-x-1/3 -translate-y-1/3',
  'bottom-left':  'bottom-0 left-0 -translate-x-1/3 translate-y-1/3',
  'bottom-right': 'bottom-0 right-0 translate-x-1/3 translate-y-1/3',
  'center':       'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
};

const sizeClasses = {
  sm: 'w-[300px] h-[300px]',
  md: 'w-[500px] h-[500px]',
  lg: 'w-[600px] h-[600px]',
};

export default function Glow({
  position = 'top-right',
  size = 'md',
  className,
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        // Structure
        'pointer-events-none absolute rounded-full',
        // Colour — accent at 5% opacity only
        'bg-accent/[0.05]',
        // Blur — max 120px per design.md
        'blur-[120px]',
        // Position
        positionClasses[position],
        // Size
        sizeClasses[size],
        className
      )}
    />
  );
}
