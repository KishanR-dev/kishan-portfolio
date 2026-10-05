"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function SystemsInMotionHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawSystemRef = useRef<HTMLDivElement>(null);
  const architectureRef = useRef<HTMLDivElement>(null);
  const qualityRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<HTMLDivElement>(null);
  const traceRef = useRef<HTMLDivElement>(null);
  const commandRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(max-width: 768px)').matches;

    const sections = [
      rawSystemRef.current,
      architectureRef.current,
      qualityRef.current,
      transformRef.current,
      traceRef.current,
      commandRef.current
    ];

    // Initial setup: hide all except the first one
    gsap.set(sections, { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 });
    gsap.set(sections[0], { opacity: 1, scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: prefersReducedMotion ? "+=3000" : "+=5000",
        pin: true,
        scrub: prefersReducedMotion ? 0 : 1,
      }
    });

    const d = prefersReducedMotion ? 0.01 : 1;
    const offset = prefersReducedMotion ? ">" : "-=0.5";
    const sc = prefersReducedMotion ? 1 : 1.05;

    // 0 -> 1: Raw -> Architecture
    tl.to(sections[0], { opacity: 0, scale: sc, duration: d })
      .to(sections[1], { opacity: 1, scale: 1, duration: d }, offset)
    // 1 -> 2: Arch -> Quality
      .to(sections[1], { opacity: 0, scale: sc, duration: d })
      .to(sections[2], { opacity: 1, scale: 1, duration: d }, offset)
    // 2 -> 3: Qual -> Transform
      .to(sections[2], { opacity: 0, scale: sc, duration: d })
      .to(sections[3], { opacity: 1, scale: 1, duration: d }, offset)
    // 3 -> 4: Transform -> Trace
      .to(sections[3], { opacity: 0, scale: sc, duration: d })
      .to(sections[4], { opacity: 1, scale: 1, duration: d }, offset)
    // 4 -> 5: Trace -> Command Center
      .to(sections[4], { opacity: 0, scale: sc, duration: d })
      .to(sections[5], { opacity: 1, scale: 1, duration: d }, offset);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen md:h-screen w-full bg-void overflow-hidden border-b border-panel-border">

      {/* 1. RAW SYSTEM */}
      <div ref={rawSystemRef} className="absolute inset-0 flex items-center justify-center p-8 flex-col">
        <div className="font-mono text-xs md:text-sm text-text-tertiary opacity-50 whitespace-pre overflow-hidden max-h-[60vh] max-w-[80vw] mx-auto text-left leading-tight">
{`0x0000 INFO  [kernel] init core systems... OK
0x0010 TRACE [pci] probing bridge... FOUND
0x0020 DEBUG [mem] allocating 16MB blocks... DONE
...
ERR_UNKNOWN_STATE
RETRYING_CONNECTION_T...
0x00F0 WARN  [sync] unstructured layout detected`}
        </div>
        <h2 className="absolute text-5xl md:text-8xl font-sans font-bold text-text-primary tracking-tighter uppercase mix-blend-difference mt-8 text-center max-w-full overflow-hidden">Raw System</h2>
      </div>

      {/* 2. ARCHITECTURE */}
      <div ref={architectureRef} className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl border border-grid-line h-64 md:h-96 relative flex items-center justify-center">
          <div className="absolute inset-0 technical-grid" />
          <h2 className="text-5xl md:text-8xl font-sans font-bold text-text-primary tracking-tighter uppercase relative z-10 bg-void px-4 border border-grid-line text-center">Architecture</h2>
        </div>
      </div>

      {/* 3. QUALITY */}
      <div ref={qualityRef} className="absolute inset-0 flex items-center justify-center p-8">
        <div className="flex flex-col items-center max-w-full">
           <h2 className="text-5xl md:text-8xl font-sans font-bold text-text-primary tracking-tighter uppercase mb-8 text-center">Quality</h2>
           <div className="flex flex-wrap justify-center gap-4 font-mono text-sm">
             <div className="px-4 py-2 border border-panel-border text-amber-core bg-amber-core/10 animate-pulse">83 TESTS PASSED</div>
             <div className="px-4 py-2 border border-panel-border text-amber-core bg-amber-core/10 animate-pulse delay-75">94.62% COVERAGE</div>
           </div>
        </div>
      </div>

      {/* 4. TRANSFORMATION */}
      <div ref={transformRef} className="absolute inset-0 flex items-center justify-center p-8">
         <div className="flex flex-col items-center max-w-2xl text-center">
           <h2 className="text-5xl md:text-8xl font-sans font-bold text-amber-core tracking-tighter uppercase mb-4 shadow-amber-core overflow-hidden">Transform</h2>
           <div className="w-full h-px bg-amber-core/50 my-8" />
           <p className="font-mono text-text-secondary text-sm md:text-base">10.62s → 5.5206s execution time</p>
         </div>
      </div>

      {/* 5. TRACEABILITY */}
      <div ref={traceRef} className="absolute inset-0 flex items-center justify-center p-8">
        <div className="relative w-full max-w-5xl h-64 border-t border-grid-line flex flex-col justify-center">
           <div className="absolute left-0 right-0 h-px bg-amber-core top-1/2 transform -translate-y-1/2 z-0 opacity-80" />
           <div className="relative z-10 flex flex-wrap justify-center md:justify-between px-2 md:px-8 gap-2">
             <div className="bg-void border border-amber-core px-4 py-2 font-mono text-amber-core text-xs">FR-001</div>
             <div className="bg-void border border-amber-core px-4 py-2 font-mono text-amber-core text-xs">design.md</div>
             <div className="bg-void border border-amber-core px-4 py-2 font-mono text-amber-core text-xs">test_main.py</div>
           </div>
           <h2 className="absolute top-8 left-8 md:text-6xl text-3xl font-sans text-text-primary tracking-tight uppercase">Traceability</h2>
        </div>
      </div>

      {/* 6. COMMAND CENTER */}
      <div ref={commandRef} className="absolute inset-0 flex items-center justify-center p-8">
        <div className="border border-panel-border bg-surface-elevated w-full max-w-6xl h-[70vh] flex flex-col">
          <div className="border-b border-panel-border p-4 flex justify-between font-mono text-xs text-text-secondary pr-8 w-full overflow-hidden">
            <span className="truncate">TRANSFORMATION COMMAND CENTER</span>
            <span className="text-amber-core shrink-0 ml-2">● STATIC EVIDENCE</span>
          </div>
          <div className="flex-grow flex items-center justify-center relative p-8">
             <h2 className="text-6xl md:text-9xl font-sans font-black text-text-primary tracking-tighter uppercase z-10 text-center">Observe</h2>
          </div>
        </div>
      </div>

    </section>
  );
}
