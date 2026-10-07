import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { HistoryEntry } from '../../types';
import { CommandPrompt } from './CommandPrompt';
import { sections } from '../../data/sections';

export interface TerminalProps {
  history: HistoryEntry[];
  onCommand: (command: string) => void;
}

export function Terminal({ history, onCommand }: TerminalProps) {
  const { t } = useTranslation();
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const historyElement = historyRef.current;
    if (!historyElement) return;

    historyElement.scrollTo({
      top: historyElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [history]);

  const chipSections = sections.filter(section => section.showChip);

  return (
    <div className="pointer-events-auto w-full md:w-3/4 lg:w-1/2 max-h-[80vh] shadow-2xl shadow-black/50 bg-slate-900 border border-slate-800/60 rounded-lg flex flex-col text-zinc-100 font-mono overflow-hidden">

      <div className="shrink-0 h-12 relative flex items-center px-4 bg-slate-950 border-b border-slate-800/60">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <span className="absolute left-1/2 -translate-x-1/2 text-sm text-slate-400">
          terminal — zsh
        </span>
      </div>

      <div className="flex flex-col min-h-0 p-4 md:p-8 overflow-hidden">

        <div className="shrink-0">
          <h1 className="text-lg font-bold">
            Leonardo Pettersen
          </h1>

          <h2 className="font-medium text-slate-300">
            {t('terminal.role')}
          </h2>

          <h2 className="text-slate-400">
            {t('terminal.university')}
          </h2>

          <p className="text-slate-500 mt-6">
            {t('terminal.typeMessage')}{' '}
            <span className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">
              {t('terminal.typeCommand')}
            </span>{' '}
            {t('terminal.toSeeCommands')}
          </p>

          <div className="flex flex-wrap gap-4 mt-3">
            {chipSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => onCommand(section.command)}
                className="border border-slate-700/50 px-3 py-2 md:py-1 rounded-md text-sm text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-colors cursor-pointer"
              >
                [ {section.command} ]
              </button>
            ))}
            <button
              type="button"
              onClick={() => onCommand('help')}
              className="border border-slate-700/50 px-3 py-2 md:py-1 rounded-md text-sm text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-colors"
            >
              [ help ]
            </button>
          </div>
        </div>

        <div ref={historyRef} className="flex-1 min-h-0 overflow-y-auto mt-8 pr-2">
          <div className="flex flex-col gap-3">
            {history.map((entry, index) => (
              <div key={index}>
                <div>
                  <span className="text-blue-500">guest@os:~$</span>{' '}
                  <span className="text-slate-200">{entry.command}</span>
                </div>
                <div className="text-slate-400 mt-1 whitespace-pre-line">
                  {entry.output}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-0 mt-6 pt-6 border-t border-slate-800/60">
          <CommandPrompt onSubmit={onCommand} />
        </div>

      </div>
    </div>
  );
}