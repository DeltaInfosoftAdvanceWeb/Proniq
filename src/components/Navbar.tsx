"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/* ---------- NAV LINKS ---------- */
const links = [
  { href: "/", label: "Home" },
  { href: "/industries", label: "Industries", dropdown: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/* ✅ EXPLICIT INDUSTRY SLUGS (NO AUTO-GENERATION) */
const industries = [
  { title: "Manufacturing", slug: "manufacturing" },
  { title: "Interior Architecture", slug: "interior-architechture" },
  { title: "Infrastructure", slug: "infrastructure" },
  { title: "Construction", slug: "construction" },
  { title: "Engineering", slug: "engineering" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);

  /* ---------- SCROLL EFFECT ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-full transition-all duration-300
        ${scrolled
            ? "bg-white/80 backdrop-blur-xl border border-slate-200 shadow-md py-3 px-6"
            : "bg-transparent py-4 px-6"
          }`}
      >
        <div className="flex items-center justify-between">

          {/* ---------- LOGO ---------- */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/proniq.png" alt="PRONIQ" className="w-9 h-8" />
            <span className="text-lg font-bold text-slate-900">PRONIQ</span>
          </Link>

          {/* ---------- DESKTOP NAV ---------- */}
          <nav className="hidden md:flex items-center gap-1 relative">
            {links.map((l) => {
              const active = pathname === l.href;

              if (l.dropdown) {
                return (
                  <div
                    key={l.href}
                    className="relative"
                    onMouseEnter={() => setShowIndustries(true)}
                    onMouseLeave={() => setShowIndustries(false)}
                  >
                    <button
                      className={`px-4 py-2 text-sm font-medium rounded-full transition
                      ${active || showIndustries
                          ? "bg-slate-100 text-slate-900"
                          : "text-slate-700 hover:bg-slate-100"
                        }`}
                    >
                      Industries
                    </button>

                    {/* ---------- DROPDOWN ---------- */}
                    {showIndustries && (
                      <>
                        {/* Hover bridge */}
                        <div className="absolute top-full left-0 w-full h-4" />

                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] rounded-2xl bg-white border border-slate-200 shadow-xl">
                          <div className="grid grid-cols-2">

                            {/* LEFT LIST */}
                            <div className="py-3">
                              {industries.map((item) => {
                                const href = `/industries/${item.slug}`;
                                const isActive = pathname === href;

                                return (
                                  <Link
                                    key={item.slug}
                                    href={href}
                                    onClick={() => setShowIndustries(false)}
                                    className={`block px-6 py-3 text-sm transition
                                    ${isActive
                                        ? "bg-blue-50 text-blue-600 font-semibold"
                                        : "text-slate-700 hover:bg-slate-100"
                                      }`}
                                  >
                                    {item.title}
                                  </Link>
                                );
                              })}
                            </div>

                            {/* RIGHT INFO */}
                            <div className="border-l border-slate-200 bg-slate-50 p-6">
                              <p className="text-xs uppercase tracking-wide text-slate-400">
                                Industries
                              </p>
                              <h4 className="mt-1 text-lg font-semibold text-slate-900">
                                Built for real-world operations
                              </h4>
                              <p className="mt-2 text-sm text-slate-600">
                                ERP workflows designed to match how each
                                industry actually works.
                              </p>

                              <Link
                                href="/industries"
                                onClick={() => setShowIndustries(false)}
                                className="inline-block mt-4 text-sm font-semibold text-blue-600"
                              >
                                View all industries →
                              </Link>
                            </div>

                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition
                  ${active
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-700 hover:bg-slate-100"
                    }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* ---------- CTA ---------- */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition"
            >
              Get Started
            </Link>
          </div>

          {/* ---------- MOBILE TOGGLE ---------- */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-slate-100 relative z-50"
            onClick={() => setOpen(!open)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 bg-slate-900 transition ${open && "rotate-45 translate-y-2"
                  }`}
              />
              <span
                className={`h-0.5 bg-slate-900 transition ${open && "opacity-0"
                  }`}
              />
              <span
                className={`h-0.5 bg-slate-900 transition ${open && "-rotate-45 -translate-y-2.5"
                  }`}
              />
            </div>
          </button>

          {/* ---------- MOBILE MENU OVERLAY ---------- */}
          {open && (
            <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col pt-24 px-6 animate-in slide-in-from-top-10 duration-200">
              <nav className="flex flex-col gap-4">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`text-2xl font-bold ${pathname === l.href ? "text-primary" : "text-slate-900"
                      }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="h-px bg-slate-100 my-2" />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Industries
                </p>
                {industries.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/industries/${item.slug}`}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-slate-600 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="h-px bg-slate-100 my-4" />
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full py-4 bg-primary text-white text-center rounded-xl font-bold text-lg shadow-lg shadow-primary/20"
                >
                  Get Started
                </Link>
              </nav>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
