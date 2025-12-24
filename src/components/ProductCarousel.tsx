"use client";

import Image from "next/image";

const products = [
    { title: "Delta iDealer", logo: "/Logos/Delta iDealer.png", category: "Sales & Distribution" },
    { title: "Delta CRM", logo: "/Logos/Deta iCRM.png", category: "Customer Relations" },
    { title: "LABHCART", logo: "/Logos/Labhcart.png", category: "E-Commerce" },
    { title: "Delta BigData", logo: "/Logos/Delta BigData.png", category: "Analytics" },
    { title: "Delta iAccount", logo: "/Logos/Delta iAccount.png", category: "Finance" },
    { title: "Delta iAttendance", logo: "/Logos/Delta iAttendance.png", category: "HR Management" },
    { title: "Performance Mgmt", logo: "/Logos/Performance Management  System.png", category: "HR Management" },
    { title: "Delta MyTime", logo: "/Logos/Delta Mytime.png", category: "Time Tracking" },
    { title: "DELTA iERP", logo: "/Logos/Delta iERP.png", category: "Enterprise Resource" },
    { title: "PRONIQ", logo: "/proniq.png", category: "Workflow Platform" },
    { title: "Delta KANBAN", logo: "/Logos/Delta Kanban.png", category: "Project Management" },
    { title: "Delta GateModule", logo: "/Logos/Delta GateModule.png", category: "Security" },
    { title: "Delta Inventory", logo: "/Logos/Delta Inventory.png", category: "Inventory" },
    { title: "Delta IOT", logo: "/Logos/Delta IOT.png", category: "IoT Solutions" },
    { title: "iVendor Connect", logo: "/Logos/Delta iVendor connect.png", category: "Vendor Management" },
    { title: "Project Planning", logo: "/Logos/Project Management.png", category: "Project Management" },
    { title: "Delta iShop", logo: "/Logos/iShop.png", category: "E-Commerce" },
    { title: "Delta Barcode", logo: "/Logos/Delta Barcode.png", category: "Inventory" },
    { title: "Delta iStock", logo: "/Logos/Delta iStock.png", category: "Stock Management" },
];

export default function ProductCarousel() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Delta's Product <span className="text-gradient">Ecosystem</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        A comprehensive suite of interconnected modules designed to power every aspect of your business.
                    </p>
                </div>

                {/* Simple Grid Layout */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                        {products.map((product) => (
                            <div
                                key={product.title}
                                className="group bg-white rounded-xl p-4 border border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-200"
                            >
                                {/* Logo */}
                                <div className="aspect-square flex items-center justify-center mb-3 bg-slate-50 rounded-lg p-3">
                                    <Image
                                        src={product.logo}
                                        alt={product.title}
                                        width={64}
                                        height={64}
                                        quality={50}
                                        loading="lazy"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="font-semibold text-sm text-slate-900 text-center mb-1 line-clamp-2">
                                    {product.title}
                                </h3>

                                {/* Category */}
                                <p className="text-xs text-slate-500 text-center">
                                    {product.category}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-12">
                    <p className="text-sm text-slate-500">
                        All products seamlessly integrate with each other for a unified experience
                    </p>
                </div>
            </div>
        </section>
    );
}
