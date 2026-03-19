import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import blogs from "../data/blogs";

const latest = blogs.slice(0, 6);

const Blogs = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.05);

  return (
    <section id="blogs" className="py-24 px-4 sm:px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto space-y-12">
        <div
          ref={sectionRef}
          className={`text-center transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-label">#knowledge-base</span>
          <h2 className="text-4xl sm:text-5xl font-semibold mt-4">
            Writing about design systems, UX research &amp; front-end craft
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto mt-4">
            Weekly notes that document how I run workshops, translate Figma to
            React, and keep design decisions transparent for the whole team.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {latest.map((post, index) => (
            <article
              key={post.id}
              className="panel border border-border/60 rounded-[26px] p-5 flex flex-col gap-4 hover:border-accent-purple/40 transition-all duration-300"
              style={{
                transitionDelay: gridVisible ? `${index * 70}ms` : "0ms",
              }}
            >
              <header className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">
                <span>{post.tag}</span>
                <span>{post.displayDate}</span>
              </header>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">
                  {post.readTime}
                </p>
                <h3 className="text-lg font-semibold text-slate-100">
                  {post.title}
                </h3>
              </div>
              <p className="text-slate-400 text-sm flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-2 border-t border-border/60">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">
                  article
                </span>
                <Link
                  to={`/blogs/${post.id}`}
                  className="inline-flex items-center gap-2 text-xs text-accent-purple-light hover:gap-3 transition-all duration-200"
                >
                  Read ↗
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-border-light/60 text-xs font-mono uppercase tracking-[0.3em] text-slate-300 hover:border-accent-purple/40 hover:text-accent-purple-light transition-all duration-200"
          >
            View archive
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
