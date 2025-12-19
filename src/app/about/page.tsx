import About from "@/components/About";
import ProductCarousel from "@/components/ProductCarousel";
import TransformCTA from "@/components/TransformCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PRONIQ | Our Story & Vision",
  description: "Learn about PRONIQ and our mission to empower modern infrastructure teams with operational clarity and precision-built ERP solutions.",
};

export default function Page() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <section className="relative pt-32 pb-20 px-6">

        <div className="absolute inset-0 bg-primary/5 -z-10" />


        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Our <span className="text-gradient">Story</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are a team of passionate designers and engineers building the future of web development.
          </p>
        </div>
      </section>
      <About />
      <ProductCarousel />
      <TransformCTA />
    </main>
  );
}