"use client";

import { motion } from "framer-motion";
import {
    Handshake,
    Users,
    ShoppingCart,
    Building2,
    Calculator,
    Clock,
    TrendingUp,
    Hourglass,
    Layers,
    KanbanSquare,
    Database,
    DoorOpen,
    Box,
    Wifi,
    Truck,
    CalendarDays,
    Store,
    ScanBarcode,
    Package,
    Activity
} from "lucide-react";

const products = [
    // Row 1
    { title: "Delta iDealer", icon: Handshake, color: "border-blue-400 text-blue-500" },
    { title: "Delta CRM", icon: Users, color: "border-blue-400 text-blue-500" },
    { title: "LABHCART", icon: ShoppingCart, color: "border-purple-400 text-purple-500" },
    { title: "Delta Project", icon: Building2, color: "border-pink-400 text-pink-500" },
    { title: "Delta iAccount", icon: Calculator, color: "border-teal-400 text-teal-500" },

    // Row 2
    { title: "Delta iAttendance", icon: Clock, color: "border-amber-400 text-amber-500" },
    { title: "Performance Mgmt", icon: TrendingUp, color: "border-amber-400 text-amber-500" },
    { title: "Delta MyTime", icon: Hourglass, color: "border-amber-400 text-amber-500" },
    { title: "DELTA iERP", icon: Layers, color: "border-pink-400 text-pink-500" },
    { title: "PRONIQ", icon: Activity, color: "border-primary text-primary", isCenter: true },
    { title: "Delta KANBAN", icon: KanbanSquare, color: "border-cyan-400 text-cyan-500" },
    { title: "Delta BigData", icon: Database, color: "border-cyan-400 text-cyan-500" },

    // Row 3
    { title: "Delta GateModule", icon: DoorOpen, color: "border-rose-400 text-rose-500" },
    { title: "Delta Inventory", icon: Box, color: "border-rose-400 text-rose-500" },
    { title: "Delta IOT", icon: Wifi, color: "border-rose-400 text-rose-500" },
    { title: "iVendor Connect", icon: Truck, color: "border-rose-400 text-rose-500" },
    { title: "Project Planning", icon: CalendarDays, color: "border-rose-400 text-rose-500" },

    // Row 4
    { title: "Delta iShop", icon: Store, color: "border-pink-400 text-pink-500" },
    { title: "Delta Barcode", icon: ScanBarcode, color: "border-pink-400 text-pink-500" },
    { title: "Delta iStock", icon: Package, color: "border-pink-400 text-pink-500" },
];

export default function ProductCarousel() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Delta's Product <span className="text-gradient">Ecosystem</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    A comprehensive suite of interconnected modules designed to power every aspect of your business.
                </p>
            </div>

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col items-center gap-6 md:gap-8">

                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {products.slice(0, 5).map((p, i) => (
                            <ProductCard key={i} {...p} />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
                        {products.slice(5, 12).map((p, i) => (
                            <ProductCard key={i} {...p} />
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {products.slice(12, 17).map((p, i) => (
                            <ProductCard key={i} {...p} />
                        ))}
                    </div>

                    {/* Row 4 */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {products.slice(17, 20).map((p, i) => (
                            <ProductCard key={i} {...p} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

function ProductCard({ title, icon: Icon, color, isCenter = false }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`
        relative flex flex-col items-center justify-center
        bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300
        ${isCenter ? "w-40 h-40 md:w-48 md:h-48 border-4 border-primary z-10" : "w-28 h-28 md:w-32 md:h-32 border-2"}
        ${color}
      `}
        >
            <div className={`
        flex items-center justify-center rounded-full mb-3
        ${isCenter ? "w-20 h-20 bg-primary/10" : "w-12 h-12 bg-slate-50"}
      `}>
                {isCenter ? (
                    <img src="./proniq.png" alt="PRONIQ" className="w-14 h-14 object-contain" />
                ) : (
                    <Icon className={`w-6 h-6 ${isCenter ? "text-primary" : "currentColor"}`} />
                )}
            </div>
            <span className={`
        text-center font-bold leading-tight px-2
        ${isCenter ? "text-lg text-slate-900" : "text-[10px] md:text-xs text-slate-700"}
      `}>
                {title}
            </span>
        </motion.div>
    );
}
