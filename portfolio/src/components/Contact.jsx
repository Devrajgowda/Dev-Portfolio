import React, { useState } from "react";
import githubIcon from "../assets/Github.svg";
import linkedinIcon from "../assets/Linkedin.svg";
import twitterIcon from "../assets/Twitter.svg";
import discordIcon from "../assets/Discord.svg";
import telegramIcon from "../assets/Telegram.svg";
import dribbleIcon from "../assets/Dribble.svg";

const socials = [
  { icon: githubIcon, label: "GitHub", href: "https://github.com" },
  { icon: linkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: twitterIcon, label: "Twitter", href: "https://twitter.com" },
  { icon: discordIcon, label: "Discord", href: "https://discord.com" },
  { icon: telegramIcon, label: "Telegram", href: "https://telegram.org" },
  { icon: dribbleIcon, label: "Dribbble", href: "https://dribbble.com" },
];

const channels = [
  { label: "email", value: "devrajgowda.d@gmail.com" },
  { label: "location", value: "Bangalore, India · Remote" },
  { label: "timezone", value: "UTC+05:30 · IST" },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="section-label">#contacts</span>
          <h2 className="text-4xl sm:text-5xl font-semibold">
            Let&apos;s plan your next release together
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            For new projects, workshops, or collaborations, drop a quick note.
            I respond within 24 hours with availability, next steps, and a
            timeline tailored to your scope.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          {/* Contact cards */}
          <div className="space-y-6">
            <div className="panel p-6 rounded-3xl border border-border/60 space-y-5">
              {channels.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col border border-border/50 rounded-2xl px-4 py-3 bg-bg-primary/60"
                >
                  <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-slate-500">
                    {label}
                  </span>
                  {label === "email" ? (
                    <a
                      href={`mailto:${value}`}
                      className="text-slate-100 text-sm sm:text-base mt-1 hover:text-accent-purple-light transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-slate-200 text-sm sm:text-base mt-1">
                      {value}
                    </span>
                  )}
                </div>
              ))}
              <div className="rounded-2xl border border-border/50 px-4 py-4 bg-gradient-to-r from-accent-purple/10 to-accent-blue/10">
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
                  availability
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse2" />
                  <p className="text-sm text-slate-100">
                    Booking April–May 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="panel p-6 rounded-3xl border border-border/60">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 mb-4">
                socials
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {socials.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-2xl border border-border-light/60 bg-bg-primary/60 px-3 py-2 text-slate-300 hover:border-accent-purple/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <img
                      src={icon}
                      alt={label}
                      className="w-4 h-4"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="panel border border-border/60 rounded-[32px] p-8 space-y-5 bg-bg-primary/70"
          >
            {sent && (
              <div className="border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-sm px-4 py-3 rounded-2xl text-center">
                Message sent — talk soon!
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              {["name", "email"].map((field) => (
                <label key={field} className="space-y-2 text-sm text-slate-200">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 block">
                    {field}
                  </span>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field === "name" ? "John Doe" : "john@email.com"}
                    required
                    className="w-full rounded-2xl border border-border-light/60 bg-bg-secondary/70 px-4 py-3 text-sm outline-none focus:border-accent-purple/70 transition-all duration-200"
                  />
                </label>
              ))}
            </div>

            <label className="space-y-2 text-sm text-slate-200">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 block">
                subject
              </span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="New product launch"
                required
                className="w-full rounded-2xl border border-border-light/60 bg-bg-secondary/70 px-4 py-3 text-sm outline-none focus:border-accent-purple/70 transition-all duration-200"
              />
            </label>

            <label className="space-y-2 text-sm text-slate-200">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 block">
                project details
              </span>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Timeline, goals, success metrics..."
                required
                className="w-full rounded-2xl border border-border-light/60 bg-bg-secondary/70 px-4 py-3 text-sm outline-none focus:border-accent-purple/70 transition-all duration-200 resize-none"
              />
            </label>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-purple text-sm font-mono tracking-[0.3em] uppercase text-white py-3 glow-purple hover:-translate-y-0.5 transition-all duration-200"
            >
              send message
              <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
