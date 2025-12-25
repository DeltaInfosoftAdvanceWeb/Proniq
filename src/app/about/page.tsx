import About from "@/components/About";
import TransformCTA from "@/components/TransformCTA";
import { Zap, Layers, BarChart2 } from "lucide-react";
import { Metadata } from "next";

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
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h3 className="text-xl font-semibold">More Products</h3>
            <p className="text-sm text-slate-600 mt-2">Explore other solutions built by our team and partners.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 items-center justify-items-center">
            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/proniq.png" alt="PRONIQ" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20iERP.png" alt="iERP" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20Inventory.png" alt="Inventory" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20iShop.png" alt="iShop" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20iAccount.png" alt="iAccount" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Project%20Management.png" alt="Project Management" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20Approval.png" alt="Delta Approval" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20Barcode.png" alt="Delta Barcode" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20BigData.png" alt="Delta BigData" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20GateModule.png" alt="Delta GateModule" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20iAttendance.png" alt="iAttendance" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20iDealer.png" alt="iDealer" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20Infra.png" alt="Infra" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20IOT.png" alt="IOT" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20iStock.png" alt="iStock" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20iVendor%20connect.png" alt="iVendor connect" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20Kanban.png" alt="Kanban" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20Mytime.png" alt="Mytime" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Delta%20PPC.png" alt="PPC" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Deta%20iCRM.png" alt="iCRM" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Labhcart.png" alt="Labhcart" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Performance%20Management%20%20System.png" alt="Performance Management" className="max-h-24 object-contain" />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <img src="/Logos/favicon/Performance%20Management%20%20System-1.png" alt="Performance Management 2" className="max-h-24 object-contain" />
            </div>
          </div>
        </div>
      </section>
      <TransformCTA />
    </main>
  );
}