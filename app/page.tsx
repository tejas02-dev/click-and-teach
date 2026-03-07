"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import {
  Monitor,
  BookOpen,
  Layers,
  Users,
  BarChart3,
  Settings2,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
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
  { icon: Monitor,      title: "Full-Screen Teaching Mode", body: "Distraction-free on smartboards." },
  { icon: Pencil,       title: "Highlight & Annotate",      body: "Draw and annotate live on any content." },
  { icon: ScanSearch,   title: "Zoom & Pan",                body: "Zoom into diagrams and slides." },
  { icon: RotateCw,     title: "Rotate Diagrams",           body: "Rotate 2D/3D diagrams for every angle." },
  { icon: Presentation, title: "1-Click Lecture Mode",      body: "Open a chapter and start teaching." },
  { icon: Layers,       title: "All Content Types",         body: "PPTs, diagrams, animations, sims, questions — one place." },
];

const benefits = [
  { icon: Star,      title: "Standardized quality",       body: "Same high-quality structure, every teacher and branch." },
  { icon: TrendingUp,title: "Higher engagement",          body: "Visual, interactive content; better concept clarity." },
  { icon: Clock,     title: "Faster preparation",         body: "Ready content cuts prep time." },
  { icon: Award,     title: "Professional experience",    body: "Polished digital classroom; builds trust." },
  { icon: Users,     title: "Increased satisfaction",      body: "Visible improvements in quality and outcomes." },
  { icon: BarChart3, title: "Better outcomes",            body: "Visual and simulation-based learning; stronger results." },
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
    description: "Full content library on your smartboard — one click, no prep.",
    bullets: [
      "Annotate, highlight, zoom, rotate live",
      "Full-screen teaching mode",
      "Works on all smartboards & panels",
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
    description: "One dashboard for topics, teachers, lectures, and usage.",
    bullets: [
      "Live stats across branches",
      "Monitor teacher activity",
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
    description: "Drag-and-drop planning. Filter by board, standard, subject, chapter.",
    bullets: [
      "Topic builder & filters",
      "Save and reuse plans",
      "One click to teaching mode",
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
    description: "Reports by date range — boards, subjects, chapters, topics. One-click download.",
    bullets: [
      "Full breakdowns & filters",
      "One-click download",
      "Compare periods",
    ],
    image: "/CAT-Reports.png",
    alt: "Reports screen with filters and download button",
    accent: "from-amber-500/80 via-orange-500/70 to-rose-500/80",
    glow: "rgba(245,158,11,0.25)",
  },
];

const FEATURE_AUTO_ADVANCE_MS = 6000;

export default function Home() {
  const [openFaq, setOpenFaq] = useState<string | null>(faqItems[0]?.question);
  const [activeFeature, setActiveFeature] = useState(platformFeatures[0].id);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveFeature((current) => {
        const i = platformFeatures.findIndex((f) => f.id === current);
        const next = (i + 1) % platformFeatures.length;
        return platformFeatures[next].id;
      });
    }, FEATURE_AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  const goToFeature = (id: string) => setActiveFeature(id);
  const goPrev = () => {
    const i = platformFeatures.findIndex((f) => f.id === activeFeature);
    const prev = (i - 1 + platformFeatures.length) % platformFeatures.length;
    setActiveFeature(platformFeatures[prev].id);
  };
  const goNext = () => {
    const i = platformFeatures.findIndex((f) => f.id === activeFeature);
    const next = (i + 1) % platformFeatures.length;
    setActiveFeature(platformFeatures[next].id);
  };

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
            <Link href="/contact" className="hidden rounded-full border border-slate-600 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-800 sm:inline-flex">
              Talk to Sales
            </Link>
            <button onClick={() => scrollToId("contact-section")} className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-sm">
              Book a Demo
            </button>
          </div>
        </div>
      </header>

      {/* ── Stats Splash ── */}
      <section className="relative overflow-hidden bg-white pb-20 pt-20 text-foreground sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-indigo-500/5 blur-[80px]" />
          <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-sky-500/5 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Eyebrow */}
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:mb-5">
            40,000+ Ready Resources · STEM (8th – 12th)
          </p>

          {/* Brand title */}
          <h1 className="mb-10 text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-primary via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Click &amp; Teach
            </span>
          </h1>

          {/* Big stat grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:gap-6">
            {[
              { n: "1,000+",   label: "PPTs",              icon: Presentation,  accent: "from-primary/80 to-indigo-500/80",   glow: "rgba(99,102,241,0.35)", bg: "bg-indigo-50",      text: "text-indigo-800", border: "border-indigo-200" },
              { n: "15,000+",  label: "Diagrams",          icon: Network,       accent: "from-sky-500/80 to-cyan-500/80",     glow: "rgba(14,165,233,0.3)",  bg: "bg-sky-50",        text: "text-sky-800",   border: "border-sky-200" },
              { n: "5,000+",   label: "Animations",        icon: Film,          accent: "from-violet-500/80 to-purple-500/80",glow: "rgba(139,92,246,0.3)",  bg: "bg-violet-50",     text: "text-violet-800", border: "border-violet-200" },
              { n: "1,000+",   label: "Simulations",       icon: FlaskConical,  accent: "from-emerald-500/80 to-teal-500/80", glow: "rgba(16,185,129,0.3)",  bg: "bg-emerald-50",    text: "text-emerald-800", border: "border-emerald-200" },
              { n: "15,000+",  label: "MCQs",              icon: CircleHelp,    accent: "from-amber-500/80 to-orange-500/80", glow: "rgba(245,158,11,0.3)",  bg: "bg-amber-50",      text: "text-amber-800",  border: "border-amber-200" },
              { n: "10,000+",  label: "Prev Year Qs",      icon: History,       accent: "from-rose-500/80 to-pink-500/80",    glow: "rgba(244,63,94,0.3)",   bg: "bg-rose-50",       text: "text-rose-800",  border: "border-rose-200" },
              { n: "10,000+",  label: "Important Qs",      icon: Star,          accent: "from-yellow-400/80 to-amber-500/80", glow: "rgba(234,179,8,0.3)",   bg: "bg-amber-50",      text: "text-amber-900",  border: "border-amber-300" },
              { n: "10,000+",  label: "Assignments",       icon: ClipboardList, accent: "from-teal-500/80 to-green-500/80",   glow: "rgba(20,184,166,0.3)",  bg: "bg-teal-50",       text: "text-teal-800",   border: "border-teal-200" },
            ].map(({ n, label, icon: Icon, accent, glow, bg, text, border }) => (
              <div
                key={label}
                className={`group relative overflow-hidden rounded-2xl border ${border} ${bg} p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:rounded-3xl sm:p-6 lg:p-7`}
                style={{ boxShadow: `0 2px 12px ${glow.replace("0.3", "0.06").replace("0.35", "0.07")}` }}
              >
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} shadow-lg sm:mb-4 sm:h-12 sm:w-12 sm:rounded-2xl`}
                  style={{ boxShadow: `0 6px 20px ${glow}` }}>
                  <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </div>
                <p className={`text-2xl font-extrabold tracking-tight ${text} sm:text-3xl lg:text-4xl`}>{n}</p>
                <p className={`mt-1 text-xs font-medium ${text} opacity-90 sm:text-sm`}>{label}</p>
                <div className={`pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-15`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white pb-0 pt-16 text-foreground sm:pt-20 lg:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-80 w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px] sm:h-96 sm:w-[700px] sm:blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 -z-0 h-48 w-72 rounded-full bg-indigo-500/5 blur-[80px] sm:h-64 sm:w-96 sm:blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 -z-0 h-48 w-72 rounded-full bg-sky-400/5 blur-[80px] sm:h-64 sm:w-96 sm:blur-[100px]" />

        {/* centered text */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/30 sm:mb-5">
            <span className="rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">NEW</span>
            STEM (8–12) · 40,000+ Ready Resources
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Teaching Platform
            <br />
            <span className="bg-gradient-to-r from-primary via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Built for STEM Educators
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg px-2 text-sm text-slate-600 sm:mt-6 sm:px-0">
            Ready-to-use STEM content — chapter-wise, one click on your smartboard.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row">
            <button
              id="cta-demo"
              onClick={() => scrollToId("contact-section")}
              className="w-full rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              Book a Demo
            </button>
            <button
              onClick={() => scrollToId("sections-features")}
              className="w-full rounded-full border border-slate-300 px-7 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 sm:w-auto"
            >
              Explore Features
            </button>
          </div>
          <p className="mt-5 text-xs text-slate-500">Trusted by STEM institutes across India · No credit card required</p>
        </div>

        {/* Hero mockup — product UI preview */}
        <div className="relative z-10 mx-auto mt-14 max-w-5xl px-4 sm:mt-20 sm:px-6">
          <div className="overflow-hidden rounded-t-xl shadow-2xl ring-1 ring-slate-200/80 sm:rounded-t-2xl">
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
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20">

        {/* ── Key features (carousel) ── */}
        <section id="sections-features" className="mt-10 sm:mt-14 lg:mt-20">
          <div className="mb-10 text-center sm:mb-14">
            <SectionLabel>Key features</SectionLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Everything you need in one platform
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Smartboards, dashboards, planning, reports — one platform.
            </p>
          </div>

          {/* Tab bar */}
          <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {platformFeatures.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => goToFeature(id)}
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

          {/* Carousel: prev / panel / next */}
          <div className="relative">
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card text-muted-foreground shadow-md ring-1 ring-border/70 transition-colors hover:bg-primary hover:text-primary-foreground hover:ring-primary/50 sm:-left-2 sm:h-12 sm:w-12"
              aria-label="Previous feature"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card text-muted-foreground shadow-md ring-1 ring-border/70 transition-colors hover:bg-primary hover:text-primary-foreground hover:ring-primary/50 sm:-right-2 sm:h-12 sm:w-12"
              aria-label="Next feature"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

          {/* Active feature panel */}
          {platformFeatures.map(({ id, icon: Icon, title, description, bullets, image, alt, accent, glow }) => (
            <div
              key={id}
              className={`rounded-2xl bg-card shadow-sm ring-1 ring-border/70 sm:rounded-3xl transition-all duration-300 ${activeFeature === id ? "block" : "hidden"}`}
            >
              <div className="grid gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.5fr)]">
                {/* Left — text */}
                <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 lg:p-10">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} shadow-lg`}
                    style={{ boxShadow: `0 8px 24px ${glow}` }}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                  </div>
                  <ul className="space-y-2">
                    {bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-[9px] font-bold text-white`}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollToId("contact-section")}
                    className="mt-1 w-fit rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                  >
                    Book a Demo
                  </button>
                </div>

                {/* Right — screenshot (more space) */}
                <div className="flex items-center justify-center p-5 sm:p-6 lg:p-8">
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

            {/* Carousel dots */}
            <div className="mt-8 flex justify-center gap-2">
              {platformFeatures.map(({ id }) => (
                <button
                  key={id}
                  onClick={() => goToFeature(id)}
                  className={`h-2 rounded-full transition-all sm:h-2.5 ${
                    activeFeature === id
                      ? "w-6 bg-primary sm:w-8"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50 sm:w-2.5"
                  }`}
                  aria-label={`Go to feature ${id}`}
                  aria-current={activeFeature === id ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Classroom Tools ── */}
        <section id="sections-tools" className="mt-10 overflow-hidden rounded-2xl bg-slate-950 px-6 py-10 text-white shadow-xl sm:mt-14 sm:rounded-3xl sm:px-10 sm:py-14 lg:mt-20 lg:px-14 lg:py-16">
          <div className="relative z-10 space-y-10 sm:space-y-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/30">
                  Classroom Tools
                </span>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                  Built for interactive digital classrooms
                </h2>
                <p className="max-w-md text-sm text-slate-400">
                  Visual, interactive lessons on smartboards — no app switching, no prep delays.
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

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {tools.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10 transition-colors hover:bg-white/8 sm:rounded-2xl sm:p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-2 text-xs text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Institutes Choose ── */}
        <section className="mt-10 space-y-10 sm:mt-14 sm:space-y-12 lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14">
            <div className="space-y-5">
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Why institutes choose Click &amp; Teach
              </h2>
              <p className="max-w-md text-sm text-muted-foreground">
                Consistent, high-quality digital teaching — every classroom, every teacher.
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

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl bg-card p-5 shadow-sm ring-1 ring-border/70 transition-shadow hover:shadow-md sm:rounded-2xl sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-2 text-xs text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── For Institutes & Educators ── */}
        <section id="sections-roles" className="mt-10 rounded-2xl bg-card px-6 py-10 shadow-sm ring-1 ring-border/70 sm:mt-14 sm:rounded-3xl sm:px-10 sm:py-14 lg:mt-20 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-14">
            <div className="space-y-4">
              <SectionLabel>For Institutes</SectionLabel>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Built for institutes &amp; educators
              </h2>
              <p className="max-w-sm text-sm text-muted-foreground">
                Teachers and management — one platform.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <div className="rounded-xl bg-primary/5 p-5 ring-1 ring-primary/15 sm:rounded-2xl sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">For Teachers</p>
                <h3 className="mt-2 text-base font-semibold">Ready before class</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {["Content library per chapter", "Ready PPTs, diagrams, more", "One-click teaching mode", "Annotate, zoom, rotate"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-secondary p-5 ring-1 ring-border/70 sm:rounded-2xl sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                  <Settings2 className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">For Admin</p>
                <h3 className="mt-2 text-base font-semibold">Control & visibility</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {["Access control across branches", "Central content management", "Activity logs & reports", "Customization & branding"].map((item) => (
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
        <section className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 px-6 py-10 text-white shadow-xl sm:mt-14 sm:rounded-3xl sm:px-10 sm:py-14 lg:mt-20 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-14">
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70 ring-1 ring-white/20">
                Future-Ready
              </span>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Future-ready teaching
              </h2>
              <p className="max-w-sm text-sm text-slate-400">
                Lead the shift — not lag behind.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <button onClick={() => scrollToId("contact-section")} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow transition-transform hover:-translate-y-0.5 hover:shadow-md">
                  Book a Demo
                </button>
                <Link href="/contact" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 sm:inline-flex sm:items-center sm:justify-center">
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { from: "Chalkboards",        to: "Smart Classrooms", body: "Visual, interactive lessons on digital panels." },
                { from: "Memorization",       to: "Visualization",    body: "Animations, simulations, concept-first understanding." },
                { from: "Manual Prep",       to: "One-Click Content", body: "Ready-to-use content, no slide-making." },
              ].map((row) => (
                <div key={row.from} className="flex flex-col gap-2 rounded-xl bg-white/5 p-5 ring-1 ring-white/10 sm:flex-row sm:items-center sm:gap-5 sm:rounded-2xl">
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
        <section id="sections-faq" className="mt-10 rounded-2xl bg-card px-6 py-10 shadow-sm ring-1 ring-border/70 sm:mt-14 sm:rounded-3xl sm:px-10 sm:py-14 lg:mt-20 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-14">
            <div className="space-y-5">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Frequently asked questions
              </h2>
              <p className="max-w-sm text-sm text-muted-foreground">
                Quick answers. Questions? Our team is here.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <button onClick={() => scrollToId("contact-section")} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm">
                  Book a Demo
                </button>
                <Link href="/contact" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary sm:inline-flex sm:items-center sm:justify-center">
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              {faqItems.map((item) => {
                const isOpen = openFaq === item.question;
                return (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : item.question)}
                    className="flex w-full flex-col items-stretch rounded-xl bg-background px-4 py-4 text-left shadow-sm ring-1 ring-border/70 transition-all hover:ring-border sm:rounded-2xl sm:px-5 sm:py-5"
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
        <section id="contact-section" className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-indigo-600 to-sky-500 p-px shadow-2xl sm:mt-14 sm:rounded-3xl lg:mt-20">
          <div className="rounded-[calc(1rem-1px)] bg-slate-950 px-6 py-12 text-center text-white sm:rounded-[calc(1.4rem-1px)] sm:px-12 sm:py-20 lg:px-24 lg:py-24">
            <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/30">
              Get Started Today
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to upgrade your classrooms?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">
              One demo — see how we standardize quality and make every STEM class more engaging.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button onClick={() => scrollToId("contact-section")} className="w-full rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 sm:w-auto sm:py-3.5">
                Book a Demo
              </button>
              <Link href="/contact" className="w-full rounded-full border border-slate-600 px-8 py-3 text-center text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800 sm:w-auto sm:py-3.5">
                Talk to Sales
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 sm:gap-6">
              <span>✓ No credit card required</span>
              <span>✓ Personalized demo</span>
              <span>✓ Reply within 1 business day</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
