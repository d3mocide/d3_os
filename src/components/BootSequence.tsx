import { useState, useEffect } from 'react';

const bootText = [
  "BIOS CHECKING MEMORY... OK",
  "LOADING KERNEL... OK",
  "MOUNTING VFS... OK",
  "ESTABLISHING SECURE HANDSHAKE...",
  "ACCESS GRANTED."
];

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let delay = 0;
    bootText.forEach((text, index) => {
      delay += Math.random() * 500 + 200;
      setTimeout(() => {
        setLines(prev => [...prev, text]);
        if (index === bootText.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, delay);
    });
  }, [onComplete]);

  return (
    <div className="font-mono text-neon-green text-sm p-8 z-50 absolute top-0 left-0">
      {lines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      <div className="animate-pulse">_</div>
    </div>
  );
};

export default BootSequence;
