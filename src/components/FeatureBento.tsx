import Tilt from "./Tilt";
import { Zap, Shield, Layout, MousePointer, Smartphone, Move, Info } from "lucide-react";

export default function FeatureBento() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-gradient">
            Working Features
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Built for real-time project execution, financial control, and operational clarity
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left column cards */}
          <div className="grid gap-6">
            <Tilt>
              <div className="h-full rounded-3xl bg-slate-50 border border-slate-100 p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
                  <MousePointer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Modular Project Suite</h3>
                <p className="text-slate-600 leading-relaxed">
                  Manage diverse modules like Expense Management, Payroll (MyTime), Inventory (iERP),
                  and Finance (iAccount) — all in one place.
                </p>
              </div>
            </Tilt>
            <Tilt>
              <div className="h-full rounded-3xl bg-slate-50 border border-slate-100 p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-blue-500">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Planning & Scheduling</h3>
                <p className="text-slate-600 leading-relaxed">
                  Visualize timelines, track work progress, and plan tasks with Gantt-style views and
                  calendar integration.
                </p>
              </div>
            </Tilt>
          </div>

          {/* Center – mobile dashboard mockup */}
          <Tilt className="md:row-span-2">
            <div className="h-full min-h-[500px] flex items-center justify-center p-4 overflow-hidden">
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl scale-[0.85] sm:scale-100 origin-center transition-transform">
                {/* device chrome */}
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute" />
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg" />
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg" />

                {/* screen */}
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                  <img
                    src="/select-site-details.png"
                    alt="Select Site Details - Proniq Mobile App"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Tilt>

          {/* Right column cards */}
          <div className="grid gap-6">
            <Tilt>
              <div className="h-full rounded-3xl bg-slate-50 border border-slate-100 p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-purple-500">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Tender and BOQ Management
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Upload, approve, and monitor tenders and BOQs with status tracking, Excel export,
                  and secure workflows
                </p>
              </div>
            </Tilt>
            <Tilt>
              <div className="h-full rounded-3xl bg-slate-50 border border-slate-100 p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-amber-500">
                  <Move className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">RA Billing Engine</h3>
                <p className="text-slate-600 leading-relaxed">
                  Generate RA bills automatically with real-time updates, approval workflows, and
                  export to Excel.
                </p>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}
