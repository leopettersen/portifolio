import { contacts } from '../data/contacts';

export function ContactPage() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {contacts.map((contact, index) => (
                <a key={contact.name} href={contact.link} target="_blank" rel="noreferrer" className="flex flex-col gap-2 bg-slate-800/60 border border-slate-800/60 rounded-lg p-4 transition-colors hover:border-slate-500">
                    <div className="flex items-center justify-between">
                        <contact.icon size={20} />
                        <span className="text-xs text-slate-500">{String(index + 1).padStart(2, '0')}</span>
                    </div>

                    <span className="font-semibold text-slate-200">
                        {contact.name}
                    </span>

                    <span className="text-sm text-slate-400">
                        {contact.text}
                    </span>
                </a>
            ))}
        </div>
    );
}