import { Link } from 'react-router-dom';
import { Mic, Twitter, Linkedin, Github } from 'lucide-react';

const LINKS = [
  {
    title: 'Product',
    items: [
      { label: 'Features',     href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Roadmap',      href: '#roadmap' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use',   href: '#' },
    ],
  },
];

const SOCIAL = [
  { icon: Twitter,  href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github,   href: '#', label: 'GitHub' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-subtle pt-16 pb-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-2 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5 w-fit group">
              <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center transition-opacity duration-150 group-hover:opacity-85">
                <Mic size={14} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold text-ink-primary tracking-tight">
                CallScribe
              </span>
            </Link>

            <p className="text-sm text-ink-muted leading-relaxed max-w-[36ch]">
              Upload or record any meeting. Get a transcript, minutes, and action items — automatically.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-line-subtle flex items-center justify-center text-ink-muted hover:text-ink-primary hover:border-line-default transition-[color,border-color] duration-150"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {LINKS.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold text-ink-secondary uppercase tracking-widest font-mono">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-ink-muted hover:text-ink-secondary transition-colors duration-150"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-line-subtle flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-ink-muted">
            © {year} CallScribe. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Made for teams that move fast.
          </p>
        </div>
      </div>
    </footer>
  );
}
