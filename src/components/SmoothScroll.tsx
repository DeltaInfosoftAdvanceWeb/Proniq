"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
    const pathname = usePathname();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            infinite: false,
        });


        lenisRef.current = lenis;

        // Synchronize ScrollTrigger with Lenis
        lenis.on("scroll", ScrollTrigger.update);

        const updateLenis = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);

        // Resize handler with debounce-like behavior
        const handleResize = () => {
            lenis.resize();
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        // Initial refreshes
        const t1 = setTimeout(handleResize, 100);
        const t2 = setTimeout(handleResize, 1000);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(updateLenis);
            window.removeEventListener("resize", handleResize);
            clearTimeout(t1);
            clearTimeout(t2);
            lenisRef.current = null;
        };
    }, []);

    // Handle route changes
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
            ScrollTrigger.clearScrollMemory();

            // Single refresh after content has likely rendered
            const timer = setTimeout(() => {
                lenisRef.current?.resize();
                ScrollTrigger.refresh(true);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [pathname]);


    return null;
}


