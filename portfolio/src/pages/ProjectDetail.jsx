import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const { id }       = useParams();
  const navigate     = useNavigate();
  const project      = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const [heroRef,       heroVisible]       = useScrollReveal(0.01);
  const [metaRef,       metaVisible]       = useScrollReveal(0.1);
  const [storyRef,      storyVisible]      = useScrollReveal(0.1);
  const [highlightsRef, highlightsVisible] = useScrollReveal(0.1);
  const [toolsRef,      toolsVisible]      = useScrollReveal(0.1);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#fafaf8] flex flex-col items-center justify-center gap-6 px-6">
        <h1 className="text-3xl font-semibold text-[#171a20]">Project not found</h1>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-[#171a20] text-white text-sm font-medium hover:bg-[#2d2d2d] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fafaf8] min-h-screen">
      <Navbar />
      <main className="pt-28 pb-24">

        {/* Breadcrumb */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between flex-wrap gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-[#767676] hover:text-[#171a20] transition-colors group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200">←</span>
            Back
          </button>
          <span className="section-label">{project.category}</span>
        </div>

        {/* Hero image */}
        <div
          ref={heroRef}
          className={`relative w-full overflow-hidden transition-all duration-1000 ${
            heroVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="relative rounded-2xl overflow-hidden border border-[#e2e2de]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[50vh] min-h-[320px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171a20]/80 via-[#171a20]/30 to-transparent" />
              <div className={`absolute bottom-0 left-0 right-0 px-8 pb-8 pt-16 transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                <p className="text-white/70 text-xs uppercase tracking-[0.25em] mb-2">
                  {project.year} · {project.role}
                </p>
                <h1 className="text-3xl md:text-5xl font-semibold text-white mb-2 leading-tight">
                  {project.title}
                </h1>
                <p className="text-white/80 text-base max-w-xl">{project.tagline}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 mt-12 space-y-16">

          {/* Meta strip */}
          <div
            ref={metaRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-700 ${
              metaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { label: "Year",     value: project.year },
              { label: "Role",     value: project.role },
              { label: "Duration", value: project.duration },
              { label: "Category", value: project.category },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className="bg-white border border-[#e2e2de] rounded-xl p-5 transition-all duration-500"
                style={{ transitionDelay: metaVisible ? `${i * 70}ms` : "0ms" }}
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] mb-1">{label}</p>
                <p className="text-sm font-semibold text-[#171a20]">{value}</p>
              </div>
            ))}
          </div>

          {/* Story */}
          <div
            ref={storyRef}
            className={`space-y-5 transition-all duration-700 ${
              storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-[#171a20]" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#171a20]">The Story</h2>
            </div>
            <div className="bg-white border border-[#e2e2de] rounded-2xl p-8">
              {project.longDescription.split("\n\n").map((para, i) => (
                <p key={i} className={`text-[#474747] leading-relaxed text-base ${i > 0 ? "mt-5" : ""}`}>
                  {para.trim()}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div
            ref={highlightsRef}
            className={`space-y-5 transition-all duration-700 ${
              highlightsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-[#171a20]" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#171a20]">Key Highlights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.highlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#e2e2de] rounded-xl p-5 flex items-start gap-3 hover:border-[#171a20]/20 transition-colors duration-300"
                  style={{ transitionDelay: highlightsVisible ? `${i * 70}ms` : "0ms" }}
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#171a20] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <p className="text-[#474747] text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div
            ref={toolsRef}
            className={`space-y-5 transition-all duration-700 ${
              toolsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-[#171a20]" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#171a20]">Tools & Stack</h2>
            </div>
            <div className="bg-white border border-[#e2e2de] rounded-2xl p-6">
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full border border-[#e2e2de] text-sm text-[#474747] transition-all duration-400"
                    style={{
                      transitionDelay: toolsVisible ? `${i * 50}ms` : "0ms",
                      opacity: toolsVisible ? 1 : 0,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white border border-[#e2e2de] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-sm text-[#9a9a9a] mb-1">Interested in more?</p>
              <p className="font-semibold text-[#171a20]">Browse all projects</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-full border border-[#e2e2de] text-sm text-[#474747] hover:border-[#171a20]/30 hover:text-[#171a20] transition-all duration-200"
              >
                ← Previous
              </button>
              <Link
                to="/#projects"
                className="px-6 py-3 rounded-full bg-[#171a20] text-white text-sm font-medium hover:bg-[#2d2d2d] transition-colors duration-200"
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
