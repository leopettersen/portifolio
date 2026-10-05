import type {LucideIcon} from 'lucide-react';

export type SectionId = 'about' | 'experience' | 'contact' | 'projects' | 'guestbook';

export interface Section {
    id: SectionId;
    command: string;
    windowTitle: string;
    icon: LucideIcon;
    showShortcut: boolean;
    showChip: boolean;
}

export interface Goal {
    title: string;
    description: string;
}

export interface Education {
    title: string;
    period: string;
    college: string;
    description: string;
    tags: string[];
}

export interface About {
    overviewTitle: string;
    overviewParagraph: string;
    education: Education;
    interestsDescription: string;
    interestsTags: string[];
    goals: Goal[];
}

export interface HistoryEntry {
  command: string;
  output: string;
}

export type WorkModel = 'onsite' | 'hybrid' | 'remote';

export interface Experience {
    organization: string;
    period: string;
    experiencePosition: string;
    workModel: WorkModel;
    description: string;
    skills: string[];
}

export interface Project {
    name: string;
    date: string;
    description: string;
    tecnologies: string[];
    repoLink: string;
    image?: string;
}