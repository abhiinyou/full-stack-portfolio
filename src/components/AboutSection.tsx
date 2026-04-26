export default function AboutSection() {
  return (
    <section id="about" className="border-t border-white/10 py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Engineering products that are fast, reusable, and production ready.
          </h2>
        </div>

        <div className="space-y-5 text-white/68">
          <p className="text-base leading-7">
            I’m a Full Stack Software Engineer with ~2+ years of experience specialising in React.js,
            React Native, and TypeScript. My core strength lies in building scalable mobile solutions
            and high-performance web apps using SOLID principles and clean architecture.
          </p>
          <p className="text-base leading-7">
            I bring full-stack depth across Node.js, REST APIs, microservices, PostgreSQL, MongoDB,
            and cloud platforms like Azure - enabling me to ship complete, production-ready features
            rather than isolated UI screens.
          </p>
          <p className="text-base leading-7">
            I’ve contributed to enterprise products trusted by Bajaj, KTM, Ather, and Ford, focusing
            on schema-driven architecture, developer efficiency, real-time integrations, and measurable
            business impact at scale.
          </p>
        </div>
      </div>
    </section>
  );
}
