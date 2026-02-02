"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beamsRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = beamsRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const beams: Beam[] = [];

        // Configuration
        const beamCount = 8; // Number of beams
        const beamOpacity = 0.5; // Opacity of the beams

        interface Beam {
            x: number;
            y: number;
            width: number;
            length: number;
            angle: number;
            speed: number;
            opacity: number;
        }

        const createBeams = () => {
            beams.length = 0;
            for (let i = 0; i < beamCount; i++) {
                beams.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    width: Math.random() * 2 + 1, // Random width between 1 and 3
                    length: Math.random() * 200 + 100, // Random length
                    angle: (Math.random() * 45 * Math.PI) / 180, // Angle
                    speed: Math.random() * 0.5 + 0.2,
                    opacity: Math.random() * 0.5 + 0.1,
                });
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createBeams();
        };

        const drawBeams = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Optional: Add a subtle gradient background based on theme if needed, 
            // but usually this component is an overlay or sits on a solid bg.
            // ctx.fillStyle = 'rgba(255, 255, 255, 0)'; 
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            beams.forEach((beam) => {
                ctx.save();
                ctx.translate(beam.x, beam.y);
                ctx.rotate(beam.angle);

                // Create gradient for the beam
                const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
                gradient.addColorStop(0, `rgba(100, 100, 255, 0)`);
                gradient.addColorStop(0.5, `rgba(100, 100, 255, ${beamOpacity})`);
                gradient.addColorStop(1, `rgba(100, 100, 255, 0)`);

                ctx.fillStyle = gradient;
                ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);

                ctx.restore();

                // Move beam
                beam.y -= beam.speed;
                beam.x += beam.speed * Math.tan(beam.angle);

                // Reset if out of bounds
                if (beam.y < -beam.length || beam.x > canvas.width + beam.length) {
                    beam.y = canvas.height + beam.length;
                    beam.x = Math.random() * canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(drawBeams);
        };

        resizeCanvas();
        drawBeams();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={beamsRef}
            className={cn(
                "absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40",
                className
            )}
        />
    );
};
