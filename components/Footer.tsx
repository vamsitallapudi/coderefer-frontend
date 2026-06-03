import Link from "next/link"
import { ArrowUpRight, X, Globe, ExternalLink } from "lucide-react"

const links = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services#agents", label: "AI Agents" },
    { href: "/services#automation", label: "Workflow Automation" },
    { href: "/services#consulting", label: "AI Consulting" },
    { href: "/services#training", label: "Implementation Training" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

const socials = [
  { href: "https://twitter.com", label: "X / Twitter", icon: X },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Globe },
  { href: "https://github.com", label: "GitHub", icon: ExternalLink },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group w-fit mb-5">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                <span
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  CR
                </span>
              </div>
              <span
                className="font-semibold text-white text-[17px] tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Coderefer
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-6">
              We build AI agents, workflow automations, and intelligent systems
              for businesses ready to lead — not follow.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/[0.09] hover:border-white/[0.12] transition-all duration-200 cursor-pointer"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Coderefer. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-orange-500 transition-colors duration-200 cursor-pointer group"
          >
            Ready to build with AI?
            <ArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
