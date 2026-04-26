interface LogosSectionProps {
  logos: string[];
}

export default function LogosSection({ logos }: LogosSectionProps) {
  return (
    <section className="border-t border-white/10 py-12 sm:py-16">
      <div className="flex flex-wrap items-center gap-3 text-sm text-white/45">
        <span className="mr-3 text-[11px] uppercase tracking-[0.28em]">Worked on products for</span>
        {logos.map((logo) => (
          <div
            key={logo}
            className="logo-tile rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 uppercase tracking-[0.22em] text-white/72"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
