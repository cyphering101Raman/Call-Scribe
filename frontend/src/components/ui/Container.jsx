/**
 * Container
 *
 * Purpose:
 *   Enforces consistent max-width and horizontal padding across all sections.
 *   This is the ONLY place where `mx-auto`, `px-*`, and `max-w-*` are defined
 *   for page content. Never hardcode these in section components.
 *
 * Props:
 *   size       — 'narrow' | 'default' | 'wide' | 'full'
 *                narrow  → max-w-3xl  (768px)  — prose, centered text blocks
 *                default → max-w-6xl  (1152px) — standard section content
 *                wide    → max-w-7xl  (1280px) — feature grids, wide tables
 *                full    → no max-w constraint — hero full-bleed elements
 *   as         — HTML element to render (default: 'div')
 *   className  — additional classes
 *
 * Usage:
 *   <Container>                          // standard section content
 *   <Container size="narrow">            // centered text
 *   <Container size="wide" as="section"> // wide feature grid
 */
import { cn } from '../../lib/utils';

const sizes = {
  narrow:  'max-w-3xl',
  default: 'max-w-6xl',
  wide:    'max-w-7xl',
  full:    'max-w-none',
};

export default function Container({
  children,
  size = 'default',
  as: Tag = 'div',
  className,
}) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full',
        'px-4 sm:px-6 lg:px-8',
        sizes[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
