import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16">
      <h1
        className="mb-8 text-center text-4xl font-bold text-accent-cyan"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Skills
      </h1>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-5">
        {skills.map((skill) => (
          <img
            key={skill.alt}
            src={skill.src}
            alt={skill.alt}
            className="h-[220px] w-[260px] rounded-lg border-2 border-white object-cover transition-all duration-300 hover:scale-105 hover:shadow-[1px_2px_5px_2px_rgba(255,255,255,0.8)] md:h-[260px] md:w-[320px]"
          />
        ))}
      </div>
    </section>
  );
}
