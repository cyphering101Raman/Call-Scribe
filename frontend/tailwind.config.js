/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── Color Tokens ─────────────────────────────────────────────────────────
      colors: {
        // Background elevation layer
        canvas: {
          base:     '#09090B', // Page root
          elevated: '#111115', // Section alternates, CTA background
          card:     '#18181B', // Card backgrounds, panels
          raised:   '#1F1F23', // Hover states, active panels, code blocks
        },
        // Text hierarchy
        ink: {
          primary:   '#FAFAFA', // Headings, labels, primary copy
          secondary: '#A1A1AA', // Body, descriptions
          muted:     '#52525B', // Placeholders, timestamps, meta
          inverse:   '#09090B', // Text on light surfaces (if ever used)
        },
        // Border scale
        line: {
          subtle:  '#27272A', // Default card borders, section dividers
          default: '#3F3F46', // Focused inputs, active nav items
          strong:  '#52525B', // Emphasized separators, strong outlines
        },
        // Accent — single colour, no gradient fills
        accent: {
          DEFAULT: '#2563EB', // Primary interactive colour
          hover:   '#1D4ED8', // Hover state
          subtle:  'rgba(37, 99, 235, 0.08)',  // Tinted surface behind accent elements
          ring:    'rgba(37, 99, 235, 0.30)',  // Focus rings, glow borders
        },
        // Semantic states
        success:     '#10B981',
        warning:     '#F59E0B',
        danger:      '#EF4444',
      },

      // ─── Typography ───────────────────────────────────────────────────────────
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'hero-xl':  '-0.03em',
        'hero-lg':  '-0.025em',
        'heading':  '-0.02em',
        'subhead':  '-0.015em',
      },
      lineHeight: {
        'hero':    '1.05',
        'heading': '1.15',
        'body':    '1.6',
      },

      // ─── Radius Scale ─────────────────────────────────────────────────────────
      // Only these values are permitted. No arbitrary brackets.
      borderRadius: {
        // Tailwind defaults (sm=2, DEFAULT=4, md=6, lg=8, xl=12, 2xl=16, 3xl=24, full)
        // Override to match design.md:
        'sm':  '4px',   // Badges, chips
        'md':  '8px',   // Inputs, small buttons  ← maps to rounded-md
        'lg':  '12px',  // Cards, dropdowns        ← maps to rounded-lg
        'xl':  '16px',  // Feature cards, modals   ← maps to rounded-xl
        '2xl': '20px',  // Section containers       ← maps to rounded-2xl
        'full':'9999px', // Pill buttons, navbar CTA
      },

      // ─── Shadow Scale ─────────────────────────────────────────────────────────
      boxShadow: {
        'subtle':   '0 1px 2px rgba(0,0,0,0.4), 0 1px 6px rgba(0,0,0,0.2)',
        'medium':   '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)',
        'glow':     '0 0 0 1px rgba(37,99,235,0.30), 0 4px 24px rgba(37,99,235,0.18)',
        'glow-sm':  '0 0 0 1px rgba(37,99,235,0.25), 0 2px 10px rgba(37,99,235,0.12)',
      },

      // ─── Gradient Text ────────────────────────────────────────────────────────
      backgroundImage: {
        // Used exclusively via the <GradientText> component — one instance per page
        'gradient-text': 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
      },
    },
  },
  plugins: [],
};