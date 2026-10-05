import React from 'react';
import type { PresentationDataset } from '@/types';
import { HardwareMetric } from '../core/HardwareMetric';
import Link from 'next/link';

interface ProjectArticleProps {
  project: PresentationDataset;
  isDeepDive?: boolean;
}

export function ProjectArticle({ project, isDeepDive = false }: ProjectArticleProps) {
  const ArticleTag = isDeepDive ? 'main' : 'article';
  const headingClass = isDeepDive ? 'text-4xl' : 'text-2xl';

  return (
    <ArticleTag
      className={`relative h-full p-8 bg-surface-base/80 backdrop-blur @container transition-colors hover:bg-surface-elevated/50`}
    >
      <div className="flex flex-col gap-6">
        <header>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs uppercase text-amber-core tracking-widest">{project.id}</span>
            <div className="h-px bg-panel-border flex-grow" />
          </div>
          <h2 className={`font-sans font-medium text-text-primary ${headingClass} tracking-tight`}>
            {!isDeepDive ? (
              <Link href={`/projects/${project.id.toLowerCase()}`} className="hover:text-amber-core transition-colors before:absolute before:inset-0">
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h2>
        </header>

        <p className="text-text-secondary leading-relaxed max-w-prose">
          {project.synopsis}
        </p>

        {project.metrics.length > 0 && (
          <div className="grid grid-cols-1 @sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-panel-border/50">
            {project.metrics.map((metric, idx) => (
              <HardwareMetric key={idx} metric={metric} />
            ))}
          </div>
        )}

        {isDeepDive && project.artifacts.length > 0 && (
          <div className="pt-6 border-t border-panel-border/50 mt-4">
            <h3 className="font-mono text-xs text-text-tertiary uppercase mb-4 tracking-widest">Validated Artifacts</h3>
            <ul className="flex flex-col gap-2 font-mono text-sm text-text-secondary">
              {project.artifacts.map((artifact, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-amber-core/50">→</span>
                  {artifact}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ArticleTag>
  );
}
