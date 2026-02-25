import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, IndianRupee, FileText, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "RA Billing Software for Construction Projects | Proniq",
    description: "Automate RA bill preparation for construction projects. Link bills to measurement books, BOQs, and work orders. Reduce billing cycle from weeks to days.",
    keywords: ["RA billing software", "running account billing", "construction billing automation", "measurement book software", "contractor billing"],
    openGraph: {
        title: "RA Billing Software for Construction Projects | Proniq",
        description: "Automate RA billing. Reduce billing cycles from weeks to days with Proniq.",
        type: "website",
    },
};

export default function RABillingSoftwarePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        <IndianRupee className="w-4 h-4" />
                        RA Billing Automation
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        RA Billing Software for Construction Projects
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        Automate running account bill preparation. Link every line item to measurement books, BOQs, and approved work orders. Reduce billing cycles from weeks to days.
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
                        Problems with Manual RA Billing
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                        Manual RA bill preparation is slow, error-prone, and kills your cash flow. Billing teams spend weeks reconciling measurements with BOQs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Clock,
                                title: "Slow Billing Cycles",
                                description: "RA bills take 2-3 weeks to prepare. Teams manually match measurements to BOQ items, calculate deductions, and verify against previous bills.",
                            },
                            {
                                icon: FileText,
                                title: "Reconciliation Errors",
                                description: "Measurement entries don't match BOQ line items. Previous bill amounts calculated incorrectly. Deductions missed or duplicated.",
                            },
                            {
                                icon: IndianRupee,
                                title: "Cash Flow Impact",
                                description: "Delayed bills mean delayed payments. Working capital tied up in unbilled work. Bank guarantees extended unnecessarily.",
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

            {/* How Proniq Solves It */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
                        How Proniq Automates RA Billing
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                        Every measurement entry is linked to BOQ items from day one. When it's time to bill, the system generates RA bills automatically.
                    </p>
                    <div className="space-y-8">
                        {[
                            {
                                title: "Measurement Book Integration",
                                description: "Site engineers enter measurements against specific BOQ items. System validates quantities against approved estimates. No orphan measurements, no reconciliation later.",
                                stats: { label: "Time Saved", value: "80%" },
                            },
                            {
                                title: "Automatic Bill Generation",
                                description: "Select billing period. System pulls all verified measurements, calculates gross amount, applies deductions (advance, retention, previous bills), and generates final bill.",
                                stats: { label: "Billing Cycle", value: "2 Days" },
                            },
                            {
                                title: "Audit Trail & Compliance",
                                description: "Every bill line item traces back to measurement entries, BOQ items, and work orders. Perfect for client audits and dispute resolution.",
                                stats: { label: "Audit Ready", value: "100%" },
                            },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                <div className="grid md:grid-cols-3 gap-6 items-center">
                                    <div className="md:col-span-2">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                        <p className="text-lg text-slate-600">{feature.description}</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                                        <div className="text-sm text-slate-500 mb-1">{feature.stats.label}</div>
                                        <div className="text-4xl font-bold text-primary">{feature.stats.value}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
                        Key Benefits
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Faster Approvals</h3>
                            <p className="text-lg text-slate-600 mb-4">
                                Bills are accurate and well-documented. Client approvals happen faster because every line item is traceable to source measurements.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Error Reduction</h3>
                            <p className="text-lg text-slate-600 mb-4">
                                System validates measurements against BOQ quantities. Automatic calculation of deductions eliminates manual errors.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Improved Cash Flow</h3>
                            <p className="text-lg text-slate-600 mb-4">
                                Bill within days of work completion. Faster billing means faster payment. Reduce working capital requirements.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Transparency</h3>
                            <p className="text-lg text-slate-600 mb-4">
                                Clients can see measurement entries and BOQ consumption in real-time. Builds trust and reduces payment disputes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features List */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
                        RA Billing Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Link measurements to BOQ items",
                            "Automatic gross amount calculation",
                            "Advance & retention management",
                            "Previous bill deduction tracking",
                            "Multi-level approval workflows",
                            "Client portal for bill verification",
                            "GST & tax calculation",
                            "Export to Tally/SAP",
                            "Mobile measurement entry",
                            "Photo & GPS verification",
                        ].map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-lg text-slate-900">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Proniq */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                        Why Choose Proniq for RA Billing
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Unlike standalone billing software, Proniq integrates RA billing with your entire project workflow. Measurements, BOQs, and billing are always in sync.
                    </p>
                    <ul className="text-left max-w-2xl mx-auto space-y-4 mb-12">
                        {[
                            "No duplicate data entry across modules",
                            "Real-time BOQ consumption tracking",
                            "Seamless integration with daily progress",
                            "Built-in approval workflows",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-lg text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                        See RA Billing in Action <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
