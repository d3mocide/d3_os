import { useOSStore } from '@/store/useOSStore';
import MatrixRain from '@/components/MatrixRain';
import LandingCard from '@/components/LandingCard';
import Desktop from '@/components/os/Desktop';
import Scanlines from '@/components/fx/Scanlines';

function App() {
  const { isBooting, isShutDown } = useOSStore();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-bg-void text-gray-100 flex items-center justify-center">
      
      {/* Persistent Background FX */}
      <MatrixRain />
      
      <Scanlines />

      {isShutDown ? (
        <div className="absolute inset-0 bg-black z-[100] flex flex-col items-center justify-center animate-crt-off text-neon-red font-mono">
            <h1 className="text-4xl tracking-widest animate-pulse">SYSTEM HALTED</h1>
            <p className="mt-4 text-sm animate-pulse opacity-70">IT IS NOW SAFE TO TURN OFF YOUR TERMINAL</p>
            <button 
                onClick={() => window.location.reload()} 
                className="mt-8 px-6 py-2 border border-neon-red/30 hover:bg-neon-red/10 rounded transition-colors text-xs"
            >
                MANUAL RESTART
            </button>
        </div>
      ) : isBooting ? (
        <LandingCard />
      ) : (
        <Desktop />
      )}
      
      {/* Footer - Moved into Desktop/Taskbar or removed to avoid overlap */}
    </div>
  )
}

export default App
