import type { ReactNode } from 'react';

export interface WindowProps {
    title: string;
    children: ReactNode;
    onClose: () => void;
}

export function Window({ title, children, onClose }: WindowProps) {
  return (
    <div className="w-[60%] max-h-[calc(100vh-6rem)] shadow-2xl shadow-black/50 bg-slate-900 border border-slate-800/60 rounded-lg flex flex-col text-zinc-100 font-mono">
      
      <div className="relative flex items-center px-4 py-3 bg-slate-950 border-b border-slate-800/60 rounded-t-lg">
        
        <div className="flex gap-2">
            <button className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose} aria-label="Fechar"></button>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        
        <span className="absolute left-1/2 -translate-x-1/2 text-sm text-slate-400">
          {title}
        </span>

      </div>
      <div className="flex-1 min-h-0 overflow-y-auto p-8">
        {children}
      </div>
    </div>
  );
}