import Header from '@/components/Header';
import UploadBox from '@/components/UploadBox';
import Dashboard from '@/components/Dashboard';
import ChatPanel from '@/components/ChatPanel';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Header />

      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <UploadBox />
          <Dashboard />
        </div>

        <div>
          <ChatPanel />
        </div>
      </div>
    </main>
  );
}
