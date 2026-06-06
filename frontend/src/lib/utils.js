/**
 * cn — className merger utility
 *
 * Merges class name strings, filtering falsy values and collapsing extra whitespace.
 * Zero dependencies — no clsx or tailwind-merge required.
 *
 * Usage:
 *   cn('base-class', condition && 'conditional-class', className)
 */
export function cn(...inputs) {
  return inputs
    .flat(Infinity)
    .filter((x) => typeof x === 'string' && x.trim().length > 0)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
