"use client";

import Link from "next/link";
import ConstructionHologram from "@/components/ConstructionHologram";
import TransformCTA from "@/components/TransformCTA";

export default function InfrastructureClient() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-[url('/site/infra.png')] bg-cover bg-center bg-no-repeat transform scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80" />
                </div>

                <div className="relative z-10 px-4 max-w-5xl mx-auto mt-20">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-orange-400/30 bg-orange-900/30 backdrop-blur-md">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-orange-300">
                            Infrastructure Operations Platform
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Built for scale.</h1>

                    <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        From highways to power grids — manage complex linear assets, heavy machinery, and field crews
                        with one rugged ERP built for scale.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(234,88,12,0.5)]"
                        >
                            <span className="relative z-10">Start Your Transformation</span>
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
                        Built for heavy-duty infrastructure
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Roads & Highways", desc: "Track progress by chainage, manage fleet fuel and maintenance, and control subcontractor billing." },
                            { title: "Power & Utilities", desc: "Manage transmission line towers, substation assets, and cable drums across hundreds of kilometers." },
                            { title: "Water & Irrigation", desc: "Synchronize pipe procurement with trench licensing and laying schedules to avoid blockages." },
                        ].map((item) => (
                            <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all">
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="solutions" className="px-6 py-24 bg-slate-50 overflow-hidden">
                <div className="mx-auto max-w-7xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16">ERP modules for the field</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Linear Tracking", desc: "Visualize project completion by kilometers. Map activities to specific coordinates." },
                            { title: "Fleet Management", desc: "Monitor fuel consumption and maintenance schedules for heavy equipment." },
                            { title: "GIS Integration", desc: "Overlay survey data and drone imagery onto your master schedule." },
                            { title: "Asset Management", desc: "Track high-value inventory spread across laydown yards and active sites." },
                            { title: "Field Service", desc: "Digitize maintenance logs and assign tasks to field crews via mobile app." },
                            { title: "Compliance", desc: "Enforce safety protocols with mandatory digital checklists and incident tracking." },
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
