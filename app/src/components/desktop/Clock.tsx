import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { Language } from '../../types/';
import { localeMap } from '../../i18n/localeMap';


export function Clock() {
    const { i18n } = useTranslation();
    const language = i18n.resolvedLanguage as Language;
    const locale = localeMap[language];

    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const weekday = now.toLocaleDateString(locale, { weekday: 'short' }).replace('.', '');
    const month = now.toLocaleDateString(locale, { month: 'short' }).replace('.', '');
    const day = now.toLocaleDateString(locale, { day: 'numeric' });

    const time = now.toLocaleTimeString(locale, {
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
    });

    return (
        <span className="font-mono text-sm text-zinc-400 capitalize">
            <span className="hidden sm:inline">{weekday} {month} {day} </span>
            <span>{time}</span>
        </span>
    );
}