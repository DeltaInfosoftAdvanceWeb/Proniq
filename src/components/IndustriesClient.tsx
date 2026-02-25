"use client";

import { motion } from "framer-motion";
import { Factory, Ruler, Building2, HardHat, Building, ArrowRight, CheckCircle2, Sparkles, Layers, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TransformCTA from "@/components/TransformCTA";

const industries = [
    {
        id: "contractors",
        slug: "contractors",
        title: "Contractors",
        icon: HardHat,
        description:
            "Our flagship ecosystem for General & Specialist Contractors. Automate Running Account (RA) billing, track job costing, and unify site logs with head-office finance.",
        features: ["Automated RA Billing", "Measurement Books", "Unified Job Costing"],
        image: "/Contractor.jpeg",
        gradient: "from-amber-600 to-orange-500",
        shadow: "shadow-amber-500/20",
        accent: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        id: "construction",
        slug: "construction",
        title: "Construction",
        icon: Building2,
        description:
            "Track site progress, safety, and billing with live project visibility. Connect the field to the office and manage subcontractors with surgical precision.",
        features: ["Site Management", "Subcontractor Portal", "Safety Compliance"],
        image: "/Construnction.jpeg",
        gradient: "from-emerald-600 to-teal-500",
        shadow: "shadow-emerald-500/20",
        accent: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        id: "manufacturing",
        slug: "manufacturing",
        title: "Manufacturing",
        icon: Factory,
        description:
            "Digitize production workflows with advanced planning, inventory, and quality control systems. Gain real-time visibility into every stage of your manufacturing process.",
        features: ["Production Planning", "Quality Control", "Inventory Management"],
        image: "/Manuf.png",
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
        image: "/interior-design.jpeg",
        gradient: "from-purple-600 to-pink-500",
        shadow: "shadow-purple-500/20",
        accent: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        id: "infrastructure",
        slug: "infrastructure",
        title: "Infrastructure",
        icon: Landmark,
        description:
            "Control large-scale infrastructure programs with precision planning and real-time reporting. Keep multi-year projects on track and within budget.",
        features: ["Program Management", "Real-time Reporting", "Budget Tracking"],
        image: "/infrastructure.jpeg",
        gradient: "from-orange-500 to-amber-500",
        shadow: "shadow-orange-500/20",
        accent: "text-orange-600",
        bg: "bg-orange-50",
    },
    {
        id: "engineering",
        slug: "engineering",
        title: "Engineering",
        icon: Building,
        description:
            "Streamline engineering workflows with drawing control, approvals, and version history. Ensure technical accuracy and contractor compliance at every step.",
        features: ["Document Control", "Approval Workflows", "Version History"],
        image: "/Engin-eering.jpeg",
        gradient: "from-indigo-600 to-blue-500",
        shadow: "shadow-indigo-500/20",
        accent: "text-indigo-600",
        bg: "bg-indigo-50",
    },
];

export default function IndustriesClient() {
    return (
        <main className="bg-white text-slate-900 selection:bg-teal-500/20 selection:text-teal-700 font-sans">

            {/* ---------------- HERO SECTION ---------------- */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                {/* Ambient Glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[120px]" />

                <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
                            <Layers className="w-4 h-4 text-teal-500 " />
                            <span>Sectors.01 — 05</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-10 tracking-tight leading-[1] text-slate-900">
                            Our Industry <br />
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
                                Ecosystems
                            </span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
                            Specialized modules engineered to adapt to your unique DNA—from the factory floor to the construction site.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ---------------- INDUSTRY REVEAL SECTIONS ---------------- */}
            <div className="relative">
                {industries.map((industry, index) => (
                    <section key={industry.id} className="relative min-h-screen lg:min-h-[90vh] flex items-center py-20 lg:py-0 border-b border-slate-100 last:border-0 overflow-hidden">
                        <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center`}>

                                {/* Image Column: Consistently on the left for "In Front" requirement */}
                                <motion.div
                                    className={`relative lg:order-1`}
                                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {/* Premium Image Frame */}
                                    <div className="relative aspect-[4/5] lg:aspect-[16/11] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.12)] border-[12px] border-white group">
                                        <Image
                                            src={industry.image}
                                            alt={industry.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-[4s] ease-out"
                                            priority={index < 2}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

                                        {/* Corner HUD */}
                                        <div className="absolute top-10 left-10">
                                            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-[0.2em]">
                                                <industry.icon className="w-5 h-5 text-teal-400" />
                                                <span>Deploy.OS_{industry.id.substring(0, 3)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Atmospheric Glow */}
                                    <div className={`absolute -inset-20 bg-gradient-to-br ${industry.gradient} opacity-[0.06] blur-[140px] rounded-full -z-10`} />
                                </motion.div>

                                {/* Content Column: Consistently on the right */}
                                <motion.div
                                    className={`relative lg:order-2`}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <div className="space-y-10">
                                        <div className="flex items-center gap-6">
                                            <span className="text-xl font-mono font-bold text-slate-200 tracking-[0.4em]">0{index + 1}</span>
                                            <div className={`h-px w-16 bg-gradient-to-r ${industry.gradient}`} />
                                            <span className={`text-sm font-bold uppercase tracking-[0.3em] ${industry.accent}`}>Professional Solutions</span>
                                        </div>

                                        <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1] transition-colors">
                                            Next-Gen <br />
                                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${industry.gradient}`}>
                                                {industry.title}
                                            </span>
                                        </h2>

                                        <p className="text-xl lg:text-3xl text-slate-500 font-light leading-relaxed max-w-xl">
                                            {industry.description}
                                        </p>

                                        <div className="space-y-5 pt-4">
                                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Standard Capabilities</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {industry.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-4 p-5 rounded-3xl bg-slate-50/50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-slate-200 group/item">
                                                        <div className={`shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center transition-transform group-hover/item:scale-110`}>
                                                            <CheckCircle2 className={`w-5 h-5 ${industry.accent}`} />
                                                        </div>
                                                        <span className="text-slate-700 font-semibold text-lg">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-10">
                                            <Link
                                                href={`/industries/${industry.slug}`}
                                                className={`group/link inline-flex items-center gap-5 py-6 px-12 rounded-full bg-slate-900 text-white font-bold text-xl transition-all hover:bg-slate-800 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-95`}
                                            >
                                                Explore Ecosystem
                                                <ArrowRight className="w-6 h-6 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* ---------------- PLATFORM SHOWCASE ---------------- */}
            <section className="py-40 bg-slate-950 overflow-hidden relative">
                {/* Background GIF */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image
                        src="/Engineer.gif"
                        alt="Background Animation"
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent z-10" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-32">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold tracking-[0.3em] uppercase mb-8">
                            <Sparkles className="w-5 h-5" />
                            <span>System Modules</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tight">
                            Unified <br className="lg:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Technology.</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-2xl font-light leading-relaxed">
                            A single source of truth for the entire lifecycle of industrial operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { src: "/Manuf.png", label: "Production" },
                            { src: "/interior-design.jpeg", label: "Design Hub" },
                            { src: "/infrastructure.jpeg", label: "Infra Ops" },
                            { src: "/Construnction.jpeg", label: "Site Control" },
                            { src: "/Engin-eering.jpeg", label: "Engineer OS" },
                            { src: "/p10.png", label: "Dashboards" },
                            { src: "/p11.png", label: "Analytics" },
                            { src: "/p12.png", label: "Resources" },
                            { src: "/p13.png", label: "Schedules" },
                            { src: "/p14.png", label: "Budgets" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900 shadow-2xl"
                            >
                                <Image src={item.src} alt={item.label} fill className="object-cover opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 pointer-events-none" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <p className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-2">{item.label}</p>
                                    <div className="w-10 h-1.5 bg-teal-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <TransformCTA />
        </main>
    );
}
