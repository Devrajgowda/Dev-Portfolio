import React from "react";
import githubIcon from "../assets/Github.svg";
import linkedinIcon from "../assets/Linkedin.svg";
import twitterIcon from "../assets/Twitter.svg";
import discordIcon from "../assets/Discord.svg";
import awsBadge from "../assets/aws-certified.png";

const socials = [
  { icon: githubIcon, label: "GitHub", href: "https://github.com" },
  { icon: linkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: twitterIcon, label: "Twitter", href: "https://twitter.com" },
  { icon: discordIcon, label: "Discord", href: "https://discord.com" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quotes = [
    {
      text: "“Programs must be written for people to read, and only incidentally for machines to execute.”",
      author: "— Harold Abelson",
      align: "left",
    },
    {
      text: "“First, solve the problem. Then, write the code.”",
      author: "— John Johnson",
      align: "right",
    },
  ];

  return (
    <footer className="bg-bg-secondary border-top border-border px-4 sm:px-6">
      <div className="max-w-6xl mx-auto py-12 space-y-8">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <blockquote className="panel p-5 rounded-3xl border border-border/60 bg-bg-primary/70 text-slate-300 text-sm leading-relaxed">
            <p>{quotes[0].text}</p>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 mt-3">
              {quotes[0].author}
            </p>
          </blockquote>

          <div className="panel p-6 rounded-3xl border border-border/60 bg-bg-primary/80 text-center flex flex-col items-center gap-4">
            <button className="text-2xl font-semibold text-slate-100">
              Say hello
            </button>
            <a
              href="mailto:devrajgowda.d@gmail.com"
              className="text-accent-purple-light text-sm font-mono tracking-[0.2em] uppercase hover:text-white transition-colors"
            >
              devrajgowda.d@gmail.com
            </a>
            <a
              href="https://www.credly.com/badges/f5c0f812-ed9b-4a10-9f92-925902859f7a/linked_in_profile"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <img
                src={awsBadge}
                alt="AWS Certified Developer"
                className="w-16 h-16 object-contain"
              />
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                AWS Developer Associate
              </p>
            </a>
            <div className="flex gap-2 justify-center">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-border-light/60 bg-bg-secondary/70 hover:border-accent-purple/40 transition-all duration-200"
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

          <blockquote className="panel p-5 rounded-3xl border border-border/60 bg-bg-primary/70 text-slate-300 text-sm leading-relaxed text-right">
            <p>{quotes[1].text}</p>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 mt-3">
              {quotes[1].author}
            </p>
          </blockquote>
        </div>

        <div className="text-center text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
          © {currentYear} Devaraj Devegowda · Building reliable cloud software
        </div>
      </div>
    </footer>
  );
};

export default Footer;
