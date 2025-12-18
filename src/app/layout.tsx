import type { Metadata } from "next";
// Removed next/font imports; fonts are loaded via globals.css

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

// Fonts are loaded via globals.css; no next/font usage needed.
// const inter = Inter({
//   variable: "--font-sans",
//   subsets: ["latin"],
//   display: "swap",
// });
//
// const manrope = Manrope({
//   variable: "--font-alt",
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  icons: {
    icon: "/Logos/favicon/fav.png",
    apple: "/Logos/favicon/fav.png",
  },
  title: "PRONIQ — Premium Single‑Product Landing",
  description:
    "A clean, modern, luxury‑grade product landing crafted with Next.js and Tailwind.",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
