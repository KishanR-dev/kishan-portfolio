export type ProjectIdentifier = 'BUILD' | 'QUALITY' | 'TRANSFORM' | 'TRACE' | 'OBSERVE';
export type MetricUnit = 's' | 'ms' | 'count' | '%' | 'tests' | '';

// Raw data standard
export interface VerifiedMetric {
  label: string;
  value: number;
  previousValue?: number;
  exactString?: string;
  unit: MetricUnit;
  verificationSource: string;
}

export interface CanonicalEvidence {
  id: ProjectIdentifier;
  title: string;
  synopsis: string;
  metrics: VerifiedMetric[];
  artifacts: string[]; // Strict paths to logs/traces
}

// Ingested Data Adapter Output
export interface PresentationDataset extends CanonicalEvidence {
  formattedGridSpan: number; // Pure layout metadata parsed safely on the server
}
