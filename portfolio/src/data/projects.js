import proj1 from "../assets/Rectangle 22.png";
import proj2 from "../assets/Rectangle 22-1.png";
import proj3 from "../assets/Rectangle 22-2.png";
import proj4 from "../assets/Rectangle 22-3.png";
import portfolioCover from "../assets/Image.png";
import portfolioCover2 from "../assets/Image-1.png";

const projects = [
  {
    id: 1,
    tier: "complete",
    title: "E-Commerce Dashboard",
    tagline: "Real-time analytics & inventory management",
    description:
      "A modern admin dashboard with analytics, inventory management, and real-time order tracking. Built with a focus on data clarity and fast interactions.",
    longDescription: `This project was a full-featured admin panel designed for a mid-sized e-commerce brand. 
The challenge was balancing information density with usability — merchants needed to see live sales, 
stock levels, and customer behaviour all on one screen without feeling overwhelmed.

I started with competitive analysis of Shopify and WooCommerce dashboards, ran card-sorting sessions 
with 8 merchants, and distilled the findings into a clean grid-based layout with a dark-mode-first palette.

The result was a 40% reduction in time-to-insight for key metrics and a UI that scaled from laptop to 
widescreen monitors.`,
    image: proj1,
    tags: ["React", "Figma", "CSS"],
    category: "UI/UX",
    year: "2024",
    role: "UI Designer & Frontend Dev",
    duration: "6 weeks",
    tools: ["Figma", "React", "Recharts", "Tailwind CSS"],
    highlights: [
      "40% faster time-to-insight for key metrics",
      "Dark-mode-first design system with 50+ components",
      "Real-time chart animations using Recharts",
      "Responsive across 4 breakpoints",
    ],
  },
  {
    id: 2,
    tier: "complete",
    title: "Travel App Design",
    tagline: "End-to-end mobile UX for a booking platform",
    description:
      "End-to-end mobile app design for a travel booking platform with smooth onboarding flows and intuitive search.",
    longDescription: `The client needed a mobile-first travel booking app to compete with Airbnb and Booking.com 
on simplicity. My role covered the entire UX process — research, wireframing, prototyping, and handoff.

After interviewing 12 frequent travellers I identified three pain points: confusing date pickers, 
too many steps to checkout, and a lack of trust signals. 

The redesigned flow reduced checkout steps from 7 to 3, introduced social proof cards, and used 
micro-interactions throughout to make the experience feel premium.`,
    image: proj2,
    tags: ["Figma", "Prototyping", "UX Research"],
    category: "Design",
    year: "2024",
    role: "Lead UX Designer",
    duration: "8 weeks",
    tools: ["Figma", "FigJam", "Maze (usability testing)", "Lottie"],
    highlights: [
      "Checkout flow reduced from 7 → 3 steps",
      "Interactive prototype tested with 20 users",
      "Micro-animations designed in Lottie",
      "Full design system with auto-layout components",
    ],
  },
  {
    id: 3,
    tier: "complete",
    title: "Portfolio Website",
    tagline: "Personal brand built with React + Tailwind",
    description:
      "A sleek portfolio website built with React and Vite, featuring a dark theme, scroll-reveal animations, and full routing.",
    longDescription: `This is the very portfolio you are looking at right now. The design was inspired by 
the Figma Community Portfolio template and translated into a fully interactive React app.

The goal was to feel premium without being heavy. Every section uses Intersection Observer-based 
scroll-reveal animations, Tailwind CSS for styling, and React Router for the project detail pages.

Performance was a priority — the site ships with zero runtime CSS-in-JS, lazy-loaded images, 
and a Lighthouse score above 95.`,
    image: proj3,
    tags: ["React", "Vite", "Tailwind CSS"],
    category: "Development",
    year: "2026",
    role: "Designer & Developer",
    duration: "3 weeks",
    tools: ["React", "Vite", "Tailwind CSS", "React Router"],
    highlights: [
      "Scroll-reveal animations with IntersectionObserver",
      "Zero runtime CSS-in-JS — pure Tailwind",
      "Project detail pages with dynamic routing",
      "Lighthouse performance score > 95",
    ],
  },
  {
    id: 4,
    tier: "small",
    title: "Finance Tracker App",
    tagline: "Personal budgeting with beautiful data viz",
    description:
      "A responsive personal finance tracker with beautiful charts, category breakdowns, and smart budget planning tools.",
    longDescription: `People struggle to maintain budgets not because of discipline, but because existing apps 
are boring and hard to understand at a glance. This project reimagined personal finance as a 
delightful daily ritual.

I designed a minimal dashboard that surfaces your most important number — how much you have left 
to spend today — front and centre. Below it, colour-coded category rings and a 30-day spending 
sparkline give instant context without requiring navigation.

The prototype was tested with 10 users across two rounds of usability testing, resulting in a 
task-completion rate of 94%.`,
    image: proj4,
    tags: ["React", "JavaScript", "Figma"],
    category: "UI/UX",
    year: "2023",
    role: "Product Designer",
    duration: "5 weeks",
    tools: ["Figma", "React", "D3.js", "shadcn/ui"],
    highlights: [
      "94% task-completion rate in usability testing",
      "Daily budget ring — key metric always visible",
      "30-day sparkline for instant trend reading",
      "Accessible colour palette (WCAG AA)",
    ],
  },
  {
    id: 5,
    tier: "small",
    title: "Community Platform",
    tagline: "Live collaboration & discussion boards",
    description:
      "A community-driven platform UI design with live collaboration features, channels, and rich discussion boards.",
    longDescription: `Designed for a startup building a professional community for indie developers. 
The platform needed to feel like a cross between Discord, GitHub Discussions, and Notion.

Key design decisions included a sidebar-first navigation pattern, thread-based conversations that 
collapse cleanly, and a rich-text editor with slash commands for power users.

The design was delivered as a Figma file with 200+ components, interactive prototypes for 
the onboarding flow, and a comprehensive spacing & colour token system.`,
    image: portfolioCover,
    tags: ["Design", "Figma", "UX"],
    category: "Design",
    year: "2023",
    role: "UI/UX Designer",
    duration: "10 weeks",
    tools: ["Figma", "FigJam", "Notion"],
    highlights: [
      "200+ component Figma library",
      "Onboarding flow prototype with 30 screens",
      "Slash-command rich text editor design",
      "Full token system (colors, spacing, typography)",
    ],
  },
  {
    id: 6,
    tier: "small",
    title: "Mobile Banking UI",
    tagline: "Streamlined payments & account management",
    description:
      "Intuitive mobile banking interface with streamlined payment flows and clear account management.",
    longDescription: `A fintech client needed to redesign their legacy mobile banking app that had 
accumulated years of feature bloat. The redesign focused on three core jobs-to-be-done: 
send money, check balance, and pay bills.

I audited 120+ existing screens, identified 60% that were redundant or confusing, and rebuilt 
the core flows from scratch. The new architecture reduced the average tap count for "send money" 
from 11 to 4.

The final deliverable included a complete Figma prototype, accessibility annotations, 
and developer handoff specs.`,
    image: portfolioCover2,
    tags: ["Figma", "Prototyping", "UI"],
    category: "Design",
    year: "2023",
    role: "UI Designer",
    duration: "7 weeks",
    tools: ["Figma", "Principle", "Zeplin"],
    highlights: [
      "\"Send money\" reduced from 11 → 4 taps",
      "120+ screens audited and consolidated",
      "WCAG-AA accessible colour system",
      "Full developer handoff in Zeplin",
    ],
  },
];

export default projects;
