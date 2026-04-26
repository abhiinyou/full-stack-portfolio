import { motion } from "framer-motion";
import { ArrowRight } from "./icons";
import type { Project } from "../types";

interface WorkSectionProps {
  projects: Project[];
}

export default function WorkSection({ projects }: WorkSectionProps) {
  return (
    <section id="work" className="border-t border-white/10 py-20">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">Selected Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Built for scale, speed, and real users
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-white/62 sm:text-base">
          Strong engineering deserves strong presentation. These cards highlight product impact,
          architecture depth, and production experience.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="project-card group rounded-[30px] border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="relative z-10 flex h-full flex-col">
              {/* Header row */}
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">{item.year}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{item.subtitle}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/70 px-3 py-2 text-right">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">Impact</p>
                  <p className="mt-2 text-sm font-medium text-white/88">{item.impact}</p>
                </div>
              </div>

              <div className="project-line mb-5 h-px w-16 bg-white/40" />
              <p className="text-sm leading-6 text-white/65">{item.desc}</p>

              {/* Footer row */}
              <div className="mt-6 flex items-center justify-between gap-4 text-sm text-white/50">
                <span>{item.meta}</span>
                <span className="inline-flex items-center gap-2 text-white/72">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="project-tag rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/62"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
