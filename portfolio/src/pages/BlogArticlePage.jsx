import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogs, { tagColors } from "../data/blogs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useScrollReveal from "../hooks/useScrollReveal";

/* ══════════════════════════════════════════════════════════
   INLINE SVG DIAGRAMS
   ══════════════════════════════════════════════════════════ */

/* 1. Component Hierarchy (atomic design layers) */
const ComponentHierarchyDiagram = () => (
  <svg
    viewBox="0 0 700 260"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full rounded-xl"
    aria-label="Component hierarchy diagram"
  >
    <defs>
      <linearGradient id="ch-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e1b4b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>
    <rect width="700" height="260" rx="12" fill="url(#ch-bg)" />
    {/* Layer labels */}
    {[
      {
        label: "Tokens",
        y: 30,
        items: ["#7c3aed", "#3b82f6", "16px", "24px"],
        color: "#a855f7",
        w: 60,
      },
      {
        label: "Atoms",
        y: 95,
        items: ["Button", "Input", "Icon", "Badge"],
        color: "#60a5fa",
        w: 60,
      },
      {
        label: "Molecules",
        y: 160,
        items: ["SearchBar", "Card", "NavItem"],
        color: "#34d399",
        w: 88,
      },
      {
        label: "Organisms",
        y: 220,
        items: ["Header", "ProjectGrid"],
        color: "#fbbf24",
        w: 100,
      },
    ].map(({ label, y, items, color, w }, li) => (
      <g key={label}>
        <text
          x="16"
          y={y + 8}
          fill={color}
          fontSize="10"
          fontWeight="bold"
          fontFamily="monospace"
        >
          {label}
        </text>
        {items.map((item, i) => (
          <g key={item}>
            <rect
              x={90 + i * (w + 12)}
              y={y - 6}
              width={w}
              height="22"
              rx="6"
              fill={color}
              fillOpacity="0.15"
              stroke={color}
              strokeOpacity="0.4"
              strokeWidth="1"
            />
            <text
              x={90 + i * (w + 12) + w / 2}
              y={y + 9}
              fill={color}
              fontSize="9"
              fontFamily="monospace"
              textAnchor="middle"
            >
              {item}
            </text>
          </g>
        ))}
        {li < 3 && (
          <line
            x1="350"
            y1={y + 20}
            x2="350"
            y2={y + 53}
            stroke={color}
            strokeOpacity="0.3"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        )}
      </g>
    ))}
    {/* Arrow heads */}
    {[85, 150, 215].map((y) => (
      <polygon
        key={y}
        points={`346,${y} 350,${y + 8} 354,${y}`}
        fill="#475569"
      />
    ))}
  </svg>
);

/* 2. Figma → React workflow */
const FigmaWorkflowDiagram = () => {
  const steps = [
    { icon: "🎨", label: "Figma\nDesign", color: "#a855f7" },
    { icon: "📦", label: "Token\nJSON", color: "#60a5fa" },
    { icon: "⚙️", label: "Tailwind\nConfig", color: "#34d399" },
    { icon: "⚛️", label: "React\nComponent", color: "#fbbf24" },
    { icon: "🚀", label: "Production\nApp", color: "#f87171" },
  ];
  return (
    <svg
      viewBox="0 0 700 180"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full rounded-xl"
      aria-label="Figma to React workflow"
    >
      <rect width="700" height="180" rx="12" fill="#0f172a" />
      {steps.map((s, i) => {
        const cx = 70 + i * 140;
        return (
          <g key={s.label}>
            <circle
              cx={cx}
              cy={80}
              r={36}
              fill={s.color}
              fillOpacity="0.12"
              stroke={s.color}
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
            <text
              x={cx}
              y={76}
              fontSize="20"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {s.icon}
            </text>
            {s.label.split("\n").map((line, li) => (
              <text
                key={li}
                x={cx}
                y={125 + li * 14}
                fill={s.color}
                fontSize="10"
                fontFamily="monospace"
                textAnchor="middle"
                fontWeight="bold"
              >
                {line}
              </text>
            ))}
            {i < steps.length - 1 && (
              <>
                <line
                  x1={cx + 36}
                  y1={80}
                  x2={cx + 104}
                  y2={80}
                  stroke="#334155"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />
                <polygon
                  points={`${cx + 100},76 ${cx + 108},80 ${cx + 100},84`}
                  fill="#334155"
                />
              </>
            )}
          </g>
        );
      })}
      <text
        x="350"
        y="20"
        fill="#475569"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        One source of truth flows from design to production
      </text>
    </svg>
  );
};

