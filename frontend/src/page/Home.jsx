import { useState } from "react";
import { Mic, CircleStop, Upload, Download } from "lucide-react";
import jsPDF from "jspdf";
import Homey2 from "../assets/Homey2.png";
import axios from "axios";

const BACKEND_PORT_URL = import.meta.env.VITE_BACKEND_PORT_URL;

export default function Home() {
    const [recording, setRecording] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [replyAI, setReplyAI] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);

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
        try {
            const text = await sendToSTT(blob);
            setTranscript(text);

            const chatRes = await axios.post(`${BACKEND_PORT_URL}/api/v1/chat`, {
                message: text,
            });

            setReplyAI(chatRes.data.reply);

        } catch (err) {
            console.error(err);
            setTranscript("Error processing audio");
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
                alert("Microphone access denied");
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
        doc.setFontSize(12);
        doc.text("Minutes of Meeting", 10, 10);
        doc.text(replyAI, 10, 20);
        doc.save("CallScribe_MoM.pdf");
    };

    return (
        <div className="min-h-screen text-[#E9E9F3]">
            <main className="w-[90%] max-w-6xl mx-auto pt-4">

                <section className="flex flex-col md:flex-row items-center gap-5 py-6">

                    <div className="w-full md:w-2/6">
                        <h1 className="text-4xl font-semibold leading-snug text-center tracking-wider">
                            Call Scribe
                        </h1>
                        <p className="text-center mt-1 text-lg font-medium text-[#B4B7D8]">
                            Your Calls, Clearly Captured.
                        </p>

                        <div className="mt-10 flex flex-row justify-center items-center gap-6">

                            <button
                                onClick={startStop}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-transform active:scale-95 text-[#0B1630] shadow-[0_0_12px_#2B1F49]
                                ${recording ? "bg-red-500 text-white" : "bg-[#F4E96D]"}`}
                            >
                                {!recording ? <Mic className="w-4 h-4" /> : <CircleStop className="w-4 h-4" />}
                                {recording ? "Stop" : "Record"}
                            </button>

                            <label className="
                                flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer 
                                bg-[#FFFFFF22] border border-[#FFFFFF1A] text-[#E9E9F3] 
                                backdrop-blur-md shadow-[0_0_10px_#2B1F49] hover:bg-[#FFFFFF33] transition
                            ">
                                <Upload className="w-4 h-4" />
                                Upload Audio
                                <input type="file" accept="audio/*" className="hidden" onChange={handleFileUpload} />
                            </label>
                        </div>
                    </div>

                    <div className="w-full md:w-4/6">
                        <img
                            src={Homey2}
                            alt="model"
                            className="w-full h-auto rounded-3xl object-cover"
                        />
                    </div>
                </section>

                {/* TRANSCRIPTION SECTION */}
                <section className="mt-14 w-full md:w-[60%] mx-auto bg-[#FFFFFF22] backdrop-blur-xl 
                    border border-[#FFFFFF1A] rounded-2xl p-6 shadow-[0_0_25px_#1A1535]">

                    <h3 className="text-lg text-center font-semibold text-[#E9E9F3] mb-6 tracking-wide">
                        Audio Transcription
                    </h3>

                    <div className="mb-6">
                        <div className="text-xs text-[#B4B7D8] mb-2 uppercase tracking-wide">
                            Transcript
                        </div>

                        <div className="min-h-[70px] p-4 rounded-lg bg-[#0F1B3A]/40 border border-[#FFFFFF10] 
                            text-sm text-[#E9E9F3] whitespace-pre-line">
                            {transcript || <span className="text-[#B4B7D8]">No transcript yet</span>}
                        </div>
                    </div>

                    <div className="h-px w-full bg-[#FFFFFF15] my-4" />

                    <div>
                        <div className="text-xs text-[#B4B7D8] mb-2 uppercase tracking-wide">
                            Reply
                        </div>

                        <div className="relative">

                            {/* DOWNLOAD ICON */}
                            {replyAI && (
                                <button
                                    onClick={downloadPDF}
                                    className="absolute top-2 right-2 p-1 hover:bg-[#ffffff22] rounded-md"
                                >
                                    <Download className="w-4 h-4 text-[#E9E9F3]" />
                                </button>
                            )}

                            <div className="min-h-[90px] p-4 rounded-lg bg-[#0F1B3A]/40 border border-[#FFFFFF10] text-sm text-[rgb(233,233,243)] whitespace-pre-line overflow-y-auto">
                                {replyAI || <span className="text-[#B4B7D8]">No reply yet</span>}
                            </div>
                        </div>

                    </div>
                </section>

            </main>

            <footer className="mt-14 pb-4 text-center text-xs text-[#B4B7D8]">
                © {new Date().getFullYear()} Call Scribe — Your Calls, Clearly Captured.
            </footer>
        </div>
    );
}
