"use client";

import { motion } from "framer-motion";
import { Factory, Ruler, Building2, HardHat, Building, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const industries = [
    {
        id: "contractors",
        title: "Contractors",
        icon: HardHat,
        description: "Our flagship ecosystem for General & Specialist Contractors",
        gradient: "from-amber-500 to-orange-500",
        image: "/Contractor.jpeg",
    },
    {
        id: "construction",
        title: "Construction",
        icon: HardHat,
        description: "Coordinate construction activities and site safety in real-time",
        gradient: "from-green-500 to-emerald-500",
        image: "/Construnction.jpeg",
    },
    {
        id: "manufacturing",
        title: "Manufacturing",
        icon: Factory,
        description: "Streamline production workflows and quality control",
        gradient: "from-blue-500 to-cyan-500",
        image: "/manufacturing.jpeg",
    },
    {
        id: "interior-architecture",
        title: "Interior Architecture",
        icon: Ruler,
        description: "Manage design projects from concept to completion",
        gradient: "from-purple-500 to-pink-500",
        image: "/interior-design.jpeg",
    },
    {
        id: "infrastructure",
        title: "Infrastructure",
        icon: Building2,
        description: "Handle large-scale infrastructure projects and remote sites",
        gradient: "from-orange-500 to-amber-500",
        image: "/infrastructure.jpeg",
    },
    {
        id: "engineering",
        title: "Engineering",
        icon: Building,
        description: "Optimize engineering workflows and documentation",
        gradient: "from-indigo-500 to-blue-500",
        image: "/Engin-eering.jpeg",
    },
];

export default function Industry() {
    return (
        <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-primary font-semibold text-sm">Industries We Serve</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Built for <span className="text-gradient">Every Industry</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Specialized solutions tailored to meet the unique demands of your sector
                    </p>
                </motion.div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-12">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Link href={`/industries/${industry.id}`} className="block h-full group">
                                <motion.div
                                    className="relative h-full p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Image background on hover */}
                                    {industry.image && (
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                            <Image src={industry.image} alt="" fill className="object-cover" />
                                        </div>
                                    )}

                                    {/* Gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                                    {/* Icon */}
                                    <motion.div
                                        className={`relative mb-4 w-16 h-16 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg flex-shrink-0 z-10`}
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <industry.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                            {industry.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                                            {industry.description}
                                        </p>
                                        {/* Arrow */}
                                        <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-auto">
                                            <span>Learn more</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        href="/industries"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-teal-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Explore All Industries
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
