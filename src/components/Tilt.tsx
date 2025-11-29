"use client";
import { ReactNode, useRef } from "react";

export default function Tilt({ children, max = 6, scale = 1.02, className = "" }: { children: ReactNode; max?: number; scale?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const mx = x / rect.width - 0.5;
    const my = y / rect.height - 0.5;
    const rx = (-my * max).toFixed(2);
    const ry = (mx * max).toFixed(2);
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)", willChange: "transform" }}
    >
      {children}
    </div>
  );
}