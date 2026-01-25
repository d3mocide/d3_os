import { Folder, GitBranch, Globe } from 'lucide-react';
import CyberFrame from '@/components/CyberFrame';
import { useOSStore } from '@/store/useOSStore';

const projects = [
  { 
    id: 2, 
    title: 'MeshRF', 
    type: 'Simulation',
    desc: 'Radio frequency propagation modeling tool for mesh network planning.',
    status: 'STABLE',
    sourceUrl: 'https://github.com/d3mocide/meshrf',
    deployUrl: 'https://meshrf.net'
  },
  { 
    id: 3, 
    title: 'd3_OS', 
    type: 'WebOS',
    desc: 'React-based operating system simulation. You are here.',
    status: 'DEV',
    sourceUrl: 'https://github.com/d3mocide/d3_os', 
    deployUrl: 'https://d3frag.net' 
  }
];

const ProjectExplorer = () => {
  const { openWindow } = useOSStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full overflow-auto p-1">
      {projects.map((p) => (
        <CyberFrame key={p.id} variant="secondary" className="hover:scale-[1.02] transition-transform cursor-pointer">
          <div className="p-4 space-y-2 h-full flex flex-col">
            <div className="flex justify-between items-start">
              <Folder className="text-neon-blue" size={24} />
              <span className="text-[10px] bg-neon-blue/10 px-2 py-0.5 rounded text-neon-blue border border-neon-blue/20">
                {p.status}
              </span>
            </div>
            
            <h3 className="text-white font-bold tracking-wide">{p.title}</h3>
            <p className="text-gray-400 text-xs flex-1">{p.desc}</p>
            
            <div className="pt-2 flex space-x-2 border-t border-white/5">
                <button 
                    onClick={() => window.open(p.sourceUrl, '_blank')}
                    className="flex items-center space-x-1 text-[10px] text-gray-500 hover:text-neon-blue transition-colors"
                >
                    <GitBranch size={12} />
                    <span>SOURCE</span>
                </button>
                <div className="w-px bg-white/10" />
                <button 
                    onClick={() => openWindow(`browser_${p.id}`, `DEPLOY: ${p.title}`, { type: 'browser', url: p.deployUrl })}
                    className="flex items-center space-x-1 text-[10px] text-gray-500 hover:text-neon-blue transition-colors"
                >
                    <Globe size={12} />
                    <span>DEPLOY</span>
                </button>
            </div>
          </div>
        </CyberFrame>
      ))}
    </div>
  );
};

export default ProjectExplorer;
