import React from 'react';

export function GlobalFooter() {
  return (
    <footer className="w-full bg-void border-t border-panel-border text-text-primary px-4 md:px-8 py-16">
       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

         <div className="flex flex-col gap-4 max-w-sm">
           <div className="font-mono text-xl uppercase tracking-tighter text-amber-core">
             SYSTEM ONLINE
           </div>
           <p className="font-sans text-text-secondary leading-relaxed text-sm">
             A predictable, observable, and quality-gated delivery portfolio. Built strictly on verified evidence.
           </p>
         </div>

         <nav aria-label="Professional Links" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 font-mono text-sm uppercase tracking-widest text-text-tertiary">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-core hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-core transition-colors"
            >
              Resume_PDF
            </a>

            <a
              href="https://github.com/KishanR-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-core hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-core transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/k4nr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-core hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-core transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="mailto:kishanramesha@outlook.com"
              className="hover:text-amber-core hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-core transition-colors"
            >
              Contact
            </a>
         </nav>

       </div>
    </footer>
  );
}
