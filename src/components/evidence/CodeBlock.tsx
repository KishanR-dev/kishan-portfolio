import React from 'react';

interface CodeBlockProps {
  language?: string;
  code: string;
  diff?: boolean;
}

export function CodeBlock({ language = 'bash', code, diff = false }: CodeBlockProps) {
  const lines = code.trim().split('\n');

  return (
    <div className="border border-panel-border bg-surface-elevated overflow-hidden font-mono text-sm leading-relaxed my-6 rounded-sm">
      <div className="bg-panel-border/50 px-4 py-2 border-b border-panel-border flex justify-between items-center text-xs text-text-tertiary">
        <span>{language.toUpperCase()}</span>
      </div>
      <div className="p-4 overflow-x-auto">
        {lines.map((line, i) => {
          let lineClass = "text-text-primary";
          if (diff) {
            if (line.startsWith('+')) lineClass = "text-amber-core bg-amber-core/10 rounded-sm px-1";
            else if (line.startsWith('-')) lineClass = "text-text-tertiary line-through";
            else lineClass = "text-text-secondary";
          }
          return (
            <div key={i} className={`whitespace-pre ${lineClass}`}>
              {line}
            </div>
          );
        })}
      </div>
    </div>
  );
}
