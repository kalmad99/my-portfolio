import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        The page you&apos;re looking for may have moved or never existed.
        Try heading back home or browsing the projects.
      </p>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          Back to home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          View projects
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
