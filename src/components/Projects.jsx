import { useState } from "react";
import { projects, featuredProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [flippedTitle, setFlippedTitle] = useState(null);

  const visible = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="px-6 py-16">
      <h1
        className="mb-8 text-center text-4xl font-bold text-accent-cyan"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Projects
      </h1>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-10">
        {visible.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            flipped={flippedTitle === project.title}
            onFlip={() =>
              setFlippedTitle((current) => (current === project.title ? null : project.title))
            }
          />
        ))}
      </div>
      {projects.length > featuredProjects.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="cursor-pointer rounded-md bg-accent-cyan px-6 py-2.5 font-bold text-black transition hover:brightness-110"
          >
            {showAll ? "Show Fewer Projects" : "View All Projects"}
          </button>
        </div>
      )}
    </section>
  );
}
