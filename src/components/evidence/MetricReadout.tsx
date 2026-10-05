"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform, useReducedMotion } from "framer-motion";
import type { MetricUnit } from "@/types";

interface MetricReadoutProps {
  label: string;
  value: number;
  exactString?: string;
  unit: MetricUnit;
  prefix?: string;
  className?: string;
  highlight?: boolean;
}

export function MetricReadout({ label, value, exactString, unit, prefix = "", className = "", highlight = true }: MetricReadoutProps) {
  const [isInView, setIsInView] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a spring physics model for the tick-up
  const springValue = useSpring(0, {
    mass: 1,
    stiffness: 140,
    damping: 18,
  });

  useEffect(() => {
    if (isInView && !prefersReducedMotion && !exactString) {
      springValue.set(value);
    } else if (prefersReducedMotion && !exactString) {
      springValue.set(value); // Set immediately
    }
  }, [isInView, value, springValue, prefersReducedMotion, exactString]);

  // Transform raw number into a fixed-decimal string based on value
  const displayValue = useTransform(springValue, (current) => {
    if (Number.isInteger(value)) {
      return Math.round(current).toString();
    }
    return current.toFixed(value.toString().split('.')[1]?.length || 2);
  });

  const valueColor = highlight ? "text-amber-core" : "text-text-primary";

  return (
    <motion.dl
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col border-l border-panel-border pl-4 ${className}`}
    >
      <dt className="text-text-secondary text-sm font-sans tracking-wide uppercase mb-1">
        {label}
      </dt>
      <dd className={`font-mono text-3xl md:text-4xl tabular-nums tracking-tight flex items-baseline gap-1 ${valueColor}`}>
        {prefix && <span className="mr-1">{prefix}</span>}

        {exactString ? (
          <span>{exactString}</span>
        ) : (!mounted || prefersReducedMotion) ? (
          <span>{value}</span>
        ) : (
          <motion.span>{displayValue}</motion.span>
        )}

        {unit && <span className="text-text-tertiary text-sm md:text-base ml-1">{unit}</span>}
      </dd>
    </motion.dl>
  );
}
