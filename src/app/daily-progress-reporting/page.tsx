import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Calendar, BarChart3, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Daily Progress Reporting Software | Proniq",
    description: "Automate daily progress tracking for construction and infrastructure projects. Real-time updates trigger BOQ consumption, billing schedules, and cost variance alerts.",
    keywords: ["daily progress reporting", "construction progress tracking", "site progress software", "daily work report", "project tracking software"],
    openGraph: {
        title: "Daily Progress Reporting Software | Proniq",
        description: "Track site progress in real-time. Automated updates to BOQs, billing, and cost estimates.",
        type: "website",
    },
};

export default function DailyProgressReportingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        <Calendar className="w-4 h-4" />
                        Progress Tracking
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Daily Progress Reporting Software for Construction Projects
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        Capture site progress once, update everything automatically. Daily work reports trigger real-time updates to BOQs, billing schedules, and cost variance alerts.
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
                        Problems with Manual Progress Tracking
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                        Site engineers spend hours filling Excel sheets. Office teams waste days reconciling progress with BOQs and billing schedules.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Delayed Reporting",
                                description: "Progress reports arrive days after work is done. By the time you see the data, it's too late to act.",
                            },
                            {
                                title: "Reconciliation Nightmare",
                                description: "Progress data doesn't match BOQ items. Billing teams manually map work done to contract items.",
                            },
                            {
                                title: "No Early Warnings",
                                description: "Cost overruns discovered weeks later. No alerts when consumption exceeds estimates.",
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
                        How Proniq Automates Daily Progress Reporting
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                        Site engineers enter progress once. The system automatically updates BOQs, triggers billing entries, and flags cost variances.
                    </p>
                    <div className="space-y-8">
                        {[
                            {
                                icon: Calendar,
                                title: "Mobile-First Data Capture",
                                description: "Site engineers use mobile apps to log daily work. Pre-filled BOQ items, photo uploads, and GPS tagging ensure accuracy.",
                            },
                            {
                                icon: BarChart3,
                                title: "Automatic BOQ Updates",
                                description: "Progress entries automatically update BOQ consumption. See real-time variance between estimated and actual quantities.",
                            },
                            {
                                icon: AlertCircle,
                                title: "Instant Cost Alerts",
                                description: "System flags when consumption exceeds estimates by your threshold (e.g., 5%). Take corrective action before it hits P&L.",
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

            {/* Key Benefits */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
                        Key Benefits
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-Time Visibility</h3>
                            <p className="text-lg text-slate-600">
                                See today's progress on your dashboard within hours. No waiting for weekly reports or month-end reconciliation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Faster Billing Cycles</h3>
                            <p className="text-lg text-slate-600">
                                Progress data flows directly to RA bills. What used to take weeks now takes days. Improve cash flow immediately.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Proactive Cost Control</h3>
                            <p className="text-lg text-slate-600">
                                Get alerts when consumption trends exceed estimates. Take corrective action before overruns become permanent.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Audit-Ready Records</h3>
                            <p className="text-lg text-slate-600">
                                Every progress entry is timestamped, geo-tagged, and photo-verified. Perfect for client audits and dispute resolution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 text-center">
                        Seamless Integration with Your Workflow
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 text-center">
                        Daily progress reporting isn't a standalone module. It's the heartbeat of your entire workflow-driven ERP.
                    </p>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                        <div className="space-y-4">
                            {[
                                { from: "Progress Entry", to: "BOQ Consumption Update" },
                                { from: "BOQ Update", to: "Cost Variance Alert" },
                                { from: "Progress Entry", to: "RA Billing Schedule" },
                                { from: "Progress Entry", to: "Material Requirement Forecast" },
                            ].map((flow, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="flex-1 bg-white px-4 py-3 rounded-lg border border-slate-200 text-slate-900 font-semibold">
                                        {flow.from}
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-primary" />
                                    <div className="flex-1 bg-white px-4 py-3 rounded-lg border border-slate-200 text-slate-900 font-semibold">
                                        {flow.to}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                        Stop Chasing Progress Reports
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        See how Proniq's daily progress reporting can cut your billing cycle in half and catch cost overruns before they happen.
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
