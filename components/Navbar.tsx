"use client"

import { useState, useEffect, useLayoutEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Set initial state before paint — prevents flash on mount/refresh
  useLayoutEffect(() => {
    setScrolled(window.scrollY > 24)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/[0.07] shadow-2xl shadow-black/40"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-200 glow-orange">
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

          {/* Desktop nav — pill */}
          <nav className="hidden md:flex items-center gap-0.5 bg-white/[0.04] border border-white/[0.06] rounded-full px-2 py-1.5">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm rounded-full cursor-pointer ${
                    active
                      ? "bg-white/[0.1] text-white font-medium"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors duration-200"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="btn-orange text-sm flex items-center gap-1.5"
            >
              Book a Call
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/[0.06]"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 mt-2" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/[0.07] p-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 text-sm rounded-xl cursor-pointer ${
                      active
                        ? "bg-white/[0.08] text-white font-medium"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors duration-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-2 border-t border-white/[0.07] mt-1">
                <Link
                  href="/contact"
                  className="btn-orange text-sm w-full justify-center"
                >
                  Book a Call
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
