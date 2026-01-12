"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const BRAND = "rgb(9 119 153)"; // #097799

const benefitsData = [
  {
    id: "estimate",
    title: "Set up cost estimates in flexible ways",
    description:
      "Configure your cost estimation logic to match your project needs. Whether it's unit-based, lump sum, or milestone-driven, proniq adapts to your workflow and keeps budgets in control from day one.",
    image: "/p4.png",
    tag: "Cost estimation",
  },
  {
    id: "purchases",
    title: "Prevent excess purchases",
    description:
      "Tie Material Requests and Purchase Orders directly to cost estimates. The system flags duplicates and quantity mismatches before they become expensive mistakes.",
    image: "/p3.png",
    tag: "Procurement control",
  },
  {
    id: "subcontractors",
    title: "Control subcontractor payments",
    description:
      "Map subcontractor bills to approved work orders and measurement books. Every rupee is backed by verified progress and contract terms.",
    image: "/p5.png",
    tag: "Subcontractor billing",
  },
  {
    id: "overruns",
    title: "Proactively control cost overruns",
    description:
      "Get live variance insights by material, labour, and machinery. Take corrective action before overruns hit the P&L.",
    image: "/p6.png",
    tag: "Cost variance",
  },
];

export default function Benefits() {
  const [activeId, setActiveId] = useState<string>(benefitsData[1].id);

  const activeItem = benefitsData.find((b) => b.id === activeId) ?? benefitsData[0];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* LEFT – visual panel */}
          <div className="relative">
            {/* soft background blob */}
            <div className="absolute inset-0 -z-20 flex items-center justify-center">
              <div
                className="w-[140%] h-[140%] rounded-full blur-3xl opacity-40"
                style={{ backgroundColor: "rgba(9,119,153,0.18)" }}
              />
            </div>

            {/* decorative stripe */}
            <motion.div
              className="absolute -left-8 top-8 -z-10 h-24 w-24 rounded-3xl opacity-15"
              style={{ backgroundColor: BRAND }}
              animate={{ rotate: [10, -5, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* main visual card */}
            <div className="relative aspect-[4/3] w-full rounded-3xl border border-slate-100 bg-slate-50 shadow-2xl overflow-hidden p-6 flex">
              {/* subtle grid overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.15),transparent_55%)] opacity-80" />

              <div className="relative z-10 flex w-full flex-col gap-4">
                {/* top badge and title */}
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/80 text-slate-700 shadow-sm">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: BRAND }}
                    />
                    <span>{activeItem.tag}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Cost control view
                  </span>
                </div>

                {/* image area */}
                <div className="relative flex-1 rounded-2xl bg-white border border-slate-200/70 overflow-hidden flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeItem.id}
                      initial={{ opacity: 0, y: 18, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -18, scale: 0.97 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="w-full h-full flex items-center justify-center p-4 md:p-6"
                    >
                      <div className="grid gap-4 md:grid-cols-[1.3fr,1fr] w-full h-full">
                        {/* main screenshot */}
                        <div className="relative rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
                          <Image
                            src={activeItem.image}
                            alt={activeItem.title}
                            width={700}
                            height={450}
                            className="h-full w-full object-contain bg-white"
                          />
                        </div>

                        {/* secondary mini-stacks */}
                        <div className="flex flex-col gap-3">
                          <div
                            className="rounded-xl border bg-white px-3 py-3 text-xs shadow-sm flex flex-col gap-2"
                            style={{
                              borderColor: "rgba(148,163,184,0.4)",
                            }}
                          >
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <span>Budget vs Actual</span>
                              <span
                                className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                                style={{ backgroundColor: BRAND }}
                              >
                                Live
                              </span>
                            </div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-lg font-semibold text-slate-900">
                                92.4%
                              </span>
                              <span className="text-[11px] text-emerald-600">
                                on track
                              </span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: "92.4%",
                                  background:
                                    "linear-gradient(90deg, rgb(9,119,153), rgb(45,189,192))",
                                }}
                              />
                            </div>
                          </div>

                          <div className="rounded-xl border border-slate-200/70 bg-slate-900 text-slate-50 px-3 py-3 text-xs shadow-md">
                            <p className="text-[11px] mb-1 text-slate-200">
                              Upcoming risk
                            </p>
                            <p className="text-sm font-medium">
                              {activeItem.id === "overruns"
                                ? "Concrete package is 8% above estimate this week."
                                : "No critical overruns in this week’s review."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* bottom legend */}
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="h-1.5 w-4 rounded-full"
                        style={{ backgroundColor: BRAND }}
                      />
                      Planned
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-4 rounded-full bg-slate-300" />
                      Actual
                    </span>
                  </div>
                  <span>Updated a few seconds ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – accordion */}
          <div className="space-y-8">
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full font-semibold text-xs tracking-wider uppercase mb-4"
                style={{
                  color: BRAND,
                  backgroundColor: "rgba(9,119,153,0.08)",
                }}
              >
                Cost Control
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-3">
                Complete projects within your own cost estimates
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-xl">
                proniq connects cost estimates, material, and subcontractor flows,
                so your team sees the financial impact of every decision in one place.
              </p>
            </div>

            <div className="space-y-3">
              {benefitsData.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border px-4 sm:px-5 transition-all duration-300 ${isActive
                      ? "bg-slate-50 border-[rgba(9,119,153,0.4)] shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                  >
                    <button
                      onClick={() => setActiveId(item.id)}
                      className="w-full flex items-center justify-between py-4 text-left gap-4"
                    >
                      <div className="flex-1">
                        <h3
                          className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${isActive
                            ? "text-[rgb(9,119,153)]"
                            : "text-slate-900 group-hover:text-slate-900"
                            }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full border text-slate-500 transition-all duration-300 ${isActive
                          ? "rotate-180 text-white"
                          : "hover:border-[rgb(9,119,153)] hover:text-[rgb(9,119,153)]"
                          }`}
                        style={
                          isActive
                            ? {
                              backgroundColor: BRAND,
                              borderColor: BRAND,
                            }
                            : {}
                        }
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 pr-1 text-slate-600 text-base leading-relaxed">
                            {item.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
