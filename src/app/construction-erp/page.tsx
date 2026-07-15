import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, TrendingDown, Clock } from "lucide-react";

import SolutionHero from "@/components/SolutionHero";
import FeatureBentoGrid from "@/components/FeatureBentoGrid";

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
            <SolutionHero
                badgeText="Construction Industry"
                badgeIcon={<Building2 className="w-4 h-4" />}
                title="Construction ERP Software Built for Contractors"
                description="From tender submission to final handover — manage BOQs, subcontractors, material procurement, RA billing, and daily site progress in one unified construction ERP platform."
            />

            <FeatureBentoGrid
                title="Common Challenges in Construction"
                subtitle="Construction projects fail due to poor coordination, cost overruns, and delayed billing cycles."
                items={[
                    {
                        title: "Cost Overruns",
                        description: "Material costs spiral out of control. Subcontractor bills don't match work orders. Budget variance discovered too late.",
                        icon: <TrendingDown className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    },
                    {
                        title: "Delayed Billing",
                        description: "RA bills take weeks to prepare. Missing measurements delay payment. Cash flow suffers.",
                        icon: <Clock className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    },
                    {
                        title: "Site Coordination Issues",
                        description: "Site teams work with outdated BOQs. Material requests don't match estimates. Rework costs money.",
                        icon: <Building2 className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    }
                ]}
            />

            <FeatureBentoGrid
                title="How Proniq Solves These Problems"
                subtitle="Empower your team with a single source of truth from the site to the office."
                items={[
                    {
                        title: "Real-Time BOQ Management",
                        description: "Your BOQ is the single source of truth. Material requests, work orders, and billing all reference the same BOQ. No version conflicts, no reconciliation.",
                        icon: <Building2 className="w-6 h-6 text-primary" />,
                        colSpan: 2,
                        gradient: "from-blue-500/10 to-cyan-400/5"
                    },
                    {
                        title: "Subcontractor Control",
                        description: "Every subcontractor bill is mapped to approved work orders and measurement books. No surprise invoices.",
                        icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
                        colSpan: 1,
                        gradient: "from-emerald-500/10 to-teal-400/5"
                    },
                    {
                        title: "Site Inventory Management",
                        description: "Track material consumption against estimates in real-time.",
                        icon: <TrendingDown className="w-6 h-6 text-primary" />,
                        colSpan: 1,
                        gradient: "from-purple-500/10 to-pink-400/5"
                    },
                    {
                        title: "Cost Variance Tracking",
                        description: "Identify budget overruns immediately before they impact your bottom line.",
                        icon: <Clock className="w-6 h-6 text-primary" />,
                        colSpan: 2,
                        gradient: "from-orange-500/10 to-amber-400/5"
                    }
                ]}
            />
            
            {/* Simple Call to Action */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Transform Your Construction Operations?</h2>
                    <p className="text-xl text-slate-600 mb-10">Join leading contractors who've reduced costs by 15% and cut billing cycles in half with Proniq.</p>
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
