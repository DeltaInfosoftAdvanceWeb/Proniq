'use client';
import { useState, useEffect } from "react";
import Tilt from "./Tilt";
import Image from "next/image";

export default function Screenshots() {
  const screenshots = [
    "/p3.png",
    "/p4.png",
    "/p5.png",
    "/p6.png",
    "/p7.png",
    "/p8.png",
  ];

  const [selected, setSelected] = useState<string | null>(null);

  // Close modal on Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="screenshots" className="bg-white">
      <div className="container mx-auto max-w-6xl px-6 py-20">

        {/* Heading + Button */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl  font-bold text-slate-900 mb-4 text-gradient">Product Showcase</h2>
            <p className="mt-2 text-zinc-600">
              Crisp visuals displayed inside sleek, modern device frames.
            </p>
          </div>
          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-teal-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            View All
          </button>
        </div>

        {/* Grid of screenshots */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((src, i) => (
            <Tilt key={i}>
              <div
                className="rounded-2xl bg-white p-4 shadow-soft fade-up cursor-pointer"
                onClick={() => setSelected(src)}
              >
                <div className="rounded-xl border border-zinc-200 p-2">
                  <Image
                    src={src}
                    alt={`Product screenshot ${i + 1}`}
                    width={400}
                    height={160}
                    className="rounded-lg shadow-soft object-cover h-40 w-full"
                  />
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setSelected(null)} // close when clicking overlay
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-6 right-0 text-white text-3xl font-bold bg-black/1 rounded-full px-3 leading-none"
            >
              ×
            </button>

            {/* Zoomed Image */}
            <Image
              src={selected}
              alt="Zoomed screenshot"
              width={1200}
              height={800}
              className="rounded-xl shadow-2xl object-contain w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}