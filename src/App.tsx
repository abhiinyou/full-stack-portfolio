import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { exploring, logos, navItems, projects, skillCategories, stats, timeline } from "./data";

import AboutSection from "./components/AboutSection";
import CaseStudySection from "./components/CaseStudySection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import ExploringSection from "./components/ExploringSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LogosSection from "./components/LogosSection";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import TechStackSection from "./components/TechStackSection";
import WorkSection from "./components/WorkSection";

import "./styles.css";


export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  /* Intersection observer - keeps the active nav link in sync */
  useEffect(() => {
    const ids = ["home", "work", "case-study", "experience", "about", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: "-20% 0px -20% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* ── Grain + animated background ── */}
      <div className="grain relative overflow-hidden">
        <div className="mesh">
          <motion.div
            className="grid-bg absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          <div className="orb one" />
          <div className="orb two" />
          <div className="orb three" />
        </div>

        {/* ── Sticky navbar ── */}
        <Navbar navItems={navItems} activeSection={activeSection} />

        {/* ── Page sections ── */}
        <main id="home" className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <HeroSection />
          <StatsSection stats={stats} />
          <LogosSection logos={logos} />
          <WorkSection projects={projects} />
          <CaseStudySection />
          <ExperienceSection timeline={timeline} />
          <AboutSection />
          <TechStackSection skillCategories={skillCategories} />
          <ExploringSection exploring={exploring} />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
