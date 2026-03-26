"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronRight, LayoutGrid, Info, PhoneCall, Home, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- NAV LINKS ---------- */
const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/solutions", label: "Solutions", dropdown: true, dropdownType: "solutions", icon: Zap },
  { href: "/industries", label: "Industries", dropdown: true, dropdownType: "industries", icon: LayoutGrid },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: PhoneCall },
];

/* ✅ SOLUTIONS */
const solutions = [
  { title: "Workflow-Driven ERP", slug: "workflow-driven-erp", description: "Seamless project execution from tender to billing" },
  { title: "Construction ERP", slug: "construction-erp", description: "Purpose-built for contractors and builders" },
  { title: "Daily Progress Reporting", slug: "daily-progress-reporting", description: "Real-time site progress tracking" },
  { title: "RA Billing Software", slug: "ra-billing-software", description: "Automate running account billing" },
  { title: "Tender & BOQ Management", slug: "tender-boq-management", description: "From estimation to execution" },
];

/* ✅ EXPLICIT INDUSTRY SLUGS (NO AUTO-GENERATION) */
const industries = [
  { title: "Manufacturing", slug: "manufacturing" },
  { title: "Interior Architecture", slug: "interior-architecture" },
  { title: "Infrastructure", slug: "infrastructure" },
  { title: "Construction", slug: "construction" },
  { title: "Engineering", slug: "engineering" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const solutionsTimeout = useRef<NodeJS.Timeout | null>(null);

  // Check if we are on a page with a dark hero section (industry subpages)
  const isDarkHeroPage = pathname.startsWith("/industries/") && pathname !== "/industries";
  // Determine if we should use white text
  const useWhiteText = isDarkHeroPage && !scrolled && !open;

  const handleMouseEnter = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setShowIndustries(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setShowIndustries(false);
    }, 300);
  };

  const handleIndustriesClick = () => {
    // Toggle for touch devices
    setShowIndustries(!showIndustries);
    // Clear any pending timeout
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
  };

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeout.current) {
      clearTimeout(solutionsTimeout.current);
      solutionsTimeout.current = null;
    }
    setShowSolutions(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeout.current = setTimeout(() => {
      setShowSolutions(false);
    }, 300);
  };

  const handleSolutionsClick = () => {
    // Toggle for touch devices
    setShowSolutions(!showSolutions);
    // Clear any pending timeout
    if (solutionsTimeout.current) {
      clearTimeout(solutionsTimeout.current);
      solutionsTimeout.current = null;
    }
  };

  /* ---------- SCROLL EFFECT ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- BODY LOCK ---------- */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      {/* ---------- MOBILE MENU OVERLAY ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[120] bg-white/95 backdrop-blur-2xl flex flex-col pt-24 px-6"
            onClick={(e) => {
              // Close menu only if clicking directly on the overlay background
              if (e.target === e.currentTarget) {
                setOpen(false);
              }
            }}
          >
            <nav className="flex flex-col gap-2 overflow-y-auto pb-10 h-full no-scrollbar" onClick={(e) => e.stopPropagation()}>
              {links.filter(l => !l.dropdown).map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 p-4 rounded-2xl text-xl font-bold transition-all ${pathname === l.href
                      ? "bg-primary/5 text-primary"
                      : "text-slate-900 hover:bg-slate-50"
                      }`}
                  >
                    <l.icon className="w-5 h-5 opacity-70" />
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 mb-2"
              >
                <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Solutions
                </p>
                <div className="grid grid-cols-1 gap-1">
                  {solutions.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-xl text-lg font-medium transition-all ${pathname === `/${item.slug}`
                        ? "text-primary bg-primary/5"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 mb-2"
              >
                <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Industries
                </p>
                <div className="grid grid-cols-1 gap-1">
                  {industries.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/industries/${item.slug}`}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-xl text-lg font-medium transition-all ${pathname === `/industries/${item.slug}`
                        ? "text-primary bg-primary/5"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    href="/industries"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl text-lg font-bold text-primary flex items-center justify-between"
                  >
                    All Industries <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              <div className="h-px bg-slate-100 my-4 shrink-0" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full py-4 bg-primary text-white text-center rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <PhoneCall className="w-5 h-5" />
                  Get Started
                </Link>
              </motion.div>

              <div className="mt-10 text-center pb-8">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.2em]">Digitizing Operations since 2018</p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={`fixed top-0 inset-x-0 px-2 md:px-4 pt-4 pointer-events-none ${open ? 'z-[125]' : 'z-[110]'}`}>
        <div
          className={`mx-auto max-w-6xl rounded-full transition-all duration-300 pointer-events-auto relative
          ${scrolled || open
              ? "bg-white/95 backdrop-blur-xl border border-slate-200 shadow-lg py-3 px-4 md:px-6"
              : "bg-transparent py-4 px-4 md:px-6"
            }`}
        >
          <div className="flex items-center justify-between">
            {/* ---------- LOGO ---------- */}
            <Link href="/" className="flex items-center gap-3 md:gap-6" onClick={() => setOpen(false)}>
              <img src="/proniq.png" alt="proniq" className="w-auto h-7 md:h-10 object-contain" />
              <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${useWhiteText
                ? "text-white"
                : "bg-gradient-to-r from-blue-600 via-teal-400 to-green-500 bg-clip-text text-transparent"
                }`}>proniq</span>
            </Link>

            {/* ---------- DESKTOP NAV ---------- */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => {
                const active = pathname === l.href;

                if (l.dropdown) {
                  const isSolutions = l.dropdownType === "solutions";
                  const isIndustries = l.dropdownType === "industries";
                  const showDropdown = isSolutions ? showSolutions : showIndustries;
                  const handleEnter = isSolutions ? handleSolutionsMouseEnter : handleMouseEnter;
                  const handleLeave = isSolutions ? handleSolutionsMouseLeave : handleMouseLeave;
                  const handleClick = isSolutions ? handleSolutionsClick : handleIndustriesClick;
                  const setShowDropdown = isSolutions ? setShowSolutions : setShowIndustries;

                  return (
                    <div
                      key={l.href}
                      className="relative"
                      onMouseEnter={handleEnter}
                      onMouseLeave={handleLeave}
                    >
                      <button
                        onClick={handleClick}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition flex items-center gap-1
                        ${active || showDropdown
                            ? (useWhiteText ? "bg-white text-slate-900" : "bg-slate-100 text-slate-900")
                            : (useWhiteText ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-100")
                          }`}
                      >
                        {l.label}
                        <ChevronRight className={`w-3 h-3 transition-transform ${showDropdown ? 'rotate-90' : ''}`} />
                      </button>

                      {/* ---------- DROPDOWN ---------- */}
                      <AnimatePresence>
                        {showDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 pt-6 w-[600px]"
                            onMouseEnter={handleEnter}
                            onMouseLeave={handleLeave}
                          >
                            <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                              <div className="grid grid-cols-2">
                                {/* LEFT LIST */}
                                <div className="py-3">
                                  {isSolutions && solutions.map((item) => {
                                    const href = `/${item.slug}`;
                                    const isActive = pathname === href;

                                    return (
                                      <Link
                                        key={item.slug}
                                        href={href}
                                        onClick={() => setShowDropdown(false)}
                                        className={`block px-6 py-3 text-sm transition
                                      ${isActive
                                            ? "bg-primary/10 text-primary font-semibold"
                                            : "text-slate-700 hover:bg-slate-100"
                                          }`}
                                      >
                                        {item.title}
                                      </Link>
                                    );
                                  })}
                                  {isIndustries && industries.map((item) => {
                                    const href = `/industries/${item.slug}`;
                                    const isActive = pathname === href;

                                    return (
                                      <Link
                                        key={item.slug}
                                        href={href}
                                        onClick={() => setShowDropdown(false)}
                                        className={`block px-6 py-3 text-sm transition
                                      ${isActive
                                            ? "bg-primary/10 text-primary font-semibold"
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
                                  {isSolutions && (
                                    <>
                                      <p className="text-xs uppercase tracking-wide text-slate-400 font-bold">
                                        Features
                                      </p>
                                      <h4 className="mt-1 text-lg font-bold text-slate-900 leading-tight">
                                        Workflow-driven solutions
                                      </h4>
                                      <p className="mt-2 text-sm text-slate-600 font-normal">
                                        From tender management to final billing — every feature designed for seamless project execution.
                                      </p>
                                    </>
                                  )}
                                  {isIndustries && (
                                    <>
                                      <p className="text-xs uppercase tracking-wide text-slate-400 font-bold">
                                        Solutions
                                      </p>
                                      <h4 className="mt-1 text-lg font-bold text-slate-900 leading-tight">
                                        Built for real-world operations
                                      </h4>
                                      <p className="mt-2 text-sm text-slate-600 font-normal">
                                        ERP workflows designed to match how each industry actually works.
                                      </p>
                                      <Link
                                        href="/industries"
                                        onClick={() => setShowDropdown(false)}
                                        className="inline-flex items-center mt-4 text-sm font-bold text-primary hover:gap-1 transition-all"
                                      >
                                        View all industries <ChevronRight className="w-4 h-4" />
                                      </Link>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition
                    ${active
                        ? (useWhiteText ? "bg-white text-slate-900" : "bg-slate-100 text-slate-900")
                        : (useWhiteText ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-100")
                      }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            {/* ---------- DESKTOP CTA ---------- */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className={`px-5 py-2.5 text-sm font-bold rounded-full transition shadow-md
                  ${useWhiteText
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
              >
                Get Started
              </Link>
            </div>

            {/* ---------- MOBILE TOGGLE ---------- */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-900 pointer-events-auto relative z-10"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

