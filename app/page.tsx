"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Monitor,
  BookOpen,
  Layers,
  Users,
  BarChart3,
  Settings2,
  ChevronDown,
  ChevronUp,
  Presentation,
  Pencil,
  ScanSearch,
  RotateCw,
  Star,
  TrendingUp,
  Clock,
  Award,
  Film,
  FlaskConical,
  CircleHelp,
  History,
  Bookmark,
  ClipboardList,
  Network,
} from "lucide-react";

const tools = [
  { icon: Monitor,      title: "Full-Screen Teaching Mode", body: "Distraction-free mode built for smartboards and digital panels." },
  { icon: Pencil,       title: "Highlight & Annotate",      body: "Draw, highlight, and annotate live on any content during the lecture." },
  { icon: ScanSearch,   title: "Zoom & Pan",                body: "Zoom into any diagram or slide for close-up explanations." },
  { icon: RotateCw,     title: "Rotate Diagrams",           body: "Rotate and pan 3D and 2D diagrams to explain from every angle." },
  { icon: Presentation, title: "1-Click Lecture Mode",      body: "Open any chapter and jump straight to teaching — no setup needed." },
  { icon: Layers,       title: "All Content Types",         body: "PPTs, diagrams, animations, simulations, and question banks in one place." },
];

const benefits = [
  { icon: Star,      title: "Standardized quality",       body: "Every class follows the same high-quality structure, regardless of the teacher or branch." },
  { icon: TrendingUp,title: "Higher engagement",          body: "Visual and interactive content keeps students focused and improves concept clarity." },
  { icon: Clock,     title: "Faster preparation",         body: "Ready-made content and tools cut prep time so teachers can focus on delivery." },
  { icon: Award,     title: "Professional experience",    body: "A polished digital classroom experience that builds trust with parents and students." },
  { icon: Users,     title: "Increased satisfaction",     body: "Parents and students see visible improvements in teaching quality and outcomes." },
  { icon: BarChart3, title: "Better outcomes",            body: "Visual and simulation-based learning leads to stronger concept clarity and exam performance." },
];

const faqItems = [
  { question: "What subjects and grades does Click & Teach cover?",         answer: "Click & Teach is focused on STEM subjects for grades 8–12, with chapter-wise and topic-wise content aligned to common curricula. Additional subjects can be discussed based on your institute's requirements." },
  { question: "Do teachers still need to prepare their own presentations?",  answer: "In most cases, no. Click & Teach provides ready-to-use PPTs, diagrams, animations, simulations, and assessments. Teachers can customize or add their own material if they prefer, but they no longer need to build everything from scratch." },
  { question: "Can we use Click & Teach on our existing smartboards?",       answer: "Yes. Click & Teach is built for smartboards and digital panels. As long as your classroom device can run the supported operating system and browser, you can start using it immediately." },
  { question: "How is the content organized for quick access during class?", answer: "All content is organized chapter-wise and topic-wise. Teachers can open a chapter, pick the relevant topic, and instantly access presentations, diagrams, animations, simulations, and questions without leaving the teaching screen." },
  { question: "How does Click & Teach help institute management?",           answer: "Admins get centralized control over content and users, along with teacher activity logs and reports. This helps standardize teaching, monitor usage, and ensure a consistent digital classroom experience across all branches." },
  { question: "How can we see a live demo?",                                 answer: "You can book a personalized demo using the Book a Demo buttons on this page. Our team will walk you through the platform, answer questions, and discuss the best rollout plan for your institute." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
      {children}
    </span>
  );
}

