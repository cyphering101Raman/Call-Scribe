# CallScribe Design System

## Core Concept
CallScribe is a premium AI SaaS product designed for high-performance teams. The design language focuses on **clarity, precision, and efficiency**, mirroring the product's core value proposition: turning raw audio into structured intelligence.

## Color Palette
The palette is built on a deep, obsidian base with vibrant electric accents to signify intelligence and energy.

- **Background (Primary)**: `#030014` (Deep Space Dark)
- **Background (Secondary)**: `#080420` (Midnight Navy)
- **Brand Primary**: `linear-gradient(135deg, #6366f1 0%, #a855f7 100%)` (Indigo to Purple)
- **Brand Accent**: `#38bdf8` (Electric Blue)
- **Text (Primary)**: `#f8fafc` (Slate 50)
- **Text (Secondary)**: `#94a3b8` (Slate 400)
- **Border/Divider**: `rgba(255, 255, 255, 0.08)`

## Typography
- **Primary Typeface**: `Inter` (Sans-serif)
- **Headings**: Semi-bold to Bold, with tight letter spacing (-0.02em) for a modern, compact feel.
- **Body**: Regular, 16px base, tracking slightly open for readability.
- **Monospace (for transcripts)**: `JetBrains Mono` or `SF Mono` for a technical, precise look.

## Spacing System
Based on a 4px grid.
- **Micro**: 4px, 8px
- **Small**: 12px, 16px
- **Medium**: 24px, 32px
- **Large**: 48px, 64px
- **Section**: 96px, 128px

## Component Principles
1. **Glassmorphism**: Use backdrop-blur (12px+) and semi-transparent backgrounds for cards to create depth.
2. **Roundedness**: `rounded-2xl` (16px) for main containers, `rounded-full` for buttons and badges.
3. **Micro-interactions**: Subtle `hover:translate-y-[-2px]` and `scale-95` on click for tactile feedback.
4. **Glow Effects**: Radial gradients behind key components to guide the eye and add a "premium" feel.

## UI/UX Decisions
- **Product-First Hero**: The hero section immediately shows the transition from audio to text, establishing trust and utility instantly.
- **Proof via Preview**: The interactive output preview section serves as the "Aha!" moment, showing the exact quality of the AI outputs.
- **Minimalist Navigation**: A "floating" navbar keeps the focus on content while providing quick access to CTAs.
- **Scanability**: High contrast between headings and body text, with clear iconography to help users process features quickly.
