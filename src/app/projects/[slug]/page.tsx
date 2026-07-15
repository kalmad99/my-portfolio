import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import { ArchitectureDiagram } from "@/components/diagrams";
import { StackTag } from "@/components/StackTag";
import {
  getFlagshipSlugs,
  getProjectBySlug,
} from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getFlagshipSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || project.tier !== "flagship") {
    return { title: "Project" };
  }
  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.tier !== "flagship" || !project.detail) {
    notFound();
  }

  const { detail } = project;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <FadeInSection>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          All projects
        </Link>

        <header className="mt-8 max-w-2xl">
          {project.company && (
            <p className="font-mono text-xs text-muted">{project.company}</p>
          )}
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {project.oneLiner}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            <span className="font-medium text-foreground">Role — </span>
            {project.role}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <StackTag key={tech} label={tech} />
            ))}
          </div>
          {project.links && project.links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
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
        </header>
      </FadeInSection>

      <FadeInSection className="mt-14">
        <article className="max-w-2xl space-y-10">
          <section>
            <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
              Problem
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">
              {detail.problem}
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
              My role
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">
              {detail.myRole}
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
              Architecture
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">
              {detail.architecture}
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
              Technical highlights
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-foreground/90">
              {detail.technicalHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {project.footnote && (
            <p className="border-t border-border pt-6 text-sm leading-relaxed text-muted italic">
              {project.footnote}
            </p>
          )}

          {project.diagram ? (
            <section className="rounded-lg border border-border bg-card px-6 py-10">
              <p className="mb-6 font-mono text-xs uppercase tracking-wider text-muted">
                Simplified flow
              </p>
              <ArchitectureDiagram diagram={project.diagram} />
            </section>
          ) : project.image ? (
            <section className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="relative aspect-video w-full">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot or diagram`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 672px) 100vw, 672px"
                  priority
                />
              </div>
            </section>
          ) : (
            <section className="rounded-lg border border-dashed border-border bg-card px-5 py-10">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Diagram / screenshot
              </p>
              <p className="mt-2 text-sm text-muted">
                Space reserved for an architecture diagram or product screenshot.
              </p>
            </section>
          )}
        </article>
      </FadeInSection>
    </div>
  );
}
