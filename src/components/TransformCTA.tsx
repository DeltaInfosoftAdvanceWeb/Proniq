"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TransformCTA() {
    return (
        <section className="py-20 md:py-32 bg-slate-900 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-slate-900 to-secondary/10" />

            {/* Static Decorative Rings - No animation for better performance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />

            <div className="relative max-w-4xl mx-auto px-6 z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl md:text-6xl font-bold mb-8"
                >
                    Ready to Transform <br /> Your Operations?
                </motion.h2>

                <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                    Join industry leaders who are using proniq to drive efficiency, safety, and growth.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-gradient-to-r from-primary to-teal-500 rounded-xl font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all text-lg"
                    >
                        Schedule a Demo
                    </Link>
                    <Link
                        href="/#features"
                        className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all text-lg backdrop-blur-sm"
                    >
                        View All Features
                    </Link>
                </div>
            </div>
        </section>
    );
}
