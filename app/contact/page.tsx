"use client"

import { useState } from "react"
import { ArrowUpRight, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react"
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Failed to send")
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or email us directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Header */}
      <section id="hero" className="relative pt-40 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full animate-glow"
            style={{ background: "radial-gradient(ellipse at center, rgba(234,88,12,0.15) 0%, transparent 65%)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <Reveal>
            <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-4">Get In Touch</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}>
              Let&apos;s Build<br />
              <span className="text-gradient">Something Real.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Tell us what you&apos;re working on. We&apos;ll respond within one business day with honest thoughts on whether we can help.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="contact-form" className="section-padding pt-0 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form — takes 3 cols */}
            <div className="lg:col-span-3">
              <Reveal>
                {submitted ? (
                  <div className="glass-card rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center min-h-[500px]">
                    <div className="w-16 h-16 rounded-full bg-orange-600/15 border border-orange-600/25 flex items-center justify-center mb-5">
                      <CheckCircle2 size={32} className="text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                      Message Received
                    </h3>
                    <p className="text-zinc-400 max-w-sm">
                      We&apos;ll review your message and get back to you within 1-2 business days. Please check your inbox.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-zinc-500 mb-1.5" htmlFor="name">Name *</label>
                        <input
                          id="name" type="text" required placeholder="Your name"
                          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none focus:border-orange-600/50 focus:bg-white/[0.06] transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-500 mb-1.5" htmlFor="email">Email *</label>
                        <input
                          id="email" type="email" required placeholder="you@company.com"
                          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none focus:border-orange-600/50 focus:bg-white/[0.06] transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-500 mb-1.5" htmlFor="company">Company</label>
                      <input
                        id="company" type="text" placeholder="Company name (optional)"
                        value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none focus:border-orange-600/50 focus:bg-white/[0.06] transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-500 mb-1.5" htmlFor="service">Service You&apos;re Interested In</label>
                      <select
                        id="service"
                        value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-orange-600/50 focus:bg-white/[0.06] transition-all duration-200 cursor-pointer"
                      >
                        <option value="" className="bg-zinc-900">Select a service</option>
                        <option value="agents" className="bg-zinc-900">AI Agents</option>
                        <option value="automation" className="bg-zinc-900">Workflow Automation</option>
                        <option value="consulting" className="bg-zinc-900">AI Consulting</option>
                        <option value="training" className="bg-zinc-900">Implementation Training</option>
                        <option value="other" className="bg-zinc-900">Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-500 mb-1.5" htmlFor="message">Tell Us About Your Challenge *</label>
                      <textarea
                        id="message" required rows={5}
                        placeholder="What problem are you trying to solve? The more context, the better."
                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none focus:border-orange-600/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-400 text-center">{error}</p>
                    )}
                    <button type="submit" disabled={loading} className="btn-orange w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                      {loading ? "Sending…" : (<>Send Message <ArrowUpRight size={15} /></>)}
                    </button>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 space-y-4">
              <Reveal delay={80} direction="right">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-base font-bold text-white mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                    What Happens Next
                  </h3>
                  <div className="space-y-4">
                    {[
                      { step: "01", text: "We review your message within 1-2 business days" },
                      { step: "02", text: "30-min discovery call to understand your challenge" },
                      { step: "03", text: "We send a clear proposal — scope, timeline, cost" },
                      { step: "04", text: "Kickoff when you're ready" },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-3">
                        <span className="text-xs font-bold text-orange-500 shrink-0 mt-0.5">{s.step}</span>
                        <p className="text-sm text-zinc-400 leading-relaxed">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160} direction="right">
                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-outfit)" }}>Contact Details</h3>
                  {[
                    { icon: Mail, label: "Email", value: "support@outstretch.ai" },
                    { icon: MapPin, label: "Based in", value: "India · Works globally" },
                    { icon: Clock, label: "Response time", value: "Within 1-2 Business Days" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-600/10 border border-orange-600/20 flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-orange-500" />
                      </div>
                      <div>
                        <p className="text-[11px] text-zinc-600">{label}</p>
                        <p className="text-sm text-zinc-300">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={240} direction="right">
                <div className="orange-card rounded-2xl p-6">
                  <p className="text-sm font-semibold text-orange-300 mb-2">Free Discovery Call</p>
                  <p className="text-sm text-orange-200/70 leading-relaxed">
                    Not ready to commit? Book a free 30-min call. No pitch, no pressure — just an honest conversation about what&apos;s possible.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
