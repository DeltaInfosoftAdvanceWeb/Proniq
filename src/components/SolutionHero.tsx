"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SolutionHeroProps {
    title: React.ReactNode;
    description: string;
    badgeText: string;
    badgeIcon: React.ReactNode;
}

export default function SolutionHero({ title, description, badgeText, badgeIcon }: SolutionHeroProps) {
    return (
        <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden text-white min-h-[70vh] flex items-center">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-60 mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] opacity-60 mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
            </div>

            <div className="w-[95%] xl:w-[90%] max-w-[1800px] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-300 text-sm font-semibold mb-6 backdrop-blur-sm"
                    >
                        {badgeIcon}
                        {badgeText}
                    </motion.div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        {title}
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                        {description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1"
                        >
                            Book a Demo <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-sm rounded-2xl font-bold hover:bg-white/20 transition-all"
                        >
                            Talk to Sales
                        </Link>
                    </div>
                </motion.div>

                {/* Right side abstract graphic / Floating UI Mockup Placeholder */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-teal-400/30 rounded-3xl blur-2xl animate-pulse" />
                        <div className="relative h-full w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="h-4 w-24 bg-white/20 rounded-full" />
                            </div>
                            <div className="space-y-4 flex-1">
                                <div className="h-8 w-3/4 bg-gradient-to-r from-primary to-teal-400 rounded-lg opacity-80" />
                                <div className="h-24 w-full bg-white/10 rounded-xl" />
                                <div className="flex gap-4">
                                    <div className="h-16 w-1/2 bg-white/10 rounded-xl" />
                                    <div className="h-16 w-1/2 bg-white/10 rounded-xl" />
                                </div>
                                <div className="h-12 w-full bg-white/10 rounded-xl mt-auto" />
                            </div>
                        </div>
                        {/* Floating elements */}
                        <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 top-1/4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-green-400" />
                                </div>
                                <div>
                                    <div className="h-2 w-16 bg-white/60 rounded-full mb-1" />
                                    <div className="h-2 w-10 bg-white/40 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-8 bottom-1/4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-primary" />
                                </div>
                                <div>
                                    <div className="h-2 w-20 bg-white/60 rounded-full mb-1" />
                                    <div className="h-2 w-12 bg-white/40 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
