// pages/emotion-log.js
import EmotionLog from './MindTrack/components/EmotionLog';

export default function EmotionLogPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Registro Diario de Emociones</h1>
      <EmotionLog />
    </div>
  );
}
