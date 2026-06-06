import { Link, Outlet } from 'react-router-dom';
import { Mic, ChevronLeft } from 'lucide-react';
import { Container } from '../ui';

export default function AppLayout() {
  return (
    <div className="bg-canvas-base min-h-screen text-ink-primary font-sans flex flex-col selection:bg-accent/20 selection:text-ink-primary">
      {/* Minimal App Header */}
      <header className="border-b border-line-subtle bg-canvas-base">
        <Container size="full" className="h-14 flex items-center justify-between px-6">
          {/* Logo -> Routes to /app */}
          <Link to="/app" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center transition-opacity duration-150 group-hover:opacity-85">
              <Mic size={14} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-semibold text-ink-primary tracking-tight">
              CallScribe
            </span>
          </Link>

          {/* Back to Marketing */}
          <Link
            to="/"
            className="flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-ink-primary transition-colors duration-150"
          >
            <ChevronLeft size={14} />
            Back to Website
          </Link>
        </Container>
      </header>

      {/* Main Application Area */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
