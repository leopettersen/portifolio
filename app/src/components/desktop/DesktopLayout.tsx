import  { useState, type ComponentType } from 'react';
import type { SectionId } from '../../types';
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
    const activeSection = sections.find(section => section.id === openSection);
    const ActivePage = activeSection ? sectionComponents[activeSection.id] : null;

    return (
        <div className="min-h-screen bg-slate-900">
            <TopBar />

            <div className="flex h-[calc(100vh-2rem)]">
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
                <div className="flex-1 flex justify-center items-center relative">
                {activeSection && (
                        <Window title={activeSection.windowTitle} onClose={() => setOpenSection(null)}>
                            {ActivePage ? <ActivePage /> : <p>Página não encontrada.</p>}
                        </Window>
                )}

                {!activeSection && (
                    <Terminal />
                )}

                </div>
            </div>
        </div>
    )
}