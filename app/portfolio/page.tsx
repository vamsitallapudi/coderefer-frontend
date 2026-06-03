"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useInView } from "@/hooks/useInView"

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const projects = [
  {
    title: "Autonomous Support Agent",
    client: "FinTech Startup",
    category: "AI Agent",
    desc: "End-to-end AI support agent that handles inbound queries, escalates edge cases, and logs structured tickets — resolving 78% without human touch.",
    metrics: ["78% ticket deflection", "↓ 62% avg. response time", "↑ 34 NPS points"],
    color: "from-orange-950/60 to-zinc-900",
  },
  {
    title: "Document Intelligence Pipeline",
    client: "Legal Services Firm",
    category: "Automation",
    desc: "Extracts key clauses, classifies document types, and routes to appropriate case handlers. Processes 500+ docs per hour with 99.2% accuracy.",
    metrics: ["99.2% classification accuracy", "500 docs/hr throughput", "↓ 8hrs/day manual review"],
    color: "from-zinc-800/60 to-zinc-950",
  },
  {
    title: "Sales Outreach Orchestrator",
    client: "B2B SaaS Company",
    category: "AI + Workflow",
    desc: "Multi-channel outreach system that personalises messages, times sends based on engagement data, and routes warm leads to AEs in real time.",
    metrics: ["3× pipeline velocity", "↑ 41% open rates", "↓ 5hrs/week per SDR"],
    color: "from-orange-950/40 to-zinc-900",
  },
  {
    title: "Inventory Demand Forecaster",
    client: "E-commerce Brand",
    category: "AI Model",
    desc: "Predicts SKU-level demand 30 days out, integrating seasonality, promotions, and supplier lead times to optimise reorder cycles.",
    metrics: ["↓ 23% stockouts", "↓ 18% overstock cost", "Forecast accuracy 91%"],
    color: "from-zinc-900 to-zinc-950",
  },
  {
    title: "HR Onboarding Automation",
    client: "Series B Startup",
    category: "Automation",
    desc: "Fully automated onboarding pipeline — from offer letter to day-60 checklist — with personalised Slack nudges and manager briefing summaries.",
    metrics: ["↓ 90% HR admin time", "Consistent 5★ new hire experience", "Zero missed steps"],
    color: "from-orange-900/30 to-zinc-950",
  },
  {
    title: "AI Knowledge Base Agent",
    client: "Professional Services",
    category: "AI Agent",
    desc: "Internal agent trained on company documentation, past proposals, and case notes — surfaces relevant context to consultants in seconds.",
    metrics: ["↓ 3.5hrs/consultant/week", "Proposal quality scores +28%", "Onboards new hires 2× faster"],
    color: "from-zinc-800/40 to-zinc-950",
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full animate-glow"
            style={{ background: "radial-gradient(ellipse at center, rgba(234,88,12,0.16) 0%, transparent 65%)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <Reveal>
            <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-4">Our Work</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}>
              Real Projects.<br />
              <span className="text-gradient">Real Results.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every project here solved a real business problem. Here&apos;s what we built and what it delivered.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={`group relative rounded-2xl overflow-hidden glass-card hover:border-orange-600/25 transition-all duration-300 cursor-pointer h-[380px] bg-gradient-to-b ${p.color}`}>
                  <div className="absolute inset-0 bg-dot opacity-20" />
                  <div className="absolute inset-0 p-6 flex flex-col">
                    <div className="mb-auto">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-medium text-orange-400 bg-orange-600/10 border border-orange-600/20 rounded-full px-3 py-1">
                          {p.category}
                        </span>
                        <span className="text-[11px] text-zinc-700">{p.client}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-tight mb-3 group-hover:text-orange-300 transition-colors duration-200"
                        style={{ fontFamily: "var(--font-outfit)" }}>
                        {p.title}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-1.5">
                      {p.metrics.map((m, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-orange-300">
                          <div className="w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                          {m}
                        </div>
                      ))}
                    </div>
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

      {/* CTA */}
      <section className="section-padding border-t border-white/[0.06] bg-[#080808]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Want Results Like These?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-zinc-400 mb-8 text-lg">Let&apos;s talk about your specific challenge and map out what&apos;s possible.</p>
          </Reveal>
          <Reveal delay={160}>
            <Link href="/contact" className="btn-orange">Start a Project <ArrowUpRight size={15} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
