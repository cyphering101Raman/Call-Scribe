import { Mic, Zap, BarChart3 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Mic,
      title: "Record",
      desc: "Record directly in your browser or upload existing audio/video files.",
      color: "text-brand-primary",
      bg: "bg-brand-primary/10"
    },
    {
      icon: Zap,
      title: "Transcribe",
      desc: "Our neural engines convert voice to text with over 99% accuracy.",
      color: "text-brand-secondary",
      bg: "bg-brand-secondary/10"
    },
    {
      icon: BarChart3,
      title: "Summarize",
      desc: "AI extracts key points and action items into a clean output folder.",
      color: "text-brand-accent",
      bg: "bg-brand-accent/10"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-obsidian-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-slate-400">Simple, powerful workflow designed for professionals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px border-t border-dashed border-white/10 -z-10" />
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className={`w-20 h-20 rounded-3xl ${step.bg} flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                <step.icon size={32} className={step.color} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              
              <div className="mt-6 h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-slate-500">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
