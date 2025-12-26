import ManufacturingClient from "@/components/ManufacturingClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Manufacturing ERP Software | PRONIQ",
    description: "Digitize your factory operations with PRONIQ's manufacturing ERP. Manage multi-level BOMs, production planning, quality control, and inventory in real-time.",
};

export default function Page() {
    return <ManufacturingClient />;
}
