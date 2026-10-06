import { useState, type ComponentType } from 'react';
import { useTranslation } from 'react-i18next';
import type { SectionId, HistoryEntry } from '../../types';
import { sections } from '../../data/sections';
import { Window } from '../window/Window';
import { TopBar } from './TopBar';
import { Terminal } from '../terminal/Terminal';
import { AboutPage } from '../../pages/AboutPage';
import { ExperiencePage } from '../../pages/ExperiencePage';
import { ProjectsPage } from '../../pages/ProjectsPage';
import { ContactPage } from '../../pages/ContactPage';

const sectionComponents: Partial<Record<SectionId, ComponentType>> = {
    about: AboutPage,
    experience: ExperiencePage,
    projects: ProjectsPage,
    contact: ContactPage
}

export function DesktopLayout() {
    const { t } = useTranslation();
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
            addToHistory(rawCommand, t('terminal.openingSection', { title: section.windowTitle }));
            setOpenSection(section.id);
        } else if (command === 'close') {
            addToHistory(rawCommand, t('terminal.closingSection'));
            setOpenSection(null);
        } else if (command === 'clear') {
            addToHistory(rawCommand, t('terminal.clearingHistory'));
            setHistory([]);
        } else if (command === 'help') {
            addToHistory(rawCommand, t('terminal.availableCommands', {
                commands: sections.map((s) => s.command).join(', ') + ', clear, close'
            }));
            setOpenSection(null);
        } else {
            addToHistory(rawCommand, t('terminal.commandNotFound', { command: rawCommand }));
            setOpenSection(null);
        }
    }

    return (
        <div className="h-[100dvh] w-full overflow-hidden bg-slate-900 flex flex-col">
            <TopBar />

            <div className="flex-1 flex flex-col-reverse md:flex-row overflow-hidden">
                <div className="w-full md:w-24 flex flex-row md:flex-col items-center justify-around md:justify-center gap-4 py-2 md:py-4 border-t md:border-t-0 md:border-r border-slate-800/60">
                    {sections
                    .filter(section => section.showShortcut)
                    .map(section => (
                        <button
                            key={section.id}
                            onClick={() => setOpenSection(section.id)}
                            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group cursor-pointer"
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

                <div className="flex-1 flex justify-center items-center relative overflow-hidden p-3 md:p-0">
                    {activeSection && (
                        <Window 
                            title={activeSection.windowTitle} 
                            onClose={() => setOpenSection(null)}
                            onCommand={runCommand} // <-- Ligação feita!
                        >
                            {ActivePage ? <ActivePage /> : <p>{t('window.pageNotFound')}</p>}
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