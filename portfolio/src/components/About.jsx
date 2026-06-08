import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const capabilityCards = [
  {
    title: "Enterprise platforms",
    body: "Build and modernize payment and banking platforms using Spring Boot, Angular, and domain-driven design — shipping secure, compliant features on predictable cadences.",
  },
  {
    title: "Cloud & data engineering",
    body: "Design Databricks + Spark ETL pipelines, migrate workloads to AWS/Azure, and wire monitoring so pipelines, APIs, and databases stay observable and performant.",
  },
  {
    title: "Technical leadership",
    body: "Run agile rituals, mentor engineers, and lead multi-team migrations from legacy stacks (Scala/SBT) to modern Java 21 deployments with CI/CD discipline.",
  },
];

const skills = [
  { name: "Java / Spring Boot",     level: 95 },
  { name: "Microservices & APIs",   level: 92 },
  { name: "Cloud (AWS / Azure)",    level: 88 },
  { name: "Data pipelines (Spark)", level: 84 },
  { name: "Frontend (Angular)",     level: 80 },
  { name: "CI/CD & DevOps",         level: 86 },
];

const toolStacks = [
  { label: "Backend", items: ["Java 21", "Spring Boot", "Scala", "Hibernate"] },
  { label: "Data",    items: ["Databricks", "Apache Spark", "Snowflake", "Kafka"] },
  { label: "DevOps",  items: ["AWS", "Azure", "Docker", "Kubernetes", "Argo CD"] },
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
    <section id="about" className="py-28 px-6 sm:px-8 bg-[#f3f3f0]">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-label mb-5 block w-fit mx-auto">About me</span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171a20]">
            Scaling cloud products with<br />pragmatic engineering
          </h2>
          <p className="text-[#767676] max-w-2xl mx-auto mt-5 text-base leading-relaxed">
            9 years building backend-heavy systems across payments, banking, and automotive —
            from gathering requirements with business partners to deploying microservices,
            ETL jobs, and SPAs through automated pipelines.
          </p>
        </div>

        {/* Capability cards */}
        <div className="grid lg:grid-cols-3 gap-4">
          {capabilityCards.map((card, index) => (
            <div
              key={card.title}
              className={`bg-white border border-[#e2e2de] rounded-2xl p-7 transition-all duration-700 ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: sectionVisible ? `${index * 80}ms` : "0ms" }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a] mb-4">
                0{index + 1}
              </p>
              <h3 className="text-lg font-semibold text-[#171a20] mb-3">{card.title}</h3>
              <p className="text-[#767676] text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Skills + tools */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          {/* Skills */}
          <div className="bg-white border border-[#e2e2de] rounded-2xl p-7">
            <div className="flex items-center justify-between mb-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a]">Skills inventory</p>
              <span className="text-xs text-[#9a9a9a]">Updated Mar 2026</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map(({ name, level }) => (
                <div key={name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#2d2d2d]">{name}</span>
                    <span className="text-xs text-[#9a9a9a]">{level}%</span>
                  </div>
                  <div className="h-[2px] rounded-full bg-[#e2e2de] overflow-hidden">
                    <div
                      className="h-full bg-[#171a20] rounded-full"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tool stack + facts */}
          <div className="space-y-4">
            <div className="bg-white border border-[#e2e2de] rounded-2xl p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a] mb-5">Tool stack</p>
              <div className="space-y-3">
                {toolStacks.map(({ label, items }) => (
                  <div key={label} className="border border-[#e2e2de] rounded-xl px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] mb-1">{label}</p>
                    <p className="text-sm text-[#2d2d2d]">{items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#e2e2de] rounded-2xl p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a] mb-4">Highlights</p>
              <div className="flex flex-wrap gap-2">
                {funFacts.map((fact) => (
                  <span
                    key={fact}
                    className="px-3 py-1.5 rounded-full border border-[#e2e2de] text-xs text-[#474747]"
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
