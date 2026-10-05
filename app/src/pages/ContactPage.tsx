import { useState, type FormEvent } from 'react';

import { contacts } from '../data/contacts';

export function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(name);
        console.log(email);
        console.log(message);
    }

    return (
        <div className="flex flex-col gap-8">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {contacts.map((contact, index) => (
                    <a key={contact.name} href={contact.link} target="_blank" rel="noreferrer" className="flex flex-col gap-2 bg-slate-800/60 border border-slate-800/60 rounded-lg p-4 transition-colors hover:border-slate-500">
                        <div className="flex items-center justify-between">
                            <contact.icon size={20} />

                            <span className="text-xs text-slate-500">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>

                        <span className="font-semibold text-slate-200">
                            {contact.name}
                        </span>

                        <span className="text-sm text-slate-400 break-words">
                            {contact.text}
                        </span>
                    </a>
                ))}
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">
                    Enviar mensagem
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm text-slate-400">
                            Nome
                        </label>

                        <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Seu nome" className="w-full bg-slate-800/60 border border-slate-700/60 rounded-md px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-slate-500" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm text-slate-400">
                            E-mail
                        </label>

                        <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="seu@email.com" className="w-full bg-slate-800/60 border border-slate-700/60 rounded-md px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-slate-500" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm text-slate-400">
                            Mensagem
                        </label>

                        <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Digite sua mensagem..." rows={5} className="w-full bg-slate-800/60 border border-slate-700/60 rounded-md px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-slate-500 resize-none" />
                    </div>

                    <button type="submit" className="self-start border border-slate-700/60 px-4 py-2 rounded-md text-sm text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-colors">
                        Enviar mensagem
                    </button>

                </form>
            </div>

        </div>
    );
}