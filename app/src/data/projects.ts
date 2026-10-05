import type { Project } from '../types';

export const projects: Project[] = [
    {
        name: 'Sistema Hospitalar - Portões do Céu',
        date: 'Dez 2026',
        description: 'Sistema web de gestão hospitalar desenvolvido em Java com Spring Boot, utilizando API REST e banco de dados relacional para o gerenciamento de pacientes, profissionais, consultas e internações. A aplicação organiza processos essenciais, como agendamento, controle de quartos e histórico médico.',
        technologies: ['Java', 'SpringBoot', 'Thymeleaf', 'MySQL'],
        repoLink: 'https://github.com/leopettersen/TP-sistema-hospitalar',
        image: '/images/projects/PortoesDoCeu.jpeg'
    },
    {
        name: 'Portifólio Profissional',
        date: 'Out 2026',
        description: 'O sistema apresenta minha trajetória, projetos, experiências e formas de contato em uma interface inspirada em um desktop com terminal. A navegação pode ser feita por comandos ou pelos ícones da interface, com suporte a português e inglês, temas claro e escuro e adaptação para computadores e celulares. O objetivo é apresentar meu trabalho de forma rápida, clara e interativa, sem necessidade de cadastro ou login.',
        technologies: ['TypeScript', 'React', 'Supabase', 'Docker'],
        repoLink: 'https://github.com/leopettersen/portifolio'
    },
    {
        name: 'Opera Máquinas (OPM)',
        date: 'Jul 2026',
        description: 'Interface web voltada para a otimização e gestão da produção em ambientes industriais, centralizando ferramentas essenciais para a rotina operacional. O sistema busca organizar processos críticos, como o controle de login e cadastro de usuários por função.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        repoLink: 'https://github.com/leopettersen/trabalho-intedisciplinar1-opm',
        image: '/images/projects/OPM.png'
    }
]