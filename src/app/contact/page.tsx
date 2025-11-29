import ContactCTA from "@/components/ContactCTA";

export default function Page() {
  return (
    <main className="bg-background min-h-screen">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-secondary/10 to-transparent -z-10" />

        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Connect <span className="text-gradient">With Us</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We're here to help! Whether you have questions, need support, or want to explore our products, we're just a message away.
          </p>
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}