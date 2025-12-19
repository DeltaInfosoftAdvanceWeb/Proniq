import InfrastructureClient from "@/components/InfrastructureClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Infrastructure ERP & Fleet Management | PRONIQ",
    description: "Manage large-scale infrastructure projects with PRONIQ. Specialized ERP for highways, power grids, and water supply with linear progress tracking and fleet management.",
};

export default function Page() {
    return <InfrastructureClient />;
}
