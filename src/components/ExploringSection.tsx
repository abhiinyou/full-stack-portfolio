import { motion } from "framer-motion";

interface ExploringSectionProps {
  exploring: string[];
}

export default function ExploringSection({ exploring }: ExploringSectionProps) {
  return (
    <section className="border-t border-white/10 py-20">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.28em] text-white/45">Currently Learning</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
          What I'm sharpening next
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {exploring.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="explore-card rounded-[24px] border border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-white/72"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
