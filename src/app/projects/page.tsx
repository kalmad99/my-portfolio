import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteChips } from "@/components/SiteChips";
import {
  getBriefProjects,
  getFlagshipProjects,
  getStandardProjects,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Flagship case studies, standard project writeups, and brief mentions — fintech, platforms, and product work.",
};

export default function ProjectsPage() {
  const flagships = getFlagshipProjects();
  const standards = getStandardProjects();
  const briefs = getBriefProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <FadeInSection>
        <header className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Projects
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Deep case studies first, then standard writeups, then lighter early-career
            and supporting mentions. No commit counts or contributor stats — just the
            work and my role in it.
          </p>
        </header>
      </FadeInSection>

      <FadeInSection className="mt-14">
        <section>
          <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
            Case studies
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Full writeups with dedicated pages — problem, role, architecture, and
            technical highlights.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {flagships.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </FadeInSection>

      <FadeInSection className="mt-16">
        <section>
          <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
            Standard projects
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Shorter writeups — what it is, my role, stack, and a couple of notable
            details.
          </p>
          <div className="mt-6 grid gap-4">
            {standards.map((project) => (
              <ProjectCard key={project.slug} project={project} expanded />
            ))}
          </div>
        </section>
      </FadeInSection>

      <FadeInSection className="mt-16">
        <section>
          <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
            Brief mentions
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Early-career and supporting work — kept light on purpose.
          </p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {briefs.map((project) => (
              <li key={project.slug} className="py-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.company && (
                    <span className="font-mono text-xs text-muted">
                      {project.company}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                {project.sites && project.sites.length > 0 && (
                  <SiteChips sites={project.sites} />
                )}
                {project.links && project.links.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href + link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      </FadeInSection>
    </div>
  );
}
