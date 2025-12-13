"use client";

import Link from "next/link";
import EngineeringHologram from "@/components/EngineeringHologram";
import TransformCTA from "@/components/TransformCTA";

export default function Engineering() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-[url('/site/construction-hero-sunset.png')] bg-cover bg-center bg-no-repeat transform scale-105 z-index-1" />
                    {/* Gradient overlay for cinematic feel */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80" />
                </div>

                {/* Centered content */}
                <div className="relative z-10 px-4 max-w-5xl mx-auto mt-20">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-400/30 bg-indigo-900/30 backdrop-blur-md">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-300">
                            Next-Gen Engineering ERP
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-2xl">
                        Engineer Smarter. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                            Deliver Faster.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        From concept to commissioning, unify your entire engineering lifecycle with AI-driven insights and real-time control.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10">Start Your Transformation</span>
                            {/* <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" /> */}
                        </Link>
                        <Link
                            href="#solutions"
                            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all hover:border-white/40"
                        >
                            See How It Works
                        </Link>
                    </div>
                </div>
            </section>

            {/* Visual Story: The Engineer & The Tech (Interactive Hologram) */}
            <div className="-mt-[10vh] relative z-50">
                <EngineeringHologram />
            </div>

            {/* Who It's For */}
            <section className="px-6 py-20 bg-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
                        Built for every discipline of engineering
                    </h2>
                    <p className="text-center text-sm md:text-base text-slate-500 mb-12 max-w-2xl mx-auto">
                        From design studios to EPC giants, the platform adapts to how you engineer, collaborate, and deliver.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Consulting Engineers",
                                pain: "Tracking billable hours and project profitability.",
                                desc: "Capture time accurately, manage complex billing rates, and ensure every hour is accounted for.",
                                bullets: [
                                    "Automated timesheets & approvals",
                                    "Real-time project margin analysis",
                                ],
                            },
                            {
                                title: "EPC Firms",
                                pain: "Coordinating design, procurement, and construction.",
                                desc: "Integrate engineering deliverables with procurement schedules and site activities for seamless execution.",
                                bullets: [
                                    "Integrated master schedule",
                                    "Material tracking from design to site",
                                ],
                            },
                            {
                                title: "R&D Teams",
                                pain: "Managing innovation cycles and product data.",
                                desc: "Streamline product development, manage revisions, and track testing milestones efficiently.",
                                bullets: [
                                    "Product lifecycle management",
                                    "Stage-gate process control",
                                ],
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
                            >
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-500 mb-2">
                                    {item.pain}
                                </p>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>

                                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                                    What you get
                                </p>
                                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                                    {item.bullets.map((point) => (
                                        <li key={point} className="flex gap-2">
                                            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Key Features / Solutions */}
            <section id="solutions" className="px-6 py-24 bg-slate-50 overflow-hidden">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Engineering‑specific ERP modules
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Build your digital engineering hub. From the designer's desk to the project manager's dashboard, connect every stakeholder.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Project Management */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors p-6">
                                <div className="space-y-3 pt-2">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-1/4 text-[10px] text-slate-500 font-mono text-right">Planning</div>
                                        <div className="w-3/4 h-2 bg-indigo-100 rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-indigo-500 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className="w-1/4 text-[10px] text-slate-500 font-mono text-right">Design</div>
                                        <div className="w-3/4 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="w-[70%] h-full bg-purple-400 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className="w-1/4 text-[10px] text-slate-500 font-mono text-right">Review</div>
                                        <div className="w-3/4 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="w-[30%] h-full bg-purple-300 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
                                        <span className="text-[10px] font-bold text-slate-700">Milestone 3</span>
                                        <span className="text-[9px] px-1.5 py-0.5 bg-green-100 text-green-700 rounded font-bold">ON TRACK</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Planning
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                        Project Management
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Track milestones, deliverables, and dependencies. Visualize progress with Gantt charts and Kanban boards.
                                </p>
                            </div>
                        </div>

                        {/* 2. Resource Planning */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors p-6 flex flex-col justify-center gap-4">
                                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs">JD</div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-[10px] font-bold text-slate-700">John Doe</span>
                                            <span className="text-[9px] text-slate-400">120%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-red-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm opacity-80">
                                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">AS</div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-[10px] font-bold text-slate-700">Alice Smith</span>
                                            <span className="text-[9px] text-slate-400">85%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="w-[85%] h-full bg-indigo-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Resources
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                                        Resource Planning
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Optimize team utilization. Forecast resource needs and prevent burnout with capacity planning tools.
                                </p>
                            </div>
                        </div>

                        {/* 3. Time & Expense */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors p-6 flex flex-col justify-center">
                                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                    <div className="flex items-center justify-between p-3 border-b border-slate-50">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                            <span className="text-[10px] font-bold text-slate-700">Project Alpha</span>
                                        </div>
                                        <span className="text-[10px] font-mono font-bold text-slate-900">42.5 hrs</span>
                                    </div>
                                    <div className="p-3 bg-slate-50/50">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[9px] text-slate-500">Billable</span>
                                            <span className="text-[9px] font-bold text-emerald-600">$4,250</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[9px] text-slate-500">Expenses</span>
                                            <span className="text-[9px] font-bold text-slate-600">$320</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Finance
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                        Time & Expense
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Capture billable hours and expenses accurately. Automate approval workflows and integrate with billing.
                                </p>
                            </div>
                        </div>

                        {/* 4. Document Control */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors p-6">
                                <div className="absolute inset-x-8 top-8 bg-white shadow-lg border border-slate-200 rounded-t-lg p-4 group-hover:-translate-y-2 transition-transform duration-300">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="w-8 h-10 bg-purple-100 border border-purple-200 rounded-sm flex items-center justify-center">
                                            <span className="text-[8px] font-bold text-purple-600">DWG</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[9px] font-bold text-slate-700">A-102-FLOOR</div>
                                            <div className="text-[8px] text-slate-400">Ver. 4.0</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[8px] font-bold rounded">APPROVED</div>
                                        <span className="text-[8px] text-slate-400">by Engineer Lead</span>
                                    </div>
                                </div>
                                <div className="absolute inset-x-12 top-20 bg-slate-50 shadow border border-slate-200 rounded-t-lg h-20 -z-10" />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Docs
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                                        Document Control
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Manage revisions, transmittals, and approvals. Ensure everyone is working on the latest version.
                                </p>
                            </div>
                        </div>

                        {/* 5. Quality Assurance */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors p-6 flex flex-col justify-center">
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                                    <div className="flex items-start gap-2">
                                        <div className="mt-0.5 w-3 h-3 rounded border border-purple-500 bg-purple-500 flex items-center justify-center">
                                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-[10px] text-slate-600 line-through decoration-slate-400">Structural integrity check</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="mt-0.5 w-3 h-3 rounded border border-purple-300 bg-white" />
                                        <span className="text-[10px] font-medium text-slate-800">Safety clearance audit</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="mt-0.5 w-3 h-3 rounded border border-purple-300 bg-white" />
                                        <span className="text-[10px] font-medium text-slate-800">Final handover signoff</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Quality
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                                        Quality Assurance
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Ensure compliance with standards. Track non-conformances and manage corrective actions.
                                </p>
                            </div>
                        </div>

                        {/* 6. Financials */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors flex items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                        <path className="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                        <path className="text-indigo-500 drop-shadow-lg" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                        <span className="text-2xl font-bold text-slate-800">24%</span>
                                        <span className="text-[9px] text-slate-500 uppercase tracking-wide">Profit Margin</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Analytics
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                        Financials
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Monitor project profitability, cash flow, and revenue recognition. Generate accurate financial reports.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Sub-Industries */}
            <section className="relative px-6 py-20 bg-white overflow-hidden">
                {/* Soft background accents */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-[25%] -left-[10%] h-[50%] w-[50%] rounded-full bg-indigo-500/5 blur-[110px]" />
                    <div className="absolute bottom-[-25%] -right-[15%] h-[45%] w-[45%] rounded-full bg-purple-400/5 blur-[110px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Text + chips */}
                    <div className="order-2 md:order-1 text-center md:text-left">
                        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500 mb-3">
                            One platform, many disciplines
                        </p>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900">
                            Configure once, deploy across every engineering team
                        </h2>
                        <p className="text-sm md:text-base text-slate-500 mb-6">
                            Keep one ERP core and switch on discipline‑specific workflows, reports, and standards.
                        </p>

                        <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2 text-[11px]">
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                                Shared resources
                            </span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                                Integrated schedules
                            </span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                                Unified billing
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {[
                                { name: "Civil", slug: "" },
                                { name: "Mechanical", slug: "" },
                                { name: "Electrical", slug: "" },
                                { name: "Software", slug: "" },
                                { name: "Environmental", slug: "" },
                                { name: "Structural", slug: "" },
                            ].map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/industries/engineering/${item.slug}`}
                                    className="rounded-full border border-slate-200 bg-white/70 px-6 py-2 text-xs md:text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm hover:shadow-md"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 3D Dashboard Component (Simplified for Engineering) */}
                    <div className="order-1 md:order-2 perspective-[1200px] group/3d">
                        <div className="relative w-full aspect-[4/3] transition-all duration-700 ease-out transform-style-3d group-hover/3d:[transform:rotateY(-12deg)_rotateX(6deg)_scale(1.05)]">
                            <div className="absolute inset-4 bg-indigo-500/30 blur-3xl -z-10 transition-all duration-500 group-hover/3d:bg-indigo-500/50" />
                            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden flex flex-col">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                                <div className="relative z-10 px-6 py-4 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/50">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                        </div>
                                        <span className="text-[10px] font-mono text-slate-400 tracking-widest">ENGINEERING_OS</span>
                                    </div>
                                    <div className="px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-bold text-indigo-400 animate-pulse">
                                        LIVE
                                    </div>
                                </div>
                                <div className="relative z-10 p-6 grid grid-cols-2 gap-4 h-full content-start">
                                    {[
                                        { label: "Civil", count: "08", unit: "Projects", color: "from-blue-500 to-indigo-600", icon: "🏗️" },
                                        { label: "Mechanical", count: "14", unit: "Designs", color: "from-purple-500 to-pink-600", icon: "⚙️" },
                                        { label: "Electrical", count: "06", unit: "Schematics", color: "from-amber-500 to-orange-600", icon: "⚡" },
                                        { label: "Software", count: "22", unit: "Sprints", color: "from-indigo-500 to-purple-600", icon: "💻" },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="group/card relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 transition-all duration-500 transform-style-3d hover:bg-slate-700/50 hover:border-slate-600 group-hover/3d:[transform:translateZ(30px)] hover:!translate-z-[50px] hover:shadow-xl cursor-pointer"
                                            style={{ transitionDelay: `${i * 50}ms` }}
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-sm shadow-lg`}>
                                                    {item.icon}
                                                </div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_5px_rgba(99,102,241,0.8)]" />
                                            </div>
                                            <div className="space-y-0.5">
                                                <div className="text-2xl font-bold text-white tracking-tight">{item.count}</div>
                                                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">{item.unit}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Outcomes */}
            <section className="px-6 py-20 bg-slate-100">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold text-center mb-4 text-slate-900">
                        What engineering teams achieve
                    </h2>
                    <p className="text-center text-sm md:text-base text-slate-600 mb-10 max-w-3xl mx-auto">
                        Deliver projects on time and within budget. Improve collaboration and reduce rework.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                metric: "20%",
                                label: "increase in billable utilization",
                            },
                            {
                                metric: "15%",
                                label: "reduction in project overruns",
                            },
                            {
                                metric: "30%",
                                label: "faster design approval cycles",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                            >
                                <p className="text-3xl font-bold text-indigo-500">{item.metric}</p>
                                <p className="mt-3 text-sm text-slate-700">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <TransformCTA />
        </main>
    );
}
