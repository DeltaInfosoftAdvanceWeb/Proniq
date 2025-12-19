"use client";

import Link from "next/link";
import EngineeringHologram from "@/components/EngineeringHologram";
import TransformCTA from "@/components/TransformCTA";

export default function EngineeringClient() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-[url('/site/engineering.png')] bg-cover bg-center bg-no-repeat transform scale-105 z-index-1" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80" />
                </div>

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
                <EngineeringHologram />
            </div>

            {/* Who It's For */}
            <section className="px-6 py-20 bg-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-slate-900">
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
                                <ul className="mt-4 space-y-1 text-xs text-slate-600">
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
                        {/* Modules logic here (simplified for space) */}
                        {[
                            { title: "Project Management", icon: "📊", desc: "Track milestones, deliverables, and dependencies with Gantt and Kanban visualizations." },
                            { title: "Resource Planning", icon: "👥", desc: "Optimize team utilization and forecast capacity to prevent project bottlenecks." },
                            { title: "Time & Expense", icon: "⏱️", desc: "Accurately capture billable hours and expenses with automated approval workflows." },
                            { title: "Document Control", icon: "📂", desc: "Manage revision history and transmittals to ensure everyone uses the latest design." },
                            { title: "Quality Assurance", icon: "✅", desc: "Track non-conformances and manage corrective actions to meet strict standards." },
                            { title: "Financial Analytics", icon: "💰", desc: "Monitor project profitability and cash flow with real-time revenue recognition." },
                        ].map(m => (
                            <div key={m.title} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all">
                                <div className="text-3xl mb-4">{m.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{m.title}</h3>
                                <p className="text-slate-600 text-sm">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sub-Industries */}
            <section className="relative px-6 py-20 bg-white overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-[25%] -left-[10%] h-[50%] w-[50%] rounded-full bg-indigo-500/5 blur-[110px]" />
                    <div className="absolute bottom-[-25%] -right-[15%] h-[45%] w-[45%] rounded-full bg-purple-400/5 blur-[110px]" />
                </div>
                <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500 mb-3">One platform, many disciplines</p>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900">Engineering excellence across every team</h2>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
                            {["Civil", "Mechanical", "Electrical", "Structural", "Environmental"].map(n => (
                                <span key={n} className="rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-bold text-slate-700 shadow-sm">{n}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700">
                        <div className="text-indigo-400 font-mono text-[10px] mb-4">ENGINEERING_OS.X</div>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <div className={`h-full bg-indigo-500 w-[${30 * i}%]`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 bg-slate-100">
                <div className="mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl font-semibold mb-10 text-slate-900">Engineering Outcomes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { metric: "20%", label: "increase in billable utilization" },
                            { metric: "15%", label: "reduction in project overruns" },
                            { metric: "30%", label: "faster design approval cycles" },
                        ].map(item => (
                            <div key={item.label} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
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