/* 3. Easing curves */
const EasingCurvesDiagram = () => (
  <svg
    viewBox="0 0 700 220"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full rounded-xl"
    aria-label="Easing curves diagram"
  >
    <rect width="700" height="220" rx="12" fill="#0f172a" />
    {/* Axes */}
    <line x1="60" y1="30" x2="60" y2="170" stroke="#334155" strokeWidth="1" />
    <line x1="60" y1="170" x2="320" y2="170" stroke="#334155" strokeWidth="1" />
    <text
      x="35"
      y="105"
      fill="#64748b"
      fontSize="9"
      fontFamily="monospace"
      textAnchor="middle"
      transform="rotate(-90,35,105)"
    >
      Progress
    </text>
    <text
      x="190"
      y="196"
      fill="#64748b"
      fontSize="9"
      fontFamily="monospace"
      textAnchor="middle"
    >
      Time
    </text>
    {/* Linear curve */}
    <line
      x1="60"
      y1="170"
      x2="320"
      y2="30"
      stroke="#64748b"
      strokeWidth="2"
      strokeDasharray="5 4"
    />
    <text x="325" y="35" fill="#64748b" fontSize="9" fontFamily="monospace">
      linear
    </text>
    {/* Ease-out curve (cubic bezier approximated with path) */}
    <path
      d="M60,170 C80,170 100,40 320,30"
      fill="none"
      stroke="#a855f7"
      strokeWidth="2.5"
    />
    <text x="325" y="55" fill="#a855f7" fontSize="9" fontFamily="monospace">
      ease-out
    </text>
    {/* Ease-in curve */}
    <path
      d="M60,170 C240,170 300,60 320,30"
      fill="none"
      stroke="#60a5fa"
      strokeWidth="2.5"
    />
    <text x="325" y="80" fill="#60a5fa" fontSize="9" fontFamily="monospace">
      ease-in
    </text>

    {/* Duration scale */}
    <text
      x="430"
      y="25"
      fill="#94a3b8"
      fontSize="10"
      fontFamily="monospace"
      fontWeight="bold"
    >
      Duration Guide
    </text>
    {[
      { label: "Tooltip", ms: "120ms", w: 48, color: "#34d399" },
      { label: "Button feedback", ms: "200ms", w: 80, color: "#60a5fa" },
      { label: "Modal open", ms: "300ms", w: 120, color: "#a855f7" },
      { label: "Page transition", ms: "400ms", w: 160, color: "#f87171" },
    ].map(({ label, ms, w, color }, i) => (
      <g key={label}>
        <rect
          x="410"
          y={45 + i * 38}
          width={w}
          height="16"
          rx="4"
          fill={color}
          fillOpacity="0.2"
          stroke={color}
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        <text
          x="410"
          y={45 + i * 38 - 5}
          fill="#94a3b8"
          fontSize="9"
          fontFamily="monospace"
        >
          {label}
        </text>
        <text
          x={415 + w}
          y={45 + i * 38 + 11}
          fill={color}
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {ms}
        </text>
      </g>
    ))}
  </svg>
);

