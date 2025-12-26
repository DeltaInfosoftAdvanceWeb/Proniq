import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRONIQ | The Workflow-Driven iERP Platform",
  description: "Experience the future of project execution with PRONIQ. A seamless workflow from your first BOQ to the final bill. Built for construction, manufacturing, and infrastructure.",
  openGraph: {
    title: "PRONIQ | The Workflow-Driven iERP Platform",
    description: "Experience the future of project execution with PRONIQ. A seamless workflow from your first BOQ to the final bill.",
  },
};

export default function Home() {
  return <HomeClient />;
}
