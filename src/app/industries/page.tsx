"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Factory, Ruler, Building2, HardHat, Building, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const industries = [
    {
        id: "manufacturing",
        title: "Manufacturing",
        icon: Factory,
        description:
            "Digitize production workflows with advanced planning, inventory, and quality control systems. Gain real-time visibility into every stage of your manufacturing process.",
        features: ["Production Planning", "Quality Control", "Inventory Management"],
        image: "/manufacturing.jpeg",
        gradient: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50",
    },
    {
        id: "interior-architecture",
        title: "Interior Architecture",
        icon: Ruler,
        description:
            "Manage design projects, materials, vendors, and clients from a single unified platform. Streamline communication and ensure every detail is perfect.",
        features: ["Project Tracking", "Vendor Management", "Client Portal"],
        image: "/interior.jpeg",
        gradient: "from-purple-500 to-pink-500",
        bg: "bg-purple-50",
    },
    {
        id: "infrastructure",
        title: "Infrastructure",
        icon: Building2,
        description:
            "Control large-scale infrastructure programs with precision planning and real-time reporting. Keep multi-year projects on track and within budget.",
        features: ["Program Management", "Real-time Reporting", "Budget Tracking"],
        image: "/infra.jpeg",
        gradient: "from-orange-500 to-amber-500",
        bg: "bg-orange-50",
    },
    {
        id: "construction",
        title: "Construction",
        icon: HardHat,
        description:
            "Track site progress, subcontractors, safety, and billing with live project visibility. Connect the field to the office seamlessly.",
        features: ["Site Management", "Safety Compliance", "Subcontractor Portal"],
        image: "/construnction.jpeg",
        gradient: "from-emerald-500 to-green-500",
        bg: "bg-emerald-50",
    },
    {
        id: "engineering",
        title: "Engineering",
        icon: Building,
        description:
            "Streamline engineering workflows with drawing control, approvals, and version history. Ensure technical accuracy and compliance at every step.",
        features: ["Document Control", "Approval Workflows", "Version History"],
        image: "/engineering.jpeg",
        gradient: "from-indigo-500 to-blue-500",
        bg: "bg-indigo-50",
    },
];

export default function IndustriesPage() {
    const [activeIndustry, setActiveIndustry] = useState(industries[0]);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <main className="bg-slate-50 text-slate-900 selection:bg-primary/20 selection:text-primary">

            {/* ---------------- HERO ---------------- */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-slate-50 text-slate-900">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-8">
                            Industries We Serve
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                            Built for the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-500 to-secondary">
                                Real World
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
                            PRONIQ adapts to the unique DNA of your industry. From manufacturing floors to construction sites, we provide the specialized tools you need to succeed.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ---------------- STICKY SCROLL SECTION ---------------- */}
            <section className="relative" ref={containerRef}>
                <div className="hidden lg:flex">
                    {/* LEFT: Scrollable Content */}
                    <div className="w-[40%] py-10 pl-6 pr-12 xl:pl-20">
                        <div className="space-y-32"> {/* Reduced spacing */}
                            {industries.map((industry) => (
                                <motion.div
                                    key={industry.id}
                                    className="min-h-[50vh] flex flex-col justify-center"
                                    onViewportEnter={() => setActiveIndustry(industry)}
                                    viewport={{ amount: 0.5, margin: "-100px" }}
                                >
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} text-white mb-8 shadow-lg`}>
                                        <industry.icon className="w-8 h-8" />
                                    </div>

                                    <h2 className="text-4xl font-bold mb-6 text-slate-900">{industry.title}</h2>
                                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                        {industry.description}
                                    </p>

                                    <ul className="space-y-4 mb-10">
                                        {industry.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
                                    >
                                        Learn more about {industry.title}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        {/* Extra padding at bottom to allow last item to scroll fully */}
                        <div className="h-[20vh]" />
                    </div>

                    {/* RIGHT: Sticky Image */}
                    <div className="w-[60%] sticky top-0 h-screen flex items-center justify-center bg-slate-100/50 border-l border-slate-200 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

                        <div className="relative w-full h-[85vh] px-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndustry.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="relative w-full h-full"
                                >
                                    {/* Decorative blob behind image */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${activeIndustry.gradient} opacity-20 blur-3xl rounded-full transform scale-110`} />

                                    <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white">
                                        <Image
                                            src={activeIndustry.image}
                                            alt={activeIndustry.title}
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                                        <div className="absolute bottom-0 left-0 p-8 text-white">
                                            <p className="font-bold text-2xl">{activeIndustry.title}</p>
                                            <p className="text-base text-white/80">Industry Solution</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* MOBILE VIEW (Stacked) */}
                <div className="lg:hidden px-6 py-12 space-y-20">
                    {industries.map((industry) => (
                        <div key={industry.id} className="space-y-8">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={industry.image}
                                    alt={industry.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-br ${industry.gradient} text-white shadow-lg`}>
                                    <industry.icon className="w-6 h-6" />
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">{industry.title}</h2>
                                <p className="text-lg text-slate-600 mb-6">{industry.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {industry.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className="w-full block text-center py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition"
                                >
                                    Explore {industry.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- CTA ---------------- */}
            <section className="py-32 bg-slate-900 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-slate-900 to-secondary/10" />

                {/* Animated Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                <div className="relative max-w-4xl mx-auto px-6 z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-8"
                    >
                        Ready to Transform <br /> Your Operations?
                    </motion.h2>

                    <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                        Join industry leaders who are using PRONIQ to drive efficiency, safety, and growth.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-gradient-to-r from-primary to-teal-500 rounded-xl font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all text-lg"
                        >
                            Schedule a Demo
                        </Link>
                        <Link
                            href="/features"
                            className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all text-lg backdrop-blur-sm"
                        >
                            View All Features
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
