import type { WorkModel } from '../types';
import { experiences } from '../data/experiences';
import { Tag } from '../components/ui/Tag';

const workModelLabels: Record<WorkModel, string> = {
    onsite: 'Presencial',
    hybrid: 'Híbrido',
    remote: 'Remoto',
};

export function ExperiencePage() {
    return (
        <div className="flex flex-col gap-6">

            {experiences.map((experience) => (
                <div key={experience.organization} className="flex flex-col gap-2 bg-slate-800/60 p-4 rounded-lg">

                    <div className="flex items-baseline justify-between gap-4">
                        <h1 className="text-xl font-bold">
                            {experience.organization}
                        </h1>

                        <span className="text-sm font-semibold text-slate-400">
                            {experience.period}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold">
                            {experience.experiencePosition}
                        </h2>

                        <span className="bg-slate-700/60 px-2 py-1 rounded-md text-sm text-slate-400">
                            {workModelLabels[experience.workModel]}
                        </span>
                    </div>

                    <p className="text-slate-400">
                        {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {experience.skills.map((skill) => (
                            <Tag key={skill}>{skill}</Tag>
                        ))}
                    </div>

                </div>
            ))}

        </div>
    );
}