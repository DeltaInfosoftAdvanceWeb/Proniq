"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Factory, Ruler, Building2, HardHat, Building, ArrowRight, CheckCircle2, Sparkles, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import TransformCTA from "@/components/TransformCTA";

const industries = [
    {
        id: "manufacturing",
        slug: "manufacturing",
        title: "Manufacturing",
        icon: Factory,
        description:
            "Digitize production workflows with advanced planning, inventory, and quality control systems. Gain real-time visibility into every stage of your manufacturing process.",
        features: ["Production Planning", "Quality Control", "Inventory Management"],
        image: "/manufacturing.jpeg",
        gradient: "from-blue-600 to-cyan-500",
        shadow: "shadow-blue-500/20",
        accent: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        id: "interior-architecture",
        slug: "interior-architecture",
        title: "Interior Architecture",
        icon: Ruler,
        description:
            "Manage design projects, materials, vendors, and clients from a single unified platform. Streamline communication and ensure every detail is perfect.",
        features: ["Project Tracking", "Vendor Management", "Client Portal"],
        image: "/interior.jpeg",
        gradient: "from-purple-600 to-pink-500",
        shadow: "shadow-purple-500/20",
        accent: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        id: "infrastructure",
        slug: "infrastructure",
        title: "Infrastructure",
        icon: Building2,
        description:
            "Control large-scale infrastructure programs with precision planning and real-time reporting. Keep multi-year projects on track and within budget.",
        features: ["Program Management", "Real-time Reporting", "Budget Tracking"],
        image: "/infra.jpeg",
        gradient: "from-orange-500 to-amber-500",
        shadow: "shadow-orange-500/20",
        accent: "text-orange-600",
        bg: "bg-orange-50",
    },
    {
        id: "construction",
        slug: "construction",
        title: "Construction",
        icon: HardHat,
        description:
            "Track site progress, subcontractors, safety, and billing with live project visibility. Connect the field to the office seamlessly.",
        features: ["Site Management", "Safety Compliance", "Subcontractor Portal"],
        image: "/construnction.jpeg",
        gradient: "from-emerald-600 to-teal-500",
        shadow: "shadow-emerald-500/20",
        accent: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        id: "engineering",
        slug: "engineering",
        title: "Engineering",
        icon: Building,
        description:
            "Streamline engineering workflows with drawing control, approvals, and version history. Ensure technical accuracy and compliance at every step.",
        features: ["Document Control", "Approval Workflows", "Version History"],
        image: "/engineering.jpeg",
        gradient: "from-indigo-600 to-blue-500",
        shadow: "shadow-indigo-500/20",
        accent: "text-indigo-600",
        bg: "bg-indigo-50",
    },
];

