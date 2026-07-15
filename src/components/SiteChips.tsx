"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { SiteChip as SiteChipData } from "@/data/projects";

interface SiteChipsProps {
  sites: SiteChipData[];
}

function ChipThumb({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <span className="relative h-[50px] w-[80px] shrink-0 overflow-hidden rounded border border-border bg-border/40">
      {!failed && (
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="80px"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}

function SiteChipItem({ site }: { site: SiteChipData }) {
  const isPlaceholderLink = !site.href || site.href === "#";

  const content = (
    <>
      <ChipThumb src={site.image} />
      <span className="inline-flex items-center gap-1 font-medium">
        {site.label}
        {!isPlaceholderLink && (
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        )}
      </span>
    </>
  );

  if (isPlaceholderLink) {
    return (
      <span className="inline-flex items-center gap-2.5 text-sm text-muted">
        {content}
      </span>
    );
  }

  return (
    <a
      href={site.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors"
    >
      {content}
    </a>
  );
}

export function SiteChips({ sites }: SiteChipsProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
      {sites.map((site) => (
        <SiteChipItem key={site.label} site={site} />
      ))}
    </div>
  );
}
