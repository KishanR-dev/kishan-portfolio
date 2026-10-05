"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TRACE_DATA = [
  { id: 'FR-001', requirement: 'System must generate random UUIDs continuously.', impl: 'core/id_gen.py', test: 'test_uuid_limit.py', status: 'VALIDATED' },
  { id: 'FR-002', requirement: 'State transition guarantees idempotency.', impl: 'app/router.py', test: 'test_idempotency.py', status: 'VALIDATED' },
  { id: 'FR-003', requirement: 'Endpoint restricts unauthorized drops array.', impl: 'api/middleware.py', test: 'test_auth.py', status: 'VALIDATED' },
];

export function TraceabilityGraph() {
  const [activeTrace, setActiveTrace] = useState<string | null>(TRACE_DATA[0].id);

  return (
    <div className="w-full border border-panel-border bg-surface-elevated/10">

      {/* Desktop Visual Map (hidden on mobile) */}
      <div className="hidden lg:grid grid-cols-4 gap-px bg-panel-border relative isolate">

        {/* Background linking lines */}
        <div className="absolute inset-x-0 h-px bg-grid-line top-1/2 -z-10 pointer-events-none" />

        <div className="bg-surface-base p-6">
          <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-6">STEP 01 // Requirement</div>
          <div className="flex flex-col gap-4" role="tablist" aria-label="Requirements">
            {TRACE_DATA.map((t) => (
              <button
                role="tab"
                aria-selected={activeTrace === t.id}
                aria-controls={`panel-${t.id}`}
                id={`tab-${t.id}`}
                key={t.id}
                onClick={() => setActiveTrace(t.id)}
                className={`text-left p-4 border font-mono text-xs transition-colors ${activeTrace === t.id ? 'border-amber-core bg-amber-core/5 text-amber-core' : 'border-panel-border bg-surface-elevated text-text-secondary hover:text-text-primary'}`}
              >
                {t.id}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-surface-base p-6 flex flex-col justify-center">
          <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-6 border-b border-panel-border pb-2">STEP 02 // Implementation</div>
          <AnimatePresence mode="wait">
            {TRACE_DATA.map(t => activeTrace === t.id && (
              <motion.div key={t.id} id={`panel-${t.id}`} role="tabpanel" aria-labelledby={`tab-${t.id}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="font-mono text-sm text-text-primary p-4 border border-panel-border bg-surface-elevated">
                {t.impl}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="bg-surface-base p-6 flex flex-col justify-center">
          <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-6 border-b border-panel-border pb-2">STEP 03 // Test</div>
          <AnimatePresence mode="wait">
            {TRACE_DATA.map(t => activeTrace === t.id && (
              <motion.div key={t.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="font-mono text-sm text-text-primary p-4 border border-panel-border bg-surface-elevated">
                {t.test}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="bg-surface-base p-6 flex flex-col justify-center">
          <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-6 border-b border-panel-border pb-2">STEP 04 // Validation</div>
          <AnimatePresence mode="wait">
            {TRACE_DATA.map(t => activeTrace === t.id && (
              <motion.div key={t.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex items-center gap-2 font-mono text-sm text-amber-core p-4 border border-amber-core bg-amber-core/5">
                <span className="w-2 h-2 rounded-full bg-amber-core animate-pulse" />
                {t.status}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Accordions (hidden on desktop) */}
      <div className="lg:hidden flex flex-col divide-y divide-panel-border bg-surface-base">
        {TRACE_DATA.map((t) => (
          <details key={t.id} className="group" open={activeTrace === t.id}>
            <summary
              className="font-mono text-sm text-amber-core p-4 cursor-pointer list-none flex justify-between items-center bg-surface-elevated/30"
              onClick={(e) => {
                e.preventDefault();
                setActiveTrace(activeTrace === t.id ? null : t.id);
              }}
            >
              <span>{t.id}</span>
              <span className="text-text-tertiary group-open:-scale-y-100 transition-transform">▼</span>
            </summary>
            <div className="p-4 flex flex-col gap-4 font-mono text-xs border-t border-panel-border/50">
               <div>
                  <span className="text-text-tertiary block mb-1">Requirement:</span>
                  <span className="text-text-primary">{t.requirement}</span>
               </div>
               <div>
                  <span className="text-text-tertiary block mb-1">Implementation:</span>
                  <span className="text-text-primary">{t.impl}</span>
               </div>
               <div>
                  <span className="text-text-tertiary block mb-1">Test:</span>
                  <span className="text-text-primary">{t.test}</span>
               </div>
               <div className="text-amber-core flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-amber-core" />
                 {t.status}
               </div>
            </div>
          </details>
        ))}
      </div>

    </div>
  );
}
