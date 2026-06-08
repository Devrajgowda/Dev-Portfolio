import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home",     target: "home" },
  { label: "About",    target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Blog",     route: "/blogs" },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTarget = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
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
        scrolled || menuOpen
          ? "bg-[#fafaf8]/95 backdrop-blur-xl border-b border-[#e2e2de]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Branding */}
          <button
            onClick={() => handleNav({ target: "home" })}
            className="flex items-center cursor-pointer group"
          >
            <span className="w-9 h-9 rounded-xl bg-[#171a20] flex items-center justify-center transition-all duration-200 group-hover:bg-[#2d2d2d] group-hover:scale-105 group-active:scale-95">
              <span className="text-white text-sm font-bold tracking-tight">DG</span>
            </span>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link)}
                  className="link-slide text-sm text-[#767676] hover:text-[#171a20] transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="mailto:devrajgowda.d@gmail.com"
              className="btn-tactile text-sm font-medium px-5 py-2 rounded-full bg-[#171a20] text-white hover:bg-[#2d2d2d]"
            >
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-[#171a20] transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block w-5 h-px bg-[#171a20] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#171a20] transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden grid overflow-hidden transition-all duration-300 ${menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden border-t border-[#e2e2de]">
            <div className="flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link)}
                  className="px-2 py-2.5 text-left text-sm text-[#767676] hover:text-[#171a20] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:devrajgowda.d@gmail.com"
                className="mt-2 px-5 py-2.5 text-center text-sm font-medium rounded-full bg-[#171a20] text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
