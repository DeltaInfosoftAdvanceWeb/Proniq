"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function InfrastructureHologram() {
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

            // Initial states
            // Engineer: Hidden, slightly zoomed in
            // Screen: Full screen, dominating view

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
                        scale: 1.5, // Start very large (immersive)
                        y: 0,
                        opacity: 1,
                        rotationX: 0,
                        z: 0
                    },
                    {
                        scale: 0.85, // Shrink to fit "in front" of engineer
                        y: 50, // Adjust vertical position to align with hands/eye-line
                        opacity: 0.4, // Lower opacity to see through to engineer
                        rotationX: 5, // Slight tilt for 3D effect
                        duration: 2,
                        ease: "power2.out"
                    },
                    "<" // Sync with engineer animation
                )
                .fromTo(
                    contentRef.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1, delay: 0.5 }, // Fade in text after transition starts
                    "<+0.5"
                );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative z-50 h-screen w-full bg-transparent overflow-hidden flex flex-col items-center justify-center perspective-[1000px]">

            {/* Engineer Background Layer */}

            {/* Engineer Background Layer */}

            <div ref={engineerRef} className="absolute inset-0 z-0 w-full h-full">

                <div className="absolute inset-0 z-0 opacity-100">
                    <img
                        src="/Engineer.gif"
                        alt="Background Animation"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-teal-900/10 mix-blend-overlay" />
            </div>

            {/* Holographic Screen Layer */}
            <div ref={screenRef} className="relative z-50 w-full max-w-6xl aspect-[4/5] md:aspect-video flex items-center justify-center transform-style-3d mt-10 md:mt-32">
                <div className="relative w-full h-full bg-slate-950/60 backdrop-blur-xl border border-blue-500/40 rounded-xl p-3 md:p-5 shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden flex flex-col [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
                    {/* Grid effect overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    {/* Header Bar */}
                    <div className="flex justify-between items-center mb-5 border-b border-blue-500/20 pb-3 relative z-10 shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                            <span className="text-blue-50 font-bold tracking-widest text-xs md:text-sm">INFRA <span className="text-blue-400 font-normal">COMMAND</span></span>
                        </div>
                        <div className="flex gap-4 text-[10px] font-mono text-slate-400">
                            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> SATELLITE LINK</span>
                            <span className="hidden md:inline">LATENCY: 4ms</span>
                        </div>
                    </div>

                    {/* Dashboard Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-12 md:grid-rows-6 gap-3 md:gap-4 relative z-10 flex-1 min-h-0 overflow-y-auto md:overflow-visible">

                        {/* KPI Cards (Top Row) */}
                        <div className="col-span-1 md:col-span-3 md:row-span-2 bg-slate-900/50 border border-blue-500/20 rounded-lg p-3 flex flex-col justify-between group hover:border-blue-500/40 transition-colors h-24 md:h-auto">
                            <div className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider">Project Milestones</div>
                            <div className="text-lg md:text-2xl font-bold text-white">8/12</div>
                            <div className="flex items-center gap-2 text-[10px]">
                                <span className="text-emerald-400 flex items-center">▲ Ahead</span>
                                <span className="text-slate-500">Phase 2</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1 mt-auto md:mt-2 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-full w-[66%] shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-3 md:row-span-2 bg-slate-900/50 border border-blue-500/20 rounded-lg p-3 flex flex-col justify-between group hover:border-blue-500/40 transition-colors h-24 md:h-auto">
                            <div className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider">Resource Utilization</div>
                            <div className="text-lg md:text-2xl font-bold text-white">94%</div>
                            <div className="flex items-center gap-2 text-[10px]">
                                <span className="text-emerald-400 flex items-center">● Optimal</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1 mt-auto md:mt-2 rounded-full overflow-hidden">
                                <div className="bg-emerald-500 h-full w-[94%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            </div>
                        </div>

                        {/* Main Chart (Right Side) */}
                        <div className="col-span-2 md:col-span-6 md:row-span-4 bg-slate-900/50 border border-blue-500/20 rounded-lg p-4 relative overflow-hidden flex flex-col min-h-[200px]">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider mb-1">Linear Progress (km)</div>
                                    <div className="text-xs text-slate-500">Highway Section B</div>
                                </div>
                                <div className="flex gap-1">
                                    {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-slate-600" />)}
                                </div>
                            </div>

                            {/* CSS Chart Visualization */}
                            <div className="flex-1 relative flex items-end justify-between gap-2 px-2 pb-2">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                    {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-px bg-slate-400 border-t border-dashed border-slate-400" />)}
                                </div>

                                {/* Chart Bars/Area */}
                                {[20, 35, 45, 50, 65, 70, 85, 80, 90, 98].map((h, i) => (
                                    <div key={i} className="relative w-full h-full flex items-end group/bar">
                                        <div
                                            style={{ height: `${h}%` }}
                                            className="w-full bg-gradient-to-t from-blue-500/20 to-blue-400/60 rounded-t-sm relative transition-all duration-500 group-hover/bar:to-blue-300/80"
                                        >
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover/bar:opacity-100 text-[9px] text-white bg-slate-800 px-1 rounded mb-1 transition-opacity">
                                                {h}km
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Trend Line Overlay (SVG) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
                                    <path
                                        d="M0,100 C20,90 50,80 80,70 S120,50 160,40 S200,30 240,10"
                                        fill="none"
                                        stroke="#3b82f6"
                                        strokeWidth="2"
                                        vectorEffect="non-scaling-stroke"
                                        className="drop-shadow-[0_0_4px_rgba(59,130,246,0.8)]"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Data Table (Bottom Left) */}
                        <div className="col-span-2 md:col-span-6 md:row-span-4 bg-slate-900/50 border border-blue-500/20 rounded-lg p-0 overflow-hidden flex flex-col min-h-[200px]">
                            <div className="p-3 border-b border-slate-800 bg-slate-800/30 flex justify-between items-center">
                                <span className="text-slate-300 text-[10px] font-bold uppercase">Site Activities</span>
                                <span className="text-blue-400 text-[9px]">VIEW ALL</span>
                            </div>
                            <div className="flex-1 overflow-hidden overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[300px]">
                                    <thead>
                                        <tr className="text-[9px] text-slate-500 border-b border-slate-800/50">
                                            <th className="p-2 font-medium">ZONE</th>
                                            <th className="p-2 font-medium">ACTIVITY</th>
                                            <th className="p-2 font-medium">STATUS</th>
                                            <th className="p-2 font-medium text-right">COMPLETION</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[10px] text-slate-300">
                                        {[
                                            { zone: "Sec-A", task: "Site Clearance", status: "Done", progress: 100, color: "text-emerald-400" },
                                            { zone: "Sec-B", task: "Utility Shifting", status: "Active", progress: 75, color: "text-blue-400" },
                                            { zone: "Sec-C", task: "Earthwork", status: "Delayed", progress: 30, color: "text-amber-400" },
                                            { zone: "Sec-D", task: "Paving", status: "Pending", progress: 0, color: "text-slate-400" },
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-slate-800/50 hover:bg-blue-500/5 transition-colors cursor-default group/row">
                                                <td className="p-2 font-mono text-slate-500 group-hover/row:text-blue-300">{row.zone}</td>
                                                <td className="p-2 font-medium">{row.task}</td>
                                                <td className={`p-2 ${row.color}`}>{row.status}</td>
                                                <td className="p-2 text-right">
                                                    <div className="w-12 h-1 bg-slate-800 rounded-full inline-block align-middle ml-2">
                                                        <div style={{ width: `${row.progress}%` }} className={`h-full rounded-full ${row.progress === 100 ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Bottom Right Stats */}
                        <div className="col-span-2 md:col-span-6 md:row-span-2 bg-slate-900/50 border border-blue-500/20 rounded-lg p-3 flex items-center justify-around h-20 md:h-auto">
                            <div className="text-center">
                                <div className="text-[9px] text-slate-500 uppercase mb-1">Equipment Uptime</div>
                                <div className="text-xl font-bold text-emerald-400">98.5%</div>
                                <div className="text-[8px] text-slate-600">Fleet Avg</div>
                            </div>
                            <div className="w-px h-8 bg-slate-800" />
                            <div className="text-center">
                                <div className="text-[9px] text-slate-500 uppercase mb-1">Material Stock</div>
                                <div className="text-xl font-bold text-white">OK</div>
                                <div className="text-[8px] text-slate-600">All Depots</div>
                            </div>
                            <div className="w-px h-8 bg-slate-800" />
                            <div className="text-center">
                                <div className="text-[9px] text-slate-500 uppercase mb-1">Safety Incidents</div>
                                <div className="text-xl font-bold text-blue-400">0</div>
                                <div className="text-[8px] text-slate-600">This Month</div>
                            </div>
                        </div>

                    </div>

                    {/* Glow effect behind screen */}
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl -z-10 rounded-full opacity-50 pointer-events-none" />
                </div>
            </div>

            {/* Text Content Layer */}
            <div ref={contentRef} className="absolute bottom-10 md:bottom-20 z-60 text-center px-4 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    Infrastructure <span className="text-blue-400">Intelligence</span>
                </h2>
                <p className="text-slate-300 text-lg md:text-xl drop-shadow-md">
                    Connect scattered sites, assets, and teams. Visualize linear progress and optimize fleet usage in real-time.
                </p>


            </div>

        </section>
    );
}
