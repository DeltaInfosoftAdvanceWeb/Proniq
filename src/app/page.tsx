import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow-Driven iERP Software for Project Execution | Proniq",
  description: "Manage tenders, BOQs, daily progress, RA billing, and approvals in one workflow-driven iERP. Built for execution-focused teams. Book a demo.",
  keywords: ["workflow-driven ERP", "iERP software", "project execution software", "construction ERP", "RA billing automation", "BOQ management", "tender management", "daily progress tracking"],
  openGraph: {
    title: "Workflow-Driven iERP Software for Project Execution | Proniq",
    description: "Manage tenders, BOQs, daily progress, RA billing, and approvals in one workflow-driven iERP. Built for execution-focused teams.",
    type: "website",
    url: "https://proniq.com",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Proniq',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
      },
      description: 'Workflow-driven iERP software for project execution teams. Manage tenders, BOQs, daily progress, RA billing, and approvals in one platform.',
      url: 'https://proniq.com',
      author: {
        '@type': 'Organization',
        name: 'Delta Infosoft Pvt. Ltd.',
      },
    },
    {
      '@type': 'Organization',
      name: 'Proniq',
      url: 'https://proniq.com',
      logo: 'https://proniq.com/proniq.png',
      description: 'Workflow-driven iERP platform for construction, manufacturing, and infrastructure projects.',
      sameAs: [
        'https://www.linkedin.com/company/proniq',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: 'info@proniq.com',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
