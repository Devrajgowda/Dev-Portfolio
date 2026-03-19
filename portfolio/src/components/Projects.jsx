import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import projects from "../data/projects";

const Projects = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [smallRef, smallVisible] = useScrollReveal(0.05);

  const featured = projects.filter((p) => p.tier === "complete");
  const small = projects.filter((p) => p.tier === "small");

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto space-y-12">
        <div
          ref={sectionRef}
          className={`text-center transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-label">#works</span>
          <h2 className="text-4xl sm:text-5xl font-semibold mt-4">
            Systems-heavy client work &amp; experimental builds
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto mt-4">
            From end-to-end product launches to rapid exploratory prototypes,
            these projects highlight how design systems, motion, and code ship
            as one cohesive story.
          </p>
        </div>

        {/* Complete apps */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
              /complete-apps
            </p>
            <p className="text-xs text-slate-500">
              {featured.length.toString().padStart(2, "0")} case studies
            </p>
          </div>

          <div
            className={`grid md:grid-cols-2 xl:grid-cols-3 gap-5 transition-all duration-700 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {featured.map((project, index) => (
              <article
                key={project.id}
                className="panel border border-border/70 rounded-[28px] p-6 flex flex-col gap-4 hover:border-accent-purple/40 transition-all duration-300"
                style={{
                  transitionDelay: sectionVisible ? `${index * 80}ms` : "0ms",
                }}
              >
                <header className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.3em] text-slate-500">
                  <span>{project.year}</span>
                  <span className="px-3 py-1 rounded-full border border-border-light/60 text-[10px]">
                    {project.category}
                  </span>
                </header>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-50 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.tagline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg border border-border-light/50 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
                  <div className="border border-border-light/60 rounded-2xl px-3 py-2 bg-bg-primary/60">
                    <p className="mb-1">role</p>
                    <p className="text-slate-200 text-[11px] tracking-normal font-sans">
                      {project.role}
                    </p>
                  </div>
                  <div className="border border-border-light/60 rounded-2xl px-3 py-2 bg-bg-primary/60">
                    <p className="mb-1">duration</p>
                    <p className="text-slate-200 text-[11px] tracking-normal font-sans">
                      {project.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
                    case study
                  </span>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-purple-light hover:gap-3 transition-all duration-200"
                  >
                    view ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Small projects */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
              /small-projects
            </p>
            <p className="text-xs text-slate-500">
              {small.length.toString().padStart(2, "0")} shipped modules
            </p>
          </div>

          <div
            ref={smallRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 ${
              smallVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {small.map((project, index) => (
              <article
                key={project.id}
                className="panel border border-border/60 rounded-3xl p-5 flex flex-col gap-3 hover:border-accent-purple/30 transition-all duration-300"
                style={{
                  transitionDelay: smallVisible ? `${index * 70}ms` : "0ms",
                }}
              >
                <header className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">
                  <span>{project.year}</span>
                  <span>{project.category}</span>
                </header>
                <div>
                  <h4 className="text-base font-semibold text-slate-100">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md border border-border-light/60 text-[11px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">
                    explore
                  </span>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-xs text-accent-purple-light hover:gap-3 transition-all"
                  >
                    Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
