"use client";

import Link from "next/link";
import ConstructionHologram from "@/components/ConstructionHologram";
import TransformCTA from "@/components/TransformCTA";

export default function ConstructionClient() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-[url('/construction.jpeg')] bg-cover bg-center bg-no-repeat transform scale-105 z-index-1" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80" />
                </div>

                {/* Centered content */}
                <div className="relative z-10 px-4 max-w-5xl mx-auto mt-20">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal-400/30 bg-teal-900/30 backdrop-blur-md">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal-300">
                            Next-Gen Construction ERP
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-2xl">
                        Build Smarter. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
                            Build Faster.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        From the dusty ground to the boardroom, unify your entire construction lifecycle with AI-driven insights and real-time control.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-full font-bold shadow-[0_0_20px_rgba(20,184,166,0.5)] hover:shadow-[0_0_30px_rgba(20,184,166,0.7)] transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10">Start Your Transformation</span>
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
                <ConstructionHologram />
            </div>

            {/* Who It's For */}
            <section className="px-6 py-20 bg-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-slate-900">
                        Built for every corner of construction
                    </h2>
                    <p className="text-center text-sm md:text-base text-slate-500 mb-12 max-w-2xl mx-auto">
                        From land acquisition to final handover, the platform mirrors how real construction
                        teams plan, build, and bill — not how generic ERPs think they should.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Real Estate Developers",
                                pain: "Juggling multiple towers, cashflows, and compliance.",
                                desc: "Stay on top of unit inventory, project cashflow, and RERA-ready documentation across your entire portfolio.",
                                bullets: [
                                    "Tower / floor / unit-wise inventory & pricing",
                                    "Collection schedules linked to construction milestones",
                                ],
                            },
                            {
                                title: "Infrastructure & EPC Companies",
                                pain: "Complex BOQs, scattered sites, and delayed updates.",
                                desc: "Standardize BOQs, connect site execution with procurement, and keep infra projects on schedule and on budget.",
                                bullets: [
                                    "Multi-location site and yard visibility",
                                    "Centralized procurement, logistics, and GRNs",
                                ],
                            },
                            {
                                title: "Contractors & Sub-Contractors",
                                pain: "Thin margins and zero real-time job visibility.",
                                desc: "Track labor, materials, and equipment by job so every RA bill and variation is backed by accurate site data.",
                                bullets: [
                                    "Work-order, RA bill, and retention tracking",
                                    "Resource utilization and job-wise profitability",
                                ],
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300"
                            >
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-500 mb-2">
                                    {item.pain}
                                </p>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>

                                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                                    What you get
                                </p>
                                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                                    {item.bullets.map((point) => (
                                        <li key={point} className="flex gap-2">
                                            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-teal-500" />
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
                            Construction‑specific ERP modules
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Build your digital control room. From the site engineer's mobile to the CFO's dashboard,
                            connect every stakeholder with real-time data and actionable insights.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Budgeting & BOQ */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors">
                                <div className="absolute inset-x-6 top-6 bottom-0 bg-white rounded-t-xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border border-slate-200 border-b-0 p-4">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="h-2 w-20 bg-slate-200 rounded-full" />
                                        <div className="h-2 w-8 bg-emerald-100 rounded-full" />
                                    </div>
                                    <div className="space-y-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center justify-between text-[10px] border-b border-slate-50 pb-2">
                                                <span className="text-slate-500 font-medium">Activity 0{i}</span>
                                                <div className="flex gap-2">
                                                    <span className="font-mono text-slate-400">$12k</span>
                                                    <span className={`font-mono font-bold ${i === 2 ? 'text-red-500' : 'text-slate-700'}`}>
                                                        {i === 2 ? '$14.2k' : '$11.8k'}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Planning
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        Project Budgeting & BOQ
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Import BOQs from Excel, lock budgets by activity, and track planned vs. actual costs in real-time. Prevent overruns before they happen.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Version controlled BOQs</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Rate analysis & estimation</li>
                                </ul>
                            </div>
                        </div>

                        {/* 2. Site Tracking */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors">
                                <div className="absolute left-1/2 -translate-x-1/2 top-6 w-40 h-64 bg-slate-900 rounded-t-[2rem] p-2 shadow-2xl">
                                    <div className="w-full h-full bg-white rounded-t-[1.5rem] overflow-hidden relative">
                                        <div className="bg-teal-500 h-12 w-full flex items-center justify-center text-white text-[10px] font-bold">
                                            Daily Progress Report
                                        </div>
                                        <div className="p-3 space-y-2">
                                            <div className="flex gap-2 items-start">
                                                <div className="w-6 h-6 rounded bg-slate-100 shrink-0" />
                                                <div className="space-y-1 w-full">
                                                    <div className="h-1.5 w-16 bg-slate-200 rounded-full" />
                                                    <div className="h-1 w-full bg-slate-100 rounded-full" />
                                                </div>
                                            </div>
                                            <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100">
                                                <div className="flex justify-between text-[8px] text-emerald-800 font-bold mb-1">
                                                    <span>Concrete Pour</span>
                                                    <span>85%</span>
                                                </div>
                                                <div className="w-full bg-emerald-200 h-1 rounded-full overflow-hidden">
                                                    <div className="w-[85%] h-full bg-emerald-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Execution
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                                        Site Progress Tracking
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Empower site engineers to capture progress, labor, and issues directly from the mobile app. No more delayed DPRs.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500" />Geo-tagged photos & updates</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500" />Offline mode support</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. Job Costing */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors flex items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                        <path className="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                        <path className="text-indigo-500 drop-shadow-lg" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                        <span className="text-2xl font-bold text-slate-800">75%</span>
                                        <span className="text-[9px] text-slate-500 uppercase tracking-wide">Budget Used</span>
                                    </div>
                                    <div className="absolute -right-8 bottom-0 bg-white p-2 rounded-lg shadow-lg border border-slate-100 text-[9px]">
                                        <div className="flex items-center gap-1 text-red-500 font-bold">
                                            <span>⚠</span> Overrun Risk
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
                                        Job Costing & Margins
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Track profitability at a project, phase, or activity level. Auto-allocate material, labor, and overhead costs.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />Real-time margin analysis</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />Cost-to-complete projections</li>
                                </ul>
                            </div>
                        </div>

                        {/* 4. Procurement */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors p-6 flex flex-col justify-center gap-3">
                                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 text-xs font-bold">C</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-700">Cement (PPC)</div>
                                            <div className="text-[9px] text-slate-400">Warehouse A</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-slate-800">450 Bags</div>
                                        <div className="text-[8px] text-emerald-500">In Stock</div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex justify-between items-center opacity-80">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold">S</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-700">Steel 12mm</div>
                                            <div className="text-[9px] text-slate-400">Site B</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-red-500">Low Stock</div>
                                        <div className="text-[8px] text-slate-400">Reorder Lvl: 2T</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Supply Chain
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                        Procurement & Inventory
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Streamline PR-PO-GRN cycles. Gain total visibility into stock levels across all your sites and warehouses.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />Multi-level approval workflows</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />Vendor portal integration</li>
                                </ul>
                            </div>
                        </div>

                        {/* 5. Subcontractors */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors">
                                <div className="absolute inset-x-8 top-8 bottom-0 bg-white shadow-lg border border-slate-200 rounded-t-lg p-4 rotate-3 group-hover:rotate-0 transition-transform duration-300 origin-bottom">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="text-[10px] font-mono text-slate-400">WO-2024-089</div>
                                        <div className="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded">APPROVED</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-3/4 bg-slate-100 rounded" />
                                        <div className="h-2 w-1/2 bg-slate-100 rounded" />
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-end">
                                        <div>
                                            <div className="text-[8px] text-slate-400">Total Amount</div>
                                            <div className="text-sm font-bold text-slate-800">$45,200</div>
                                        </div>
                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                                            <div className="w-3 h-3 border-2 border-slate-300 rounded-full border-t-slate-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Contracts
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                                        Subcontractor Management
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Manage work orders, RA bills, and payments seamlessly. Automate retention, taxes, and penalty calculations.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />Automated payment certificates</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />Compliance tracking</li>
                                </ul>
                            </div>
                        </div>

                        {/* 6. Billing & Dashboards */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors p-6">
                                <div className="grid grid-cols-2 gap-3 h-full">
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                        </div>
                                        <div>
                                            <div className="text-[16px] font-bold text-slate-900">$1.2M</div>
                                            <div className="text-[9px] text-slate-500">Revenue</div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
                                        <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <div>
                                            <div className="text-[16px] font-bold text-slate-900">14 Days</div>
                                            <div className="text-[9px] text-slate-500">Avg. DSO</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Analytics
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                                        Billing & Analytics
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Generate accurate client invoices based on certified measurements. Monitor cashflow and project health with live dashboards.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" />Cashflow forecasting</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" />Executive KPI reports</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Sub-Industries */}
            <section className="relative px-6 py-20 bg-white overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-[25%] -left-[10%] h-[50%] w-[50%] rounded-full bg-teal-500/5 blur-[110px]" />
                    <div className="absolute bottom-[-25%] -right-[15%] h-[45%] w-[45%] rounded-full bg-emerald-400/5 blur-[110px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1 text-center md:text-left">
                        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-teal-500 mb-3">
                            One backbone, many segments
                        </p>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900">
                            Configure once, roll out across every construction business you run
                        </h2>
                        <p className="text-sm md:text-base text-slate-500 mb-6">
                            Keep one ERP core and switch on segment‑specific workflows, reports, and master data
                            so real estate, infra, and contractor teams all work on the same source of truth.
                        </p>

                        <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2 text-[11px]">
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                                Shared masters
                            </span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                                Segment workflows
                            </span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                                Unified reporting
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {[
                                { name: "Residential", slug: "" },
                                { name: "Commercial", slug: "" },
                                { name: "Industrial", slug: "" },
                                { name: "Institutional", slug: "" },
                                { name: "General Contractors", slug: "contractors" },
                                { name: "Specialist Contractors", slug: "contractors" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.slug ? `/industries/${item.slug}` : "#"}
                                    className="rounded-full border border-slate-200 bg-white/70 px-6 py-2 text-xs md:text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm hover:shadow-md font-bold"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 md:order-2 perspective-[1200px] group/3d">
                        <div className="relative w-full aspect-[4/3] transition-all duration-700 ease-out transform-style-3d group-hover/3d:[transform:rotateY(-12deg)_rotateX(6deg)_scale(1.05)]">
                            <div className="absolute inset-4 bg-teal-500/30 blur-3xl -z-10 transition-all duration-500 group-hover/3d:bg-teal-500/50" />
                            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden flex flex-col">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                                <div className="relative z-10 px-6 py-4 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/50">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                        </div>
                                        <span className="text-[10px] font-mono text-slate-400 tracking-widest">COMMAND_CENTER_OS</span>
                                    </div>
                                    <div className="px-2 py-1 rounded bg-teal-500/10 border border-teal-500/20 text-[9px] font-bold text-teal-400 animate-pulse">
                                        LIVE SYNC
                                    </div>
                                </div>
                                <div className="relative z-10 p-6 grid grid-cols-2 gap-4 h-full content-start">
                                    {[
                                        { label: "Real Estate", count: "12", unit: "Projects", color: "from-blue-500 to-indigo-600", icon: "🏢" },
                                        { label: "Infrastructure", count: "07", unit: "Active Sites", color: "from-emerald-500 to-teal-600", icon: "🏗️" },
                                        { label: "Industrial", count: "05", unit: "Warehouses", color: "from-amber-500 to-orange-600", icon: "🏭" },
                                        { label: "Highways", count: "09", unit: "Packages", color: "from-rose-500 to-pink-600", icon: "🛣️" },
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
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
                                            </div>
                                            <div className="space-y-0.5">
                                                <div className="text-2xl font-bold text-white tracking-tight">{item.count}</div>
                                                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">{item.unit}</div>
                                            </div>
                                            <div className="absolute bottom-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                                <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="relative z-10 mt-auto px-6 py-3 border-t border-slate-700/50 bg-slate-900/50 flex justify-between items-center">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => <div key={i} className="w-5 h-5 rounded-full border border-slate-800 bg-slate-600" />)}
                                    </div>
                                    <div className="text-[9px] text-slate-500 font-mono">
                                        ALL SYSTEMS OPERATIONAL
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl shadow-2xl z-20 flex items-center justify-center transform-style-3d transition-all duration-700 group-hover/3d:[transform:translateZ(80px)_rotate(-10deg)]">
                                <span className="text-2xl font-bold text-white">AI</span>
                            </div>
                            <div className="absolute -left-6 top-1/2 w-12 h-24 bg-slate-800/90 backdrop-blur-md border border-slate-600 rounded-xl shadow-xl z-20 flex flex-col items-center justify-evenly transform-style-3d transition-all duration-700 group-hover/3d:[transform:translateZ(50px)]">
                                {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-500" />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Outcomes */}
            <section className="px-6 py-20 bg-slate-100">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold text-center mb-4 text-slate-900">
                        What construction teams achieve with our ERP
                    </h2>
                    <p className="text-center text-sm md:text-base text-slate-600 mb-10 max-w-3xl mx-auto">
                        Go beyond basic accounting. Give your project managers, site engineers, and finance teams
                        the same live project data, so everyone can act before issues turn into overruns.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                metric: "15–25%",
                                label: "reduction in project cost overruns",
                            },
                            {
                                metric: "30–40%",
                                label: "faster billing & collections cycles",
                            },
                            {
                                metric: "100%",
                                label: "visibility across projects, sites, and teams",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                            >
                                <p className="text-3xl font-bold text-emerald-500">{item.metric}</p>
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
