import { useState, useEffect } from 'react';

export function Clock() {
    const [, setTick] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setTick(t => t + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const now = new Date();

    const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${dias[now.getDay()]} ${meses[now.getMonth()]} ${now.getDate()} ${horas}:${minutos}`;

    return (
        <span className="font-mono text-sm text-zinc-400">
        {timeString}
        </span>
    );
}