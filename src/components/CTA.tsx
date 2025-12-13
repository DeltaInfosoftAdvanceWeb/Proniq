"use client";

export default function CTA() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

                    {/* Hover effect */}
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 group-hover:translate-x-[200%] transition-transform duration-1000 rotate-45" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-left max-w-xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to get started?</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Join forward-thinking construction companies managing their projects with PRONIQ.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 shrink-0">
                            <a href="/contact" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                                Get Started
                            </a>
                            <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-xl font-semibold transition-all active:scale-95">
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}