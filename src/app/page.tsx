import { FadeInSection } from "@/components/FadeInSection";
import { ProjectCard } from "@/components/ProjectCard";
import { TextLink } from "@/components/TextLink";
import { StackGroups } from "@/components/StackGroups";
import { getFlagshipProjects } from "@/data/projects";
import { site } from "@/data/site";

export default function HomePage() {
  const flagships = getFlagshipProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <FadeInSection>
        <section className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            {site.title} · {site.location}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl leading-snug">
            {site.homeIntro.heading}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {site.homeIntro.body}
          </p>
        </section>
      </FadeInSection>

      <FadeInSection className="mt-16">
        <section>
          <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
            Stack
          </h2>
          <div className="mt-6">
            <StackGroups />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection className="mt-16">
        <section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
              Selected work
            </h2>
            <TextLink href="/projects">All projects</TextLink>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {flagships.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <p className="mt-8">
            <TextLink href="/projects">View the full project list</TextLink>
          </p>
        </section>
      </FadeInSection>
    </div>
  );
}
