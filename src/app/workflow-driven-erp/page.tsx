import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Shield } from "lucide-react";

import SolutionHero from "@/components/SolutionHero";
import FeatureBentoGrid from "@/components/FeatureBentoGrid";

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
            <SolutionHero
                badgeText="Workflow-Driven Platform"
                badgeIcon={<Zap className="w-4 h-4" />}
                title="Seamless Project Execution from Tender to Billing"
                description="Stop juggling disconnected tools. Proniq connects tenders, BOQs, daily progress, RA billing, and approvals in one intelligent workflow-driven ERP platform."
            />

            <FeatureBentoGrid
                title="Problems with Traditional ERPs"
                subtitle="Most ERP systems force you to adapt your workflow to their rigid structure. This creates bottlenecks, data silos, and frustrated teams."
                items={[
                    {
                        title: "Disconnected Modules",
                        description: "Data lives in silos. Teams waste hours reconciling information between procurement, billing, and progress tracking.",
                        icon: <Shield className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    },
                    {
                        title: "Manual Handoffs",
                        description: "Every stage requires manual data entry and verification, leading to errors and delays.",
                        icon: <Zap className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    },
                    {
                        title: "No Real-Time Visibility",
                        description: "Managers can't see project status until it's too late to take corrective action.",
                        icon: <TrendingUp className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    }
                ]}
            />

            <FeatureBentoGrid
                title="How Proniq Solves It"
                subtitle="Data flows automatically from tender to billing. Experience the power of an intelligent, interconnected workflow."
                items={[
                    {
                        title: "Automated Data Flow",
                        description: "Information entered once flows automatically to every relevant module. No duplicate entry, no reconciliation headaches.",
                        icon: <Zap className="w-6 h-6 text-primary" />,
                        colSpan: 2,
                        gradient: "from-blue-500/10 to-cyan-400/5"
                    },
                    {
                        title: "Built-In Approvals",
                        description: "Every transaction follows your approval hierarchy automatically.",
                        icon: <Shield className="w-6 h-6 text-primary" />,
                        colSpan: 1,
                        gradient: "from-emerald-500/10 to-teal-400/5"
                    },
                    {
                        title: "Faster Processing",
                        description: "Automated routing means approvals happen in hours, not days.",
                        icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
                        colSpan: 1,
                        gradient: "from-purple-500/10 to-pink-400/5"
                    },
                    {
                        title: "Real-Time Tracking",
                        description: "Daily progress updates trigger automatic updates to BOQs, billing schedules, and cost estimates for immediate insight.",
                        icon: <TrendingUp className="w-6 h-6 text-primary" />,
                        colSpan: 2,
                        gradient: "from-orange-500/10 to-amber-400/5"
                    }
                ]}
            />
            
            {/* Simple Call to Action */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to transform your workflow?</h2>
                    <p className="text-xl text-slate-600 mb-10">Join industry leaders who use Proniq to execute projects flawlessly.</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1"
                    >
                        Schedule a Demo <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
