"use client";

import Link from "next/link";
import ConstructionHologram from "@/components/ConstructionHologram";
import TransformCTA from "@/components/TransformCTA";

export default function InteriorArchitectureClient() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-[url('/interior-design.jpeg')] bg-cover bg-center bg-no-repeat transform scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80" />
                </div>

                <div className="relative z-10 px-4 max-w-5xl mx-auto mt-20">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-900/30 backdrop-blur-md">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-300">
                            Interior & Architecture Workflow OS
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
                        Design Better. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-500">
                            Deliver Faster.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        From concept to handover — unify your design, sourcing, costing, and site execution with
                        real-time project intelligence.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold transition-all shadow-lg"
                        >
                            Start Your Transformation
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
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-slate-900">
                        Built for every space you design
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Interior Studios", desc: "Centralize concepts, moodboards, drawings, and approvals in one client-friendly portal." },
                            { title: "Architecture Firms", desc: "Bring BOQs, timelines, drawings, and contracting teams together with synced project data." },
                            { title: "Turnkey Contractors", desc: "Control procurement, site progress, vendor payments, and installation checklists with accuracy." },
                        ].map((item) => (
                            <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all">
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{item.title}</h3>
                                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="solutions" className="px-6 py-24 bg-slate-50 overflow-hidden">
                <div className="mx-auto max-w-7xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16">Workflow Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Design & Estimation */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-purple-50 border-b border-purple-100 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-x-8 top-8 bottom-0 bg-white shadow-xl border border-slate-100 p-4 rotate-2 group-hover:rotate-0 transition-all duration-300 rounded-t-lg">
                                    <div className="flex justify-between items-center mb-3 border-b border-slate-50 pb-2">
                                        <div className="text-[10px] font-bold text-purple-900">MASTER_BEDROOM_V2</div>
                                        <div className="text-[9px] text-slate-400">Rev 03</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[9px] text-slate-600">
                                            <span>Flooring (Italian Marble)</span>
                                            <span className="font-mono">₹450/sqft</span>
                                        </div>
                                        <div className="flex justify-between text-[9px] text-slate-600">
                                            <span>Wall Paneling</span>
                                            <span className="font-mono">₹12k/unit</span>
                                        </div>
                                        <div className="flex justify-between text-[9px] text-slate-600">
                                            <span>False Ceiling</span>
                                            <span className="font-mono">₹85/sqft</span>
                                        </div>
                                        <div className="mt-2 pt-2 border-t border-slate-100 flex justify-between font-bold text-[10px] text-purple-700">
                                            <span>Total Est.</span>
                                            <span>₹ 4.25 Lacs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Pre-Sales
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                                    Design Estimation & BOQ
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Create accurate estimates directly from design concepts. Link visual moodboards to cost line items.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />Room-wise estimates</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />Standard rate cards</li>
                                </ul>
                            </div>
                        </div>

                        {/* 2. Sourcing & Material Library */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 p-6 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-3 w-full max-w-[80%]">
                                    <div className="aspect-square bg-white rounded-lg shadow-sm p-1 border border-slate-200">
                                        <div className="w-full h-[70%] bg-amber-100 rounded mb-1" />
                                        <div className="bg-slate-100 h-1.5 w-1/2 rounded-full" />
                                    </div>
                                    <div className="aspect-square bg-white rounded-lg shadow-sm p-1 border border-slate-200">
                                        <div className="w-full h-[70%] bg-blue-100 rounded mb-1" />
                                        <div className="bg-slate-100 h-1.5 w-1/2 rounded-full" />
                                    </div>
                                    <div className="aspect-square bg-white rounded-lg shadow-sm p-1 border border-slate-200">
                                        <div className="w-full h-[70%] bg-emerald-100 rounded mb-1" />
                                        <div className="bg-slate-100 h-1.5 w-1/2 rounded-full" />
                                    </div>
                                    <div className="aspect-square flex items-center justify-center bg-slate-50 rounded-lg border border-dashed border-slate-300 text-slate-400 text-xs">
                                        +240
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-amber-50 text-amber-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Sourcing
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                                    Vendor & Material Library
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Maintain a digital library of finishes, furniture, and fittings with live vendor pricing and specs.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Catalog management</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Vendor comparison</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. Project Management */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-50 border-b border-slate-100 relative overflow-hidden flex flex-col items-center justify-center">
                                <div className="w-4/5 bg-white rounded-xl shadow-lg border border-slate-100 p-3">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-xs">JD</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-800">Site Visit: Villa 102</div>
                                            <div className="text-[9px] text-slate-400">10:00 AM - Today</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="px-2 py-1 bg-green-50 text-green-600 text-[8px] font-bold rounded">False Ceiling Check</div>
                                        <div className="px-2 py-1 bg-blue-50 text-blue-600 text-[8px] font-bold rounded">Paint Selection</div>
                                    </div>
                                </div>
                                <div className="w-3/5 bg-white/50 rounded-xl border border-slate-100 p-2 mt-2 blur-[1px]">
                                    <div className="h-2 w-full bg-slate-200 rounded mb-2"></div>
                                    <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Execution
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                    Site Project Management
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Track site progress, manageable snags, and coordinate between design studio and site teams.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Snag list automation</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Daily site updates</li>
                                </ul>
                            </div>
                        </div>

                        {/* 4. Client Portal & Approvals */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-800 flex items-center justify-center overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 to-pink-900/50" />
                                <div className="relative z-10 w-32 h-40 bg-white rounded shadow-2xl p-2 transform rotate-3">
                                    <div className="w-full h-20 bg-slate-200 rounded mb-2 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-[8px] text-slate-500">RENDER_FILE.JPG</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="h-1 w-full bg-slate-100 rounded" />
                                        <div className="h-1 w-3/4 bg-slate-100 rounded" />
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <div className="px-2 py-0.5 bg-green-500 text-white text-[8px] font-bold rounded-full shadow-lg">APPROVED</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-pink-50 text-pink-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Collaboration
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors mb-2">
                                    Client & Approval Portal
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Get digital sign-offs on designs and quotes. Keep clients updated without endless WhatsApp threads.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500" />Version control</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500" />Time-stamped approvals</li>
                                </ul>
                            </div>
                        </div>

                        {/* 5. Profitability & Billing */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 p-6 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="relative w-24 h-24 mx-auto mb-2">
                                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                            <path className="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" stroke="currentColor" />
                                            <path className="text-emerald-500" strokeDasharray="30, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" stroke="currentColor" />
                                            <path className="text-purple-500" strokeDasharray="50, 100" strokeDashoffset="-30" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" stroke="currentColor" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                                            <span className="text-xl font-bold text-slate-900">22%</span>
                                            <span className="text-[8px] text-slate-400">Margin</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-center text-[8px] font-bold">
                                        <div className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-emerald-500" />Material</div>
                                        <div className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-purple-500" />Labor</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Finance
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                                    Financial Control
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Monitor project profitability in real-time. Link expenses to specific budget heads and track variations.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Budget vs Actuals</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Payment milestones</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <TransformCTA />
        </main>
    );
}
