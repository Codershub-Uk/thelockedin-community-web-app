"use client";

import { useEffect, useRef } from "react";

export function AnimatedGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gradient = gradientRef.current;
    if (!gradient) return;

    const updateGradient = (e: MouseEvent) => {
      const rect = gradient.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gradient.style.setProperty("--x", `${x}px`);
      gradient.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", updateGradient);
    return () => window.removeEventListener("mousemove", updateGradient);
  }, []);

  return (
    <div
      ref={gradientRef}
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/50 to-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute inset-0 animate-gradient bg-[radial-gradient(circle_800px_at_var(--x,50%)_var(--y,50%),rgba(120,119,198,0.15),transparent_40%)]" />
    </div>
  );
}
