import { motion } from "framer-motion";
import { Mic, Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-secondary/10 blur-[100px] -z-10 rounded-full" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-brand-accent flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            New: Enhanced AI Action Items
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Turn Voice into <span className="text-gradient">Structured Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl"
          >
            CallScribe automates your meeting workflow. Record audio, get instant accurate transcriptions, 
            and let AI generate summaries and action items while you stay focused on the conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="w-full sm:w-auto bg-brand-gradient text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-brand-primary/25">
              <Mic size={20} />
              Start Recording
            </button>
            <button className="w-full sm:w-auto glass hover:bg-white/10 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all">
              <Play size={20} fill="white" className="text-white" />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20 w-full relative group"
          >
            <div className="absolute inset-0 bg-brand-primary/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="glass rounded-[32px] p-2 md:p-4 shadow-2xl relative overflow-hidden border-white/20">
               {/* Pre-recorded/Mock visual flow */}
               <div className="aspect-video bg-obsidian/50 rounded-[22px] border border-white/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')] bg-cover opacity-20 filter grayscale" />
                  <div className="z-10 text-center p-8">
                     <div className="flex justify-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center animate-pulse">
                           <Mic className="text-brand-primary" />
                        </div>
                        <ArrowRight className="text-slate-600 self-center" />
                        <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center animate-pulse delay-75">
                           <Play className="text-brand-secondary" />
                        </div>
                        <ArrowRight className="text-slate-600 self-center" />
                        <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center animate-pulse delay-150">
                           <ArrowRight className="text-brand-accent" />
                        </div>
                     </div>
                     <p className="text-slate-400 font-mono text-sm">Processing stream_id: CS_8842...</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
