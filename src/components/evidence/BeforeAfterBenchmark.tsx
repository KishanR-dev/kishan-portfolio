"use client";

import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { MetricReadout } from './MetricReadout';

interface BenchmarkState {
  time: number;
  exactString: string;
  pass: number;
  fail: number;
}

interface BeforeAfterProps {
  baseline: BenchmarkState;
  transformed: BenchmarkState;
}

export function BeforeAfterBenchmark({ baseline, transformed }: BeforeAfterProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const prefersReduced = useReducedMotion();

  const wipeVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 1.5, type: "spring" as const, stiffness: 50, damping: 20 }
    }
  };

  if (prefersReduced) {
    wipeVariants.hidden.clipPath = 'inset(0 0% 0 0)';
  }

  return (
    <div ref={containerRef} className="w-full border border-panel-border bg-surface-base isolate relative">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* BASELINE */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-panel-border relative bg-void">
          <div className="absolute inset-0 technical-grid opacity-10" />
          <h3 className="relative font-mono text-xs text-text-tertiary mb-12 uppercase tracking-widest border-b border-panel-border/50 pb-2">
            State 01 // Baseline
          </h3>
          <div className="relative flex flex-col gap-12">
            <MetricReadout label="Execution Time" value={baseline.time} exactString={baseline.exactString} unit="s" highlight={false} />
            <div className="grid grid-cols-2 gap-4 border-t border-panel-border pt-8">
              <MetricReadout label="Success" value={baseline.pass} unit="count" highlight={false} />
              <MetricReadout label="Failures" value={baseline.fail} unit="count" highlight={false} className="text-red-900" />
            </div>
          </div>
        </div>

        {/* TRANSFORMED */}
        <motion.div
          className="p-8 md:p-12 relative bg-surface-elevated/20"
          variants={wipeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="absolute inset-0 technical-grid opacity-30 mix-blend-overlay" />
          <div className="absolute top-0 left-0 bottom-0 w-px bg-amber-core shadow-[0_0_20px_rgba(255,176,0,0.8)] z-10 hidden md:block" />

          <h3 className="relative z-10 font-mono text-xs text-amber-core mb-12 uppercase tracking-widest border-b border-amber-core/20 pb-2">
            State 02 // Transformed
          </h3>
          <div className="relative z-10 flex flex-col gap-12">
            <MetricReadout label="Execution Time" value={transformed.time} exactString={transformed.exactString} unit="s" />
            <div className="grid grid-cols-2 gap-4 border-t border-panel-border pt-8">
              <MetricReadout label="Success" value={transformed.pass} unit="count" />
              <MetricReadout label="Failures" value={transformed.fail} unit="count" highlight={false} />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
