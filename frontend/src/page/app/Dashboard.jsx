import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Upload, Mic, CircleStop, Loader2, AlertCircle } from 'lucide-react';
import { Container, Card, Button } from '../../components/ui';

const BACKEND_PORT_URL = import.meta.env.VITE_BACKEND_PORT_URL;

export default function Dashboard() {
  const navigate = useNavigate();

  // State
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  // Recording State
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Pipeline execution
  const runPipeline = async (audioBlob) => {
    setIsProcessing(true);
    setError(null);
    try {
      // 1. STT
      const formData = new FormData();
      // Use original filename if it's an uploaded file (e.g., .mp3), otherwise default to .webm for recordings
      const fileName = audioBlob.name || 'recording.webm';
      formData.append('audio', audioBlob, fileName);

      const sttRes = await axios.post(`${BACKEND_PORT_URL}/api/stt`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const transcriptText = sttRes.data.text;

      // 2. Chat / MoM
      const chatRes = await axios.post(`${BACKEND_PORT_URL}/api/chat`, {
        message: transcriptText,
      });

      const replyAI = chatRes.data.reply;

      // 3. Complete -> Navigate to result
      // We generate a temp ID for the URL since we don't have a DB yet
      const tempId = Date.now().toString(36);
      navigate(`/app/result/${tempId}`, {
        state: { transcript: transcriptText, replyAI }
      });

    } catch (err) {
      console.error('Pipeline error:', err);
      setError('Failed to process audio. Please ensure the file is valid and try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Upload Logic
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    runPipeline(file);
  };

  // Recording Logic
  const startRecording = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });

      audioChunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      recorder.onstop = () => {
        const chunks = audioChunksRef.current;
        if (chunks.length === 0) return;
        const blob = new Blob(chunks, { type: chunks[0].type });
        runPipeline(blob);
        // Clean up tracks
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current = recorder;
      recorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Mic error:', err);
      setError('Microphone access denied or not supported by your browser.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <Container size="narrow" className="py-20 flex-1 flex flex-col justify-center">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-heading text-ink-primary">
          Start a new meeting
        </h1>
        <p className="text-base text-ink-secondary">
          Upload an existing recording or capture audio directly in your browser.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-danger/10 border border-danger/20 flex items-center gap-3 text-danger">
          <AlertCircle size={18} className="shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {isProcessing ? (
        <Card className="flex flex-col items-center justify-center py-24 gap-6 text-center shadow-medium border-line-default">
          <Loader2 size={32} className="text-accent animate-spin" />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-ink-primary tracking-tight">
              Processing Audio...
            </h3>
            <p className="text-sm text-ink-secondary max-w-[36ch]">
              Transcribing audio and generating meeting minutes. This usually takes under a minute.
            </p>
          </div>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Upload Card */}
          <label className="group relative">
            <Card interactive className="h-full flex flex-col items-center justify-center p-10 text-center gap-5 border-dashed border-2 hover:border-accent hover:bg-canvas-raised cursor-pointer transition-all">
              <div className="w-14 h-14 rounded-full bg-canvas-elevated border border-line-subtle flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors">
                <Upload size={24} className="text-ink-muted group-hover:text-accent transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-base font-semibold text-ink-primary">
                  Upload Audio
                </span>
                <span className="text-sm text-ink-muted">
                  MP3, MP4, WAV, WebM
                </span>
              </div>
              <input
                type="file"
                accept="audio/*,video/*"
                className="hidden"
                onChange={handleFileUpload}
                disabled={isRecording}
              />
            </Card>
          </label>

          {/* Record Card */}
          <Card className={`flex flex-col items-center justify-center p-10 text-center gap-5 transition-all ${isRecording ? 'border-danger/30 shadow-glow-sm ring-1 ring-danger/20' : ''}`}>
            {isRecording ? (
              <>
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-danger/20 flex items-center justify-center animate-pulse">
                    <Mic size={24} className="text-danger" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-base font-semibold text-danger">
                    Recording in progress
                  </span>
                  <span className="text-sm text-ink-muted">
                    Speak clearly into your microphone
                  </span>
                </div>
                <Button variant="secondary" onClick={stopRecording} icon={CircleStop} className="mt-2 text-danger hover:bg-danger/10 hover:border-danger/30">
                  Stop & Process
                </Button>
              </>
            ) : (
              <>
                <div className="w-14 h-14 rounded-full bg-canvas-elevated border border-line-subtle flex items-center justify-center">
                  <Mic size={24} className="text-ink-muted" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-base font-semibold text-ink-primary">
                    Record Live
                  </span>
                  <span className="text-sm text-ink-muted">
                    Use your browser microphone
                  </span>
                </div>
                <Button variant="secondary" onClick={startRecording} className="mt-2">
                  Start Recording
                </Button>
              </>
            )}
          </Card>
        </div>
      )}
    </Container>
  );
}
