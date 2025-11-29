import Tilt from "./Tilt";
import { Zap, Shield, Layout, MousePointer, Smartphone, Move } from "lucide-react";

export default function FeatureBento() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-gradient">Working Features</h2>
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
                <p className="text-slate-600 leading-relaxed">Manage diverse modules like Expense Management, Payroll (MyTime), Inventory (iERP), and Finance (iAccount) — all in one place.</p>
              </div>
            </Tilt>
            <Tilt>
              <div className="h-full rounded-3xl bg-slate-50 border border-slate-100 p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-blue-500">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Planning & Scheduling</h3>
                <p className="text-slate-600 leading-relaxed">Visualize timelines, track work progress, and plan tasks with Gantt-style views and calendar integration.</p>
              </div>
            </Tilt>
          </div>
          {/* Center Mobile Mockup */}
          <Tilt className="md:row-span-2 ">
            <div className="h-full min-h-[500px] flex items-center justify-center p-4 ">
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-slate-50 flex flex-col">
                  {/* Fake Mobile Header */}
                  <div className="bg-white px-4 py-3 border-b border-slate-100 flex items-center justify-between sticky top-0 z-10 shrink-0">
                    <div className="flex items-center gap-2">
                      <img src="./proniq.png" alt="" style={{ width: "20px", height: "15px" }} />
                      <span className="font-bold text-slate-800 text-sm">Dashboard</span>
                    </div>
                    <div className="w-6 h-6 bg-slate-100 rounded-full"></div>
                  </div>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-3 space-y-3 no-scrollbar">
                    {/* Card 1: Approval */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                      <div className="bg-emerald-500 p-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                          <Smartphone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm leading-tight">Approval Mobile Application</h4>
                          <p className="text-[10px] text-white/80">Created Apr 8, 2025</p>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-xs text-slate-500 mb-4">No description provided</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md font-medium">Active</span>
                          <div className="flex items-center gap-1 text-indigo-600">
                            <div className="w-3 h-3 rounded-full border border-indigo-600 flex items-center justify-center text-[8px]">🌐</div>
                            <span className="text-[10px] font-semibold">Open Project</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Expense */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                      <div className="bg-lime-500 p-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm leading-tight">Expense Management</h4>
                          <p className="text-[10px] text-white/80">Created Apr 1, 2025</p>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-xs text-slate-500 mb-4">To manage all expenses of company like tour...</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md font-medium">Active</span>
                          <div className="flex items-center gap-1 text-indigo-600">
                            <div className="w-3 h-3 rounded-full border border-indigo-600 flex items-center justify-center text-[8px]">🌐</div>
                            <span className="text-[10px] font-semibold">Open Project</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: iAccount */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                      <div className="bg-teal-500 p-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                          <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm leading-tight">iAccount</h4>
                          <p className="text-[10px] text-white/80">Created Apr 1, 2025</p>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-xs text-slate-500 mb-4">To manage all finance related transactions...</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md font-medium">Active</span>
                          <div className="flex items-center gap-1 text-indigo-600">
                            <div className="w-3 h-3 rounded-full border border-indigo-600 flex items-center justify-center text-[8px]">🌐</div>
                            <span className="text-[10px] font-semibold">Open Project</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 4: iERP */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                      <div className="bg-purple-500 p-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                          <Layout className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm leading-tight">iERP System</h4>
                          <p className="text-[10px] text-white/80">Created Apr 1, 2025</p>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-xs text-slate-500 mb-4">This is inventory software where, each stock...</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md font-medium">Active</span>
                          <div className="flex items-center gap-1 text-indigo-600">
                            <div className="w-3 h-3 rounded-full border border-indigo-600 flex items-center justify-center text-[8px]">🌐</div>
                            <span className="text-[10px] font-semibold">Open Project</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fake Bottom Nav */}
                  <div className="bg-white border-t border-slate-100 p-3 flex justify-around items-center shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Layout className="w-4 h-4" /></div>
                    <div className="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400"><Zap className="w-4 h-4" /></div>
                    <div className="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400"><Shield className="w-4 h-4" /></div>
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
                <h3 className="text-xl font-bold text-slate-900 mb-2">Tender and BOQ Management</h3>
                <p className="text-slate-600 leading-relaxed">Upload, approve, and monitor tenders and BOQs with status tracking, Excel export, and secure workflows</p>
              </div>
            </Tilt>
            <Tilt>
              <div className="h-full rounded-3xl bg-slate-50 border border-slate-100 p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-amber-500">
                  <Move className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">RA Billing Engine</h3>
                <p className="text-slate-600 leading-relaxed">Generate RA bills automatically with real-time updates, approval workflows, and export to Excel.</p>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}