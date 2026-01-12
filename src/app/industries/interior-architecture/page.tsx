import InteriorArchitectureClient from "@/components/InteriorArchitectureClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Interior & Architecture ERP | proniq",
    description: "Streamline your design studio or architecture firm with proniq lives project data. Manage moodboards, client approvals, BOQs, and site execution in one portal.",
};

export default function Page() {
    return <InteriorArchitectureClient />;
}
