/**
 * Button
 *
 * Purpose:
 *   Single source of truth for all interactive buttons in the application.
 *   Three variants, three sizes. Handles loading state, disabled state,
 *   left/right icon placement, and renders as <a> when href is provided.
 *
 * Props:
 *   variant      — 'primary' | 'secondary' | 'ghost'
 *   size         — 'sm' | 'md' | 'lg'
 *   icon         — Lucide icon component (optional)
 *   iconPosition — 'left' | 'right' (default: 'left')
 *   loading      — boolean — shows spinner, disables interaction
 *   disabled     — boolean
 *   pill         — boolean — rounds to full pill shape (Navbar CTA only)
 *   href         — renders as <a> tag when provided
 *   as           — override element type (default: 'button')
 *   type         — button type attr ('button' | 'submit' | 'reset')
 *   onClick      — click handler
 *   className    — additional classes
 *
 * Usage:
 *   <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
 *     Get Started Free
 *   </Button>
 *
 *   <Button variant="secondary" size="md">
 *     Watch Demo
 *   </Button>
 *
 *   <Button variant="primary" size="md" pill href="/signup">
 *     Start Free
 *   </Button>
 *
 *   <Button variant="primary" loading>Submitting...</Button>
 */
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const variantClasses = {
  primary: cn(
    'bg-accent text-white',
    'hover:bg-accent-hover',
    'focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-base',
    'shadow-glow-sm hover:shadow-glow'
  ),
  secondary: cn(
    'bg-transparent text-ink-primary',
    'border border-line-default',
    'hover:bg-canvas-raised hover:border-line-strong',
    'focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-base'
  ),
  ghost: cn(
    'bg-transparent text-ink-secondary',
    'hover:bg-canvas-card hover:text-ink-primary',
    'focus-visible:ring-2 focus-visible:ring-line-default/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-base'
  ),
};

const sizeClasses = {
  sm: 'h-8  px-3   text-xs  gap-1.5 rounded-md',
  md: 'h-10 px-5   text-sm  gap-2   rounded-md',
  lg: 'h-12 px-6   text-base gap-2.5 rounded-md',
};

const iconSizes = { sm: 14, md: 16, lg: 18 };

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  pill = false,
  onClick,
  className,
  as: Tag = 'button',
  href,
  type = 'button',
  ...props
}) {
  const isDisabled = disabled || loading;
  const Comp = href ? 'a' : Tag;
  const iconSize = iconSizes[size];

  return (
    <Comp
      href={href}
      type={!href ? type : undefined}
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={cn(
        // Layout
        'inline-flex items-center justify-center select-none font-semibold',
        // Transitions — explicit properties only, never transition-all
        'transition-[background-color,border-color,box-shadow,opacity,transform]',
        'duration-150 ease-out',
        // Focus
        'focus:outline-none',
        // Active
        'active:scale-[0.98]',
        // Disabled
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
        // Variant
        variantClasses[variant],
        // Size + default radius
        sizeClasses[size],
        // Pill override (Navbar CTA only — see design.md §7.1)
        pill && 'rounded-full',
        className
      )}
      {...props}
    >
      {/* Left slot: spinner or left icon */}
      {loading ? (
        <Loader2 size={iconSize} className="animate-spin shrink-0" />
      ) : Icon && iconPosition === 'left' ? (
        <Icon size={iconSize} className="shrink-0" />
      ) : null}

      {/* Label */}
      {children && <span className="leading-none">{children}</span>}

      {/* Right icon (only when not loading) */}
      {!loading && Icon && iconPosition === 'right' && (
        <Icon size={iconSize} className="shrink-0" />
      )}
    </Comp>
  );
}
