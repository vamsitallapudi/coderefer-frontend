"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  Bot,
  Workflow,
  BrainCircuit,
  GraduationCap,
  CheckCircle2,
  Star,
  ChevronRight,
} from "lucide-react"
import { useInView } from "@/hooks/useInView"

/* ─── Reusable scroll-reveal wrapper ─── */
function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "in"
}) {
  const { ref, inView } = useInView()
  const animClass = {
    up: inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
    left: inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
    right: inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
    in: inView ? "opacity-100 scale-100" : "opacity-0 scale-95",
  }[direction]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "30+", label: "AI Automations" },
  { value: "12+", label: "Industries Served" },
]

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Custom autonomous agents that handle complex tasks, communicate, and act on your behalf — 24/7.",
    tag: "Autonomous",
    href: "/services#agents",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Replace repetitive ops with intelligent pipelines that scale without headcount.",
    tag: "Efficiency",
    href: "/services#automation",
  },
  {
    icon: BrainCircuit,
    title: "AI Consulting",
    desc: "Strategy-first advisory. We map your highest-impact AI opportunities and build the roadmap.",
    tag: "Strategy",
    href: "/services#consulting",
  },
  {
    icon: GraduationCap,
    title: "Implementation Training",
    desc: "Hands-on upskilling so your team can maintain, extend, and own everything we build.",
    tag: "Education",
    href: "/services#training",
  },
]

const projects = [
  {
    title: "Autonomous Support Agent",
    client: "FinTech Startup",
    desc: "AI agent that resolves 78% of support tickets without human intervention.",
    tag: "AI Agent",
    color: "from-orange-950/60 to-zinc-900",
  },
  {
    title: "Document Intelligence Pipeline",
    client: "Legal Firm",
    desc: "Extracts, classifies, and routes legal documents with 99.2% accuracy.",
    tag: "Automation",
    color: "from-zinc-800/60 to-zinc-950",
  },
  {
    title: "Sales Outreach Orchestrator",
    client: "SaaS Company",
    desc: "Personalised multi-channel outreach system that 3× pipeline velocity.",
    tag: "AI + Workflow",
    color: "from-orange-950/40 to-zinc-900",
  },
]

const testimonials = [
  {
    quote:
      "Coderefer didn't just deliver a product — they changed how our entire operations team thinks about automation. ROI in under 60 days.",
    name: "Sarah Chen",
    role: "COO, NovaPay",
    initials: "SC",
  },
  {
    quote:
      "The AI agent they built handles our entire onboarding flow. Our team now focuses on strategy instead of chasing paperwork.",
    name: "Marcus Okafor",
    role: "Head of Product, BuildScale",
    initials: "MO",
  },
  {
    quote:
      "Best investment we made this year. The implementation training meant our team actually uses what was built.",
    name: "Priya Nair",
    role: "Founder, Solara Labs",
    initials: "PN",
  },
]

const posts = [
  {
    tag: "AI Strategy",
    title: "Why Most AI Projects Fail in the First 90 Days",
    excerpt:
      "The gap isn't technical — it's operational. Here's what separates successful AI implementations from expensive experiments.",
    date: "May 2025",
    read: "5 min",
  },
  {
    tag: "Agents",
    title: "Building Reliable AI Agents: Lessons from 30+ Deployments",
    excerpt:
      "Reliability patterns, failure modes, and the architecture choices that determine whether your agent thrives or hallucinates.",
    date: "Apr 2025",
    read: "8 min",
  },
  {
    tag: "Automation",
    title: "The Workflow Automation Stack We Use in 2025",
    excerpt:
      "After testing every major platform, here's the exact stack we recommend — and why the tools matter less than you think.",
    date: "Mar 2025",
    read: "6 min",
  },
]

