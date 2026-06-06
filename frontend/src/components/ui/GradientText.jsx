/**
 * GradientText
 *
 * Purpose:
 *   Applies the brand gradient to inline text.
 *   Per design.md §3.3 and §7.8: permitted on exactly ONE element per page —
 *   the primary headline of the hero section. Use this component for that
 *   one instance. Do NOT use it elsewhere.
 *
 * Props:
 *   as        — element to render (default: 'span') — also accepts 'h1', 'h2', etc.
 *   children  — text content
 *   className — additional classes
 *
 * Usage:
 *   // Correct: wrapping a fragment of the hero H1
 *   <h1>
 *     Stop losing what{' '}
 *     <GradientText>was decided.</GradientText>
 *   </h1>
 *
 *   // Correct: the entire hero headline
 *   <GradientText as="h1" className="text-6xl font-bold tracking-hero-xl">
 *     Never lose what was decided.
 *   </GradientText>
 *
 *   // INCORRECT — do not use in section headers, features, or CTAs:
 *   // <h2>Powerful <GradientText>Features</GradientText> for Teams</h2>
 */
import { cn } from '../../lib/utils';

export default function GradientText({
  as: Tag = 'span',
  children,
  className,
}) {
  return (
    <Tag
      className={cn(
        // .text-gradient from index.css: bg-gradient-text + bg-clip-text + text-transparent
        'text-gradient',
        className
      )}
    >
      {children}
    </Tag>
  );
}
