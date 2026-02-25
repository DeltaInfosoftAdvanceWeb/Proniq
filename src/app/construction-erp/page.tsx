import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, TrendingDown, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Construction ERP Software | Proniq",
    description: "Purpose-built construction ERP for contractors and builders. Manage BOQs, subcontractors, material procurement, RA billing, and site progress in one platform.",
    keywords: ["construction ERP", "contractor software", "construction management software", "BOQ software", "construction billing", "site management ERP"],
    openGraph: {
        title: "Construction ERP Software | Proniq",
        description: "Purpose-built ERP for construction contractors. Manage projects from tender to handover.",
        type: "website",
    },
};

export default function ConstructionERPPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        <Building2 className="w-4 h-4" />
                        Construction Industry
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Construction ERP Software Built for Contractors
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        From tender submission to final handover — manage BOQs, subcontractors, material procurement, RA billing, and daily site progress in one unified construction ERP platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            Book a Demo <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
                        Common Challenges in Construction Management
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                        Construction projects fail due to poor coordination, cost overruns, and delayed billing cycles.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: TrendingDown,
                                title: "Cost Overruns",
                                description: "Material costs spiral out of control. Subcontractor bills don't match work orders. Budget variance discovered too late.",
                            },
                            {
                                icon: Clock,
                                title: "Delayed Billing",
                                description: "RA bills take weeks to prepare. Missing measurements delay payment. Cash flow suffers.",
                            },
                            {
                                icon: Building2,
                                title: "Site Coordination Issues",
                                description: "Site teams work with outdated BOQs. Material requests don't match estimates. Rework costs money.",
                            },
                        ].map((problem, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <problem.icon className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                                <p className="text-slate-600">{problem.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How Proniq Helps */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
                        How Proniq Construction ERP Solves These Problems
                    </h2>
                    <div className="space-y-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-Time BOQ Management</h3>
                                <p className="text-lg text-slate-600 mb-4">
                                    Your BOQ is the single source of truth. Material requests, work orders, and billing all reference the same BOQ. No version conflicts, no reconciliation.
                                </p>
                                <ul className="space-y-2">
                                    {["Track consumption vs. estimate in real-time", "Flag quantity mismatches before purchase", "Update rates without breaking history"].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                <div className="text-sm text-slate-500 mb-2">BOQ Dashboard</div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">₹2.4 Cr</div>
                                <div className="text-sm text-emerald-600">92% within estimate</div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1 bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                <div className="text-sm text-slate-500 mb-2">Subcontractor Billing</div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">₹18.5 L</div>
                                <div className="text-sm text-slate-600">Verified against measurement book</div>
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Subcontractor Control</h3>
                                <p className="text-lg text-slate-600 mb-4">
                                    Every subcontractor bill is mapped to approved work orders and measurement books. No surprise invoices, no payment disputes.
                                </p>
                                <ul className="space-y-2">
                                    {["Link bills to specific work orders", "Auto-verify against measurement entries", "Track retention and advances"].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
                        Key Features for Construction Teams
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Tender & BOQ Management",
                            "Material Procurement Control",
                            "Daily Progress Reporting",
                            "RA Billing Automation",
                            "Subcontractor Management",
                            "Cost Variance Tracking",
                            "Site Inventory Management",
                            "Approval Workflows",
                            "Mobile Site Access",
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-lg font-semibold text-slate-900">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                        Ready to Transform Your Construction Operations?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Join leading contractors who've reduced costs by 15% and cut billing cycles in half with Proniq.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                        Schedule Your Demo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
