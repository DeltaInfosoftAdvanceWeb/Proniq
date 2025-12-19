import ContactClient from "@/components/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PRONIQ | Get in Touch with Us",
  description: "Have a question or want to discuss a project? Reach out to the PRONIQ team. We'd love to hear from you and help you transform your business operations.",
};

export default function Page() {
  return <ContactClient />;
}
