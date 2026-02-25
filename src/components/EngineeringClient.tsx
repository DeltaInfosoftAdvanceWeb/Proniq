"use client";

import Link from "next/link";
import EngineeringHologram from "@/components/EngineeringHologram";
import TransformCTA from "@/components/TransformCTA";

export default function EngineeringClient() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-[url('/Engin-eering.jpeg')] bg-cover bg-center bg-no-repeat transform scale-105 z-index-1" />
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
                        {/* 1. Project Management (Gantt) */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-50 border-b border-slate-100 flex flex-col justify-center p-6">
                                <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-3 space-y-3">
                                    <div>
                                        <div className="flex justify-between text-[9px] mb-1">
                                            <span className="font-bold text-slate-700">Design Phase</span>
                                            <span className="text-slate-400">Sep</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full">
                                            <div className="h-full bg-indigo-500 w-3/4 rounded-full" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[9px] mb-1">
                                            <span className="font-bold text-slate-700">Engineering</span>
                                            <span className="text-slate-400">Oct</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full relative">
                                            <div className="absolute left-1/4 h-full bg-blue-400 w-1/2 rounded-full" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[9px] mb-1">
                                            <span className="font-bold text-slate-700">Procurement</span>
                                            <span className="text-slate-400">Nov</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full relative">
                                            <div className="absolute left-1/2 h-full bg-slate-300 w-1/3 rounded-full border border-dashed border-slate-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Planning
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                                    Project Planning & Gantt
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Master scheduling with dependencies, critical path analysis, and baseline vs actual tracking.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />One-click schedule updates</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />Resource loading heatmaps</li>
                                </ul>
                            </div>
                        </div>

                        {/* 2. Resource Management */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 p-6 flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-2 w-full">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="bg-white rounded-xl p-2 text-center shadow-sm border border-slate-200">
                                            <div className="w-8 h-8 mx-auto rounded-full bg-slate-100 mb-2 flex items-center justify-center text-xs">
                                                {i === 1 ? '👨‍💻' : i === 2 ? '👩‍🔧' : '👨‍🏭'}
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className={`h-full ${i === 2 ? 'bg-red-500' : 'bg-green-500'} w-[${i === 2 ? '95%' : '60%'}]`} />
                                            </div>
                                            <div className="text-[8px] mt-1 font-bold text-slate-500">{i === 2 ? 'Overloaded' : 'Optimal'}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase mb-3 w-fit">
                                    People
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                    Resource Optimization
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Balance workloads across teams and projects. Forecast hiring needs based on upcoming project pipeline.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Skill matrix mapping</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Utilization reports</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. Timesheets & Expenses */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-50 flex items-center justify-center relative overflow-hidden">
                                <div className="w-32 h-32 rounded-full border-4 border-slate-200 flex items-center justify-center relative bg-white shadow-sm">
                                    <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent rotate-45" />
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-slate-800">38:40</div>
                                        <div className="text-[9px] text-slate-500 uppercase">Hrs Logged</div>
                                    </div>
                                    <div className="absolute -bottom-2 bg-green-100 text-green-700 text-[8px] font-bold px-2 py-0.5 rounded-full">Submitted</div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Operations
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors mb-2">
                                    Timesheets & Expenses
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Simplest way to capture billable hours and reimbursed expenses. Mobile-first entry for field teams.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-500" />Multi-level approvals</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-500" />Policy compliance checks</li>
                                </ul>
                            </div>
                        </div>

                        {/* 4. Document Control */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-800 p-6 flex flex-col justify-center">
                                <div className="space-y-2">
                                    <div className="bg-white/10 p-2 rounded flex items-center gap-3 backdrop-blur-sm border border-white/5">
                                        <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-[10px] text-white font-bold">DWG</div>
                                        <div className="flex-1">
                                            <div className="text-[10px] text-white">Structural_L1.dwg</div>
                                            <div className="text-[8px] text-slate-400">Ver 2.4 • Updated just now</div>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-2 rounded flex items-center gap-3 backdrop-blur-sm border border-white/5">
                                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-[10px] text-white font-bold">PDF</div>
                                        <div className="flex-1">
                                            <div className="text-[10px] text-white">Foundation_Spec.pdf</div>
                                            <div className="text-[8px] text-slate-400">Ver 1.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Docs
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors mb-2">
                                    Document Control (DMS)
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Centralized repository for drawings, RFI's, and transmittals. Ensure everyone builds from the right version.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-500" />Transmittal management</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-500" />Markup & review tools</li>
                                </ul>
                            </div>
                        </div>

                        {/* 5. Cost & Billing */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 flex items-center justify-center p-6">
                                <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <div className="text-[10px] text-slate-400 uppercase tracking-widest">Project Margin</div>
                                            <div className="text-2xl font-bold text-indigo-600">18.5%</div>
                                        </div>
                                        <div className="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded">+2.4% vs Plan</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-[9px] text-slate-500">
                                            <span>Billed</span>
                                            <span>$450k</span>
                                        </div>
                                        <div className="flex justify-between text-[9px] text-slate-500">
                                            <span>Cost</span>
                                            <span>$366k</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Finance
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                                    Financial Analytics
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Real-time visibility into project P&L. Track budget burn-down, WIP, and revenue recognition.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />Revenue forecasting</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />Cash flow management</li>
                                </ul>
                            </div>
                        </div>

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
