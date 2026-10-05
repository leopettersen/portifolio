interface TagProps {
    children: string;
}

export function Tag({ children }: TagProps) {
    return (
        <span className="bg-slate-700/60 px-2 py-1 rounded-md text-sm text-slate-400">
            {children}
        </span>
    );
}