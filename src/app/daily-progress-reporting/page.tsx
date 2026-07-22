import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Calendar, BarChart3, AlertCircle } from "lucide-react";

import SolutionHero from "@/components/SolutionHero";
import FeatureBentoGrid from "@/components/FeatureBentoGrid";

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
            <SolutionHero
                badgeText="Progress Tracking"
                badgeIcon={<Calendar className="w-4 h-4" />}
                title="Daily Progress Reporting for Construction Projects"
                description="Capture site progress once, update everything automatically. Daily work reports trigger real-time updates to BOQs, billing schedules, and cost variance alerts."
            />

            <FeatureBentoGrid
                title="Problems with Manual Tracking"
                subtitle="Site engineers spend hours filling Excel sheets. Office teams waste days reconciling progress with BOQs and billing schedules."
                items={[
                    {
                        title: "Delayed Reporting",
                        description: "Progress reports arrive days after work is done. By the time you see the data, it's too late to act.",
                        icon: <Calendar className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    },
                    {
                        title: "Reconciliation Nightmare",
                        description: "Progress data doesn't match BOQ items. Billing teams manually map work done to contract items.",
                        icon: <BarChart3 className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    },
                    {
                        title: "No Early Warnings",
                        description: "Cost overruns discovered weeks later. No alerts when consumption exceeds estimates.",
                        icon: <AlertCircle className="w-6 h-6 text-primary" />,
                        colSpan: 1
                    }
                ]}
            />

            <FeatureBentoGrid
                title="How Proniq Automates Tracking"
                subtitle="Site engineers enter progress once. The system automatically updates BOQs, triggers billing entries, and flags cost variances."
                items={[
                    {
                        title: "Mobile-First Data Capture",
                        description: "Site engineers use mobile apps to log daily work. Pre-filled BOQ items, photo uploads, and GPS tagging ensure accuracy.",
                        icon: <Calendar className="w-6 h-6 text-primary" />,
                        colSpan: 2,
                        gradient: "from-blue-500/10 to-cyan-400/5"
                    },
                    {
                        title: "Instant Cost Alerts",
                        description: "System flags when consumption exceeds estimates by your threshold (e.g., 5%). Take corrective action before it hits P&L.",
                        icon: <AlertCircle className="w-6 h-6 text-primary" />,
                        colSpan: 1,
                        gradient: "from-emerald-500/10 to-teal-400/5"
                    },
                    {
                        title: "Faster Billing Cycles",
                        description: "Progress data flows directly to RA bills. What used to take weeks now takes days.",
                        icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
                        colSpan: 1,
                        gradient: "from-purple-500/10 to-pink-400/5"
                    },
                    {
                        title: "Automatic BOQ Updates",
                        description: "Progress entries automatically update BOQ consumption. See real-time variance between estimated and actual quantities.",
                        icon: <BarChart3 className="w-6 h-6 text-primary" />,
                        colSpan: 2,
                        gradient: "from-orange-500/10 to-amber-400/5"
                    }
                ]}
            />
            
            {/* Simple Call to Action */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Stop Chasing Progress Reports</h2>
                    <p className="text-xl text-slate-600 mb-10">See how Proniq's daily progress reporting can cut your billing cycle in half and catch cost overruns before they happen.</p>
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
