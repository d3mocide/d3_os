import React from 'react';

interface BrandingProps {
    className?: string;
    showNetworks?: boolean;
}

const Branding: React.FC<BrandingProps> = ({ className = '', showNetworks = true }) => {
    return (
        <div className={`relative flex flex-col items-center justify-center pointer-events-none select-none ${className}`}>
            <div className="relative glitch-wrapper py-16">
                <h1 
                    className="text-6xl md:text-9xl font-bold text-white select-none tracking-tighter glitch drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] filter brightness-125"
                    data-text="d3FRAG"
                >
                    d3FRAG
                </h1>
                {showNetworks && (
                    <div className="absolute bottom-7 left-0 right-0 text-center">
                        <span className="text-xl md:text-2xl font-mono text-neon-green text-glow-green tracking-[0.5em] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter brightness-110">NETWORKS</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Branding;
