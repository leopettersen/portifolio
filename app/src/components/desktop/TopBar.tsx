import { useTranslation } from 'react-i18next';

import { Clock } from './Clock';
import { SquareTerminal } from 'lucide-react';

export function TopBar() {
    const { i18n } = useTranslation();

    return (
        <div className="w-full h-8 bg-slate-950 border-b border-slate-800/60 flex items-center justify-between px-4 text-sm text-zinc-400 font-mono">

            <div className="flex gap-2">
                <i className="text-blue-600">
                    <SquareTerminal size={16} />
                </i>

                <span className="text-zinc-100 font-bold">
                    LP
                </span>

                <span className="mx-2">
                    /
                </span>

                <span>
                    Leonardo Pettersen
                </span>
            </div>

            <div className="flex items-center gap-4">

                <div className="flex gap-2">

                    <button
                        onClick={() => i18n.changeLanguage('pt')}
                        className={i18n.resolvedLanguage === 'pt' ? 'text-zinc-100' : 'text-zinc-500'}
                    >
                        PT
                    </button>

                    <span className="text-zinc-700">
                        |
                    </span>

                    <button
                        onClick={() => i18n.changeLanguage('en')}
                        className={i18n.resolvedLanguage === 'en' ? 'text-zinc-100' : 'text-zinc-500'}
                    >
                        EN
                    </button>

                </div>

                <Clock />

            </div>

        </div>
    );
}