import React, { useState } from "react";
import githubIcon   from "../assets/Github.svg";
import linkedinIcon from "../assets/Linkedin.svg";
import twitterIcon  from "../assets/Twitter.svg";

const socials = [
  { icon: githubIcon,   label: "GitHub",   href: "https://github.com/devaraj-ncirl" },
  { icon: linkedinIcon, label: "LinkedIn",  href: "https://www.linkedin.com/in/devarajdevegowda" },
  { icon: twitterIcon,  label: "Twitter",   href: "https://twitter.com" },
];

const channels = [
  { label: "Email",    value: "devrajgowda.d@gmail.com" },
  { label: "Location", value: "Dublin, Ireland · Remote-friendly" },
  { label: "Timezone", value: "UTC+01:00 · IST" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-8 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Header */}
        <div className="text-center space-y-4">
          <span className="section-label mb-5 block w-fit mx-auto">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171a20]">
            Let's plan your next release together
          </h2>
          <p className="text-[#767676] max-w-xl mx-auto text-base leading-relaxed">
            For new projects, workshops, or collaborations, drop a quick note.
            I respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          {/* Info */}
          <div className="space-y-4">
            <div className="bg-white border border-[#e2e2de] rounded-2xl p-7 space-y-4">
              {channels.map(({ label, value }) => (
                <div key={label} className="border border-[#e2e2de] rounded-xl px-4 py-3 bg-[#fafaf8]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] block mb-1">{label}</span>
                  {label === "Email" ? (
                    <a href={`mailto:${value}`} className="text-sm text-[#2d2d2d] hover:text-[#171a20] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-[#2d2d2d]">{value}</span>
                  )}
                </div>
              ))}
              <div className="border border-[#e2e2de] rounded-xl px-4 py-3 bg-[#fafaf8]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] mb-2">Availability</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse2" />
                  <p className="text-sm text-[#2d2d2d]">Open to opportunities</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e2e2de] rounded-2xl p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a] mb-4">Socials</p>
              <div className="flex flex-col gap-2">
                {socials.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 border border-[#e2e2de] rounded-xl px-4 py-3 text-[#474747] hover:border-[#171a20]/30 hover:text-[#171a20] transition-all duration-200"
                  >
                    <img src={icon} alt={label} className="w-4 h-4" style={{ filter: "brightness(0)" }} />
                    <span className="text-sm">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#e2e2de] rounded-2xl p-8 space-y-5"
          >
            {sent && (
              <div className="border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm px-4 py-3 rounded-xl text-center">
                Message sent — talk soon!
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              {["name", "email"].map((field) => (
                <label key={field} className="block">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] block mb-2">{field}</span>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field === "name" ? "John Doe" : "john@email.com"}
                    required
                    className="w-full rounded-xl border border-[#e2e2de] bg-[#fafaf8] px-4 py-3 text-sm text-[#171a20] placeholder-[#b8b8b8] outline-none focus:border-[#171a20]/40 transition-colors"
                  />
                </label>
              ))}
            </div>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] block mb-2">Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="New product launch"
                required
                className="w-full rounded-xl border border-[#e2e2de] bg-[#fafaf8] px-4 py-3 text-sm text-[#171a20] placeholder-[#b8b8b8] outline-none focus:border-[#171a20]/40 transition-colors"
              />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] block mb-2">Project details</span>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Timeline, goals, success metrics..."
                required
                className="w-full rounded-xl border border-[#e2e2de] bg-[#fafaf8] px-4 py-3 text-sm text-[#171a20] placeholder-[#b8b8b8] outline-none focus:border-[#171a20]/40 transition-colors resize-none"
              />
            </label>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#171a20] text-white text-sm font-medium hover:bg-[#2d2d2d] transition-colors duration-200"
            >
              Send message ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
