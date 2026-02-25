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
                    <div className="h-full w-full bg-[url('/infrastructure.jpeg')] bg-cover bg-center bg-no-repeat transform scale-105" />
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
                        {/* 1. Linear Tracking */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors">
                                <div className="absolute inset-x-6 top-6 bottom-0 bg-white rounded-t-xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border border-slate-200 border-b-0 p-4">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="text-[10px] bg-orange-100 text-orange-700 font-bold px-2 py-0.5 rounded">NH-48 Pkg 3</div>
                                        <div className="text-[10px] text-slate-400">Chainage 42+500</div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <div className="flex justify-between text-[9px] text-slate-500 mb-1">
                                                <span>Earthwork</span>
                                                <span className="text-emerald-500 font-bold">Done</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-emerald-500 rounded-full" />
                                        </div>
                                        <div className="relative">
                                            <div className="flex justify-between text-[9px] text-slate-500 mb-1">
                                                <span>Sub-grade</span>
                                                <span className="text-orange-500 font-bold">In Progress</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-200 rounded-full">
                                                <div className="h-full bg-orange-500 w-[65%] rounded-full" />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="flex justify-between text-[9px] text-slate-500 mb-1">
                                                <span>Bitumen</span>
                                                <span className="text-slate-400">Pending</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Project Control
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                                    Linear Project Tracking
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Monitor progress by chainage/km. Link BOQ items to specific linear coordinates for precise billing and status updates.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />Chainage-wise DPRs</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />Visual progress maps</li>
                                </ul>
                            </div>
                        </div>

                        {/* 2. Fleet Management */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 min-h-[12rem] flex items-center justify-center relative overflow-hidden">
                                {/* Dashboard UI Mockup */}
                                <div className="absolute inset-x-8 top-8 bottom-0 bg-slate-900 rounded-t-lg p-3 shadow-xl transform transition-transform group-hover:scale-105">
                                    <div className="flex gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="bg-slate-800 p-2 rounded">
                                            <div className="text-[8px] text-slate-400">Excavator EX-04</div>
                                            <div className="text-xs font-bold text-white mt-1">142 hrs</div>
                                            <div className="text-[8px] text-emerald-400">Active</div>
                                        </div>
                                        <div className="bg-slate-800 p-2 rounded">
                                            <div className="text-[8px] text-slate-400">Tipper TP-12</div>
                                            <div className="text-xs font-bold text-white mt-1">Idle</div>
                                            <div className="text-[8px] text-red-400">Maintenance</div>
                                        </div>
                                        <div className="col-span-2 bg-slate-800 p-2 rounded flex justify-between items-center">
                                            <div className="text-[8px] text-slate-400">Fuel Efficiency</div>
                                            <div className="text-[9px] font-bold text-yellow-400">8.2 km/l</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Assets
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                    Fleet & Plant Management
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Real-time monitoring of heavy machinery, fuel consumption, and maintenance schedules to maximize uptime.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Fuel theft analytics</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Predictive maintenance</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. GIS & Survey */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-emerald-50 relative overflow-hidden">
                                {/* Map Layers UI */}
                                <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-slate-200">
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 border border-slate-300 rounded flex items-center justify-center bg-blue-500 border-blue-600 text-white text-[8px]">✓</div>
                                            <span className="text-[9px] font-medium text-slate-700">Survey Data</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 border border-slate-300 rounded flex items-center justify-center bg-transparent border-slate-400"></div>
                                            <span className="text-[9px] font-medium text-slate-500">Drone Feed</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 border border-slate-300 rounded flex items-center justify-center bg-blue-500 border-blue-600 text-white text-[8px]">✓</div>
                                            <span className="text-[9px] font-medium text-slate-700">Design Alignment</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-slate-200 flex justify-between items-center">
                                    <div className="text-[9px] font-bold text-slate-700">Lat: 28.6139 N</div>
                                    <div className="text-[9px] font-bold text-slate-700">Long: 77.2090 E</div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Survey
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                                    GIS & Survey Integration
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Overlay design alignments on drone imagery and survey data. Verify quantities and site boundaries visually.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Drone volume calculation</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Geotagged site issues</li>
                                </ul>
                            </div>
                        </div>

                        {/* 4. Yard Inventory */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 p-6 flex flex-col justify-center gap-3">
                                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex justify-between items-center group-hover:border-slate-300 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">S</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-700">Structural Steel</div>
                                            <div className="text-[9px] text-slate-400">Yard B</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-slate-800">124.5 MT</div>
                                        <div className="text-[8px] text-emerald-500">Available</div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex justify-between items-center opacity-80">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600 font-bold text-xs">A</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-700">Aggregates (20mm)</div>
                                            <div className="text-[9px] text-slate-400">Crusher Site</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-red-500">Low Stock</div>
                                        <div className="text-[8px] text-slate-400">Order: 500 MT</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Logistics
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-600 transition-colors mb-2">
                                    Inventory & Yard Management
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Track material movement between crusher machines, laydown yards, and active construction zones.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-500" />Weighbridge integration</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-500" />Stock reconciliation</li>
                                </ul>
                            </div>
                        </div>


                        {/* 5. Subcontractor Billing */}
                        <div className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                            <div className="h-48 bg-slate-100 border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors p-6">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 relative h-full flex flex-col justify-center">
                                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-green-100 text-green-700 text-[8px] font-bold rounded">Bill #PB-204</div>
                                    <div className="text-[10px] text-slate-400 mb-1">Total Payable</div>
                                    <div className="text-2xl font-bold text-slate-800 mb-2">₹ 4.2 Cr</div>
                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1">
                                        <div className="w-[80%] h-full bg-purple-500" />
                                    </div>
                                    <div className="flex justify-between text-[8px] text-slate-500">
                                        <span>Certified: 80%</span>
                                        <span>Retention: 5%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase mb-3 w-fit">
                                    Finance
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                                    Billing & Subcontracting
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    Handle complex RA bills with automated deductions for fuel, material, and advances.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-500">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />Debit/Credit note automation</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />Hold-release workflows</li>
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
