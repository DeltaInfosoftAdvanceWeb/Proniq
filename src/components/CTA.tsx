"use client";

export default function CTA() {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-primary/5" />
            <div className="max-w-5xl mx-auto relative">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to take the leap?</h2>
                        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Join innovators worldwide shaping the future with proniq.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-white text-primary rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                                Get Started Today
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all">
                                Talk to Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}