import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import projects from "../data/projects";

const Projects = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [smallRef, smallVisible]     = useScrollReveal(0.05);

  const featured = projects.filter((p) => p.tier === "complete");
  const small     = projects.filter((p) => p.tier === "small");

  return (
    <section id="projects" className="py-28 px-6 sm:px-8 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-label mb-5 block w-fit mx-auto">Projects</span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171a20]">
            Systems-heavy work &amp; experimental builds
          </h2>
          <p className="text-[#767676] max-w-2xl mx-auto mt-5 text-base leading-relaxed">
            From end-to-end product launches to rapid exploratory prototypes,
            highlighting how design, architecture, and code ship as one cohesive story.
          </p>
        </div>

        {/* Complete apps */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#e2e2de] pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a]">Complete apps</p>
            <p className="text-xs text-[#9a9a9a]">{featured.length.toString().padStart(2, "0")} case studies</p>
          </div>

          <div className={`grid md:grid-cols-2 xl:grid-cols-3 gap-4 transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {featured.map((project, index) => (
              <article
                key={project.id}
                className="bg-white border border-[#e2e2de] rounded-2xl p-6 flex flex-col gap-5 hover:border-[#171a20]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
                style={{ transitionDelay: sectionVisible ? `${index * 70}ms` : "0ms" }}
              >
                <header className="flex items-center justify-between">
                  <span className="text-xs text-[#9a9a9a]">{project.year}</span>
                  <span className="text-xs px-3 py-1 rounded-full border border-[#e2e2de] text-[#9a9a9a]">
                    {project.category}
                  </span>
                </header>

                <div>
                  <h3 className="text-xl font-semibold text-[#171a20] mb-2">{project.title}</h3>
                  <p className="text-[#767676] text-sm leading-relaxed">{project.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full border border-[#e2e2de] text-xs text-[#474747]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-[#e2e2de] rounded-xl px-3 py-2.5 bg-[#fafaf8]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] mb-0.5">Role</p>
                    <p className="text-xs text-[#2d2d2d]">{project.role}</p>
                  </div>
                  <div className="border border-[#e2e2de] rounded-xl px-3 py-2.5 bg-[#fafaf8]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] mb-0.5">Duration</p>
                    <p className="text-xs text-[#2d2d2d]">{project.duration}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-[#e2e2de]">
                  <span className="text-xs text-[#9a9a9a]">Case study</span>
                  <Link
                    to={`/project/${project.id}`}
                    className="group/link text-sm font-medium text-[#171a20] hover:opacity-60 transition-opacity"
                  >
                    View <span className="inline-block transition-transform duration-300 ease-out group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Small projects */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#e2e2de] pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a]">Small projects</p>
            <p className="text-xs text-[#9a9a9a]">{small.length.toString().padStart(2, "0")} shipped</p>
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
                className="bg-white border border-[#e2e2de] rounded-2xl p-5 flex flex-col gap-4 hover:border-[#171a20]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
                style={{ transitionDelay: smallVisible ? `${index * 60}ms` : "0ms" }}
              >
                <header className="flex items-center justify-between">
                  <span className="text-xs text-[#9a9a9a]">{project.year}</span>
                  <span className="text-xs text-[#9a9a9a]">{project.category}</span>
                </header>

                <div>
                  <h4 className="text-base font-semibold text-[#171a20]">{project.title}</h4>
                  <p className="text-[#767676] text-sm mt-1 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full border border-[#e2e2de] text-xs text-[#474747]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-[#e2e2de]">
                  <span className="text-xs text-[#9a9a9a]">Explore</span>
                  <Link
                    to={`/project/${project.id}`}
                    className="group/link text-sm font-medium text-[#171a20] hover:opacity-60 transition-opacity"
                  >
                    Details <span className="inline-block transition-transform duration-300 ease-out group-hover/link:translate-x-1">→</span>
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
