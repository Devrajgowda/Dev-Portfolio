import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const [heroRef, heroVisible] = useScrollReveal(0.01);
  const [metaRef, metaVisible] = useScrollReveal(0.1);
  const [storyRef, storyVisible] = useScrollReveal(0.1);
  const [highlightsRef, highlightsVisible] = useScrollReveal(0.1);
  const [toolsRef, toolsVisible] = useScrollReveal(0.1);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center gap-6 px-6">
        <h1 className="text-3xl font-bold text-slate-100">Project not found</h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-purple text-white font-semibold px-6 py-3 rounded-full glow-purple hover:-translate-y-0.5 transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-bg-primary text-slate-100 min-h-screen">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between flex-wrap gap-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200">
              ←
            </span>
            Back
          </button>
          <span className="section-label">
            #{project.category.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>

        <div
          ref={heroRef}
          className={`mt-6 relative w-full h-[55vh] min-h-[360px] overflow-hidden transition-all duration-1000 ${
            heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-[32px] overflow-hidden border border-border/60 shadow-card-soft">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[55vh] min-h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent" />
              <div
                className={`absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-10 pt-20 transition-all duration-700 delay-300 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="max-w-4xl">
                  <p className="text-accent-purple-light text-sm font-bold uppercase tracking-widest mb-2">
                    {project.year} · {project.role}
                  </p>
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-slate-300 text-lg md:text-xl max-w-2xl">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10 mt-16 space-y-20">
        {/* Meta strip */}
        <div
          ref={metaRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${
            metaVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { label: "Year", value: project.year },
            { label: "Role", value: project.role },
            { label: "Duration", value: project.duration },
            { label: "Category", value: project.category },
          ].map(({ label, value }, i) => (
            <div
              key={label}
              className="panel border border-border/70 rounded-3xl p-5 transition-all duration-500"
              style={{ transitionDelay: metaVisible ? `${i * 80}ms` : "0ms" }}
            >
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">
                {label}
              </p>
              <p className="text-slate-100 font-semibold text-sm leading-snug">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div
          ref={storyRef}
          className={`space-y-6 transition-all duration-700 ${
            storyVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent-purple rounded-full" />
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              The <span className="gradient-text-purple">Story</span>
            </h2>
          </div>
          <div className="panel border border-border/70 rounded-[32px] p-8">
            {project.longDescription.split("\n\n").map((para, i) => (
              <p
                key={i}
                className={`text-slate-300 leading-relaxed text-base md:text-lg ${
                  i > 0 ? "mt-6" : ""
                }`}
              >
                {para.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div
          ref={highlightsRef}
          className={`space-y-6 transition-all duration-700 ${
            highlightsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent-purple rounded-full" />
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Key <span className="gradient-text-purple">Highlights</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((item, i) => (
              <div
                key={i}
                className="panel flex items-start gap-3 border border-border/70 rounded-3xl p-5 transition-all duration-500 hover:border-accent-purple/40 hover:-translate-y-0.5"
                style={{
                  transitionDelay: highlightsVisible ? `${i * 80}ms` : "0ms",
                }}
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools used */}
        <div
          ref={toolsRef}
          className={`space-y-6 transition-all duration-700 ${
            toolsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent-purple rounded-full" />
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Tools & <span className="gradient-text-purple">Stack</span>
            </h2>
          </div>
          <div className="panel border border-border/70 rounded-[32px] p-6">
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, i) => (
                <span
                  key={tool}
                  className="bg-accent-purple/10 border border-accent-purple/30 text-accent-purple-light px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500"
                  style={{
                    transitionDelay: toolsVisible ? `${i * 60}ms` : "0ms",
                    opacity: toolsVisible ? 1 : 0,
                    transform: toolsVisible ? "scale(1)" : "scale(0.8)",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="panel border border-border/70 rounded-[32px] p-6 flex flex-col sm:flex-row items-center justify-between gap-6 mt-10">
          <div>
            <p className="text-slate-400 text-sm mb-1">Want to see more?</p>
            <p className="text-slate-100 font-semibold text-lg">
              Browse all my projects
            </p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 border border-border-light text-slate-300 hover:text-slate-100 hover:border-accent-purple/50 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
            >
              ← Previous
            </button>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 bg-gradient-purple text-white font-semibold px-6 py-3 rounded-full glow-purple hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              All Projects →
            </Link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
  );
};

export default ProjectDetail;
