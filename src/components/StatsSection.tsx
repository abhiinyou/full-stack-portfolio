import { motion } from "framer-motion";
import type { StatItem } from "../types";

interface StatsSectionProps {
  stats: StatItem[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="border-t border-white/10 py-12 sm:py-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="metric-card rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{item.value}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/45">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
