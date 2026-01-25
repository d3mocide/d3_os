import { Volume2, VolumeX, Info, Palette } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';

const Settings = () => {
  const { volume, isMuted, setVolume, setMuted, soundEnabled, toggleSound } = useOSStore();

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setMuted(false);
    }
  };

  const toggleMute = () => {
    setMuted(!isMuted);
  };

  return (
    <div className="h-full flex flex-col p-6 space-y-6">
      {/* Header */}
      <div className="border-b border-neon-green/20 pb-4">
        <h2 className="text-2xl font-bold text-neon-green text-glow-green">System Settings</h2>
        <p className="text-sm text-gray-400 mt-1">Configure your d3_OS experience</p>
      </div>

      {/* Audio Settings */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-neon-blue text-glow-blue">
          <Volume2 size={20} />
          <h3 className="text-lg font-semibold">Audio</h3>
        </div>

        <div className="bg-black/40 border border-neon-green/20 rounded-lg p-4 space-y-4">
          {/* Volume Control */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-300">SFX Volume</label>
              <span className="text-sm text-neon-green font-mono">{isMuted ? 'MUTED' : `${volume}%`}</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleMute}
                className="p-2 hover:bg-neon-green/10 rounded transition-colors text-neon-green"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                disabled={isMuted}
                className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-neon-green
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(0,255,65,0.5)]
                  disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Sound Effects List */}
          <div className="pt-2 border-t border-neon-green/10">
            <p className="text-xs text-gray-500 mb-2">Active Sound Effects (click to toggle):</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => toggleSound('click')}
                className="flex items-center space-x-2 hover:bg-neon-green/5 p-1 rounded transition-colors cursor-pointer"
              >
                <div className={`w-2 h-2 rounded-full ${soundEnabled.click ? 'bg-neon-green animate-pulse' : 'bg-gray-600'}`}></div>
                <span className={soundEnabled.click ? 'text-gray-300' : 'text-gray-600 line-through'}>Click SFX</span>
              </button>
              <button
                onClick={() => toggleSound('hover')}
                className="flex items-center space-x-2 hover:bg-neon-green/5 p-1 rounded transition-colors cursor-pointer"
              >
                <div className={`w-2 h-2 rounded-full ${soundEnabled.hover ? 'bg-neon-green animate-pulse' : 'bg-gray-600'}`}></div>
                <span className={soundEnabled.hover ? 'text-gray-300' : 'text-gray-600 line-through'}>Hover SFX</span>
              </button>
              <button
                onClick={() => toggleSound('keypress')}
                className="flex items-center space-x-2 hover:bg-neon-green/5 p-1 rounded transition-colors cursor-pointer"
              >
                <div className={`w-2 h-2 rounded-full ${soundEnabled.keypress ? 'bg-neon-green animate-pulse' : 'bg-gray-600'}`}></div>
                <span className={soundEnabled.keypress ? 'text-gray-300' : 'text-gray-600 line-through'}>Keypress SFX</span>
              </button>
              <button
                onClick={() => toggleSound('error')}
                className="flex items-center space-x-2 hover:bg-neon-green/5 p-1 rounded transition-colors cursor-pointer"
              >
                <div className={`w-2 h-2 rounded-full ${soundEnabled.error ? 'bg-neon-green animate-pulse' : 'bg-gray-600'}`}></div>
                <span className={soundEnabled.error ? 'text-gray-300' : 'text-gray-600 line-through'}>Error SFX</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-neon-blue text-glow-blue">
          <Palette size={20} />
          <h3 className="text-lg font-semibold">Appearance</h3>
        </div>

        <div className="bg-black/40 border border-neon-green/20 rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Theme</span>
            <span className="text-sm text-neon-green font-mono">M4TRIX</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Scanlines</span>
            <span className="text-sm text-neon-green font-mono">ENABLED</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Phosphor Glow</span>
            <span className="text-sm text-neon-green font-mono">ENABLED</span>
          </div>
        </div>
      </div>

      {/* System Info */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-neon-blue text-glow-blue">
          <Info size={20} />
          <h3 className="text-lg font-semibold">System Information</h3>
        </div>

        <div className="bg-black/40 border border-neon-green/20 rounded-lg p-4 font-mono text-xs space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-400">OS Version:</span>
            <span className="text-neon-green">d3_OS v1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Kernel:</span>
            <span className="text-neon-green">d3FRAG v3.0.4</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Build:</span>
            <span className="text-neon-green">2026.01.24</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Network:</span>
            <span className="text-neon-green">d3FRAG NETWORKS</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-1"></div>
      <div className="text-center text-xs text-gray-600 border-t border-neon-green/10 pt-4">
        <p>d3FRAG NETWORKS © 2026</p>
        <p className="text-neon-green/50">SYSTEM ONLINE</p>
      </div>
    </div>
  );
};

export default Settings;
