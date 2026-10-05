"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface SequenceProtocolProps {
  targetId: string;
  targetLabel: string;
  telemetryText?: string;
  direction?: 'next' | 'prev';
}

export function SequenceProtocol({ targetId, targetLabel, telemetryText = 'READY', direction = 'next' }: SequenceProtocolProps) {
  const [isHovered, setIsHovered] = useState(false);
  const route = `/projects/${targetId.toLowerCase()}`;

  return (
    <Link
      href={route}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block border border-panel-border bg-surface-elevated/20 p-6 md:p-8 hover:bg-surface-elevated transition-colors relative overflow-hidden"
    >
      <div className="absolute inset-0 technical-grid opacity-10 group-hover:opacity-30 transition-opacity" aria-hidden="true" />

      {/* Target Marker */}
      <div className="flex justify-between items-end relative z-10">
        <div className="flex flex-col gap-2">
          <div className="font-mono text-xs text-text-tertiary uppercase tracking-widest">
            {direction === 'next' ? '[ INITIATE SEQ ]' : '[ RETURN SEQ ]'}
          </div>
          <div className="font-sans text-2xl md:text-3xl text-text-primary uppercase tracking-tight group-hover:text-amber-core transition-colors">
            {targetLabel}
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end gap-1">
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0.5 }}
            className="font-mono text-[10px] text-amber-core border border-amber-core/20 bg-amber-core/5 px-2 py-1"
          >
            {isHovered ? `SYS // ${telemetryText}` : `AWAITING // ${targetId}`}
          </motion.div>
          <div className="text-text-secondary">
             {direction === 'next' ? '→' : '←'}
          </div>
        </div>
      </div>

      {/* Bottom accent glow */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 18 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-amber-core origin-left"
      />
    </Link>
  );
}
