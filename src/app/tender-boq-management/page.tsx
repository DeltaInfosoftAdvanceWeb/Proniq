import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Calculator, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
    title: "Tender & BOQ Management Software | Proniq",
    description: "Streamline tender submission and BOQ management for construction projects. From cost estimation to final billing — one integrated platform.",
    keywords: ["tender management software", "BOQ software", "bill of quantities", "cost estimation software", "tender submission", "construction estimating"],
    openGraph: {
        title: "Tender & BOQ Management Software | Proniq",
        description: "Manage tenders and BOQs from estimation to execution. Integrated with procurement and billing.",
        type: "website",
    },
};

export default function TenderBOQManagementPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        <FileText className="w-4 h-4" />
                        Tender & BOQ Management
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Tender & BOQ Management Software for Construction
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        From tender submission to project completion — manage cost estimates, BOQs, material procurement, and billing in one integrated platform. Your BOQ is the single source of truth.
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
                        Common Problems with Tender & BOQ Management
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                        BOQs created for tender submission become outdated the moment execution starts. Teams maintain multiple versions across Excel, email, and ERP.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Version Chaos",
                                description: "Tender BOQ, approved BOQ, working BOQ — which one is correct? Teams waste hours reconciling different versions.",
                            },
                            {
                                title: "Disconnected Execution",
                                description: "BOQ sits in Excel. Material requests reference different item codes. Billing team creates their own BOQ for RA bills.",
                            },
                            {
                                title: "No Cost Control",
                                description: "Can't track actual consumption vs. estimated quantities in real-time. Cost overruns discovered at month-end.",
                            },
                        ].map((problem, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                                <p className="text-slate-600">{problem.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How Proniq Solves It */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
                        How Proniq Integrates Tender & BOQ Management
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                        Your BOQ becomes the backbone of your entire project workflow. From tender submission to final billing, everything references the same BOQ.
                    </p>
                    <div className="space-y-8">
                        {[
                            {
                                icon: FileText,
                                title: "Tender Submission & Tracking",
                                description: "Create detailed BOQs for tender submission. Track tender status, deadlines, and required documents. Import client BOQ formats directly.",
                            },
                            {
                                icon: Calculator,
                                title: "Flexible Cost Estimation",
                                description: "Configure cost estimation logic — unit-based, lump sum, or milestone-driven. Update rates without losing historical data. Compare multiple scenarios.",
                            },
                            {
                                icon: TrendingUp,
                                title: "Live BOQ Consumption Tracking",
                                description: "Material requests, work orders, and progress entries automatically update BOQ consumption. See variance in real-time, not at month-end.",
                            },
                        ].map((feature, idx) => (
                            <div key={idx} className="flex gap-6 items-start bg-slate-50 p-8 rounded-2xl">
                                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-lg text-slate-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Workflow */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
                        BOQ-Driven Workflow
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Pre-Execution</h3>
                            <ul className="space-y-3">
                                {[
                                    "Create tender BOQ with detailed estimates",
                                    "Submit tender with required documents",
                                    "Track tender status & deadlines",
                                    "Convert approved tender to project BOQ",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">During Execution</h3>
                            <ul className="space-y-3">
                                {[
                                    "Material requests reference BOQ items",
                                    "Work orders linked to BOQ line items",
                                    "Daily progress updates BOQ consumption",
                                    "RA bills generated from BOQ data",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
                        Key Benefits
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Single Source of Truth</h3>
                            <p className="text-lg text-slate-600">
                                One BOQ for tender, execution, and billing. No version conflicts, no reconciliation nightmares.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Prevent Excess Purchases</h3>
                            <p className="text-lg text-slate-600">
                                Material requests are validated against BOQ quantities. System flags when cumulative requests exceed estimates.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-Time Cost Control</h3>
                            <p className="text-lg text-slate-600">
                                See budget vs. actual consumption live. Take corrective action before overruns hit your P&L.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Faster Billing</h3>
                            <p className="text-lg text-slate-600">
                                RA bills pull directly from BOQ consumption data. What used to take weeks now takes days.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
                        Tender & BOQ Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Import client BOQ formats (Excel, PDF)",
                            "Multi-level BOQ hierarchy",
                            "Flexible rate structures",
                            "Version control & history",
                            "Cost scenario comparison",
                            "Material quantity takeoff",
                            "Subcontractor work allocation",
                            "Real-time consumption tracking",
                            "Variance alerts & reports",
                            "Integration with procurement & billing",
                        ].map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-lg text-slate-900">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                        Make Your BOQ Work for You
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        See how Proniq transforms your BOQ from a static document into the living backbone of your project execution.
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
