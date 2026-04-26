import type { SkillCategory } from "../types";

interface TechStackSectionProps {
  skillCategories: SkillCategory[];
}

export default function TechStackSection({ skillCategories }: TechStackSectionProps) {
  return (
    <section className="border-t border-white/10 py-20">
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">Tech Stack</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            A modern engineering toolkit
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-white/62 sm:text-base">
          Structured to show frontend depth, backend understanding, and real-world integration
          experience.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map(({ category, items }) => (
          <div
            key={category}
            className="skill-card rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-white/40">{category}</p>
            <p className="mt-4 text-sm leading-7 text-white/72">{items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
