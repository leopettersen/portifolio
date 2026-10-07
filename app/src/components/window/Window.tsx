import type { ReactNode } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { CommandPrompt } from '../terminal/CommandPrompt';

export interface WindowProps {
    title: string;
    children: ReactNode;
    onClose: () => void;
    onCommand: (command: string) => void;
}

export function Window({ title, children, onClose, onCommand }: WindowProps) {
  const { t } = useTranslation();

  return (
    <div className="pointer-events-auto w-full md:w-5/6 lg:w-[60%] h-full md:h-auto md:max-h-[calc(100dvh-6rem)] shadow-2xl shadow-black/50 bg-slate-900 border border-slate-800/60 rounded-lg flex flex-col text-zinc-100 font-mono">
      
      <div className="relative flex items-center px-4 py-3 bg-slate-950 border-b border-slate-800/60 rounded-t-lg">
        
        <button
          onClick={onClose}
          className="md:hidden flex items-center gap-1 -ml-2 px-2 py-1 text-sm text-slate-300 hover:text-white transition-colors"
          aria-label={t('window.back')}
        >
          <ArrowLeft size={16} />
          {t('window.back')}
        </button>

        <div className="hidden md:flex gap-2">
            <button className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose} aria-label="Fechar"></button>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        
        <span className="absolute left-1/2 -translate-x-1/2 text-sm text-slate-400">
          {title}
        </span>

      </div>
      <div className="flex-1 min-h-0 overflow-y-auto p-4 md:p-8">
        {children}
      </div>
      <div className="shrink-0 hidden md:flex justify-between items-center px-4 py-3 bg-slate-950 border-t border-slate-800/60 rounded-b-lg">
        <CommandPrompt onSubmit={onCommand} />
        
        <p className="text-xs text-slate-500 hidden sm:block">
          <Trans i18nKey="window.closeHint" values={{ command: 'close' }} components={{ 1: <span className="text-slate-400" /> }} />
        </p>
      </div>
    </div>
  );
}