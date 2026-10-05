import React from 'react';
import type { PresentationDataset } from '@/types';
import { MetricReadout } from '../evidence/MetricReadout';
import { QualityGatePipeline } from '../evidence/QualityGatePipeline';
import { FadeInContainer } from '../core/FadeInContainer';
import { SequenceProtocol } from '../core/SequenceProtocol';

export function QualityCaseStudy({ project }: { project: PresentationDataset }) {
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

        <div className="lg:col-span-6 xl:col-span-5 p-4 md:p-12 lg:p-24 border-r border-panel-border flex flex-col gap-24">
          <FadeInContainer as="section">
            <h2 className="text-sm font-mono text-amber-core tracking-widest uppercase mb-6">01 // Problem & Quality Strategy</h2>
            <p className="text-lg text-text-primary leading-relaxed mb-4">
              Unverified infrastructure transitions lead to cascading deployment errors.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We introduced rigorous engineering validation gates spanning static analysis,
              isolated container test-runners, and deterministic CI execution.
              Code is structurally gated before artifacts are finalized.
            </p>
          </FadeInContainer>

          <FadeInContainer as="section">
            <h2 className="text-sm font-mono text-amber-core tracking-widest uppercase mb-6">02 // Automated Gates</h2>
            <p className="text-lg text-text-primary leading-relaxed mb-4">
              A sequence of 5 independent gates ensures complete compliance.
            </p>
            <div className="font-mono text-sm text-text-secondary flex flex-col gap-2 border-l border-panel-border pl-4">
              <span>→ Ruff (Linter)</span>
              <span>→ Bandit (Security Analyst)</span>
              <span>→ pip-audit (CVE Scanning)</span>
              <span>→ pytest (Behavioral Truth)</span>
            </div>
          </FadeInContainer>
        </div>

        <div className="lg:col-span-6 xl:col-span-7 bg-surface-base relative border-t lg:border-t-0 border-panel-border overflow-hidden">
          <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center p-4 md:p-12 gap-12">

            <FadeInContainer delay={0.2} className="w-full">
              <div className="font-mono text-xs text-text-tertiary mb-4 tracking-widest uppercase">EVIDENCE // Pipeline Integrity</div>
              <QualityGatePipeline />
            </FadeInContainer>

            <FadeInContainer delay={0.4} className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-panel-border pt-12">
               {project.metrics?.map((metric, i) => (
                 <MetricReadout key={i} {...metric} />
               ))}
            </FadeInContainer>

          </div>
        </div>

      </div>

      <footer className="border-t border-panel-border bg-surface-elevated/20 px-4 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <SequenceProtocol targetId="BUILD" targetLabel="ServicePulse" direction="prev" telemetryText="STATE MACHINE" />
          <SequenceProtocol targetId="TRANSFORM" targetLabel="Performance" telemetryText="5.5206s execution" />
        </div>
      </footer>
    </article>
  );
}
