"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import React from "react";

interface BentoItem {
    title: string;
    description: string;
    icon?: React.ReactNode;
    colSpan?: number;
    gradient?: string;
}

interface FeatureBentoGridProps {
    title: string;
    subtitle?: string;
    items: BentoItem[];
}

export default function FeatureBentoGrid({ title, subtitle, items }: FeatureBentoGridProps) {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <div className="w-[95%] xl:w-[90%] max-w-[1800px] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
                    >
                        {title}
                    </motion.h2>
                    {subtitle && (
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600 max-w-3xl mx-auto"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, idx) => {
                        const colSpanClass = item.colSpan === 2 ? "md:col-span-2" : "md:col-span-1";
                        const gradient = item.gradient || "from-primary/10 to-teal-400/5";
                        
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className={`group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col ${colSpanClass}`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white shadow-sm transition-transform duration-300">
                                        {item.icon || <CheckCircle2 className="w-6 h-6 text-primary" />}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
