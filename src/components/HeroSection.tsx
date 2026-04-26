import { motion } from "framer-motion";
import React, { useState } from "react";
import heroImage from "../assets/profile.png";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "./icons";

export default function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (0.5 - py) * 18, y: (px - 0.5) * 18 });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section className="grid min-h-[calc(100vh-73px)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
      {/* ── Left: text content ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <div className="mb-6 inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/65">
          Full Stack Engineer · React Native Specialist · System Thinker
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-tight sm:text-6xl lg:text-8xl">
          Abhijeet
          <span className="block stroke-text">Kashide</span>
          builds at scale.
        </h1>

        <p className="mt-7 max-w-xl text-base leading-7 text-white/68 sm:text-lg">
          Software Engineer with 2+ years of experience building scalable web and mobile applications
          using React, React Native, and TypeScript with production impact across enterprise platforms
          and apps used by 500k+ users.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            View Work
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          {/* <a
            href="/Abhijeet_Kashide_CV.pdf"
            download="Abhijeet_Kashide_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Download Resume
            <Download className="h-4 w-4" />
          </a> */}
          <a
            href="mailto:abhiinyou.dev@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 space-y-2 text-sm text-white/52">
          <p className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Maharashtra, India
          </p>
          <p>+91 7709207690 · abhiinyou.dev@gmail.com</p>
        </div>

        <div className="mt-10 flex items-center gap-5 text-white/60">
          <a href="https://github.com/abhiinyou" className="transition hover:text-white" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/abhijeet-kashide" className="transition hover:text-white" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:abhiinyou.dev@gmail.com" className="transition hover:text-white" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </motion.div>

      {/* ── Right: tilt card ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="relative flex items-center justify-center"
      >
        <div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="hero-card relative w-full max-w-[640px] overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.03] p-4 sm:p-5"
          style={{ transform: `perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
          <div
            className="shine"
            style={{
              ["--x" as string]: `${50 + tilt.y * 2.5}%`,
              ["--y" as string]: `${50 - tilt.x * 2.5}%`,
            }}
          />

          <div className="rounded-[24px] border border-white/10 bg-black/80 p-5 sm:p-7">
            {/* Profile image */}
            <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={heroImage}
                alt="Portrait of Abhijeet Kashide"
                className="h-48 w-full object-cover grayscale"
              />
            </div>

            {/* Current focus */}
            <div className="depth-1 mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">Current Focus</p>
                <p className="mt-2 text-sm text-white/85">
                  Scalable frontend systems, mobile apps, and reusable architecture
                </p>
              </div>
              {/* <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]" /> */}
            </div>

            {/* Stack + Approach grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="depth-2 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">Stack</p>
                <div className="mt-4 space-y-3 text-sm text-white/82">
                  <p>React / React Native / TypeScript</p>
                  <p>Redux Toolkit / TanStack Query / APIs</p>
                  <p>Responsive UI / Performance / Accessibility</p>
                </div>
              </div>

              <div className="depth-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">Approach</p>
                <div className="mt-4 space-y-3 text-sm text-white/82">
                  <p>Schema-driven product thinking</p>
                  <p>Clean and reusable systems</p>
                  <p>Business impact through engineering</p>
                </div>
              </div>
            </div>

            {/* Available for */}
            <div className="depth-1 mt-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/45">Available For</p>
                  <p className="mt-2 text-lg font-medium text-white">
                    Full Stack Roles · React Native · Product Engineering
                  </p>
                </div>
                <motion.div
                  className="h-3 w-3 shrink-0 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.9)]"
                  animate={{
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
