import {
  DocumentTextIcon,
  ChartBarIcon,
  FolderIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

export default function Benefits() {
  const items = [
    {
      title: "Generate RA bills effortlessly",
      description: "Automate billing processes to save time and reduce errors.",
      icon: DocumentTextIcon,
    },
    {
      title: "Track project progress with clarity",
      description: "Real-time insights into every stage of your construction projects.",
      icon: ChartBarIcon,
    },
    {
      title: "Upload BOQ with structured control",
      description: "Seamlessly import and manage Bill of Quantities with precision.",
      icon: FolderIcon,
    },
    {
      title: "Maintain easy tracking across modules",
      description: "Unified data flow across all your project management tools.",
      icon: ClipboardDocumentListIcon,
    },
    {
      title: "Premium credibility",
      description: "Build trust with professional, standardized documentation.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Elegant hover polish",
      description: "Experience a fluid, responsive interface designed for modern teams.",
      icon: SparklesIcon,
    },
    {
      title: "Clear value messaging",
      description: "Communicate effectively with stakeholders using clear data.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      title: "Responsive across devices",
      description: "Access your project data from anywhere, on any device.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Easy Tender Management",
      description: "Streamline the tendering process from bid to award.",
      icon: BriefcaseIcon,
    },
  ];

  return (
    <section id="benefits" className="relative bg-slate-50 py-24 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] -left-[10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Benefits</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Discover how Proniq transforms your workflow with tools designed for efficiency, clarity, and control.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-200 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500" />

              <div className="relative z-10">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-white border border-slate-100 group-hover:border-primary/20 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-slate-500 group-hover:text-primary transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>

                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}