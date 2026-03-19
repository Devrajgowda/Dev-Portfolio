import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogs from "../data/blogs";

const TAGS = ["All", ...Array.from(new Set(blogs.map((b) => b.tag)))];

const BlogsPage = () => {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tagParam = params.get("tag");
    if (tagParam && TAGS.includes(tagParam)) {
      setActiveTag(tagParam);
    }
  }, []);

  const filtered = useMemo(() => {
    return blogs.filter((post) => {
      const matchesTag = activeTag === "All" || post.tag === activeTag;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        q.length === 0 ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q);
      return matchesTag && matchesSearch;
    });
  }, [search, activeTag]);

  return (
    <div className="bg-bg-primary text-slate-100 min-h-screen">
      <Navbar />
      <main className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <span className="section-label">#blog-archive</span>
            <h1 className="text-4xl sm:text-5xl font-semibold">
              Field notes on design systems, UX processes &amp; front-end craft
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A running log of experiments, case studies, and principles learned
              from shipping design-led products for SaaS teams.
            </p>
          </div>

          <div className="panel border border-border/70 rounded-[28px] p-5 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <label className="flex-1">
                <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-slate-500 block mb-2">
                  search
                </span>
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Figma tokens, animation, handoff..."
                    className="w-full bg-bg-secondary/70 border border-border-light/70 rounded-2xl pl-10 pr-4 py-3 text-sm outline-none focus:border-accent-purple/70 transition-all"
                  />
                </div>
              </label>
              <div className="flex items-end text-xs text-slate-500 font-mono uppercase tracking-[0.3em]">
                {filtered.length.toString().padStart(2, "0")} articles
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-[0.2em] border transition-all duration-200 ${
                    activeTag === tag
                      ? "bg-gradient-purple text-white border-transparent glow-purple"
                      : "text-slate-400 border-border-light hover:text-accent-purple-light hover:border-accent-purple/50"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {filtered.map((post) => (
              <article
                key={post.id}
                className="panel border border-border/60 rounded-[28px] p-6 flex flex-col gap-4 hover:border-accent-purple/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">
                  <span>{post.tag}</span>
                  <span>·</span>
                  <span>{post.displayDate}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-semibold text-slate-50">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-2 border-t border-border/60">
                  <div className="flex flex-wrap gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">
                    {post.keyTakeaways.slice(0, 2).map((takeaway) => (
                      <span
                        key={takeaway}
                        className="px-2 py-1 rounded-lg border border-border-light/60 bg-bg-secondary/70 text-[10px] tracking-[0.18em]"
                      >
                        {takeaway.split(":")[0]}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blogs/${post.id}`}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent-purple-light hover:gap-3 transition-all"
                  >
                    Read
                    <span>↗</span>
                  </Link>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="panel border border-border/60 rounded-[28px] p-12 text-center text-slate-500">
                <p className="text-4xl mb-4">🧐</p>
                <p>No posts match that search.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
