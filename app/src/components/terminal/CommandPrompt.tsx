import { useRef, useState, useEffect, type KeyboardEvent } from 'react';

export interface CommandPromptProps {
    onSubmit: (command: string) => void;
}

export function CommandPrompt({ onSubmit }: CommandPromptProps) {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            onSubmit(inputValue);
            setInputValue('');
        }
    }

    useEffect(() => {
        const handleGlobalClick = (event: MouseEvent) => {
            const target = event.target;

            if (target instanceof HTMLElement) {
                const interactiveElement = target.closest('input, textarea, button, a');

                if (interactiveElement) {
                    return;
                }
            }

            inputRef.current?.focus();
        };

        document.addEventListener('click', handleGlobalClick);

        return () => {
            document.removeEventListener('click', handleGlobalClick);
        };
    }, []);

    return (

        <div className="flex items-center gap-2 cursor-text">
            <span className="text-blue-500">guest@os:~$</span>
            <input
                onKeyDown={handleKeyDown}
                autoFocus
                className="sr-only"
                type="text" 
                ref={inputRef}
                aria-label="Comando do terminal"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex items-center">
                <span className="text-slate-400 whitespace-pre">{inputValue}</span>
                <div className="w-2 h-4 bg-blue-500 animate-pulse"></div>
            </div>
        </div>
    );
}