const partners = [
  "OpenAI", "Anthropic", "LangChain", "n8n", "Make", "Zapier", "Pinecone", "Supabase",
  "OpenAI", "Anthropic", "LangChain", "n8n", "Make", "Zapier", "Pinecone", "Supabase",
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Full-screen video — anchored right so robot stays in same position as card was */}
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover hero-video"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay layers */}
        <div className="pointer-events-none absolute inset-0">
          {/* Desktop: black left, fully clear by 50% so robot face is uncovered */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, #09090b 0%, #09090b 28%, rgba(9,9,11,0.75) 38%, rgba(9,9,11,0.15) 48%, transparent 56%)",
            }}
          />

          {/* Mobile: flat dark wash */}
          <div className="absolute inset-0 md:hidden bg-zinc-950/70" />

          {/* Top vignette — navbar area */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950/80 to-transparent" />

          {/* Bottom fade — blends into partners strip */}
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-zinc-950 to-transparent" />

          {/* Grid texture on left */}
          <div className="absolute inset-0 bg-grid opacity-15" />

          {/* Watermark */}
          <div
            className="absolute bottom-0 left-4 text-[220px] font-black leading-none select-none"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "rgba(255,255,255,0.025)",
              letterSpacing: "-0.04em",
            }}
          >
            AI
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="animate-fade-up opacity-start mb-6 inline-flex items-center gap-2 rounded-full bg-orange-600/10 border border-orange-600/20 px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-medium text-orange-400 tracking-wide">
                  AI-Powered Agency
                </span>
              </div>

              <h1
                className="animate-fade-up delay-100 opacity-start mb-6 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-white"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Intelligence
                <br />
                Built for
                <br />
                <em className="not-italic text-gradient">Real Business.</em>
              </h1>

              <p className="animate-fade-up delay-200 opacity-start mb-8 text-zinc-400 text-lg leading-relaxed max-w-md">
                We build AI agents, automate complex workflows, and train your
                team to operate at a level competitors can&apos;t match.
              </p>

              <div className="animate-fade-up delay-300 opacity-start flex flex-wrap gap-3 mb-10">
                <Link href="/contact" className="btn-orange text-sm">
                  Start a Project
                  <ArrowUpRight size={15} />
                </Link>
                <Link href="/portfolio" className="btn-ghost text-sm">
                  See Our Work
                  <ChevronRight size={15} />
                </Link>
              </div>

              {/* Social proof */}
              <div className="animate-fade-up delay-400 opacity-start flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["SC", "MO", "PN", "RK"].map((initials, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-zinc-950 flex items-center justify-center text-[10px] font-semibold text-white"
                        style={{
                          background: `hsl(${20 + i * 15}, 70%, ${32 + i * 4}%)`,
                          zIndex: 4 - i,
                        }}
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="text-orange-500 fill-orange-500" />
                      ))}
                    </div>
                    <p className="text-[11px] text-zinc-500">50+ Happy Clients</p>
                  </div>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <p className="text-[12px] text-zinc-500">
                  Trusted across{" "}
                  <span className="text-zinc-300 font-medium">12 industries</span>
                </p>
              </div>
            </div>

            {/* Right col — transparent, video background shows robot here */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce z-10">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-orange-600/40" />
          <div className="w-1 h-1 rounded-full bg-orange-600/60" />
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="border-y border-white/[0.06] bg-[#080808] py-6 overflow-hidden">
        <div className="flex items-center gap-3 mb-3 px-8">
          <div className="w-1 h-1 rounded-full bg-orange-600" />
          <p className="text-xs text-orange-500 tracking-widest uppercase font-medium">
            Technologies &amp; Platforms We Work With
          </p>
        </div>
        <div className="flex overflow-hidden">
          {/* Two identical copies — seamless loop */}
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex items-center gap-12 animate-marquee shrink-0 pr-12">
              {partners.map((name, i) => (
                <span
                  key={i}
                  className="text-sm font-semibold text-zinc-600 hover:text-zinc-400 transition-colors duration-200 whitespace-nowrap cursor-default"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section-padding border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-[#0A0A0A] p-8 lg:p-10 group hover:bg-[#111] transition-colors duration-300 h-full">
                  <div
                    className="text-4xl lg:text-5xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-sm text-zinc-500">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <Reveal>
              <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-3">
                What We Build
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Four Services.
                <br />
                One Direction.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Every engagement starts with understanding your business, then
                building AI that actually fits — not AI that looks impressive in demos.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {services.map((svc, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link
                  href={svc.href}
                  className="group block glass-card rounded-2xl p-7 hover:bg-white/[0.04] hover:border-orange-600/20 transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-600/20 flex items-center justify-center group-hover:bg-orange-600/20 transition-colors duration-300">
                      <svc.icon size={22} className="text-orange-500" />
                    </div>
                    <span className="text-[11px] font-medium text-zinc-600 bg-white/[0.04] border border-white/[0.07] rounded-full px-3 py-1">
                      {svc.tag}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-200"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5">{svc.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Learn more <ArrowUpRight size={12} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section-padding border-y border-white/[0.06] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal direction="left">
              <div className="relative h-[400px] lg:h-[480px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/60 via-zinc-900 to-zinc-950" />
                <div className="absolute inset-0 bg-dot opacity-20" />
                <div className="absolute top-8 right-8 w-20 h-20 rounded-full border border-orange-600/25" />
                <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-orange-600/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <BrainCircuit size={64} className="text-orange-600/30" />
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs text-zinc-700 border border-zinc-800 rounded-lg px-3 py-2 text-center">
                    Team photo — editorial dark portrait
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-3">
                  Why Choose Us
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2
                  className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-5"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Meet The Minds
                  <br />
                  Behind The Work
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-zinc-400 leading-relaxed mb-6 max-w-md">
                  At Coderefer, we bring together engineers, strategists, and operators
                  to build AI that earns its keep. Not experiments — systems that run
                  your business better.
                </p>
              </Reveal>

              <div className="space-y-3 mb-8">
                {[
                  "Strategy before code — always",
                  "Built to be maintained by your team",
                  "Measurable ROI, not just demos",
                  "Ongoing support after launch",
                ].map((item, i) => (
                  <Reveal key={i} delay={240 + i * 60}>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                      <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                      {item}
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={480}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="glass-card rounded-xl px-5 py-4 text-center">
                    <div
                      className="text-2xl font-black text-orange-500 mb-0.5"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      400+
                    </div>
                    <div className="text-[11px] text-zinc-600">Automations Built</div>
                  </div>
                  <div className="glass-card rounded-xl px-5 py-4 text-center">
                    <div
                      className="text-2xl font-black text-white mb-0.5"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      230+
                    </div>
                    <div className="text-[11px] text-zinc-600">Projects Launched</div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={560}>
                <Link href="/about" className="btn-ghost text-sm">
                  About Coderefer <ArrowUpRight size={14} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <Reveal>
                <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-3">
                  Our Work
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2
                  className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Design With Purpose.
                  <br />
                  <span className="text-zinc-500">Build With Impact.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link href="/portfolio" className="btn-ghost text-sm shrink-0">
                All Projects <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className={`group relative rounded-2xl overflow-hidden glass-card hover:border-orange-600/25 transition-all duration-300 cursor-pointer h-[300px] bg-gradient-to-b ${p.color}`}
                >
                  <div className="absolute inset-0 bg-dot opacity-20" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[11px] font-medium text-orange-400 bg-orange-600/10 border border-orange-600/20 rounded-full px-3 py-1 mb-3">
                        {p.tag}
                      </span>
                      <p className="text-[11px] text-zinc-600 mb-2">{p.client}</p>
                      <h3
                        className="text-lg font-bold text-white leading-tight group-hover:text-orange-300 transition-colors duration-200"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="absolute top-5 right-5 w-7 h-7 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowUpRight size={13} className="text-orange-400" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding border-y border-white/[0.06] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal>
              <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-3">
                Client Voices
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-4xl font-black text-white tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Real Outcomes. Real Words.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="glass-card rounded-2xl p-7 h-full flex flex-col justify-between hover:border-orange-600/15 transition-all duration-300">
                  <div>
                    <div className="flex gap-0.5 mb-5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={13} className="text-orange-500 fill-orange-500" />
                      ))}
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.06]">
                    <div className="w-9 h-9 rounded-full bg-orange-600/20 border border-orange-600/20 flex items-center justify-center text-xs font-semibold text-orange-400">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-zinc-600">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <Reveal>
                <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-3">
                  Insights
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2
                  className="text-4xl font-black text-white tracking-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Think Before You Build.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link href="/blog" className="btn-ghost text-sm shrink-0">
                All Articles <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {posts.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link
                  href="/blog"
                  className="group block glass-card rounded-2xl p-6 hover:border-orange-600/20 hover:bg-white/[0.025] transition-all duration-300 cursor-pointer h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-medium text-orange-400 bg-orange-600/10 border border-orange-600/20 rounded-full px-3 py-1">
                      {p.tag}
                    </span>
                    <span className="text-[11px] text-zinc-600">
                      {p.date} · {p.read}
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold text-white leading-snug mb-3 group-hover:text-orange-300 transition-colors duration-200 flex-1"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{p.excerpt}</p>
                  <div className="flex items-center gap-1 text-xs text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-auto">
                    Read article <ArrowUpRight size={11} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-950/60 via-zinc-900 to-zinc-950 border border-orange-600/20 px-8 py-16 sm:px-12 sm:py-20 text-center">
              <div
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(234,88,12,0.25) 0%, transparent 65%)",
                }}
              />
              <div className="absolute inset-0 bg-dot opacity-20" />
              <div className="relative z-10">
                <p className="text-xs text-orange-400 font-semibold uppercase tracking-widest mb-4">
                  Let&apos;s Build
                </p>
                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Ready to Build
                  <br />
                  <em className="not-italic text-gradient">With AI?</em>
                </h2>
                <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                  Book a free discovery call. No pitch decks. Just an honest
                  conversation about what AI can do for your business.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link href="/contact" className="btn-orange">
                    Book a Discovery Call
                    <ArrowUpRight size={16} />
                  </Link>
                  <Link href="/services" className="btn-ghost">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
