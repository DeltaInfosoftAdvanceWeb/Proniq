'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronRight,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Code,
  Rocket,
  Gauge,
  ArrowRight,
  Check,
  Star,
  Play,
  Building2,
  FileText,
  Calendar,
  IndianRupee,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react"

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

interface TenderCardProps {
  title?: string;
  authority?: string;
  tenderId?: string;
  date?: string;
  amount?: string;
}

function TenderCard({
  title = "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  authority = "Executive Director,...",
  tenderId = "TEN/63/24-25",
  date = "Oct 27, 2021",
  amount = "₹0",
}: TenderCardProps) {
  return (
    <CardContainer className="">
      <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-5 border shadow-2xl">
        <CardItem
          translateZ="50"
          className="space-y-4"
        >
          <CardItem
            as="h3"
            translateZ="60"
            className="font-bold text-slate-900 leading-tight text-sm"
          >
            {title}
          </CardItem>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            <CardItem
              translateZ="40"
              className="flex items-center gap-2 text-slate-500"
            >
              <Building2 className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[10px] font-medium truncate">{authority}</span>
            </CardItem>
            <CardItem
              translateZ="40"
              className="flex items-center gap-2 text-slate-500"
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[10px] font-medium">{tenderId}</span>
            </CardItem>
            <CardItem
              translateZ="40"
              className="flex items-center gap-2 text-slate-500"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[10px] font-medium">{date}</span>
            </CardItem>
            <CardItem
              translateZ="40"
              className="flex items-center gap-2 text-slate-500"
            >
              <IndianRupee className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[10px] font-medium">{amount}</span>
            </CardItem>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <CardItem
              translateZ="20"
              as="button"
              className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Show Details
              <ChevronDown className="w-3.5 h-3.5" />
            </CardItem>
            <CardItem
              translateZ="20"
              as="button"
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <MoreHorizontal className="w-4 h-4" />
            </CardItem>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default function Page({ scrollToTimeline }: { scrollToTimeline: any }) {
  const router = useRouter();
  const prevScroll = useRef(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrollPos(current);
      if (current < prevScroll.current) {
        // scrolling up
        setShowOverlay(true);
      } else {
        setShowOverlay(false);
      }
      prevScroll.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed legacy mounted/scrollY logic – using showOverlay & scrollPos instead

  // Render overlay when scrolling up
  const overlay = showOverlay ? (
    <div className="fixed top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded shadow-md text-sm text-gray-800 z-50">
      {/* Scroll Position: {scrollPos}px */}
    </div>
  ) : null;

  return (
    <>
      {overlay}
      <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-[120px]"
            style={{ animation: "float 15s ease-in-out infinite" }}
          />
          <div
            className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-[100px]"
            style={{ animation: "float 18s ease-in-out infinite reverse" }}
          />
          <div
            className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px]"
            style={{ animation: "float 20s ease-in-out infinite 2s" }}
          />
        </div>


        {/* Hero Section */}
        <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: "#f8fafc" }}>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Animated badge */}
            <div className="flex justify-center mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md transition-all cursor-pointer group hover:scale-105">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">Next‑Gen proniq Live</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

            {/* Hero content */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
              {/* Left content */}
              <div className="space-y-8 text-center lg:text-left animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
                    <span className="text-gradient">Workflow-Driven iERP Software</span>
                    <br />
                    for Project Execution Teams
                  </h1>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                    Manage tenders, BOQs, daily progress tracking, RA billing, and approvals in one seamless workflow-driven ERP.
                    From estimation to handover — eliminate delays, reduce costs, and boost productivity across construction, manufacturing, and infrastructure projects.
                  </p>
                </div>

                {/* Premium CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <button className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden" onClick={scrollToTimeline}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
                    <span className="relative flex items-center justify-center gap-2">
                      Launch Your Workflow
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <Play className="w-5 h-5 fill-slate-700" />
                    Take a Quick Tour
                  </button>
                </div>

              </div>

              {/* Right content - Visual */}
              <div
                className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 rounded-[3rem] rotate-3 border border-white/50 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-white/40 rounded-[3rem] -rotate-3 border border-white/60 backdrop-blur-md shadow-2xl" />

                {/* Floating Cards Container */}
                <div className="relative w-full h-full p-8 perspective-1000">
                  {/* Main Dashboard Card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
                    {/* Fake UI Header */}
                    <div className="h-12 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                        <div className="w-3 h-3 rounded-full bg-green-400/80" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="h-6 w-40 bg-slate-200/50 rounded-md" />
                      </div>
                    </div>
                    {/* Fake UI Body */}
                    <div className="p-6 grid grid-cols-3 gap-6">
                      <div className="col-span-2 space-y-4">
                        <div className="h-32 from-primary/5 to-secondary/5 rounded-xl border border-primary/10"><img src="/p1.png" alt="" srcSet="/p1.png 1x, /p1@2x.png 2x" /></div>
                        <div className="space-y-2">
                          <div className="h-4 w-3/4 bg-slate-100 rounded" />
                          <div className="h-4 w-1/2 bg-slate-100 rounded" />
                        </div>
                      </div>
                      <div className="space-y-4">

                      </div>
                    </div>
                  </div>

                  {/* Floating Elements - Hidden on mobile */}
                  <div className="hidden md:block absolute top-[5%] -right-16 z-20 animate-float" style={{ animationDelay: "1s" }}>
                    <div className="w-[300px]">
                      <TenderCard />
                    </div>
                  </div>

                  <div className="hidden md:block absolute top-[50%] -right-12 z-20 animate-float" style={{ animationDelay: "2.5s" }}>
                    <div className="w-[320px]">
                      <TenderCard
                        title="Construction of New Administrative Block at Jaipur"
                        authority="PWD, Rajasthan"
                        tenderId="PWD/2024/89"
                        date="Nov 15, 2024"
                        amount="₹2.5 Cr"
                      />
                    </div>
                  </div>

                  <div className="hidden md:block absolute bottom-[20%] -left-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-float" style={{ animationDelay: "2s" }}>
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <img key={i} src="user.png" alt="" style={{ width: "20px", height: "20px", borderRadius: "50%" }} />
                        ))}
                      </div>
                      <div className="text-xs font-medium text-slate-600">
                        <span className="text-primary font-bold">Trusted by</span>professionals
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Stats Section */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  value: "High Reliability",
                  label: "Consistent performance.",
                  icon: Shield,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  value: "Smooth Experience",
                  label: "No lag, no friction.",
                  icon: Zap,
                  color: "from-amber-500 to-orange-500"
                },
                {
                  value: "Works With Your Tools",
                  label: "Compatibility at its core.",
                  icon: Code,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  value: "Human Support",
                  label: "Real time, Real help.",
                  icon: Users,
                  color: "from-emerald-500 to-teal-500"
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, 20px); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
        <AnimatePresence>
          {videoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setVideoOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <button
                  onClick={() => setVideoOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                <video
                  src="/proniq.mp4"
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main >
    </>
  )
}