/* 4. Token Layers (dark-mode system) */
const TokenLayersDiagram = () => {
  const palRow = ["#1e1b4b", "#7c3aed", "#a855f7", "#f8fafc", "#1e293b"];
  const semRow = ["--bg-primary", "--bg-card", "--text-body", "--border"];
  return (
    <svg
      viewBox="0 0 700 240"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full rounded-xl"
      aria-label="Token layers diagram"
    >
      <rect width="700" height="240" rx="12" fill="#0f172a" />
      {/* Palette layer */}
      <text
        x="24"
        y="40"
        fill="#94a3b8"
        fontSize="10"
        fontFamily="monospace"
        fontWeight="bold"
      >
        PALETTE TOKENS
      </text>
      {palRow.map((c, i) => (
        <g key={c}>
          <rect
            x={24 + i * 90}
            y={50}
            width={76}
            height={36}
            rx={8}
            fill={c}
            stroke="#334155"
            strokeWidth="1"
          />
          <text
            x={24 + i * 90 + 38}
            y={74}
            fill={c === "#f8fafc" ? "#0f172a" : "#f8fafc"}
            fontSize="8"
            fontFamily="monospace"
            textAnchor="middle"
          >
            {c}
          </text>
        </g>
      ))}
      {/* Arrow */}
      <line
        x1="350"
        y1="95"
        x2="350"
        y2="118"
        stroke="#334155"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <polygon points="346,115 350,123 354,115" fill="#475569" />
      <text x="360" y="112" fill="#475569" fontSize="9" fontFamily="monospace">
        maps to
      </text>
      {/* Semantic layer */}
      <text
        x="24"
        y="138"
        fill="#a855f7"
        fontSize="10"
        fontFamily="monospace"
        fontWeight="bold"
      >
        SEMANTIC TOKENS
      </text>
      {semRow.map((s, i) => (
        <g key={s}>
          <rect
            x={24 + i * 165}
            y={148}
            width={150}
            height={34}
            rx={8}
            fill="#1e1b4b"
            stroke="#7c3aed"
            strokeOpacity="0.5"
            strokeWidth="1"
          />
          <text
            x={24 + i * 165 + 75}
            y={170}
            fill="#a855f7"
            fontSize="9"
            fontFamily="monospace"
            textAnchor="middle"
          >
            {s}
          </text>
        </g>
      ))}
      {/* Arrow */}
      <line
        x1="350"
        y1="190"
        x2="350"
        y2="210"
        stroke="#334155"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <polygon points="346,207 350,215 354,207" fill="#475569" />
      {/* Component layer */}
      <text
        x="24"
        y="228"
        fill="#34d399"
        fontSize="10"
        fontFamily="monospace"
        fontWeight="bold"
      >
        COMPONENTS USE SEMANTIC TOKENS → theme switch = redefine ~15 values only
      </text>
    </svg>
  );
};

/* 5. Tailwind Spacing Scale */
const SpacingScaleDiagram = () => {
  const scale = [
    { key: "1", px: 4 },
    { key: "2", px: 8 },
    { key: "3", px: 12 },
    { key: "4", px: 16 },
    { key: "6", px: 24 },
    { key: "8", px: 32 },
    { key: "10", px: 40 },
    { key: "12", px: 48 },
    { key: "16", px: 64 },
  ];
  return (
    <svg
      viewBox="0 0 700 180"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full rounded-xl"
      aria-label="Tailwind spacing scale"
    >
      <rect width="700" height="180" rx="12" fill="#0f172a" />
      <text
        x="24"
        y="28"
        fill="#94a3b8"
        fontSize="10"
        fontFamily="monospace"
        fontWeight="bold"
      >
        TAILWIND SPACING SCALE — harmonious, opinionated, fast
      </text>
      {scale.map(({ key, px }, i) => {
        const color = `hsl(${260 + i * 12}, 70%, 65%)`;
        return (
          <g key={key}>
            <rect
              x={24 + i * 74}
              y={50}
              width={px}
              height={80}
              rx="4"
              fill={color}
              fillOpacity="0.25"
              stroke={color}
              strokeOpacity="0.6"
              strokeWidth="1"
            />
            <text
              x={24 + i * 74 + px / 2}
              y={148}
              fill={color}
              fontSize="9"
              fontFamily="monospace"
              textAnchor="middle"
            >
              p-{key}
            </text>
            <text
              x={24 + i * 74 + px / 2}
              y={162}
              fill="#475569"
              fontSize="8"
              fontFamily="monospace"
              textAnchor="middle"
            >
              {px}px
            </text>
          </g>
        );
      })}
    </svg>
  );
};

