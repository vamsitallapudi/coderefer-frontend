"use client"

import Link from "next/link"
import { ArrowUpRight, Target, Users, Lightbulb, Shield } from "lucide-react"
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

const values = [
  { icon: Target, title: "Results Over Demos", desc: "We measure success in business outcomes — time saved, revenue grown, costs cut — not in impressive technical showcases." },
  { icon: Users, title: "Team Empowerment", desc: "Every system we build comes with training. We want your team self-sufficient, not dependent on us forever." },
  { icon: Lightbulb, title: "Strategy First", desc: "We won't write a line of code until we understand your business, your constraints, and your goals." },
  { icon: Shield, title: "Honest Counsel", desc: "If AI isn't the right answer for your problem, we'll tell you. We'd rather be trusted than hired." },
]

const team = [
  { name: "Vamsi Tallapudi", role: "Founder & AI Architect", initials: "VT", bio: "10+ years in software engineering. Built AI systems for startups and Fortune 500 teams." },
  { name: "Alex Rivera", role: "Automation Engineer", initials: "AR", bio: "Specialist in n8n, Make, and custom API integrations. 200+ workflows shipped." },
  { name: "Priya Nair", role: "AI Strategy Lead", initials: "PN", bio: "Former management consultant turned AI strategist. Bridges business logic and machine intelligence." },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full animate-glow"
            style={{ background: "radial-gradient(ellipse at center, rgba(234,88,12,0.15) 0%, transparent 65%)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-4">About Coderefer</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6"
                  style={{ fontFamily: "var(--font-outfit)" }}>
                  The Minds<br />
                  <span className="text-gradient">Behind The Work</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  Coderefer is an AI agency built by engineers and operators who&apos;ve been burned by
                  overhyped implementations. We build things that actually work — and make sure your team
                  can run them without us.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <Link href="/contact" className="btn-orange text-sm">
                  Work With Us <ArrowUpRight size={14} />
                </Link>
              </Reveal>
            </div>

            {/* Right visual */}
            <Reveal direction="right">
              <div className="relative h-[400px] rounded-3xl overflow-hidden glass-card">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-950/50 via-zinc-900 to-zinc-950" />
                <div className="absolute inset-0 bg-dot opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-black text-orange-600/20 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>CR</div>
                    <p className="text-xs text-zinc-700 border border-zinc-800 rounded-lg px-3 py-2">Team photo placeholder</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/[0.06] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
            {[
              { v: "2021", l: "Founded" },
              { v: "50+", l: "Projects Shipped" },
              { v: "12", l: "Industries" },
              { v: "98%", l: "Satisfaction Rate" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-[#080808] p-8 lg:p-12 group hover:bg-[#0e0e0e] transition-colors duration-300 h-full">
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors"
                    style={{ fontFamily: "var(--font-outfit)" }}>{s.v}</div>
                  <div className="text-sm text-zinc-600">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <Reveal>
              <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-3">What We Stand For</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}>
                Our Values
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="glass-card rounded-2xl p-7 hover:border-orange-600/20 hover:bg-white/[0.02] transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-orange-600/10 border border-orange-600/20 flex items-center justify-center mb-4">
                    <v.icon size={20} className="text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-outfit)" }}>{v.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding border-t border-white/[0.06] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <Reveal>
              <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-3">The People</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}>
                Who You&apos;re Working With
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {team.map((member, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="glass-card rounded-2xl p-7 hover:border-orange-600/15 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-orange-600/15 border border-orange-600/20 flex items-center justify-center text-lg font-bold text-orange-400 mb-5"
                    style={{ fontFamily: "var(--font-outfit)" }}>
                    {member.initials}
                  </div>
                  <h3 className="text-base font-bold text-white mb-0.5" style={{ fontFamily: "var(--font-outfit)" }}>{member.name}</h3>
                  <p className="text-xs text-orange-400 mb-3">{member.role}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Ready to Work Together?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-zinc-400 mb-8">Let&apos;s find out if we&apos;re a good fit — no pressure, no pitch deck.</p>
          </Reveal>
          <Reveal delay={160}>
            <Link href="/contact" className="btn-orange">Book a Call <ArrowUpRight size={15} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
