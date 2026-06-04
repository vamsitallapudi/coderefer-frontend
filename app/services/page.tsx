"use client"

import Link from "next/link"
import { ArrowUpRight, Bot, Workflow, BrainCircuit, GraduationCap, CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/useInView"

function Reveal({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" }) {
  const { ref, inView } = useInView()
  const cls = {
    up: inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
    left: inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
    right: inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
  }[direction]
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${cls}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const services = [
  {
    id: "agents",
    icon: Bot,
    title: "AI Agents",
    tagline: "Autonomous AI that acts on your behalf",
    desc: "We design and deploy custom AI agents that handle complex, multi-step tasks — from customer support and lead qualification to research and internal operations. Agents that understand context, use tools, and escalate intelligently.",
    features: ["Custom agent design & architecture", "Tool integration (APIs, databases, email)", "Human-in-the-loop escalation", "Monitoring & reliability engineering", "Multi-agent orchestration"],
    outcomes: ["78% avg. ticket deflection rate", "24/7 operation without staff cost", "Handles edge cases your team hates"],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Workflow Automation",
    tagline: "Turn manual processes into intelligent pipelines",
    desc: "We map, redesign, and automate your most critical workflows — connecting your tools, eliminating manual steps, and building in AI decision points that improve over time.",
    features: ["Process audit & opportunity mapping", "n8n, Make, Zapier orchestration", "AI decision nodes & routing", "Error handling & alerting", "Reporting dashboards"],
    outcomes: ["Avg. 12hrs/week saved per team", "Fewer handoff errors", "Scales without hiring"],
  },
  {
    id: "consulting",
    icon: BrainCircuit,
    title: "AI Consulting",
    tagline: "Strategy before code. Every time.",
    desc: "Before we build anything, we understand your business. Our consulting engagements produce a clear AI roadmap — prioritised by ROI, feasibility, and your team's capacity to adopt it.",
    features: ["AI readiness assessment", "Opportunity prioritisation workshop", "Build vs. buy analysis", "Vendor selection guidance", "Change management planning"],
    outcomes: ["Clear 90-day action plan", "Avoid expensive wrong turns", "Stakeholder buy-in strategy"],
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Implementation Training",
    tagline: "Your team owns what we build",
    desc: "Technology that only we understand is a liability. Our training programmes teach your team to maintain, extend, and troubleshoot the systems we deliver — turning AI from a black box into a core competency.",
    features: ["Role-specific training tracks", "Hands-on workshops with real systems", "Written runbooks & documentation", "Recorded sessions for new hires", "30-day post-training support"],
    outcomes: ["Team self-sufficient in 4 weeks", "Reduced dependency on external vendors", "Faster iteration cycles"],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section id="hero" className="relative pt-40 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full animate-glow"
            style={{ background: "radial-gradient(ellipse at center, rgba(234,88,12,0.18) 0%, transparent 65%)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal>
            <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-4">Services</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}>
              What We Build<br />
              <span className="text-gradient">& How We Do It</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Four service lines. One philosophy: understand your business first, build second, and make sure
              your team can own it long-term.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link href="/contact" className="btn-orange">
              Book a Discovery Call <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Service sections */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`section-padding border-t border-white/[0.06] ${i % 2 === 1 ? "bg-[#080808]" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Info */}
              <div>
                <Reveal>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-600/20 flex items-center justify-center">
                      <svc.icon size={24} className="text-orange-500" />
                    </div>
                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">0{i + 1}</span>
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2"
                    style={{ fontFamily: "var(--font-outfit)" }}>
                    {svc.title}
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="text-orange-400 text-sm font-medium mb-5">{svc.tagline}</p>
                </Reveal>
                <Reveal delay={160}>
                  <p className="text-zinc-400 leading-relaxed mb-8">{svc.desc}</p>
                </Reveal>
                <Reveal delay={240}>
                  <Link href="/contact" className="btn-orange text-sm">
                    Start with {svc.title} <ArrowUpRight size={14} />
                  </Link>
                </Reveal>
              </div>

              {/* Features + outcomes */}
              <div className="space-y-4">
                <Reveal delay={80}>
                  <div className="glass-card rounded-2xl p-6">
                    <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-4">What&apos;s Included</p>
                    <ul className="space-y-2.5">
                      {svc.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                          <CheckCircle2 size={14} className="text-orange-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={160}>
                  <div className="orange-card rounded-2xl p-6">
                    <p className="text-xs text-orange-600 uppercase tracking-widest font-semibold mb-4">Typical Outcomes</p>
                    <ul className="space-y-2.5">
                      {svc.outcomes.map((o, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-orange-200">
                          <span className="w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section id="cta" className="section-padding border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5"
              style={{ fontFamily: "var(--font-outfit)" }}>
              Not Sure Where to Start?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-zinc-400 text-lg mb-8">
              Book a free 30-minute call. We&apos;ll tell you honestly where AI will help your business — and where it won&apos;t.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Link href="/contact" className="btn-orange">
              Book a Free Call <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
