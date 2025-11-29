import Pricing from "@/components/Pricing";

export default function Page() {
  return (
    <main className="bg-background min-h-screen">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-500/10 to-transparent -z-10" />

        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>
      <Pricing />
    </main>
  );
}