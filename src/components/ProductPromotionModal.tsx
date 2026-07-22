'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Zap, BarChart3, Activity, GitBranch, Layers, ArrowRight } from 'lucide-react';

const ProductPromotionModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenModal = localStorage.getItem('hasSeenPromoModal');
            if (!hasSeenModal) {
                setIsOpen(true);
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenPromoModal', 'true');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-[#097799]/10 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        className="relative w-full max-w-4xl overflow-hidden bg-white shadow-[0_40px_100px_-20px_rgba(9,119,153,0.35)] rounded-[2.5rem] flex flex-col md:flex-row h-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-5 right-5 z-[110] p-2 text-neutral-400 hover:text-white hover:bg-[#097799] transition-all bg-neutral-100/90 backdrop-blur-sm rounded-xl group"
                        >
                            <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                        </button>

                        {/* Left Side: Compact 3D Workflow - Hidden on mobile */}
                        <div className="hidden md:flex w-full md:w-[42%] bg-[#097799] relative overflow-hidden flex-col justify-center items-center p-8 md:p-10 min-h-[220px] md:min-h-full">
                            {/* Visual Background Elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                            <motion.div
                                animate={{ opacity: [0.1, 0.2, 0.1] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white rounded-full blur-[100px]"
                            />

                            {/* Workflow Visualization */}
                            <div className="relative z-10 w-full perspective-[1000px]">
                                <motion.div
                                    initial={{ rotateY: -20, rotateX: 10 }}
                                    animate={{ rotateY: -10, rotateX: 5 }}
                                    className="relative flex flex-col gap-4 transform-style-3d"
                                >
                                    {/* Glass Cards Loop */}
                                    {[
                                        { Icon: Layers, label: 'Centralized Data' },
                                        { Icon: GitBranch, label: 'Smart Workflows' },
                                        { Icon: Activity, label: 'Real-time Execution' }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.6 + (i * 0.1) }}
                                            className="bg-white/15 backdrop-blur-xl border border-white/30 p-4 rounded-2xl flex items-center gap-4 shadow-xl translate-z-10"
                                            style={{ marginLeft: `${i * 20}px` }}
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                                                <item.Icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-white font-bold text-sm tracking-tight">{item.label}</span>
                                        </motion.div>
                                    ))}

                                    {/* 3D Floating Tag */}
                                    <div className="absolute -bottom-8 right-0 bg-white shadow-2xl px-4 py-2 rounded-full flex items-center gap-2 border border-neutral-100 translate-z-20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-black text-[#097799] uppercase tracking-widest">iERP Dynamic Engine</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Side: High-Conversion Content */}
                        <div className="w-full md:w-[58%] p-6 md:p-12 lg:p-14 flex flex-col justify-center bg-white">
                            <div className="mb-6">
                                <span className="inline-block text-[10px] font-black text-[#097799] tracking-[0.2em] uppercase bg-[#097799]/5 px-3 py-1.5 rounded-lg border border-[#097799]/10">
                                    Strategic Advantage
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mb-6 leading-[1.1] tracking-tight">
                                Execute with <span className="text-[#097799]">Confidence</span>
                            </h2>

                            <p className="text-neutral-500 text-base md:text-lg mb-8 leading-relaxed font-medium">
                                The workflow-driven operations platform built for teams that demand <span className="text-neutral-800 font-bold italic underline decoration-[#097799]/30">speed and precision</span>.
                            </p>

                            {/* Compact Feature Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    { icon: <Zap className="w-5 h-5" />, title: "Instant Velocity", desc: "No bottlenecks" },
                                    { icon: <ShieldCheck className="w-5 h-5" />, title: "Zero Data Loss", desc: "Secure vault" }
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 group hover:border-[#097799]/30 transition-colors">
                                        <div className="text-[#097799] mt-1 group-hover:scale-110 transition-transform">{feature.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-neutral-900 text-sm">{feature.title}</h4>
                                            <p className="text-xs text-neutral-400 font-medium">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <motion.button
                                    whileHover={{ y: -2, boxShadow: '0 20px 40px -10px rgba(9,119,153,0.4)' }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => window.open("https://www.deltainfosoft.com/contactus", "_blank")}
                                    className="w-full bg-[#097799] hover:bg-[#075f7a] text-white font-black py-4 md:py-5 rounded-2xl shadow-[0_15px_30px_-10px_rgba(9,119,153,0.3)] text-lg flex items-center justify-center gap-3 transition-all"
                                >
                                    Explore the iERP platform
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                                <p className="text-center text-[10px] text-neutral-400 font-bold tracking-[0.2em] uppercase">
                                    Free onboarding for new teams
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
            <style jsx global>{`
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
                .translate-z-10 {
                    transform: translateZ(10px);
                }
                .translate-z-20 {
                    transform: translateZ(20px);
                }
            `}</style>
        </AnimatePresence>
    );
};

export default ProductPromotionModal;
