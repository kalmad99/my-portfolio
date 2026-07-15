import type { Metadata } from "next";
import { FadeInSection } from "@/components/FadeInSection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Background, approach, and interests — ${site.name}, software engineer based in ${site.location}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <FadeInSection>
        <header className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            About
          </h1>
          <p className="mt-2 font-mono text-xs text-muted">{site.location}</p>
        </header>
      </FadeInSection>

      <FadeInSection className="mt-10">
        <div className="max-w-2xl space-y-5">
          {site.about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base leading-relaxed text-foreground/90"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