const platformFeatures = [
  {
    id: "smartboard",
    icon: Monitor,
    label: "Smartboard Teaching",
    title: "Teach live on any smartboard or digital panel",
    description: "Deliver every lesson directly on your smartboard. Access the full content library — presentations, diagrams, animations, and simulations — with one click. No prep delays, no switching apps.",
    bullets: [
      "Annotate, highlight, zoom, and rotate live on screen",
      "Full-screen distraction-free teaching mode",
      "Works on all smartboards and digital panels",
      "Instant access to chapter-wise content mid-lecture",
    ],
    image: "/CAT-SmartBoard.png",
    alt: "Click & Teach on a smartboard showing Chemical Kinetics",
    accent: "from-primary/80 via-indigo-500/70 to-sky-500/80",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    id: "dashboard",
    icon: BarChart3,
    label: "Institute Dashboard",
    title: "Track and monitor your entire institute",
    description: "See every topic, teacher, and lecture planned across your institute in one dashboard. Spot trends, monitor usage, and ensure consistent quality at a glance.",
    bullets: [
      "Live stats: topics, teachers, lectures, usage",
      "Track platform usage across branches",
      "Monitor teacher activity and engagement",
      "Standardize quality institute-wide",
    ],
    image: "/CAT-Dashboard.png",
    alt: "Institute dashboard showing topics, teachers, lectures and platform usage",
    accent: "from-emerald-500/80 via-teal-500/70 to-cyan-500/80",
    glow: "rgba(16,185,129,0.25)",
  },
  {
    id: "lecture",
    icon: BookOpen,
    label: "Lecture Planning",
    title: "Comprehensive lecture planning in minutes",
    description: "Build lessons from the content library using drag-and-drop. Filter by board, standard, subject, and chapter. Teachers plan faster and teach with complete confidence.",
    bullets: [
      "Drag-and-drop topic builder",
      "Filter by board, standard, subject, and chapter",
      "Saves and reuses lecture plans",
      "Links directly to smartboard teaching mode",
    ],
    image: "/CAT-LecturePlanning.png",
    alt: "Lecture planning screen with topic builder and chapter filters",
    accent: "from-indigo-500/80 via-violet-500/70 to-purple-500/80",
    glow: "rgba(139,92,246,0.25)",
  },
  {
    id: "reports",
    icon: ClipboardList,
    label: "Reports",
    title: "Generate detailed institute reports instantly",
    description: "Download reports by date range with full breakdowns by board, standard, subject, chapter, topic, and lectures. Make data-driven decisions with clarity.",
    bullets: [
      "Filter by date range and data type",
      "Boards, standards, subjects, chapters, topics",
      "One-click report download",
      "Compare periods to track improvement",
    ],
    image: "/CAT-Reports.png",
    alt: "Reports screen with filters and download button",
    accent: "from-amber-500/80 via-orange-500/70 to-rose-500/80",
    glow: "rgba(245,158,11,0.25)",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<string | null>(faqItems[0]?.question);
  const [activeFeature, setActiveFeature] = useState(platformFeatures[0].id);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Header ── */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-md sm:h-10 sm:w-10">
              CT
            </div>
            <span className="text-base font-bold tracking-tight text-white sm:text-lg">Click &amp; Teach</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            <button onClick={() => scrollToId("sections-features")} className="transition-colors hover:text-white">Features</button>
            <button onClick={() => scrollToId("sections-tools")}    className="transition-colors hover:text-white">Tools</button>
            <button onClick={() => scrollToId("sections-roles")}    className="transition-colors hover:text-white">For Institutes</button>
            <button onClick={() => scrollToId("sections-faq")}      className="transition-colors hover:text-white">FAQ</button>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={() => scrollToId("contact-section")} className="hidden rounded-full border border-slate-600 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-800 sm:inline-flex">
              Talk to Sales
            </button>
            <button onClick={() => scrollToId("contact-section")} className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-sm">
              Book a Demo
            </button>
          </div>
        </div>
      </header>

      {/* ── Stats Splash ── */}
      <section className="relative overflow-hidden bg-slate-950 pb-16 pt-16 text-white sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-indigo-600/10 blur-[80px]" />
          <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-sky-500/10 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Eyebrow */}
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:mb-4">
            40,000+ Ready Resources · STEM (8th – 12th)
          </p>

          {/* Brand title */}
          <h1 className="mb-8 text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-primary via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Click &amp; Teach
            </span>
          </h1>

          {/* Big stat grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5">
            {[
              { n: "1,000+",   label: "PPTs",              icon: Presentation,  accent: "from-primary/80 to-indigo-500/80",   glow: "rgba(99,102,241,0.35)" },
              { n: "15,000+",  label: "Diagrams",          icon: Network,       accent: "from-sky-500/80 to-cyan-500/80",     glow: "rgba(14,165,233,0.3)"  },
              { n: "5,000+",   label: "Animations",        icon: Film,          accent: "from-violet-500/80 to-purple-500/80",glow: "rgba(139,92,246,0.3)"  },
              { n: "1,000+",   label: "Simulations",       icon: FlaskConical,  accent: "from-emerald-500/80 to-teal-500/80", glow: "rgba(16,185,129,0.3)"  },
              { n: "15,000+",  label: "MCQs",              icon: CircleHelp,    accent: "from-amber-500/80 to-orange-500/80", glow: "rgba(245,158,11,0.3)"  },
              { n: "10,000+",  label: "Prev Year Qs",      icon: History,       accent: "from-rose-500/80 to-pink-500/80",    glow: "rgba(244,63,94,0.3)"   },
              { n: "10,000+",  label: "Important Qs",      icon: Star,          accent: "from-yellow-400/80 to-amber-500/80", glow: "rgba(234,179,8,0.3)"   },
              { n: "10,000+",  label: "Assignments",       icon: ClipboardList, accent: "from-teal-500/80 to-green-500/80",   glow: "rgba(20,184,166,0.3)"  },
            ].map(({ n, label, icon: Icon, accent, glow }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/8 hover:ring-white/20 sm:rounded-3xl sm:p-6 lg:p-7"
                style={{ boxShadow: `0 4px 30px ${glow.replace("0.3", "0.08")}` }}
              >
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} shadow-lg sm:mb-4 sm:h-12 sm:w-12 sm:rounded-2xl`}
                  style={{ boxShadow: `0 6px 20px ${glow}` }}>
                  <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </div>
                <p className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">{n}</p>
                <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">{label}</p>
                <div className={`pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-950 pb-0 pt-12 text-white sm:pt-16 lg:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-80 w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px] sm:h-96 sm:w-[700px] sm:blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 -z-0 h-48 w-72 rounded-full bg-indigo-500/10 blur-[80px] sm:h-64 sm:w-96 sm:blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 -z-0 h-48 w-72 rounded-full bg-sky-400/10 blur-[80px] sm:h-64 sm:w-96 sm:blur-[100px]" />

        {/* centered text */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/30 sm:mb-5">
            <span className="rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">NEW</span>
            STEM (8–12) · 40,000+ Ready Resources
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Teaching Platform
            <br />
            <span className="bg-gradient-to-r from-primary via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Built for STEM Educators
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl px-2 text-sm text-slate-400 sm:mt-5 sm:px-0 sm:text-base lg:text-lg">
            Ready-to-use presentations, diagrams, animations, simulations, and assessments — organized chapter-wise and accessible in one click on your smartboard.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
            <button
              id="cta-demo"
              onClick={() => scrollToId("contact-section")}
              className="w-full rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              Book a Demo
            </button>
            <button
              onClick={() => scrollToId("sections-features")}
              className="w-full rounded-full border border-slate-600 px-7 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800 sm:w-auto"
            >
              Explore Features
            </button>
          </div>
          <p className="mt-5 text-xs text-slate-500">Trusted by STEM institutes across India · No credit card required</p>
        </div>

        {/* Hero mockup — product UI preview */}
        <div className="relative z-10 mx-auto mt-10 max-w-5xl px-4 sm:mt-14 sm:px-6">
          <div className="overflow-hidden rounded-t-xl shadow-2xl ring-1 ring-white/10 sm:rounded-t-2xl">
            <div className="flex items-center gap-1.5 bg-slate-800/90 px-3 py-2.5 sm:px-4 sm:py-3">
              <span className="h-2 w-2 rounded-full bg-red-500/70 sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/70 sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-green-500/70 sm:h-2.5 sm:w-2.5" />
              <span className="ml-2 truncate text-[10px] text-slate-400 sm:ml-3 sm:text-xs">
                Click &amp; Teach · Chapter 5: Light — Reflection &amp; Refraction
              </span>
              <span className="ml-auto flex shrink-0 items-center gap-1 rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live
              </span>
            </div>
            <div className="bg-slate-900 text-xs text-slate-300">
              <div className="block sm:hidden p-3 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold text-slate-100">Light — Reflection &amp; Refraction</p>
                  <div className="flex gap-1">
                    {["Highlight", "Zoom"].map((t) => (
                      <span key={t} className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[9px] font-medium text-primary">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-1 text-[10px]">
                  {["Presentation", "Diagrams", "Animation", "Simulation", "MCQs"].map((tab, i) => (
                    <span key={tab} className={`shrink-0 rounded-full px-2 py-1 ${i === 0 ? "bg-slate-600 text-white" : "bg-slate-800 text-slate-400"}`}>{tab}</span>
                  ))}
                </div>
                <div className="flex h-28 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-900/60 to-slate-800 text-[10px] text-slate-500">
                  [ Slide — Laws of Reflection ]
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="flex h-14 items-center justify-center rounded-lg bg-slate-800 text-[9px] text-slate-500">Diagram 1</div>
                  <div className="flex h-14 items-center justify-center rounded-lg bg-slate-800 text-[9px] text-slate-500">Diagram 2</div>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 border-t border-slate-700/60 pt-2 text-[9px] text-slate-500">
                  <span>1000+ PPTs</span><span>·</span><span>15,000+ Diagrams</span><span>·</span><span>5,000+ Animations</span>
                </div>
              </div>
              <div className="hidden sm:grid sm:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr]">
                <div className="border-r border-slate-700/60 p-3 space-y-1">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Class 10 · STEM</p>
                  {["Chapter 1: Chemical Reactions", "Chapter 2: Acids & Bases", "Chapter 3: Metals", "Chapter 4: Carbon Compounds", "Chapter 5: Light"].map((ch, i) => (
                    <div key={ch} className={`rounded-md px-2 py-1.5 text-[11px] ${i === 4 ? "bg-primary/20 font-semibold text-primary" : "text-slate-400"}`}>{ch}</div>
                  ))}
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-100">Light — Reflection &amp; Refraction</p>
                    <div className="flex gap-1.5">
                      {["Highlight", "Annotate", "Zoom", "Rotate"].map((tool) => (
                        <span key={tool} className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 text-[11px]">
                    {["Presentation", "Diagrams", "Animation", "Simulation", "MCQs"].map((tab, i) => (
                      <span key={tab} className={`rounded-full px-2.5 py-1 ${i === 0 ? "bg-slate-600 text-white" : "bg-slate-800 text-slate-400"}`}>{tab}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2 flex h-32 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-900/60 to-slate-800 text-xs text-slate-500">
                      [ Slide — Laws of Reflection ]
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex h-[3.8rem] items-center justify-center rounded-lg bg-slate-800 text-[10px] text-slate-500">Diagram 1</div>
                      <div className="flex h-[3.8rem] items-center justify-center rounded-lg bg-slate-800 text-[10px] text-slate-500">Diagram 2</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-slate-700/60 pt-2 text-[10px] text-slate-500">
                    <span>1000+ PPTs</span><span>·</span><span>15,000+ Diagrams</span><span>·</span><span>5,000+ Animations</span><span>·</span><span>1000+ Simulations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <main className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:px-10 lg:pb-20 lg:pt-12">

        {/* ── Key features (interactive tab switcher) ── */}
        <section id="sections-features" className="mt-4 sm:mt-6 lg:mt-10">
          <div className="mb-8 text-center sm:mb-10">
            <SectionLabel>Key features</SectionLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Everything you need in one platform
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              From teaching on smartboards to tracking your institute and planning lectures — Click &amp; Teach brings it all together.
            </p>
          </div>

          {/* Tab bar */}
          <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            {platformFeatures.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveFeature(id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all sm:px-5 sm:text-sm ${
                  activeFeature === id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card text-muted-foreground ring-1 ring-border/70 hover:ring-primary/50 hover:text-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Active feature panel */}
          {platformFeatures.map(({ id, icon: Icon, title, description, bullets, image, alt, accent, glow }) => (
            <div
              key={id}
              className={`rounded-2xl bg-card shadow-sm ring-1 ring-border/70 sm:rounded-3xl transition-all duration-300 ${activeFeature === id ? "block" : "hidden"}`}
            >
              <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
                {/* Left — text */}
                <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} shadow-lg`}
                    style={{ boxShadow: `0 8px 24px ${glow}` }}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">{title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground sm:text-base">{description}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-[10px] font-bold text-white`}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollToId("contact-section")}
                    className="w-fit rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                  >
                    Book a Demo
                  </button>
                </div>

                {/* Right — screenshot */}
                <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
                  <div
                    className="w-full rounded-xl p-[2px] sm:rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${glow.replace("0.3", "0.9")}, transparent, ${glow.replace("0.3", "0.6")})`,
                      boxShadow: `0 0 40px ${glow}, 0 0 80px ${glow.replace("0.3", "0.15")}`,
                    }}
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-[calc(0.75rem-2px)] bg-slate-900 sm:rounded-[calc(1rem-2px)]">
                      <Image
                        src={image}
                        alt={alt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── Classroom Tools ── */}
        <section id="sections-tools" className="mt-4 overflow-hidden rounded-2xl bg-slate-950 px-4 py-8 text-white shadow-xl sm:mt-6 sm:rounded-3xl sm:px-8 sm:py-12 lg:mt-10 lg:px-14">
          <div className="relative z-10 space-y-8 sm:space-y-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
              <div className="space-y-3">
                <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/30">
                  Classroom Tools
                </span>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                  Built for interactive digital classrooms
                </h2>
                <p className="text-sm text-slate-400 sm:text-base lg:text-lg">
                  Every lesson becomes more visual, interactive, and engaging — especially on smartboards and digital panels.
                </p>
                <p className="text-sm text-slate-500">
                  Teachers interact with content live — no switching apps, no preparation delays.
                </p>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-white/10 sm:rounded-2xl">
                <Image
                  src="/Classroom-Tools.jpeg"
                  alt="Educator with tablet and digital teaching tools — data, presentations, and ideas for STEM classrooms"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {tools.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/8 sm:rounded-2xl sm:p-5">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-1.5 text-xs text-slate-400 sm:text-sm">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Institutes Choose ── */}
        <section className="mt-4 space-y-6 sm:mt-6 sm:space-y-8 lg:mt-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="space-y-4">
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Why institutes choose Click &amp; Teach
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base lg:text-lg">
                Consistent, high-quality digital teaching across every classroom and faculty member.
              </p>
              <button onClick={() => scrollToId("contact-section")} className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
                Book a Demo for Your Institute
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted shadow-lg ring-1 ring-border/70 sm:rounded-2xl">
              <Image
                src="/Classroom.jpeg"
                alt="Teacher presenting at an interactive smartboard with STEM graphics — modern digital classroom"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl bg-card p-4 shadow-sm ring-1 ring-border/70 transition-shadow hover:shadow-md sm:rounded-2xl sm:p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── For Institutes & Educators ── */}
        <section id="sections-roles" className="mt-4 rounded-2xl bg-card px-4 py-8 shadow-sm ring-1 ring-border/70 sm:mt-6 sm:rounded-3xl sm:px-8 sm:py-12 lg:mt-10 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-10">
            <div className="space-y-3 sm:space-y-4">
              <SectionLabel>For Institutes</SectionLabel>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Built for institutes &amp; educators
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Designed for both classroom teachers and institute management — from a single platform.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              <div className="rounded-xl bg-primary/5 p-4 ring-1 ring-primary/15 sm:rounded-2xl sm:p-6">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">For Teachers</p>
                <h3 className="mt-2 text-base font-semibold">Everything ready before class starts</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground sm:mt-4 sm:space-y-2.5">
                  {[
                    "Centralized content library for every chapter.",
                    "Ready lecture material — PPTs, diagrams, and more.",
                    "One-click teaching mode for hassle-free classes.",
                    "Classroom-ready tools for annotations, zoom, and rotate.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-secondary p-4 ring-1 ring-border/70 sm:rounded-2xl sm:p-6">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                  <Settings2 className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">For Admin</p>
                <h3 className="mt-2 text-base font-semibold">Control, visibility, and customization</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground sm:mt-4 sm:space-y-2.5">
                  {[
                    "User and content access control across branches.",
                    "Secure, centralized content management.",
                    "Teacher activity logs and usage reports.",
                    "Institute-level customization and branding.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Future Ready ── */}
        <section className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 px-4 py-8 text-white shadow-xl sm:mt-6 sm:rounded-3xl sm:px-8 sm:py-12 lg:mt-10 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-10">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70 ring-1 ring-white/20">
                Future-Ready
              </span>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Future-ready teaching
              </h2>
              <p className="text-sm text-slate-400 sm:text-base">
                Education is moving fast. Click &amp; Teach helps institutes lead the shift — not lag behind it.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <button onClick={() => scrollToId("contact-section")} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow transition-transform hover:-translate-y-0.5 hover:shadow-md">
                  Book a Demo
                </button>
                <button onClick={() => scrollToId("contact-section")} className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10">
                  Contact Sales
                </button>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                { from: "Chalkboards",        to: "Smart Classrooms", body: "From static, text-heavy teaching to visual, interactive lessons on digital panels." },
                { from: "Memorization",       to: "Visualization",    body: "From rote learning to animations, simulations, and concept-first understanding." },
                { from: "Manual Preparation", to: "Digital Efficiency",body: "From hours of slide-making to ready-to-use content accessible in one click." },
              ].map((row) => (
                <div key={row.from} className="flex flex-col gap-2 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 sm:flex-row sm:items-start sm:gap-4 sm:rounded-2xl sm:p-5">
                  <div className="flex shrink-0 flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className="rounded-md bg-white/10 px-2.5 py-1 text-slate-400">{row.from}</span>
                    <span className="text-slate-600">→</span>
                    <span className="rounded-md bg-primary/20 px-2.5 py-1 text-primary">{row.to}</span>
                  </div>
                  <p className="text-xs text-slate-400 sm:text-sm">{row.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="sections-faq" className="mt-4 rounded-2xl bg-card px-4 py-8 shadow-sm ring-1 ring-border/70 sm:mt-6 sm:rounded-3xl sm:px-8 sm:py-12 lg:mt-10 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10">
            <div className="space-y-4">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Frequently asked questions
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Quick answers about Click &amp; Teach. Still have questions? Our team is here.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <button onClick={() => scrollToId("contact-section")} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm">
                  Book a Demo
                </button>
                <button onClick={() => scrollToId("contact-section")} className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary">
                  Contact Sales
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {faqItems.map((item) => {
                const isOpen = openFaq === item.question;
                return (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : item.question)}
                    className="flex w-full flex-col items-stretch rounded-xl bg-background px-4 py-3.5 text-left shadow-sm ring-1 ring-border/70 transition-all hover:ring-border sm:rounded-2xl sm:px-5 sm:py-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium">{item.question}</span>
                      {isOpen
                        ? <ChevronUp   className="h-4 w-4 shrink-0 text-muted-foreground" />
                        : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                      }
                    </div>
                    {isOpen && (
                      <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section id="contact-section" className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-indigo-600 to-sky-500 p-px shadow-2xl sm:mt-6 sm:rounded-3xl lg:mt-10">
          <div className="rounded-[calc(1rem-1px)] bg-slate-950 px-4 py-10 text-center text-white sm:rounded-[calc(1.4rem-1px)] sm:px-10 sm:py-16 lg:px-20">
            <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/30">
              Get Started Today
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to upgrade your classrooms?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
              See how Click &amp; Teach can standardize teaching quality and make every STEM class more engaging — in just one demo.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
              <button className="w-full rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 sm:w-auto sm:py-3.5">
                Book a Demo
              </button>
              <button className="w-full rounded-full border border-slate-600 px-8 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800 sm:w-auto sm:py-3.5">
                Talk to Sales
              </button>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 sm:gap-6">
              <span>✓ No credit card required</span>
              <span>✓ Personalized demo</span>
              <span>✓ Reply within 1 business day</span>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-6 lg:px-10">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-[10px] font-bold text-primary-foreground">CT</div>
            <span className="font-medium text-foreground">Click &amp; Teach</span>
            <span>· Digital Teaching Platform</span>
          </div>
          <p>© {new Date().getFullYear()} Click &amp; Teach. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
