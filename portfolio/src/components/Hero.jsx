import React from "react";
import profileImg from "../assets/image-removebg-preview 2.png";
import awsBadge from "../assets/aws-certified.png";
import githubIcon from "../assets/Github.svg";
import linkedinIcon from "../assets/Linkedin.svg";
import twitterIcon from "../assets/Twitter.svg";
import discordIcon from "../assets/Discord.svg";

const socials = [
  { icon: githubIcon, label: "GitHub", href: "https://github.com" },
  {
    icon: linkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devarajdevegowda",
  },
  { icon: twitterIcon, label: "Twitter", href: "https://twitter.com" },
  { icon: discordIcon, label: "Discord", href: "https://discord.com" },
];

const stats = [
  { label: "years building", value: "9+" },
  { label: "cloud launches", value: "25" },
  { label: "releases / yr", value: "24" },
  { label: "engineers led", value: "8+" },
];

const focus = [
  "Enterprise Java APIs",
  "Cloud-native migration",
  "Data pipelines",
  "Agile leadership",
];

const heroNotes = [
  { label: "Current role", value: "Lead Software Engineer · Fiserv" },
  { label: "LinkedIn", value: "linkedin.com/in/devarajdevegowda" },
  { label: "Phone", value: "+353 894 525 190" },
  { label: "Location", value: "Dublin · Remote-friendly" },
];

const Hero = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen px-4 sm:px-6 pt-32 pb-16 bg-bg-primary"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
        {/* Left column */}
        <div className="space-y-8">
          <span className="section-label">#engineer</span>
          <div>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight">
              <span className="gradient-text-purple">Devaraj Devegowda</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-xl">
              Lead engineer with 9+ years building cloud-native Java systems
              from microservices to data pipelines — on AWS and Azure.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleScroll("projects")}
              className="inline-flex items-center gap-3 px-6 py-3 bg-bg-card border border-border-light rounded-xl text-sm font-mono tracking-[0.18em] uppercase hover:border-accent-purple/60 hover:text-accent-purple-light transition-all duration-200"
            >
              View experience
              <span>↗</span>
            </button>
          </div>

          {/* Quote */}
          <div className="panel panel-grid border border-border/70 rounded-3xl p-5 text-left">
            <p className="text-sm font-mono tracking-[0.2em] uppercase text-slate-500 mb-3">
              // mantra
            </p>
            <p className="text-lg text-slate-200 leading-snug">
              &ldquo;With great power comes great electricity bill.&rdquo;
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="panel px-4 py-5 border border-border/60 rounded-2xl shadow-inner-grid"
              >
                <p className="text-2xl font-semibold text-slate-50">
                  {stat.value}
                </p>
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Focus */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 mb-3">
              focus areas
            </p>
            <div className="flex flex-wrap gap-2">
              {focus.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg border border-border-light/60 text-xs font-medium text-slate-300 bg-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
              find me
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-border-light/60 rounded-xl bg-bg-secondary/60 hover:border-accent-purple/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <img
                    src={icon}
                    alt={label}
                    className="w-4 h-4"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="relative">
          <div className="panel dotted-corner rounded-[32px] p-6 border border-border/70 bg-bg-secondary/80 shadow-card-soft">
            <div className="absolute inset-6 border border-white/5 rounded-[28px]" />
            <div className="relative bg-gradient-to-b from-bg-card/30 to-bg-card rounded-[26px] p-6 border border-white/5 min-h-[420px] flex flex-col justify-between">
              <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(163,139,255,0.2)]">
                <img
                  src={profileImg}
                  alt="Devaraj"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {heroNotes.map(({ label, value }) => (
                  <div
                    key={label}
                    className="border border-border/60 rounded-2xl px-4 py-3 bg-bg-primary/70"
                  >
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-1">
                      {label}
                    </p>
                    <p className="text-sm text-slate-100 leading-snug">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -left-6 top-10 bg-bg-card border border-border rounded-2xl px-5 py-4 shadow-card-soft">
            <a
              href="https://www.credly.com/badges/f5c0f812-ed9b-4a10-9f92-925902859f7a/linked_in_profile"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3"
            >
              <img
                src={awsBadge}
                alt="AWS Certified Developer"
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500">
                  Certification
                </p>
                <p className="text-sm font-semibold text-slate-100">
                  AWS Developer Associate
                </p>
              </div>
            </a>
          </div>
          <div className="absolute -right-8 -bottom-6 bg-bg-secondary border border-border rounded-2xl px-5 py-4 w-48 shadow-card-soft">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500">
              Preferred tools
            </p>
            <p className="text-sm text-slate-100 mt-2">
              Java · Spring Boot · AWS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
