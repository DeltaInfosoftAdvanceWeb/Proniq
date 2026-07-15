import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, IndianRupee, FileText, Clock } from "lucide-react";

import SolutionHero from "@/components/SolutionHero";
import FeatureBentoGrid from "@/components/FeatureBentoGrid";

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
            <SolutionHero
                badgeText="RA Billing Automation"
                badgeIcon={<IndianRupee className="w-4 h-4" />}
                title="RA Billing Software for Construction Projects"
                description="Automate running account bill preparation. Link every line item to measurement books, BOQs, and approved work orders. Reduce billing cycles from weeks to days."
            />

            <FeatureBentoGrid
                title="Problems with Manual RA Billing"
                subtitle="Manual RA bill preparation is slow, error-prone, and kills your cash flow. Billing teams spend weeks reconciling measurements with BOQs."
                items={[
                    {
                        title: "Slow Billing Cycles",
                        description: "RA bills take 2-3 weeks to prepare. Teams manually match measurements to BOQ items and calculate deductions.",
                        icon: <Clock className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    },
                    {
                        title: "Reconciliation Errors",
                        description: "Measurement entries don't match BOQ line items. Previous bill amounts calculated incorrectly.",
                        icon: <FileText className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    },
                    {
                        title: "Cash Flow Impact",
                        description: "Delayed bills mean delayed payments. Working capital tied up in unbilled work.",
                        icon: <IndianRupee className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    }
                ]}
            />

            <FeatureBentoGrid
                title="How Proniq Automates RA Billing"
                subtitle="Every measurement entry is linked to BOQ items from day one. When it's time to bill, the system generates RA bills automatically."
                items={[
                    {
                        title: "Measurement Book Integration",
                        description: "Site engineers enter measurements against specific BOQ items. System validates quantities against approved estimates.",
                        icon: <FileText className="w-6 h-6 text-primary" />,
                        colSpan: 2,
                        gradient: "from-blue-500/10 to-cyan-400/5"
                    },
                    {
                        title: "Audit Trail & Compliance",
                        description: "Every bill line item traces back to measurement entries, BOQ items, and work orders.",
                        icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
                        colSpan: 1,
                        gradient: "from-emerald-500/10 to-teal-400/5"
                    },
                    {
                        title: "Improved Cash Flow",
                        description: "Bill within days of work completion. Faster billing means faster payment and reduced working capital.",
                        icon: <IndianRupee className="w-6 h-6 text-primary" />,
                        colSpan: 1,
                        gradient: "from-purple-500/10 to-pink-400/5"
                    },
                    {
                        title: "Automatic Bill Generation",
                        description: "Select billing period. System pulls all verified measurements, applies deductions, and generates final bill instantly.",
                        icon: <Clock className="w-6 h-6 text-primary" />,
                        colSpan: 2,
                        gradient: "from-orange-500/10 to-amber-400/5"
                    }
                ]}
            />
            
            {/* Simple Call to Action */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Stop Chasing Progress Reports</h2>
                    <p className="text-xl text-slate-600 mb-10">See how Proniq's RA billing software can cut your billing cycle in half and catch cost overruns before they happen.</p>
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
