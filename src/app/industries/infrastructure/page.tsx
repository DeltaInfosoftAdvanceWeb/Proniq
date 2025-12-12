import Link from "next/link";
import InfrastructureHologram from "@/components/InfrastructureHologram";
import CTA from "@/components/CTA";

export default function Infrastructure() {
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
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-900/30 backdrop-blur-md">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-300">
                            Infrastructure Operations Platform
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-2xl">
                        Build the Future. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">
                            Connect the World.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        From highways to power grids, manage linear assets and complex field operations with precision.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-full font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10">Start Your Transformation</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
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
                <InfrastructureHologram />
            </div>

            {/* Who It's For */}
            <section className="px-6 py-20 bg-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
                        Built for large-scale infrastructure
                    </h2>
                    <p className="text-center text-sm md:text-base text-slate-500 mb-12 max-w-2xl mx-auto">
                        Manage scattered sites, heavy equipment, and linear progress with a platform designed for the field.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Roads & Highways",
                                pain: "Tracking linear progress and material logistics.",
                                desc: "Visualize progress on a map, manage asphalt/concrete supply chains, and track fleet efficiency.",
                                bullets: [
                                    "Linear progress tracking (km/day)",
                                    "Fleet fuel & maintenance logs",
                                ],
                            },
                            {
                                title: "Rail & Metro",
                                pain: "Complex signaling and track maintenance.",
                                desc: "Coordinate civil works with systems installation. Manage safety clearances and track possessions.",
                                bullets: [
                                    "Systems integration management",
                                    "Safety & compliance tracking",
                                ],
                            },
                            {
                                title: "Utilities (Power/Water)",
                                pain: "Asset management and field service dispatch.",
                                desc: "Maintain thousands of assets across vast distances. Dispatch crews efficiently and track maintenance.",
                                bullets: [
                                    "GIS-based asset management",
                                    "Field service mobile app",
                                ],
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                            >
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-500 mb-2">
                                    {item.pain}
                                </p>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>

                                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                                    What you get
                                </p>
                                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                                    {item.bullets.map((point) => (
                                        <li key={point} className="flex gap-2">
                                            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-500" />
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
                            Infrastructure‑specific ERP modules
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            From the site office to headquarters, gain total visibility into your projects and assets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Linear Progress */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors flex items-center justify-center">
                                <div className="text-6xl">🛣️</div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Execution
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        Linear Progress
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Track progress by chainage/km. Visualize completion of earthwork, paving, and structures on a map.
                                </p>
                            </div>
                        </div>

                        {/* 2. Fleet Management */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors flex items-center justify-center">
                                <div className="text-6xl">🚜</div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Assets
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                        Fleet Management
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Monitor fuel consumption, utilization, and maintenance schedules. Reduce downtime and theft.
                                </p>
                            </div>
                        </div>

                        {/* 3. GIS Integration */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors flex items-center justify-center">
                                <div className="text-6xl">🌍</div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Mapping
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                                        GIS Integration
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Overlay project data on geospatial maps. Manage land acquisition and right-of-way issues.
                                </p>
                            </div>
                        </div>

                        {/* 4. Asset Management */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors flex items-center justify-center">
                                <div className="text-6xl">🏭</div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Maintenance
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                        Asset Management
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Track lifecycle costs of fixed assets. Schedule preventive maintenance and manage spare parts.
                                </p>
                            </div>
                        </div>

                        {/* 5. Field Service */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors flex items-center justify-center">
                                <div className="text-6xl">📱</div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        Mobile
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                                        Field Service
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Dispatch work orders to mobile crews. Capture signatures, photos, and job details on site.
                                </p>
                            </div>
                        </div>

                        {/* 6. Safety & Compliance */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors flex items-center justify-center">
                                <div className="text-6xl">⛑️</div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
                                        HSE
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                                        Safety & Compliance
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Report incidents and near-misses. Ensure compliance with environmental and safety regulations.
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
                    <div className="absolute -top-[25%] -left-[10%] h-[50%] w-[50%] rounded-full bg-blue-500/5 blur-[110px]" />
                    <div className="absolute bottom-[-25%] -right-[15%] h-[45%] w-[45%] rounded-full bg-blue-400/5 blur-[110px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Text + chips */}
                    <div className="order-2 md:order-1 text-center md:text-left">
                        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-500 mb-3">
                            One backbone, many sectors
                        </p>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900">
                            Configure once, deploy across every infrastructure project
                        </h2>
                        <p className="text-sm md:text-base text-slate-500 mb-6">
                            Keep one ERP core and switch on sector‑specific workflows, reports, and master data.
                        </p>

                        <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2 text-[11px]">
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                                Shared assets
                            </span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                                Unified procurement
                            </span>
                            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                                Centralized finance
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {[
                                { name: "Roads", slug: "" },
                                { name: "Bridges", slug: "" },
                                { name: "Rail", slug: "" },
                                { name: "Power", slug: "" },
                                { name: "Water", slug: "" },
                                { name: "Telecom", slug: "" },
                            ].map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/industries/infrastructure/${item.slug}`}
                                    className="rounded-full border border-slate-200 bg-white/70 px-6 py-2 text-xs md:text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm hover:shadow-md"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 3D Dashboard Component */}
                    <div className="order-1 md:order-2 perspective-[1200px] group/3d">
                        <div className="relative w-full aspect-[4/3] transition-all duration-700 ease-out transform-style-3d group-hover/3d:[transform:rotateY(-12deg)_rotateX(6deg)_scale(1.05)]">
                            <div className="absolute inset-4 bg-blue-500/30 blur-3xl -z-10 transition-all duration-500 group-hover/3d:bg-blue-500/50" />
                            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden flex flex-col">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                                <div className="relative z-10 px-6 py-4 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/50">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                        </div>
                                        <span className="text-[10px] font-mono text-slate-400 tracking-widest">INFRA_OS</span>
                                    </div>
                                    <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-bold text-blue-400 animate-pulse">
                                        LIVE
                                    </div>
                                </div>
                                <div className="relative z-10 p-6 grid grid-cols-2 gap-4 h-full content-start">
                                    {[
                                        { label: "Highways", count: "12", unit: "Projects", color: "from-blue-500 to-indigo-600", icon: "🛣️" },
                                        { label: "Bridges", count: "05", unit: "Sites", color: "from-emerald-500 to-teal-600", icon: "🌉" },
                                        { label: "Power", count: "08", unit: "Grids", color: "from-amber-500 to-orange-600", icon: "⚡" },
                                        { label: "Water", count: "03", unit: "Plants", color: "from-rose-500 to-pink-600", icon: "💧" },
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
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
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
                        What infrastructure teams achieve
                    </h2>
                    <p className="text-center text-sm md:text-base text-slate-600 mb-10 max-w-3xl mx-auto">
                        Deliver critical infrastructure with confidence. Improve asset uptime and project margins.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                metric: "15%",
                                label: "reduction in equipment downtime",
                            },
                            {
                                metric: "20%",
                                label: "improvement in project margins",
                            },
                            {
                                metric: "100%",
                                label: "visibility of field operations",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                            >
                                <p className="text-3xl font-bold text-blue-500">{item.metric}</p>
                                <p className="mt-3 text-sm text-slate-700">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
}
