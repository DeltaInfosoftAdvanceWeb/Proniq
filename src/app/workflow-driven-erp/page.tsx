import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Workflow-Driven ERP Software | Proniq",
    description: "Discover how Proniq's workflow-driven ERP connects every stage of project execution — from tender management to final billing. Built for teams that need real-time visibility and control.",
    keywords: ["workflow-driven ERP", "project execution ERP", "construction workflow software", "ERP automation", "project management ERP"],
    openGraph: {
        title: "Workflow-Driven ERP Software | Proniq",
        description: "Connect every stage of project execution with Proniq's workflow-driven ERP platform.",
        type: "website",
    },
};

export default function WorkflowDrivenERPPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        <Zap className="w-4 h-4" />
                        Workflow-Driven Platform
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Workflow-Driven ERP Software for Seamless Project Execution
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        Stop juggling disconnected tools. Proniq connects tenders, BOQs, daily progress, RA billing, and approvals in one intelligent workflow-driven ERP platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            Book a Demo <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/industries"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-all"
                        >
                            Explore Industries
                        </Link>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
                        Problems with Traditional ERP Systems
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                        Most ERP systems force you to adapt your workflow to their rigid structure. This creates bottlenecks, data silos, and frustrated teams.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Disconnected Modules",
                                description: "Data lives in silos. Teams waste hours reconciling information between procurement, billing, and progress tracking.",
                            },
                            {
                                title: "Manual Handoffs",
                                description: "Every stage requires manual data entry and verification, leading to errors and delays.",
                            },
                            {
                                title: "No Real-Time Visibility",
                                description: "Managers can't see project status until it's too late to take corrective action.",
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
                        How Proniq's Workflow-Driven ERP Works
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                        Proniq connects every stage of your project execution in a single, intelligent workflow. Data flows automatically from tender to billing.
                    </p>
                    <div className="space-y-8">
                        {[
                            {
                                icon: CheckCircle2,
                                title: "Automated Data Flow",
                                description: "Information entered once flows automatically to every relevant module. No duplicate entry, no reconciliation headaches.",
                            },
                            {
                                icon: TrendingUp,
                                title: "Real-Time Progress Tracking",
                                description: "Daily progress updates trigger automatic updates to BOQs, billing schedules, and cost estimates.",
                            },
                            {
                                icon: Shield,
                                title: "Built-In Approval Workflows",
                                description: "Every transaction follows your approval hierarchy automatically. No manual routing, no missed approvals.",
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
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Faster Approvals</h3>
                            <p className="text-lg text-slate-600 mb-4">
                                Automated routing means approvals happen in hours, not days. Your team spends less time chasing signatures and more time executing.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Error Reduction</h3>
                            <p className="text-lg text-slate-600 mb-4">
                                Single-source data entry eliminates transcription errors. Built-in validation catches mistakes before they become costly problems.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Visibility</h3>
                            <p className="text-lg text-slate-600 mb-4">
                                Real-time dashboards show project status, budget variance, and upcoming risks at a glance. Make informed decisions faster.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Scalable Growth</h3>
                            <p className="text-lg text-slate-600 mb-4">
                                Handle more projects without adding overhead. The workflow scales with your business, not against it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Proniq */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                        Why Choose Proniq
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Unlike generic ERP systems, Proniq is built specifically for project execution teams in construction, manufacturing, and infrastructure.
                        We understand your workflows because we've worked with teams like yours for years.
                    </p>
                    <ul className="text-left max-w-2xl mx-auto space-y-4 mb-12">
                        {[
                            "Industry-specific workflows out of the box",
                            "Seamless integration with your existing tools",
                            "Dedicated support from implementation to scale",
                            "Continuous updates based on user feedback",
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
                        Schedule Your Demo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
