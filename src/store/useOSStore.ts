import { create } from 'zustand';

export interface WindowState {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  content?: React.ReactNode; 
  data?: any;
}

interface OSState {
  isBooting: boolean;
  setBooting: (status: boolean) => void;
  isShutDown: boolean;
  setShutDown: (status: boolean) => void;
  
  // Sound settings
  volume: number; // 0-100
  isMuted: boolean;
  setVolume: (volume: number) => void;
  setMuted: (muted: boolean) => void;
  
  // Individual sound effect toggles
  soundEnabled: {
    click: boolean;
    hover: boolean;
    keypress: boolean;
    error: boolean;
  };
  toggleSound: (type: 'click' | 'hover' | 'keypress' | 'error') => void;
  
  windows: WindowState[];
  activeWindowId: string | null;

  openWindow: (id: string, title: string, data?: any) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
}

export const useOSStore = create<OSState>((set) => ({
  isBooting: true,
  setBooting: (status) => set({ isBooting: status }),
  isShutDown: false,
  setShutDown: (status) => set({ isShutDown: status }),

  // Sound settings
  volume: 25,
  isMuted: false,
  setVolume: (volume) => set({ volume }),
  setMuted: (muted) => set({ isMuted: muted }),

  // Individual sound effect toggles
  soundEnabled: {
    click: true,
    hover: true,
    keypress: true,
    error: true,
  },
  toggleSound: (type) => set((state) => ({
    soundEnabled: {
      ...state.soundEnabled,
      [type]: !state.soundEnabled[type],
    },
  })),

  windows: [],
  activeWindowId: null,

  openWindow: (id, title, data) => set((state) => {
    const maxZ = Math.max(...state.windows.map(w => w.zIndex), 0);
    
    // If exists, just open and focus (update data if provided)
    const existing = state.windows.find(w => w.id === id);
    if (existing) {
      return {
        windows: state.windows.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: maxZ + 1, data: data || w.data } : w),
        activeWindowId: id
      };
    }
    // Create new - ensure it's on top
    return {
      windows: [...state.windows, { id, title, isOpen: true, isMinimized: false, zIndex: maxZ + 1, data }],
      activeWindowId: id
    };
  }),

  closeWindow: (id) => set((state) => ({
    windows: state.windows.map(w => w.id === id ? { ...w, isOpen: false } : w)
  })),

  minimizeWindow: (id) => set((state) => ({
    windows: state.windows.map(w => w.id === id ? { ...w, isMinimized: true } : w),
    activeWindowId: null // Clear focus
  })),

  focusWindow: (id) => set((state) => {
    const maxZ = Math.max(...state.windows.map(w => w.zIndex), 0);
    return {
      windows: state.windows.map(w => w.id === id ? { ...w, zIndex: maxZ + 1, isMinimized: false } : w),
      activeWindowId: id
    };
  }),
}));
