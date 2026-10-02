import { useState, type ComponentType } from 'react';
import type { SectionId, HistoryEntry } from '../../types';
import { sections } from '../../data/sections';
import { Window } from '../window/Window';
import { TopBar } from './TopBar';
import { Terminal } from '../terminal/Terminal';
import { AboutPage } from '../../pages/AboutPage';

const sectionComponents: Partial<Record<SectionId, ComponentType>> = {
    about: AboutPage,
}

export function DesktopLayout() {
    const [openSection, setOpenSection] = useState<SectionId | null>(null);
    const [history, setHistory] = useState<HistoryEntry[]>([]);

    const activeSection = sections.find(section => section.id === openSection);
    const ActivePage = activeSection ? sectionComponents[activeSection.id] : null;

    function addToHistory(command: string, output: string) {
        setHistory(prev => [...prev, { command, output }]);
    }

    function runCommand(rawCommand: string) {
        const command = rawCommand.trim().toLowerCase();
        if (!command) return;

        const section = sections.find((s) => s.command === command);

        if (section) {
            addToHistory(rawCommand, `Abrindo seção: ${section.windowTitle}`);
            setOpenSection(section.id);
        } else if (command === 'close') {
            addToHistory(rawCommand, 'Fechando seção atual.');
            setOpenSection(null);
        } else if (command === 'clear') {
            addToHistory(rawCommand, 'Limpando histórico.');
            setHistory([]);
        } else if (command === 'help') {
            addToHistory(rawCommand, 'Comandos disponíveis: ' + sections.map((s) => s.command).join(', ') + ', clear, close');
            setOpenSection(null);
        } else {
            addToHistory(rawCommand, `Comando não encontrado: "${rawCommand}"`);
            setOpenSection(null);
        }
    }

    return (
        <div className="h-screen w-full overflow-hidden bg-slate-900 flex flex-col">
            <TopBar />

            <div className="flex-1 flex overflow-hidden">
                <div className="w-24 border-r border-slate-800/60 flex flex-col items-center py-4 gap-4 justify-center">
                    {sections
                    .filter(section => section.showShortcut)
                    .map(section => (
                        <button
                            key={section.id}
                            onClick={() => setOpenSection(section.id)}
                            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                            >
                            <div className="shadow-md shadow-black/40 w-12 h-12 flex items-center justify-center border border-white/5 rounded-lg group-hover:border-slate-500 transition-colors">
                                <section.icon size={20} />
                            </div>
                        
                            <span className="text-xs font-mono lowercase tracking-wide">
                                {section.command}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="flex-1 flex justify-center items-center relative overflow-hidden">
                    {activeSection && (
                        <Window 
                            title={activeSection.windowTitle} 
                            onClose={() => setOpenSection(null)}
                            onCommand={runCommand} // <-- Ligação feita!
                        >
                            {ActivePage ? <ActivePage /> : <p>Página não encontrada.</p>}
                        </Window>
                    )}

                    {!activeSection && (
                        <Terminal history={history} onCommand={runCommand} />
                    )}
                </div>
            </div>
        </div>
    )
}