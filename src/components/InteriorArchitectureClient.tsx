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
                    <div className="h-full w-full bg-[url('/interior.jpeg')] bg-cover bg-center bg-no-repeat transform scale-105" />
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
                        {[
                            { title: "Design Estimation", desc: "Build detailed BOQs and map finishes from the very first concept." },
                            { title: "Execution Tracking", desc: "Track progress and installation updates from the site engineer’s app." },
                            { title: "Profitability", desc: "Track margins for every room or zone. Auto-allocate material expenses." },
                            { title: "Vendor Sourcing", desc: "Maintain a live material library and track rates from multiple vendors." },
                            { title: "Client Approvals", desc: "Get time-stamped approvals for drawings and renders in one place." },
                            { title: "Billing Analytics", desc: "Automate billing based on approved BOQs and monitor project cashflow." },
                        ].map(m => (
                            <div key={m.title} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{m.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TransformCTA />
        </main>
    );
}
