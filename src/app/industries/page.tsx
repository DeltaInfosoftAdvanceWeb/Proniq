import IndustriesClient from "@/components/IndustriesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PRONIQ Industries | Specialized ERP Ecosystems",
    description: "Explore our specialized ERP ecosystems for construction, manufacturing, infrastructure, and engineering. Specialized modules engineered to adapt to your unique industry DNA.",
};

export default function Page() {
    return <IndustriesClient />;
}
