"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ArchitectureFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      ".flow-pulse",
      { strokeDashoffset: 100 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full border border-panel-border bg-surface-base p-8 relative overflow-hidden">
      <div className="absolute inset-0 technical-grid opacity-20" />

      <svg width="100%" height="200" viewBox="0 0 600 200" className="relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">

        {/* Nodes */}
        <rect x="50" y="80" width="120" height="40" rx="4" className="stroke-panel-border fill-void" strokeWidth="2" />
        <text x="110" y="105" textAnchor="middle" className="fill-text-primary font-mono text-xs">API Gateway</text>

        <rect x="240" y="80" width="120" height="40" rx="4" className="stroke-panel-border fill-void" strokeWidth="2" />
        <text x="300" y="105" textAnchor="middle" className="fill-text-primary font-mono text-xs">ServicePulse</text>

        <rect x="430" y="80" width="120" height="40" rx="4" className="stroke-panel-border fill-void" strokeWidth="2" />
        <text x="490" y="105" textAnchor="middle" className="fill-text-primary font-mono text-xs">State Machine</text>

        {/* Base Paths */}
        <path d="M 170 100 L 240 100" className="stroke-grid-line" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 360 100 L 430 100" className="stroke-grid-line" strokeWidth="2" strokeDasharray="4 4" />

        {/* Animated Paths */}
        <path
          d="M 170 100 L 240 100"
          className="flow-pulse stroke-amber-core"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset="100"
          strokeLinecap="round"
        />
        <path
          d="M 360 100 L 430 100"
          className="flow-pulse stroke-amber-core"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset="100"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
