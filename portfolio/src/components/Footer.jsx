import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import githubIcon   from "../assets/Github.svg";
import linkedinIcon from "../assets/Linkedin.svg";
import twitterIcon  from "../assets/Twitter.svg";
import awsBadge     from "../assets/aws-certified.png";

const socials = [
  { icon: githubIcon,   label: "GitHub",   href: "https://github.com/devaraj-ncirl" },
  { icon: linkedinIcon, label: "LinkedIn",  href: "https://www.linkedin.com/in/devarajdevegowda" },
  { icon: twitterIcon,  label: "Twitter",   href: "https://twitter.com" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [ref, visible] = useScrollReveal(0.05);

  return (
    <footer className="bg-[#fafaf8] border-t border-[#e2e2de] px-6 sm:px-8">
      <div className="max-w-6xl mx-auto py-16 space-y-12">

        {/* Main CTA row */}
        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 items-start transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Quote left */}
          <blockquote className="bg-white border border-[#e2e2de] rounded-2xl p-6">
            <p className="text-sm text-[#474747] leading-relaxed">
              &ldquo;Programs must be written for people to read, and only incidentally
              for machines to execute.&rdquo;
            </p>
            <p className="text-xs text-[#9a9a9a] mt-4">— Harold Abelson</p>
          </blockquote>

          {/* Center contact */}
          <div className="bg-white border border-[#e2e2de] rounded-2xl p-7 text-center flex flex-col items-center gap-5">
            <p className="text-2xl font-semibold text-[#171a20]">Say hello</p>
            <a
              href="mailto:devrajgowda.d@gmail.com"
              className="text-sm text-[#474747] hover:text-[#171a20] transition-colors"
            >
              devrajgowda.d@gmail.com
            </a>
            <a
              href="https://www.credly.com/badges/f5c0f812-ed9b-4a10-9f92-925902859f7a/linked_in_profile"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <img src={awsBadge} alt="AWS Certified" className="w-14 h-14 object-contain" />
              <p className="text-xs text-[#9a9a9a] group-hover:text-[#474747] transition-colors">
                AWS Developer Associate
              </p>
            </a>
            <div className="flex gap-2">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="btn-tactile w-9 h-9 flex items-center justify-center rounded-full border border-[#e2e2de] bg-[#fafaf8] hover:border-[#171a20]"
                >
                  <img src={icon} alt={label} className="w-4 h-4" style={{ filter: "brightness(0)" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quote right */}
          <blockquote className="bg-white border border-[#e2e2de] rounded-2xl p-6 text-right">
            <p className="text-sm text-[#474747] leading-relaxed">
              &ldquo;First, solve the problem. Then, write the code.&rdquo;
            </p>
            <p className="text-xs text-[#9a9a9a] mt-4">— John Johnson</p>
          </blockquote>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#e2e2de]">
          <span className="text-xs text-[#9a9a9a]">
            © {currentYear} Devaraj Devegowda
          </span>
          <span className="text-xs text-[#9a9a9a]">
            Building reliable cloud software · Dublin, IE
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
