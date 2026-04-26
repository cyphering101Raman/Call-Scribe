import { MessageSquare, Zap, ListChecks, Download, ShieldCheck, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Real-time transcription",
      desc: "Watch as your words appear on screen instantly with minimal latency."
    },
    {
      icon: Zap,
      title: "AI Summaries",
      desc: "Get concise meeting summaries that capture the essence of every discussion."
    },
    {
      icon: ListChecks,
      title: "Action Item Extraction",
      desc: "Automatically identify and list tasks, owners, and deadlines from audio."
    },
    {
      icon: Download,
      title: "PDF Export",
      desc: "Download professionally formatted meeting minutes with one click."
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      desc: "Transcribe meetings in over 50 languages with high context awareness."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      desc: "Your data is encrypted at rest and in transit. No one else sees your files."
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for <span className="text-gradient">Modern Teams</span></h2>
          <p className="text-slate-400">Everything you need to stop worrying about notes and start focusing on the conversation.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="glass p-8 rounded-[32px] hover:border-brand-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
                <feature.icon className="text-slate-400 group-hover:text-brand-primary transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Comparison Section (Why CallScribe) */}
        <div className="mt-32 glass rounded-[40px] p-8 md:p-16 border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 blur-[100px] -z-10" />
           
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-bold mb-6">Why switch to CallScribe?</h2>
                 <p className="text-slate-400 mb-8 max-w-md text-lg">
                    Manual note-taking is slow, inaccurate, and distracting. CallScribe gives you back your focus.
                 </p>
                 
                 <div className="space-y-4">
                    {[
                       "Up to 10x faster than manual transcription",
                       "99%+ accuracy with neural voice processing",
                       "Automatic context-aware action items",
                       "Seamless integration with your existing workflow"
                    ].map((item, i) => (
                       <div key={i} className="flex items-center gap-3">
                          <div className="h-5 w-5 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
                             <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                          </div>
                          <span className="text-slate-200 font-medium">{item}</span>
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="bg-obsidian rounded-2xl border border-white/5 p-8 shadow-inner">
                 <div className="space-y-8">
                    <div>
                       <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-slate-400 font-mono">Manual Workflow</span>
                          <span className="text-sm font-medium text-red-400 font-mono">60 mins</span>
                       </div>
                       <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-red-400/50" />
                       </div>
                    </div>
                    
                    <div>
                       <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-slate-400 font-mono">CallScribe AI</span>
                          <span className="text-sm font-medium text-brand-accent font-mono">3 mins</span>
                       </div>
                       <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-[5%] bg-brand-accent" />
                       </div>
                    </div>
                 </div>
                 
                 <div className="mt-8 pt-8 border-t border-white/5">
                    <p className="text-slate-500 text-sm italic">
                       "CallScribe saved our engineering team 15 hours of documentation time per week."
                    </p>
                    <p className="text-slate-300 text-xs font-bold mt-2">— CTO, CloudScale</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
