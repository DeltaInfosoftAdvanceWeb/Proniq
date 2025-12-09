import Link from "next/link";

export default function Construction() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero Section */}
            <section className="px-6 py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-500 mb-3">
                            Construction ERP Platform
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                            Run every project from bid to handover in one ERP built for construction.
                        </h1>
                        <p className="mt-6 text-base md:text-lg text-slate-600">
                            Connect site, office, and finance with real-time cost control, site tracking,
                            and automated billing so you deliver every project on time and within budget.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href="/contact"
                                className="rounded-full bg-primary px-7 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all"
                            >
                                Book a Live Demo
                            </Link>
                            <Link
                                href="#solutions"
                                className="rounded-full border border-slate-200 px-7 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                            >
                                View Construction Modules
                            </Link>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-500">
                            <span className="inline-flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                Trusted by contractors, developers, and EPC firms.
                            </span>
                            <span className="hidden md:inline-block h-4 w-px bg-slate-200" />
                            <span>Onboard your first project in as little as 4–6 weeks.</span>
                        </div>
                    </div>

                    {/* Hero Image / Visual */}
                    <div className="relative">
                        <div className="relative rounded-3xl bg-white border border-slate-200 p-4 md:p-6 shadow-xl">
                            <div className="aspect-[4/3] w-full rounded-2xl bg-[url('/images/construction-site-hero.jpg')] bg-cover bg-center" />
                            <div className="absolute -bottom-3 left-4 right-4 flex gap-3">
                                <div className="flex-1 rounded-2xl bg-white border border-slate-200 px-4 py-3 text-xs text-slate-700 shadow-sm">
                                    <p className="font-semibold">Live site dashboard</p>
                                    <p className="mt-1 text-[11px] text-slate-500">
                                        Track progress, costs, and productivity per site in real time.
                                    </p>
                                </div>
                                <div className="flex-1 rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-xs text-emerald-700 shadow-sm">
                                    <p className="font-semibold">Cost variance alerts</p>
                                    <p className="mt-1 text-[11px] text-emerald-600">
                                        Get notified when budgets, materials, or labor drift off plan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who It's For */}
            <section className="px-6 py-20 bg-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold text-center mb-4">
                        Built for the way construction teams actually work
                    </h2>
                    <p className="text-center text-sm md:text-base text-slate-500 mb-12 max-w-2xl mx-auto">
                        Whether you are managing a single high-rise or a portfolio of infra projects,
                        the ERP adapts to your job sites, cost codes, and approval workflows.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Real Estate Developers",
                                desc: "Control budgets, collections, and RERA-ready documentation across multiple projects.",
                            },
                            {
                                title: "Infrastructure & EPC Companies",
                                desc: "Standardize BOQs, manage sub-contractors, and keep complex infra projects on schedule.",
                            },
                            {
                                title: "Contractors & Sub-Contractors",
                                desc: "Track labor, materials, and equipment per job to protect your margins on every contract.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
                                <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-teal-500">
                                    Use cases
                                </p>
                                <ul className="mt-2 space-y-1 text-xs text-slate-500">
                                    {item.title === "Real Estate Developers" && (
                                        <>
                                            <li>– Project cashflow and collection tracking</li>
                                            <li>– Inventory of units, floors, and towers</li>
                                        </>
                                    )}
                                    {item.title === "Infrastructure & EPC Companies" && (
                                        <>
                                            <li>– Multi-location site management</li>
                                            <li>– Centralized procurement and logistics</li>
                                        </>
                                    )}
                                    {item.title === "Contractors & Sub-Contractors" && (
                                        <>
                                            <li>– Work-order and RA bill management</li>
                                            <li>– Resource utilization visibility</li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features / Solutions */}
            <section id="solutions" className="px-6 py-20 bg-slate-50">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold text-center mb-4">
                        Construction-specific ERP modules
                    </h2>
                    <p className="text-center text-sm md:text-base text-slate-500 mb-12 max-w-3xl mx-auto">
                        Replace disconnected spreadsheets and legacy software with a single source of truth
                        that connects estimation, planning, site execution, procurement, and finance.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {[
                            {
                                title: "Project planning, BOQ & budgeting",
                                desc: "Create BOQs, define work breakdown structures, and lock budgets with cost codes you can track at every stage.",
                            },
                            {
                                title: "Site execution and progress tracking",
                                desc: "Capture daily site progress, issues, and measurements from mobile, synced instantly to your central ERP.",
                            },
                            {
                                title: "Job costing & project accounting",
                                desc: "Allocate every material, labor hour, and equipment cost to the right project, phase, and activity.",
                            },
                            {
                                title: "Procurement & multi-site inventory",
                                desc: "Standardize purchase requests, approvals, and GRNs, while monitoring stock across sites, yards, and warehouses.",
                            },
                            {
                                title: "Subcontractor & vendor management",
                                desc: "Manage work orders, RA bills, retention, penalties, and payment terms in one place with full audit trails.",
                            },
                            {
                                title: "Client billing & collections",
                                desc: "Support milestone, progress, and lump-sum billing with automated tax calculations and collection reminders.",
                            },
                            {
                                title: "Compliance, documents & approvals",
                                desc: "Digitize drawings, inspections, contracts, and approval workflows to stay compliant and audit-ready.",
                            },
                            {
                                title: "Real-time dashboards and alerts",
                                desc: "Monitor profitability, cashflow, and site KPIs with configurable dashboards and proactive alerts.",
                            },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                            >
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sub-Industries */}
            <section className="px-6 py-20 bg-white">
                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1 text-center md:text-left">
                        <h2 className="text-3xl font-semibold mb-4">
                            Configure once, deploy across all your construction segments
                        </h2>
                        <p className="text-sm md:text-base text-slate-500 mb-6">
                            Use one ERP backbone with segment-specific workflows, reports, and master data so all
                            your teams speak the same language across every project.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {[
                                { name: "Real Estate", slug: "real-estate" },
                                { name: "Infrastructure", slug: "infrastructure" },
                                { name: "Industrial & Warehousing", slug: "industrial" },
                                { name: "Roads & Highways", slug: "roads" },
                                { name: "MEP & Fit-out", slug: "mep" },
                                { name: "General Contractors", slug: "contractors" },
                            ].map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/industries/construction/${item.slug}`}
                                    className="rounded-full border border-slate-200 px-6 py-2 text-xs md:text-sm font-medium text-slate-700 hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm hover:shadow-md"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="rounded-3xl border border-slate-200 bg-slate-100 overflow-hidden shadow-lg">
                            <div className="aspect-[4/3] bg-[url('/images/construction-multi-project.jpg')] bg-cover bg-center" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Outcomes */}
            <section className="px-6 py-20 bg-slate-100">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold text-center mb-4 text-slate-900">
                        What construction teams achieve with our ERP
                    </h2>
                    <p className="text-center text-sm md:text-base text-slate-600 mb-10 max-w-3xl mx-auto">
                        Go beyond basic accounting. Give your project managers, site engineers, and finance teams
                        the same live project data, so everyone can act before issues turn into overruns.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                metric: "15–25%",
                                label: "reduction in project cost overruns",
                            },
                            {
                                metric: "30–40%",
                                label: "faster billing & collections cycles",
                            },
                            {
                                metric: "100%",
                                label: "visibility across projects, sites, and teams",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                            >
                                <p className="text-3xl font-bold text-emerald-500">{item.metric}</p>
                                <p className="mt-3 text-sm text-slate-700">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-24 bg-white text-center relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/5 via-teal-200/10 to-transparent" />
                <div className="relative z-10 mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Ready to modernize how you manage construction projects?
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-slate-600">
                        See how your team can manage estimation, site execution, procurement, and billing on a
                        single ERP tailored for construction.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-block rounded-xl bg-gradient-to-r from-primary to-teal-500 px-8 py-4 text-sm md:text-base font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all"
                        >
                            Schedule a Free Consultation
                        </Link>
                        <Link
                            href="#solutions"
                            className="inline-block rounded-xl border border-slate-200 bg-white px-8 py-4 text-sm md:text-base font-medium text-slate-700 hover:bg-slate-50 transition"
                        >
                            Explore Modules
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
