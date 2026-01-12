import {
  BoltIcon,
  ClockIcon,
  HandThumbUpIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

export default function WhyChoose() {
  const stats = [
    {
      label: "Performance Boost",
      value: "+30%",
      description: "Increase in operational efficiency for construction teams.",
      icon: BoltIcon,
      trend: "Highest Efficiency",
    },
    {
      label: "Time Saved",
      value: "72h",
      suffix: "/mo",
      description: "Average time saved on manual tracking and reporting.",
      icon: ClockIcon,
      trend: "Proven Impact",
    },
    {
      label: "Client Satisfaction",
      value: "98%",
      description: "Of our partners report better project control and clarity.",
      icon: HandThumbUpIcon,
      trend: "Top Rated",
    },
  ];

  return (
    <section id="why" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Why Leading Teams <span className="text-gradient">Choose proniq</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We deliver measurable results that impact your bottom line.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Background Icon Watermark */}
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <stat.icon className="w-32 h-32 -rotate-12" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-2xl font-medium text-slate-400">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {stat.description}
                </p>

                {/* Visual Trend Indicator */}
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                  <ArrowTrendingUpIcon className="w-4 h-4" />
                  <span>{stat.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}