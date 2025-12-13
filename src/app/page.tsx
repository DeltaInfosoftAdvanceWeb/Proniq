'use client'
import Hero from "@/components/Hero";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import FeatureBento from "@/components/FeatureBento";
import Timeline from "@/components/Timeline";
import Screenshots from "@/components/Screenshots";
import Benefits from "@/components/Benefits";
import Industry from "@/components/Industry";
import WhyChoose from "@/components/WhyChoose";
import About from "@/components/About";
import { useRef } from "react";
import TransformCTA from "@/components/TransformCTA";

export default function Home() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const scrollToTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="bg-white">
      <div className="w-full bg-gradient-to-b from-white to-slate-50">
        <MacbookScroll
          src="p1.png"
          showGradient={true}
          title={
            <span className="text-center flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-teal-400 to-green-500 bg-clip-text text-transparent">
                PRONIQ
              </span>
              <span className="text-2xl md:text-3xl font-light text-neutral-500 dark:text-white">The workflow-driven iERP & operations platform built for execution-focused teams.</span>
            </span>
          }
        />
      </div>
      <Hero scrollToTimeline={scrollToTimeline} />
      <FeatureBento />
      <Timeline ref={timelineRef} />
      <Benefits />
      <Industry />
      <WhyChoose />
      <About />
      {/* CTA Section */}
      <TransformCTA />
    </div>
  );
}
