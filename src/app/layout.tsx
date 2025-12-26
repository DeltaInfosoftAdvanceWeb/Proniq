import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import "./performance.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-alt",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/Logos/favicon/fav.png",
    apple: "/Logos/favicon/fav.png",
  },
  title: "PRONIQ | Workflow-Driven iERP & Operations Platform",
  description:
    "PRONIQ is a premium, workflow-driven iERP platform built for execution-focused teams. Streamline operations, reduce costs, and boost productivity in construction, manufacturing, and infrastructure.",
  keywords: ["ERP", "iERP", "Workflow Platform", "Operations Management", "Construction Software", "Manufacturing ERP", "Project Management", "Delta Infosoft"],
  authors: [{ name: "Delta Infosoft Pvt. Ltd." }],
  openGraph: {
    title: "PRONIQ | Workflow-Driven iERP & Operations Platform",
    description: "The next-generation iERP platform for execution-focused teams.",
    url: "https://proniq.com",
    siteName: "PRONIQ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRONIQ | iERP Platform",
    description: "Streamline your operations with PRONIQ workflow-driven iERP.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
