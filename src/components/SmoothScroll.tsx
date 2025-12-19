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
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });


        lenisRef.current = lenis;

        // Synchronize ScrollTrigger with Lenis
        lenis.on("scroll", ScrollTrigger.update);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Initial resize
        const timeout = setTimeout(() => {
            lenis.resize();
            ScrollTrigger.refresh();
        }, 500);

        const handleResize = () => {
            lenis.resize();
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            lenis.destroy();
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeout);
        };
    }, []);

    // Handle route changes
    useEffect(() => {
        if (lenisRef.current) {
            // Immediately scroll to top
            lenisRef.current.scrollTo(0, { immediate: true });

            // Clear memory
            ScrollTrigger.clearScrollMemory();

            // Multiple refreshes to catch lazy-loaded content
            const timers = [
                setTimeout(() => {
                    lenisRef.current?.resize();
                    ScrollTrigger.refresh(true);
                    lenisRef.current?.start();
                }, 50),
                setTimeout(() => {
                    lenisRef.current?.resize();
                    ScrollTrigger.refresh();
                }, 250),
                setTimeout(() => {
                    lenisRef.current?.resize();
                    ScrollTrigger.refresh();
                }, 1000)
            ];

            return () => timers.forEach(t => clearTimeout(t));
        }
    }, [pathname]);


    return null;
}


