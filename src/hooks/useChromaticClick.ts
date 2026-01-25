import { useState } from 'react';

export const useChromaticClick = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  return {
    isGlitching,
    triggerGlitch,
    chromaticClass: isGlitching ? 'chromatic-click' : '',
  };
};
