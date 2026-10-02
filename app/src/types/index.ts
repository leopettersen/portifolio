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