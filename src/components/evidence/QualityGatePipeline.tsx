"use client";

import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const GATES = [
  { id: 'SOURCE', label: 'Ruff / Bandit', status: 'clean' },
  { id: 'TEST', label: 'pytest', metric: '83', unit: 'tests' },
  { id: 'COVERAGE', label: 'coverage.py', metric: '94.62', unit: '%' },
  { id: 'DEPENDENCY', label: 'pip-audit', status: 'clean' },
  { id: 'CI GATE', label: 'GitHub Actions', status: 'active' },
];

export function QualityGatePipeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 140, damping: 18 } }
  };

  if (prefersReduced) {
    containerVariants.visible.transition.staggerChildren = 0;
    itemVariants.hidden.y = 0;
  }

  return (
    <div ref={containerRef} className="relative w-full py-12 overflow-hidden border border-panel-border bg-surface-elevated/10">
      <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Background connector line */}
      <div className="absolute top-1/2 left-8 right-8 h-px bg-panel-border hidden lg:block -translate-y-1/2 z-0" aria-hidden="true" />
      <div className="absolute top-8 bottom-8 left-[39px] w-px bg-panel-border lg:hidden z-0" aria-hidden="true" />

      <motion.ol
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 flex flex-col lg:flex-row justify-between gap-8 px-4 lg:px-8"
      >
        {GATES.map((gate, i) => (
          <motion.li
            key={gate.id}
            variants={itemVariants}
            tabIndex={0} className="flex flex-row lg:flex-col items-center gap-4 group relative focus:outline-none focus:ring-2 focus:ring-amber-core/50"
          >
            {/* The Node Base */}
            <div className="flex-shrink-0 w-12 h-12 rounded-sm border-2 border-amber-core/30 bg-surface-base flex items-center justify-center group-hover:border-amber-core transition-colors shadow-[0_0_15px_rgba(255,176,0,0.1)]">
               <span className="font-mono text-xs text-text-secondary group-hover:text-amber-core group-focus:text-amber-core">
                 0{i+1}
               </span>
            </div>

            {/* Tooltip / Data Reveal overlay */}
            <div className="lg:absolute lg:top-16 lg:left-1/2 lg:-translate-x-1/2 w-48 p-4 border border-panel-border bg-surface-elevated/90 backdrop-blur opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
               <div className="font-mono text-[10px] text-text-tertiary mb-2 uppercase">{gate.id}</div>
               <div className="font-sans text-sm text-text-primary mb-2">{gate.label}</div>
               {gate.metric && (
                 <div className="font-mono text-xl text-amber-core border-t border-panel-border pt-2 mt-2">
                   {gate.metric}<span className="text-xs ml-1 text-text-secondary">{gate.unit}</span>
                 </div>
               )}
               {gate.status && (
                 <div className="font-mono text-xs text-amber-core border-t border-panel-border pt-2 mt-2 uppercase flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-amber-core animate-pulse" />
                   {gate.status}
                 </div>
               )}
            </div>

            {/* Mobile inline label (hidden on desktop hover reveals) */}
            <div className="lg:hidden flex flex-col">
               <span className="font-mono text-xs text-text-secondary">{gate.id}</span>
               <span className="font-sans text-sm text-text-primary">{gate.label}</span>
               {gate.metric && <span className="font-mono text-sm text-amber-core">{gate.metric}{gate.unit}</span>}
            </div>

          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
