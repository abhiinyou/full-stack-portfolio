import { motion } from "framer-motion";
import type { TimelineItem } from "../types";

interface ExperienceSectionProps {
  timeline: TimelineItem[];
}

export default function ExperienceSection({ timeline }: ExperienceSectionProps) {
  return (
    <section id="experience" className="border-t border-white/10 py-20">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.28em] text-white/45">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
          A focused growth path
        </h2>
      </div>

      <div className="relative pl-12 sm:pl-16">
        <div className="timeline-line absolute left-4 top-2 h-[calc(100%-1rem)] w-px" />
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/42">{item.period}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{item.role}</h3>
              <p className="mt-2 text-white/58">{item.company}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68">{item.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
