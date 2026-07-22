"use client";

import React from "react";

interface CometCardProps {
    children: React.ReactNode;
    className?: string;
}

export function CometCard({ children, className = "" }: CometCardProps) {
    return (
        <div
            className={`relative overflow-hidden rounded-[24px] bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-2xl ${className}`}
            style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
            }}
        >
            {/* Animated gradient background */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
                    backgroundSize: "200% 200%",
                    animation: "gradientShift 8s ease infinite",
                }}
            />

            {/* Comet trail effect */}
            <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
                    animation: "cometTrail 6s ease-in-out infinite",
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes cometTrail {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(-10px, -10px) scale(1.2);
            opacity: 0.4;
          }
        }
      `}</style>
        </div>
    );
}