'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ConstructionAIHero() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            tl
                // Fade in AI panels
                .fromTo('.ai-panel',
                    { opacity: 0, y: 80 },
                    { opacity: 1, y: 0, stagger: 0.2 }
                )

                // Panels lock into site
                .to('.ai-panel', {
                    scale: 0.9,
                    x: (i) => i * 120 - 120,
                    y: (i) => i * 40,
                })

                // Chaos → Order effect
                .to('.site-overlay', {
                    opacity: 0,
                })

                .to('.final-text', {
                    opacity: 1,
                    y: -30,
                });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[200vh] bg-black">

            {/* STICKY AREA */}
            <div className="sticky top-0 h-screen overflow-hidden">

                {/* Construction Site */}
                <Image
                    src="/site.jpg"
                    fill
                    className="object-cover"
                    alt="Construction Site"
                />

                {/* Chaos Overlay */}
                <div className="site-overlay absolute inset-0 bg-black/40" />

                {/* Headline */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center text-white z-20">
                    <h1 className="text-4xl font-bold">AI enters the site</h1>
                    <p className="opacity-70 mt-2">Automates work in real time</p>
                </div>

                {/* AI PANELS */}
                <div className="absolute inset-0 flex items-center justify-center gap-6 z-30">

                    <div className="ai-panel relative w-48 h-64 rounded-xl shadow-xl overflow-hidden">
                        <Image src="/panel1.png" alt="AI Panel 1" fill className="object-cover" />
                    </div>
                    <div className="ai-panel relative w-48 h-64 rounded-xl shadow-xl overflow-hidden">
                        <Image src="/panel2.png" alt="AI Panel 2" fill className="object-cover" />
                    </div>
                    <div className="ai-panel relative w-48 h-64 rounded-xl shadow-xl overflow-hidden">
                        <Image src="/panel3.png" alt="AI Panel 3" fill className="object-cover" />
                    </div>

                </div>

                {/* FINAL TEXT */}
                <div className="final-text opacity-0 absolute bottom-32 left-1/2 -translate-x-1/2 text-center text-white z-40">
                    <h2 className="text-3xl font-semibold">
                        Proniq automates the chaos
                    </h2>
                    <p className="opacity-70 mt-1">
                        Your team builds. AI runs operations.
                    </p>
                </div>

            </div>
        </section>
    );
}
