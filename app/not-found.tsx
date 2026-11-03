import Link from 'next/link';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl glass-panel border border-cyan-400/30 flex items-center justify-center mx-auto mb-6 shadow-glow-cyan text-cyan-400">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full glass-panel border border-white/10">
          Error 404 • Flight Path Lost
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-3">
          Waypoint Not Found
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          The requested coordinate does not exist or has been redirected. Re-routing back to the main command center.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-xs shadow-glow-cyan transition-all hover:brightness-110"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl glass-panel text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Report Broken Link</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

