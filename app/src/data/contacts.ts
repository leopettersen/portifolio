import { Code, Mail, MessageCircle, Network } from 'lucide-react';
import type { ContactLink } from '../types';

export const contacts: ContactLink[] = [
    {
        name: 'GitHub',
        link: 'https://github.com/leopettersen',
        text: '@leopettersen',
        icon: Code
    },
    {
        name: 'E-mail',
        link: 'mailto:leonardopettersen465@yahoo.com',
        text: 'leonardopettersen465 @yahoo.com',
        icon: Mail
    },
    {
        name: 'WhatsApp',
        link: 'https://wa.me/5531986906362',
        text: '+55 (31) 98690-6362',
        icon: MessageCircle
    },
    {
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/leonardopettersen',
        text: 'in/leonardopettersen',
        icon: Network
    }
]