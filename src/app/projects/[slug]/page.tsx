import type { Metadata } from "next";
import { getProjectBySlug, getPortfolioDataset } from "@/data/adapters";
import { ProjectArticle } from "@/components/project/ProjectArticle";
import { BuildCaseStudy } from "@/components/project/BuildCaseStudy";
import { QualityCaseStudy } from "@/components/project/QualityCaseStudy";
import { TransformCaseStudy } from "@/components/project/TransformCaseStudy";
import { TraceCaseStudy } from "@/components/project/TraceCaseStudy";
import { ObserveCaseStudy } from "@/components/project/ObserveCaseStudy";
import { GlobalFooter } from "@/components/core/GlobalFooter";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const projects = await getPortfolioDataset();
  return projects.map((p) => ({
    slug: p.id.toLowerCase(),
  }));
}


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const dataset = await getPortfolioDataset();
  const project = dataset.find(p => p.id.toLowerCase() === params.slug.toLowerCase());
  
  if (!project) {
    return {
      title: 'Project Not Found | Kishan R'
    };
  }

  return {
    title: `${project.title} | Kishan R`,
    description: project.synopsis,
    alternates: {
      canonical: `/projects/${params.slug.toLowerCase()}`,
    },
    openGraph: {
      title: `${project.title} | Transformation Engineering`,
      description: project.synopsis,
    }
  };
}

export default async function ProjectDeepDive({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  let content;
  if (project.id === 'BUILD') content = <BuildCaseStudy project={project} />;
  else if (project.id === 'QUALITY') content = <QualityCaseStudy project={project} />;
  else if (project.id === 'TRANSFORM') content = <TransformCaseStudy project={project} />;
  else if (project.id === 'TRACE') content = <TraceCaseStudy project={project} />;
  else if (project.id === 'OBSERVE') content = <ObserveCaseStudy project={project} />;
  else {
    content = (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <nav className="mb-12">
          <Link href="/" className="font-mono text-sm text-text-secondary hover:text-amber-core transition-colors flex items-center gap-2">
            ← Back to Portfolio
          </Link>
        </nav>
        <div className="ring-1 ring-panel-border rounded-sm overflow-hidden text-left">
           <ProjectArticle project={project} isDeepDive={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {content}
      </main>
      <GlobalFooter />
    </div>
  );
}
