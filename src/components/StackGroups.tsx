import { Boxes, Code2, Server, Wrench } from "lucide-react";
import { site } from "@/data/site";
import { StackTag } from "@/components/StackTag";

const groups = [
  { key: "backend" as const, label: "Backend", icon: Server },
  { key: "frontend" as const, label: "Frontend", icon: Code2 },
  { key: "infra" as const, label: "Infra", icon: Boxes },
  { key: "tools" as const, label: "Tools", icon: Wrench },
];

export function StackGroups() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {groups.map(({ key, label, icon: Icon }) => (
        <div key={key}>
          <div className="mb-3 flex items-center gap-2">
            <Icon className="h-4 w-4 text-accent" aria-hidden />
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
              {label}
            </h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {site.stack[key].map((tech) => (
              <StackTag key={tech} label={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
