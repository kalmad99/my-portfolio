"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { StackTag } from "@/components/StackTag";

interface ProjectCardProps {
  project: Project;
  /** When true, show full standard-tier writeup (role, highlights) */
  expanded?: boolean;
  /** Override href — flagship cards link to detail pages */
  href?: string;
}

export function ProjectCard({ project, expanded = false, href }: ProjectCardProps) {
  const linkHref = href ?? (project.tier === "flagship" ? `/projects/${project.slug}` : undefined);
  const isLink = Boolean(linkHref);
  const showLinks = Boolean(project.links?.length) && (expanded || project.tier === "flagship");

  const titleBlock = (
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        {project.company && (
          <p className="mt-0.5 font-mono text-xs text-muted">{project.company}</p>
        )}
      </div>
      {isLink && (
        <ArrowUpRight
          className="mt-0.5 h-4 w-4 shrink-0 text-muted group-hover:text-accent transition-colors"
          aria-hidden
        />
      )}
    </div>
  );

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="group overflow-hidden rounded-lg border border-border bg-card shadow-none transition-colors hover:border-accent/40 hover:shadow-sm"
    >
      {project.image &&
        (isLink && linkHref ? (
          <Link href={linkHref} className="relative block aspect-video border-b border-border bg-border/30">
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </Link>
        ) : (
          <div className="relative aspect-video border-b border-border bg-border/30">
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        ))}

      <div className="p-5">
        {isLink && linkHref ? (
          <Link href={linkHref} className="block">
            {titleBlock}
          </Link>
        ) : (
          titleBlock
        )}

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {expanded ? project.description : project.oneLiner}
        </p>

        {expanded && (
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            <span className="font-medium text-foreground">Role — </span>
            {project.role}
          </p>
        )}

        {expanded && project.highlights && project.highlights.length > 0 && (
          <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {project.footnote && expanded && (
          <p className="mt-3 text-xs leading-relaxed text-muted italic">{project.footnote}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <StackTag key={tech} label={tech} />
          ))}
        </div>

        {showLinks && project.links && (
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
      </div>
    </motion.div>
  );
}
