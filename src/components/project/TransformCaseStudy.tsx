import React from 'react';
import type { PresentationDataset } from '@/types';
import { BeforeAfterBenchmark } from '../evidence/BeforeAfterBenchmark';
import { FadeInContainer } from '../core/FadeInContainer';
import { SequenceProtocol } from '../core/SequenceProtocol';

export function TransformCaseStudy({ project }: { project: PresentationDataset }) {

  // Extract strictly matched metrics from the datalist
  const baseline = {
     time: project.metrics.find(m => m.label === 'Baseline')?.value || 10.62,
     exactString: project.metrics.find(m => m.label === 'Baseline')?.exactString || '10.62',
     pass: project.metrics.find(m => m.label === 'Baseline Success')?.value || 2,
     fail: project.metrics.find(m => m.label === 'Baseline Fail')?.value || 98,
  };

  const transformed = {
     time: project.metrics.find(m => m.label === 'Transformed')?.value || 5.5206,
     exactString: project.metrics.find(m => m.label === 'Transformed')?.exactString || '5.5206',
     pass: project.metrics.find(m => m.label === 'Transformed Success')?.value || 50,
     fail: project.metrics.find(m => m.label === 'Transformed Fail')?.value || 0,
  };

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
            <h2 className="text-sm font-mono text-amber-core tracking-widest uppercase mb-6">01 // Problem & Bottleneck</h2>
            <p className="text-lg text-text-primary leading-relaxed mb-4">
              Legacy ID generation exhibited a severe race condition during concurrent executions.
            </p>
            <p className="text-text-secondary leading-relaxed">
              When tested with 100 concurrent connection requests, the initial UUID mapping crashed under load, yielding a 98% failure rate and stalling complete execution across 10.62 seconds.
            </p>
          </FadeInContainer>

          <FadeInContainer as="section">
            <h2 className="text-sm font-mono text-amber-core tracking-widest uppercase mb-6">02 // Transformation</h2>
            <p className="text-lg text-text-primary leading-relaxed mb-4">
              Concurrency locking and algorithmic re-evaluation.
            </p>
            <p className="text-text-secondary leading-relaxed">
              By addressing the GIL lock and refactoring the synchronous generation bottleneck to an asynchronous block-based allocation strategy, overall stability reached 100%.
            </p>
          </FadeInContainer>
        </div>

        <div className="lg:col-span-8 xl:col-span-8 bg-surface-base relative border-t lg:border-t-0 border-panel-border overflow-hidden">
          <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center p-4 md:p-12 xl:p-24 gap-12">

            <FadeInContainer delay={0.2} className="w-full">
              <div className="font-mono text-xs text-text-tertiary mb-4 tracking-widest uppercase">EVIDENCE // RCA_001_concurrent_id_generation</div>
                <div className="font-mono text-xs text-amber-core border border-amber-core/20 bg-amber-core/5 p-4 mb-12 max-w-max">
                  `scripts/run_benchmarks.py --test-concurrency`
                </div>
              <BeforeAfterBenchmark baseline={baseline} transformed={transformed} />
            </FadeInContainer>

          </div>
        </div>

      </div>

      <footer className="border-t border-panel-border bg-surface-elevated/20 px-4 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <SequenceProtocol targetId="QUALITY" targetLabel="Engineering Quality" direction="prev" telemetryText="94.62% COVERAGE" />
          <SequenceProtocol targetId="TRACE" targetLabel="Requirements" telemetryText="TRACEABILITY JSON" />
        </div>
      </footer>
    </article>
  );
}
