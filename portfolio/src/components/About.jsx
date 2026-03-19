import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const capabilityCards = [
  {
    title: "Enterprise platforms",
    body: "Build and modernize payment and banking platforms using Spring Boot, Angular, and domain-driven design—shipping secure, compliant features on predictable cadences.",
  },
  {
    title: "Cloud & data engineering",
    body: "Design Databricks + Spark ETL pipelines, migrate workloads to AWS/Azure, and wire monitoring so pipelines, APIs, and DBs stay observable and performant.",
  },
  {
    title: "Technical leadership",
    body: "Run agile rituals, mentor engineers, and lead multi-team migrations from legacy stacks (Scala/SBT) to modern Java 21 deployments with CI/CD discipline.",
  },
];

const skills = [
  { name: "Java / Spring Boot", level: 95 },
  { name: "Microservices & APIs", level: 92 },
  { name: "Cloud (AWS / Azure)", level: 88 },
  { name: "Data pipelines (Spark)", level: 84 },
  { name: "Frontend (Angular / SPA)", level: 80 },
  { name: "CI/CD & DevOps", level: 86 },
];

const toolStacks = [
  {
    label: "Backend",
    items: ["Java 21", "Spring Boot", "Scala", "Hibernate"],
  },
  {
    label: "Data",
    items: ["Databricks", "Apache Spark", "Snowflake", "Kafka"],
  },
  {
    label: "DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Argo CD"],
  },
];

const funFacts = [
  "AWS Developer Associate",
  "MSc Cloud Computing (NCI)",
  "Built Azure Databricks ETL at Fiserv",
  "Led Scala → Spring Boot migration",
  "Mentors junior engineers weekly",
];

const About = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 bg-bg-secondary relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        <div
          ref={sectionRef}
          className={`text-center transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label">#about-me</span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mt-5">
            Scaling cloud products with{" "}
            <span className="gradient-text-purple">pragmatic engineering</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto mt-4">
            9 years of building backend-heavy systems across payments, banking,
            and automotive—from gathering requirements with business partners to
            deploying microservices, ETL jobs, and SPAs through automated
            pipelines.
          </p>
        </div>

        {/* Top grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {capabilityCards.map((card, index) => (
            <div
              key={card.title}
              className={`panel p-6 border border-border/60 rounded-3xl shadow-card-soft transition-all duration-700 ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: sectionVisible ? `${index * 80}ms` : "0ms" }}
            >
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 mb-3">
                0{index + 1}
              </p>
              <h3 className="text-xl text-slate-50 mb-3">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Skills + tools */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="panel p-6 rounded-3xl border border-border/60">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
                skills inventory
              </p>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
                updated · Mar 2026
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map(({ name, level }) => (
                <div
                  key={name}
                  className="bg-bg-primary/60 border border-border/60 rounded-2xl px-4 py-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-100">
                      {name}
                    </span>
                    <span className="text-xs font-mono text-accent-purple-light">
                      {level}%
                    </span>
                  </div>
                  <div className="h-1.5 mt-3 rounded-full bg-border-light/40 overflow-hidden">
                    <div
                      className="h-full bg-gradient-hero rounded-full"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="panel p-6 rounded-3xl border border-border/60">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 mb-3">
                tool stack
              </p>
              <div className="space-y-4">
                {toolStacks.map(({ label, items }) => (
                  <div
                    key={label}
                    className="border border-border/50 rounded-2xl px-4 py-3 bg-bg-primary/60"
                  >
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 mb-1.5">
                      {label}
                    </p>
                    <p className="text-sm text-slate-200">{items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel p-6 rounded-3xl border border-border/60">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 mb-4">
                fun facts
              </p>
              <div className="flex flex-wrap gap-2">
                {funFacts.map((fact) => (
                  <span
                    key={fact}
                    className="px-3 py-1.5 rounded-lg border border-border-light/60 text-xs text-slate-300 bg-white/5"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
