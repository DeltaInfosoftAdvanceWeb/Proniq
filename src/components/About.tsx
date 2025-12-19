"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useState, useRef, Fragment } from "react";

const features = [
  { label: "Tender Management", angle: 0, color: "from-amber-400 to-orange-500", icon: "📋" },
  { label: "Quick Actions", angle: 45, color: "from-violet-500 to-purple-500", icon: "⚡" },
  { label: "Task Tracking", angle: 90, color: "from-pink-500 to-rose-500", icon: "✓" },
  { label: "Progress Reports", angle: 135, color: "from-fuchsia-500 to-pink-500", icon: "📈" },
  { label: "QAP", angle: 180, color: "from-emerald-400 to-green-500", icon: "🎯" },
  { label: "Dashboard", angle: 225, color: "from-cyan-400 to-teal-500", icon: "📱" },
  { label: "RA Bills", angle: 270, color: "from-blue-400 to-cyan-500", icon: "💰" },
  { label: "BOQ Upload", angle: 315, color: "from-indigo-400 to-blue-500", icon: "📊" },
];

function FeatureBubbles() {
  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center scale-[0.85] sm:scale-100">
      {/* Ambient Glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl animate-pulse" />

      {/* Orbital Rings */}
      <div className="absolute inset-0 rounded-full border border-slate-200/50" />
      <div className="absolute inset-[15%] rounded-full border border-slate-200/50" />
      <div className="absolute inset-[30%] rounded-full border border-slate-100/50" />

      {/* Rotating Ring */}
      <motion.div
        className="absolute inset-[10%] rounded-full border border-dashed border-slate-300/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Central Hub */}
      <div className="relative z-20 w-32 h-32 bg-white rounded-full shadow-2xl shadow-primary/20 flex items-center justify-center p-6 border border-slate-100">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <Image
          src="/proniq.png"
          alt="PRONIQ"
          width={80}
          height={80}
          className="relative z-10 w-full h-auto object-contain"
        />
      </div>

      {/* Connecting Lines Container */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="lineGradient" x1="50%" y1="50%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" stopOpacity="0" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {features.map((feature, i) => {
          const radius = 42; // Percentage from center
          const x = 50 + radius * Math.cos((feature.angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((feature.angle * Math.PI) / 180);

          return (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${x}%`}
              y2={`${y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true, margin: "-100px", amount: 0.3 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {features.map((feature, i) => {
        const radius = 42; // Percentage from center
        const x = 50 + radius * Math.cos((feature.angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((feature.angle * Math.PI) / 180);

        return (
          <motion.div
            key={i}
            className="absolute z-10"
            style={{ left: `${x}%`, top: `${y}%`, willChange: 'transform, opacity' }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px", amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: i * 0.1
            }}
          >
            <motion.button
              className={`
                  relative group flex items-center gap-2 p-2 sm:px-4 sm:py-2.5 rounded-full 
                  bg-white border border-slate-100 shadow-lg shadow-slate-200/50
                  hover:shadow-xl hover:scale-105 transition-all duration-300
                  -translate-x-1/2 -translate-y-1/2 whitespace-nowrap
                `}
            >
              <div className={`
                  w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm
                  bg-gradient-to-br ${feature.color} shadow-inner
                `}>
                {feature.icon}
              </div>
              <span className="hidden sm:block font-semibold text-slate-700 text-sm group-hover:text-slate-900">
                {feature.label}
              </span>

              {/* Hover Glow */}
              <div className={`
                  absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300
                  bg-gradient-to-r ${feature.color} blur-md -z-10
                `} />
            </motion.button>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24">

      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left column: text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">
                Empowering modern{" "}
                <span className="text-gradient">infrastructure teams</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                PRONIQ is a unified ERP platform built to simplify execution,
                billing, and progress tracking across real-world projects. We
                combine elegant design with operational clarity to help teams
                deliver faster, smarter, and with confidence.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Built for precision and scale",
                "Designed for clarity and control",
                "Trusted by teams who build the future",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: bubbles */}
          <FeatureBubbles />
        </div>
      </div>
    </section>
  );
}