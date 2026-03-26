import type { Metadata } from "next";
// Removed next/font imports; fonts are loaded via globals.css

import "./globals.css";
import "./performance.css";
import SmoothScroll from "@/components/SmoothScroll";
import MainLayout from "@/components/MainLayout";

export const metadata: Metadata = {
  icons: {
    icon: "/proniq-tp.png",
    shortcut: "/proniq-tp.png",
    apple: "/proniq-tp.png",
  },
  title: "proniq | Workflow-Driven iERP & Operations Platform",
  description:
    "proniq is a premium, workflow-driven iERP platform built for execution-focused teams. Streamline operations, reduce costs, and boost productivity in construction, manufacturing, and infrastructure.",
  keywords: ["ERP", "iERP", "Workflow Platform", "Operations Management", "Construction Software", "Manufacturing ERP", "Project Management", "Delta Infosoft"],
  authors: [{ name: "Delta Infosoft Pvt. Ltd." }],
  openGraph: {
    title: "proniq | Workflow-Driven iERP & Operations Platform",
    description: "The next-generation iERP platform for execution-focused teams.",
    url: "https://proniq.com",
    siteName: "proniq",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "proniq | iERP Platform",
    description: "Streamline your operations with proniq workflow-driven iERP.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

