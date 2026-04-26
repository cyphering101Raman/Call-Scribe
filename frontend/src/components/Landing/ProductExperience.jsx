import { useState } from "react";
import { Mic, CircleStop, Upload, Download, Loader2 } from "lucide-react";
import jsPDF from "jspdf";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const BACKEND_PORT_URL = import.meta.env.VITE_BACKEND_PORT_URL;

export default function ProductExperience() {
    const [recording, setRecording] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [replyAI, setReplyAI] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendToSTT = async (audioBlob) => {
        const formData = new FormData();
        formData.append("audio", audioBlob, "input.webm");

        const res = await axios.post(`${BACKEND_PORT_URL}/api/v1/stt`, 
            formData, 
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        return res.data.text;
    };

    const handleAudioPipeline = async (blob) => {
        setIsLoading(true);
        try {
            const text = await sendToSTT(blob);
            setTranscript(text);

            const chatRes = await axios.post(`${BACKEND_PORT_URL}/api/v1/chat`, {
                message: text,
            });

            setReplyAI(chatRes.data.reply);

        } catch (err) {
            console.error(err);
            setTranscript("Error processing audio. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const startStop = async () => {
        if (!recording) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
                const chunks = [];

                recorder.ondataavailable = (e) => chunks.push(e.data);
                recorder.onstop = () => {
                    const blob = new Blob(chunks, { type: chunks[0].type });
                    handleAudioPipeline(blob);
                };

                setMediaRecorder(recorder);
                recorder.start();
                setRecording(true);
            } catch (err) {
                alert("Microphone access denied or not supported.");
            }
        } else {
            mediaRecorder.stop();
            setRecording(false);
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        handleAudioPipeline(file);
    };

    const downloadPDF = () => {
        if (!replyAI) return;
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("CallScribe - Meeting Minutes", 20, 20);
        doc.setFontSize(12);
        const splitText = doc.splitTextToSize(replyAI, 170);
        doc.text(splitText, 20, 35);
        doc.save("CallScribe_MoM.pdf");
    };

    return (
        <section id="demo" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[120px] -z-10 rounded-full" />
            
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience the <span className="text-gradient">Magic</span></h2>
                    <p className="text-slate-400">Try it now. Record a short clip or upload an audio file to see how CallScribe handles it.</p>
                </div>

                <div className="glass rounded-[40px] p-8 md:p-12 border-white/10 shadow-2xl relative">
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
                        <button
                            onClick={startStop}
                            className={`group h-20 px-10 rounded-full font-bold flex items-center gap-4 transition-all active:scale-95 shadow-2xl
                            ${recording 
                                ? "bg-red-500/20 text-red-500 border border-red-500/50" 
                                : "bg-white text-obsidian hover:bg-slate-200"}`}
                        >
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${recording ? "bg-red-500 animate-pulse" : "bg-brand-primary"}`}>
                                {!recording ? <Mic className="text-white w-5 h-5" /> : <CircleStop className="text-white w-5 h-5" />}
                            </div>
                            <span className="text-xl">{recording ? "Stop Recording..." : "Start Recording"}</span>
                        </button>

                        <div className="text-slate-500 font-bold hidden md:block">OR</div>

                        <label className="h-20 px-10 rounded-full flex items-center gap-4 cursor-pointer glass hover:bg-white/5 transition-all text-xl font-bold border-white/10">
                            <Upload size={24} className="text-brand-accent" />
                            Upload Audio
                            <input type="file" accept="audio/*" className="hidden" onChange={handleFileUpload} />
                        </label>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Transcript Area */}
                        <div className="flex flex-col h-[400px]">
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Loader2 size={14} className={isLoading ? "animate-spin text-brand-primary" : "hidden"} />
                                Live Transcript
                            </h4>
                            <div className="flex-1 bg-obsidian/50 rounded-3xl border border-white/5 p-6 overflow-y-auto text-slate-300 font-mono text-sm leading-relaxed custom-scrollbar shadow-inner">
                                {isLoading && !transcript && <div className="text-slate-600 animate-pulse">Processing audio stream...</div>}
                                {transcript || <span className="text-slate-700">Transcription will appear here...</span>}
                            </div>
                        </div>

                        {/* Result Area */}
                        <div className="flex flex-col h-[400px]">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                    AI Insights
                                </h4>
                                {replyAI && (
                                    <button
                                        onClick={downloadPDF}
                                        className="h-8 w-8 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors text-brand-accent"
                                        title="Download PDF"
                                    >
                                        <Download size={16} />
                                    </button>
                                )}
                            </div>
                            <div className="flex-1 bg-brand-primary/5 rounded-3xl border border-brand-primary/10 p-6 overflow-y-auto text-slate-200 text-sm leading-relaxed custom-scrollbar shadow-inner">
                                {isLoading && <div className="text-slate-600 animate-pulse">Generating AI summary and action items...</div>}
                                {replyAI ? (
                                    <div className="whitespace-pre-line">{replyAI}</div>
                                ) : (
                                    !isLoading && <span className="text-slate-700">AI-generated Minutes of Meeting will appear here...</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
