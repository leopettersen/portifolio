import { pt } from './pt';
import imgPortoesDoCeu from '../../assets/PortoesDoCeu.jpeg';
import imgOpm from '../../assets/OPM.png';

export const en: typeof pt = {
  terminal: {
    role: 'Software Engineering Student',
    university: 'PUC Minas',
    typeMessage: 'type',
    typeCommand: 'help',
    toSeeCommands: 'to see available commands',
  },
  about: {
    sections: {
      education: 'Education',
      interests: 'Interests',
      goals: 'Goals'
    },
    overviewTitle: 'Leonardo Federici Pettersen',
    overviewParagraph: 'Software Engineering student at PUC Minas, starting my journey in technology and software development. Passionate about tech, programming, and innovation.',
    education: {
      title: 'Software Engineering',
      period: 'Jan 2026 - Dec 2029',
      college: 'PUC Minas',
      description: 'The course covers subjects such as computer programming, programming languages, statistics, mathematical logic applied to software specifications, technical aspects of software engineering like analysis, modeling, design, construction, and software testing. It also covers managerial aspects such as software project management, configuration and evolution management, software quality assurance, and production management. It includes teamwork, people management, communication with stakeholders, and human-computer interaction. It also addresses modern technologies needed for software construction like databases, computer networks, operating systems, distributed systems, security, and cloud/mobile technologies.',
      tags: ['Software Architecture', 'Cloud & Mobile', 'Construction & Testing', 'Project Management', 'Software Quality']
    },
    interestsDescription: 'Besides my interest in tech and software development, I am passionate about soccer and sports in general, a massive Cruzeiro fan! I follow Brazilian and international soccer, and I also enjoy swimming, basketball, and american football.',
    interestsTags: ['Sports', 'Soccer', 'Innovation', 'Programming', 'Technology'],
    goals: [
      {
        title: 'Participate in a WeMakeSoftware',
        description: 'Participate in a WeMakeSoftware event with my group to experience presenting a software project to an evaluation panel and receive valuable feedback.'
      },
      {
        title: 'Contribute to open-source projects',
        description: 'Contribute to open-source projects with code, documentation, or tests, to learn from the community and help improve software used by many people, as I am an avid user myself.'
      },
      {
        title: 'Establish a solid career in software development',
        description: 'Become a highly qualified software developer, contributing to innovative and impactful projects.'
      }
    ]
  },
  workModels: {
    onsite: 'On-site',
    hybrid: 'Hybrid',
    remote: 'Remote',
  },
  experiences: [
    {
      organization: 'dti digital',
      period: 'Oct 2026 - Present',
      experiencePosition: 'Software Development Intern',
      workModel: 'hybrid',
      description: 'My first professional experience in Software Development.',
      skills: ['C#', '.NET', 'React', 'TypeScript']
    },
    {
      organization: 'PUC Minas',
      period: 'Aug 2026 - Present',
      experiencePosition: 'Introduction to Algorithms Teaching Assistant',
      workModel: 'onsite',
      description: 'I work as a teaching assistant for the discipline, aiming to mitigate individual difficulties and the historical retention rate of the subject.',
      skills: ['Teaching', 'Leadership', 'Python']
    }
  ],
  projectUI: {
    imageComingSoon: 'Image coming soon'
  },
  projects: [
    {
      name: 'Hospital System - Gates of Heaven',
      date: 'Dec 2026',
      description: 'Web hospital management system developed in Java with Spring Boot, using a REST API and a relational database for managing patients, professionals, appointments, and hospitalizations. The application organizes essential processes, such as scheduling, room control, and medical records.',
      technologies: ['Java', 'SpringBoot', 'Thymeleaf', 'MySQL'],
      repoLink: 'https://github.com/leopettersen/TP-sistema-hospitalar',
      image: imgPortoesDoCeu,
    },
    {
      name: 'Professional Portfolio',
      date: 'Oct 2026',
      description: 'The system showcases my journey, projects, experiences, and contact methods in an interface inspired by a desktop with a terminal. Navigation can be done via commands or interface icons, with support for Portuguese and English, light and dark themes, and responsive design for computers and mobile devices. The goal is to present my work quickly, clearly, and interactively, without requiring registration or login.',
      technologies: ['TypeScript', 'React', 'Supabase', 'Docker'],
      repoLink: 'https://github.com/leopettersen/portifolio'
    },
    {
      name: 'Machine Operation (OPM)',
      date: 'Jul 2026',
      description: 'Web interface aimed at optimizing and managing production in industrial environments, centralizing essential tools for the operational routine. The system seeks to organize critical processes, such as login control and role-based user registration.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      repoLink: 'https://github.com/leopettersen/trabalho-intedisciplinar1-opm',
      image: imgOpm,
    }
  ],
  contact: {
    title: 'Send a message',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Type your message...',
    sendButton: 'Send message',
    sendingButton: 'Sending...',
    successMsg: 'Message sent! Thank you for reaching out.',
    errorMsg: 'Could not send. Please try again or use one of the contacts above.',
    errors: {
      nameRequired: 'Please enter your name.',
      emailRequired: 'Please enter your email.',
      emailInvalid: 'Invalid email format.',
      messageRequired: 'Please enter a message.',
      messageMinLength: 'Message must be at least 10 characters long.'
    }
  }
};