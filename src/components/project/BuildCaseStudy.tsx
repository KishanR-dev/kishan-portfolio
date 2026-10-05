import React from 'react';
import type { PresentationDataset } from '@/types';
import Link from 'next/link';
import { MetricReadout } from '../evidence/MetricReadout';
import { ArchitectureFlow } from '../evidence/ArchitectureFlow';
import { CodeBlock } from '../evidence/CodeBlock';
import { FadeInContainer } from '../core/FadeInContainer';
import { SequenceProtocol } from '../core/SequenceProtocol';

interface BuildCaseStudyProps {
  project: PresentationDataset;
}

export function BuildCaseStudy({ project }: BuildCaseStudyProps) {
  return (
    <article className="min-h-screen bg-void text-text-primary">

      {/* 1. Header/Context */}
      <header className="relative border-b border-panel-border pt-32 pb-16 px-4 md:px-12 lg:px-24">
        <FadeInContainer delay={0.1}>
          <nav className="mb-12">
            <Link href="/#build" className="font-mono text-sm text-text-secondary hover:text-amber-core transition-colors flex items-center gap-2">
              ← Return Home
            </Link>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs uppercase text-amber-core tracking-widest">{project.id}</span>
            <div className="h-px bg-panel-border w-24" />
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

        {/* Left Column: Narrative (Scrolls normally) */}
        <div className="lg:col-span-6 xl:col-span-5 p-4 md:p-12 lg:p-24 border-r border-panel-border flex flex-col gap-24">

          <FadeInContainer as="section">
            <h2 className="text-sm font-mono text-amber-core tracking-widest uppercase mb-6">01 // Problem</h2>
            <p className="text-lg text-text-primary leading-relaxed mb-4">
              Production Operations and Incident Management historically suffer from decentralized state tracking and inconsistent domain models.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Without a centralized integration tier containing concrete state machines, operations become fragmented. The requirement was a foundational API that could unify these scattered workflows into one verifiable, auditable sequence.
            </p>
          </FadeInContainer>

          <FadeInContainer as="section">
            <h2 className="text-sm font-mono text-amber-core tracking-widest uppercase mb-6">02 // System Architecture</h2>
            <p className="text-lg text-text-primary leading-relaxed mb-4">
              ServicePulse acts as the central Gateway and State Machine enforcing strictly typed transitions.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Domain models are constructed to enforce idempotency. State transitions occurring via the API must map directly to automated operations logic safely.
            </p>
          </FadeInContainer>

          <FadeInContainer as="section">
            <h2 className="text-sm font-mono text-amber-core tracking-widest uppercase mb-6">03 // Decisions Ledger</h2>
            <div className="grid grid-cols-1 gap-1 border-t border-panel-border">
              <div className="py-4 border-b border-panel-border">
                <div className="font-sans font-medium text-amber-core mb-2">Centralized State Machine</div>
                <div className="font-sans text-sm text-text-secondary">Enforces linear operational transitions, preventing concurrent out-of-order execution bugs.</div>
              </div>
              <div className="py-4 border-b border-panel-border">
                <div className="font-sans font-medium text-amber-core mb-2">Explicit AST-level Traceability</div>
                <div className="font-sans text-sm text-text-secondary">Ensures the documented requirements match exactly what the code orchestrates.</div>
              </div>
            </div>
          </FadeInContainer>

        </div>

        {/* Right Column: Evidence Theater */}
        <div className="lg:col-span-6 xl:col-span-7 bg-surface-base relative border-t lg:border-t-0 border-panel-border h-[50vh] lg:h-auto overflow-hidden">
          <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center p-4 md:p-12">

            <FadeInContainer delay={0.2} className="w-full">
              <div className="font-mono text-xs text-text-tertiary mb-4 tracking-widest uppercase">EVIDENCE // Architecture Topology</div>
              <ArchitectureFlow />
            </FadeInContainer>

            <FadeInContainer delay={0.4} className="w-full mt-12">
              <div className="font-mono text-xs text-text-tertiary mb-4 tracking-widest uppercase">EVIDENCE // Idempotent Gateway Router</div>
              <CodeBlock
                language="python"
                code={`
@router.post("/execute/{job_id}", response_model=JobState)
async def execute_job(job_id: str, payload: ExecutionPayload):
    # Enforce strict state transition before orchestration
    state = await state_machine.transition(
        job_id,
        target="PROCESSING"
    )

    if not state.success:
        raise HTTPException(400, "Invalid state transition")

    return await orchestrator.dispatch(payload)
                `}
              />
            </FadeInContainer>

            <FadeInContainer delay={0.6} className="w-full mt-12 grid grid-cols-2 gap-4">
               {project.metrics?.map((metric, i) => (
                 <MetricReadout key={i} {...metric} />
               ))}
               {(!project.metrics || project.metrics.length === 0) && (
                 <div className="col-span-2">
                   <MetricReadout label="Architecture Stability" value={100} unit="%" />
                 </div>
               )}
            </FadeInContainer>

          </div>
        </div>
      </div>
      <footer className="border-t border-panel-border bg-surface-elevated/20 px-4 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div /> {/* No previous for first item */}
          <SequenceProtocol targetId="QUALITY" targetLabel="Engineering Quality & CI/CD" telemetryText="Gated pipelines" />
        </div>
      </footer>
    </article>
  );
}
