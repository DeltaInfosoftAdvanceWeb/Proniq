import ConstructionClient from "@/components/ConstructionClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next-Gen Construction ERP | PRONIQ",
    description: "Transform your construction business with PRONIQ's specialized ERP. Track site progress, manage BOQs, and unify site logs with head-office finance in real-time.",
};

export default function Page() {
    return <ConstructionClient />;
}
