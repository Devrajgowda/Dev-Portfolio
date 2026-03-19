import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "#home", target: "home" },
  { label: "#about-me", target: "about" },
  { label: "#projects", target: "projects" },
  { label: "#blogs", route: "/blogs" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTarget = (target) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNav = (link) => {
    setMenuOpen(false);
    if (link.route) {
      if (location.pathname !== link.route) navigate(link.route);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/", { state: { target: link.target } });
      return;
    }
    scrollToTarget(link.target);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-secondary/90 backdrop-blur-2xl border-b border-border/70 shadow-[0_12px_60px_rgba(4,6,20,0.45)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 py-4">
          {/* Branding */}
          <button
            onClick={() => handleNav({ target: "home" })}
            className="flex items-center gap-3 px-4 py-2 rounded-xl border border-border-light/70 bg-bg-card/60 hover:border-accent-purple/50 transition-all duration-200 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse2" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-slate-300">
              @devaraj.dev
            </span>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-3 flex-1 justify-end mr-[72px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link)}
                  className="px-3 py-2 text-xs font-mono tracking-[0.15em] uppercase text-slate-400 hover:text-accent-purple-light hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              className="md:hidden flex flex-col gap-1 p-2 border border-border-light/70 rounded-xl"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-slate-100 rounded transition-all duration-300 ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-slate-100 rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-slate-100 rounded transition-all duration-300 ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile list */}
        <div
          className={`md:hidden grid overflow-hidden transition-all duration-300 ${
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden border-t border-border/60">
            <div className="flex flex-col py-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link)}
                  className="px-3 py-2 text-left text-xs font-mono tracking-[0.15em] uppercase text-slate-400 hover:text-accent-purple-light hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
