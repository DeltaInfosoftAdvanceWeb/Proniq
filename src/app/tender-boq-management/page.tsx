import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Calculator, TrendingUp } from "lucide-react";

import SolutionHero from "@/components/SolutionHero";
import FeatureBentoGrid from "@/components/FeatureBentoGrid";

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
            <SolutionHero
                badgeText="Tender & BOQ Management"
                badgeIcon={<FileText className="w-4 h-4" />}
                title="Tender & BOQ Management Software for Construction"
                description="From tender submission to project completion — manage cost estimates, BOQs, material procurement, and billing in one integrated platform. Your BOQ is the single source of truth."
            />

            <FeatureBentoGrid
                title="Common Problems with Tender & BOQ Management"
                subtitle="BOQs created for tender submission become outdated the moment execution starts. Teams maintain multiple versions across Excel, email, and ERP."
                items={[
                    {
                        title: "Version Chaos",
                        description: "Tender BOQ, approved BOQ, working BOQ — which one is correct? Teams waste hours reconciling different versions.",
                        icon: <FileText className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    },
                    {
                        title: "Disconnected Execution",
                        description: "BOQ sits in Excel. Material requests reference different item codes. Billing team creates their own BOQ for RA bills.",
                        icon: <Calculator className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    },
                    {
                        title: "No Cost Control",
                        description: "Can't track actual consumption vs. estimated quantities in real-time. Cost overruns discovered at month-end.",
                        icon: <TrendingUp className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    }
                ]}
            />

            <FeatureBentoGrid
                title="How Proniq Integrates BOQ Management"
                subtitle="Your BOQ becomes the backbone of your entire project workflow. From tender submission to final billing, everything references the same BOQ."
                items={[
                    {
                        title: "Tender Submission & Tracking",
                        description: "Create detailed BOQs for tender submission. Track tender status, deadlines, and required documents. Import client BOQ formats directly.",
                        icon: <FileText className="w-6 h-6 text-primary" />,
                        colSpan: 2,
                        gradient: "from-blue-500/10 to-cyan-400/5"
                    },
                    {
                        title: "Flexible Cost Estimation",
                        description: "Configure cost estimation logic — unit-based, lump sum, or milestone-driven. Compare multiple scenarios.",
                        icon: <Calculator className="w-6 h-6 text-primary" />,
                        colSpan: 1,
                        gradient: "from-emerald-500/10 to-teal-400/5"
                    },
                    {
                        title: "Prevent Excess Purchases",
                        description: "Material requests are validated against BOQ quantities. System flags when cumulative requests exceed estimates.",
                        icon: <TrendingUp className="w-6 h-6 text-primary" />,
                        colSpan: 1,
                        gradient: "from-purple-500/10 to-pink-400/5"
                    },
                    {
                        title: "Live BOQ Consumption Tracking",
                        description: "Material requests, work orders, and progress entries automatically update BOQ consumption. See variance in real-time, not at month-end.",
                        icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
                        colSpan: 2,
                        gradient: "from-orange-500/10 to-amber-400/5"
                    }
                ]}
            />
            
            {/* Simple Call to Action */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Make Your BOQ Work for You</h2>
                    <p className="text-xl text-slate-600 mb-10">See how Proniq transforms your BOQ from a static document into the living backbone of your project execution.</p>
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
