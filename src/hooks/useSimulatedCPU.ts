import { useState, useEffect } from 'react';

export const useSimulatedCPU = () => {
    const [usage, setUsage] = useState(12);

    useEffect(() => {
        const interval = setInterval(() => {
            setUsage(prev => {
                // Simulate fluctuation
                const change = Math.floor(Math.random() * 10) - 4; // -4 to +5 change
                let next = prev + change;
                
                // Keep within realistic bounds for a "mostly idle" web OS
                if (next < 2) next = 2;
                if (next > 35) next = 35;
                
                // Occasional spike
                if (Math.random() > 0.95) next += 15;
                
                return next;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return usage;
};
