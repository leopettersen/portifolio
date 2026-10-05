import type { Project } from '../types';

import imgPortoesDoCeu from '../assets/PortoesDoCeu.jpeg';
import imgOpm from '../assets/OPM.png';

export const projects: Project[] = [
    {
        name: 'Sistema Hospitalar - Portões do Céu',
        date: 'Dez 2026',
        description: 'Sistema web de gestão hospitalar desenvolvido em Java com Spring Boot, utilizando API REST e banco de...',
        technologies: ['Java', 'SpringBoot', 'Thymeleaf', 'MySQL'],
        repoLink: 'https://github.com/leopettersen/TP-sistema-hospitalar',
        image: imgPortoesDoCeu, 
    },
    {
        name: 'Portifólio Profissional',
        date: 'Out 2026',
        description: 'O sistema apresenta minha trajetória, projetos, experiências e formas de contato em uma interface in...',
        technologies: ['TypeScript', 'React', 'Supabase', 'Docker'],
        repoLink: 'https://github.com/leopettersen/portifolio'
    },
    {
        name: 'Opera Máquinas (OPM)',
        date: 'Jul 2026',
        description: 'Interface web voltada para a otimização e gestão da produção em ambientes industriais, centralizando...',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        repoLink: 'https://github.com/leopettersen/trabalho-intedisciplinarl-opm',
        image: imgOpm,
    }
];