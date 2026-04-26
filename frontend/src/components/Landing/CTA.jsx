import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative glass rounded-[48px] p-12 md:p-24 overflow-hidden text-center border-white/20 shadow-2xl shadow-brand-primary/20">
          {/* Background Background effects */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/20 blur-[120px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/10 blur-[100px] -z-10 rounded-full -translate-x-1/2 translate-y-1/2" />

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to <span className="text-gradient">automate</span> your meetings?
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who save hours every week with CallScribe. 
            Start today for free, no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <button className="w-full sm:w-auto bg-white text-obsidian px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-200 transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight size={20} />
             </button>
             <button className="w-full sm:w-auto glass hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all">
                Talk to Sales
             </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-50">
             <span className="text-sm font-bold font-mono tracking-widest text-slate-400">SOC2 CERTIFIED</span>
             <span className="text-sm font-bold font-mono tracking-widest text-slate-400">GDPR COMPLIANT</span>
             <span className="text-sm font-bold font-mono tracking-widest text-slate-400">HIPAA READY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
