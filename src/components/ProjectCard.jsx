export default function ProjectCard({ project, flipped, onFlip }) {
  return (
    <div
      className={`card h-[420px] w-[300px] cursor-pointer ${flipped ? "flipped" : ""}`}
      onClick={onFlip}
    >
      <div className="card-inner relative h-full w-full">
        <div className="card-front absolute flex h-full w-full flex-col items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-4 text-center">
          <h3 className="text-2xl font-bold text-accent-orange">{project.title}</h3>
          <img
            src={project.image}
            alt={project.title}
            className="h-[60%] w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
          />
          <p className="text-sm text-white/60">Click to flip</p>
        </div>
        <div className="card-back absolute flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-white/30 bg-black/70 p-5 text-center">
          <p className="text-justify text-sm leading-relaxed text-white/90">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-bold text-accent-cyan underline-offset-2 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