export default function IndustriesPage() {
    const [activeIndustry, setActiveIndustry] = useState(industries[0]);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <main className="bg-white text-slate-900 selection:bg-teal-500/20 selection:text-teal-700 font-sans">

            {/* ---------------- HERO SECTION ---------------- */}
            <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                {/* Ambient Glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[120px]" />

                <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
                            <Layers className="w-3 h-3 text-teal-500 " />
                            <span>Industries We Serve</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1] text-slate-900">
                            Tailored Solutions for <br />
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 text-gradient">
                                Complex Operations
                            </span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed font-light">
                            One platform, infinite possibilities. We've built specialized modules that adapt to the unique DNA of your industry—from the factory floor to the construction site.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ---------------- STICKY SCROLL CONTAINER ---------------- */}
            <section className="relative border-t border-slate-100" ref={containerRef}>
                <div className="hidden lg:flex max-w-[1600px] mx-auto">

                    {/* LEFT: Scrollable Content List */}
                    <div className="w-[45%] py-20 pl-8 pr-12 xl:pl-24 relative z-10">
                        <div className="space-y-40 pb-[20vh]">
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={industry.id}
                                    className="group"
                                    initial={{ opacity: 0.2 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ amount: 0.6, margin: "-20% 0px -20% 0px" }}
                                    onViewportEnter={() => setActiveIndustry(industry)}
                                >
                                    <div className="flex items-start gap-6">
                                        {/* Number/Icon Indicator */}
                                        <div className="hidden md:flex flex-col items-center gap-4 pt-1">
                                            <span className="text-sm font-mono font-bold text-slate-300">0{index + 1}</span>
                                            <div className={`w-px h-24 bg-gradient-to-b ${activeIndustry.id === industry.id ? 'from-slate-300 to-transparent' : 'from-slate-100 to-transparent'}`} />
                                        </div>

                                        <div className="flex-1">
                                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} text-white mb-6 shadow-lg shadow-current/20 transform group-hover:scale-110 transition-transform duration-300`}>
                                                <industry.icon className="w-7 h-7" />
                                            </div>

                                            <h2 className="text-4xl font-bold mb-4 text-slate-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all">
                                                {industry.title}
                                            </h2>

                                            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                                                {industry.description}
                                            </p>

                                            <div className="mb-8">
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Key Capabilities</h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {industry.features.map((feature, i) => (
                                                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600">
                                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.gradient}`} />
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <Link
                                                href={`/industries/${industry.slug}`}
                                                className={`inline-flex items-center gap-2 font-bold transition-all group/link ${industry.accent}`}
                                            >
                                                <span className="border-b-2 border-transparent group-hover/link:border-current">Explore Solution</span>
                                                <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Sticky Image Display */}
                    <div className="w-[55%] sticky top-0 h-screen flex items-center justify-center px-8 lg:px-16 overflow-hidden bg-slate-50/50">
                        {/* Background Decor */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]" />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndustry.id}
                                className="relative w-full aspect-[16/10] max-w-3xl"
                                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -50, scale: 1.05 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {/* Glow Effect */}
                                <div className={`absolute -inset-4 bg-gradient-to-r ${activeIndustry.gradient} opacity-20 blur-2xl rounded-[2rem]`} />

                                {/* Glass Container */}
                                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-white/20 backdrop-blur-sm z-10 p-2">
                                    <div className="relative h-full w-full rounded-xl overflow-hidden bg-slate-900">
                                        <Image
                                            src={activeIndustry.image}
                                            alt={activeIndustry.title}
                                            fill
                                            className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                                            priority
                                        />

                                        {/* Overlay Content */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className={`p-1.5 rounded-lg bg-white/10 backdrop-blur-md`}>
                                                        <activeIndustry.icon className="w-4 h-4 text-white" />
                                                    </div>
                                                    <span className="text-white/80 font-mono text-xs uppercase tracking-widest">{activeIndustry.title} OS</span>
                                                </div>
                                                <h3 className="text-3xl font-bold text-white mb-2">
                                                    Next-Gen {activeIndustry.title}
                                                </h3>
                                                <p className="text-white/70 text-sm max-w-md line-clamp-2">
                                                    {activeIndustry.description}
                                                </p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements for visual flair */}
                                <motion.div
                                    className="absolute -right-6 -top-6 p-4 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 z-20 hidden xl:block"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${activeIndustry.gradient} flex items-center justify-center text-white`}>
                                            <Sparkles className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Efficiency</div>
                                            <div className="text-lg font-bold text-slate-900">+30% Boost</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* MOBILE VIEW (Stacked Cards) */}
                <div className="lg:hidden px-4 py-16 space-y-24">
                    {industries.map((industry) => (
                        <div key={industry.id} className="relative">
                            {/* Sticky Header for Mobile */}
                            <div className="sticky top-20 z-10 mb-6">
                                <span className={`inline-block px-4 py-1 rounded-full bg-white/90 backdrop-blur border border-slate-200 shadow-sm text-xs font-bold uppercase tracking-wider ${industry.accent}`}>
                                    {industry.title}
                                </span>
                            </div>

                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                                <div className="relative aspect-[4/3] w-full">
                                    <Image
                                        src={industry.image}
                                        alt={industry.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className={`inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white mb-4`}>
                                            <industry.icon className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-2">{industry.title}</h2>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                        {industry.description}
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        {industry.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className={`shrink-0 w-6 h-6 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center`}>
                                                    <CheckCircle2 className={`w-3.5 h-3.5 ${industry.accent}`} />
                                                </div>
                                                <span className="text-slate-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={`/industries/${industry.slug}`}
                                        className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all ${industry.shadow}`}
                                    >
                                        Explore Solution
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <TransformCTA />
        </main>
    );
}
