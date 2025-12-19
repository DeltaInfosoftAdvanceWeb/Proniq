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
        // Register ScrollTrigger if not already
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.5,
            wheelMultiplier: 1.2,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Sync Lenis with ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Initial resize to ensure correct height
        const resizeTimeout = setTimeout(() => {
            lenis.resize();
        }, 500);

        const handleResize = () => {
            lenis.resize();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);


    // Handle route changes
    useEffect(() => {
        if (lenisRef.current) {
            // Scroll to top on route change
            lenisRef.current.scrollTo(0, { immediate: true });

            // Force resize after navigation
            const timeout = setTimeout(() => {
                lenisRef.current?.resize();
                ScrollTrigger.refresh();
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [pathname]);

    return null;
}

