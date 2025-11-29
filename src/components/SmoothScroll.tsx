"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: true,
            touchMultiplier: 1.5,
            wheelMultiplier: 1,
            infinite: false,
            normalizeWheel: true,
        });

        let frame: number;

        const raf = (time: number) => {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        };

        frame = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frame);
            lenis.destroy();
        };
    }, []);

    return null;
}
