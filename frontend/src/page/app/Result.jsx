import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { MessageSquare, FileText, Download, ChevronLeft } from 'lucide-react';
import { Container, Button, Card, Badge } from '../../components/ui';

export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('minutes');
  const [data, setData] = useState(null);

  useEffect(() => {
    // If we have state from the router, use it
    if (location.state && location.state.transcript && location.state.replyAI) {
      setData(location.state);
      // Optional: Persist to localStorage to survive a hard refresh
      localStorage.setItem(`callscribe_result_${id}`, JSON.stringify(location.state));
    } else {
      // Try to recover from localStorage
      const cached = localStorage.getItem(`callscribe_result_${id}`);
      if (cached) {
        setData(JSON.parse(cached));
      } else {
        // If no state and no cache, redirect back to dashboard
        navigate('/app');
      }
    }
  }, [id, location.state, navigate]);

  const downloadPDF = () => {
    if (!data || !data.replyAI) return;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('CallScribe - Meeting Minutes', 20, 20);
    doc.setFontSize(12);
    const splitText = doc.splitTextToSize(data.replyAI, 170);
    doc.text(splitText, 20, 35);
    doc.save(`CallScribe_MoM_${id}.pdf`);
  };

  if (!data) return null;

  const TABS = [
    { id: 'minutes', label: 'AI Minutes', icon: FileText },
    { id: 'transcript', label: 'Raw Transcript', icon: MessageSquare },
  ];

  return (
    <Container size="default" className="py-10 flex-1 flex flex-col gap-6">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-ink-primary tracking-tight">
              Meeting Results
            </h1>
            <Badge intent="success" dot>Processed</Badge>
          </div>
          <p className="text-sm text-ink-muted font-mono">
            Session ID: {id}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" onClick={() => navigate('/app')} icon={ChevronLeft}>
            New Meeting
          </Button>
          <Button variant="primary" size="sm" onClick={downloadPDF} icon={Download}>
            Export PDF
          </Button>
        </div>
      </div>

      {/* Content Area */}
      <Card padding="none" className="flex-1 flex flex-col overflow-hidden min-h-[500px]">
        {/* Tab Bar */}
        <div className="flex items-center border-b border-line-subtle px-4 bg-canvas-elevated">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={[
                  'flex items-center gap-2 px-5 py-3.5 text-sm font-medium',
                  'border-b-2 -mb-px transition-[color,border-color] duration-150',
                  isActive
                    ? 'text-ink-primary border-accent'
                    : 'text-ink-muted border-transparent hover:text-ink-secondary hover:border-line-default',
                ].join(' ')}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-canvas-base">
          {activeTab === 'minutes' && (
            <div className="max-w-3xl whitespace-pre-line text-sm text-ink-secondary leading-relaxed font-sans">
              {data.replyAI}
            </div>
          )}
          {activeTab === 'transcript' && (
            <div className="max-w-3xl whitespace-pre-line text-sm text-ink-secondary leading-relaxed font-mono">
              {data.transcript}
            </div>
          )}
        </div>
      </Card>
    </Container>
  );
}
