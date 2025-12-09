import Link from "next/link";

export default function Infrastructure() {
    return (
        <main className="min-h-screen bg-white text-gray-900">

            {/* Hero Section */}
            <section className="px-6 py-28 text-center bg-gradient-to-b from-gray-50 to-white">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        ERP for the <span className="text-blue-600">Infrastructure Industry</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Plan projects smarter, control costs, and deliver construction projects
                        on time with complete operational visibility.
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
                        Built for Construction Businesses of All Sizes
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "Real Estate Developers",
                            "Infrastructure & EPC Companies",
                            "Contractors & Sub-Contractors",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-lg font-medium">{item}</h3>
                                <p className="mt-3 text-sm text-gray-600">
                                    Centralize planning, execution, billing, and compliance in one system.
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
                        Key Construction ERP Capabilities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Project Planning & Budgeting",
                                desc: "Define project timelines, manage budgets, and track costs in real time.",
                            },
                            {
                                title: "Multi-Site Inventory Management",
                                desc: "Monitor materials across sites to prevent shortages and wastage.",
                            },
                            {
                                title: "Milestone & Contract Billing",
                                desc: "Automate BOQs, billing cycles, retention, and variations.",
                            },
                            {
                                title: "Vendor & Contractor Management",
                                desc: "Track vendor contracts, payments, and performance effortlessly.",
                            },
                            {
                                title: "Compliance & Documentation",
                                desc: "Digitize approvals, site records, and statutory documentation.",
                            },
                            {
                                title: "Real-Time Project Dashboards",
                                desc: "Get instant visibility into progress, profitability, and risks.",
                            },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-lg font-medium">{feature.title}</h3>
                                <p className="mt-3 text-sm text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sub-Industries */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl font-semibold mb-10">
                        Construction Segments We Serve
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { name: "Real Estate", slug: "real-estate" },
                            { name: "Infrastructure", slug: "infrastructure" },
                            { name: "Contractors", slug: "contractors" },
                        ].map((item) => (
                            <Link
                                key={item.slug}
                                href={`/industries/construction/${item.slug}`}
                                className="rounded-full border border-gray-300 px-6 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-24 bg-gray-50 text-center">
                <h2 className="text-3xl font-semibold">
                    Ready to Modernize Your Construction Operations?
                </h2>
                <p className="mt-4 text-gray-600">
                    Replace manual processes and spreadsheets with a powerful ERP platform.
                </p>
                <Link
                    href="/contact"
                    className="inline-block mt-8 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
                >
                    Get Started
                </Link>
            </section>

        </main>
    );
}
