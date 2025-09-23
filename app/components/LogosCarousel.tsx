"use client";

import React, { useMemo, useState } from "react";

type LogosCarouselProps = {
  logos: string[]; // image paths under /public or URLs
  height?: number; // logo height in px
  gap?: number; // gap between logos in px
  duration?: number; // seconds for one full loop
  ariaLabel?: string;
};

/**
 * Auto-scrolling logos carousel.
 * - Duplicates the logos array to create an infinite loop effect
 */
const LogosCarousel: React.FC<LogosCarouselProps> = ({
  logos,
    height = 70,
  gap = 48,
  duration = 25,
  ariaLabel = "Partner logos carousel",
}) => {
  // Duplicate the list to create a seamless loop
  const loopLogos = useMemo(() => [...logos, ...logos], [logos]);

  // Generate a unique animation name to avoid collisions if multiple carousels
  const animationName = useMemo(
    () => `scroll_${Math.random().toString(36).slice(2, 8)}`,
    []
  );

  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="logos-carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        padding: "8px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Keyframes for the scrolling animation */}
      <style>{`
        @keyframes ${animationName} {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* Pause the scrolling animation when the user hovers over the carousel */
        .logos-carousel:hover .logos-track { 
          animation-play-state: paused; 
        }
        /* Slightly enlarge logos on hover for emphasis */
        .logos-carousel:hover .logo-img {
          transform: scale(1.1);
        }
      `}</style>

      <div
        role="list"
        className="logos-track"
        style={{
          display: "flex",
          alignItems: "center",
          gap: `${gap}px`,
          width: "max-content",
          // The track is twice as long because we duplicated the items
          animation: `${animationName} ${duration}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {loopLogos.map((src, idx) => (
          <div
            role="listitem"
            key={`${src}-${idx}`}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={src}
              alt="logo"
              style={{
                height: `${height}px`,
                width: "auto",
                objectFit: "contain",
                filter: "grayscale(0%)",
                opacity: 0.95,
                transition: "transform 200ms ease",
                willChange: "transform",
              }}
              className="logo-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosCarousel;