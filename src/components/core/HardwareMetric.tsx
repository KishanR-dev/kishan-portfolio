import React from 'react';
import type { VerifiedMetric } from '@/types';

interface HardwareMetricProps {
  metric: VerifiedMetric;
  className?: string;
}

export function HardwareMetric({ metric, className = '' }: HardwareMetricProps) {
  return (
    <dl className={`flex flex-col border-l border-panel-border pl-4 ${className}`}>
      <dt className="text-text-secondary text-sm font-sans tracking-wide uppercase mb-1">
        {metric.label}
      </dt>
      <dd className="font-mono text-2xl tabular-nums text-amber-core tracking-tight flex items-baseline gap-1">
        {metric.value}
        <span className="text-text-tertiary text-sm">{metric.unit}</span>
      </dd>
    </dl>
  );
}
