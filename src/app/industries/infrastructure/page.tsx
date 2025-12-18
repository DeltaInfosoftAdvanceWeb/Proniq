"use client";

import Link from "next/link";
import ConstructionHologram from "@/components/ConstructionHologram";
import TransformCTA from "@/components/TransformCTA";

export default function Infrastructure() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-[url('/site/infra.png')] bg-cover bg-center bg-no-repeat transform scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80" />
                </div>

                {/* Centered content */}
                <div className="relative z-10 px-4 max-w-5xl mx-auto mt-20">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-orange-400/30 bg-orange-900/30 backdrop-blur-md">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-orange-300">
                            Infrastructure Operations Platform
                        </p>
                    </div>

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
                        Built for heavy-duty infrastructure
                    </h2>
                    <p className="text-center text-sm md:text-base text-slate-500 mb-12 max-w-2xl mx-auto">
                        Whether you are laying roads, erecting transmission towers, or managing water pipelines —
                        keep your diverse and dispersed sites connected.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {[
                            {
                                title: "Roads & Highways",
                                pain: "Linear progress tracking and heavy machinery costs.",
                                desc: "Track progress by chainage, manage fleet fuel and maintenance, and control subcontractor billing.",
                                bullets: [
                                    "Chainage-based progress monitoring",
                                    "Fleet & fuel management",
                                ],
                            },
                            {
                                title: "Power & Utilities",
                                pain: "Remote sites and deeply fragmented inventory.",
                                desc: "Manage transmission line towers, substation assets, and cable drums across hundreds of kilometers.",
                                bullets: [
                                    "Distributed asset tracking",
                                    "Right-of-Way (RoW) document control",
                                ],
                            },
                            {
                                title: "Water & Irrigation",
                                pain: "Complex pipe laying schedules and material logistics.",
                                desc: "Synchronize pipe procurement with trench licensing and laying schedules to avoid blockages.",
                                bullets: [
                                    "Pipe inventory & reconciliation",
                                    "Jal Jeevan Mission compliant reporting",
                                ],
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all"
                            >
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-500 mb-2">
                                    {item.pain}
                                </p>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>

                                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                                    What you get
                                </p>
                                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                                    {item.bullets.map((point) => (
                                        <li key={point} className="flex gap-2">
                                            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-orange-500" />
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
                            ERP modules for the field
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Bring the office to the site. Track assets, progress, and safety in real-time, even in remote locations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* 1. Linear Progress */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">

                            <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                                <div className="w-[90%] h-16 bg-slate-200 rounded-lg relative overflow-hidden">
                                    <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-400 transform -translate-y-1/2" />
                                    <div className="absolute top-1/2 left-[30%] w-3 h-3 bg-orange-500 rounded-full transform -translate-y-1/2 shadow-lg z-10" />
                                    <div className="absolute top-[20%] left-[30%] text-[9px] bg-white px-1 rounded border border-slate-200">
                                        KM 45.2
                                    </div>

                                    <div className="absolute top-0 left-0 h-full w-[30%] bg-orange-100/50" />
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <span className="inline-block py-1 px-3 rounded-full bg-amber-50 text-amber-600 text-xs font-bold uppercase mb-3">
                                    Project Control
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                                    Linear Progress Tracking
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                                    Visualize project completion by kilometers or chainage. Map activities like grading,
                                    Asphalting, and barrier installation to specific coordinates.
                                </p>
                                <ul className="space-y-2 text-xs text-slate-500 font-medium mt-4">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Review by Chainage (KM)</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Google Maps Integration</li>
                                </ul>
                            </div>
                        </div>

                        {/* 2. Fleet Management */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">

                            <div className="h-48 bg-slate-100 p-6 flex flex-col justify-center gap-3">
                                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 text-lg">🚜</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-700">JCB 3DX Super</div>
                                            <div className="text-[9px] text-slate-400">Site: Highway NH-4</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-slate-800">8.5 hrs</div>
                                        <div className="text-[8px] text-green-500">Active Today</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex justify-between items-center opacity-80">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 text-lg">🚛</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-700">Dumper Truck</div>
                                            <div className="text-[9px] text-slate-400">Maintenance Due</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-red-500">Alert</div>
                                        <div className="text-[8px] text-slate-400">Engine Check</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase mb-3">
                                    Plant & Machinery
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                    Fleet & Equipment
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                                    Monitor fuel consumption, running hours, and maintenance schedules for thousands
                                    of heavy vehicles and owned assets.
                                </p>
                                <ul className="space-y-2 text-xs text-slate-500 font-medium mt-4">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />Fuel theft analytics</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />Predictive maintenance</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. GIS Integration */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-900 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.3)_25%,rgba(255,255,255,0.3)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.3)_75%,rgba(255,255,255,0.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.3)_25%,rgba(255,255,255,0.3)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.3)_75%,rgba(255,255,255,0.3)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                                </div>
                                <div className="absolute bottom-4 left-4 text-white text-[10px] font-mono">
                                    LAT: 28.6139 N<br />
                                    LNG: 77.2090 E
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase mb-3">
                                    Geo-Spatial
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                                    GIS & Survey Integration
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                                    Overlay survey data, land acquisition statuses, and drone imagery onto your master
                                    schedule for total context.
                                </p>
                            </div>
                        </div>

                        {/* 4. Asset Management */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 p-6 flex flex-col justify-center">
                                <div className="flex gap-2 mb-2">
                                    {[1, 2, 3].map(i => <div key={i} className="h-8 flex-1 bg-slate-200 rounded animate-pulse opacity-50" />)}
                                </div>
                                <div className="h-24 bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                                    <div className="text-[10px] font-bold text-slate-700 mb-1">Stock - Laydown Area B</div>
                                    <div className="flex items-end justify-between">
                                        <div className="text-xs text-slate-500">Pipes (600mm)</div>
                                        <div className="text-lg font-bold text-orange-600">450 <span className="text-[10px] text-slate-400 font-normal">units</span></div>
                                    </div>
                                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
                                        <div className="w-[85%] h-full bg-orange-500 rounded-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase mb-3">
                                    Inventory
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    Distributed Asset Mgmt.
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                                    Track high-value inventory spread across laydown yards, stores, and active sites.
                                    Prevent theft and misplacement.
                                </p>
                            </div>
                        </div>

                        {/* 5. Field Service */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 p-6 flex items-center justify-center">
                                <div className="absolute inset-x-12 bg-white p-4 rounded-lg shadow-md border border-slate-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">👷</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-800">Technician Assigned</div>
                                            <div className="text-[8px] text-slate-500">Turbine #4 Maintenance</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase mb-3">
                                    Service
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                                    Field Work Orders
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                                    Digitize maintenance logs and safety checklists. Assign tasks to field crews via app
                                    even in offline mode.
                                </p>
                            </div>
                        </div>

                        {/* 6. Safety & Compliance */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-red-50 p-6 flex items-center justify-center relative overflow-hidden">
                                <div className="text-center z-10">
                                    <div className="text-3xl font-bold text-red-500 mb-1">0</div>
                                    <div className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Active Incidents</div>
                                </div>
                                <div className="absolute inset-0 border-4 border-red-100 m-4 rounded-2xl" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase mb-3">
                                    EHS
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                                    Safety & Compliance
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                                    Enforce safety protocols with mandatory digital checklists. Track near-misses and
                                    ensure regulatory compliance on every mile.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Sub-Industries */}
            <section className="relative px-6 py-20 bg-white overflow-hidden">

                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-[25%] -left-[10%] h-[50%] w-[50%] rounded-full bg-orange-500/5 blur-[110px]" />
                    <div className="absolute bottom-[-25%] -right-[15%] h-[45%] w-[45%] rounded-full bg-amber-400/5 blur-[110px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div className="order-2 md:order-1 text-center md:text-left">
                        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-500 mb-3">
                            One platform, many mega-projects
                        </p>

                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900">
                            Scale your operations across specialized infrastructure verticals
                        </h2>

                        <p className="text-sm md:text-base text-slate-500 mb-6">
                            Deploy a unified core while activating specialized modules for linear, vertical, or utility projects.
                        </p>

                        <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2 text-[11px]">
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">Linear Reporting</span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">Asset Tracking</span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">Remote Mobility</span>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {[
                                { name: "Roads & Highways" },
                                { name: "Power Transmission" },
                                { name: "Water Supply" },
                                { name: "Railways & Metro" },
                                { name: "Solar Parks" },
                                { name: "Specialist Contractors" },
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

                            <div className="absolute inset-4 bg-orange-500/30 blur-3xl -z-10 transition-all group-hover/3d:bg-orange-500/50" />

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
                                            INFRA_CONTROL_HUB
                                        </span>
                                    </div>

                                    <div className="px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-[9px] font-bold text-orange-400 animate-pulse">
                                        SAT_LINK_ACTIVE
                                    </div>
                                </div>

                                {/* Dashboard Stats */}
                                <div className="relative z-10 p-6 grid grid-cols-2 gap-4 h-full">
                                    {[
                                        { label: "Highways", count: "240", unit: "km Active", color: "from-orange-500 to-amber-600", icon: "🛣️" },
                                        { label: "Power Grid", count: "18", unit: "Substations", color: "from-blue-500 to-indigo-600", icon: "⚡" },
                                        { label: "Fleet", count: "104", unit: "Machines", color: "from-yellow-400 to-orange-500", icon: "🚛" },
                                        { label: "Water", count: "55", unit: "km Pipelines", color: "from-cyan-500 to-blue-600", icon: "💧" },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="group/card relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 transition-all transform-style-3d hover:bg-slate-700/50 hover:border-slate-600 group-hover/3d:[transform:translateZ(30px)] cursor-pointer"
                                            style={{ transitionDelay: `${i * 50}ms` }}
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-sm shadow-lg`}>
                                                    {item.icon}
                                                </div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
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

                            <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl shadow-2xl flex items-center justify-center group-hover/3d:[transform:translateZ(80px)_rotate(-10deg)]">
                                <span className="text-2xl font-bold text-white">IOT</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* Client Outcomes */}
            <section className="px-6 py-20 bg-slate-100">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold text-center mb-4 text-slate-900">
                        What infrastructure leaders achieve
                    </h2>

                    <p className="text-center text-sm md:text-base text-slate-600 mb-10 max-w-3xl mx-auto">
                        Connect your headquarters to the most remote sites. Improve asset utilization and
                        ensure linear projects stay on the critical path.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                metric: "15%",
                                label: "savings on fuel & machinery costs",
                            },
                            {
                                metric: "2x",
                                label: "faster field reporting cycles",
                            },
                            {
                                metric: "100%",
                                label: "traceability of assets across sites",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                            >
                                <p className="text-3xl font-bold text-orange-500">{item.metric}</p>
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
