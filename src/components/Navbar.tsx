import { useState } from "react";
import { Download, MenuIcon, XIcon } from "./icons";
import type { NavItem } from "../types";

interface NavbarProps {
  navItems: NavItem[];
  activeSection: string;
}

export default function Navbar({ navItems, activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="text-sm font-medium tracking-[0.28em] text-white/90 uppercase">
          Abhijeet
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition hover:text-white ${activeSection === item.id ? "nav-link-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Abhijeet_Kashide_CV.pdf"
            download="Abhijeet_Kashide_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white transition hover:border-white/35 hover:bg-white/5"
          >
            Resume
            <Download className="h-4 w-4" />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/15 p-2 text-white md:hidden"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href="/Abhijeet_Kashide_CV.pdf"
              download="Abhijeet_Kashide_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              Resume
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
