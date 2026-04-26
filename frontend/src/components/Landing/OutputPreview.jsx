import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListChecks, FileText, MessageSquare, Clock } from "lucide-react";

const mockData = {
  transcript: [
    { speaker: "Alex", time: "00:00", text: "Hey everyone, thanks for joining. Let's talk about the Q3 infrastructure migration." },
    { speaker: "Sarah", time: "00:04", text: "I've started the assessment for the AWS clusters. We need to decide on the new instance types." },
    { speaker: "James", time: "00:09", text: "Can we ensure we are using the Graviton instances? They should save us about 20% on costs." },
    { speaker: "Alex", time: "00:15", text: "Good point James. Sarah, can you run a benchmark on that by Friday?" },
  ],
  summary: "The team discussed the Q3 infrastructure migration, focusing on AWS cluster assessment. James proposed using Graviton instances for a potential 20% cost reduction. Sarah will conduct benchmarks on these instance types to validate the performance and savings before the final decision.",
  actions: [
    "Run benchmark for Graviton instances (Sarah) - Due Friday",
    "Prepare final instance type proposal (Sarah)",
    "Schedule follow-up budget review meeting (Alex)",
    "Document migration roadmap for engineering team (James)"
  ]
};

export default function OutputPreview() {
  const [activeTab, setActiveTab] = useState("transcript");

  const tabs = [
    { id: "transcript", label: "Transcript", icon: MessageSquare },
    { id: "summary", label: "AI Summary", icon: FileText },
    { id: "actions", label: "Action Items", icon: ListChecks },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">See what you get — <span className="text-gradient">instantly</span></h2>
            <p className="text-slate-400 text-lg mb-8">
              From raw conversation to structured insights in seconds. Our AI doesn't just transcribe; it understands the context and extracts what matters most.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: "Accurate Transcription", desc: "Recognizes multiple speakers and technical jargon with ease." },
                { title: "Clean Summaries", desc: "Get the gist of any meeting in a readable paragraph." },
                { title: "Extracted Action Items", desc: "Never miss a follow-up. Tasks are automatically identified." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-brand-primary/10 blur-3xl rounded-3xl -z-10" />
            
            <div className="glass rounded-3xl overflow-hidden shadow-2xl border-white/10 flex flex-col h-[500px]">
              {/* Card Header */}
              <div className="border-b border-white/5 p-6 flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === tab.id 
                      ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30" 
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <tab.icon size={16} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Card Content */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <AnimatePresence mode="wait">
                  {activeTab === "transcript" && (
                    <motion.div
                      key="transcript"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-6"
                    >
                      {mockData.transcript.map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 font-bold text-xs text-brand-accent">
                            {item.speaker[0]}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-sm text-slate-200">{item.speaker}</span>
                              <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                                <Clock size={10} /> {item.time}
                              </span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "summary" && (
                    <motion.div
                      key="summary"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                    >
                      <h4 className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">Minutes of Meeting</h4>
                      <p className="text-slate-300 leading-relaxed text-lg italic">
                        "{mockData.summary}"
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "actions" && (
                    <motion.div
                      key="actions"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-4"
                    >
                      {mockData.actions.map((action, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-brand-primary/30 transition-colors">
                          <div className="h-6 w-6 rounded border border-white/20 flex items-center justify-center group-hover:border-brand-primary/50">
                            <div className="h-1 w-2 border-b-2 border-r-2 border-brand-accent transform rotate-45 mb-1 opacity-0 group-hover:opacity-100" />
                          </div>
                          <span className="text-slate-300 text-sm">{action}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
