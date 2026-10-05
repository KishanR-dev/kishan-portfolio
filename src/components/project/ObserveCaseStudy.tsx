import React from 'react';
import type { PresentationDataset } from '@/types';
import { MetricReadout } from '../evidence/MetricReadout';
import { FadeInContainer } from '../core/FadeInContainer';
import { SequenceProtocol } from '../core/SequenceProtocol';

export function ObserveCaseStudy({ project }: { project: PresentationDataset }) {

  // This page aggregates state. We visually replicate snippets of the evidence from other pages.
  return (
    <article className="min-h-screen bg-void text-text-primary">

      <header className="relative border-b border-panel-border pt-32 pb-16 px-4 md:px-12 lg:px-24">
        <FadeInContainer delay={0.1}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs uppercase text-amber-core tracking-widest">{project.id}</span>
            <div className="h-px bg-panel-border flex-grow max-w-[200px]" />
          </div>
          <h1 className="text-5xl md:text-8xl font-sans font-bold tracking-tighter uppercase max-w-4xl mb-6">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-prose leading-relaxed font-sans">
            {project.synopsis}
          </p>
        </FadeInContainer>
      </header>

      <div className="max-w-[1600px] mx-auto border-x border-panel-border min-h-screen p-4 md:p-12 lg:p-24 flex flex-col gap-16">

        <FadeInContainer as="section" className="max-w-2xl">
          <h2 className="text-sm font-mono text-amber-core tracking-widest uppercase mb-6">01 // The Executive Command Center</h2>
          <p className="text-lg text-text-primary leading-relaxed mb-4">
            Engineered systems are only as useful as their observable bounds.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The Transformation Command Center integrates execution logs, CI coverage matrices, latency improvements, and traceability into a singular operational hub. Powered by Gradio/Hugging Face Spaces, it serves as the ultimate deployment checkpoint.
          </p>
        </FadeInContainer>

        <section className="mt-12">
          <div className="font-mono text-xs text-text-tertiary mb-8 tracking-widest uppercase">EVIDENCE // dashboard-data.json Aggregation Grid</div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-px bg-panel-border rounded-sm overflow-hidden ring-1 ring-panel-border">

            {/* BUILD STATE */}
            <FadeInContainer delay={0.2} className="bg-surface-base p-8 md:col-span-2">
               <div className="font-mono text-[10px] text-text-tertiary tracking-widest uppercase mb-6">01 // BUILD STATE</div>
               <div className="text-2xl font-sans font-medium mb-2">ServicePulse Active</div>
               <div className="font-mono text-xs text-amber-core flex items-center gap-2">
                 <span className="w-2 h-2 bg-amber-core rounded-full animate-pulse" />
                 ROUTER INITIALIZED
               </div>
            </FadeInContainer>

            {/* QUALITY STATE */}
            <FadeInContainer delay={0.3} className="bg-surface-elevated/10 p-8 md:col-span-1 lg:col-span-2 border-t md:border-t-0 border-panel-border">
               <div className="font-mono text-[10px] text-text-tertiary tracking-widest uppercase mb-6">02 // QUALITY STATE</div>
               <div className="flex flex-col gap-6">
                 <MetricReadout label="Coverage" value={94.62} exactString="94.62" unit="%" />
                 <div className="font-mono text-xs text-text-secondary">83 TESTS PASSED // LINTERS CLEAN</div>
               </div>
            </FadeInContainer>

            {/* TRANSFORM STATE */}
            <FadeInContainer delay={0.4} className="bg-surface-elevated/20 p-8 md:col-span-2 lg:col-span-2">
               <div className="font-mono text-[10px] text-text-tertiary tracking-widest uppercase mb-6">03 // TRANSFORM STATE</div>
               <div className="flex flex-col gap-6">
                 <MetricReadout label="Transformed Exe" value={5.5206} exactString="5.5206" unit="s" />
                 <div className="font-mono text-xs text-amber-core border border-amber-core/20 bg-amber-core/5 p-2 inline-block max-w-max">
                   Latency Drop: 10.62s → 5.5206s
                 </div>
               </div>
            </FadeInContainer>

            {/* TRACE STATE */}
            <FadeInContainer delay={0.5} className="bg-surface-base p-8 md:col-span-1 lg:col-span-2">
               <div className="font-mono text-[10px] text-text-tertiary tracking-widest uppercase mb-6">04 // TRACE STATE</div>
               <MetricReadout label="Matched Requirements" value={16} unit="count" />
               <div className="font-mono text-[10px] text-text-secondary mt-6">
                 {'docs/traceability/traceability.json -> SYNCHRONIZED'}
               </div>
            </FadeInContainer>

          </div>
        </section>

      </div>

      <footer className="border-y border-panel-border bg-surface-elevated/20 px-4 md:px-12 lg:px-24 py-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <SequenceProtocol targetId="TRACE" targetLabel="Requirements" direction="prev" telemetryText="TRACEABILITY JSON" />
        </div>
      </footer>
    </article>
  );
}
