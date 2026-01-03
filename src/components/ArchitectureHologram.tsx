"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ArchitectureHologram() {
    const containerRef = useRef<HTMLDivElement>(null);
    const engineerRef = useRef<HTMLDivElement>(null);
    const screenRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=200%", // 200% viewport height scroll distance
                    scrub: 1.5, // Smooth scrubbing
                    pin: true,
                    anticipatePin: 1,
                },
            });

            tl.fromTo(
                engineerRef.current,
                {
                    opacity: 0,
                    scale: 1.2,
                    filter: "blur(20px)"
                },
                {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 2,
                    ease: "power2.out"
                }
            )
                .fromTo(
                    screenRef.current,
                    {
                        scale: 1.5,
                        y: 0,
                        opacity: 1,
                        rotationX: 0,
                        z: 0
                    },
                    {
                        scale: 0.85,
                        y: 50,
                        opacity: 0.4,
                        rotationX: 5,
                        duration: 2,
                        ease: "power2.out"
                    },
                    "<"
                )
                .fromTo(
                    contentRef.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1, delay: 0.5 },
                    "<+0.5"
                );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative z-50 h-screen w-full bg-transparent overflow-hidden flex flex-col items-center justify-center perspective-[1000px]">

            {/* Engineer Background Layer */}
            <div ref={engineerRef} className="absolute inset-0 z-0 w-full h-full">
                <img
                    src="/interior.jpeg"
                    alt="Architecture Studio"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay" />
            </div>

            {/* Holographic Screen Layer */}
            <div ref={screenRef} className="relative z-50 w-full max-w-6xl aspect-[4/5] md:aspect-video flex items-center justify-center transform-style-3d mt-10 md:mt-32">
                <div className="relative w-full h-full bg-slate-950/60 backdrop-blur-xl border border-purple-500/40 rounded-xl p-3 md:p-5 shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden flex flex-col [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    {/* Header Bar */}
                    <div className="flex justify-between items-center mb-5 border-b border-purple-500/20 pb-3 relative z-10 shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
                            <span className="text-purple-50 font-bold tracking-widest text-xs md:text-sm">DESIGN <span className="text-purple-400 font-normal">STUDIO</span></span>
                        </div>
                        <div className="flex gap-4 text-[10px] font-mono text-slate-400">
                            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> CLOUD RENDER</span>
                            <span className="hidden md:inline">SYNC: 12ms</span>
                        </div>
                    </div>

                    {/* Dashboard Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-12 md:grid-rows-6 gap-3 md:gap-4 relative z-10 flex-1 min-h-0 overflow-y-auto md:overflow-visible">

                        {/* KPI Cards */}
                        <div className="col-span-1 md:col-span-3 md:row-span-2 bg-slate-900/50 border border-purple-500/20 rounded-lg p-3 flex flex-col justify-between group hover:border-purple-500/40 transition-colors h-24 md:h-auto">
                            <div className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider">Design Approvals</div>
                            <div className="text-lg md:text-2xl font-bold text-white">18/20</div>
                            <div className="flex items-center gap-2 text-[10px]">
                                <span className="text-emerald-400 flex items-center">▲ 90%</span>
                                <span className="text-slate-500">This Week</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1 mt-auto md:mt-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500 h-full w-[90%] shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-3 md:row-span-2 bg-slate-900/50 border border-purple-500/20 rounded-lg p-3 flex flex-col justify-between group hover:border-purple-500/40 transition-colors h-24 md:h-auto">
                            <div className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider">Fit-out Progress</div>
                            <div className="text-lg md:text-2xl font-bold text-white">65%</div>
                            <div className="flex items-center gap-2 text-[10px]">
                                <span className="text-amber-400 flex items-center">● On Schedule</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1 mt-auto md:mt-2 rounded-full overflow-hidden">
                                <div className="bg-amber-500 h-full w-[65%] shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                            </div>
                        </div>

                        {/* Main Chart */}
                        <div className="col-span-2 md:col-span-6 md:row-span-4 bg-slate-900/50 border border-purple-500/20 rounded-lg p-4 relative overflow-hidden flex flex-col min-h-[200px]">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider mb-1">Budget Burn Rate</div>
                                    <div className="text-xs text-slate-500">Interior Projects</div>
                                </div>
                                <div className="flex gap-1">
                                    {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-slate-600" />)}
                                </div>
                            </div>

                            <div className="flex-1 relative flex items-end justify-between gap-2 px-2 pb-2">
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                    {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-px bg-slate-400 border-t border-dashed border-slate-400" />)}
                                </div>

                                {[40, 30, 55, 45, 60, 50, 75, 70, 85, 80].map((h, i) => (
                                    <div key={i} className="relative w-full h-full flex items-end group/bar">
                                        <div
                                            style={{ height: `${h}%` }}
                                            className="w-full bg-gradient-to-t from-purple-500/20 to-purple-400/60 rounded-t-sm relative transition-all duration-500 group-hover/bar:to-purple-300/80"
                                        >
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover/bar:opacity-100 text-[9px] text-white bg-slate-800 px-1 rounded mb-1 transition-opacity">
                                                ${h}k
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
                                    <path
                                        d="M0,60 C20,50 50,70 80,60 S120,40 160,50 S200,30 240,20"
                                        fill="none"
                                        stroke="#a855f7"
                                        strokeWidth="2"
                                        vectorEffect="non-scaling-stroke"
                                        className="drop-shadow-[0_0_4px_rgba(168,85,247,0.8)]"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Data Table */}
                        <div className="col-span-2 md:col-span-6 md:row-span-4 bg-slate-900/50 border border-purple-500/20 rounded-lg p-0 overflow-hidden flex flex-col min-h-[200px]">
                            <div className="p-3 border-b border-slate-800 bg-slate-800/30 flex justify-between items-center">
                                <span className="text-slate-300 text-[10px] font-bold uppercase">Design Stages</span>
                                <span className="text-purple-400 text-[9px]">VIEW ALL</span>
                            </div>
                            <div className="flex-1 overflow-hidden overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[300px]">
                                    <thead>
                                        <tr className="text-[9px] text-slate-500 border-b border-slate-800/50">
                                            <th className="p-2 font-medium">PROJECT</th>
                                            <th className="p-2 font-medium">STAGE</th>
                                            <th className="p-2 font-medium">STATUS</th>
                                            <th className="p-2 font-medium text-right">DONE</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[10px] text-slate-300">
                                        {[
                                            { proj: "Lobby A", stage: "Concept", status: "Approved", progress: 100, color: "text-emerald-400" },
                                            { proj: "Conf Room", stage: "3D Render", status: "Review", progress: 80, color: "text-blue-400" },
                                            { proj: "Cafeteria", stage: "Material", status: "Pending", progress: 20, color: "text-amber-400" },
                                            { proj: "Exec Suite", stage: "Install", status: "Started", progress: 10, color: "text-slate-400" },
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-slate-800/50 hover:bg-purple-500/5 transition-colors cursor-default group/row">
                                                <td className="p-2 font-mono text-slate-500 group-hover/row:text-purple-300">{row.proj}</td>
                                                <td className="p-2 font-medium">{row.stage}</td>
                                                <td className={`p-2 ${row.color}`}>{row.status}</td>
                                                <td className="p-2 text-right">
                                                    <div className="w-12 h-1 bg-slate-800 rounded-full inline-block align-middle ml-2">
                                                        <div style={{ width: `${row.progress}%` }} className={`h-full rounded-full ${row.progress === 100 ? 'bg-emerald-500' : 'bg-purple-500'}`} />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Bottom Right Stats */}
                        <div className="col-span-2 md:col-span-6 md:row-span-2 bg-slate-900/50 border border-purple-500/20 rounded-lg p-3 flex items-center justify-around h-20 md:h-auto">
                            <div className="text-center">
                                <div className="text-[9px] text-slate-500 uppercase mb-1">Client Sign-offs</div>
                                <div className="text-xl font-bold text-emerald-400">12</div>
                                <div className="text-[8px] text-slate-600">This Month</div>
                            </div>
                            <div className="w-px h-8 bg-slate-800" />
                            <div className="text-center">
                                <div className="text-[9px] text-slate-500 uppercase mb-1">Budget Var</div>
                                <div className="text-xl font-bold text-white">±2%</div>
                                <div className="text-[8px] text-slate-600">On Target</div>
                            </div>
                            <div className="w-px h-8 bg-slate-800" />
                            <div className="text-center">
                                <div className="text-[9px] text-slate-500 uppercase mb-1">Snag List</div>
                                <div className="text-xl font-bold text-amber-400">45</div>
                                <div className="text-[8px] text-slate-600">Open Items</div>
                            </div>
                        </div>

                    </div>

                    <div className="absolute inset-0 bg-purple-500/5 blur-3xl -z-10 rounded-full opacity-50 pointer-events-none" />
                </div>
            </div>

            <div ref={contentRef} className="absolute bottom-10 md:bottom-20 z-60 text-center px-4 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    Design <span className="text-purple-400">Sync</span>
                </h2>
                <p className="text-slate-300 text-lg md:text-xl drop-shadow-md">
                    Seamlessly bridge the gap between creative vision and site execution. Manage approvals, BOQs, and snags in one visual flow.
                </p>
            </div>

        </section>
    );
}
