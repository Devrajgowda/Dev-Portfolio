const blogs = [
  /* ─── POST 1 ─── */
  {
    id: 1,
    title: "How I Design UI Components That Actually Scale",
    excerpt:
      "A deep dive into building scalable, reusable Figma component libraries that your whole team will actually use without friction.",
    date: "2026-03-10",
    displayDate: "Mar 10, 2026",
    readTime: "5 min read",
    tag: "Design",
    gradient: "from-violet-600/25 to-purple-500/20",
    dotColor: "bg-accent-purple-light",
    coverEmoji: "🎨",
    sections: [
      {
        heading: "Start With Primitives, Not Components",
        diagramType: "component-hierarchy",
        body: `Building a scalable component library starts long before you open Figma. It starts with a conversation about what "scalable" actually means for your team.\n\nToo many designers treat components as isolated building blocks — a button here, a card there. The result: inconsistent spacing, divergent color usage, and a library nobody trusts.\n\nThe approach that works: define your color tokens, spacing scale, and typography system first. Every component is then assembled from these primitives, which means when you update a token, everything inherits the change automatically.`,
      },
      {
        heading: "Name Things After Their Role",
        diagramType: null,
        body: `A component called "ActionButton" will outlive "BigPurpleButton" every time. Naming with intent makes auto-layout and variant management dramatically cleaner.\n\nConsistency between Figma naming and code naming eliminates the interpretation layer that causes most handoff friction. Map every component name 1:1 between design and the codebase.`,
      },
      {
        heading: "Limit Variants and Document Inside Figma",
        diagramType: null,
        body: `Offer the variants users actually need, not every possible combination. Fewer variants means easier adoption and fewer inconsistencies in implementation.\n\nDocument inside Figma using annotations and component descriptions. Developers shouldn't need to ask what a component does or what its edge cases are — that context should live right next to the component.`,
      },
    ],
    keyTakeaways: [
      "Define color, spacing, and type tokens before designing any component",
      "Name components after their role, not their appearance",
      "Fewer, well-documented variants beat exhaustive variant matrices",
      "Token-first design means one update cascades through the entire library",
    ],
  },
  /* ─── POST 2 ─── */
  {
    id: 2,
    title: "From Figma to React: My Production Workflow",
    excerpt:
      "How I streamline the handoff from design to code using Figma tokens, component naming conventions, and Tailwind CSS utilities.",
    date: "2026-02-24",
    displayDate: "Feb 24, 2026",
    readTime: "7 min read",
    tag: "Development",
    gradient: "from-blue-600/25 to-cyan-500/20",
    dotColor: "bg-accent-blue",
    coverEmoji: "⚛️",
    sections: [
      {
        heading: "Align Naming Across Design and Code",
        diagramType: "figma-workflow",
        body: `The gap between design and engineering is where products go to die — not in spec, not in review, but in that limbo between Figma and the codebase.\n\nEvery Figma component, variant, and token name maps 1:1 to the codebase. If Figma says "Button/Primary/Large", the React component is ButtonPrimary and the size prop is "lg". Consistency eliminates interpretation at every step.`,
      },
      {
        heading: "Export Tokens, Not Screenshots",
        diagramType: null,
        body: `Export color and spacing tokens as JSON and import them directly into Tailwind's config via a script. One source of truth — Figma — drives both design and production styling.\n\nAnnotate interactive states in Figma: include hover, focus, active, and disabled states as linked variants, not footnotes. Guesswork eliminated at the source.`,
      },
      {
        heading: "Async Video Beats Sync Meetings",
        diagramType: null,
        body: `Record a Loom walkthrough of each complex component. Async video beats a 30-minute sync every time — developers can pause, rewind, and reference it during implementation without scheduling anything.\n\nThe result: implementation time on design-heavy features dropped by around 35% across my last three projects.`,
      },
    ],
    keyTakeaways: [
      "1:1 naming between Figma and code eliminates handoff ambiguity",
      "Export Figma tokens as JSON → feed into Tailwind config automatically",
      "Document all interaction states in Figma, not in a separate spec doc",
      "Async Loom walkthroughs replace most design-dev sync meetings",
    ],
  },
  /* ─── POST 3 ─── */
  {
    id: 3,
    title: "5 Animation Principles Every UI Designer Must Know",
    excerpt:
      "Motion design isn't just decoration — it communicates state, guides attention, and makes interfaces feel alive. Here's how.",
    date: "2026-02-11",
    displayDate: "Feb 11, 2026",
    readTime: "4 min read",
    tag: "Design",
    gradient: "from-pink-600/25 to-rose-500/20",
    dotColor: "bg-pink-400",
    coverEmoji: "✨",
    sections: [
      {
        heading: "Easing, Duration, and Physical Feel",
        diagramType: "easing-curves",
        body: `Animation in UI is like seasoning in cooking. Too little and everything feels flat. Too much and it's overwhelming.\n\nEasing over linear: linear motion looks mechanical. Use ease-out for elements entering, ease-in for elements leaving — this mirrors how physical objects actually move.\n\nDuration matches weight: a tooltip appears in 120ms. A full-page transition takes 350ms. Duration should feel proportional to the scale of the change.`,
      },
      {
        heading: "Animate Meaning, Not Decoration",
        diagramType: null,
        body: `Every animation should communicate something — a state change, a hierarchy, a connection between elements. If you can't articulate what the animation communicates, cut it.\n\nChoreography over chaos: when multiple elements animate together, stagger them slightly (50–80ms between each). This creates intentional flow rather than a jumble of simultaneous change.`,
      },
      {
        heading: "Respect Reduced Motion",
        diagramType: null,
        body: `Always implement prefers-reduced-motion. Some users experience motion sickness or vestibular disorders triggered by animation. Accessibility and great UX are not opposites — they're the same goal.\n\nCSS: @media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; } }. In React, use a useReducedMotion hook to conditionally disable all transitions.`,
      },
    ],
    keyTakeaways: [
      "Use ease-out for entering elements, ease-in for exiting elements",
      "Duration should match the visual weight of the change (120ms → 400ms scale)",
      "Every animation must communicate something — cut decorative motion",
      "Stagger multi-element animations 50–80ms for intentional choreography",
      "Always honor prefers-reduced-motion for accessibility",
    ],
  },
  /* ─── POST 4 ─── */
  {
    id: 4,
    title: "Building a Dark-Mode-First Design System",
    excerpt:
      "Why I start every project in dark mode and the CSS variable token strategy that makes light/dark theming completely effortless.",
    date: "2026-01-28",
    displayDate: "Jan 28, 2026",
    readTime: "6 min read",
    tag: "Design System",
    gradient: "from-slate-600/25 to-violet-600/20",
    dotColor: "bg-slate-400",
    coverEmoji: "🌙",
    sections: [
      {
        heading: "Why Dark Mode First Changes Your Thinking",
        diagramType: "token-layers",
        body: `Dark mode is no longer a bonus feature — it's a baseline expectation. Starting every project in dark mode forces better decisions from day one.\n\nWhen you design in dark mode first, you think in terms of luminosity hierarchy rather than color fills. Elements need to feel elevated or recessed through opacity and subtle borders, not just background colors. That discipline produces cleaner designs in both themes.`,
      },
      {
        heading: "The CSS Variable Token Strategy",
        diagramType: null,
        body: `The technical implementation: CSS custom properties for every color token, switched by a class on the html element.\n\n:root defines dark values. :root.light defines light values. Tailwind picks them up via rgb(var(--bg-primary) / <alpha-value>) syntax, which preserves Tailwind's opacity modifier system.\n\nDon't map palette tokens (violet-700, slate-900) directly to components. Create semantic tokens instead: --bg-primary, --bg-card, --text-body, --border.`,
      },
      {
        heading: "The 15-Token Rule",
        diagramType: null,
        body: `Components reference semantic tokens. Themes only need to redefine the semantic layer — not every individual component.\n\nThis means adding a new theme costs nothing. You only write new values for ~15 semantic tokens and the entire system responds. It's the difference between O(n) and O(1) theming complexity.`,
      },
    ],
    keyTakeaways: [
      "Dark-first design forces luminosity-based hierarchy thinking",
      "Use CSS custom properties on :root and :root.light for theme switching",
      "Separate palette tokens from semantic tokens — components use semantic only",
      "A complete theme switch only requires redefining ~15 semantic token values",
      "Tailwind's opacity modifiers work seamlessly with CSS variable tokens",
    ],
  },
  /* ─── POST 5 ─── */
  {
    id: 5,
    title: "Why Tailwind CSS Made Me a Better Designer",
    excerpt:
      "Thinking in utility classes changed how I approach spacing, typography, and composable UI — and made my code much faster to ship.",
    date: "2026-01-14",
    displayDate: "Jan 14, 2026",
    readTime: "5 min read",
    tag: "Development",
    gradient: "from-emerald-600/25 to-teal-500/20",
    dotColor: "bg-emerald-400",
    coverEmoji: "💨",
    sections: [
      {
        heading: "An Opinionated Scale Eliminates Decision Fatigue",
        diagramType: "spacing-scale",
        body: `I was a CSS-in-JS zealot for three years. Styled-components, Emotion, CSS Modules — I tried them all. Then I tried Tailwind on a side project and everything changed.\n\nThe first thing I noticed: I was making fewer spacing decisions. Not because Tailwind restricts you, but because the scale (4, 8, 12, 16, 20, 24...) naturally guides you toward harmonious sizes. When every option is custom, you agonize. When the scale is opinionated, you move.`,
      },
      {
        heading: "No More Context Switching",
        diagramType: null,
        body: `Reading a component tells you exactly how it looks. No hunting through a theme file or a CSS Module to understand why something is 14px and semibold.\n\nThe colocation of styles and markup feels wrong at first, then feels obvious. The component is the single source of truth for its own appearance. Debugging a style issue goes from a multi-file grep to a quick scan of the JSX.`,
      },
      {
        heading: "It Changed How I Design in Figma",
        diagramType: null,
        body: `The most surprising effect: Tailwind changed how I design. I now think in Tailwind's spacing scale when placing elements in Figma. My designs land closer to implementation, and implementation lands closer to design.\n\nIf you've avoided Tailwind because utility classes feel messy — try it for two weeks on something real. The shift in perspective is worth the uncomfortable first few days.`,
      },
    ],
    keyTakeaways: [
      "Opinionated spacing scales eliminate decision fatigue and produce harmony",
      "Colocated utility classes make components self-documenting",
      "No context-switching between JSX and CSS files speeds up debugging",
      "Thinking in Tailwind's scale improves your Figma designs too",
      "The initial discomfort is worth the long-term velocity gain",
    ],
  },
  /* ─── POST 6 ─── */
  {
    id: 6,
    title: "User Research on a Budget: 5 Techniques That Work",
    excerpt:
      "You don't need a UX lab or enterprise budget to get valuable insights. Here's how I validate ideas fast with zero spend.",
    date: "2025-12-30",
    displayDate: "Dec 30, 2025",
    readTime: "6 min read",
    tag: "UX Research",
    gradient: "from-amber-500/25 to-orange-500/20",
    dotColor: "bg-amber-400",
    coverEmoji: "🔍",
    sections: [
      {
        heading: "Fast and Free Research Methods",
        diagramType: "research-methods",
        body: `The myth: good user research requires a lab, a recruiter, and a Lookback subscription. Reality: the most valuable research I've ever done cost nothing and took an afternoon.\n\nGuerrilla usability testing: go to a coffee shop with your prototype on a laptop. Ask five strangers. You'll hear more honest feedback in 30 minutes than from any formal session — people are blunt when they're not in a "test subject" mindset.\n\nFive-second tests: show your design for five seconds, then ask what they remember. Tools like Maze make this async and scalable.`,
      },
      {
        heading: "Competitive Teardowns and JTBD Interviews",
        diagramType: null,
        body: `Competitive teardowns: use your competitors' products for an hour. Document every friction, confusion, and delight. You'll discover what the market has trained your users to expect.\n\nJobs-to-be-done interviews: don't ask "what do you want in this app?" Ask "tell me about the last time you tried to do [task]". The stories reveal the real context your design must serve — the messy, real-world version.`,
      },
      {
        heading: "Tree Testing Reveals IA Problems Early",
        diagramType: null,
        body: `Tree testing: take your navigation structure and let users try to find things without any visual design distracting them. It reveals information architecture problems before a single pixel is designed.\n\nThese five techniques give you attitudinal and behavioral data, qualitative and quantitative signal — all for zero budget. The investment is time, curiosity, and a willingness to hear uncomfortable truths.`,
      },
    ],
    keyTakeaways: [
      "Guerrilla testing with 5 real people beats any formal lab session",
      "Five-second tests reveal what's immediately comprehensible vs. confusing",
      "Competitive teardowns show what users already expect from the market",
      "JTBD interviews uncover real context, not wishlist features",
      "Tree testing finds IA problems before any visual design is created",
    ],
  },
];


export const tagColors = {
  Design: "bg-accent-purple/15 text-accent-purple-light border-accent-purple/25",
  Development: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  "Design System": "bg-slate-500/15 text-slate-300 border-slate-500/25",
  "UX Research": "bg-amber-500/15 text-amber-400 border-amber-500/25",
};

export default blogs;
