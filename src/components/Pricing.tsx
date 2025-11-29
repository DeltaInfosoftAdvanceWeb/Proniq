import { Check } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$29",
      desc: "For personal use and small demos.",
      features: ["All core features", "Basic support", "1 project"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$79",
      desc: "For professionals showcasing a premium product.",
      features: ["Everything in Starter", "Priority support", "Unlimited projects"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For teams needing advanced integrations.",
      features: ["Custom features", "Dedicated support", "SLAs"],
      highlight: false,
    },
  ];

  return (
    <section className="relative py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${t.highlight
                  ? "bg-white border border-primary/20 shadow-2xl ring-1 ring-primary/20"
                  : "bg-white/60 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-xl"
                }`}
            >
              {t.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-lg shadow-primary/30">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">{t.price}</span>
                  {t.price !== "Custom" && <span className="text-slate-500">/mo</span>}
                </div>
                <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className={`mt-0.5 rounded-full p-1 ${t.highlight ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-500"}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${t.highlight
                    ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    : "bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300"
                  }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}