import About from "@/components/About";
import TransformCTA from "@/components/TransformCTA";
import { Zap, Layers, BarChart2, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About PRONIQ | Our Story & Vision",
  description: "Learn about PRONIQ and our mission to empower modern infrastructure teams with operational clarity and precision-built ERP solutions.",
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
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are a team of passionate designers and engineers building the future of web development.
          </p>
        </div>
      </section>
      <About />
      <section className="px-6 py-20 bg-gradient-to-r from-primary/5 via-transparent to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Why <span className="text-gradient">PRONIQ</span>
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

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-gradient">Products</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to streamline every aspect of your infrastructure business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/erp-dashboard-new.png"
                  alt="Proniq ERP Suite"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Proniq ERP Suite</h3>
                <p className="text-slate-600 mb-6">
                  The central nervous system for your business. Manage finance, HR, and operations in one unified platform.
                </p>
                <div className="flex text-primary font-semibold items-center group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/ModernTenderKanban.png"
                  alt="Project & Site Management"
                  fill
                  className="object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Project & Site Control</h3>
                <p className="text-slate-600 mb-6">
                  Real-time site tracking, tender management, and resource allocation to keep projects on schedule and budget.
                </p>
                <div className="flex text-primary font-semibold items-center group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/p1.png"
                  alt="Advanced Analytics"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Analytics</h3>
                <p className="text-slate-600 mb-6">
                  Turn data into decisions with powerful reporting tools, forecasting, and operational insights.
                </p>
                <div className="flex text-primary font-semibold items-center group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Powered by the <span className="text-gradient">Delta Ecosystem</span>
            </h2>
            <p className="text-slate-600">
              Seamlessly integrated modules for complete operational control.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              "Delta iERP.png",
              "Delta Inventory.png",
              "Delta PPC.png",
              "Delta Kanban.png",
              "Delta iAttendance.png",
              "Delta IOT.png",
              "Delta iAccount.png",
              "Delta BigData.png",
            ].map((logo, index) => (
              <div key={index} className="relative w-32 h-16 md:w-40 md:h-20 transition-transform hover:scale-105">
                <Image
                  src={`/Logos/favicon/${logo}`}
                  alt={logo.replace(".png", "")}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TransformCTA />
    </main>
  );
}