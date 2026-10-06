import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { GuestbookMessage } from '../types';
import { fetchMessages, PAGE_SIZE } from '../services/guestbook';
import { localeMap } from '../i18n/localeMap';

export function GuestbookPage() {
    const { t, i18n } = useTranslation();

    const [messages, setMessages] = useState<GuestbookMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const locale = localeMap[i18n.resolvedLanguage === 'en' ? 'en' : 'pt'];

    useEffect(() => {
        let ignore = false;

        async function loadMessages() {
            try {
                const data = await fetchMessages();

                if (!ignore) {
                    setMessages(data);
                    setHasMore(data.length === PAGE_SIZE);
                }
            } catch {
                if (!ignore) {
                    setError(true);
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }

        loadMessages();

        return () => {
            ignore = true;
        };
    }, []);

    async function handleLoadMore() {
        if (loadingMore || messages.length === 0) return;

        setLoadingMore(true);
        setError(false);

        const lastId = messages[messages.length - 1].id;

        try {
            const newMessages = await fetchMessages(lastId);

            setMessages((prev) => [...prev, ...newMessages]);
            setHasMore(newMessages.length === PAGE_SIZE);
        } catch {
            setError(true);
        } finally {
            setLoadingMore(false);
        }
    }

    return (
        <div className="flex flex-col gap-6">

            {loading && (
                <p className="text-slate-400">
                    {t('guestbook.loading')}
                </p>
            )}

            {!loading && messages.length === 0 && error && (
                <p className="text-red-400">
                    {t('guestbook.error')}
                </p>
            )}

            {!loading && messages.length === 0 && !error && (
                <p className="text-slate-400">
                    {t('guestbook.empty')}
                </p>
            )}

            {!loading && messages.length > 0 && (
                <>
                    <div className="flex flex-col gap-6">
                        {messages.map((message) => (
                            <div key={message.id} className="flex flex-col gap-2 bg-slate-800/60 p-4 rounded-lg">

                                <div className="flex items-baseline justify-between gap-4">
                                    <h1 className="text-xl font-bold">
                                        {message.name}
                                    </h1>

                                    <span className="text-sm font-semibold text-slate-400">
                                        {new Date(message.created_at).toLocaleDateString(locale, {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        }).replace('.', '')}
                                    </span>
                                </div>

                                <p className="text-slate-400 whitespace-pre-wrap break-words">
                                    {message.message}
                                </p>

                            </div>
                        ))}
                    </div>

                    {error && (
                        <p className="text-red-400">
                            {t('guestbook.error')}
                        </p>
                    )}

                    {hasMore && (
                        <button type="button" onClick={handleLoadMore} disabled={loadingMore} className="self-start border border-slate-700/60 px-4 py-2 rounded-md text-sm text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            {loadingMore ? t('guestbook.loadingMore') : t('guestbook.loadMore')}
                        </button>
                    )}
                </>
            )}

        </div>
    );
}