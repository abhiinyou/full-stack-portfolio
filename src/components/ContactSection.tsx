import { ArrowRight, Download } from "./icons";
import resumePDF from "../assets/Abhijeet_Kashide_CV.pdf";

export default function ContactSection() {
  const infoCards = [
    { label: "Email", value: "abhiinyou.dev@gmail.com" },
    { label: "Phone", value: "+91 7709207690" },
    { label: "Location", value: "Maharashtra, India" },
    { label: "Status", value: "Open to opportunities" },
  ];

  return (
    <section id="contact" className="border-t border-white/10 py-20">
      <div className="rounded-[32px] border border-white/10 bg-white/[0.03] px-6 py-8 sm:px-10 sm:py-12">
        <p className="text-xs uppercase tracking-[0.28em] text-white/45">Contact</p>

        <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Let's build something impactful.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/62">
              Open to Full Stack roles, React.js, React Native work, and MERN stack opprtunities remotely.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:abhiinyou.dev@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={resumePDF}
              download="Abhijeet_Kashide_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Resume
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {infoCards.map(({ label, value }) => (
            <div
              key={label}
              className="contact-card rounded-[22px] border border-white/10 bg-black/60 p-5"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-white/40">{label}</p>
              <p className="mt-3 text-sm text-white/78">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
