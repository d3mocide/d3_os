import { useState } from 'react';
import { useOSStore } from '@/store/useOSStore';
import { useSoundFX } from '@/hooks/useSoundFX';
import { useChromaticClick } from '@/hooks/useChromaticClick';

const LandingCard = () => {
  const { setBooting } = useOSStore();
  const [isWarping, setIsWarping] = useState(false);
  const { playClick } = useSoundFX();
  const { chromaticClass, triggerGlitch } = useChromaticClick();

  const handleInit = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWarping(true);
    playClick();
    triggerGlitch();
    setTimeout(() => setBooting(false), 500);
  };

  return (
    <div className={`relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center transition-all duration-1000 ${isWarping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      
      {/* Main Glass Card Background & Container */}
      <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl w-full flex flex-col items-center relative overflow-hidden group">
        
        {/* Status - High Z to sit over any potential logo overlap */}
        <div className="relative z-40 mb-8">
            <div className="inline-flex items-center space-x-2 bg-black/80 border border-neon-green/30 rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(0,255,65,0.2)]">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-green"></span>
                </span>
                <span className="text-[10px] font-bold text-neon-green font-mono tracking-widest uppercase">System Online</span>
            </div>
        </div>

        {/* Spacer for the Logo (Logo is sandwiched at Z-30 from App.tsx) */}
        <div className="w-full h-[220px] pointer-events-none" />

        <div className="space-y-2 relative z-40 text-center">
            <h2 className="text-2xl text-white font-medium tracking-tight">System Ready</h2>
            <p className="text-gray-400">Secure connection established.</p>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden max-w-sm w-full mx-auto text-left text-xs font-mono mt-8 relative z-40">
            <div className="bg-black/80 p-3 flex justify-between">
                <span className="text-gray-500">STATUS_CODE:</span>
                <span className="text-neon-green">0x000200</span>
            </div>
            <div className="bg-black/80 p-3 flex justify-between">
                <span className="text-gray-500">PATH:</span>
                <span className="text-white">d3frag.net/root</span>
            </div>
            <div className="bg-black/80 p-3 flex justify-between">
                <span className="text-gray-500">TIMESTAMP:</span>
                <span className="text-white">{new Date().toLocaleTimeString()}</span>
            </div>
        </div>

        {/* Action */}
        <div className="pt-4 relative z-10">
            <button 
              onClick={handleInit}
              className={`group/btn relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-black transition-all duration-200 bg-white rounded-lg hover:bg-gray-100 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] overflow-hidden ${chromaticClass}`}
            >
                <span className="relative z-10 flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    <span>Login</span>
                </span>
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default LandingCard;
