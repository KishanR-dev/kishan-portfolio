import React from 'react';
import type { PresentationDataset } from '@/types';
import { TraceabilityGraph } from '../evidence/TraceabilityGraph';
import { MetricReadout } from '../evidence/MetricReadout';
import { CodeBlock } from '../evidence/CodeBlock';
import { FadeInContainer } from '../core/FadeInContainer';
import { SequenceProtocol } from '../core/SequenceProtocol';

export function TraceCaseStudy({ project }: { project: PresentationDataset }) {
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

      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-[1600px] mx-auto border-x border-panel-border min-h-screen">

        <div className="lg:col-span-4 xl:col-span-4 p-4 md:p-12 lg:p-16 border-r border-panel-border flex flex-col gap-24">
          <FadeInContainer as="section">
            <h2 className="text-sm font-mono text-amber-core tracking-widest uppercase mb-6">01 // Problem & Drift</h2>
            <p className="text-lg text-text-primary leading-relaxed mb-4">
              Documentation acts as a static contract, but implementation inevitably diverges.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Without an automated mechanism binding a specific requirement to its programmatic implementation and testing gate, validation matrices must be constructed manually, exposing organizations to compliance risk and operational blind spots.
            </p>
          </FadeInContainer>

          <FadeInContainer as="section">
            <h2 className="text-sm font-mono text-amber-core tracking-widest uppercase mb-6">02 // Trace Graph</h2>
            <p className="text-lg text-text-primary leading-relaxed mb-4">
              A 1-to-1 linkage connecting intent to deployment.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Every critical path module in ServicePulse maps dynamically through the testing phase back to its root FR (Functional Requirement), authenticated by JSON configurations running transparently in CI.
            </p>
          </FadeInContainer>
        </div>

        <div className="lg:col-span-8 xl:col-span-8 bg-surface-base relative border-t lg:border-t-0 border-panel-border overflow-hidden">
          <div className="lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col justify-center p-4 md:p-12 xl:p-24 gap-12 overflow-y-auto">

            <FadeInContainer delay={0.2} className="w-full">
              <div className="font-mono text-xs text-text-tertiary mb-4 tracking-widest uppercase">EVIDENCE // Traceability Matrix (JSON Parsing)</div>
              <TraceabilityGraph />
            </FadeInContainer>

            <FadeInContainer delay={0.4} className="w-full mt-12">
               <div className="font-mono text-xs text-text-tertiary mb-4 tracking-widest uppercase">EVIDENCE // traceability.json Artifact snippet</div>
               <CodeBlock
                  language="json"
                  code={`
{
  "FR-001": {
    "module": "core/id_gen.py",
    "test": "test_uuid_limit.py",
    "status": "VALIDATED"
  },
  "FR-002": { ... }
}
                  `}
               />
            </FadeInContainer>

            <FadeInContainer delay={0.6} className="w-full border-t border-panel-border pt-12">
               {project.metrics?.map((metric, i) => (
                 <MetricReadout key={i} {...metric} />
               ))}
            </FadeInContainer>

          </div>
        </div>

      </div>

      <footer className="border-t border-panel-border bg-surface-elevated/20 px-4 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <SequenceProtocol targetId="TRANSFORM" targetLabel="Performance" direction="prev" telemetryText="SUCCESS RATE: 100%" />
          <SequenceProtocol targetId="OBSERVE" targetLabel="Command Center" telemetryText="AWAITING SYSTEM STATE" />
        </div>
      </footer>
    </article>
  );
}
