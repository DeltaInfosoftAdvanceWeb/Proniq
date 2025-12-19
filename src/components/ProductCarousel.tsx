"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
    // Row 1 (5)
    { title: "Delta iDealer", logo: "/Logos/Delta%20iDealer.png", color: "border-blue-400" },
    { title: "Delta CRM", logo: "/Logos/Deta%20iCRM.png", color: "border-blue-400" },
    { title: "LABHCART", logo: "/Logos/Labhcart.png", color: "border-purple-400" },
    { title: "Delta BigData", logo: "/Logos/Delta%20BigData.png", color: "border-cyan-400" },
    { title: "Delta iAccount", logo: "/Logos/Delta%20iAccount.png", color: "border-teal-400" },

    // Row 2 (6)
    { title: "Delta iAttendance", logo: "/Logos/Delta%20iAttendance.png", color: "border-amber-400" },
    { title: "Performance Mgmt", logo: "/Logos/Performance%20Management%20%20System.png", color: "border-amber-400" },
    { title: "Delta MyTime", logo: "/Logos/Delta%20Mytime.png", color: "border-amber-400" },
    { title: "DELTA iERP", logo: "/Logos/Delta%20iERP.png", color: "border-pink-400" },
    { title: "PRONIQ", logo: "/proniq.png", color: "border-primary", isCenter: true },
    { title: "Delta KANBAN", logo: "/Logos/Delta%20Kanban.png", color: "border-cyan-400" },

    // Row 3 (5)
    { title: "Delta GateModule", logo: "/Logos/Delta%20GateModule.png", color: "border-rose-400" },
    { title: "Delta Inventory", logo: "/Logos/Delta%20Inventory.png", color: "border-rose-400" },
    { title: "Delta IOT", logo: "/Logos/Delta%20IOT.png", color: "border-rose-400" },
    { title: "iVendor Connect", logo: "/Logos/Delta%20iVendor%20connect.png", color: "border-rose-400" },
    { title: "Project Planning", logo: "/Logos/Project%20Management.png", color: "border-rose-400" },

    // Row 4 (3)
    { title: "Delta iShop", logo: "/Logos/iShop.png", color: "border-pink-400" },
    { title: "Delta Barcode", logo: "/Logos/Delta%20Barcode.png", color: "border-pink-400" },
    { title: "Delta iStock", logo: "/Logos/Delta%20iStock.png", color: "border-pink-400" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};


function ProductCard({ title, logo, color, isCenter = false }: any) {
    return (
        <motion.div
            variants={itemVariants}
            className={`
        flex flex-col items-center justify-center
        bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300
        hover:-translate-y-1.5
        ${isCenter
                    ? "w-44 h-44 md:w-52 md:h-52 border-4 border-primary z-10"
                    : "w-32 h-32 md:w-40 md:h-40 border-2"}
        ${color}
      `}
        >
            <div
                className={`
          flex items-center justify-center rounded-full mb-3
          ${isCenter ? "w-28 h-28 bg-primary/10" : "w-24 h-24 bg-slate-50"}
        `}
            >
                <Image
                    src={logo}
                    alt={title}
                    width={isCenter ? 96 : 80}
                    height={isCenter ? 96 : 80}
                    className={`${isCenter ? "w-24 h-24" : "w-20 h-20"} object-contain`}
                />
            </div>

            <span
                className={`
          text-center font-semibold leading-tight px-2
          ${isCenter ? "text-lg text-slate-900" : "text-xs md:text-sm text-slate-700"}
        `}
            >
                {title}
            </span>
        </motion.div>
    );
}

export default function ProductCarousel() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                >
                    Delta's Product <span className="text-gradient">Ecosystem</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-600 max-w-2xl mx-auto"
                >
                    A comprehensive suite of interconnected modules designed to power every
                    aspect of your business.
                </motion.p>
            </div>

            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center gap-8"
                >
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {products.slice(0, 5).map((p) => <ProductCard key={p.title} {...p} />)}
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
                        {products.slice(5, 11).map((p) => <ProductCard key={p.title} {...p} />)}
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {products.slice(11, 16).map((p) => <ProductCard key={p.title} {...p} />)}
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {products.slice(16).map((p) => <ProductCard key={p.title} {...p} />)}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
