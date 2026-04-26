import { motion } from "framer-motion";

export default function CaseStudySection() {
  return (
    <section id="case-study" className="border-t border-white/10 py-20">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.28em] text-white/45">Featured Case Study</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">KTM India App</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-6 rounded-[32px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]"
      >
        {/* Narrative */}
        <div className="space-y-6">
          {[
            {
              label: "Challenge",
              text: "Improve stability, modernize the codebase, and ship customer-facing features in a production app used at scale without slowing release velocity.",
            },
            {
              label: "What I did",
              text: "Upgraded React Native from v0.69 to v0.73.8, implemented Microsoft CodePush for OTA updates, built booking and ride-tracking workflows, and integrated Firebase Cloud Messaging and analytics.",
            },
            {
              label: "Outcome",
              text: "Better app stability, faster critical bug rollouts, improved operational flexibility, and stronger support for a product with more than 500k downloads.",
            },
          ].map(({ label, text }) => (
            <div key={label}>
              <p className="text-sm uppercase tracking-[0.24em] text-white/42">{label}</p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-white/70">{text}</p>
            </div>
          ))}
        </div>

        {/* Meta cards */}
        <div className="grid gap-4 self-start sm:grid-cols-2 lg:grid-cols-1">
          {[
            { label: "Role", value: "Full Stack Software Engineer" },
            { label: "Timeline", value: "Dec 2024 – Jan 2025" },
            { label: "Core Stack", value: "React Native, TypeScript, Firebase, CodePush, FCM, Analytics" },
            { label: "Highlights", value: "500k+ downloads · RN v0.69 → v0.73.8 upgrade · OTA updates · Real-time workflows" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-[24px] border border-white/10 bg-black/70 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-white/40">{label}</p>
              <p className="mt-3 text-sm leading-7 text-white/72">{value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
