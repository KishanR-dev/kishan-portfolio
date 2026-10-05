"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const STAGES = [
  { id: 'BUILD', label: 'ServicePulse' },
  { id: 'QUALITY', label: 'Engineering Quality' },
  { id: 'TRANSFORM', label: 'Performance' },
  { id: 'TRACE', label: 'Requirements' },
  { id: 'OBSERVE', label: 'Command Center' }
];

export function NavigationSpine() {
  const spineRef = useRef<HTMLDivElement>(null);

  return (
    <nav
      ref={spineRef}
      className="hidden md:flex sticky top-0 h-screen w-64 border-r border-panel-border bg-void flex-col justify-between py-12 px-8 z-40"
    >
      <div>
        <div className="font-sans font-bold text-lg text-text-primary tracking-tight mb-16 uppercase">
          Kishan R
          <span className="block text-amber-core text-xs font-mono tracking-widest mt-1">Platform Eng</span>
        </div>

        <ul className="flex flex-col gap-8">
          {STAGES.map((stage, i) => (
            <li key={stage.id} className="group flex flex-col gap-1">
              <span className="font-mono text-xs tracking-widest text-text-tertiary">
                0{i + 1} {"//"}
              </span>
              <Link
                href={`#${stage.id.toLowerCase()}`}
                className="font-sans font-medium text-lg text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
              >
                {stage.id}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="font-mono text-[10px] uppercase text-text-tertiary tracking-widest leading-relaxed">
        JAN 2026 - APR 2026 <br />
        Turing Metrics Validated
      </div>
    </nav>
  );
}
