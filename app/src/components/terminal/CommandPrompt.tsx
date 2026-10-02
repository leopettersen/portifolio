import { useRef, useState, type KeyboardEvent } from 'react';

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

    return (

        <div 
            className="flex items-center gap-2 cursor-text" 
            onClick={() => inputRef.current?.focus()}
        >
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