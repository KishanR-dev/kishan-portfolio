export function IdentityManifest() {
  return (
    <section className="border-t border-panel-border bg-surface-base mt-24 py-24 relative overflow-hidden" id="about">
      <div className="absolute inset-0 technical-grid opacity-10 mix-blend-overlay" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        <header className="mb-16">
          <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-4">
            MANIFEST // ENGINEER IDENTITY
          </div>
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-text-primary tracking-tighter uppercase">
            Kishan R
          </h2>
          <div className="font-mono text-amber-core tracking-widest mt-2 uppercase text-sm">
            Engineering Professional
          </div>
          <div className="font-mono text-text-secondary text-xs mt-1 tracking-wide">
            Build Quality &amp; System Transformation | CI/CD Automation &amp; Observability
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-panel-border pt-16">

          <div>
            <h3 className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-8 border-b border-panel-border pb-2">
              Capabilities
            </h3>

            <dl className="grid grid-cols-1 gap-6 font-mono text-sm leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="text-text-tertiary">Automation</dt>
                <dd className="text-text-primary sm:col-span-2">Build systems, CI/CD, rigorous quality gates</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="text-text-tertiary">Optimization</dt>
                <dd className="text-text-primary sm:col-span-2">Concurrency, bottleneck identification, architectural restructuring</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="text-text-tertiary">Traceability</dt>
                <dd className="text-text-primary sm:col-span-2">Linking functional requirements directly to tested artifacts</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="text-text-tertiary">Observability</dt>
                <dd className="text-text-primary sm:col-span-2">Centralized command planes, deterministic execution logging</dd>
              </div>
            </dl>
          </div>

          <div>
             <h3 className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-8 border-b border-panel-border pb-2">
              Operational Timeline
            </h3>

            <dl className="grid grid-cols-1 gap-8 font-mono text-sm">

               <div className="grid grid-cols-1 gap-2">
                 <dt className="flex justify-between items-baseline border-b border-panel-border/50 pb-2">
                   <strong className="text-amber-core uppercase">Turing</strong>
                   <span className="text-text-tertiary text-xs">Jan 2026 – Apr 2026</span>
                 </dt>
                 <dd className="text-text-primary">
                    Business Analyst - AI Evaluation. Evaluated generated outputs, structural AI workflows.
                 </dd>
               </div>

               <div className="grid grid-cols-1 gap-2">
                 <dt className="flex justify-between items-baseline border-b border-panel-border/50 pb-2">
                   <strong className="text-text-primary uppercase">Turing Enterprises Inc.</strong>
                   <span className="text-text-tertiary text-xs">Sep 2024 – Mar 2025</span>
                 </dt>
                 <dd className="text-text-primary">
                    LLM Engineer. Improved code generation efficiency +40%. Expanded datasets by 55%. Improved throughput +25% through optimization.
                 </dd>
               </div>

               <div className="grid grid-cols-1 gap-2">
                 <dt className="flex justify-between items-baseline border-b border-panel-border/50 pb-2">
                   <strong className="text-text-primary uppercase">Tata Electronics</strong>
                   <span className="text-text-tertiary text-xs">Jan 2024 – Sep 2024</span>
                 </dt>
                 <dd className="text-text-primary">
                    Graduate Eng Trainee. Built centralized monitoring, executed process RCA, reducing downtime.
                 </dd>
               </div>

            </dl>
          </div>

        </div>

      </div>
    </section>
  );
}
