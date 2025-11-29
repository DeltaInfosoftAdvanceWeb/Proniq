"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/industries", label: "Industries", dropdown: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const industries = [
  "Manufacturing",
  "Interior Architecture",
  "Infrastructure",
  "Construction",
  "Engineering",
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);

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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="./proniq.png" alt="PRONIQ" className="w-9 h-8" />
            <span className="text-lg font-bold text-slate-900">PRONIQ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 relative">
            {links.map((l) => {
              const active = pathname === l.href;

              if (l.dropdown) {
                return (
                  /* ✅ SINGLE HOVER WRAPPER (IMPORTANT) */
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

                    {/* ========= DROPDOWN PANEL ========= */}
                    {showIndustries && (
                      <>
                        {/* Hover Bridge (prevents flicker) */}
                        <div className="absolute top-full left-0 w-full h-4" />

                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] rounded-2xl bg-white border border-slate-200 shadow-xl">
                          <div className="grid grid-cols-2">
                            {/* Left list */}
                            <div className="py-3">
                              {industries.map((title) => {
                                const slug =
                                  "/industries/" +
                                  title.toLowerCase().replace(/\s+/g, "-");
                                const isActive = pathname === slug;

                                return (
                                  <Link
                                    key={title}
                                    href={slug}
                                    className={`block px-6 py-3 text-sm transition
                                      ${isActive
                                        ? "bg-primary/10 text-primary font-semibold"
                                        : "text-slate-700 hover:bg-slate-100"
                                      }`}
                                  >
                                    {title}
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Right info panel */}
                            <div className="border-l border-slate-200 bg-slate-50 p-6">
                              <p className="text-xs uppercase tracking-wide text-slate-400">
                                Industries
                              </p>
                              <h4 className="mt-1 text-lg font-semibold text-slate-900">
                                Built for real-world operations
                              </h4>
                              <p className="mt-2 text-sm text-slate-600">
                                Each industry comes with tailored workflows,
                                planning, execution tracking, and reporting.
                              </p>

                              <Link
                                href="/industries"
                                className="inline-block mt-4 text-sm font-semibold text-primary"
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

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle (unchanged) */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-slate-100"
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
        </div>
      </div>
    </header>
  );
}
