import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import profileImg from "../assets/image-removebg-preview 2.png";
import awsBadge from "../assets/aws-certified.png";
import githubIcon from "../assets/Github.svg";
import linkedinIcon from "../assets/Linkedin.svg";
import twitterIcon from "../assets/Twitter.svg";

const socials = [
  { icon: githubIcon,   label: "GitHub",   href: "https://github.com/devaraj-ncirl" },
  { icon: linkedinIcon, label: "LinkedIn",  href: "https://www.linkedin.com/in/devarajdevegowda" },
  { icon: twitterIcon,  label: "Twitter",   href: "https://twitter.com" },
];

const stats = [
  { label: "Years experience", value: "9+" },
  { label: "Cloud launches",   value: "25" },
  { label: "Releases / yr",    value: "24" },
  { label: "Engineers led",    value: "8+" },
];

const focus = [
  "Enterprise Java APIs",
  "Cloud-native migration",
  "Data pipelines",
  "Agile leadership",
];

const heroNotes = [
  { label: "Current role", value: "Lead Software Engineer · Fiserv" },
  { label: "Location",     value: "Dublin · Remote-friendly" },
  { label: "Phone",        value: "+353 894 525 190" },
  { label: "Available",    value: "Open to opportunities" },
];

const Hero = () => {
  const [contentRef, contentVisible] = useScrollReveal(0.1);
  const [photoRef, photoVisible]     = useScrollReveal(0.2);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen px-6 sm:px-8 pt-32 pb-20 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

        {/* Left column */}
        <div
          ref={contentRef}
          className={`space-y-10 transition-all duration-700 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="section-label mb-5 block w-fit">Lead Engineer</span>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-[#171a20]">
              Devaraj<br />Devegowda
            </h1>
            <p className="text-[#767676] text-base sm:text-lg mt-5 max-w-md leading-relaxed">
              9+ years building cloud-native Java systems — microservices,
              data pipelines, and platform migrations on AWS and Azure.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleScroll("projects")}
              className="btn-tactile px-6 py-3 bg-[#171a20] text-white text-sm font-medium rounded-full hover:bg-[#2d2d2d]"
            >
              View projects
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="btn-tactile px-6 py-3 border border-[#c0c0bc] text-[#474747] text-sm font-medium rounded-full hover:border-[#171a20] hover:text-[#171a20]"
            >
              About me
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#e2e2de] border border-[#e2e2de] rounded-2xl overflow-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white px-5 py-5">
                <p className="text-2xl font-semibold text-[#171a20]">{stat.value}</p>
                <p className="text-xs text-[#9a9a9a] mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Focus areas */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a] mb-3">
              Focus areas
            </p>
            <div className="flex flex-wrap gap-2">
              {focus.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-full border border-[#e2e2de] text-xs text-[#474747] bg-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a]">Find me</p>
            <div className="flex gap-2">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="btn-tactile w-9 h-9 flex items-center justify-center border border-[#e2e2de] rounded-full bg-white hover:border-[#171a20]"
                >
                  <img src={icon} alt={label} className="w-4 h-4" style={{ filter: "brightness(0)" }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div
          ref={photoRef}
          className={`relative transition-all duration-1000 ${
            photoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="group bg-white border border-[#e2e2de] rounded-3xl p-6 shadow-[0_4px_32px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)]">
            {/* Profile image */}
            <div
              className={`mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-[#f3f3f0] mb-6 ${
                photoVisible ? "animate-photo-in" : "opacity-0"
              }`}
            >
              <img
                src={profileImg}
                alt="Devaraj"
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-2.5">
              {heroNotes.map(({ label, value }) => (
                <div key={label} className="border border-[#e2e2de] rounded-xl px-3.5 py-3 bg-[#fafaf8] transition-colors duration-200 hover:border-[#171a20]/30">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] mb-1">{label}</p>
                  <p className="text-xs text-[#2d2d2d] leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AWS badge floating card */}
          <div className="absolute -left-5 top-8 animate-float-slow bg-white border border-[#e2e2de] rounded-2xl px-4 py-3 shadow-[0_2px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,0.14)]">
            <a
              href="https://www.credly.com/badges/f5c0f812-ed9b-4a10-9f92-925902859f7a/linked_in_profile"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3"
            >
              <img src={awsBadge} alt="AWS Certified" className="w-9 h-9 object-contain" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a]">Certified</p>
                <p className="text-xs font-semibold text-[#171a20]">AWS Developer</p>
              </div>
            </a>
          </div>

          {/* Preferred stack floating card */}
          <div className="absolute -right-5 -bottom-4 animate-float-slower bg-white border border-[#e2e2de] rounded-2xl px-4 py-3 shadow-[0_2px_16px_rgba(0,0,0,0.08)] w-44 transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,0.14)]">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] mb-1">Stack</p>
            <p className="text-xs text-[#2d2d2d]">Java · Spring Boot · AWS</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
