import Link from "next/link";

export default function Manufacturing() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="px-6 py-28 text-center bg-gradient-to-b from-gray-50 to-white">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        ERP for the <span className="text-blue-600">Manufacturing Industry</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Digitize production workflows with advanced planning, inventory, and quality control systems. 
                        Gain real-time visibility into every stage of your manufacturing process.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <Link
                            href="/contact"
                            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="#solutions"
                            className="rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 transition"
                        >
                            Explore Features
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who It's For */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold text-center mb-12">
                        Built for Manufacturers
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "Discrete Manufacturers",
                            "Process Industries",
                            "Contract Manufacturers",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-lg font-medium">{item}</h3>
                                <p className="mt-3 text-sm text-gray-600">
                                    Optimize operations and maximize efficiency.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section id="solutions" className="px-6 py-20 bg-gray-50">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold text-center mb-14">
                        Manufacturing ERP Capabilities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Production Planning",
                                desc: "Plan and optimize production schedules with precision.",
                            },
                            {
                                title: "Quality Control",
                                desc: "Maintain quality standards throughout the production process.",
                            },
                            {
                                title: "Inventory Management",
                                desc: "Track and manage inventory levels efficiently.",
                            },
                            {
                                title: "Supply Chain Visibility",
                                desc: "Monitor suppliers and materials in real time.",
                            },
                            {
                                title: "Production Tracking",
                                desc: "Track production progress and identify bottlenecks.",
                            },
                            {
                                title: "Cost Management",
                                desc: "Control costs and improve profitability.",
                            },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-lg font-medium">{feature.title}</h3>
                                <p className="mt-2 text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-20 text-center">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold">Optimize Your Manufacturing Operations</h2>
                    <p className="mt-4 text-gray-600">
                        Join leading manufacturers using PRONIQ to increase efficiency and profitability.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
                    >
                        Get Started Today
                    </Link>
                </div>
            </section>
        </main>
    );
}
