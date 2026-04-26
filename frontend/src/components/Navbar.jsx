import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 inset-x-0 mx-auto z-50 w-[90%] max-w-5xl"
    >
      <nav className="glass rounded-full px-6 py-3 flex items-center shadow-2xl shadow-brand-primary/10">
        {/* Logo Section */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">CallScribe</span>
          </Link>
        </div>
        
        {/* Features Section - Centered */}
        <div className="hidden md:flex items-center justify-center gap-8 px-4">
          <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap">How it works</a>
          <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</a>
        </div>

        {/* Auth Section */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <button className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors">Log in</button>
          <button className="bg-white text-obsidian px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10 whitespace-nowrap">
            Start Free
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
