import { PresentationDataset } from '@/types';
import rawEvidence from '../sources/evidence.json';

export async function getPortfolioDataset(): Promise<PresentationDataset[]> {
  const dataset = rawEvidence as unknown as Omit<PresentationDataset, 'formattedGridSpan'>[];

  return dataset.map((project, index) => {
    // Strip metrics without verification source
    const validatedMetrics = (project.metrics || []).filter((m) =>
      typeof m.verificationSource === 'string' && m.verificationSource.trim() !== ''
    );

    return {
      id: project.id,
      title: project.title,
      synopsis: project.synopsis,
      metrics: validatedMetrics,
      artifacts: project.artifacts || [],
      // formattedGridSpan creates some visual rhythm based on metric count/position
      formattedGridSpan: (index % 2 === 0) ? 2 : 1,
    } as PresentationDataset;
  });
}

export async function getProjectBySlug(slug: string): Promise<PresentationDataset | null> {
  const dataset = await getPortfolioDataset();
  return dataset.find(p => p.id.toLowerCase() === slug.toLowerCase()) || null;
}
