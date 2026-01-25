import { useState } from 'react';
import { RefreshCw, ArrowLeft, ArrowRight } from 'lucide-react';

interface BrowserProps {
  initialUrl?: string;
}

const Browser = ({ initialUrl = 'https://google.com' }: BrowserProps) => {
  const [url, setUrl] = useState(initialUrl);
  const [inputUrl, setInputUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigate = (e: React.FormEvent) => {
    e.preventDefault();
    let target = inputUrl;
    if (!target.startsWith('http')) {
        target = 'https://' + target;
    }
    setUrl(target);
    setIsLoading(true);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Browser Toolbar */}
      <div className="flex items-center space-x-2 p-2 bg-gray-100 border-b border-gray-200 text-black">
        <button className="p-1 hover:bg-gray-200 rounded text-gray-600">
            <ArrowLeft size={16} />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded text-gray-600">
            <ArrowRight size={16} />
        </button>
        <button 
            className="p-1 hover:bg-gray-200 rounded text-gray-600"
            onClick={() => { setIsLoading(true); const current = url; setUrl(''); setTimeout(() => setUrl(current), 10); }}
        >
            <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
        </button>
        
        <form onSubmit={handleNavigate} className="flex-1">
            <input 
                type="text" 
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="w-full px-3 py-1 bg-white border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 font-sans"
            />
        </form>
      </div>

      {/* Content */}
      <div className="flex-1 relative">
        {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )}
        <iframe 
            src={url} 
            className="w-full h-full border-none"
            onLoad={() => setIsLoading(false)}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            title="Browser"
        />
      </div>
    </div>
  );
};

export default Browser;
