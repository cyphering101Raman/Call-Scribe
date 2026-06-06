/**
 * /components/ui — Barrel Export
 *
 * Import from here in all consumer components:
 *   import { Button, Card, SectionHeader } from '../ui';
 *   import { Button, FeatureCard } from '../../components/ui';
 *
 * Do NOT import individual files directly from /ui/*.jsx in page components.
 * The barrel ensures tree-shaking and makes refactoring painless.
 */

export { default as Container }    from './Container';
export { default as Button }       from './Button';
export { default as Badge }        from './Badge';
export { default as SectionHeader } from './SectionHeader';
export { default as Card }         from './Card';
export { default as Glow }         from './Glow';
export { default as GradientText } from './GradientText';
export { default as FeatureCard }  from './FeatureCard';
export { default as CTABox }       from './CTABox';
export { default as Pill }         from './Pill';
