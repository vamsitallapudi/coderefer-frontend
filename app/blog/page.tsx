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

const posts = [
  {
    tag: "AI Strategy",
    title: "Why Most AI Projects Fail in the First 90 Days",
    excerpt: "The gap isn't technical — it's operational. Here's what separates successful AI implementations from expensive experiments.",
    date: "May 28, 2025",
    read: "5 min read",
    featured: true,
  },
  {
    tag: "Agents",
    title: "Building Reliable AI Agents: Lessons from 30+ Deployments",
    excerpt: "Reliability patterns, failure modes, and the architecture choices that determine whether your agent thrives or hallucinates.",
    date: "Apr 15, 2025",
    read: "8 min read",
  },
  {
    tag: "Automation",
    title: "The Workflow Automation Stack We Use in 2025",
    excerpt: "After testing every major platform, here's the exact stack we recommend — and why the tools matter less than you think.",
    date: "Mar 22, 2025",
    read: "6 min read",
  },
  {
    tag: "Training",
    title: "How to Actually Get Your Team to Use AI Tools",
    excerpt: "Adoption is the hardest part of any AI rollout. Here's the training framework we use with every client.",
    date: "Mar 5, 2025",
    read: "7 min read",
  },
  {
    tag: "AI Strategy",
    title: "The ROI Framework We Use to Evaluate Every AI Project",
    excerpt: "Not every AI idea is worth building. Here's the exact scoring model we use to decide what to prioritise.",
    date: "Feb 18, 2025",
    read: "5 min read",
  },
  {
    tag: "Agents",
    title: "Multi-Agent Systems: When One AI Isn't Enough",
    excerpt: "Some problems require a team of AI agents working together. Here's when to use them and how to design them.",
    date: "Jan 30, 2025",
    read: "10 min read",
  },
]

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
      {/* Header */}
      <section id="hero" className="relative pt-40 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/3 w-[500px] h-[300px] rounded-full animate-glow"
            style={{ background: "radial-gradient(ellipse at center, rgba(234,88,12,0.14) 0%, transparent 65%)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <Reveal>
            <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-4">Insights</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}>
              Think Before<br />
              <span className="text-gradient">You Build.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Practical writing on AI strategy, agent design, workflow automation, and how to get real business value from all of it.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="posts" className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <Reveal>
            <div className="glass-card rounded-3xl overflow-hidden hover:border-orange-600/25 transition-all duration-300 cursor-pointer mb-6 group">
              <div className="grid lg:grid-cols-2">
                <div className="h-56 lg:h-auto bg-gradient-to-br from-orange-950/60 via-zinc-900 to-zinc-950 relative">
                  <div className="absolute inset-0 bg-dot opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[11px] text-zinc-700 border border-zinc-800 rounded px-2 py-1">Featured image placeholder</span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-medium text-orange-400 bg-orange-600/10 border border-orange-600/20 rounded-full px-3 py-1">
                      {featured.tag}
                    </span>
                    <span className="text-[11px] text-zinc-600 font-medium bg-orange-600/10 border border-orange-600/20 rounded-full px-3 py-1">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4 group-hover:text-orange-300 transition-colors"
                    style={{ fontFamily: "var(--font-outfit)" }}>
                    {featured.title}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-600">{featured.date} · {featured.read}</span>
                    <div className="flex items-center gap-1 text-xs text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Read article <ArrowUpRight size={11} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group block glass-card rounded-2xl p-6 hover:border-orange-600/20 hover:bg-white/[0.025] transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-medium text-orange-400 bg-orange-600/10 border border-orange-600/20 rounded-full px-3 py-1">
                      {p.tag}
                    </span>
                    <span className="text-[11px] text-zinc-600">{p.read}</span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug mb-3 group-hover:text-orange-300 transition-colors duration-200 flex-1"
                    style={{ fontFamily: "var(--font-outfit)" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{p.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                    <span className="text-[11px] text-zinc-700">{p.date}</span>
                    <div className="flex items-center gap-1 text-xs text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Read <ArrowUpRight size={11} />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="section-padding border-t border-white/[0.06] bg-[#080808]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl font-black text-white mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
              Get the Good Stuff Early
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-zinc-400 mb-8">New articles on AI strategy and automation — no fluff, no filler.</p>
          </Reveal>
          <Reveal delay={160}>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-white/[0.04] border border-white/[0.1] rounded-full px-5 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-orange-600/50 focus:ring-1 focus:ring-orange-600/30 transition-all duration-200"
              />
              <button type="submit" className="btn-orange text-sm whitespace-nowrap">
                Subscribe <ArrowUpRight size={14} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
