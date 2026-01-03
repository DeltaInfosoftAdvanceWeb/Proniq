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
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-slate-50 flex flex-col">
                  {/* Header with PRONIQ logo */}
                  <div className="bg-white px-4 py-3 border-b border-slate-100 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2">
                      <img
                        src="/proniq.png" // update path if different
                        alt="PRONIQ"
                        className="h-5 w-auto"
                      />
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-medium tracking-[0.16em] uppercase">
                          Overview
                        </span>
                        <span className="font-semibold text-slate-900 text-sm">Dashboard</span>
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-slate-100" />
                  </div>

                  {/* blue info strip */}
                  <div className="px-3 pt-3 shrink-0">
                    <div className="rounded-xl bg-sky-50 border border-sky-100 px-3 py-2 flex items-start gap-2">
                      <div className="mt-0.5">
                        <Info className="w-4 h-4 text-sky-500" />
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        Select a project to view pending approvals and current project status.
                      </p>
                    </div>
                  </div>

                  {/* cards grid – 2x2 */}
                  <div className="flex-1 overflow-y-auto px-3 pt-3 pb-2 space-y-3 no-scrollbar">
                    <div className="grid grid-cols-2 gap-3">
                      {/* Tender Approval */}
                      <div className="rounded-2xl bg-[#F3F7FF] border border-[#D8E2FF] p-3 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <p className="text-[11px] font-semibold text-slate-500">Tender Approval</p>
                          <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-500">
                            <Layout className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-slate-900">0</p>
                          <p className="text-[10px] text-slate-500">Pending tender approvals</p>
                        </div>
                      </div>

                      {/* Tender Final Approval */}
                      <div className="rounded-2xl bg-[#E9FBF0] border border-[#BEEFD1] p-3 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <p className="text-[11px] font-semibold text-emerald-700">
                            Tender Final Approval
                          </p>
                          <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-500">
                            <Smartphone className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <div className="flex items-end justify-between gap-1">
                          <div>
                            <p className="text-xl font-bold text-emerald-700">16</p>
                            <p className="text-[10px] text-emerald-700/80">
                              Pending final approvals
                            </p>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-[10px] text-white font-semibold">
                            Pending
                          </span>
                        </div>
                      </div>

                      {/* DPR Approval */}
                      <div className="rounded-2xl bg-[#FFF4E8] border border-[#FFD9AE] p-3 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <p className="text-[11px] font-semibold text-orange-700">DPR Approval</p>
                          <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-500">
                            <Zap className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <div className="flex items-end justify-between gap-1">
                          <div>
                            <p className="text-xl font-bold text-orange-700">273</p>
                            <p className="text-[10px] text-orange-700/80">
                              Daily progress reports
                            </p>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-orange-500 text-[10px] text-white font-semibold">
                            Pending
                          </span>
                        </div>
                      </div>

                      {/* RA Bill Approval */}
                      <div className="rounded-2xl bg-[#F8EDFF] border border-[#E2C4FF] p-3 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <p className="text-[11px] font-semibold text-fuchsia-700">
                            RA Bill Approval
                          </p>
                          <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-fuchsia-500">
                            <Shield className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <div className="flex items-end justify-between gap-1">
                          <div>
                            <p className="text-xl font-bold text-fuchsia-700">11</p>
                            <p className="text-[10px] text-fuchsia-700/80">
                              Running account bills
                            </p>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-fuchsia-500 text-[10px] text-white font-semibold">
                            Pending
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* bottom nav */}
                  <div className="bg-white border-t border-slate-100 p-3 flex justify-around items-center shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Layout className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400">
                      <Shield className="w-4 h-4" />
                    </div>
                  </div>
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
