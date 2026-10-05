import { getPortfolioDataset } from "@/data/adapters";
import { ProjectArticle } from "@/components/project/ProjectArticle";
import { SystemsInMotionHero } from "@/components/home/SystemsInMotionHero";
import { NavigationSpine } from "@/components/home/NavigationSpine";
import { IdentityManifest } from "@/components/home/IdentityManifest";
import { GlobalFooter } from "@/components/core/GlobalFooter";

export default async function Home() {
  const projects = await getPortfolioDataset();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex w-full flex-grow">
        <NavigationSpine />

        <main className="flex-grow w-full md:w-[calc(100%-16rem)]">
          <h1 className="sr-only">Kishan Ramesha | Engineering Professional Portfolio</h1>
          <SystemsInMotionHero />

          <div className="max-w-5xl mx-auto px-4 sm:px-8 py-24 flex flex-col gap-32">
            {projects.map((project) => (
              <section key={project.id} id={project.id.toLowerCase()} className="scroll-mt-24">
                <ProjectArticle project={project} />
              </section>
            ))}
          </div>

          <IdentityManifest />
        </main>
      </div>

      <GlobalFooter />
    </div>
  );
}
