import EngineeringClient from "@/components/EngineeringClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engineering ERP & Project Management | PRONIQ",
    description: "Accelerate your engineering lifecycle with PRONIQ. Specialized ERP for EPC firms, consulting engineers, and R&D teams to track billable hours and project margins.",
};

export default function Page() {
    return <EngineeringClient />;
}
