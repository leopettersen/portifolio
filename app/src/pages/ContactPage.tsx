import { useState, type FormEvent } from 'react';

import { contacts } from '../data/contacts';

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState<FormErrors>({});

    function validate(): FormErrors {
        const newErrors: FormErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Informe seu nome.';
        }

        if (!email.trim()) {
            newErrors.email = 'Informe seu e-mail.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'E-mail inválido.';
        }

        if (!message.trim()) {
            newErrors.message = 'Informe sua mensagem.';
        } else if (message.trim().length < 10) {
            newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
        }

        return newErrors;
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const validationErrors = validate();

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

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

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm text-slate-400">
                            Nome
                        </label>

                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Seu nome"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            className={`w-full bg-slate-800/60 border ${errors.name ? 'border-red-400' : 'border-slate-700/60'} rounded-md px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-slate-500`}
                        />

                        {errors.name && (
                            <p id="name-error" className="text-sm text-red-400">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm text-slate-400">
                            E-mail
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="seu@email.com"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            className={`w-full bg-slate-800/60 border ${errors.email ? 'border-red-400' : 'border-slate-700/60'} rounded-md px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-slate-500`}
                        />

                        {errors.email && (
                            <p id="email-error" className="text-sm text-red-400">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm text-slate-400">
                            Mensagem
                        </label>

                        <textarea
                            id="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="Digite sua mensagem..."
                            rows={5}
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? 'message-error' : undefined}
                            className={`w-full bg-slate-800/60 border ${errors.message ? 'border-red-400' : 'border-slate-700/60'} rounded-md px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-slate-500 resize-none`}
                        />

                        {errors.message && (
                            <p id="message-error" className="text-sm text-red-400">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <button type="submit" className="self-start border border-slate-700/60 px-4 py-2 rounded-md text-sm text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-colors">
                        Enviar mensagem
                    </button>

                </form>

            </div>

        </div>
    );
}