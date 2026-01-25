import React from 'react';

interface CyberFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

const CyberFrame = ({ children, className = '', variant = 'primary' }: CyberFrameProps) => {
  const borderColor = {
    primary: 'border-neon-green/30',
    secondary: 'border-neon-blue/30',
    danger: 'border-neon-red/30',
  }[variant];

  return (
    <div className={`relative group ${className}`}>
      {/* Glassy Container */}
      <div 
        className={`relative z-10 bg-black/60 backdrop-blur-md border ${borderColor} rounded-xl shadow-2xl overflow-hidden flex flex-col h-full`}
      >
        {/* Subtle Scanline Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-10" />
        
        {children}
      </div>
    </div>
  );
};

export default CyberFrame;
