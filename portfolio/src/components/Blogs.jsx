import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import blogs from "../data/blogs";

const latest = blogs.slice(0, 6);

const Blogs = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [gridRef, gridVisible]       = useScrollReveal(0.05);

  return (
    <section id="blogs" className="py-28 px-6 sm:px-8 bg-[#f3f3f0]">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-label mb-5 block w-fit mx-auto">Writing</span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171a20]">
            Notes on engineering,<br />cloud, and craft
          </h2>
          <p className="text-[#767676] max-w-2xl mx-auto mt-5 text-base leading-relaxed">
            Weekly notes documenting how I run workshops, architect systems,
            and keep engineering decisions transparent for the whole team.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {latest.map((post, index) => (
            <article
              key={post.id}
              className="bg-white border border-[#e2e2de] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#171a20]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
              style={{ transitionDelay: gridVisible ? `${index * 60}ms` : "0ms" }}
            >
              <header className="flex items-center justify-between">
                <span className="text-xs px-2.5 py-1 rounded-full border border-[#e2e2de] text-[#9a9a9a]">
                  {post.tag}
                </span>
                <span className="text-xs text-[#9a9a9a]">{post.displayDate}</span>
              </header>

              <div>
                <p className="text-xs text-[#9a9a9a] mb-2">{post.readTime}</p>
                <h3 className="text-base font-semibold text-[#171a20] leading-snug">{post.title}</h3>
              </div>

              <p className="text-[#767676] text-sm flex-1 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between pt-3 border-t border-[#e2e2de]">
                <span className="text-xs text-[#9a9a9a]">Article</span>
                <Link
                  to={`/blogs/${post.id}`}
                  className="text-sm font-medium text-[#171a20] hover:opacity-60 transition-opacity"
                >
                  Read ↗
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className={`text-center transition-all duration-700 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#c0c0bc] text-sm text-[#474747] hover:border-[#171a20] hover:text-[#171a20] transition-all duration-200"
          >
            View all articles ↗
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Blogs;
