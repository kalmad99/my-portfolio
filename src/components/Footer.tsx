import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <li>
            <a
              href={`mailto:${site.contact.email}`}
              className="hover:text-accent transition-colors"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={site.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
