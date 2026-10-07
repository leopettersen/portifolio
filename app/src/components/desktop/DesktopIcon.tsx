import type { LucideIcon } from 'lucide-react';

export interface DesktopIconProps {
    icon: LucideIcon;
    label: string;
    onOpen: () => void;
}

export function DesktopIcon({ icon: Icon, label, onOpen }: DesktopIconProps) {
    return (
        <button
            onClick={onOpen}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group cursor-pointer"
        >
            <div className="shadow-md shadow-black/40 w-12 h-12 flex items-center justify-center border border-white/5 rounded-lg group-hover:border-slate-500 transition-colors">
                <Icon size={20} />
            </div>

            <span className="text-xs font-mono lowercase tracking-wide">
                {label}
            </span>
        </button>
    );
}
