"use client";

import Link from "next/link";
import ConstructionHologram from "@/components/ConstructionHologram";
import TransformCTA from "@/components/TransformCTA";

export default function ManufacturingClient() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-[url('/manufacturing.jpeg')] bg-cover bg-center bg-no-repeat transform scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80" />
                </div>

                {/* Centered content */}
                <div className="relative z-10 px-4 max-w-5xl mx-auto mt-20">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-900/30 backdrop-blur-md">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-300">
                            Manufacturing ERP Platform
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-2xl">
                        Manufacture Smarter. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                            Scale Faster.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        Digitize production, procurement, quality, and inventory with real-time factory intelligence.
                        One platform for planning, execution, costing, and customer fulfilment.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                        >
                            <span className="relative z-10">Start Your Transformation</span>
                        </Link>
                        <Link
                            href="#solutions"
                            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all hover:border-white/40"
                        >
                            Explore Modules
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
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-slate-900">
                        Built for every manufacturing workflow
                    </h2>
                    <p className="text-center text-sm md:text-base text-slate-500 mb-12 max-w-2xl mx-auto">
                        Whether you run discrete, process, or contract manufacturing — unify your production,
                        planning, QC, costing, and dispatch operations in one ERP.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Discrete Manufacturers",
                                pain: "Complex assemblies and multi-level BOMs slow production.",
                                desc: "Streamline MRP, shop floor execution, and traceability from raw material to dispatch.",
                                bullets: [
                                    "Multi-level BOMs & routing",
                                    "Real-time production tracking",
                                ],
                            },
                            {
                                title: "Process Manufacturers",
                                pain: "Batch variations and QC failures disrupt consistency.",
                                desc: "Manage recipes, batch QC, traceability, and yield calculations with precision.",
                                bullets: [
                                    "Batch & formula management",
                                    "In-process QC automation",
                                ],
                            },
                            {
                                title: "Contract / Job-Work Units",
                                pain: "Low visibility on job costing & material consumption.",
                                desc: "Track issued materials, WIP, and job-wise profitability effortlessly.",
                                bullets: [
                                    "Job work order tracking",
                                    "Material issue/return control",
                                ],
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-cyan-200 transition-all"
                            >
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600 mb-2">
                                    {item.pain}
                                </p>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>

                                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                                    What you get
                                </p>
                                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                                    {item.bullets.map((point) => (
                                        <li key={point} className="flex gap-2">
                                            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-500" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manufacturing Feature Modules */}
            <section id="solutions" className="px-6 py-24 bg-slate-50 overflow-hidden">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            ERP modules built for modern manufacturing
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Plan, execute, track, and optimize — gain real-time visibility into production, inventory,
                            quality, costing, and supply chain operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Production Planning */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 border-b relative overflow-hidden">
                                <div className="absolute inset-x-6 top-6 bg-white rounded-t-xl shadow-lg border border-slate-200 p-4">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="h-2 w-24 bg-slate-200 rounded-full" />
                                        <div className="h-2 w-10 bg-cyan-100 rounded-full" />
                                    </div>
                                    <div className="space-y-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex items-center justify-between text-[10px] pb-2 border-b border-slate-50">
                                                <span className="text-slate-500 font-medium">Work Order #{i}</span>
                                                <span className={`font-mono font-bold ${i === 2 ? 'text-red-500' : 'text-slate-700'}`}>
                                                    {i === 2 ? "Delayed" : "On-Time"}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase mb-3">
                                    Planning
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    Production Planning & MRP
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Generate MRP, schedule work orders, and plan machine capacity for optimal throughput.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />MRP & MPS workflows</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Machine load planning</li>
                                </ul>
                            </div>
                        </div>

                        {/* Quality Control */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 border-b relative overflow-hidden">
                                <div className="absolute left-1/2 -translate-x-1/2 top-6 w-40 h-64 bg-slate-900 rounded-t-[2rem] p-2 shadow-2xl">
                                    <div className="w-full h-full bg-white rounded-t-[1.5rem] overflow-hidden">
                                        <div className="bg-cyan-500 h-12 flex items-center justify-center text-white text-[10px] font-bold">
                                            QC Check Report
                                        </div>
                                        <div className="p-3 space-y-2">
                                            <div className="flex justify-between text-[10px] text-slate-600">
                                                <span>Batch 2024-09A</span>
                                                <span className="text-cyan-500 font-bold">PASS</span>
                                            </div>
                                            <div className="h-1 w-full bg-slate-200 rounded-full">
                                                <div className="h-full bg-cyan-500 w-[85%] rounded-full" />
                                            </div>
                                            <p className="text-[9px] text-slate-500">85% compliance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold uppercase mb-3">
                                    Quality
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                                    Quality Control & Compliance
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Track incoming, in-process, and final QC with automated rejection workflows.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />Batch & lot traceability</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />QC automation rules</li>
                                </ul>
                            </div>
                        </div>

                        {/* Inventory & Procurement */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 p-6 flex flex-col justify-center gap-3">
                                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex justify-between items-center">
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-700">Steel Rod 12mm</div>
                                        <div className="text-[9px] text-slate-400">Warehouse A</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-blue-600">5.4T</div>
                                        <div className="text-[8px] text-emerald-500">In Stock</div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex justify-between items-center opacity-80">
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-700">Chemical Solvent B</div>
                                        <div className="text-[9px] text-slate-400">Tank 03</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-red-500">Low Stock</div>
                                        <div className="text-[8px] text-slate-400">Reorder Level: 120L</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase mb-3">
                                    Inventory
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                    Inventory & Procurement Control
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Manage multi-location warehouses, reorder levels, and vendor rate contracts.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />Stock audits & GRNs</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />Vendor pricing history</li>
                                </ul>
                            </div>
                        </div>

                        {/* Job Costing */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 flex items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                        <path className="text-slate-200" d="M18 2.0845a 16 16 0 1 1 0 32a 16 16 0 1 1 0 -32" fill="none" stroke="currentColor" strokeWidth="4" />
                                        <path className="text-indigo-500" strokeDasharray="72, 100" d="M18 2.0845a 16 16 0 1 1 0 32a 16 16 0 1 1 0 -32" fill="none" strokeWidth="4" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-2xl font-bold text-slate-800">72%</span>
                                        <span className="text-[9px] text-slate-500 uppercase">Cost Efficiency</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase mb-3">
                                    Finance
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                    Job Costing & Profitability
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Compare planned vs. actual costs for materials, labor, and machine time.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />Cost leakage detection</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />Profitability dashboards</li>
                                </ul>
                            </div>
                        </div>

                        {/* Billing & Analytics */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 p-6 grid grid-cols-2 gap-3">
                                <div className="bg-white p-3 rounded-xl shadow-sm border flex flex-col justify-between">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                                        <svg className="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-[16px] font-bold text-slate-900">₹2.4Cr</div>
                                        <div className="text-[9px] text-slate-500">Sales</div>
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-xl shadow-sm border flex flex-col justify-between">
                                    <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
                                        <svg className="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeWidth="2" d="M12 8v4l3 3m6-3a 9 9 0 1 1 -18 0a 9 9 0 0 1 18 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-[16px] font-bold text-slate-900">9 Days</div>
                                        <div className="text-[9px] text-slate-500">Avg. Collection</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase mb-3">
                                    Analytics
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                                    Billing & Dashboards
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Automate billing from production and dispatch activities while monitoring cashflow health.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" />Real-time KPIs</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" />MIS reports</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub-Industries */}
            <section className="relative px-6 py-20 bg-white overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-[25%] -left-[10%] h-[50%] w-[50%] rounded-full bg-blue-400/5 blur-[110px]" />
                    <div className="absolute bottom-[-25%] -right-[15%] h-[45%] w-[45%] rounded-full bg-cyan-400/5 blur-[110px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1 text-center md:text-left">
                        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-cyan-500 mb-3">
                            One platform, many production types
                        </p>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900">
                            Configure workflows for every manufacturing vertical you operate in
                        </h2>
                        <p className="text-sm md:text-base text-slate-500 mb-6">
                            One ERP core, multiple verticals — activate production rules, QC norms,
                            BOM structures, and costing models unique to each product line.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {[
                                "Automobile Components",
                                "Food & Beverages",
                                "Chemicals & Plastics",
                                "Engineering Goods",
                                "Pharmaceuticals",
                                "Textiles & Garments",
                            ].map((name) => (
                                <Link
                                    key={name}
                                    href="#"
                                    className="rounded-full border border-slate-200 bg-white/70 px-6 py-2 text-xs md:text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all font-bold"
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="perspective-[1200px] group/3d order-1 md:order-2">
                        <div className="relative w-full aspect-[4/3] transition-all transform-style-3d group-hover:rotate-x-12">
                            <div className="absolute inset-0 bg-slate-900/90 rounded-2xl shadow-2xl p-6 border border-slate-700">
                                <div className="text-[10px] font-mono text-cyan-400 mb-4 tracking-widest uppercase">Factory_Monitor.v1</div>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Work Orders", count: "42" },
                                        { label: "Efficiency", count: "87%" },
                                        { label: "Low Stock", count: "11" },
                                        { label: "QC Pass", count: "96%" },
                                    ].map(s => (
                                        <div key={s.label} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                            <div className="text-2xl font-bold text-white">{s.count}</div>
                                            <div className="text-[9px] text-slate-400 uppercase tracking-tighter">{s.label}</div>
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
                        What manufacturers achieve with our ERP
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { metric: "20–35%", label: "increase in production efficiency" },
                            { metric: "30–50%", label: "reduction in material wastage" },
                            { metric: "100%", label: "traceability across batches" },
                        ].map((item) => (
                            <div key={item.label} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                                <p className="text-3xl font-bold text-cyan-500">{item.metric}</p>
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
