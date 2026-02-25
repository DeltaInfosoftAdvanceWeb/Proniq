"use client";

import { useState } from "react";

export default function TenderDashboard() {
    const [searchQuery, setSearchQuery] = useState("");

    // All tenders data
    const allTenders = [
        { id: 1, title: "Retrofitting work for providing water supply", dept: "Additional Engineer", tender: "TEN/68/24-25", date: "Oct 11, 2025", amount: "₹2.75 Cr", status: "upcoming" },
        { id: 2, title: "Development of Sewage System", dept: "Office Engineer", tender: "TEN/64/24-25", date: "Jan 24, 2026", amount: "₹95.99 L", status: "upcoming" },
        { id: 9, title: "Maintenance & Operation Project", dept: "Additional", tender: "TEN/62/24-25", date: "May 15, 2025", amount: "₹45.32 L", status: "upcoming" },
        { id: 3, title: "04/Proc./EPC/MP/NM/25 Balance work", dept: "Managing Director", tender: "TEN/66/24-25", date: "Jul 8, 2025", amount: "₹5.66 Cr", status: "tosubmit" },
        { id: 4, title: "Construction of Brahmani Barrage", dept: "Managing Director", tender: "TEN/41/24-25", date: "Feb 10, 2025", amount: "₹6.80 Cr", status: "tosubmit" },
        { id: 5, title: "WSP of 233 villages Gangatani", dept: "Additional Engineer", tender: "TEN/65/24-25", date: "May 22, 2025", amount: "₹4.02 Cr", status: "submitted" },
        { id: 6, title: "Tender for construction works", dept: "Executive Engineer", tender: "TEN/56/24-25", date: "May 20, 2025", amount: "₹8.39 L", status: "submitted" },
        { id: 10, title: "Execution of works of...", dept: "Office", tender: "TEN/54/24-25", date: "Apr 18, 2025", amount: "₹12.45 L", status: "submitted" },
        { id: 7, title: "Construction of Sukul Gawan", dept: "Office Engineer", tender: "TEN/78/24-25", date: "Awarded", amount: "₹46.57 L", status: "awarded" },
        { id: 8, title: "Construction of Sojana Gurgha", dept: "Office Engineer", tender: "TEN/77/24-25", date: "Awarded", amount: "₹92.66 L", status: "awarded" },
        { id: 11, title: "Billa Mogan Group Project", dept: "N/A", tender: "TEN/76/24-25", date: "Awarded", amount: "₹78.34 L", status: "awarded" },
    ];

    // Filter tenders based on search query
    const filteredTenders = allTenders.filter(tender =>
        tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tender.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tender.tender.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getColumnTenders = (status: string) => filteredTenders.filter(t => t.status === status);

    const columns = [
        {
            id: "upcoming",
            title: "Upcoming tender",
            color: {
                bg: "bg-purple-50/80",
                border: "border-purple-200",
                dot: "bg-purple-500",
                text: "text-purple-800",
                badge: "text-purple-700",
                hover: "hover:shadow-purple-200",
                amount: "text-purple-600",
                cardHover: "group-hover:text-purple-600"
            }
        },
        {
            id: "tosubmit",
            title: "Approval & To be submitted",
            color: {
                bg: "bg-amber-50/80",
                border: "border-amber-200",
                dot: "bg-amber-500",
                text: "text-amber-800",
                badge: "text-amber-700",
                hover: "hover:shadow-amber-200",
                amount: "text-amber-600",
                cardHover: "group-hover:text-amber-600"
            }
        },
        {
            id: "submitted",
            title: "Submitted",
            color: {
                bg: "bg-blue-50/80",
                border: "border-blue-200",
                dot: "bg-blue-500",
                text: "text-blue-800",
                badge: "text-blue-700",
                hover: "hover:shadow-blue-200",
                amount: "text-blue-600",
                cardHover: "group-hover:text-blue-600"
            }
        },
        {
            id: "awarded",
            title: "Awarded",
            color: {
                bg: "bg-emerald-50/80",
                border: "border-emerald-200",
                dot: "bg-emerald-500",
                text: "text-emerald-800",
                badge: "text-emerald-700",
                hover: "hover:shadow-emerald-200",
                amount: "text-emerald-600",
                cardHover: "group-hover:text-emerald-600"
            }
        },
    ];

    return (
        <div className="h-full w-full flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Premium Header */}
            <div className="flex flex-col gap-2 px-3 py-2.5 bg-white/80 backdrop-blur-sm border-b border-slate-200/60">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="flex items-center gap-2">
                            <img src="/proniq.png" alt="proniq" className="w-7 h-7 object-contain" />
                            <div className="h-5 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-900 tracking-tight">Tender Management</div>
                            <div className="text-[7px] text-slate-500 font-medium">Board View • {filteredTenders.length} Tenders</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-2.5 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[7.5px] rounded-lg font-bold hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-blue-500/30 active:scale-95">
                            + Add New Tender
                        </button>
                        <button className="px-2.5 py-1.5 bg-white border border-slate-200 text-slate-700 text-[7.5px] rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-sm active:scale-95">
                            ⚙️ Columns
                        </button>
                        <button className="px-2.5 py-1.5 bg-white border border-slate-200 text-slate-700 text-[7.5px] rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-sm active:scale-95">
                            ↓ Export Data
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search tenders..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-3 py-1.5 pl-8 text-[8.5px] border border-slate-200/60 rounded-lg bg-white/60 backdrop-blur-sm focus:bg-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all placeholder:text-slate-400 font-medium"
                    />
                    <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-0.5 hover:bg-slate-100 rounded"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Kanban Board */}
            <div className="flex-1 grid grid-cols-4 gap-2.5 p-2.5 overflow-hidden">
                {columns.map(column => {
                    const columnTenders = getColumnTenders(column.id);
                    return (
                        <div key={column.id} className="flex flex-col h-full">
                            <div className={`flex items-center justify-between mb-2 px-2.5 py-1.5 ${column.color.bg} rounded-xl border ${column.color.border} backdrop-blur-sm`}>
                                <div className="flex items-center gap-1.5">
                                    <div className={`w-1.5 h-1.5 rounded-full ${column.color.dot}`}></div>
                                    <span className={`text-[9px] font-bold ${column.color.text} tracking-tight`}>{column.title}</span>
                                </div>
                                <span className={`text-[8px] font-extrabold ${column.color.badge} bg-white/80 px-1.5 py-0.5 rounded-full`}>
                                    {columnTenders.length}
                                </span>
                            </div>
                            <div className="flex-1 space-y-1.5 overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                                {columnTenders.length === 0 && searchQuery ? (
                                    <div className="text-center py-6 text-[8px] text-slate-400 font-medium">
                                        <div className="text-2xl mb-1">🔍</div>
                                        No results
                                    </div>
                                ) : (
                                    columnTenders.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`bg-white rounded-xl p-2 border ${column.color.border} shadow-sm hover:shadow-md ${column.color.hover} transition-all duration-200 group cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]`}
                                        >
                                            <div className={`text-[8.5px] font-bold text-slate-900 mb-1.5 leading-tight line-clamp-2 ${column.color.cardHover} transition-colors`}>
                                                {item.title}
                                            </div>
                                            <div className="flex flex-col gap-1 mb-1.5">
                                                <div className="flex items-center gap-1">
                                                    <span className="text-[6.5px] text-slate-600 font-medium bg-slate-50 px-1.5 py-0.5 rounded">
                                                        🏢 {item.dept}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-[6.5px] text-slate-500 font-medium bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
                                                        {item.tender}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between pt-1.5 border-t border-slate-100">
                                                <span className="text-[7px] text-slate-500 font-medium">
                                                    {item.status === "awarded" ? (
                                                        <span className={`${column.color.badge} font-bold flex items-center gap-1`}>
                                                            <span className={`w-1 h-1 rounded-full ${column.color.dot}`}></span>
                                                            Awarded
                                                        </span>
                                                    ) : (
                                                        `📅 ${item.date}`
                                                    )}
                                                </span>
                                                <span className={`text-[9px] font-extrabold ${column.color.amount}`}>{item.amount}</span>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
