import About from "@/components/About";
import Image from "next/image";
import TransformCTA from "@/components/TransformCTA";
import { Zap, Layers, BarChart2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About proniq | Our Story & Vision",
  description: "Learn about proniq and our mission to empower modern infrastructure teams with operational clarity and precision-built ERP solutions.",
};

export default function Page() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <section className="relative pt-32 pb-20 px-6">

        <div className="absolute inset-0 bg-primary/5 -z-10" />


        <div className="container mx-auto max-w-6xl text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Our <span className="text-gradient">Story</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
            We are a team of passionate designers and engineers building the future of web development.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            <div className="relative h-24 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center p-4 group hover:shadow-xl transition-all duration-300">
              <Image
                src="/Logos/favicon/Delta iERP.png"
                alt="Delta iERP"
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative h-24 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center p-4 group hover:shadow-xl transition-all duration-300 md:translate-y-8">
              <Image
                src="/Logos/favicon/Delta iAccount.png"
                alt="Delta iAccount"
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative h-24 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center p-4 group hover:shadow-xl transition-all duration-300">
              <Image
                src="/Logos/favicon/Delta Mytime.png"
                alt="Delta Mytime"
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative h-24 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center p-4 group hover:shadow-xl transition-all duration-300 md:translate-y-8">
              <Image
                src="/Logos/favicon/Delta AI.png"
                alt="Delta AI"
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
      <About />
      <section className="px-6 py-20 bg-gradient-to-r from-primary/5 via-transparent to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Why <span className="text-gradient">proniq</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Industry-tailored ERP that moves fast, scales with your business, and turns operations into
              measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-teal-400 text-white mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Deployment</h3>
              <p className="text-sm text-slate-600">Get started quickly with pre-built industry workflows and sensible defaults.</p>
            </div>

            <div className="relative group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 text-white mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Modular Architecture</h3>
              <p className="text-sm text-slate-600">Pick modules you need: finance, inventory, projects — mix and match as you scale.</p>
            </div>

            <div className="relative group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white mb-4">
                <BarChart2 className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Data-Driven</h3>
              <p className="text-sm text-slate-600">Real-time dashboards and actionable insights to improve site and project outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <TransformCTA />
    </main>
  );
}