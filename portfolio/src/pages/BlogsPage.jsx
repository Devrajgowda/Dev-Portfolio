import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogs from "../data/blogs";

const TAGS = ["All", ...Array.from(new Set(blogs.map((b) => b.tag)))];

const BlogsPage = () => {
  const [search, setSearch]       = useState("");
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tagParam = params.get("tag");
    if (tagParam && TAGS.includes(tagParam)) setActiveTag(tagParam);
  }, []);

  const filtered = useMemo(() => {
    return blogs.filter((post) => {
      const matchesTag    = activeTag === "All" || post.tag === activeTag;
      const q             = search.trim().toLowerCase();
      const matchesSearch = q.length === 0 || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q);
      return matchesTag && matchesSearch;
    });
  }, [search, activeTag]);

  return (
    <div className="bg-[#fafaf8] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <span className="section-label mb-5 block w-fit mx-auto">Blog archive</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171a20]">
              Field notes on engineering,<br />cloud, and craft
            </h1>
            <p className="text-[#767676] max-w-xl mx-auto text-base leading-relaxed">
              A running log of experiments, case studies, and principles learned
              from shipping cloud-native systems.
            </p>
          </div>

          {/* Search + filters */}
          <div className="bg-white border border-[#e2e2de] rounded-2xl p-6 space-y-5">
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <label className="flex-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] block mb-2">Search</span>
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9a9a9a]"
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full bg-[#fafaf8] border border-[#e2e2de] rounded-xl pl-10 pr-4 py-3 text-sm text-[#171a20] placeholder-[#b8b8b8] outline-none focus:border-[#171a20]/40 transition-colors"
                  />
                </div>
              </label>
              <span className="text-xs text-[#9a9a9a] pb-3">
                {filtered.length.toString().padStart(2, "0")} articles
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3.5 py-1.5 rounded-full text-xs border transition-all duration-200 ${
                    activeTag === tag
                      ? "bg-[#171a20] text-white border-[#171a20]"
                      : "text-[#474747] border-[#e2e2de] hover:border-[#171a20]/30 hover:text-[#171a20]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Article list */}
          <div className="space-y-4">
            {filtered.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-[#e2e2de] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#171a20]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs px-2.5 py-1 rounded-full border border-[#e2e2de] text-[#9a9a9a]">{post.tag}</span>
                  <span className="text-xs text-[#9a9a9a]">{post.displayDate}</span>
                  <span className="text-xs text-[#9a9a9a]">·</span>
                  <span className="text-xs text-[#9a9a9a]">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-semibold text-[#171a20]">{post.title}</h2>
                <p className="text-[#767676] text-sm leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-3 border-t border-[#e2e2de]">
                  <div className="flex flex-wrap gap-2">
                    {post.keyTakeaways.slice(0, 2).map((takeaway) => (
                      <span
                        key={takeaway}
                        className="px-2.5 py-1 rounded-full border border-[#e2e2de] text-xs text-[#9a9a9a]"
                      >
                        {takeaway.split(":")[0]}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blogs/${post.id}`}
                    className="text-sm font-medium text-[#171a20] hover:opacity-60 transition-opacity"
                  >
                    Read ↗
                  </Link>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="bg-white border border-[#e2e2de] rounded-2xl p-14 text-center text-[#9a9a9a]">
                <p className="text-3xl mb-3">🧐</p>
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