/* 6. Research Methods Matrix */
const ResearchMethodsDiagram = () => {
  const methods = [
    {
      name: "Guerrilla Test",
      x: 120,
      y: 60,
      color: "#34d399",
      effort: "Low",
      insight: "High",
    },
    {
      name: "5-Second Test",
      x: 300,
      y: 75,
      color: "#60a5fa",
      effort: "Low",
      insight: "Medium",
    },
    {
      name: "JTBD Interview",
      x: 200,
      y: 140,
      color: "#a855f7",
      effort: "Medium",
      insight: "Very High",
    },
    {
      name: "Tree Test",
      x: 420,
      y: 115,
      color: "#fbbf24",
      effort: "Medium",
      insight: "High",
    },
    {
      name: "Competitive Teardown",
      x: 510,
      y: 80,
      color: "#f87171",
      effort: "Low",
      insight: "Medium",
    },
  ];
  return (
    <svg
      viewBox="0 0 700 240"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full rounded-xl"
      aria-label="Research methods matrix"
    >
      <rect width="700" height="240" rx="12" fill="#0f172a" />
      {/* Axes */}
      <line
        x1="60"
        y1="20"
        x2="60"
        y2="185"
        stroke="#334155"
        strokeWidth="1.5"
      />
      <line
        x1="60"
        y1="185"
        x2="640"
        y2="185"
        stroke="#334155"
        strokeWidth="1.5"
      />
      <polygon points="56,24 60,14 64,24" fill="#334155" />
      <polygon points="636,181 646,185 636,189" fill="#334155" />
      <text
        x="35"
        y="105"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
        transform="rotate(-90,35,105)"
      >
        Insight Depth
      </text>
      <text
        x="350"
        y="210"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
      >
        Effort / Cost →
      </text>
      {/* Quadrant lines */}
      <line
        x1="350"
        y1="20"
        x2="350"
        y2="185"
        stroke="#1e293b"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <line
        x1="60"
        y1="103"
        x2="640"
        y2="103"
        stroke="#1e293b"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <text
        x="180"
        y="38"
        fill="#34d399"
        fontSize="8"
        fontFamily="monospace"
        opacity="0.6"
      >
        Sweet spot 🎯
      </text>
      {/* Bubbles */}
      {methods.map((m) => (
        <g key={m.name}>
          <circle
            cx={m.x}
            cy={m.y}
            r="28"
            fill={m.color}
            fillOpacity="0.15"
            stroke={m.color}
            strokeOpacity="0.6"
            strokeWidth="1.5"
          />
          {m.name.split(" ").map((word, wi) => (
            <text
              key={wi}
              x={m.x}
              y={m.y - 8 + wi * 12}
              fill={m.color}
              fontSize="8"
              fontFamily="monospace"
              textAnchor="middle"
              fontWeight="bold"
            >
              {word}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
};

const DIAGRAMS = {
  "component-hierarchy": ComponentHierarchyDiagram,
  "figma-workflow": FigmaWorkflowDiagram,
  "easing-curves": EasingCurvesDiagram,
  "token-layers": TokenLayersDiagram,
  "spacing-scale": SpacingScaleDiagram,
  "research-methods": ResearchMethodsDiagram,
};

/* ══════════════════════════════════════════════════════════
   RECOMMENDED CARD
   ══════════════════════════════════════════════════════════ */
const RecommendedCard = ({ post }) => (
  <Link
    to={`/blogs/${post.id}`}
    className="group flex gap-3 items-start p-3.5 rounded-xl border border-border hover:border-accent-purple/40 bg-bg-card hover:bg-accent-purple/5 transition-all duration-200"
  >
    <span
      className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center text-lg`}
    >
      {post.coverEmoji}
    </span>
    <div className="min-w-0">
      <p className="text-xs font-semibold text-slate-100 leading-snug group-hover:text-accent-purple-light transition-colors line-clamp-2">
        {post.title}
      </p>
      <p className="text-xs text-slate-500 mt-0.5">
        {post.displayDate} · {post.readTime}
      </p>
    </div>
  </Link>
);

/* ══════════════════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════════════════ */
const BlogArticlePage = () => {
  const { id } = useParams();
  const [mounted, setMounted] = useState(false);

  const post = blogs.find((b) => b.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setTimeout(() => setMounted(true), 60);
  }, [id]);

  const [heroRef, heroVisible] = useScrollReveal(0.01);
  const [contentRef, contentVisible] = useScrollReveal(0.05);
  const [takeawaysRef, takeawaysVisible] = useScrollReveal(0.1);
  const [recRef, recVisible] = useScrollReveal(0.05);

  if (!post) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center gap-6 px-6">
        <p className="text-5xl">📭</p>
        <h1 className="text-2xl font-bold text-slate-100">Article not found</h1>
        <Link
          to="/blogs"
          className="text-sm text-accent-purple-light hover:underline"
        >
          ← Back to all articles
        </Link>
      </div>
    );
  }

  const recommended = blogs
    .filter((b) => b.id !== post.id)
    .sort((a, b) => {
      // Same tag first, then by recency
      if (a.tag === post.tag && b.tag !== post.tag) return -1;
      if (b.tag === post.tag && a.tag !== post.tag) return 1;
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, 4);

  return (
    <div className="bg-bg-primary text-slate-100 min-h-screen">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between flex-wrap gap-4">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200">
              ←
            </span>
            All Articles
          </Link>
          <span className="section-label">
            #{post.tag.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>

        <div
          ref={heroRef}
          className={`mt-6 transition-all duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div
              className={`relative w-full h-[280px] md:h-[320px] rounded-[32px] overflow-hidden bg-gradient-to-br ${post.gradient} flex items-end shadow-card-soft`}
            >
              <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-white/5" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] opacity-10 select-none pointer-events-none">
                {post.coverEmoji}
              </div>
              <div
                className={`relative z-10 w-full px-6 sm:px-10 pb-12 pt-16 transition-all duration-700 delay-200 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                      tagColors[post.tag] ||
                      "bg-accent-purple/15 text-accent-purple-light border-accent-purple/25"
                    }`}
                  >
                    {post.tag}
                  </span>
                  <span className="text-slate-200 text-xs">
                    {post.displayDate}
                  </span>
                  <span className="text-slate-500 text-xs">·</span>
                  <span className="text-slate-200 text-xs">
                    {post.readTime}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-lg max-w-3xl">
                  {post.title}
                </h1>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg-primary to-transparent" />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
          <div className="flex flex-col xl:flex-row gap-10">
          {/* ── Article body ─────────────────────────────── */}
          <div ref={contentRef} className="flex-1 min-w-0">
            {/* Excerpt / lead */}
            <div
              className={`panel border border-border/70 rounded-[28px] p-6 md:p-8 mb-10 transition-all duration-700 ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 mb-3">
                abstract
              </p>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Sections */}
            {post.sections.map((section, si) => {
              const DiagramComponent = section.diagramType
                ? DIAGRAMS[section.diagramType]
                : null;
              return (
                <div
                  key={si}
                  className={`panel border border-border/70 rounded-[28px] p-6 md:p-8 mb-10 transition-all duration-700 ${
                    contentVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: contentVisible ? `${si * 120}ms` : "0ms",
                  }}
                >
                  <h2 className="text-xl md:text-2xl font-extrabold text-slate-100 mb-4 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-accent-purple/20 border border-accent-purple/30 flex items-center justify-center text-accent-purple-light text-xs font-bold flex-shrink-0">
                      {si + 1}
                    </span>
                    {section.heading}
                  </h2>
                  {section.body.split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      className={`text-slate-300 leading-relaxed text-base ${pi > 0 ? "mt-4" : ""}`}
                    >
                      {para}
                    </p>
                  ))}
                  {DiagramComponent && (
                    <div className="mt-6 panel border border-border rounded-2xl overflow-hidden p-0">
                      <div className="px-4 py-2 bg-bg-card border-b border-border flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                        </div>
                        <span className="text-xs text-slate-500 font-mono ml-2">
                          diagram.svg
                        </span>
                      </div>
                      <DiagramComponent />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Key Takeaways */}
            <div
              ref={takeawaysRef}
              className={`mt-6 panel border border-accent-purple/40 rounded-[28px] p-7 transition-all duration-700 ${
                takeawaysVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-lg font-extrabold text-slate-100 mb-5 flex items-center gap-2">
                <span className="text-accent-purple-light">✦</span>
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                {post.keyTakeaways.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 transition-all duration-500"
                    style={{
                      transitionDelay: takeawaysVisible ? `${i * 70}ms` : "0ms",
                    }}
                  >
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#a855f7"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-slate-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom nav */}
            <div className="mt-10 pt-8 border-t border-border flex items-center justify-between gap-4 flex-wrap">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors group"
              >
                <span className="group-hover:-translate-x-0.5 transition-transform">
                  ←
                </span>
                All Articles
              </Link>
              <span className="text-xs text-slate-600">
                {post.displayDate} · {post.readTime}
              </span>
            </div>
          </div>

          {/* ── Sidebar: Recommended ─────────────────────── */}
          <aside
            ref={recRef}
            className={`xl:w-72 flex-shrink-0 transition-all duration-700 delay-300 ${
              recVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="xl:sticky xl:top-24 space-y-4">
              {/* Progress indicator */}
              <div className="panel border border-border rounded-[24px] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                  You are reading
                </p>
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center text-lg`}
                  >
                    {post.coverEmoji}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-200 leading-snug line-clamp-3">
                      {post.title}
                    </p>
                    <span
                      className={`mt-1 inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-md border ${
                        tagColors[post.tag] ||
                        "bg-accent-purple/15 text-accent-purple-light border-accent-purple/25"
                      }`}
                    >
                      {post.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommended list */}
              <div className="panel border border-border rounded-[24px] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                  Recommended Articles
                </p>
                <div className="space-y-2.5">
                  {recommended.map((rec, i) => (
                    <div
                      key={rec.id}
                      className="transition-all duration-500"
                      style={{
                        transitionDelay: recVisible
                          ? `${300 + i * 80}ms`
                          : "0ms",
                      }}
                    >
                      <RecommendedCard post={rec} />
                    </div>
                  ))}
                </div>
                <Link
                  to="/blogs"
                  className="mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-accent-purple-light hover:text-white border border-accent-purple/30 hover:border-accent-purple py-2 rounded-xl transition-all duration-200"
                >
                  View all articles →
                </Link>
              </div>

              {/* Tags cloud */}
              <div className="panel border border-border rounded-[24px] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Browse by Tag
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Design",
                    "Development",
                    "Design System",
                    "UX Research",
                  ].map((tag) => (
                    <Link
                      key={tag}
                      to={`/blogs?tag=${encodeURIComponent(tag)}`}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${
                        tag === post.tag
                          ? tagColors[tag]
                          : "border-border-light text-slate-400 hover:border-accent-purple/50 hover:text-accent-purple-light"
                      }`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
    <Footer />
  </div>
  );
};

export default BlogArticlePage;
