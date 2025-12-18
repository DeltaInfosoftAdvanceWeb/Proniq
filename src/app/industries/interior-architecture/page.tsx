"use client";

import Link from "next/link";
import ConstructionHologram from "@/components/ConstructionHologram";
import TransformCTA from "@/components/TransformCTA";

export default function InteriorArchitecture() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-[url('/site/interior.png')] bg-cover bg-center bg-no-repeat transform scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80" />
                </div>

                {/* Centered content */}
                <div className="relative z-10 px-4 max-w-5xl mx-auto mt-20">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-900/30 backdrop-blur-md">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-300">
                            Interior & Architecture Workflow OS
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-2xl">
                        Design Better. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-500">
                            Deliver Faster.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        From concept to handover — unify your design, sourcing, costing, and site execution with
                        real-time project intelligence built for modern interior & architecture teams.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(147,51,234,0.5)]"
                        >
                            <span className="relative z-10">Start Your Transformation</span>
                            {/* <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" /> */}
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

            {/* Visual Story */}
            <div className="-mt-[10vh] relative z-50">
                <ConstructionHologram />
            </div>

            {/* Who It's For */}
            <section className="px-6 py-20 bg-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
                        Built for every space you design
                    </h2>
                    <p className="text-center text-sm md:text-base text-slate-500 mb-12 max-w-2xl mx-auto">
                        Whether you run an interior studio, an architecture practice, or a turnkey execution team —
                        streamline design, approvals, materials, and billing in one ecosystem.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {[
                            {
                                title: "Interior Design Studios",
                                pain: "Endless revisions and scattered client approvals.",
                                desc: "Centralize concepts, moodboards, drawings, and approvals in one client-friendly portal.",
                                bullets: [
                                    "Moodboards & material selections",
                                    "Client review & approval workflows",
                                ],
                            },
                            {
                                title: "Architecture Firms",
                                pain: "Complex drawings, dependencies, and handovers.",
                                desc: "Bring BOQs, timelines, drawings, and contracting teams together with synced project data.",
                                bullets: [
                                    "Drawing register with versioning",
                                    "BOQ-based project tracking",
                                ],
                            },
                            {
                                title: "Turnkey Contractors",
                                pain: "Material delays and unclear on-site execution.",
                                desc: "Control procurement, site progress, vendor payments, and installation checklists with accuracy.",
                                bullets: [
                                    "Material procurement & GRN tracking",
                                    "Site execution & daily updates",
                                ],
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all"
                            >
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-500 mb-2">
                                    {item.pain}
                                </p>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>

                                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                                    What you get
                                </p>
                                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                                    {item.bullets.map((point) => (
                                        <li key={point} className="flex gap-2">
                                            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-purple-500" />
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
                            ERP modules designed for interiors & architecture
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Manage materials, drawings, vendors, BOQs, site execution, billing, and client approvals —
                            all in one intelligent workspace.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* 1. Design & BOQ */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 border-b relative overflow-hidden">
                                <div className="absolute inset-x-6 top-6 bg-white rounded-t-xl shadow-lg border border-slate-200 p-4">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="h-2 w-20 bg-slate-200 rounded-full" />
                                        <div className="h-2 w-8 bg-purple-100 rounded-full" />
                                    </div>
                                    <div className="space-y-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex items-center justify-between text-[10px] pb-2 border-b border-slate-50">
                                                <span className="text-slate-500 font-medium">Item 0{i}</span>
                                                <div className="flex gap-2">
                                                    <span className="font-mono text-slate-400">₹12k</span>
                                                    <span className={`font-mono font-bold ${i === 2 ? 'text-red-500' : 'text-slate-700'}`}>
                                                        {i === 2 ? "₹14.2k" : "₹11.8k"}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase mb-3">
                                    Design
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    BOQ & Design Estimation
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                                    Build detailed BOQs, map finishes and materials, and estimate project cost
                                    accurately from the very first concept.
                                </p>
                                <ul className="space-y-2 text-xs text-slate-500 font-medium mt-4">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Finish & material mapping</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Version-controlled drawings</li>
                                </ul>
                            </div>
                        </div>

                        {/* 2. Site Execution */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">

                            <div className="h-48 bg-slate-100 relative overflow-hidden">
                                <div className="absolute left-1/2 -translate-x-1/2 top-6 w-40 h-64 bg-slate-900 rounded-t-[2rem] p-2 shadow-2xl">
                                    <div className="w-full h-full bg-white rounded-t-[1.5rem] overflow-hidden">
                                        <div className="bg-purple-500 h-12 flex items-center justify-center text-white text-[10px] font-bold">
                                            Site Progress
                                        </div>
                                        <div className="p-3 space-y-2">
                                            <div className="flex gap-2 items-start">
                                                <div className="w-6 h-6 rounded bg-slate-100" />
                                                <div className="space-y-1 w-full">
                                                    <div className="h-1.5 w-16 bg-slate-200 rounded-full" />
                                                    <div className="h-1 w-full bg-slate-100 rounded-full" />
                                                </div>
                                            </div>

                                            <div className="p-2 bg-purple-50 rounded-lg border border-purple-100">
                                                <div className="flex justify-between text-[8px] text-purple-800 font-bold mb-1">
                                                    <span>Carpentry Work</span>
                                                    <span>72%</span>
                                                </div>
                                                <div className="w-full bg-purple-200 h-1 rounded-full overflow-hidden">
                                                    <div className="w-[72%] h-full bg-purple-500" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase mb-3">
                                    Execution
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                                    Site Execution Tracking
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                                    Track work progress, material usage, installation updates, and defects directly
                                    from the site engineer’s mobile app.
                                </p>
                                <ul className="space-y-2 text-xs text-slate-500 font-medium mt-4">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />Geo-tagged site photos</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />Snag list management</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. Profitability */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">

                            <div className="h-48 bg-slate-100 flex items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                        <path className="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                        <path className="text-indigo-500 drop-shadow-lg" strokeDasharray="65, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                    </svg>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-2xl font-bold text-slate-800">65%</span>
                                        <span className="text-[9px] text-slate-500 uppercase tracking-wide">Margin Health</span>
                                    </div>

                                    <div className="absolute -right-8 bottom-0 bg-white p-2 rounded-lg shadow-lg border border-slate-100 text-[9px]">
                                        <div className="flex items-center gap-1 text-red-500 font-bold">
                                            <span>⚠</span> Overbudget Risk
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase mb-3">
                                    Finance
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                    Job Costing & Margins
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                                    Track profitability for every room, zone, or project stage. Auto-allocate material,
                                    fabrication, and installation expenses.
                                </p>
                                <ul className="space-y-2 text-xs text-slate-500 font-medium mt-4">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />Live margin dashboards</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />Cost-to-complete forecasting</li>
                                </ul>
                            </div>
                        </div>

                        {/* 4. Vendor Sourcing */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">

                            <div className="h-48 bg-slate-100 p-6 flex flex-col justify-center gap-3">
                                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 text-xs font-bold">W</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-700">Walnut Veneer</div>
                                            <div className="text-[9px] text-slate-400">Preferred Vendor</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-slate-800">₹78 / sq.ft</div>
                                        <div className="text-[8px] text-emerald-500">In Stock</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex justify-between items-center opacity-80">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold">F</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-700">Fabric – Sand Beige</div>
                                            <div className="text-[9px] text-slate-400">Vendor B</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-red-500">Low Stock</div>
                                        <div className="text-[8px] text-slate-400">Lead Time: 7 days</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase mb-3">
                                    Procurement
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                    Vendor Sourcing & Inventory
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                                    Maintain a live material library, track rates from multiple vendors, and manage
                                    PR-PO-GRN workflows with clarity.
                                </p>
                                <ul className="space-y-2 text-xs text-slate-500 font-medium mt-4">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />Material price history</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />Vendor comparison sheets</li>
                                </ul>
                            </div>
                        </div>

                        {/* 5. Client Approvals */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">

                            <div className="h-48 bg-slate-100 relative">
                                <div className="absolute inset-x-8 top-8 bg-white shadow-lg border border-slate-200 rounded-t-lg p-4 rotate-3 group-hover:rotate-0 transition-transform origin-bottom">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="text-[10px] font-mono text-slate-400">DRAW-2024-112</div>
                                        <div className="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded">APPROVED</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-3/4 bg-slate-100 rounded" />
                                        <div className="h-2 w-1/2 bg-slate-100 rounded" />
                                    </div>
                                    <div className="mt-6 pt-4 border-t flex justify-between items-end">
                                        <div>
                                            <div className="text-[8px] text-slate-400">Last Updated</div>
                                            <div className="text-sm font-bold text-slate-800">2 days ago</div>
                                        </div>
                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                                            <div className="w-3 h-3 border-2 border-slate-300 rounded-full border-t-slate-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <span className="inline-block py-1 px-3 rounded-full bg-pink-50 text-pink-600 text-xs font-bold uppercase mb-3">
                                    Approvals
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                                    Drawing & Material Approvals
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                                    Stop chasing clients on WhatsApp. Share drawings, materials, renders, and get
                                    time-stamped approvals in one place.
                                </p>
                                <ul className="space-y-2 text-xs text-slate-500 font-medium mt-4">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500" />Client portal access</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500" />Revision control</li>
                                </ul>
                            </div>
                        </div>

                        {/* 6. Billing & Analytics */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">

                            <div className="h-48 bg-slate-100 p-6 grid grid-cols-2 gap-3">
                                <div className="bg-white p-3 rounded-xl shadow-sm border flex flex-col justify-between">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                                        <svg className="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-[16px] font-bold text-slate-900">₹84L</div>
                                        <div className="text-[9px] text-slate-500">Billed</div>
                                    </div>
                                </div>

                                <div className="bg-white p-3 rounded-xl shadow-sm border flex flex-col justify-between">
                                    <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
                                        <svg className="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-[16px] font-bold text-slate-900">12 Days</div>
                                        <div className="text-[9px] text-slate-500">Avg. Payment Cycle</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <span className="inline-block py-1 px-3 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase mb-3">
                                    Analytics
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                                    Billing & Analytics
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                                    Automate billing based on approved BOQs, monitor project cashflow, and give
                                    management real-time project health dashboards.
                                </p>
                                <ul className="space-y-2 text-xs text-slate-500 font-medium mt-4">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" />Receivable tracking</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" />Profitability dashboards</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Sub-Industries */}
            <section className="relative px-6 py-20 bg-white overflow-hidden">

                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-[25%] -left-[10%] h-[50%] w-[50%] rounded-full bg-purple-500/5 blur-[110px]" />
                    <div className="absolute bottom-[-25%] -right-[15%] h-[45%] w-[45%] rounded-full bg-pink-400/5 blur-[110px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div className="order-2 md:order-1 text-center md:text-left">
                        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-purple-500 mb-3">
                            One platform, many design verticals
                        </p>

                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900">
                            Customize workflows for every interior & architecture segment you serve
                        </h2>

                        <p className="text-sm md:text-base text-slate-500 mb-6">
                            Keep one ERP core and activate segment-specific modules, approvals, and templates for each
                            project type without building everything from scratch.
                        </p>

                        <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2 text-[11px]">
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">Finish Library</span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">Design Workflows</span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">Unified Reporting</span>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {[
                                { name: "Residential Interiors" },
                                { name: "Commercial Offices" },
                                { name: "Retail & Showrooms" },
                                { name: "Hospitality & Restaurants" },
                                { name: "Architectural Projects" },
                                { name: "Civil & Turnkey Contractors" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href="#"
                                    className="rounded-full border border-slate-200 bg-white/70 px-6 py-2 text-xs md:text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 3D Dashboard Component */}
                    <div className="order-1 md:order-2 perspective-[1200px] group/3d">

                        <div className="relative w-full aspect-[4/3] transition-all duration-700 ease-out transform-style-3d group-hover/3d:[transform:rotateY(-12deg)_rotateX(6deg)_scale(1.05)]">

                            <div className="absolute inset-4 bg-purple-500/30 blur-3xl -z-10 transition-all group-hover/3d:bg-purple-500/50" />

                            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden flex flex-col">

                                {/* Header */}
                                <div className="relative z-10 px-6 py-4 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/50">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                        </div>
                                        <span className="text-[10px] font-mono text-slate-400 tracking-widest">
                                            DESIGN_CONSOLE_OS
                                        </span>
                                    </div>

                                    <div className="px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-[9px] font-bold text-purple-400 animate-pulse">
                                        LIVE SYNC
                                    </div>
                                </div>

                                {/* Dashboard Stats */}
                                <div className="relative z-10 p-6 grid grid-cols-2 gap-4 h-full">
                                    {[
                                        { label: "Residential", count: "18", unit: "Projects", color: "from-blue-500 to-indigo-600", icon: "🏠" },
                                        { label: "Commercial", count: "09", unit: "Spaces", color: "from-emerald-500 to-teal-600", icon: "🏢" },
                                        { label: "Hospitality", count: "04", unit: "Properties", color: "from-amber-500 to-orange-600", icon: "🍽️" },
                                        { label: "Retail", count: "11", unit: "Stores", color: "from-rose-500 to-pink-600", icon: "🛍️" },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="group/card relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 transition-all transform-style-3d hover:bg-slate-700/50 hover:border-slate-600 group-hover/3d:[transform:translateZ(30px)] cursor-pointer"
                                            style={{ transitionDelay: `${i * 50}ms` }}
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-sm`}>
                                                    {item.icon}
                                                </div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                            </div>
                                            <div className="space-y-0.5">
                                                <div className="text-2xl font-bold text-white tracking-tight">{item.count}</div>
                                                <div className="text-[10px] uppercase tracking-wider text-slate-400">{item.unit}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative z-10 mt-auto px-6 py-3 border-t border-slate-700/50 bg-slate-900/50 flex justify-between items-center">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-5 h-5 rounded-full bg-slate-600 border border-slate-800" />
                                        ))}
                                    </div>
                                    <div className="text-[9px] text-slate-500 font-mono">ALL SYSTEMS OPERATIONAL</div>
                                </div>

                            </div>

                            <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center group-hover/3d:[transform:translateZ(80px)_rotate(-10deg)]">
                                <span className="text-2xl font-bold text-white">AI</span>
                            </div>

                            <div className="absolute -left-6 top-1/2 w-12 h-24 bg-slate-800/90 backdrop-blur-md border border-slate-600 rounded-xl shadow-xl flex flex-col items-center justify-evenly group-hover/3d:[transform:translateZ(50px)]">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* Client Outcomes */}
            <section className="px-6 py-20 bg-slate-100">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold text-center mb-4 text-slate-900">
                        What interior & architecture teams achieve
                    </h2>

                    <p className="text-center text-sm md:text-base text-slate-600 mb-10 max-w-3xl mx-auto">
                        Give design leads, site teams, vendors, and clients the same real-time view — eliminate
                        guesswork, improve margins, and deliver projects faster with reliability.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                metric: "20–30%",
                                label: "faster project delivery timelines",
                            },
                            {
                                metric: "35–45%",
                                label: "reduction in rework & cost leakage",
                            },
                            {
                                metric: "100%",
                                label: "central visibility across design, sourcing & execution",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                            >
                                <p className="text-3xl font-bold text-purple-500">{item.metric}</p>
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
