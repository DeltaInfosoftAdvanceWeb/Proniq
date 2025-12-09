import Link from "next/link";

export default function InteriorArchitecture() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="px-6 py-28 text-center bg-gradient-to-b from-gray-50 to-white">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        ERP for <span className="text-purple-600">Interior Architecture</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Manage design projects, materials, vendors, and clients from a single unified platform. 
                        Streamline communication and ensure every detail is perfect.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <Link
                            href="/contact"
                            className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition"
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
                        Built for Interior Design Professionals
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "Interior Design Firms",
                            "Architects & Designers",
                            "Design Studios",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-lg font-medium">{item}</h3>
                                <p className="mt-3 text-sm text-gray-600">
                                    Manage projects, vendors, and clients effortlessly.
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
                        Interior Design ERP Capabilities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Project Tracking",
                                desc: "Monitor design projects from concept to completion.",
                            },
                            {
                                title: "Vendor Management",
                                desc: "Manage suppliers, materials, and vendor communications.",
                            },
                            {
                                title: "Client Portal",
                                desc: "Keep clients updated with project progress and deliverables.",
                            },
                            {
                                title: "Material & Budget Tracking",
                                desc: "Track materials, costs, and budgets in real time.",
                            },
                            {
                                title: "Timeline Management",
                                desc: "Ensure projects stay on schedule with automated timelines.",
                            },
                            {
                                title: "Design Collaboration",
                                desc: "Collaborate with team members and clients seamlessly.",
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
                    <h2 className="text-3xl font-bold">Transform Your Interior Design Practice</h2>
                    <p className="mt-4 text-gray-600">
                        Join design professionals who trust PRONIQ to streamline their workflow.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-block rounded-full bg-purple-600 px-8 py-3 text-white font-semibold hover:bg-purple-700 transition"
                    >
                        Get Started Today
                    </Link>
                </div>
            </section>
        </main>
    );
}
