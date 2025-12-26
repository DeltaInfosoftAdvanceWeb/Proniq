"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import {
    TrendingUp,
    Users,
    LucideIcon,
} from "lucide-react";
import { useEffect } from "react";

interface Role {
    title: string;
    img: string;
    color: string;
    bg: string;
    position: string;
    icon?: LucideIcon;
}

const roles: Role[] = [
    {
        title: "Project Manager",
        img: "/pm.png",
        color: "#2563eb",
        bg: "#dbeafe",
        position: "top-right",
    },
    {
        title: "Planning Engineer",
        img: "/pe.png",
        color: "#f97316",
        bg: "#ffedd5",
        position: "middle-left",
    },
    {
        title: "Site Engineer",
        img: "/se.png",
        color: "#0ea5e9",
        bg: "#e0f2fe",
        position: "top-center",
    },
    {
        title: "Division Head",
        img: "/DH.png",
        color: "#10b981",
        bg: "#dcfce7",
        position: "bottom-left",
    },
    {
        title: "Procurement Manager",
        img: "/pm.png",
        color: "#7c3aed",
        bg: "#ede9fe",
        position: "bottom-center",
    },
    {
        title: "Accounts Executive",
        img: "/AE.png",
        color: "#ec4899",
        bg: "#fce7f3",
        position: "middle-right",
        icon: TrendingUp,
    },
    {
        title: "General Contractor",
        img: "/se.png",
        color: "#ea580c",
        bg: "#ffedd5",
        position: "top-left",
    },
];

const bubbleVariants = {
    initial: { opacity: 0, y: 18, scale: 0.9 },
    enter: (delay: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, delay },
    }),
    float: {
        y: [0, -6, 0],
        transition: { duration: 4, repeat: Infinity },
    },
};

export default function WhoUses() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("float");
    }, [controls]);

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-6xl ">
                {/* heading */}
                <div className="text-center max-w-3xl mx-auto mb-16 ">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
                    >
                        Unlimited users.{" "}
                        <span className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-gradient">
                            Unmatched collaboration.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600"
                        style={{
                            position: "relative",
                            zIndex: 10,
                        }}
                    >
                        Proniq connects every stakeholder on one platform so work moves
                        faster, decisions are transparent, and coordination between
                        departments is effortless.
                    </motion.p>
                </div>

                {/* central layout */}
                <div className="relative">
                    {/* soft radial background */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center ">
                        <div className="w-[540px] h-[540px] rounded-full bg-white shadow-[0_0_80px_rgba(15,23,42,0.06)]" />
                    </div>

                    {/* central screen with slight parallax zoom */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.94 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.01 }}
                        className="relative mx-auto max-w-3xl rounded-3xl bg-white border border-slate-100 shadow-2xl overflow-hidden"
                    >
                        {/* top bar */}
                        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50">
                            <div className="flex items-center gap-2">
                                <div className="h-7 w-7 rounded-xl bg-blue-600 flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
                                    PR
                                </div>
                                <div>
                                    <p className="text-[11px] text-slate-400 uppercase tracking-[0.16em]">
                                        Purchase Order
                                    </p>
                                    <p className="text-xs font-semibold text-slate-800">
                                        CPPL / 144 / 23
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                                </span>
                                <span className="text-xs text-slate-500">Live workspace</span>
                            </div>
                        </div>

                        {/* main screenshot area */}
                        <div className="bg-white p-4">
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="h-64 rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden flex items-center justify-center"
                            >
                                {/* LOCAL IMAGE FROM /public */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/p5.png"
                                        alt="Proniq interface"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* floating bubbles with continuous motion */}
                    {roles.map((role, index) => {
                        const Icon = role.icon || Users;
                        let containerClass = "";

                        switch (role.position) {
                            case "top-center":
                                containerClass =
                                    "top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center";
                                break;
                            case "middle-left":
                                containerClass =
                                    "top-1/2 left-[4%] -translate-y-1/2 flex flex-col items-center";
                                break;
                            case "bottom-left":
                                containerClass =
                                    "bottom-[4%] left-[18%] flex flex-col items-center";
                                break;
                            case "bottom-center":
                                containerClass =
                                    "bottom-[2%] left-1/2 -translate-x-1/2 flex flex-col items-center";
                                break;
                            case "middle-right":
                                containerClass =
                                    "top-1/2 right-[4%] -translate-y-1/2 flex flex-col items-center";
                                break;
                            case "top-left":
                                containerClass =
                                    "top-[18%] left-[14%] flex flex-col items-center";
                                break;
                            default:
                                containerClass =
                                    "top-[18%] right-[14%] flex flex-col items-center";
                        }

                        return (
                            <motion.div
                                key={role.title}
                                custom={0.25 + index * 0.08}
                                variants={bubbleVariants}
                                initial="initial"
                                whileInView="enter"
                                animate={controls}
                                viewport={{ once: true, amount: 0.3 }}
                                className={`absolute ${containerClass} gap-2`}
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* glowing effect behind avatar */}
                                <motion.div
                                    className="absolute inset-0 rounded-full blur-xl"
                                    style={{
                                        background: `radial-gradient(circle, ${role.color}40 0%, ${role.color}20 50%, transparent 100%)`,
                                        width: "80px",
                                        height: "80px",
                                        left: "50%",
                                        top: "50%",
                                        transform: "translate(-50%, -50%)",
                                        zIndex: -1,
                                    }}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.5,
                                        ease: "easeInOut",
                                    }}
                                />

                                {/* avatar bubble */}
                                <span className="h-16 w-16 rounded-full border-4 shadow-md flex items-center justify-center relative z-10">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                                    <div
                                        className="h-16 w-16 rounded-full border-4 shadow-md flex items-center justify-center relative z-10"
                                        style={{ borderColor: role.bg, backgroundColor: "#ffffff" }}
                                    >
                                        <div
                                            className="h-11 w-11 rounded-full flex items-center justify-center overflow-hidden"
                                            style={{ backgroundColor: role.bg }}
                                        >
                                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                                <Image
                                                    src={role.img}
                                                    alt={role.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </span>

                                {/* label pill */}
                                <div className="rounded-full bg-slate-900 text-white text-xs px-4 py-1.5 shadow-lg whitespace-nowrap">
                                    {role.title}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
